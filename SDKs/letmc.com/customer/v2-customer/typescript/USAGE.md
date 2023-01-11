<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BranchControllerGetBranchesRequest, BranchControllerGetBranchesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BranchControllerGetBranchesRequest = {
  pathParams: {
    shortName: "sit",
  },
  queryParams: {
    count: 2259404117704393152,
    offset: 6050128673802995827,
  },
};

sdk.branchController.branchControllerGetBranches(req).then((res: BranchControllerGetBranchesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->