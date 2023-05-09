# Billing

## Overview

Monitor charges and usage from Actions and Packages.

### Available Operations

* [BillingGetGithubAdvancedSecurityBillingGhe](#billinggetgithubadvancedsecuritybillingghe) - Get GitHub Advanced Security active committers for an enterprise
* [BillingGetGithubAdvancedSecurityBillingOrg](#billinggetgithubadvancedsecuritybillingorg) - Get GitHub Advanced Security active committers for an organization

## BillingGetGithubAdvancedSecurityBillingGhe

Gets the GitHub Advanced Security active committers for an enterprise per repository.

Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of active_users for each repository.

The total number of repositories with committer information is tracked by the `total_count` field.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Billing.BillingGetGithubAdvancedSecurityBillingGhe(ctx, operations.BillingGetGithubAdvancedSecurityBillingGheRequest{
        Enterprise: "ab",
        Page: sdk.Int64(241418),
        PerPage: sdk.Int64(683573),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvancedSecurityActiveCommitters != nil {
        // handle response
    }
}
```

## BillingGetGithubAdvancedSecurityBillingOrg

Gets the GitHub Advanced Security active committers for an organization per repository.

Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of advanced_security_committers for each repository.

If this organization defers to an enterprise for billing, the `total_advanced_security_committers` returned from the organization API may include some users that are in more than one organization, so they will only consume a single Advanced Security seat at the enterprise level.

The total number of repositories with committer information is tracked by the `total_count` field.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Billing.BillingGetGithubAdvancedSecurityBillingOrg(ctx, operations.BillingGetGithubAdvancedSecurityBillingOrgRequest{
        Org: "id",
        Page: sdk.Int64(380729),
        PerPage: sdk.Int64(246063),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvancedSecurityActiveCommitters != nil {
        // handle response
    }
}
```
