<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreatorRolesListRequest, CreatorRolesListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreatorRolesListRequest = {
  queryParams: {
    page: 8717895732742165505,
    pageSize: 2259404117704393152,
  },
};

sdk.creatorRoles.creatorRolesList(req).then((res: CreatorRolesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->