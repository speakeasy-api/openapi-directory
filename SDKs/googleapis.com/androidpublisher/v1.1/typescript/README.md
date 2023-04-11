# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/androidpublisher/v1.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/androidpublisher/v1.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AndroidpublisherInapppurchasesGetRequest,
  AndroidpublisherInapppurchasesGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AndroidpublisherInapppurchasesGetRequest = {
  alt: AltEnum.Json,
  fields: "corrupti",
  key: "provident",
  oauthToken: "distinctio",
  packageName: "quibusdam",
  prettyPrint: false,
  productId: "unde",
  quotaUser: "nulla",
  token: "corrupti",
  userIp: "illum",
};

sdk.inapppurchases.androidpublisherInapppurchasesGet(req).then((res: AndroidpublisherInapppurchasesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### inapppurchases

* `androidpublisherInapppurchasesGet` - Checks the purchase and consumption status of an inapp item.

### purchases

* `androidpublisherPurchasesCancel` - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* `androidpublisherPurchasesGet` - Checks whether a user's subscription purchase is valid and returns its expiry time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

