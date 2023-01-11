<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { TestingApplicationDetailServiceGetApkDetailsRequest, TestingApplicationDetailServiceGetApkDetailsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TestingApplicationDetailServiceGetApkDetailsRequest = {
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
  },
  request: {
    gcsPath: "rerum",
  },
};

sdk.applicationDetailService.testingApplicationDetailServiceGetApkDetails(req).then((res: TestingApplicationDetailServiceGetApkDetailsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->