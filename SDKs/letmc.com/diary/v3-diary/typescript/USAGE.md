<!-- Start SDK Example Usage -->
```typescript
import {
  CompanyControllerGetBranchesRequest,
  CompanyControllerGetBranchesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CompanyControllerGetBranchesRequest = {
  count: 548814,
  offset: 592845,
  shortName: "distinctio",
};

sdk.companyController.companyControllerGetBranches(req).then((res: CompanyControllerGetBranchesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->