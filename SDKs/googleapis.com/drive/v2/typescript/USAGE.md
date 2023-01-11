<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DriveAboutGetRequest, DriveAboutGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DriveAboutGetRequest = {
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
    alt: "json",
    fields: "voluptas",
    includeSubscribed: true,
    key: "expedita",
    maxChangeIdCount: "consequuntur",
    oauthToken: "dolor",
    prettyPrint: true,
    quotaUser: "voluptas",
    startChangeId: "fugit",
    userIp: "et",
  },
};

sdk.about.driveAboutGet(req).then((res: DriveAboutGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->