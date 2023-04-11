# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/va.gov/facilities/0.0.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/va.gov/facilities/0.0.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetAllFacilitiesRequest,
  GetAllFacilitiesResponse,
  GetAllFacilitiesAcceptEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAllFacilitiesRequest = {
  accept: GetAllFacilitiesAcceptEnum.ApplicationVndGeoPlusJson,
};

sdk.facilities.getAllFacilities(req).then((res: GetAllFacilitiesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### facilities

* `getAllFacilities` - Bulk download information for all facilities
* `getFacilitiesByLocation` - Query facilities by location or IDs, with optional filters
* `getFacilityById` - Retrieve a specific facility by ID
* `getFacilityIds` - Bulk download of all facility IDs
* `getNearbyFacilities` - Retrieve all VA health facilities reachable by driving within the specified time period
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

