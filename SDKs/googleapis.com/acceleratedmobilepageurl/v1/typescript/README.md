# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/acceleratedmobilepageurl/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/acceleratedmobilepageurl/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AcceleratedmobilepageurlAmpUrlsBatchGetRequest,
  AcceleratedmobilepageurlAmpUrlsBatchGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  BatchGetAmpUrlsRequestLookupStrategyEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AcceleratedmobilepageurlAmpUrlsBatchGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  batchGetAmpUrlsRequest: {
    lookupStrategy: BatchGetAmpUrlsRequestLookupStrategyEnum.InIndexDoc,
    urls: [
      "quibusdam",
      "unde",
      "nulla",
    ],
  },
  accessToken: "corrupti",
  alt: AltEnum.Proto,
  callback: "vel",
  fields: "error",
  key: "deserunt",
  oauthToken: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.ampUrls.acceleratedmobilepageurlAmpUrlsBatchGet(req).then((res: AcceleratedmobilepageurlAmpUrlsBatchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### ampUrls

* `acceleratedmobilepageurlAmpUrlsBatchGet` - Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

