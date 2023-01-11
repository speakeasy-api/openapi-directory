<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { YoutubeAbuseReportsInsertRequest, YoutubeAbuseReportsInsertResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: YoutubeAbuseReportsInsertRequest = {
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
    part: [
      "fugit",
      "et",
      "nihil",
    ],
    prettyPrint: true,
    quotaUser: "dicta",
    uploadType: "debitis",
    uploadProtocol: "voluptatum",
  },
  request: {
    abuseTypes: [
      {
        id: "ut",
      },
    ],
    description: "dolorem",
    relatedEntities: [
      {
        entity: {
          id: "voluptate",
          typeId: "iste",
          url: "vitae",
        },
      },
      {
        entity: {
          id: "totam",
          typeId: "dolores",
          url: "illum",
        },
      },
    ],
    subject: {
      id: "debitis",
      typeId: "vel",
      url: "odio",
    },
  },
};

sdk.abuseReports.youtubeAbuseReportsInsert(req).then((res: YoutubeAbuseReportsInsertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->