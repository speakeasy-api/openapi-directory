<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AndroidpublisherEditsApklistingsDeleteRequest, AndroidpublisherEditsApklistingsDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AndroidpublisherEditsApklistingsDeleteRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    apkVersionCode: 8717895732742165505,
    editId: "voluptas",
    language: "culpa",
    packageName: "expedita",
  },
  queryParams: {
    alt: "json",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    userIp: "nihil",
  },
};

sdk.edits.androidpublisherEditsApklistingsDelete(req).then((res: AndroidpublisherEditsApklistingsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->