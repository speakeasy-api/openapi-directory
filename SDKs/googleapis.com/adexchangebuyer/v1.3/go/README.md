# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/adexchangebuyer/v1.3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AdexchangebuyerAccountsGetRequest{
        Alt: "json",
        Fields: "corrupti",
        ID: 592845,
        Key: "distinctio",
        OauthToken: "quibusdam",
        PrettyPrint: false,
        QuotaUser: "unde",
        UserIP: "nulla",
    }

    ctx := context.Background()
    res, err := s.Accounts.AdexchangebuyerAccountsGet(ctx, req, operations.AdexchangebuyerAccountsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Accounts

* `AdexchangebuyerAccountsGet` - Gets one account by ID.
* `AdexchangebuyerAccountsList` - Retrieves the authenticated user's list of accounts.
* `AdexchangebuyerAccountsPatch` - Updates an existing account. This method supports patch semantics.
* `AdexchangebuyerAccountsUpdate` - Updates an existing account.

### BillingInfo

* `AdexchangebuyerBillingInfoGet` - Returns the billing information for one account specified by account ID.
* `AdexchangebuyerBillingInfoList` - Retrieves a list of billing information for all accounts of the authenticated user.

### Budget

* `AdexchangebuyerBudgetGet` - Returns the budget information for the adgroup specified by the accountId and billingId.
* `AdexchangebuyerBudgetPatch` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
* `AdexchangebuyerBudgetUpdate` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

### Creatives

* `AdexchangebuyerCreativesGet` - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* `AdexchangebuyerCreativesInsert` - Submit a new creative.
* `AdexchangebuyerCreativesList` - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

### DirectDeals

* `AdexchangebuyerDirectDealsGet` - Gets one direct deal by ID.
* `AdexchangebuyerDirectDealsList` - Retrieves the authenticated user's list of direct deals.

### PerformanceReport

* `AdexchangebuyerPerformanceReportList` - Retrieves the authenticated user's list of performance metrics.

### PretargetingConfig

* `AdexchangebuyerPretargetingConfigDelete` - Deletes an existing pretargeting config.
* `AdexchangebuyerPretargetingConfigGet` - Gets a specific pretargeting configuration
* `AdexchangebuyerPretargetingConfigInsert` - Inserts a new pretargeting configuration.
* `AdexchangebuyerPretargetingConfigList` - Retrieves a list of the authenticated user's pretargeting configurations.
* `AdexchangebuyerPretargetingConfigPatch` - Updates an existing pretargeting config. This method supports patch semantics.
* `AdexchangebuyerPretargetingConfigUpdate` - Updates an existing pretargeting config.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
