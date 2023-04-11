# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/pressassociation.io/2.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/pressassociation.io/2.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetAssetRequest,
  GetAssetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAssetRequest = {
  aliases: false,
  assetId: "corrupti",
};

sdk.asset.getAsset(req).then((res: GetAssetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### asset

* `getAsset` - Asset Detail
* `getAssetContributors` - Asset Contributors
* `listAssets` - Asset Collection

### catalogue

* `getCatalogue` - Catalogue Detail
* `getCatalogueAsset` - Catalogue Asset Collection
* `getCatalogueAssetDetail` - Catalogue Asset Detail
* `listCatalogues` - Catalogue Collection

### channel

* `getChannel` - Channel Detail
* `listChannels` - Channel Collection

### contributor

* `getContributor` - Contributor Detail
* `listContributor` - Contributor Collection

### feature

* `getFeature` - Feature Detail
* `listFeatureTypes` - Feature Type Collection
* `listFeatures` - Feature Collection

### platform

* `getPlatform` - Platform Detail
* `listPlatformRegions` - Platform Region Collection
* `listPlatforms` - Platform Collection

### schedule

* `listSchedule` - Schedule Collection
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

