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