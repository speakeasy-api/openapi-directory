<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FcmdataProjectsAndroidAppsDeliveryDataListRequest, FcmdataProjectsAndroidAppsDeliveryDataListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FcmdataProjectsAndroidAppsDeliveryDataListRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    pageSize: 8274930044578894929,
    pageToken: "et",
    prettyPrint: true,
    quotaUser: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
};

sdk.projects.fcmdataProjectsAndroidAppsDeliveryDataList(req).then((res: FcmdataProjectsAndroidAppsDeliveryDataListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->