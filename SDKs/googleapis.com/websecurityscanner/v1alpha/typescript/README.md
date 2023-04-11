# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/websecurityscanner/v1alpha/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/websecurityscanner/v1alpha/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `websecurityscannerProjectsScanConfigsCreate` - Creates a new ScanConfig.
* `websecurityscannerProjectsScanConfigsDelete` - Deletes an existing ScanConfig and its child resources.
* `websecurityscannerProjectsScanConfigsList` - Lists ScanConfigs under a given project.
* `websecurityscannerProjectsScanConfigsPatch` - Updates a ScanConfig. This method support partial update of a ScanConfig.
* `websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList` - List CrawledUrls under a given ScanRun.
* `websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList` - List all FindingTypeStats under a given ScanRun.
* `websecurityscannerProjectsScanConfigsScanRunsFindingsGet` - Gets a Finding.
* `websecurityscannerProjectsScanConfigsScanRunsFindingsList` - List Findings under a given ScanRun.
* `websecurityscannerProjectsScanConfigsScanRunsList` - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
* `websecurityscannerProjectsScanConfigsScanRunsStop` - Stops a ScanRun. The stopped ScanRun is returned.
* `websecurityscannerProjectsScanConfigsStart` - Start a ScanRun according to the given ScanConfig.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

