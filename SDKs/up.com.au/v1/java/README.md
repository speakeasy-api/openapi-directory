# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAccountsRequest;
import org.openapis.openapi.models.operations.GetAccountsResponse;
import org.openapis.openapi.models.shared.OwnershipTypeEnumEnum;
import org.openapis.openapi.models.shared.AccountTypeEnumEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetAccountsRequest req = new GetAccountsRequest() {{
                filterAccountType = "TRANSACTIONAL";
                filterOwnershipType = "JOINT";
                pageSize = 715190;
            }}            

            GetAccountsResponse res = sdk.accounts.getAccounts(req);

            if (res.listAccountsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `getAccounts` - List accounts
* `getAccountsId` - Retrieve account

### categories

* `getCategories` - List categories
* `getCategoriesId` - Retrieve category
* `patchTransactionsTransactionIdRelationshipsCategory` - Categorize transaction

### tags

* `deleteTransactionsTransactionIdRelationshipsTags` - Remove tags from transaction
* `getTags` - List tags
* `postTransactionsTransactionIdRelationshipsTags` - Add tags to transaction

### transactions

* `getAccountsAccountIdTransactions` - List transactions by account
* `getTransactions` - List transactions
* `getTransactionsId` - Retrieve transaction

### utilityEndpoints

* `getUtilPing` - Ping

### webhooks

* `deleteWebhooksId` - Delete webhook
* `getWebhooks` - List webhooks
* `getWebhooksId` - Retrieve webhook
* `getWebhooksWebhookIdLogs` - List webhook logs
* `postWebhooks` - Create webhook
* `postWebhooksWebhookIdPing` - Ping webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
