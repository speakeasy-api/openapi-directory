# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/mozilla.com/kinto/1.22/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/mozilla.com/kinto/1.22/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAttachmentRequest,
  CreateAttachmentResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateAttachmentRequest = {
  bucketId: "corrupti",
  collectionId: "provident",
  id: "distinctio",
};

sdk.attachment.createAttachment(req).then((res: CreateAttachmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### attachment

* `createAttachment`
* `deleteAttachment`

### batch

* `batch`

### buckets

* `getBucket`
* `getBuckets`

### changess

* `getChangess`

### collectionChangeset

* `getCollectionChangeset`

### collections

* `getCollection`
* `getCollections`

### groups

* `getGroup`
* `getGroups`

### records

* `getRecord`
* `getRecords`

### utilities

* `heartbeat`
* `lbheartbeat`
* `version`
* `contribute`
* `getOpenapiSpec`
* `serverInfo`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

