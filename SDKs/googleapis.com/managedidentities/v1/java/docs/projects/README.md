# projects

### Available Operations

* [managedidentitiesProjectsLocationsGlobalDomainsAttachTrust](#managedidentitiesprojectslocationsglobaldomainsattachtrust) - Adds an AD trust to a domain.
* [managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate](#managedidentitiesprojectslocationsglobaldomainsbackupscreate) - Creates a Backup for a domain.
* [managedidentitiesProjectsLocationsGlobalDomainsBackupsList](#managedidentitiesprojectslocationsglobaldomainsbackupslist) - Lists Backup in a given project.
* [managedidentitiesProjectsLocationsGlobalDomainsCreate](#managedidentitiesprojectslocationsglobaldomainscreate) - Creates a Microsoft AD domain.
* [managedidentitiesProjectsLocationsGlobalDomainsDetachTrust](#managedidentitiesprojectslocationsglobaldomainsdetachtrust) - Removes an AD trust.
* [managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine](#managedidentitiesprojectslocationsglobaldomainsdomainjoinmachine) - DomainJoinMachine API joins a Compute Engine VM to the domain
* [managedidentitiesProjectsLocationsGlobalDomainsExtendSchema](#managedidentitiesprojectslocationsglobaldomainsextendschema) - Extend Schema for Domain
* [managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings](#managedidentitiesprojectslocationsglobaldomainsgetldapssettings) - Gets the domain ldaps settings.
* [managedidentitiesProjectsLocationsGlobalDomainsList](#managedidentitiesprojectslocationsglobaldomainslist) - Lists domains in a project.
* [managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust](#managedidentitiesprojectslocationsglobaldomainsreconfiguretrust) - Updates the DNS conditional forwarder.
* [managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword](#managedidentitiesprojectslocationsglobaldomainsresetadminpassword) - Resets a domain's administrator password.
* [managedidentitiesProjectsLocationsGlobalDomainsRestore](#managedidentitiesprojectslocationsglobaldomainsrestore) - RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
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
                    labels = new java.util.HashMap<String, String>() {{
                        put("esse", "totam");
                        put("porro", "dolorum");
                        put("dicta", "nam");
                        put("officia", "occaecati");
                    }};
                }};;
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                backupId = "hic";
                callback = "optio";
                fields = "totam";
                key = "beatae";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate(req, new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateSecurity("impedit", "cum") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "ad";
                filter = "natus";
                key = "sed";
                oauthToken = "iste";
                orderBy = "dolor";
                pageSize = 616934L;
                pageToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "saepe";
                uploadProtocol = "fuga";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsBackupsList(req, new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListSecurity("in", "corporis") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                domainInput = new DomainInput() {{
                    admin = "saepe";
                    auditLogsEnabled = false;
                    authorizedNetworks = new String[]{{
                        add("architecto"),
                        add("ipsa"),
                        add("reiciendis"),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("mollitia", "laborum");
                        put("dolores", "dolorem");
                        put("corporis", "explicabo");
                    }};
                    locations = new String[]{{
                        add("enim"),
                        add("omnis"),
                        add("nemo"),
                        add("minima"),
                    }};
                    name = "Brian Kessler";
                    reservedIpRange = "sapiente";
                }};;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                domainName = "culpa";
                fields = "consequuntur";
                key = "repellat";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "commodi";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsCreateResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsCreate(req, new ManagedidentitiesProjectsLocationsGlobalDomainsCreateSecurity("quam", "molestiae") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                detachTrustRequestInput = new DetachTrustRequestInput() {{
                    trust = new TrustInput() {{
                        selectiveAuthentication = false;
                        targetDnsIpAddresses = new String[]{{
                            add("quis"),
                        }};
                        targetDomainName = "vitae";
                        trustDirection = TrustTrustDirectionEnum.OUTBOUND;
                        trustHandshakeSecret = "animi";
                        trustType = TrustTrustTypeEnum.TRUST_TYPE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "tenetur";
                key = "ipsam";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "aut";
                uploadProtocol = "quasi";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsDetachTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustSecurity("error", "temporibus") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                domainJoinMachineRequest = new DomainJoinMachineRequest() {{
                    force = false;
                    ouName = "reiciendis";
                    vmIdToken = "voluptatibus";
                }};;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "praesentium";
                fields = "voluptatibus";
                key = "ipsa";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "cum";
                uploadProtocol = "perferendis";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine(req, new ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineSecurity("doloremque", "reprehenderit") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                extendSchemaRequest = new ExtendSchemaRequest() {{
                    description = "dicta";
                    fileContents = "corporis";
                    gcsPath = "dolore";
                }};;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "harum";
                fields = "enim";
                key = "accusamus";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "quae";
                uploadProtocol = "ipsum";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsExtendSchema(req, new ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaSecurity("quidem", "molestias") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "voluptates";
                key = "quasi";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "veritatis";
                uploadProtocol = "itaque";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings(req, new ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity("incidunt", "enim") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsListRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsListRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "distinctio";
                filter = "quibusdam";
                key = "labore";
                oauthToken = "modi";
                orderBy = "qui";
                pageSize = 397821L;
                pageToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsListResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsList(req, new ManagedidentitiesProjectsLocationsGlobalDomainsListSecurity("assumenda", "ipsam") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                reconfigureTrustRequest = new ReconfigureTrustRequest() {{
                    targetDnsIpAddresses = new String[]{{
                        add("excepturi"),
                        add("tempora"),
                        add("facilis"),
                    }};
                    targetDomainName = "tempore";
                }};;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "non";
                key = "eligendi";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "provident";
                uploadProtocol = "necessitatibus";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustSecurity("sint", "officia") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dolorum", "in");
                    put("in", "illum");
                    put("maiores", "rerum");
                    put("dicta", "magnam");
                }};
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "aliquid";
                key = "laborum";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "occaecati";
                uploadProtocol = "enim";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword(req, new ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordSecurity("accusamus", "delectus") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                restoreDomainRequest = new RestoreDomainRequest() {{
                    backupId = "nam";
                }};;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "sapiente";
                key = "amet";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "vel";
                uploadProtocol = "natus";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsRestoreResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsRestore(req, new ManagedidentitiesProjectsLocationsGlobalDomainsRestoreSecurity("omnis", "molestiae") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "labore";
                filter = "labore";
                key = "suscipit";
                oauthToken = "natus";
                orderBy = "nobis";
                pageSize = 428769L;
                pageToken = "vero";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "architecto";
                uploadProtocol = "magnam";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList(req, new ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListSecurity("et", "excepturi") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                ldapsSettingsInput = new LDAPSSettingsInput() {{
                    certificate = new Certificate() {{
                        expireTime = "quos";
                        issuingCertificate = new Certificate();;
                        subject = "sint";
                        subjectAlternativeName = new String[]{{
                            add("mollitia"),
                        }};
                        thumbprint = "reiciendis";
                    }};;
                    certificatePassword = "mollitia";
                    certificatePfx = "ad";
                    name = "Carmen Treutel";
                }};;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "debitis";
                key = "eius";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "deleniti";
                updateMask = "facilis";
                uploadType = "in";
                uploadProtocol = "architecto";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings(req, new ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsSecurity("architecto", "repudiandae") {{
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

            ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                validateTrustRequestInput = new ValidateTrustRequestInput() {{
                    trust = new TrustInput() {{
                        selectiveAuthentication = false;
                        targetDnsIpAddresses = new String[]{{
                            add("repellat"),
                            add("quibusdam"),
                        }};
                        targetDomainName = "sed";
                        trustDirection = TrustTrustDirectionEnum.BIDIRECTIONAL;
                        trustHandshakeSecret = "pariatur";
                        trustType = TrustTrustTypeEnum.TRUST_TYPE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "magni";
                key = "sunt";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "pariatur";
                uploadProtocol = "maxime";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsValidateTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustSecurity("ea", "excepturi") {{
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

            ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest req = new ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest("odit") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("ab", "maiores");
                }};
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

            ManagedidentitiesProjectsLocationsGlobalOperationsCancelResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalOperationsCancel(req, new ManagedidentitiesProjectsLocationsGlobalOperationsCancelSecurity("perferendis", "fugiat") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                peeringInput = new PeeringInput() {{
                    authorizedNetwork = "cumque";
                    domainResource = "corporis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("libero", "nobis");
                        put("dolores", "quis");
                        put("totam", "dignissimos");
                        put("eaque", "quis");
                    }};
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "dolores";
                key = "minus";
                oauthToken = "quam";
                peeringId = "dolor";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "nostrum";
                uploadProtocol = "hic";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsCreate(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity("recusandae", "omnis") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatem";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "blanditiis";
                key = "error";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "rerum";
                uploadProtocol = "adipisci";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsDelete(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteSecurity("asperiores", "earum") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "pariatur";
                fields = "provident";
                filter = "nobis";
                key = "libero";
                oauthToken = "delectus";
                pageSize = 311945L;
                pageToken = "quos";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "dolorem";
                uploadProtocol = "dolorem";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsGetResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsGet(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsGetSecurity("dolor", "qui") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "dignissimos";
                key = "reiciendis";
                oauthToken = "amet";
                optionsRequestedPolicyVersion = 680545L;
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "veritatis";
                uploadProtocol = "ipsa";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicySecurity("ipsa", "iure") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest("odio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusamus";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "voluptas";
                filter = "natus";
                key = "eos";
                oauthToken = "atque";
                orderBy = "sit";
                pageSize = 854614L;
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "dolorum";
                uploadProtocol = "iusto";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsListResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsList(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsListSecurity("voluptate", "dolorum") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsPatchRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsPatchRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                peeringInput = new PeeringInput() {{
                    authorizedNetwork = "necessitatibus";
                    domainResource = "distinctio";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nihil", "ipsum");
                        put("voluptate", "id");
                        put("saepe", "eius");
                        put("aspernatur", "perferendis");
                    }};
                }};;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "ad";
                key = "saepe";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "deserunt";
                updateMask = "provident";
                uploadType = "minima";
                uploadProtocol = "repellendus";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsPatchResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsPatch(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsPatchSecurity("totam", "similique") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "tempora";
                                    expression = "vel";
                                    location = "quod";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("dolorum"),
                                }};
                                role = "a";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "esse";
                                    expression = "harum";
                                    location = "iusto";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("tenetur"),
                                    add("amet"),
                                    add("tempore"),
                                    add("accusamus"),
                                }};
                                role = "numquam";
                            }}),
                        }};
                        etag = "enim";
                        version = 213312;
                    }};;
                }};;
                accessToken = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "nihil";
                fields = "sit";
                key = "expedita";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "vel";
                uploadProtocol = "libero";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity("voluptas", "deserunt") {{
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

            ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest req = new ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("qui"),
                        add("cupiditate"),
                    }};
                }};;
                accessToken = "maxime";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "dicta";
                key = "laborum";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "aspernatur";
                uploadProtocol = "dolores";
            }};            

            ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions(req, new ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity("distinctio", "facilis") {{
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

            ManagedidentitiesProjectsLocationsListRequest req = new ManagedidentitiesProjectsLocationsListRequest("aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "qui";
                fields = "neque";
                filter = "fugit";
                key = "magni";
                oauthToken = "odio";
                pageSize = 124833L;
                pageToken = "ullam";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "hic";
                uploadProtocol = "voluptatem";
            }};            

            ManagedidentitiesProjectsLocationsListResponse res = sdk.projects.managedidentitiesProjectsLocationsList(req, new ManagedidentitiesProjectsLocationsListSecurity("cumque", "soluta") {{
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
