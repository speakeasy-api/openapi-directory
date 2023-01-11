<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { IndexingUrlNotificationsGetMetadataRequest, IndexingUrlNotificationsGetMetadataResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: IndexingUrlNotificationsGetMetadataRequest = {
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
    prettyPrint: true,
    quotaUser: "fugit",
    uploadType: "et",
    uploadProtocol: "nihil",
    url: "rerum",
  },
};

sdk.urlNotifications.indexingUrlNotificationsGetMetadata(req).then((res: IndexingUrlNotificationsGetMetadataResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->