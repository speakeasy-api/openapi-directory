<!-- Start SDK Example Usage -->
```typescript
import {
  WebsecurityscannerProjectsScanConfigsCreateRequest,
  WebsecurityscannerProjectsScanConfigsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  ScanConfigTargetPlatformsEnum,
  ScanConfigUserAgentEnum,
  ScanRunExecutionStateEnum,
  ScanRunResultStateEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: WebsecurityscannerProjectsScanConfigsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  scanConfig: {
    authentication: {
      customAccount: {
        loginUrl: "provident",
        password: "distinctio",
        username: "Rosalinda_Mitchell84",
      },
      googleAccount: {
        password: "vel",
        username: "Linda.Oberbrunner",
      },
    },
    blacklistPatterns: [
      "debitis",
      "ipsa",
    ],
    displayName: "delectus",
    latestRun: {
      endTime: "tempora",
      executionState: ScanRunExecutionStateEnum.Queued,
      hasVulnerabilities: false,
      name: "molestiae",
      progressPercent: 791725,
      resultState: ScanRunResultStateEnum.Killed,
      startTime: "voluptatum",
      urlsCrawledCount: "iusto",
      urlsTestedCount: "excepturi",
    },
    maxQps: 392785,
    name: "recusandae",
    schedule: {
      intervalDurationDays: 836079,
      scheduleTime: "ab",
    },
    startingUrls: [
      "veritatis",
      "deserunt",
    ],
    targetPlatforms: [
      ScanConfigTargetPlatformsEnum.AppEngine,
    ],
    userAgent: ScanConfigUserAgentEnum.SafariIphone,
  },
  accessToken: "sapiente",
  alt: AltEnum.Proto,
  callback: "odit",
  fields: "at",
  key: "at",
  oauthToken: "maiores",
  parent: "molestiae",
  prettyPrint: false,
  quotaUser: "quod",
  uploadType: "quod",
  uploadProtocol: "esse",
};

sdk.projects.websecurityscannerProjectsScanConfigsCreate(req).then((res: WebsecurityscannerProjectsScanConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->