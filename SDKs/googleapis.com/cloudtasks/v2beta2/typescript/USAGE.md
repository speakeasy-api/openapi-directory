<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CloudtasksApiQueueUpdateRequest, CloudtasksApiQueueUpdateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudtasksApiQueueUpdateRequest = {
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
    appId: "expedita",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    contentType: "dicta",
    data: "debitis",
    extensions: [
      {
        "ut": "dolorem",
      },
    ],
  },
};

sdk.api.cloudtasksApiQueueUpdate(req).then((res: CloudtasksApiQueueUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->