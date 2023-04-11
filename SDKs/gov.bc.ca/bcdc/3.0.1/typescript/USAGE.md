<!-- Start SDK Example Usage -->
```typescript
import {
  GetActionOrganizationActivityListRequest,
  GetActionOrganizationActivityListResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    githubAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetActionOrganizationActivityListRequest = {
  id: "corrupti",
};

sdk.action.getActionOrganizationActivityList(req).then((res: GetActionOrganizationActivityListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->