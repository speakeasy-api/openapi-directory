<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { StorageBucketAccessControlsDeleteRequest, StorageBucketAccessControlsDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: StorageBucketAccessControlsDeleteRequest = {
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
  pathParams: {
    bucket: "sit",
    entity: "voluptas",
  },
  queryParams: {
    alt: "json",
    fields: "expedita",
    key: "consequuntur",
    oauthToken: "dolor",
    prettyPrint: true,
    quotaUser: "voluptas",
    uploadType: "fugit",
    userIp: "et",
    userProject: "nihil",
  },
};

sdk.bucketAccessControls.storageBucketAccessControlsDelete(req).then((res: StorageBucketAccessControlsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->