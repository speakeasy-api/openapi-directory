<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { YoutubereportingJobsCreateRequest, YoutubereportingJobsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: YoutubereportingJobsCreateRequest = {
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
    onBehalfOfContentOwner: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    createTime: "dicta",
    expireTime: "debitis",
    id: "voluptatum",
    name: "et",
    reportTypeId: "ut",
    systemManaged: true,
  },
};

sdk.jobs.youtubereportingJobsCreate(req).then((res: YoutubereportingJobsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->