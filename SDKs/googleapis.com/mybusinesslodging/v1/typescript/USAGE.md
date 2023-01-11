<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { MybusinesslodgingLocationsGetLodgingRequest, MybusinesslodgingLocationsGetLodgingResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MybusinesslodgingLocationsGetLodgingRequest = {
  pathParams: {
    name: "sit",
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
    readMask: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
};

sdk.locations.mybusinesslodgingLocationsGetLodging(req).then((res: MybusinesslodgingLocationsGetLodgingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->