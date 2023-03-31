# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/baremetalsolution/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        Location: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(ctx, req, operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchInstanceProvisioningSettingsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch` - Get instance provisioning settings for a given project. This is hidden method used by UI only.
* `BaremetalsolutionProjectsLocationsInstancesCreate` - Create an Instance.
* `BaremetalsolutionProjectsLocationsInstancesDetachLun` - Detach LUN from Instance.
* `BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole` - Disable the interactive serial console feature on an instance.
* `BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole` - Enable the interactive serial console feature on an instance.
* `BaremetalsolutionProjectsLocationsInstancesList` - List servers in a given project and location.
* `BaremetalsolutionProjectsLocationsInstancesReset` - Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
* `BaremetalsolutionProjectsLocationsInstancesStart` - Starts a server that was shutdown.
* `BaremetalsolutionProjectsLocationsInstancesStop` - Stop a running server.
* `BaremetalsolutionProjectsLocationsList` - Lists information about the supported locations for this service.
* `BaremetalsolutionProjectsLocationsNetworksList` - List network in a given project and location.
* `BaremetalsolutionProjectsLocationsNetworksListNetworkUsage` - List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
* `BaremetalsolutionProjectsLocationsNfsSharesCreate` - Create an NFS share.
* `BaremetalsolutionProjectsLocationsNfsSharesList` - List NFS shares.
* `BaremetalsolutionProjectsLocationsProvisioningConfigsCreate` - Create new ProvisioningConfig.
* `BaremetalsolutionProjectsLocationsProvisioningConfigsSubmit` - Submit a provisiong configuration for a given project.
* `BaremetalsolutionProjectsLocationsProvisioningQuotasList` - List the budget details to provision resources on a given project.
* `BaremetalsolutionProjectsLocationsSSHKeysCreate` - Register a public SSH key in the specified project for use with the interactive serial console feature.
* `BaremetalsolutionProjectsLocationsSSHKeysList` - Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
* `BaremetalsolutionProjectsLocationsVolumesList` - List storage volumes in a given project and location.
* `BaremetalsolutionProjectsLocationsVolumesLunsEvict` - Skips lun's cooloff and deletes it now. Lun must be in cooloff state.
* `BaremetalsolutionProjectsLocationsVolumesLunsList` - List storage volume luns for given storage volume.
* `BaremetalsolutionProjectsLocationsVolumesPatch` - Update details of a single storage volume.
* `BaremetalsolutionProjectsLocationsVolumesRename` - RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.
* `BaremetalsolutionProjectsLocationsVolumesResize` - Emergency Volume resize.
* `BaremetalsolutionProjectsLocationsVolumesSnapshotsCreate` - Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `BaremetalsolutionProjectsLocationsVolumesSnapshotsDelete` - Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `BaremetalsolutionProjectsLocationsVolumesSnapshotsGet` - Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `BaremetalsolutionProjectsLocationsVolumesSnapshotsList` - Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
* `BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot` - Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
