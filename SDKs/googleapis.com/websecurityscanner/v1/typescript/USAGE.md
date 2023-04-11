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