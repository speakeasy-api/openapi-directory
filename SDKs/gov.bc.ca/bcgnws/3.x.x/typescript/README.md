# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/bcgnws/3.x.x/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/bcgnws/3.x.x/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetFeaturesFeatureIdRequest,
  GetFeaturesFeatureIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetFeaturesFeatureIdRequest = {
  featureId: 548814,
};

sdk.feature.getFeaturesFeatureId(req).then((res: GetFeaturesFeatureIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### feature

* `getFeaturesFeatureId` - Get a feature by its featureId

### featureTaxonomy

* `getFeatureCategories` - Get all feature categories
* `getFeatureClasses` - Get all feature classes
* `getFeatureTypes` - Get all feature types

### name

* `getNamesChanges` - Search for names with metadata changes in a given period
* `getNamesDecisionsRecent` - Search for names affected by recent naming decision
* `getNamesDecisionsYear` - Search for names affected by naming decisions in a given year
* `getNamesInside` - Search in a geographic area
* `getNamesNear` - Search near to a geographic point
* `getNamesNotOfficialSearch` - Search by name, limit to unofficial names only
* `getNamesOfficialSearch` - Search by name, limit to official names only
* `getNamesSearch` - Search by name
* `getNamesNameIdOutputFormat` - Get a name by its nameId

### nameAuthority

* `getNameAuthorities` - Get all name authorities

### search

* `getNamesChanges` - Search for names with metadata changes in a given period
* `getNamesDecisionsRecent` - Search for names affected by recent naming decision
* `getNamesDecisionsYear` - Search for names affected by naming decisions in a given year
* `getNamesInside` - Search in a geographic area
* `getNamesNear` - Search near to a geographic point
* `getNamesNotOfficialSearch` - Search by name, limit to unofficial names only
* `getNamesOfficialSearch` - Search by name, limit to official names only
* `getNamesSearch` - Search by name
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

