# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/mybusinessplaceactions/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/mybusinessplaceactions/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest,
  MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  PlaceActionLinkPlaceActionTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  placeActionLinkInput: {
    isPreferred: false,
    name: "provident",
    placeActionType: PlaceActionLinkPlaceActionTypeEnum.FoodDelivery,
    uri: "https://outstanding-strait.name",
  },
  accessToken: "illum",
  alt: AltEnum.Media,
  callback: "error",
  fields: "deserunt",
  key: "suscipit",
  oauthToken: "iure",
  parent: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  uploadType: "ipsa",
  uploadProtocol: "delectus",
};

sdk.locations.mybusinessplaceactionsLocationsPlaceActionLinksCreate(req).then((res: MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### locations

* `mybusinessplaceactionsLocationsPlaceActionLinksCreate` - Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
* `mybusinessplaceactionsLocationsPlaceActionLinksDelete` - Deletes a place action link from the specified location.
* `mybusinessplaceactionsLocationsPlaceActionLinksGet` - Gets the specified place action link.
* `mybusinessplaceactionsLocationsPlaceActionLinksList` - Lists the place action links for the specified location.
* `mybusinessplaceactionsLocationsPlaceActionLinksPatch` - Updates the specified place action link and returns it.

### placeActionTypeMetadata

* `mybusinessplaceactionsPlaceActionTypeMetadataList` - Returns the list of available place action types for a location or country.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

