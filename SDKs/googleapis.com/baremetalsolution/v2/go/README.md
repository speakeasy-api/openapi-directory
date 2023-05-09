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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(ctx, operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        Location: "corrupti",
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity{
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


### [Projects](docs/projects/README.md)

* [BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch](docs/projects/README.md#baremetalsolutionprojectslocationsinstanceprovisioningsettingsfetch) - Get instance provisioning settings for a given project. This is hidden method used by UI only.
* [BaremetalsolutionProjectsLocationsInstancesCreate](docs/projects/README.md#baremetalsolutionprojectslocationsinstancescreate) - Create an Instance.
* [BaremetalsolutionProjectsLocationsInstancesDetachLun](docs/projects/README.md#baremetalsolutionprojectslocationsinstancesdetachlun) - Detach LUN from Instance.
* [BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole](docs/projects/README.md#baremetalsolutionprojectslocationsinstancesdisableinteractiveserialconsole) - Disable the interactive serial console feature on an instance.
* [BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole](docs/projects/README.md#baremetalsolutionprojectslocationsinstancesenableinteractiveserialconsole) - Enable the interactive serial console feature on an instance.
* [BaremetalsolutionProjectsLocationsInstancesList](docs/projects/README.md#baremetalsolutionprojectslocationsinstanceslist) - List servers in a given project and location.
* [BaremetalsolutionProjectsLocationsInstancesReset](docs/projects/README.md#baremetalsolutionprojectslocationsinstancesreset) - Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
* [BaremetalsolutionProjectsLocationsInstancesStart](docs/projects/README.md#baremetalsolutionprojectslocationsinstancesstart) - Starts a server that was shutdown.
* [BaremetalsolutionProjectsLocationsInstancesStop](docs/projects/README.md#baremetalsolutionprojectslocationsinstancesstop) - Stop a running server.
* [BaremetalsolutionProjectsLocationsList](docs/projects/README.md#baremetalsolutionprojectslocationslist) - Lists information about the supported locations for this service.
* [BaremetalsolutionProjectsLocationsNetworksList](docs/projects/README.md#baremetalsolutionprojectslocationsnetworkslist) - List network in a given project and location.
* [BaremetalsolutionProjectsLocationsNetworksListNetworkUsage](docs/projects/README.md#baremetalsolutionprojectslocationsnetworkslistnetworkusage) - List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
* [BaremetalsolutionProjectsLocationsNfsSharesCreate](docs/projects/README.md#baremetalsolutionprojectslocationsnfssharescreate) - Create an NFS share.
* [BaremetalsolutionProjectsLocationsNfsSharesList](docs/projects/README.md#baremetalsolutionprojectslocationsnfsshareslist) - List NFS shares.
* [BaremetalsolutionProjectsLocationsProvisioningConfigsCreate](docs/projects/README.md#baremetalsolutionprojectslocationsprovisioningconfigscreate) - Create new ProvisioningConfig.
* [BaremetalsolutionProjectsLocationsProvisioningConfigsSubmit](docs/projects/README.md#baremetalsolutionprojectslocationsprovisioningconfigssubmit) - Submit a provisiong configuration for a given project.
* [BaremetalsolutionProjectsLocationsProvisioningQuotasList](docs/projects/README.md#baremetalsolutionprojectslocationsprovisioningquotaslist) - List the budget details to provision resources on a given project.
* [BaremetalsolutionProjectsLocationsSSHKeysCreate](docs/projects/README.md#baremetalsolutionprojectslocationssshkeyscreate) - Register a public SSH key in the specified project for use with the interactive serial console feature.
* [BaremetalsolutionProjectsLocationsSSHKeysList](docs/projects/README.md#baremetalsolutionprojectslocationssshkeyslist) - Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
* [BaremetalsolutionProjectsLocationsVolumesList](docs/projects/README.md#baremetalsolutionprojectslocationsvolumeslist) - List storage volumes in a given project and location.
* [BaremetalsolutionProjectsLocationsVolumesLunsEvict](docs/projects/README.md#baremetalsolutionprojectslocationsvolumeslunsevict) - Skips lun's cooloff and deletes it now. Lun must be in cooloff state.
* [BaremetalsolutionProjectsLocationsVolumesLunsList](docs/projects/README.md#baremetalsolutionprojectslocationsvolumeslunslist) - List storage volume luns for given storage volume.
* [BaremetalsolutionProjectsLocationsVolumesPatch](docs/projects/README.md#baremetalsolutionprojectslocationsvolumespatch) - Update details of a single storage volume.
* [BaremetalsolutionProjectsLocationsVolumesRename](docs/projects/README.md#baremetalsolutionprojectslocationsvolumesrename) - RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.
* [BaremetalsolutionProjectsLocationsVolumesResize](docs/projects/README.md#baremetalsolutionprojectslocationsvolumesresize) - Emergency Volume resize.
* [BaremetalsolutionProjectsLocationsVolumesSnapshotsCreate](docs/projects/README.md#baremetalsolutionprojectslocationsvolumessnapshotscreate) - Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [BaremetalsolutionProjectsLocationsVolumesSnapshotsDelete](docs/projects/README.md#baremetalsolutionprojectslocationsvolumessnapshotsdelete) - Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [BaremetalsolutionProjectsLocationsVolumesSnapshotsGet](docs/projects/README.md#baremetalsolutionprojectslocationsvolumessnapshotsget) - Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [BaremetalsolutionProjectsLocationsVolumesSnapshotsList](docs/projects/README.md#baremetalsolutionprojectslocationsvolumessnapshotslist) - Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
* [BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot](docs/projects/README.md#baremetalsolutionprojectslocationsvolumessnapshotsrestorevolumesnapshot) - Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
