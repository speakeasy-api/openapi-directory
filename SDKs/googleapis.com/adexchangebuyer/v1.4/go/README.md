# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/adexchangebuyer/v1.4/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.AdexchangebuyerAccountsGet(ctx, operations.AdexchangebuyerAccountsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("corrupti"),
        ID: 592845,
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        UserIP: sdk.String("nulla"),
    }, operations.AdexchangebuyerAccountsGetSecurity{
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


### [Accounts](docs/accounts/README.md)

* [AdexchangebuyerAccountsGet](docs/accounts/README.md#adexchangebuyeraccountsget) - Gets one account by ID.
* [AdexchangebuyerAccountsList](docs/accounts/README.md#adexchangebuyeraccountslist) - Retrieves the authenticated user's list of accounts.
* [AdexchangebuyerAccountsPatch](docs/accounts/README.md#adexchangebuyeraccountspatch) - Updates an existing account. This method supports patch semantics.
* [AdexchangebuyerAccountsUpdate](docs/accounts/README.md#adexchangebuyeraccountsupdate) - Updates an existing account.

### [BillingInfo](docs/billinginfo/README.md)

* [AdexchangebuyerBillingInfoGet](docs/billinginfo/README.md#adexchangebuyerbillinginfoget) - Returns the billing information for one account specified by account ID.
* [AdexchangebuyerBillingInfoList](docs/billinginfo/README.md#adexchangebuyerbillinginfolist) - Retrieves a list of billing information for all accounts of the authenticated user.

### [Budget](docs/budget/README.md)

* [AdexchangebuyerBudgetGet](docs/budget/README.md#adexchangebuyerbudgetget) - Returns the budget information for the adgroup specified by the accountId and billingId.
* [AdexchangebuyerBudgetPatch](docs/budget/README.md#adexchangebuyerbudgetpatch) - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
* [AdexchangebuyerBudgetUpdate](docs/budget/README.md#adexchangebuyerbudgetupdate) - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

### [Creatives](docs/creatives/README.md)

* [AdexchangebuyerCreativesAddDeal](docs/creatives/README.md#adexchangebuyercreativesadddeal) - Add a deal id association for the creative.
* [AdexchangebuyerCreativesGet](docs/creatives/README.md#adexchangebuyercreativesget) - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* [AdexchangebuyerCreativesInsert](docs/creatives/README.md#adexchangebuyercreativesinsert) - Submit a new creative.
* [AdexchangebuyerCreativesList](docs/creatives/README.md#adexchangebuyercreativeslist) - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
* [AdexchangebuyerCreativesListDeals](docs/creatives/README.md#adexchangebuyercreativeslistdeals) - Lists the external deal ids associated with the creative.
* [AdexchangebuyerCreativesRemoveDeal](docs/creatives/README.md#adexchangebuyercreativesremovedeal) - Remove a deal id associated with the creative.

### [Marketplacedeals](docs/marketplacedeals/README.md)

* [AdexchangebuyerMarketplacedealsDelete](docs/marketplacedeals/README.md#adexchangebuyermarketplacedealsdelete) - Delete the specified deals from the proposal
* [AdexchangebuyerMarketplacedealsInsert](docs/marketplacedeals/README.md#adexchangebuyermarketplacedealsinsert) - Add new deals for the specified proposal
* [AdexchangebuyerMarketplacedealsList](docs/marketplacedeals/README.md#adexchangebuyermarketplacedealslist) - List all the deals for a given proposal
* [AdexchangebuyerMarketplacedealsUpdate](docs/marketplacedeals/README.md#adexchangebuyermarketplacedealsupdate) - Replaces all the deals in the proposal with the passed in deals

### [Marketplacenotes](docs/marketplacenotes/README.md)

* [AdexchangebuyerMarketplacenotesInsert](docs/marketplacenotes/README.md#adexchangebuyermarketplacenotesinsert) - Add notes to the proposal
* [AdexchangebuyerMarketplacenotesList](docs/marketplacenotes/README.md#adexchangebuyermarketplacenoteslist) - Get all the notes associated with a proposal

### [Marketplaceprivateauction](docs/marketplaceprivateauction/README.md)

* [AdexchangebuyerMarketplaceprivateauctionUpdateproposal](docs/marketplaceprivateauction/README.md#adexchangebuyermarketplaceprivateauctionupdateproposal) - Update a given private auction proposal

### [PerformanceReport](docs/performancereport/README.md)

* [AdexchangebuyerPerformanceReportList](docs/performancereport/README.md#adexchangebuyerperformancereportlist) - Retrieves the authenticated user's list of performance metrics.

### [PretargetingConfig](docs/pretargetingconfig/README.md)

* [AdexchangebuyerPretargetingConfigDelete](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfigdelete) - Deletes an existing pretargeting config.
* [AdexchangebuyerPretargetingConfigGet](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfigget) - Gets a specific pretargeting configuration
* [AdexchangebuyerPretargetingConfigInsert](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfiginsert) - Inserts a new pretargeting configuration.
* [AdexchangebuyerPretargetingConfigList](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfiglist) - Retrieves a list of the authenticated user's pretargeting configurations.
* [AdexchangebuyerPretargetingConfigPatch](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfigpatch) - Updates an existing pretargeting config. This method supports patch semantics.
* [AdexchangebuyerPretargetingConfigUpdate](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfigupdate) - Updates an existing pretargeting config.

### [Products](docs/products/README.md)

* [AdexchangebuyerProductsGet](docs/products/README.md#adexchangebuyerproductsget) - Gets the requested product by id.
* [AdexchangebuyerProductsSearch](docs/products/README.md#adexchangebuyerproductssearch) - Gets the requested product.

### [Proposals](docs/proposals/README.md)

* [AdexchangebuyerProposalsGet](docs/proposals/README.md#adexchangebuyerproposalsget) - Get a proposal given its id
* [AdexchangebuyerProposalsInsert](docs/proposals/README.md#adexchangebuyerproposalsinsert) - Create the given list of proposals
* [AdexchangebuyerProposalsPatch](docs/proposals/README.md#adexchangebuyerproposalspatch) - Update the given proposal. This method supports patch semantics.
* [AdexchangebuyerProposalsSearch](docs/proposals/README.md#adexchangebuyerproposalssearch) - Search for proposals using pql query
* [AdexchangebuyerProposalsSetupcomplete](docs/proposals/README.md#adexchangebuyerproposalssetupcomplete) - Update the given proposal to indicate that setup has been completed.
* [AdexchangebuyerProposalsUpdate](docs/proposals/README.md#adexchangebuyerproposalsupdate) - Update the given proposal

### [Pubprofiles](docs/pubprofiles/README.md)

* [AdexchangebuyerPubprofilesList](docs/pubprofiles/README.md#adexchangebuyerpubprofileslist) - Gets the requested publisher profile(s) by publisher accountId.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
