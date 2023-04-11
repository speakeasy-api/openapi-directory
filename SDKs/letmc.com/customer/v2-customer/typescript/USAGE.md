<!-- Start SDK Example Usage -->
```typescript
import {
  BranchControllerGetBranchesRequest,
  BranchControllerGetBranchesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BranchControllerGetBranchesRequest = {
  count: 548814,
  offset: 592845,
  shortName: "distinctio",
};

sdk.branchController.branchControllerGetBranches(req).then((res: BranchControllerGetBranchesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->