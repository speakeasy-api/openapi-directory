# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttachTrustRequest;
import org.openapis.openapi.models.shared.Trust;
import org.openapis.openapi.models.shared.TrustStateEnum;
import org.openapis.openapi.models.shared.TrustTrustDirectionEnum;
import org.openapis.openapi.models.shared.TrustTrustTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                attachTrustRequest = new AttachTrustRequest() {{
                    trust = new Trust() {{
                        createTime = "distinctio";
                        lastKnownTrustConnectedHeartbeatTime = "quibusdam";
                        selectiveAuthentication = false;
                        state = TrustStateEnum.DELETING;
                        stateDescription = "nulla";
                        targetDnsIpAddresses = new String[]{{
                            add("illum"),
                            add("vel"),
                            add("error"),
                        }};
                        targetDomainName = "deserunt";
                        trustDirection = TrustTrustDirectionEnum.INBOUND;
                        trustHandshakeSecret = "iure";
                        trustType = TrustTrustTypeEnum.TRUST_TYPE_UNSPECIFIED;
                        updateTime = "debitis";
                    }};;
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsAttachTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity("excepturi", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [managedidentitiesProjectsLocationsGlobalDomainsAttachTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsattachtrust) - Adds AD trust in a given domain. Operation
* [managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsbackupscreate) - Creates a Backup for a domain.
* [managedidentitiesProjectsLocationsGlobalDomainsBackupsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsbackupslist) - Lists Backup in a given project.
* [managedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainscheckmigrationpermission) - AuditMigration API gets the current state of DomainMigration
* [managedidentitiesProjectsLocationsGlobalDomainsCreate](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainscreate) - Creates a Microsoft AD Domain in a given project. Operation
* [managedidentitiesProjectsLocationsGlobalDomainsDetachTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsdetachtrust) - Removes identified trust. Operation
* [managedidentitiesProjectsLocationsGlobalDomainsDisableMigration](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsdisablemigration) - Disable Domain Migration
* [managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsdomainjoinmachine) - DomainJoinMachine API joins a Compute Engine VM to the domain
* [managedidentitiesProjectsLocationsGlobalDomainsEnableMigration](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsenablemigration) - Enable Domain Migration
* [managedidentitiesProjectsLocationsGlobalDomainsExtendSchema](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsextendschema) - Extend Schema for Domain
* [managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsgetldapssettings) - Gets the domain ldaps settings.
* [managedidentitiesProjectsLocationsGlobalDomainsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainslist) - Lists Domains in a given project.
* [managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsreconfiguretrust) - Updates the dns conditional forwarder. Operation
* [managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsresetadminpassword) - Resets managed identities admin password identified by managed_identities_admin_name
* [managedidentitiesProjectsLocationsGlobalDomainsRestore](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsrestore) - RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
* [managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainssqlintegrationslist) - Lists SQLIntegrations in a given domain.
* [managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsupdateldapssettings) - Patches a single ldaps settings.
* [managedidentitiesProjectsLocationsGlobalDomainsValidateTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsvalidatetrust) - Validate the trust state Operation
* [managedidentitiesProjectsLocationsGlobalOperationsCancel](docs/projects/README.md#managedidentitiesprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [managedidentitiesProjectsLocationsGlobalOperationsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaloperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [managedidentitiesProjectsLocationsGlobalPeeringsCreate](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringscreate) - Creates a Peering for Managed AD instance.
* [managedidentitiesProjectsLocationsGlobalPeeringsDelete](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringsdelete) - Deletes identified Peering.
* [managedidentitiesProjectsLocationsGlobalPeeringsGet](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringsget) - Gets details of a single Peering.
* [managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [managedidentitiesProjectsLocationsGlobalPeeringsList](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringslist) - Lists Peerings in a given project.
* [managedidentitiesProjectsLocationsGlobalPeeringsPatch](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringspatch) - Updates the labels for specified Peering.
* [managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [managedidentitiesProjectsLocationsList](docs/projects/README.md#managedidentitiesprojectslocationslist) - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
