<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteWorkspaceIdMembersMemberIdActivitiesIdRequest, DeleteWorkspaceIdMembersMemberIdActivitiesIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteWorkspaceIdMembersMemberIdActivitiesIdRequest = {
  security: {
    bearer: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    id: "sit",
    memberId: "voluptas",
    workspaceId: "culpa",
  },
};

sdk.activities.deleteWorkspaceIdMembersMemberIdActivitiesId(req).then((res: DeleteWorkspaceIdMembersMemberIdActivitiesIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->