# projects

### Available Operations

* [managedidentitiesProjectsLocationsGlobalDomainsAttachTrust](#managedidentitiesprojectslocationsglobaldomainsattachtrust) - Adds an AD trust to a domain.
* [managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate](#managedidentitiesprojectslocationsglobaldomainsbackupscreate) - Creates a Backup for a domain.
* [managedidentitiesProjectsLocationsGlobalDomainsBackupsList](#managedidentitiesprojectslocationsglobaldomainsbackupslist) - Lists Backup in a given project.
* [managedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission](#managedidentitiesprojectslocationsglobaldomainscheckmigrationpermission) - CheckMigrationPermission API gets the current state of DomainMigration
* [managedidentitiesProjectsLocationsGlobalDomainsCreate](#managedidentitiesprojectslocationsglobaldomainscreate) - Creates a Microsoft AD domain.
* [managedidentitiesProjectsLocationsGlobalDomainsDetachTrust](#managedidentitiesprojectslocationsglobaldomainsdetachtrust) - Removes an AD trust.
* [managedidentitiesProjectsLocationsGlobalDomainsDisableMigration](#managedidentitiesprojectslocationsglobaldomainsdisablemigration) - Disable Domain Migration
* [managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine](#managedidentitiesprojectslocationsglobaldomainsdomainjoinmachine) - DomainJoinMachine API joins a Compute Engine VM to the domain
* [managedidentitiesProjectsLocationsGlobalDomainsEnableMigration](#managedidentitiesprojectslocationsglobaldomainsenablemigration) - Enable Domain Migration
* [managedidentitiesProjectsLocationsGlobalDomainsExtendSchema](#managedidentitiesprojectslocationsglobaldomainsextendschema) - Extend Schema for Domain
* [managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings](#managedidentitiesprojectslocationsglobaldomainsgetldapssettings) - Gets the domain ldaps settings.
* [managedidentitiesProjectsLocationsGlobalDomainsList](#managedidentitiesprojectslocationsglobaldomainslist) - Lists domains in a project.
* [managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust](#managedidentitiesprojectslocationsglobaldomainsreconfiguretrust) - Updates the DNS conditional forwarder.
* [managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword](#managedidentitiesprojectslocationsglobaldomainsresetadminpassword) - Resets a domain's administrator password.
* [managedidentitiesProjectsLocationsGlobalDomainsRestore](#managedidentitiesprojectslocationsglobaldomainsrestore) - RestoreBackup restores domain mentioned in the RestoreBackupRequest
* [managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList](#managedidentitiesprojectslocationsglobaldomainssqlintegrationslist) - Lists SqlIntegrations in a given domain.
* [managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings](#managedidentitiesprojectslocationsglobaldomainsupdateldapssettings) - Patches a single ldaps settings.
* [managedidentitiesProjectsLocationsGlobalDomainsValidateTrust](#managedidentitiesprojectslocationsglobaldomainsvalidatetrust) - Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.
* [managedidentitiesProjectsLocationsGlobalOperationsCancel](#managedidentitiesprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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

Adds an AD trust to a domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttachTrustRequestInput;
import org.openapis.openapi.models.shared.TrustInput;
import org.openapis.openapi.models.shared.TrustTrustDirectionEnum;
import org.openapis.openapi.models.shared.TrustTrustTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                attachTrustRequestInput = new AttachTrustRequestInput() {{
                    trust = new TrustInput() {{
                        selectiveAuthentication = false;
                        targetDnsIpAddresses = new String[]{{
                            add("excepturi"),
                            add("nisi"),
                        }};
                        targetDomainName = "recusandae";
                        trustDirection = TrustTrustDirectionEnum.BIDIRECTIONAL;
                        trustHandshakeSecret = "ab";
                        trustType = TrustTrustTypeEnum.FOREST;
                    }};;
                }};;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsAttachTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity("at", "maiores") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                backupInput = new BackupInput() {{
                    description = "quod";
                    labels = new java.util.HashMap<String, String>() {{
                        put("totam", "porro");
                        put("dolorum", "dicta");
                    }};
                }};;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                backupId = "occaecati";
                callback = "fugit";
                fields = "deleniti";
                key = "hic";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "beatae";
                uploadProtocol = "commodi";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate(req, new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateSecurity("molestiae", "modi") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "excepturi";
                filter = "aspernatur";
                key = "perferendis";
                oauthToken = "ad";
                orderBy = "natus";
                pageSize = 149675L;
                pageToken = "iste";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "natus";
                uploadProtocol = "laboriosam";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsBackupsList(req, new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListSecurity("hic", "saepe") {{
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

CheckMigrationPermission API gets the current state of DomainMigration

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

            ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iste", "iure");
                    put("saepe", "quidem");
                }};
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "est";
                key = "mollitia";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "dolorem";
                uploadProtocol = "corporis";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission(req, new ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionSecurity("explicabo", "nobis") {{
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

Creates a Microsoft AD domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DomainInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                domainInput = new DomainInput() {{
                    admin = "nemo";
                    auditLogsEnabled = false;
                    authorizedNetworks = new String[]{{
                        add("excepturi"),
                        add("accusantium"),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("culpa", "doloribus");
                        put("sapiente", "architecto");
                    }};
                    locations = new String[]{{
                        add("dolorem"),
                        add("culpa"),
                        add("consequuntur"),
                    }};
                    reservedIpRange = "repellat";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                domainName = "commodi";
                fields = "quam";
                key = "molestiae";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "quia";
                uploadProtocol = "quis";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsCreateResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsCreate(req, new ManagedidentitiesProjectsLocationsGlobalDomainsCreateSecurity("vitae", "laborum") {{
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

Removes an AD trust.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DetachTrustRequestInput;
import org.openapis.openapi.models.shared.TrustInput;
import org.openapis.openapi.models.shared.TrustTrustDirectionEnum;
import org.openapis.openapi.models.shared.TrustTrustTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest("animi") {{
                dollarXgafv = XgafvEnum.ONE;
                detachTrustRequestInput = new DetachTrustRequestInput() {{
                    trust = new TrustInput() {{
                        selectiveAuthentication = false;
                        targetDnsIpAddresses = new String[]{{
                            add("quo"),
                        }};
                        targetDomainName = "sequi";
                        trustDirection = TrustTrustDirectionEnum.BIDIRECTIONAL;
                        trustHandshakeSecret = "ipsam";
                        trustType = TrustTrustTypeEnum.FOREST;
                    }};;
                }};;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "quasi";
                fields = "error";
                key = "temporibus";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "reiciendis";
                uploadProtocol = "voluptatibus";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsDetachTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustSecurity("vero", "nihil") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("omnis", "voluptate");
                }};
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                key = "ut";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "corporis";
                uploadProtocol = "dolore";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsDisableMigration(req, new ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity("iusto", "dicta") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                domainJoinMachineRequest = new DomainJoinMachineRequest() {{
                    force = false;
                    ouName = "accusamus";
                    vmIdToken = "commodi";
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "quidem";
                key = "molestias";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "modi";
                uploadProtocol = "praesentium";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine(req, new ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineSecurity("rem", "voluptates") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                enableMigrationRequest = new EnableMigrationRequest() {{
                    migratingDomains = new org.openapis.openapi.models.shared.OnPremDomainDetails[]{{
                        add(new OnPremDomainDetails() {{
                            disableSidFiltering = false;
                            domainName = "veritatis";
                        }}),
                        add(new OnPremDomainDetails() {{
                            disableSidFiltering = false;
                            domainName = "itaque";
                        }}),
                        add(new OnPremDomainDetails() {{
                            disableSidFiltering = false;
                            domainName = "incidunt";
                        }}),
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "quibusdam";
                key = "explicabo";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "quibusdam";
                uploadProtocol = "labore";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsEnableMigration(req, new ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationSecurity("modi", "qui") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                extendSchemaRequest = new ExtendSchemaRequest() {{
                    description = "quos";
                    fileContents = "perferendis";
                    gcsPath = "magni";
                }};;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "fugit";
                key = "dolorum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "facilis";
                uploadProtocol = "tempore";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsExtendSchema(req, new ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaSecurity("labore", "delectus") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "provident";
                key = "necessitatibus";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "dolor";
                uploadProtocol = "debitis";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings(req, new ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity("a", "dolorum") {{
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

Lists domains in a project.

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

            ManagedidentitiesProjectsLocationsGlobalDomainsListRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsListRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "rerum";
                fields = "dicta";
                filter = "magnam";
                key = "cumque";
                oauthToken = "facere";
                orderBy = "ea";
                pageSize = 396506L;
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "non";
                uploadProtocol = "occaecati";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsListResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsList(req, new ManagedidentitiesProjectsLocationsGlobalDomainsListSecurity("enim", "accusamus") {{
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

Updates the DNS conditional forwarder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReconfigureTrustRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest("delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                reconfigureTrustRequest = new ReconfigureTrustRequest() {{
                    targetDnsIpAddresses = new String[]{{
                        add("nam"),
                        add("id"),
                        add("blanditiis"),
                    }};
                    targetDomainName = "deleniti";
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "nisi";
                key = "vel";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "molestiae";
                uploadProtocol = "perferendis";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustSecurity("nihil", "magnam") {{
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

Resets a domain's administrator password.

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

            ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("labore", "suscipit");
                    put("natus", "nobis");
                }};
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "architecto";
                key = "magnam";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "ullam";
                uploadProtocol = "provident";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword(req, new ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordSecurity("quos", "sint") {{
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

RestoreBackup restores domain mentioned in the RestoreBackupRequest

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

            ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest("accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                restoreDomainRequest = new RestoreDomainRequest() {{
                    backupId = "reiciendis";
                }};;
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

            ManagedidentitiesProjectsLocationsGlobalDomainsRestoreResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsRestore(req, new ManagedidentitiesProjectsLocationsGlobalDomainsRestoreSecurity("doloribus", "debitis") {{
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

Lists SqlIntegrations in a given domain.

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

            ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListRequest("eius") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList(req, new ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListSecurity("pariatur", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSqlIntegrationsResponse != null) {
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

            ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                ldapsSettingsInput = new LDAPSSettingsInput() {{
                    certificate = new Certificate() {{
                        expireTime = "natus";
                        issuingCertificate = new Certificate();;
                        subject = "magni";
                        subjectAlternativeName = new String[]{{
                            add("quo"),
                        }};
                        thumbprint = "illum";
                    }};;
                    certificatePassword = "pariatur";
                    certificatePfx = "maxime";
                    name = "Miriam Connelly Jr.";
                }};;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "voluptate";
                key = "autem";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "eaque";
                updateMask = "pariatur";
                uploadType = "nemo";
                uploadProtocol = "voluptatibus";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings(req, new ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsSecurity("perferendis", "fugiat") {{
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

Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TrustInput;
import org.openapis.openapi.models.shared.TrustTrustDirectionEnum;
import org.openapis.openapi.models.shared.TrustTrustTypeEnum;
import org.openapis.openapi.models.shared.ValidateTrustRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                validateTrustRequestInput = new ValidateTrustRequestInput() {{
                    trust = new TrustInput() {{
                        selectiveAuthentication = false;
                        targetDnsIpAddresses = new String[]{{
                            add("corporis"),
                            add("hic"),
                            add("libero"),
                            add("nobis"),
                        }};
                        targetDomainName = "dolores";
                        trustDirection = TrustTrustDirectionEnum.INBOUND;
                        trustHandshakeSecret = "totam";
                        trustType = TrustTrustTypeEnum.FOREST;
                    }};;
                }};;
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

            ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsValidateTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustSecurity("vero", "nostrum") {{
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

            ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest req = new ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("facilis", "perspiciatis");
                    put("voluptatem", "porro");
                    put("consequuntur", "blanditiis");
                }};
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "rerum";
                key = "adipisci";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "modi";
                uploadProtocol = "iste";
            }};            

            ManagedidentitiesProjectsLocationsGlobalOperationsCancelResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalOperationsCancel(req, new ManagedidentitiesProjectsLocationsGlobalOperationsCancelSecurity("dolorum", "deleniti") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                peeringInput = new PeeringInput() {{
                    authorizedNetwork = "nobis";
                    domainResource = "libero";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quaerat", "quos");
                        put("aliquid", "dolorem");
                        put("dolorem", "dolor");
                        put("qui", "ipsum");
                    }};
                }};;
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "voluptate";
                key = "dignissimos";
                oauthToken = "reiciendis";
                peeringId = "amet";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "numquam";
                uploadProtocol = "veritatis";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsCreate(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity("ipsa", "ipsa") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest("iure") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "voluptatibus";
                key = "voluptas";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "atque";
                uploadProtocol = "sit";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsDelete(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteSecurity("fugiat", "ab") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest("soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "deleniti";
                filter = "omnis";
                key = "necessitatibus";
                oauthToken = "distinctio";
                pageSize = 990339L;
                pageToken = "nihil";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "voluptate";
                uploadProtocol = "id";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsGetResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsGet(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsGetSecurity("saepe", "eius") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "ad";
                key = "saepe";
                oauthToken = "suscipit";
                optionsRequestedPolicyVersion = 645785L;
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "minima";
                uploadProtocol = "repellendus";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicySecurity("totam", "similique") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "quod";
                filter = "officiis";
                key = "qui";
                oauthToken = "dolorum";
                orderBy = "a";
                pageSize = 456130L;
                pageToken = "harum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "ipsum";
                uploadProtocol = "quisquam";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsListResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsList(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsListSecurity("tenetur", "amet") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsPatchRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsPatchRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                peeringInput = new PeeringInput() {{
                    authorizedNetwork = "numquam";
                    domainResource = "enim";
                    labels = new java.util.HashMap<String, String>() {{
                        put("sapiente", "totam");
                    }};
                }};;
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "expedita";
                fields = "neque";
                key = "sed";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "libero";
                updateMask = "voluptas";
                uploadType = "deserunt";
                uploadProtocol = "quam";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsPatchResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsPatch(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsPatchSecurity("ipsum", "incidunt") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "pariatur";
                                    expression = "soluta";
                                    location = "dicta";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("incidunt"),
                                    add("aspernatur"),
                                    add("dolores"),
                                }};
                                role = "distinctio";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "facilis";
                                    expression = "aliquid";
                                    location = "quam";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("qui"),
                                    add("neque"),
                                    add("fugit"),
                                    add("magni"),
                                }};
                                role = "odio";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "sunt";
                                    expression = "ullam";
                                    location = "nam";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("cumque"),
                                }};
                                role = "soluta";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "nobis";
                                    expression = "et";
                                    location = "saepe";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("nobis"),
                                }};
                                role = "quos";
                            }}),
                        }};
                        etag = "tempore";
                        version = 584476;
                    }};;
                }};;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "dolorem";
                fields = "dolore";
                key = "labore";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "architecto";
                uploadProtocol = "quae";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity("aut", "quas") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest("itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("repellendus"),
                        add("porro"),
                        add("doloribus"),
                    }};
                }};;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "qui";
                key = "quae";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "occaecati";
                uploadProtocol = "voluptatibus";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity("quisquam", "vero") {{
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

            ManagedidentitiesProjectsLocationsListRequest req = new ManagedidentitiesProjectsLocationsListRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "consectetur";
                filter = "vero";
                key = "tenetur";
                oauthToken = "dignissimos";
                pageSize = 941378L;
                pageToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "odio";
                uploadProtocol = "similique";
            }};            

            ManagedidentitiesProjectsLocationsListResponse res = sdk.projects.managedidentitiesProjectsLocationsList(req, new ManagedidentitiesProjectsLocationsListSecurity("facilis", "vero") {{
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
