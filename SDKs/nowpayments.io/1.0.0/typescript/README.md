# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nowpayments.io/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/nowpayments.io/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetAllTransfersRequest,
  GetAllTransfersResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAllTransfersRequest = {
  id: "111",
  limit: "10",
  offset: "0",
  order: "ASC",
  status: "CREATED",
};

sdk.billingSubPartnerAPI.getAllTransfers(req).then((res: GetAllTransfersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### billingSubPartnerAPI

* `getAllTransfers` - Get all transfers
* `getSubPartnerBalance` - Get sub-partner balance
* `getSubPartners` - Get sub-partners
* `getTransfer` - Get transfer

### paymentsAPI

* `getEstimatedPrice` - Get estimated price
* `getListOfPayments` - Get list of payments
* `getPaymentStatus` - Get payment status
* `getTheMinimumPaymentAmount` - Get the minimum payment amount
* `getUpdatePaymentEstimate` - Get/Update payment estimate

### payoutsAPI

* `verifyPayout` - Verify payout

### recurringPaymentsAPIEmailSubscriptionsFeature

* `deleteRecurringPayment` - Delete recurring payment
* `getManyPlans` - Get many plans
* `getOnePlan` - Get one plan
* `updatePlan` - Update plan
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

