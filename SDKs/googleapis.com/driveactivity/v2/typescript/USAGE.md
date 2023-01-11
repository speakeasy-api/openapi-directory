<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DriveactivityActivityQueryRequest, DriveactivityActivityQueryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DriveactivityActivityQueryRequest = {
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
    prettyPrint: true,
    quotaUser: "fugit",
    uploadType: "et",
    uploadProtocol: "nihil",
  },
  request: {
    ancestorName: "rerum",
    consolidationStrategy: {
      legacy: {
        "debitis": "voluptatum",
        "et": "ut",
        "dolorem": "et",
      },
      none: {
        "iste": "vitae",
      },
    },
    filter: "totam",
    itemName: "dolores",
    pageSize: 1929546706668609706,
    pageToken: "debitis",
  },
};

sdk.activity.driveactivityActivityQuery(req).then((res: DriveactivityActivityQueryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->