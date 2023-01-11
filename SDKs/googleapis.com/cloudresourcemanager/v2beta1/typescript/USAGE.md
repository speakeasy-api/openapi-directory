<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CloudresourcemanagerFoldersCreateRequest, CloudresourcemanagerFoldersCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudresourcemanagerFoldersCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
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
    parent: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    displayName: "dicta",
    parent: "debitis",
  },
};

sdk.folders.cloudresourcemanagerFoldersCreate(req).then((res: CloudresourcemanagerFoldersCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->