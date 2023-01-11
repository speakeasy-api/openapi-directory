<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { WebsecurityscannerProjectsScanConfigsCreateRequest, WebsecurityscannerProjectsScanConfigsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: WebsecurityscannerProjectsScanConfigsCreateRequest = {
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
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    authentication: {
      customAccount: {
        loginUrl: "dicta",
        password: "debitis",
        username: "voluptatum",
      },
      googleAccount: {
        password: "et",
        username: "ut",
      },
    },
    blacklistPatterns: [
      "et",
      "voluptate",
      "iste",
    ],
    displayName: "vitae",
    latestRun: {
      endTime: "totam",
      executionState: "EXECUTION_STATE_UNSPECIFIED",
      hasVulnerabilities: false,
      name: "debitis",
      progressPercent: 3706853784096366226,
      resultState: "RESULT_STATE_UNSPECIFIED",
      startTime: "dolore",
      urlsCrawledCount: "id",
      urlsTestedCount: "aspernatur",
    },
    maxQps: 2914295034816259174,
    name: "totam",
    schedule: {
      intervalDurationDays: 6745438398739480977,
      scheduleTime: "quis",
    },
    startingUrls: [
      "aut",
      "odit",
    ],
    targetPlatforms: [
      "CLOUD_FUNCTIONS",
      "COMPUTE",
      "CLOUD_FUNCTIONS",
    ],
    userAgent: "USER_AGENT_UNSPECIFIED",
  },
};

sdk.projects.websecurityscannerProjectsScanConfigsCreate(req).then((res: WebsecurityscannerProjectsScanConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->