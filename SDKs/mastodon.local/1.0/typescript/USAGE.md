<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteApiV1AnnouncementsIdReactionsNameRequest,
  DeleteApiV1AnnouncementsIdReactionsNameResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteApiV1AnnouncementsIdReactionsNameRequest = {
  id: "corrupti",
  name: "provident",
};

sdk.deleteApiV1AnnouncementsIdReactionsName(req).then((res: DeleteApiV1AnnouncementsIdReactionsNameResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->