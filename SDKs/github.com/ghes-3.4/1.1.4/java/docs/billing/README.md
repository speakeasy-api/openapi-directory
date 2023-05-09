# billing

## Overview

Monitor charges and usage from Actions and Packages.

### Available Operations

* [billingGetGithubAdvancedSecurityBillingGhe](#billinggetgithubadvancedsecuritybillingghe) - Get GitHub Advanced Security active committers for an enterprise
* [billingGetGithubAdvancedSecurityBillingOrg](#billinggetgithubadvancedsecuritybillingorg) - Get GitHub Advanced Security active committers for an organization

## billingGetGithubAdvancedSecurityBillingGhe

Gets the GitHub Advanced Security active committers for an enterprise per repository.

Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of active_users for each repository.

The total number of repositories with committer information is tracked by the `total_count` field.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillingGetGithubAdvancedSecurityBillingGheRequest;
import org.openapis.openapi.models.operations.BillingGetGithubAdvancedSecurityBillingGheResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingGetGithubAdvancedSecurityBillingGheRequest req = new BillingGetGithubAdvancedSecurityBillingGheRequest("doloribus") {{
                page = 281730L;
                perPage = 703495L;
            }};            

            BillingGetGithubAdvancedSecurityBillingGheResponse res = sdk.billing.billingGetGithubAdvancedSecurityBillingGhe(req);

            if (res.advancedSecurityActiveCommitters != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## billingGetGithubAdvancedSecurityBillingOrg

Gets the GitHub Advanced Security active committers for an organization per repository.

Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of advanced_security_committers for each repository.

If this organization defers to an enterprise for billing, the `total_advanced_security_committers` returned from the organization API may include some users that are in more than one organization, so they will only consume a single Advanced Security seat at the enterprise level.

The total number of repositories with committer information is tracked by the `total_count` field.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillingGetGithubAdvancedSecurityBillingOrgRequest;
import org.openapis.openapi.models.operations.BillingGetGithubAdvancedSecurityBillingOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingGetGithubAdvancedSecurityBillingOrgRequest req = new BillingGetGithubAdvancedSecurityBillingOrgRequest("cupiditate") {{
                page = 181631L;
                perPage = 63955L;
            }};            

            BillingGetGithubAdvancedSecurityBillingOrgResponse res = sdk.billing.billingGetGithubAdvancedSecurityBillingOrg(req);

            if (res.advancedSecurityActiveCommitters != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
