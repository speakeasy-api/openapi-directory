<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest,
  DeleteWorkspaceSlugMembersMemberSlugActivitiesIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest = {
  id: "corrupti",
  memberSlug: "provident",
  workspaceSlug: "distinctio",
};

sdk.activities.deleteWorkspaceSlugMembersMemberSlugActivitiesId(req).then((res: DeleteWorkspaceSlugMembersMemberSlugActivitiesIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->