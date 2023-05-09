# projects

### Available Operations

* [managedidentitiesProjectsLocationsGlobalDomainsAttachTrust](#managedidentitiesprojectslocationsglobaldomainsattachtrust) - Adds AD trust in a given domain. Operation
* [managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate](#managedidentitiesprojectslocationsglobaldomainsbackupscreate) - Creates a Backup for a domain.
* [managedidentitiesProjectsLocationsGlobalDomainsBackupsList](#managedidentitiesprojectslocationsglobaldomainsbackupslist) - Lists Backup in a given project.
* [managedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission](#managedidentitiesprojectslocationsglobaldomainscheckmigrationpermission) - AuditMigration API gets the current state of DomainMigration
* [managedidentitiesProjectsLocationsGlobalDomainsCreate](#managedidentitiesprojectslocationsglobaldomainscreate) - Creates a Microsoft AD Domain in a given project. Operation
* [managedidentitiesProjectsLocationsGlobalDomainsDetachTrust](#managedidentitiesprojectslocationsglobaldomainsdetachtrust) - Removes identified trust. Operation
* [managedidentitiesProjectsLocationsGlobalDomainsDisableMigration](#managedidentitiesprojectslocationsglobaldomainsdisablemigration) - Disable Domain Migration
* [managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine](#managedidentitiesprojectslocationsglobaldomainsdomainjoinmachine) - DomainJoinMachine API joins a Compute Engine VM to the domain
* [managedidentitiesProjectsLocationsGlobalDomainsEnableMigration](#managedidentitiesprojectslocationsglobaldomainsenablemigration) - Enable Domain Migration
* [managedidentitiesProjectsLocationsGlobalDomainsExtendSchema](#managedidentitiesprojectslocationsglobaldomainsextendschema) - Extend Schema for Domain
* [managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings](#managedidentitiesprojectslocationsglobaldomainsgetldapssettings) - Gets the domain ldaps settings.
* [managedidentitiesProjectsLocationsGlobalDomainsList](#managedidentitiesprojectslocationsglobaldomainslist) - Lists Domains in a given project.
* [managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust](#managedidentitiesprojectslocationsglobaldomainsreconfiguretrust) - Updates the dns conditional forwarder. Operation
* [managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword](#managedidentitiesprojectslocationsglobaldomainsresetadminpassword) - Resets managed identities admin password identified by managed_identities_admin_name
* [managedidentitiesProjectsLocationsGlobalDomainsRestore](#managedidentitiesprojectslocationsglobaldomainsrestore) - RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
* [managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList](#managedidentitiesprojectslocationsglobaldomainssqlintegrationslist) - Lists SQLIntegrations in a given domain.
* [managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings](#managedidentitiesprojectslocationsglobaldomainsupdateldapssettings) - Patches a single ldaps settings.
* [managedidentitiesProjectsLocationsGlobalDomainsValidateTrust](#managedidentitiesprojectslocationsglobaldomainsvalidatetrust) - Validate the trust state Operation
* [managedidentitiesProjectsLocationsGlobalOperationsCancel](#managedidentitiesprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [managedidentitiesProjectsLocationsGlobalOperationsList](#managedidentitiesprojectslocationsglobaloperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [managedidentitiesProjectsLocationsGlobalPeeringsCreate](#managedidentitiesprojectslocationsglobalpeeringscreate) - Creates a Peering for Managed AD instance.
* [managedidentitiesProjectsLocationsGlobalPeeringsDelete](#managedidentitiesprojectslocationsglobalpeeringsdelete) - Deletes identified Peering.
* [managedidentitiesProjectsLocationsGlobalPeeringsGet](#managedidentitiesprojectslocationsglobalpeeringsget) - Gets details of a single Peering.
* [managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy](#managedidentitiesprojectslocationsglobalpeeringsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [managedidentitiesProjectsLocationsGlobalPeeringsList](#managedidentitiesprojectslocationsglobalpeeringslist) - Lists Peerings in a given project.
* [managedidentitiesProjectsLocationsGlobalPeeringsPatch](#managedidentitiesprojectslocationsglobalpeeringspatch) - Updates the labels for specified Peering.
* [managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy](#managedidentitiesprojectslocationsglobalpeeringssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions](#managedidentitiesprojectslocationsglobalpeeringstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [managedidentitiesProjectsLocationsList](#managedidentitiesprojectslocationslist) - Lists information about the supported locations for this service.

## managedidentitiesProjectsLocationsGlobalDomainsAttachTrust

Adds AD trust in a given domain. Operation

### Example Usage

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

            ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                attachTrustRequest = new AttachTrustRequest() {{
                    trust = new Trust() {{
                        createTime = "ab";
                        lastKnownTrustConnectedHeartbeatTime = "quis";
                        selectiveAuthentication = false;
                        state = TrustStateEnum.STATE_UNSPECIFIED;
                        stateDescription = "deserunt";
                        targetDnsIpAddresses = new String[]{{
                            add("ipsam"),
                        }};
                        targetDomainName = "repellendus";
                        trustDirection = TrustTrustDirectionEnum.BIDIRECTIONAL;
                        trustHandshakeSecret = "quo";
                        trustType = TrustTrustTypeEnum.TRUST_TYPE_UNSPECIFIED;
                        updateTime = "at";
                    }};;
                }};;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "quod";
                key = "quod";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "porro";
                uploadProtocol = "dolorum";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsAttachTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity("dicta", "nam") {{
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

## managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate

Creates a Backup for a domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackupInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                backupInput = new BackupInput() {{
                    description = "fugit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("hic", "optio");
                        put("totam", "beatae");
                        put("commodi", "molestiae");
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                backupId = "impedit";
                callback = "cum";
                fields = "esse";
                key = "ipsum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "perferendis";
                uploadProtocol = "ad";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate(req, new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateSecurity("natus", "sed") {{
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

## managedidentitiesProjectsLocationsGlobalDomainsBackupsList

Lists Backup in a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "saepe";
                filter = "fuga";
                key = "in";
                oauthToken = "corporis";
                orderBy = "iste";
                pageSize = 437032L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "architecto";
                uploadProtocol = "ipsa";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsBackupsList(req, new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListSecurity("reiciendis", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBackupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission

AuditMigration API gets the current state of DomainMigration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dolorem", "corporis");
                }};
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "omnis";
                key = "nemo";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "accusantium";
                uploadProtocol = "iure";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission(req, new ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionSecurity("culpa", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.checkMigrationPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsGlobalDomainsCreate

Creates a Microsoft AD Domain in a given project. Operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Domain;
import org.openapis.openapi.models.shared.DomainStateEnum;
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

            ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                domain = new Domain() {{
                    auditLogsEnabled = false;
                    authorizedNetworks = new String[]{{
                        add("dolorem"),
                        add("culpa"),
                        add("consequuntur"),
                    }};
                    createTime = "repellat";
                    fqdn = "mollitia";
                    labels = new java.util.HashMap<String, String>() {{
                        put("numquam", "commodi");
                        put("quam", "molestiae");
                        put("velit", "error");
                    }};
                    locations = new String[]{{
                        add("quis"),
                    }};
                    managedIdentitiesAdminName = "vitae";
                    name = "Matt Hamill";
                    reservedIpRange = "sequi";
                    state = DomainStateEnum.DOWN;
                    statusMessage = "ipsam";
                    trusts = new org.openapis.openapi.models.shared.Trust[]{{
                        add(new Trust() {{
                            createTime = "possimus";
                            lastKnownTrustConnectedHeartbeatTime = "aut";
                            selectiveAuthentication = false;
                            state = TrustStateEnum.STATE_UNSPECIFIED;
                            stateDescription = "error";
                            targetDnsIpAddresses = new String[]{{
                                add("laborum"),
                                add("quasi"),
                                add("reiciendis"),
                                add("voluptatibus"),
                            }};
                            targetDomainName = "vero";
                            trustDirection = TrustTrustDirectionEnum.INBOUND;
                            trustHandshakeSecret = "praesentium";
                            trustType = TrustTrustTypeEnum.EXTERNAL;
                            updateTime = "ipsa";
                        }}),
                        add(new Trust() {{
                            createTime = "omnis";
                            lastKnownTrustConnectedHeartbeatTime = "voluptate";
                            selectiveAuthentication = false;
                            state = TrustStateEnum.CONNECTED;
                            stateDescription = "perferendis";
                            targetDnsIpAddresses = new String[]{{
                                add("reprehenderit"),
                            }};
                            targetDomainName = "ut";
                            trustDirection = TrustTrustDirectionEnum.BIDIRECTIONAL;
                            trustHandshakeSecret = "dicta";
                            trustType = TrustTrustTypeEnum.FOREST;
                            updateTime = "dolore";
                        }}),
                        add(new Trust() {{
                            createTime = "iusto";
                            lastKnownTrustConnectedHeartbeatTime = "dicta";
                            selectiveAuthentication = false;
                            state = TrustStateEnum.CONNECTED;
                            stateDescription = "enim";
                            targetDnsIpAddresses = new String[]{{
                                add("commodi"),
                                add("repudiandae"),
                                add("quae"),
                                add("ipsum"),
                            }};
                            targetDomainName = "quidem";
                            trustDirection = TrustTrustDirectionEnum.OUTBOUND;
                            trustHandshakeSecret = "excepturi";
                            trustType = TrustTrustTypeEnum.EXTERNAL;
                            updateTime = "modi";
                        }}),
                    }};
                    updateTime = "praesentium";
                }};;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "quasi";
                domainName = "repudiandae";
                fields = "sint";
                key = "veritatis";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "enim";
                uploadProtocol = "consequatur";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsCreateResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsCreate(req, new ManagedidentitiesProjectsLocationsGlobalDomainsCreateSecurity("est", "quibusdam") {{
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

## managedidentitiesProjectsLocationsGlobalDomainsDetachTrust

Removes identified trust. Operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DetachTrustRequest;
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

            ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest("explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                detachTrustRequest = new DetachTrustRequest() {{
                    trust = new Trust() {{
                        createTime = "distinctio";
                        lastKnownTrustConnectedHeartbeatTime = "quibusdam";
                        selectiveAuthentication = false;
                        state = TrustStateEnum.CREATING;
                        stateDescription = "modi";
                        targetDnsIpAddresses = new String[]{{
                            add("aliquid"),
                        }};
                        targetDomainName = "cupiditate";
                        trustDirection = TrustTrustDirectionEnum.OUTBOUND;
                        trustHandshakeSecret = "perferendis";
                        trustType = TrustTrustTypeEnum.TRUST_TYPE_UNSPECIFIED;
                        updateTime = "assumenda";
                    }};;
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "dolorum";
                key = "excepturi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "tempore";
                uploadProtocol = "labore";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsDetachTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustSecurity("delectus", "eum") {{
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

## managedidentitiesProjectsLocationsGlobalDomainsDisableMigration

Disable Domain Migration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("aliquid", "provident");
                    put("necessitatibus", "sint");
                    put("officia", "dolor");
                }};
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "in";
                key = "in";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "rerum";
                uploadProtocol = "dicta";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsDisableMigration(req, new ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity("magnam", "cumque") {{
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

## managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine

DomainJoinMachine API joins a Compute Engine VM to the domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DomainJoinMachineRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineRequest("facere") {{
                dollarXgafv = XgafvEnum.ONE;
                domainJoinMachineRequest = new DomainJoinMachineRequest() {{
                    force = false;
                    ouName = "aliquid";
                    vmIdToken = "laborum";
                }};;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "enim";
                key = "accusamus";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "provident";
                uploadProtocol = "nam";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine(req, new ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineSecurity("id", "blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.domainJoinMachineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsGlobalDomainsEnableMigration

Enable Domain Migration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnableMigrationRequest;
import org.openapis.openapi.models.shared.OnPremDomainDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                enableMigrationRequest = new EnableMigrationRequest() {{
                    migratingDomains = new org.openapis.openapi.models.shared.OnPremDomainDetails[]{{
                        add(new OnPremDomainDetails() {{
                            disableSidFiltering = false;
                            domainName = "deserunt";
                        }}),
                    }};
                }};;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "omnis";
                key = "molestiae";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "magnam";
                uploadProtocol = "distinctio";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsEnableMigration(req, new ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationSecurity("id", "labore") {{
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

## managedidentitiesProjectsLocationsGlobalDomainsExtendSchema

Extend Schema for Domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExtendSchemaRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                extendSchemaRequest = new ExtendSchemaRequest() {{
                    description = "natus";
                    fileContents = "nobis";
                    gcsPath = "eum";
                }};;
                accessToken = "vero";
                alt = AltEnum.JSON;
                callback = "architecto";
                fields = "magnam";
                key = "et";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "provident";
                uploadProtocol = "quos";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsExtendSchema(req, new ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaSecurity("sint", "accusantium") {{
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

## managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings

Gets the domain ldaps settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "dolor";
                key = "necessitatibus";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "quasi";
                uploadProtocol = "iure";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings(req, new ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity("doloribus", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ldapsSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsGlobalDomainsList

Lists Domains in a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsListRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsListResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsListRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsListRequest("eius") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "architecto";
                filter = "architecto";
                key = "repudiandae";
                oauthToken = "ullam";
                orderBy = "expedita";
                pageSize = 469249L;
                pageToken = "repellat";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "sed";
                uploadProtocol = "saepe";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsListResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsList(req, new ManagedidentitiesProjectsLocationsGlobalDomainsListSecurity("pariatur", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust

Updates the dns conditional forwarder. Operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReconfigureTrustRequest;
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

            ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                reconfigureTrustRequest = new ReconfigureTrustRequest() {{
                    trust = new Trust() {{
                        createTime = "natus";
                        lastKnownTrustConnectedHeartbeatTime = "magni";
                        selectiveAuthentication = false;
                        state = TrustStateEnum.STATE_UNSPECIFIED;
                        stateDescription = "quo";
                        targetDnsIpAddresses = new String[]{{
                            add("pariatur"),
                            add("maxime"),
                            add("ea"),
                            add("excepturi"),
                        }};
                        targetDomainName = "odit";
                        trustDirection = TrustTrustDirectionEnum.INBOUND;
                        trustHandshakeSecret = "accusantium";
                        trustType = TrustTrustTypeEnum.TRUST_TYPE_UNSPECIFIED;
                        updateTime = "maiores";
                    }};;
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "autem";
                key = "nam";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "nemo";
                uploadProtocol = "voluptatibus";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustSecurity("perferendis", "fugiat") {{
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

## managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword

Resets managed identities admin password identified by managed_identities_admin_name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("corporis", "hic");
                    put("libero", "nobis");
                    put("dolores", "quis");
                    put("totam", "dignissimos");
                }};
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "nesciunt";
                fields = "eos";
                key = "perferendis";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "quam";
                uploadProtocol = "dolor";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword(req, new ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordSecurity("vero", "nostrum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resetAdminPasswordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsGlobalDomainsRestore

RestoreDomain restores domain backup mentioned in the RestoreDomainRequest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsRestoreResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsRestoreSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RestoreDomainRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                restoreDomainRequest = new RestoreDomainRequest() {{
                    backupId = "omnis";
                }};;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "porro";
                key = "consequuntur";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "eaque";
                uploadProtocol = "occaecati";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsRestoreResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsRestore(req, new ManagedidentitiesProjectsLocationsGlobalDomainsRestoreSecurity("rerum", "adipisci") {{
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

## managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList

Lists SQLIntegrations in a given domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListRequest("asperiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "deleniti";
                filter = "pariatur";
                key = "provident";
                oauthToken = "nobis";
                orderBy = "libero";
                pageSize = 964490L;
                pageToken = "quaerat";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "aliquid";
                uploadProtocol = "dolorem";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList(req, new ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListSecurity("dolorem", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSQLIntegrationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings

Patches a single ldaps settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Certificate;
import org.openapis.openapi.models.shared.LDAPSSettingsInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsRequest("qui") {{
                dollarXgafv = XgafvEnum.ONE;
                ldapsSettingsInput = new LDAPSSettingsInput() {{
                    certificate = new Certificate() {{
                        expireTime = "hic";
                        issuingCertificate = new Certificate();;
                        subject = "excepturi";
                        subjectAlternativeName = new String[]{{
                            add("voluptate"),
                            add("dignissimos"),
                            add("reiciendis"),
                        }};
                        thumbprint = "amet";
                    }};;
                    certificatePassword = "dolorum";
                    certificatePfx = "numquam";
                    name = "Melissa Bednar";
                }};;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "voluptatibus";
                key = "voluptas";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "eos";
                updateMask = "atque";
                uploadType = "sit";
                uploadProtocol = "fugiat";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings(req, new ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsSecurity("ab", "soluta") {{
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

## managedidentitiesProjectsLocationsGlobalDomainsValidateTrust

Validate the trust state Operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Trust;
import org.openapis.openapi.models.shared.TrustStateEnum;
import org.openapis.openapi.models.shared.TrustTrustDirectionEnum;
import org.openapis.openapi.models.shared.TrustTrustTypeEnum;
import org.openapis.openapi.models.shared.ValidateTrustRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                validateTrustRequest = new ValidateTrustRequest() {{
                    trust = new Trust() {{
                        createTime = "voluptate";
                        lastKnownTrustConnectedHeartbeatTime = "dolorum";
                        selectiveAuthentication = false;
                        state = TrustStateEnum.DELETING;
                        stateDescription = "omnis";
                        targetDnsIpAddresses = new String[]{{
                            add("distinctio"),
                            add("asperiores"),
                            add("nihil"),
                            add("ipsum"),
                        }};
                        targetDomainName = "voluptate";
                        trustDirection = TrustTrustDirectionEnum.OUTBOUND;
                        trustHandshakeSecret = "saepe";
                        trustType = TrustTrustTypeEnum.TRUST_TYPE_UNSPECIFIED;
                        updateTime = "aspernatur";
                    }};;
                }};;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "optio";
                fields = "accusamus";
                key = "ad";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "deserunt";
                uploadProtocol = "provident";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsValidateTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustSecurity("minima", "repellendus") {{
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

## managedidentitiesProjectsLocationsGlobalOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalOperationsCancelResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest req = new ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("at", "quaerat");
                }};
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "officiis";
                key = "qui";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "esse";
                uploadProtocol = "harum";
            }};            

            ManagedidentitiesProjectsLocationsGlobalOperationsCancelResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalOperationsCancel(req, new ManagedidentitiesProjectsLocationsGlobalOperationsCancelSecurity("iusto", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsGlobalOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalOperationsListRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalOperationsListResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalOperationsListRequest req = new ManagedidentitiesProjectsLocationsGlobalOperationsListRequest("quisquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "numquam";
                filter = "enim";
                key = "dolorem";
                oauthToken = "sapiente";
                pageSize = 518201L;
                pageToken = "nihil";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "expedita";
                uploadProtocol = "neque";
            }};            

            ManagedidentitiesProjectsLocationsGlobalOperationsListResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalOperationsList(req, new ManagedidentitiesProjectsLocationsGlobalOperationsListSecurity("sed", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsGlobalPeeringsCreate

Creates a Peering for Managed AD instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PeeringInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                peeringInput = new PeeringInput() {{
                    authorizedNetwork = "deserunt";
                    domainResource = "quam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("incidunt", "qui");
                    }};
                }};;
                accessToken = "cupiditate";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "soluta";
                key = "dicta";
                oauthToken = "laborum";
                peeringId = "totam";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "aspernatur";
                uploadProtocol = "dolores";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsCreate(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity("distinctio", "facilis") {{
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

## managedidentitiesProjectsLocationsGlobalPeeringsDelete

Deletes identified Peering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest("aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "qui";
                fields = "neque";
                key = "fugit";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "sunt";
                uploadProtocol = "ullam";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsDelete(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteSecurity("nam", "hic") {{
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

## managedidentitiesProjectsLocationsGlobalPeeringsGet

Gets details of a single Peering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "et";
                fields = "saepe";
                key = "ipsum";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "quos";
                uploadProtocol = "tempore";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsGetResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsGet(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsGetSecurity("cupiditate", "aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.peering != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolore";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "dolorum";
                key = "architecto";
                oauthToken = "quae";
                optionsRequestedPolicyVersion = 16429L;
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "itaque";
                uploadProtocol = "consequatur";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicySecurity("est", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsGlobalPeeringsList

Lists Peerings in a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsListResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "qui";
                filter = "quae";
                key = "laudantium";
                oauthToken = "odio";
                orderBy = "occaecati";
                pageSize = 977496L;
                pageToken = "quisquam";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "omnis";
                uploadProtocol = "quis";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsListResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsList(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsListSecurity("ipsum", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPeeringsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsGlobalPeeringsPatch

Updates the labels for specified Peering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsPatchRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsPatchResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PeeringInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalPeeringsPatchRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsPatchRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                peeringInput = new PeeringInput() {{
                    authorizedNetwork = "vero";
                    domainResource = "tenetur";
                    labels = new java.util.HashMap<String, String>() {{
                        put("hic", "distinctio");
                        put("quod", "odio");
                    }};
                }};;
                accessToken = "similique";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "ducimus";
                key = "dolore";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "illum";
                updateMask = "sequi";
                uploadType = "natus";
                uploadProtocol = "impedit";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsPatchResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsPatch(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsPatchSecurity("aut", "voluptatibus") {{
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

## managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest("exercitationem") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "porro";
                                    expression = "maiores";
                                    location = "doloribus";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("ducimus"),
                                    add("alias"),
                                    add("officia"),
                                    add("tempora"),
                                }};
                                role = "ipsam";
                            }}),
                        }};
                        etag = "ea";
                        version = 136900;
                    }};;
                }};;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "magnam";
                fields = "ratione";
                key = "ex";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "dolor";
                uploadProtocol = "maiores";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity("quasi", "ex") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest("nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("nostrum"),
                        add("sapiente"),
                        add("quisquam"),
                        add("saepe"),
                    }};
                }};;
                accessToken = "ea";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "veniam";
                key = "aliquid";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "ea";
                uploadProtocol = "quo";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity("consectetur", "recusandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## managedidentitiesProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsListRequest req = new ManagedidentitiesProjectsLocationsListRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "aut";
                filter = "aut";
                key = "deleniti";
                oauthToken = "impedit";
                pageSize = 304582L;
                pageToken = "fugit";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "inventore";
                uploadProtocol = "non";
            }};            

            ManagedidentitiesProjectsLocationsListResponse res = sdk.projects.managedidentitiesProjectsLocationsList(req, new ManagedidentitiesProjectsLocationsListSecurity("et", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
