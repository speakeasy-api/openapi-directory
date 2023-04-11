# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/safebrowsing/v4/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/safebrowsing/v4/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  SafebrowsingEncodedFullHashesGetRequest,
  SafebrowsingEncodedFullHashesGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SafebrowsingEncodedFullHashesGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  clientId: "unde",
  clientVersion: "nulla",
  encodedRequest: "corrupti",
  fields: "illum",
  key: "vel",
  oauthToken: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.encodedFullHashes.safebrowsingEncodedFullHashesGet(req).then((res: SafebrowsingEncodedFullHashesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### encodedFullHashes

* `safebrowsingEncodedFullHashesGet`

### encodedUpdates

* `safebrowsingEncodedUpdatesGet`

### fullHashes

* `safebrowsingFullHashesFind` - Finds the full hashes that match the requested hash prefixes.

### threatHits

* `safebrowsingThreatHitsCreate` - Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

### threatListUpdates

* `safebrowsingThreatListUpdatesFetch` - Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

### threatLists

* `safebrowsingThreatListsList` - Lists the Safe Browsing threat lists available for download.

### threatMatches

* `safebrowsingThreatMatchesFind` - Finds the threat entries that match the Safe Browsing lists.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

