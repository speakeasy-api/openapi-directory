<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetActionOrganizationActivityListRequest, GetActionOrganizationActivityListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    githubAccessCode: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: GetActionOrganizationActivityListRequest = {
  queryParams: {
    id: "sit",
  },
};

sdk.action.getActionOrganizationActivityList(req).then((res: GetActionOrganizationActivityListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->