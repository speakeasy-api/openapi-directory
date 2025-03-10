# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ntropy.network/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ntropy.network/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetABatchOfConsumerTransactionClassificationResultsRequest,
  GetABatchOfConsumerTransactionClassificationResultsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetABatchOfConsumerTransactionClassificationResultsRequest = {
  id: "247ee045-3d04-4b3c-872b-a9160b810f33",
};

sdk.batch.getABatchOfConsumerTransactionClassificationResults(req).then((res: GetABatchOfConsumerTransactionClassificationResultsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### batch

* `getABatchOfConsumerTransactionClassificationResults` - Get a batch of consumer transaction classification results.

### batch1

* `getABatchOfBusinessTransactionClassificationResults` - Get a batch of business transaction classification results.

### business

* `getABatchOfBusinessTransactionClassificationResults` - Get a batch of business transaction classification results.

### classifier

* `getABatchOfBusinessTransactionClassificationResults` - Get a batch of business transaction classification results.
* `getABatchOfConsumerTransactionClassificationResults` - Get a batch of consumer transaction classification results.

### consumer

* `getABatchOfConsumerTransactionClassificationResults` - Get a batch of consumer transaction classification results.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

