<!-- Start SDK Example Usage -->
```typescript
import {
  FindPlacesFindPlacesGetRequest,
  FindPlacesFindPlacesGetResponse,
  FindPlacesFindPlacesGetLanguageLanguageEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FindPlacesFindPlacesGetRequest = {
  key: "corrupti",
  language: FindPlacesFindPlacesGetLanguageLanguageEnum.Fr,
  text: "distinctio",
};

sdk.locationEndpoints.findPlacesFindPlacesGet(req).then((res: FindPlacesFindPlacesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->