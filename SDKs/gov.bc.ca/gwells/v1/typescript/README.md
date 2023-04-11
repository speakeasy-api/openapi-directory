# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/gwells/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/gwells/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AquiferCodesDemandListRequest,
  AquiferCodesDemandListResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

const req: AquiferCodesDemandListRequest = {
  limit: 548814,
  offset: 592845,
};

sdk.aquiferCodes.aquiferCodesDemandList(req).then((res: AquiferCodesDemandListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### aquiferCodes

* `aquiferCodesDemandList` - return a list of aquifer demand codes
* `aquiferCodesMaterialsList` - return a list of aquifer material codes
* `aquiferCodesProductivityList` - return a list of aquifer productivity codes
* `aquiferCodesQualityConcernsList` - return a list of quality concern codes
* `aquiferCodesSubtypesList` - return a list of aquifer subtype codes
* `aquiferCodesVulnerabilityList` - return a list of aquifer vulnerability codes
* `aquiferCodesWaterUseList` - return a list of water use codes

### aquifers

* `aquifersFilesList` - list files found for the aquifer identified in the uri
* `aquifersList` - return a list of aquifers
* `aquifersNamesList` - List all aquifers in a simplified format
* `aquifersRead` - return details of aquifers

### cities

* `citiesDrillersList` - returns a list of cities with a qualified, registered operator (driller or installer)
* `citiesInstallersList` - returns a list of cities with a qualified, registered operator (driller or installer)

### config

* `configList` - serves general configuration

### drillers

* `drillersFilesList` - list files found for the aquifer identified in the uri
* `drillersList` - Returns a list of all person records
* `drillersNamesList` - Search for a person in the Register

### keycloak

* `keycloakList` - serves keycloak config

### submissions

* `submissionsOptionsList` - Options required for submitting activity report forms

### surveys

* `surveysList` - returns a list of active surveys

### wells

* `wellsFilesList` - list files found for the well identified in the uri
* `wellsList` - returns a list of wells
* `wellsRead` - Return well detail.
This view is open to all, and has no permissions.
* `wellsTagsList` - seach for wells by tag or owner
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

