# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/accesscontextmanager/v1beta/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/accesscontextmanager/v1beta/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accessPolicies

* `accesscontextmanagerAccessPoliciesAccessLevelsCreate` - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* `accesscontextmanagerAccessPoliciesAccessLevelsList` - List all Access Levels for an access policy.
* `accesscontextmanagerAccessPoliciesCreate` - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* `accesscontextmanagerAccessPoliciesList` - List all AccessPolicies under a container.
* `accesscontextmanagerAccessPoliciesServicePerimetersCreate` - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* `accesscontextmanagerAccessPoliciesServicePerimetersDelete` - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* `accesscontextmanagerAccessPoliciesServicePerimetersList` - List all Service Perimeters for an access policy.
* `accesscontextmanagerAccessPoliciesServicePerimetersPatch` - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### operations

* `accesscontextmanagerOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

