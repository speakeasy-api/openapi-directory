# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/baremetalsolution/v2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    location="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.projects.baremetalsolution_projects_locations_instance_provisioning_settings_fetch(req, operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.fetch_instance_provisioning_settings_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `baremetalsolution_projects_locations_instance_provisioning_settings_fetch` - Get instance provisioning settings for a given project. This is hidden method used by UI only.
* `baremetalsolution_projects_locations_instances_create` - Create an Instance.
* `baremetalsolution_projects_locations_instances_detach_lun` - Detach LUN from Instance.
* `baremetalsolution_projects_locations_instances_disable_interactive_serial_console` - Disable the interactive serial console feature on an instance.
* `baremetalsolution_projects_locations_instances_enable_interactive_serial_console` - Enable the interactive serial console feature on an instance.
* `baremetalsolution_projects_locations_instances_list` - List servers in a given project and location.
* `baremetalsolution_projects_locations_instances_reset` - Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
* `baremetalsolution_projects_locations_instances_start` - Starts a server that was shutdown.
* `baremetalsolution_projects_locations_instances_stop` - Stop a running server.
* `baremetalsolution_projects_locations_list` - Lists information about the supported locations for this service.
* `baremetalsolution_projects_locations_networks_list` - List network in a given project and location.
* `baremetalsolution_projects_locations_networks_list_network_usage` - List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
* `baremetalsolution_projects_locations_nfs_shares_create` - Create an NFS share.
* `baremetalsolution_projects_locations_nfs_shares_list` - List NFS shares.
* `baremetalsolution_projects_locations_provisioning_configs_create` - Create new ProvisioningConfig.
* `baremetalsolution_projects_locations_provisioning_configs_submit` - Submit a provisiong configuration for a given project.
* `baremetalsolution_projects_locations_provisioning_quotas_list` - List the budget details to provision resources on a given project.
* `baremetalsolution_projects_locations_ssh_keys_create` - Register a public SSH key in the specified project for use with the interactive serial console feature.
* `baremetalsolution_projects_locations_ssh_keys_list` - Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
* `baremetalsolution_projects_locations_volumes_list` - List storage volumes in a given project and location.
* `baremetalsolution_projects_locations_volumes_luns_evict` - Skips lun's cooloff and deletes it now. Lun must be in cooloff state.
* `baremetalsolution_projects_locations_volumes_luns_list` - List storage volume luns for given storage volume.
* `baremetalsolution_projects_locations_volumes_patch` - Update details of a single storage volume.
* `baremetalsolution_projects_locations_volumes_rename` - RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.
* `baremetalsolution_projects_locations_volumes_resize` - Emergency Volume resize.
* `baremetalsolution_projects_locations_volumes_snapshots_create` - Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `baremetalsolution_projects_locations_volumes_snapshots_delete` - Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `baremetalsolution_projects_locations_volumes_snapshots_get` - Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
* `baremetalsolution_projects_locations_volumes_snapshots_list` - Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
* `baremetalsolution_projects_locations_volumes_snapshots_restore_volume_snapshot` - Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
