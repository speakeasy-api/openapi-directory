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