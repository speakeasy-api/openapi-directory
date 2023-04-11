<!-- Start SDK Example Usage -->
```typescript
import {
  WebsecurityscannerProjectsScanConfigsCreateRequest,
  WebsecurityscannerProjectsScanConfigsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  ScanConfigExportToSecurityCommandCenterEnum,
  ScanConfigRiskLevelEnum,
  ScanConfigTargetPlatformsEnum,
  ScanConfigUserAgentEnum,
  ScanRunExecutionStateEnum,
  ScanRunResultStateEnum,
  ScanRunWarningTraceCodeEnum,
  ScanRunErrorTraceCodeEnum,
  ScanConfigErrorCodeEnum,
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
      iapCredential: {
        iapTestServiceAccountInfo: {
          targetAudienceClientId: "magnam",
        },
      },
    },
    blacklistPatterns: [
      "ipsa",
      "delectus",
      "tempora",
      "suscipit",
    ],
    displayName: "molestiae",
    exportToSecurityCommandCenter: ScanConfigExportToSecurityCommandCenterEnum.Disabled,
    ignoreHttpStatusErrors: false,
    latestRun: {
      endTime: "placeat",
      errorTrace: {
        code: ScanRunErrorTraceCodeEnum.TimedOutWhileScanning,
        mostCommonHttpErrorCode: 479977,
        scanConfigError: {
          code: ScanConfigErrorCodeEnum.MalformedResourceName,
          fieldName: "nisi",
        },
      },
      executionState: ScanRunExecutionStateEnum.Finished,
      hasVulnerabilities: false,
      name: "temporibus",
      progressPercent: 71036,
      resultState: ScanRunResultStateEnum.Success,
      startTime: "veritatis",
      urlsCrawledCount: "deserunt",
      urlsTestedCount: "perferendis",
      warningTraces: [
        {
          code: ScanRunWarningTraceCodeEnum.BlockedByIap,
        },
        {
          code: ScanRunWarningTraceCodeEnum.NoStartingUrlFoundForManagedScan,
        },
      ],
    },
    managedScan: false,
    maxQps: 778157,
    name: "odit",
    riskLevel: ScanConfigRiskLevelEnum.Low,
    schedule: {
      intervalDurationDays: 870088,
      scheduleTime: "maiores",
    },
    startingUrls: [
      "quod",
      "quod",
    ],
    staticIpScan: false,
    targetPlatforms: [
      ScanConfigTargetPlatformsEnum.Compute,
      ScanConfigTargetPlatformsEnum.CloudRun,
    ],
    userAgent: ScanConfigUserAgentEnum.ChromeAndroid,
  },
  accessToken: "dicta",
  alt: AltEnum.Proto,
  callback: "officia",
  fields: "occaecati",
  key: "fugit",
  oauthToken: "deleniti",
  parent: "hic",
  prettyPrint: false,
  quotaUser: "optio",
  uploadType: "totam",
  uploadProtocol: "beatae",
};

sdk.projects.websecurityscannerProjectsScanConfigsCreate(req).then((res: WebsecurityscannerProjectsScanConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->