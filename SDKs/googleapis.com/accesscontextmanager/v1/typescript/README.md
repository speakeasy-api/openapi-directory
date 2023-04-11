# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/accesscontextmanager/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/accesscontextmanager/v1/typescript
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

* `accesscontextmanagerAccessPoliciesAccessLevelsCreate` - Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
* `accesscontextmanagerAccessPoliciesAccessLevelsList` - Lists all access levels for an access policy.
* `accesscontextmanagerAccessPoliciesAccessLevelsReplaceAll` - Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
* `accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsCreate` - Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.
* `accesscontextmanagerAccessPoliciesAuthorizedOrgsDescsList` - Lists all authorized orgs descs for an access policy.
* `accesscontextmanagerAccessPoliciesCreate` - Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
* `accesscontextmanagerAccessPoliciesGetIamPolicy` - Gets the IAM policy for the specified Access Context Manager access policy.
* `accesscontextmanagerAccessPoliciesList` - Lists all access policies in an organization.
* `accesscontextmanagerAccessPoliciesServicePerimetersCommit` - Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
* `accesscontextmanagerAccessPoliciesServicePerimetersCreate` - Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
* `accesscontextmanagerAccessPoliciesServicePerimetersList` - Lists all service perimeters for an access policy.
* `accesscontextmanagerAccessPoliciesServicePerimetersReplaceAll` - Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
* `accesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissions` - Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
* `accesscontextmanagerAccessPoliciesSetIamPolicy` - Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.

### operations

* `accesscontextmanagerOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### organizations

* `accesscontextmanagerOrganizationsGcpUserAccessBindingsCreate` - Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
* `accesscontextmanagerOrganizationsGcpUserAccessBindingsDelete` - Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
* `accesscontextmanagerOrganizationsGcpUserAccessBindingsGet` - Gets the GcpUserAccessBinding with the given name.
* `accesscontextmanagerOrganizationsGcpUserAccessBindingsList` - Lists all GcpUserAccessBindings for a Google Cloud organization.
* `accesscontextmanagerOrganizationsGcpUserAccessBindingsPatch` - Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

