<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { YoutubeAnalyticsGroupItemsDeleteRequest, YoutubeAnalyticsGroupItemsDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: YoutubeAnalyticsGroupItemsDeleteRequest = {
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
    id: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    onBehalfOfContentOwner: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
};

sdk.groupItems.youtubeAnalyticsGroupItemsDelete(req).then((res: YoutubeAnalyticsGroupItemsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->