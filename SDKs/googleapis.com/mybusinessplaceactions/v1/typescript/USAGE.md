<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest, MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest = {
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    isPreferred: false,
    name: "debitis",
    placeActionType: "PLACE_ACTION_TYPE_UNSPECIFIED",
    uri: "et",
  },
};

sdk.locations.mybusinessplaceactionsLocationsPlaceActionLinksCreate(req).then((res: MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->