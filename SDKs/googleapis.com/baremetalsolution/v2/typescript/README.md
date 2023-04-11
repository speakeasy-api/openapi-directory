# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/baremetalsolution/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/baremetalsolution/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest,
  BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  location: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.projects.baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(req).then((res: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch` - Get instance provisioning settings for a given project. This is hidden method used by UI only.
* `baremetalsolutionProjectsLocationsInstancesCreate` - Create an Instance.
* `baremetalsolutionProjectsLocationsInstancesDetachLun` - Detach LUN from Instance.
* `baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole` - Disable the interactive serial console feature on an instance.
* `baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole` - Enable the interactive serial console feature on an instance.
* `baremetalsolutionProjectsLocationsInstancesList` - List servers in a given project and location.
* `baremetalsolutionProjectsLocationsInstancesReset` - Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
* `baremetalsolutionProjectsLocationsInstancesStart` - Starts a server that was shutdown.
* `baremetalsolutionProjectsLocationsInstancesStop` - Stop a running server.
* `baremetalsolutionProjectsLocationsList` - Lists information about the supported locations for this service.
* `baremetalsolutionProjectsLocationsNetworksList` - List network in a given project and location.
* `baremetalsolutionProjectsLocationsNetworksListNetworkUsage` - List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
* `baremetalsolutionProjectsLocationsNfsSharesCreate` - Create an NFS share.
* `baremetalsolutionProjectsLocationsNfsSharesList` - List NFS shares.
* `baremetalsolutionProjectsLocationsProvisioningConfigsCreate` - Create new ProvisioningConfig.
* `baremetalsolutionProjectsLocationsProvisioningConfigsSubmit` - Submit a provisiong configuration for a given project.
* `baremetalsolutionProjectsLocationsProvisioningQuotasList` - List the budget details to provision resources on a given project.
* `baremetalsolutionProjectsLocationsSshKeysCreate` - Register a public SSH key in the specified project for use with the interactive serial console feature.
* `baremetalsolutionProjectsLocationsSshKeysList` - Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
* `baremetalsolutionProjectsLocationsVolumesList` - List storage volumes in a given project and location.
* `baremetalsolutionProjectsLocationsVolumesLunsEvict` - Skips lun's cooloff and deletes it now. Lun must be in cooloff state.
* `baremetalsolutionProjectsLocationsVolumesLunsList` - List storage volume luns for given storage volume.
* `baremetalsolutionProjectsLocationsVolumesPatch` - Update details of a single storage volume.
* `baremetalsolutionProjectsLocationsVolumesRename` - RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.
* `baremetalsolutionProjectsLocationsVolumesResize` - Emergency Volume resize.
* `baremetalsolutionProjectsLocationsVolumesSnapshotsCreate` - Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `baremetalsolutionProjectsLocationsVolumesSnapshotsDelete` - Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `baremetalsolutionProjectsLocationsVolumesSnapshotsGet` - Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `baremetalsolutionProjectsLocationsVolumesSnapshotsList` - Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
* `baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot` - Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

