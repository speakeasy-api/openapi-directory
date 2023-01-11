<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FirebaseAvailableProjectsListRequest, FirebaseAvailableProjectsListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FirebaseAvailableProjectsListRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    pageSize: 6044372234677422456,
    pageToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
};

sdk.availableProjects.firebaseAvailableProjectsList(req).then((res: FirebaseAvailableProjectsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->