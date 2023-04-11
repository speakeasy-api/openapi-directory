<!-- Start SDK Example Usage -->
```typescript
import {
  GetUsersRequest,
  GetUsersResponse
} from "openapi/dist/sdk/models/operations";
import {
  OrderEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetUsersRequest = {
  cursor: "corrupti",
  order: OrderEnum.Desc,
  pageSize: 715190,
};

sdk.getUsers(req).then((res: GetUsersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->