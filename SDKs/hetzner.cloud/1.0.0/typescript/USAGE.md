<!-- Start SDK Example Usage -->
```typescript
import {
  GetActionsRequest,
  GetActionsResponse,
  GetActionsSortParameterSortEnum,
  GetActionsStatusParameterStatusEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetActionsRequest = {
  id: 548814,
  sort: GetActionsSortParameterSortEnum.ProgressAsc,
  status: GetActionsStatusParameterStatusEnum.Error,
};

sdk.actions.getActions(req).then((res: GetActionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->