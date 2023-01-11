<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetUsersRequest, GetUsersResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetUsersRequest = {
  queryParams: {
    cursor: "sit",
    order: "asc",
    pageSize: 6050128673802995827,
  },
};

sdk.getUsers(req).then((res: GetUsersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->