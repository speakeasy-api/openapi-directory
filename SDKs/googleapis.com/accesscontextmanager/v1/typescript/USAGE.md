<!-- Start SDK Example Usage -->
```typescript
import {
  AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest,
  AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  BasicLevelCombiningFunctionEnum,
  DevicePolicyAllowedDeviceManagementLevelsEnum,
  DevicePolicyAllowedEncryptionStatusesEnum,
  OsConstraintOsTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessLevel: {
    basic: {
      combiningFunction: BasicLevelCombiningFunctionEnum.Or,
      conditions: [
        {
          devicePolicy: {
            allowedDeviceManagementLevels: [
              DevicePolicyAllowedDeviceManagementLevelsEnum.Basic,
              DevicePolicyAllowedDeviceManagementLevelsEnum.Complete,
              DevicePolicyAllowedDeviceManagementLevelsEnum.Basic,
              DevicePolicyAllowedDeviceManagementLevelsEnum.Complete,
            ],
            allowedEncryptionStatuses: [
              DevicePolicyAllowedEncryptionStatusesEnum.Unencrypted,
              DevicePolicyAllowedEncryptionStatusesEnum.Unencrypted,
            ],
            osConstraints: [
              {
                minimumVersion: "iure",
                osType: OsConstraintOsTypeEnum.DesktopWindows,
                requireVerifiedChromeOs: false,
              },
              {
                minimumVersion: "debitis",
                osType: OsConstraintOsTypeEnum.OsUnspecified,
                requireVerifiedChromeOs: false,
              },
            ],
            requireAdminApproval: false,
            requireCorpOwned: false,
            requireScreenlock: false,
          },
          ipSubnetworks: [
            "tempora",
            "suscipit",
            "molestiae",
            "minus",
          ],
          members: [
            "voluptatum",
            "iusto",
            "excepturi",
            "nisi",
          ],
          negate: false,
          regions: [
            "temporibus",
            "ab",
            "quis",
            "veritatis",
          ],
          requiredAccessLevels: [
            "perferendis",
            "ipsam",
            "repellendus",
          ],
        },
        {
          devicePolicy: {
            allowedDeviceManagementLevels: [
              DevicePolicyAllowedDeviceManagementLevelsEnum.Complete,
              DevicePolicyAllowedDeviceManagementLevelsEnum.ManagementUnspecified,
              DevicePolicyAllowedDeviceManagementLevelsEnum.Complete,
              DevicePolicyAllowedDeviceManagementLevelsEnum.Complete,
            ],
            allowedEncryptionStatuses: [
              DevicePolicyAllowedEncryptionStatusesEnum.EncryptionUnsupported,
              DevicePolicyAllowedEncryptionStatusesEnum.Encrypted,
              DevicePolicyAllowedEncryptionStatusesEnum.Encrypted,
              DevicePolicyAllowedEncryptionStatusesEnum.EncryptionUnsupported,
            ],
            osConstraints: [
              {
                minimumVersion: "porro",
                osType: OsConstraintOsTypeEnum.DesktopChromeOs,
                requireVerifiedChromeOs: false,
              },
              {
                minimumVersion: "dicta",
                osType: OsConstraintOsTypeEnum.Android,
                requireVerifiedChromeOs: false,
              },
              {
                minimumVersion: "officia",
                osType: OsConstraintOsTypeEnum.DesktopChromeOs,
                requireVerifiedChromeOs: false,
              },
            ],
            requireAdminApproval: false,
            requireCorpOwned: false,
            requireScreenlock: false,
          },
          ipSubnetworks: [
            "deleniti",
          ],
          members: [
            "optio",
            "totam",
            "beatae",
            "commodi",
          ],
          negate: false,
          regions: [
            "modi",
            "qui",
          ],
          requiredAccessLevels: [
            "cum",
            "esse",
            "ipsum",
            "excepturi",
          ],
        },
        {
          devicePolicy: {
            allowedDeviceManagementLevels: [
              DevicePolicyAllowedDeviceManagementLevelsEnum.ManagementUnspecified,
            ],
            allowedEncryptionStatuses: [
              DevicePolicyAllowedEncryptionStatusesEnum.Unencrypted,
              DevicePolicyAllowedEncryptionStatusesEnum.EncryptionUnspecified,
            ],
            osConstraints: [
              {
                minimumVersion: "dolor",
                osType: OsConstraintOsTypeEnum.DesktopChromeOs,
                requireVerifiedChromeOs: false,
              },
              {
                minimumVersion: "laboriosam",
                osType: OsConstraintOsTypeEnum.Ios,
                requireVerifiedChromeOs: false,
              },
              {
                minimumVersion: "saepe",
                osType: OsConstraintOsTypeEnum.DesktopChromeOs,
                requireVerifiedChromeOs: false,
              },
            ],
            requireAdminApproval: false,
            requireCorpOwned: false,
            requireScreenlock: false,
          },
          ipSubnetworks: [
            "corporis",
            "iste",
          ],
          members: [
            "saepe",
            "quidem",
          ],
          negate: false,
          regions: [
            "ipsa",
          ],
          requiredAccessLevels: [
            "est",
            "mollitia",
            "laborum",
            "dolores",
          ],
        },
      ],
    },
    custom: {
      expr: {
        description: "dolorem",
        expression: "corporis",
        location: "explicabo",
        title: "Miss",
      },
    },
    description: "enim",
    name: "omnis",
    title: "Mrs.",
  },
  accessToken: "minima",
  alt: AltEnum.Media,
  callback: "accusantium",
  fields: "iure",
  key: "culpa",
  oauthToken: "doloribus",
  parent: "sapiente",
  prettyPrint: false,
  quotaUser: "architecto",
  uploadType: "mollitia",
  uploadProtocol: "dolorem",
};

sdk.accessPolicies.accesscontextmanagerAccessPoliciesAccessLevelsCreate(req).then((res: AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->