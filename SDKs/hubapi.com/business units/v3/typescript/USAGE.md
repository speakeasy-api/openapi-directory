<!-- Start SDK Example Usage -->
```typescript
import {
  GetBusinessUnitsV3BusinessUnitsUserUserIdRequest,
  GetBusinessUnitsV3BusinessUnitsUserUserIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetBusinessUnitsV3BusinessUnitsUserUserIdRequest = {
  name: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  properties: [
    "nulla",
    "corrupti",
    "illum",
  ],
  userId: "vel",
};

sdk.businessUnit.getBusinessUnitsV3BusinessUnitsUserUserId(req).then((res: GetBusinessUnitsV3BusinessUnitsUserUserIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->