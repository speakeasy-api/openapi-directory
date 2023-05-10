# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->location = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch($request, $requestSecurity);

    if ($response->fetchInstanceProvisioningSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch](docs/projects/README.md#baremetalsolutionprojectslocationsinstanceprovisioningsettingsfetch) - Get instance provisioning settings for a given project. This is hidden method used by UI only.
* [baremetalsolutionProjectsLocationsInstancesCreate](docs/projects/README.md#baremetalsolutionprojectslocationsinstancescreate) - Create an Instance.
* [baremetalsolutionProjectsLocationsInstancesDetachLun](docs/projects/README.md#baremetalsolutionprojectslocationsinstancesdetachlun) - Detach LUN from Instance.
* [baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole](docs/projects/README.md#baremetalsolutionprojectslocationsinstancesdisableinteractiveserialconsole) - Disable the interactive serial console feature on an instance.
* [baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole](docs/projects/README.md#baremetalsolutionprojectslocationsinstancesenableinteractiveserialconsole) - Enable the interactive serial console feature on an instance.
* [baremetalsolutionProjectsLocationsInstancesList](docs/projects/README.md#baremetalsolutionprojectslocationsinstanceslist) - List servers in a given project and location.
* [baremetalsolutionProjectsLocationsInstancesReset](docs/projects/README.md#baremetalsolutionprojectslocationsinstancesreset) - Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
* [baremetalsolutionProjectsLocationsInstancesStart](docs/projects/README.md#baremetalsolutionprojectslocationsinstancesstart) - Starts a server that was shutdown.
* [baremetalsolutionProjectsLocationsInstancesStop](docs/projects/README.md#baremetalsolutionprojectslocationsinstancesstop) - Stop a running server.
* [baremetalsolutionProjectsLocationsList](docs/projects/README.md#baremetalsolutionprojectslocationslist) - Lists information about the supported locations for this service.
* [baremetalsolutionProjectsLocationsNetworksList](docs/projects/README.md#baremetalsolutionprojectslocationsnetworkslist) - List network in a given project and location.
* [baremetalsolutionProjectsLocationsNetworksListNetworkUsage](docs/projects/README.md#baremetalsolutionprojectslocationsnetworkslistnetworkusage) - List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
* [baremetalsolutionProjectsLocationsNfsSharesCreate](docs/projects/README.md#baremetalsolutionprojectslocationsnfssharescreate) - Create an NFS share.
* [baremetalsolutionProjectsLocationsNfsSharesList](docs/projects/README.md#baremetalsolutionprojectslocationsnfsshareslist) - List NFS shares.
* [baremetalsolutionProjectsLocationsProvisioningConfigsCreate](docs/projects/README.md#baremetalsolutionprojectslocationsprovisioningconfigscreate) - Create new ProvisioningConfig.
* [baremetalsolutionProjectsLocationsProvisioningConfigsSubmit](docs/projects/README.md#baremetalsolutionprojectslocationsprovisioningconfigssubmit) - Submit a provisiong configuration for a given project.
* [baremetalsolutionProjectsLocationsProvisioningQuotasList](docs/projects/README.md#baremetalsolutionprojectslocationsprovisioningquotaslist) - List the budget details to provision resources on a given project.
* [baremetalsolutionProjectsLocationsSshKeysCreate](docs/projects/README.md#baremetalsolutionprojectslocationssshkeyscreate) - Register a public SSH key in the specified project for use with the interactive serial console feature.
* [baremetalsolutionProjectsLocationsSshKeysList](docs/projects/README.md#baremetalsolutionprojectslocationssshkeyslist) - Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
* [baremetalsolutionProjectsLocationsVolumesList](docs/projects/README.md#baremetalsolutionprojectslocationsvolumeslist) - List storage volumes in a given project and location.
* [baremetalsolutionProjectsLocationsVolumesLunsEvict](docs/projects/README.md#baremetalsolutionprojectslocationsvolumeslunsevict) - Skips lun's cooloff and deletes it now. Lun must be in cooloff state.
* [baremetalsolutionProjectsLocationsVolumesLunsList](docs/projects/README.md#baremetalsolutionprojectslocationsvolumeslunslist) - List storage volume luns for given storage volume.
* [baremetalsolutionProjectsLocationsVolumesPatch](docs/projects/README.md#baremetalsolutionprojectslocationsvolumespatch) - Update details of a single storage volume.
* [baremetalsolutionProjectsLocationsVolumesRename](docs/projects/README.md#baremetalsolutionprojectslocationsvolumesrename) - RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.
* [baremetalsolutionProjectsLocationsVolumesResize](docs/projects/README.md#baremetalsolutionprojectslocationsvolumesresize) - Emergency Volume resize.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsCreate](docs/projects/README.md#baremetalsolutionprojectslocationsvolumessnapshotscreate) - Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsDelete](docs/projects/README.md#baremetalsolutionprojectslocationsvolumessnapshotsdelete) - Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsGet](docs/projects/README.md#baremetalsolutionprojectslocationsvolumessnapshotsget) - Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsList](docs/projects/README.md#baremetalsolutionprojectslocationsvolumessnapshotslist) - Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot](docs/projects/README.md#baremetalsolutionprojectslocationsvolumessnapshotsrestorevolumesnapshot) - Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
