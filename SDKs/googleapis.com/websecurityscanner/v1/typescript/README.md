# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/websecurityscanner/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/websecurityscanner/v1/typescript
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
  ScanConfigExportToSecurityCommandCenterEnum,
  ScanConfigRiskLevelEnum,
  ScanConfigUserAgentEnum,
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
    managedScan: false,
    maxQps: 812169,
    name: "voluptatum",
    riskLevel: ScanConfigRiskLevelEnum.Normal,
    schedule: {
      intervalDurationDays: 568045,
      scheduleTime: "nisi",
    },
    startingUrls: [
      "temporibus",
      "ab",
      "quis",
      "veritatis",
    ],
    staticIpScan: false,
    userAgent: ScanConfigUserAgentEnum.ChromeAndroid,
  },
  accessToken: "perferendis",
  alt: AltEnum.Media,
  callback: "repellendus",
  fields: "sapiente",
  key: "quo",
  oauthToken: "odit",
  parent: "at",
  prettyPrint: false,
  quotaUser: "at",
  uploadType: "maiores",
  uploadProtocol: "molestiae",
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

