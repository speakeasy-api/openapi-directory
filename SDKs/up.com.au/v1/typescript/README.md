# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/up.com.au/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/up.com.au/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountsRequest,
  GetAccountsResponse
} from "openapi/dist/sdk/models/operations";
import {
  OwnershipTypeEnumEnum,
  AccountTypeEnumEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetAccountsRequest = {
  filterAccountType: AccountTypeEnumEnum.Transactional,
  filterOwnershipType: OwnershipTypeEnumEnum.Joint,
  pageSize: 715190,
};

sdk.accounts.getAccounts(req).then((res: GetAccountsResponse | AxiosError) => {
   // handle response
});
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

