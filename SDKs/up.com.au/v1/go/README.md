# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/up.com.au/v1/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.GetAccounts(ctx, operations.GetAccountsRequest{
        FilterAccountType: shared.AccountTypeEnumEnumTransactional.ToPointer(),
        FilterOwnershipType: shared.OwnershipTypeEnumEnumJoint.ToPointer(),
        PageSize: sdk.Int64(715190),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [GetAccounts](docs/accounts/README.md#getaccounts) - List accounts
* [GetAccountsID](docs/accounts/README.md#getaccountsid) - Retrieve account

### [Categories](docs/categories/README.md)

* [GetCategories](docs/categories/README.md#getcategories) - List categories
* [GetCategoriesID](docs/categories/README.md#getcategoriesid) - Retrieve category
* [PatchTransactionsTransactionIDRelationshipsCategory](docs/categories/README.md#patchtransactionstransactionidrelationshipscategory) - Categorize transaction

### [Tags](docs/tags/README.md)

* [DeleteTransactionsTransactionIDRelationshipsTags](docs/tags/README.md#deletetransactionstransactionidrelationshipstags) - Remove tags from transaction
* [GetTags](docs/tags/README.md#gettags) - List tags
* [PostTransactionsTransactionIDRelationshipsTags](docs/tags/README.md#posttransactionstransactionidrelationshipstags) - Add tags to transaction

### [Transactions](docs/transactions/README.md)

* [GetAccountsAccountIDTransactions](docs/transactions/README.md#getaccountsaccountidtransactions) - List transactions by account
* [GetTransactions](docs/transactions/README.md#gettransactions) - List transactions
* [GetTransactionsID](docs/transactions/README.md#gettransactionsid) - Retrieve transaction

### [UtilityEndpoints](docs/utilityendpoints/README.md)

* [GetUtilPing](docs/utilityendpoints/README.md#getutilping) - Ping

### [Webhooks](docs/webhooks/README.md)

* [DeleteWebhooksID](docs/webhooks/README.md#deletewebhooksid) - Delete webhook
* [GetWebhooks](docs/webhooks/README.md#getwebhooks) - List webhooks
* [GetWebhooksID](docs/webhooks/README.md#getwebhooksid) - Retrieve webhook
* [GetWebhooksWebhookIDLogs](docs/webhooks/README.md#getwebhookswebhookidlogs) - List webhook logs
* [PostWebhooks](docs/webhooks/README.md#postwebhooks) - Create webhook
* [PostWebhooksWebhookIDPing](docs/webhooks/README.md#postwebhookswebhookidping) - Ping webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
