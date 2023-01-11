<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { EssentialcontactsProjectsContactsComputeRequest, EssentialcontactsProjectsContactsComputeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: EssentialcontactsProjectsContactsComputeRequest = {
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
    notificationCategories: [
      "NOTIFICATION_CATEGORY_UNSPECIFIED",
      "SECURITY",
      "LEGAL",
    ],
    oauthToken: "rerum",
    pageSize: 7837839688282259259,
    pageToken: "debitis",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "ut",
    uploadProtocol: "dolorem",
  },
};

sdk.projects.essentialcontactsProjectsContactsCompute(req).then((res: EssentialcontactsProjectsContactsComputeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->