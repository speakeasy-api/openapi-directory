# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/geocoder/2.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/geocoder/2.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetAddressesOutputFormatRequest,
  GetAddressesOutputFormatResponse,
  GetAddressesOutputFormatInterpolationEnum,
  GetAddressesOutputFormatLocationDescriptorEnum,
  GetAddressesOutputFormatOutputFormatEnum,
  GetAddressesOutputFormatOutputSrsEnum,
  GetAddressesOutputFormatStreetDirectionEnum,
  GetAddressesOutputFormatUnitDesignatorEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apikey: "YOUR_API_KEY_HERE",
  },
});

const req: GetAddressesOutputFormatRequest = {
  addressString: "corrupti",
  autoComplete: false,
  bbox: "provident",
  brief: false,
  centre: "distinctio",
  civicNumber: "quibusdam",
  civicNumberSuffix: "unde",
  echo: false,
  extrapolate: false,
  interpolation: GetAddressesOutputFormatInterpolationEnum.None,
  localities: "corrupti",
  localityName: "illum",
  locationDescriptor: GetAddressesOutputFormatLocationDescriptorEnum.FrontDoorPoint,
  matchPrecision: "error",
  matchPrecisionNot: "deserunt",
  maxDistance: 3843.82,
  maxResults: 437587,
  minScore: 297534,
  notLocalities: "debitis",
  outputFormat: GetAddressesOutputFormatOutputFormatEnum.Json,
  outputSRS: GetAddressesOutputFormatOutputSrsEnum.TwentySixThousandNineHundredAndEleven,
  parcelPoint: "tempora",
  provinceCode: "suscipit",
  setBack: 477665,
  siteName: "minus",
  streetDirection: GetAddressesOutputFormatStreetDirectionEnum.Se,
  streetName: "voluptatum",
  streetQualifier: "iusto",
  streetType: "excepturi",
  unitDesignator: GetAddressesOutputFormatUnitDesignatorEnum.Pad,
  unitNumber: "recusandae",
  unitNumberSuffix: "temporibus",
};

sdk.intersections.getAddressesOutputFormat(req).then((res: GetAddressesOutputFormatResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### intersections

* `getAddressesOutputFormat` - Geocode an address
* `getIntersectionsNearOutputFormat` - Find intersections near to a geographic point
* `getIntersectionsNearestOutputFormat` - Find nearest intersection to a geographic point
* `getIntersectionsWithinOutputFormat` - Find intersections in a geographic area
* `getIntersectionsIntersectionIDOutputFormat` - Get an intersection by its unique ID

### occupants

* `getOccupantsAddressesOutputFormat` - Geocode an address and identify site occupants
* `getOccupantsNearOutputFormat` - Find occupants of sites near to a geographic point
* `getOccupantsNearestOutputFormat` - Find occupants of the site nearest to a geographic point
* `getOccupantsWithinOutputFormat` - Find occupants of sites in a geographic area
* `getOccupantsOccupantIDOutputFormat` - Get an occupant (of a site) by its unique ID

### parcels

* `getParcelsPidsSiteIDOutputFormat` - Get a comma-separated string of all pids for a given site

### sites

* `getAddressesOutputFormat` - Geocode an address
* `getSitesNearOutputFormat` - Find sites near to a geographic point
* `getSitesNearestOutputFormat` - Find the site nearest to a geographic point
* `getSitesWithinOutputFormat` - Find sites in a geographic area
* `getSitesSiteIDOutputFormat` - Get a site by its unique ID
* `getSitesSiteIDSubsitesOutputFormat` - Represents all subsites of a given site
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

