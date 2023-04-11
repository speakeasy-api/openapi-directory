# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/remotebuildexecution/v1alpha/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/remotebuildexecution/v1alpha/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  RemotebuildexecutionProjectsInstancesCreateRequest,
  RemotebuildexecutionProjectsInstancesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum,
  GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum,
  GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum,
  GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum,
  GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum,
  GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum,
  GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum,
  GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RemotebuildexecutionProjectsInstancesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput: {
    instance: {
      featurePolicy: {
        actionHermeticity: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum.ActionHermeticityEnforced,
        actionIsolation: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum.ActionIsolationEnforced,
        containerImageSources: {
          allowedValues: [
            "unde",
            "nulla",
            "corrupti",
            "illum",
          ],
          policy: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.Allowed,
        },
        dockerAddCapabilities: {
          allowedValues: [
            "deserunt",
            "suscipit",
            "iure",
          ],
          policy: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.Allowed,
        },
        dockerChrootPath: {
          allowedValues: [
            "ipsa",
            "delectus",
            "tempora",
            "suscipit",
          ],
          policy: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.Allowed,
        },
        dockerNetwork: {
          allowedValues: [
            "placeat",
            "voluptatum",
            "iusto",
            "excepturi",
          ],
          policy: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.Allowed,
        },
        dockerPrivileged: {
          allowedValues: [
            "temporibus",
            "ab",
            "quis",
            "veritatis",
          ],
          policy: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.Forbidden,
        },
        dockerRunAsContainerProvidedUser: {
          allowedValues: [
            "ipsam",
          ],
          policy: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.Restricted,
        },
        dockerRunAsRoot: {
          allowedValues: [
            "quo",
            "odit",
            "at",
            "at",
          ],
          policy: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.Restricted,
        },
        dockerRuntime: {
          allowedValues: [
            "quod",
            "quod",
          ],
          policy: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.Allowed,
        },
        dockerSiblingContainers: {
          allowedValues: [
            "porro",
            "dolorum",
            "dicta",
          ],
          policy: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum.Forbidden,
        },
        linuxExecution: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum.LinuxExecutionHardenedGvisor,
        linuxIsolation: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum.Gvisor,
        macExecution: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum.MacExecutionUnspecified,
        vmVerification: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum.VmVerificationGcpToken,
        windowsExecution: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum.WindowsExecutionTerminal,
      },
      location: "optio",
      schedulerNotificationConfig: {
        topic: "totam",
      },
    },
    instanceId: "beatae",
    parent: "commodi",
  },
  accessToken: "molestiae",
  alt: AltEnum.Json,
  callback: "qui",
  fields: "impedit",
  key: "cum",
  oauthToken: "esse",
  parent: "ipsum",
  prettyPrint: false,
  quotaUser: "excepturi",
  uploadType: "aspernatur",
  uploadProtocol: "perferendis",
};

sdk.projects.remotebuildexecutionProjectsInstancesCreate(req).then((res: RemotebuildexecutionProjectsInstancesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `remotebuildexecutionProjectsInstancesCreate` - Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
* `remotebuildexecutionProjectsInstancesList` - Lists instances in a project.
* `remotebuildexecutionProjectsInstancesTestNotify` - Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
* `remotebuildexecutionProjectsInstancesWorkerpoolsCreate` - Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
* `remotebuildexecutionProjectsInstancesWorkerpoolsDelete` - Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
* `remotebuildexecutionProjectsInstancesWorkerpoolsList` - Lists worker pools in an instance.
* `remotebuildexecutionProjectsInstancesWorkerpoolsPatch` - Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
* `remotebuildexecutionProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

