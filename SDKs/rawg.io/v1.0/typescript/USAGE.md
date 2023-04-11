<!-- Start SDK Example Usage -->
```typescript
import {
  CreatorRolesListRequest,
  CreatorRolesListResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreatorRolesListRequest = {
  page: 548814,
  pageSize: 592845,
};

sdk.creatorRoles.creatorRolesList(req).then((res: CreatorRolesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->