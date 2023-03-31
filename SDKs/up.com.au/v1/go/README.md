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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    req := operations.GetAccountsRequest{
        FilterAccountType: "TRANSACTIONAL",
        FilterOwnershipType: "JOINT",
        PageSize: 715190,
    }

    ctx := context.Background()
    res, err := s.Accounts.GetAccounts(ctx, req)
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


### Accounts

* `GetAccounts` - List accounts
* `GetAccountsID` - Retrieve account

### Categories

* `GetCategories` - List categories
* `GetCategoriesID` - Retrieve category
* `PatchTransactionsTransactionIDRelationshipsCategory` - Categorize transaction

### Tags

* `DeleteTransactionsTransactionIDRelationshipsTags` - Remove tags from transaction
* `GetTags` - List tags
* `PostTransactionsTransactionIDRelationshipsTags` - Add tags to transaction

### Transactions

* `GetAccountsAccountIDTransactions` - List transactions by account
* `GetTransactions` - List transactions
* `GetTransactionsID` - Retrieve transaction

### UtilityEndpoints

* `GetUtilPing` - Ping

### Webhooks

* `DeleteWebhooksID` - Delete webhook
* `GetWebhooks` - List webhooks
* `GetWebhooksID` - Retrieve webhook
* `GetWebhooksWebhookIDLogs` - List webhook logs
* `PostWebhooks` - Create webhook
* `PostWebhooksWebhookIDPing` - Ping webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
