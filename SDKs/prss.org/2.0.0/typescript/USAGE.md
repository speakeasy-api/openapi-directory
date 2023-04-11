<!-- Start SDK Example Usage -->
```typescript
import {
  GetApiV2BroadcastservicesRequest,
  GetApiV2BroadcastservicesResponse,
  GetApiV2BroadcastservicesOrderByIDEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetApiV2BroadcastservicesRequest = {
  orderById: GetApiV2BroadcastservicesOrderByIDEnum.Desc,
  pageSize: 592845,
  pageStart: 715190,
};

sdk.broadcastServices.getApiV2Broadcastservices(req).then((res: GetApiV2BroadcastservicesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->