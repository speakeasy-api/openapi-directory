# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/managedidentities/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest(
    dollar_xgafv="2",
    attach_trust_request_input=shared.AttachTrustRequestInput(
        trust=shared.TrustInput(
            selective_authentication=False,
            target_dns_ip_addresses=[
                "distinctio",
                "quibusdam",
                "unde",
            ],
            target_domain_name="nulla",
            trust_direction="OUTBOUND",
            trust_handshake_secret="illum",
            trust_type="FOREST",
        ),
    ),
    access_token="error",
    alt="media",
    callback="suscipit",
    fields_="iure",
    key="magnam",
    name="debitis",
    oauth_token="ipsa",
    pretty_print=False,
    quota_user="delectus",
    upload_type="tempora",
    upload_protocol="suscipit",
)
    
res = s.projects.managedidentities_projects_locations_global_domains_attach_trust(req, operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `managedidentities_projects_locations_global_domains_attach_trust` - Adds an AD trust to a domain.
* `managedidentities_projects_locations_global_domains_backups_create` - Creates a Backup for a domain.
* `managedidentities_projects_locations_global_domains_backups_list` - Lists Backup in a given project.
* `managedidentities_projects_locations_global_domains_check_migration_permission` - CheckMigrationPermission API gets the current state of DomainMigration
* `managedidentities_projects_locations_global_domains_create` - Creates a Microsoft AD domain.
* `managedidentities_projects_locations_global_domains_detach_trust` - Removes an AD trust.
* `managedidentities_projects_locations_global_domains_disable_migration` - Disable Domain Migration
* `managedidentities_projects_locations_global_domains_domain_join_machine` - DomainJoinMachine API joins a Compute Engine VM to the domain
* `managedidentities_projects_locations_global_domains_enable_migration` - Enable Domain Migration
* `managedidentities_projects_locations_global_domains_extend_schema` - Extend Schema for Domain
* `managedidentities_projects_locations_global_domains_get_ldapssettings` - Gets the domain ldaps settings.
* `managedidentities_projects_locations_global_domains_list` - Lists domains in a project.
* `managedidentities_projects_locations_global_domains_reconfigure_trust` - Updates the DNS conditional forwarder.
* `managedidentities_projects_locations_global_domains_reset_admin_password` - Resets a domain's administrator password.
* `managedidentities_projects_locations_global_domains_restore` - RestoreBackup restores domain mentioned in the RestoreBackupRequest
* `managedidentities_projects_locations_global_domains_sql_integrations_list` - Lists SqlIntegrations in a given domain.
* `managedidentities_projects_locations_global_domains_update_ldapssettings` - Patches a single ldaps settings.
* `managedidentities_projects_locations_global_domains_validate_trust` - Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.
* `managedidentities_projects_locations_global_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `managedidentities_projects_locations_global_peerings_create` - Creates a Peering for Managed AD instance.
* `managedidentities_projects_locations_global_peerings_delete` - Deletes identified Peering.
* `managedidentities_projects_locations_global_peerings_get` - Gets details of a single Peering.
* `managedidentities_projects_locations_global_peerings_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `managedidentities_projects_locations_global_peerings_list` - Lists Peerings in a given project.
* `managedidentities_projects_locations_global_peerings_patch` - Updates the labels for specified Peering.
* `managedidentities_projects_locations_global_peerings_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `managedidentities_projects_locations_global_peerings_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `managedidentities_projects_locations_list` - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
