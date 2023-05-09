# projects

### Available Operations

* [datamigrationProjectsLocationsConnectionProfilesCreate](#datamigrationprojectslocationsconnectionprofilescreate) - Creates a new connection profile in a given project and location.
* [datamigrationProjectsLocationsConnectionProfilesList](#datamigrationprojectslocationsconnectionprofileslist) - Retrieves a list of all connection profiles in a given project and location.
* [datamigrationProjectsLocationsConversionWorkspacesApply](#datamigrationprojectslocationsconversionworkspacesapply) - Applies draft tree onto a specific destination database.
* [datamigrationProjectsLocationsConversionWorkspacesCommit](#datamigrationprojectslocationsconversionworkspacescommit) - Marks all the data in the conversion workspace as committed.
* [datamigrationProjectsLocationsConversionWorkspacesConvert](#datamigrationprojectslocationsconversionworkspacesconvert) - Creates a draft tree schema for the destination database.
* [datamigrationProjectsLocationsConversionWorkspacesCreate](#datamigrationprojectslocationsconversionworkspacescreate) - Creates a new conversion workspace in a given project and location.
* [datamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions](#datamigrationprojectslocationsconversionworkspacesdescribeconversionworkspacerevisions) - Retrieves a list of committed revisions of a specific conversion workspace.
* [datamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities](#datamigrationprojectslocationsconversionworkspacesdescribedatabaseentities) - Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.
* [datamigrationProjectsLocationsConversionWorkspacesList](#datamigrationprojectslocationsconversionworkspaceslist) - Lists conversion workspaces in a given project and location.
* [datamigrationProjectsLocationsConversionWorkspacesMappingRulesImport](#datamigrationprojectslocationsconversionworkspacesmappingrulesimport) - Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
* [datamigrationProjectsLocationsConversionWorkspacesRollback](#datamigrationprojectslocationsconversionworkspacesrollback) - Rolls back a conversion workspace to the last committed snapshot.
* [datamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs](#datamigrationprojectslocationsconversionworkspacessearchbackgroundjobs) - Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.
* [datamigrationProjectsLocationsConversionWorkspacesSeed](#datamigrationprojectslocationsconversionworkspacesseed) - Imports a snapshot of the source database into the conversion workspace.
* [datamigrationProjectsLocationsFetchStaticIps](#datamigrationprojectslocationsfetchstaticips) - Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
* [datamigrationProjectsLocationsList](#datamigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [datamigrationProjectsLocationsMigrationJobsCreate](#datamigrationprojectslocationsmigrationjobscreate) - Creates a new migration job in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsGenerateSshScript](#datamigrationprojectslocationsmigrationjobsgeneratesshscript) - Generate a SSH configuration script to configure the reverse SSH connectivity.
* [datamigrationProjectsLocationsMigrationJobsList](#datamigrationprojectslocationsmigrationjobslist) - Lists migration jobs in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsPatch](#datamigrationprojectslocationsmigrationjobspatch) - Updates the parameters of a single migration job.
* [datamigrationProjectsLocationsMigrationJobsPromote](#datamigrationprojectslocationsmigrationjobspromote) - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* [datamigrationProjectsLocationsMigrationJobsRestart](#datamigrationprojectslocationsmigrationjobsrestart) - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* [datamigrationProjectsLocationsMigrationJobsResume](#datamigrationprojectslocationsmigrationjobsresume) - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* [datamigrationProjectsLocationsMigrationJobsStart](#datamigrationprojectslocationsmigrationjobsstart) - Start an already created migration job.
* [datamigrationProjectsLocationsMigrationJobsStop](#datamigrationprojectslocationsmigrationjobsstop) - Stops a running migration job.
* [datamigrationProjectsLocationsMigrationJobsVerify](#datamigrationprojectslocationsmigrationjobsverify) - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* [datamigrationProjectsLocationsOperationsCancel](#datamigrationprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datamigrationProjectsLocationsOperationsList](#datamigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datamigrationProjectsLocationsPrivateConnectionsCreate](#datamigrationprojectslocationsprivateconnectionscreate) - Creates a new private connection in a given project and location.
* [datamigrationProjectsLocationsPrivateConnectionsDelete](#datamigrationprojectslocationsprivateconnectionsdelete) - Deletes a single Database Migration Service private connection.
* [datamigrationProjectsLocationsPrivateConnectionsGet](#datamigrationprojectslocationsprivateconnectionsget) - Gets details of a single private connection.
* [datamigrationProjectsLocationsPrivateConnectionsGetIamPolicy](#datamigrationprojectslocationsprivateconnectionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [datamigrationProjectsLocationsPrivateConnectionsList](#datamigrationprojectslocationsprivateconnectionslist) - Retrieves a list of private connections in a given project and location.
* [datamigrationProjectsLocationsPrivateConnectionsSetIamPolicy](#datamigrationprojectslocationsprivateconnectionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [datamigrationProjectsLocationsPrivateConnectionsTestIamPermissions](#datamigrationprojectslocationsprivateconnectionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## datamigrationProjectsLocationsConnectionProfilesCreate

Creates a new connection profile in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity;
import org.openapis.openapi.models.shared.AlloyDbConnectionProfileInput;
import org.openapis.openapi.models.shared.AlloyDbSettingsInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudSqlConnectionProfileInput;
import org.openapis.openapi.models.shared.CloudSqlSettingsActivationPolicyEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsAvailabilityTypeEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDataDiskTypeEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDatabaseVersionEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsInput;
import org.openapis.openapi.models.shared.ConnectionProfileInput;
import org.openapis.openapi.models.shared.ConnectionProfileProviderEnum;
import org.openapis.openapi.models.shared.ConnectionProfileStateEnum;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.ForwardSshTunnelConnectivity;
import org.openapis.openapi.models.shared.MachineConfig;
import org.openapis.openapi.models.shared.MySqlConnectionProfileInput;
import org.openapis.openapi.models.shared.OracleConnectionProfileInput;
import org.openapis.openapi.models.shared.PostgreSqlConnectionProfileInput;
import org.openapis.openapi.models.shared.PrimaryInstanceSettingsInput;
import org.openapis.openapi.models.shared.PrivateConnectivity;
import org.openapis.openapi.models.shared.PrivateServiceConnectConnectivity;
import org.openapis.openapi.models.shared.SqlAclEntry;
import org.openapis.openapi.models.shared.SqlIpConfig;
import org.openapis.openapi.models.shared.SslConfigInput;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.UserPasswordInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConnectionProfilesCreateRequest req = new DatamigrationProjectsLocationsConnectionProfilesCreateRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                connectionProfileInput = new ConnectionProfileInput() {{
                    alloydb = new AlloyDbConnectionProfileInput() {{
                        clusterId = "modi";
                        settings = new AlloyDbSettingsInput() {{
                            encryptionConfig = new EncryptionConfig() {{
                                kmsKeyName = "qui";
                            }};;
                            initialUser = new UserPasswordInput() {{
                                password = "aliquid";
                                user = "cupiditate";
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("perferendis", "magni");
                                put("assumenda", "ipsam");
                                put("alias", "fugit");
                            }};
                            primaryInstanceSettings = new PrimaryInstanceSettingsInput() {{
                                databaseFlags = new java.util.HashMap<String, String>() {{
                                    put("excepturi", "tempora");
                                    put("facilis", "tempore");
                                    put("labore", "delectus");
                                }};
                                id = "63c969e9-a3ef-4a77-9fb1-4cd66ae395ef";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("provident", "nam");
                                    put("id", "blanditiis");
                                    put("deleniti", "sapiente");
                                }};
                                machineConfig = new MachineConfig() {{
                                    cpuCount = 230533;
                                }};;
                            }};;
                            vpcNetwork = "deserunt";
                        }};;
                    }};;
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = CloudSqlSettingsActivationPolicyEnum.ALWAYS;
                            autoStorageIncrease = false;
                            availabilityType = CloudSqlSettingsAvailabilityTypeEnum.ZONAL;
                            cmekKeyName = "natus";
                            collation = "omnis";
                            dataDiskSizeGb = "molestiae";
                            dataDiskType = CloudSqlSettingsDataDiskTypeEnum.SQL_DATA_DISK_TYPE_UNSPECIFIED;
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("magnam", "distinctio");
                                put("id", "labore");
                            }};
                            databaseVersion = CloudSqlSettingsDatabaseVersionEnum.MYSQL57;
                            ipConfig = new SqlIpConfig() {{
                                allocatedIpRange = "suscipit";
                                authorizedNetworks = new org.openapis.openapi.models.shared.SqlAclEntry[]{{
                                    add(new SqlAclEntry() {{
                                        expireTime = "nobis";
                                        label = "eum";
                                        ttl = "vero";
                                        value = "aspernatur";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "architecto";
                                        label = "magnam";
                                        ttl = "et";
                                        value = "excepturi";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "ullam";
                                        label = "provident";
                                        ttl = "quos";
                                        value = "sint";
                                    }}),
                                }};
                                enableIpv4 = false;
                                privateNetwork = "accusantium";
                                requireSsl = false;
                            }};;
                            rootPassword = "mollitia";
                            secondaryZone = "reiciendis";
                            sourceId = "mollitia";
                            storageAutoResizeLimit = "ad";
                            tier = "eum";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("necessitatibus", "odit");
                            }};
                            zone = "nemo";
                        }};;
                    }};;
                    displayName = "quasi";
                    error = new Status() {{
                        code = 435865;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("eius", "maxime");
                                put("deleniti", "facilis");
                                put("in", "architecto");
                                put("architecto", "repudiandae");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("expedita", "nihil");
                                put("repellat", "quibusdam");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("saepe", "pariatur");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("consequuntur", "praesentium");
                            }}),
                        }};
                        message = "natus";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("sunt", "quo");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "illum";
                        host = "pariatur";
                        password = "maxime";
                        port = 411397;
                        ssl = new SslConfigInput() {{
                            caCertificate = "excepturi";
                            clientCertificate = "odit";
                            clientKey = "ea";
                        }};;
                        username = "Alexanne_Bernhard37";
                    }};;
                    name = "Dr. Stacey Reichert";
                    oracle = new OracleConnectionProfileInput() {{
                        databaseService = "voluptatibus";
                        forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                            hostname = "affectionate-stonework.biz";
                            password = "aut";
                            port = 764912;
                            privateKey = "corporis";
                            username = "Tyreek.Renner33";
                        }};;
                        host = "totam";
                        password = "dignissimos";
                        port = 54338;
                        privateConnectivity = new PrivateConnectivity() {{
                            privateConnection = "quis";
                        }};;
                        staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("eos", "perferendis");
                        }};
                        username = "Cecilia.Schimmel";
                    }};;
                    postgresql = new PostgreSqlConnectionProfileInput() {{
                        cloudSqlId = "vero";
                        host = "nostrum";
                        password = "hic";
                        port = 928082;
                        privateServiceConnectConnectivity = new PrivateServiceConnectConnectivity() {{
                            serviceAttachment = "omnis";
                        }};;
                        ssl = new SslConfigInput() {{
                            caCertificate = "facilis";
                            clientCertificate = "perspiciatis";
                            clientKey = "voluptatem";
                        }};;
                        staticIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("consequuntur", "blanditiis");
                            put("error", "eaque");
                            put("occaecati", "rerum");
                            put("adipisci", "asperiores");
                        }};
                        username = "Tracey_Gleichner";
                    }};;
                    provider = ConnectionProfileProviderEnum.RDS;
                    state = ConnectionProfileStateEnum.DELETED;
                }};;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "libero";
                connectionProfileId = "delectus";
                fields = "quaerat";
                key = "quos";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "dolorem";
                requestId = "dolorem";
                skipValidation = false;
                uploadType = "dolor";
                uploadProtocol = "qui";
                validateOnly = false;
            }};            

            DatamigrationProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req, new DatamigrationProjectsLocationsConnectionProfilesCreateSecurity("ipsum", "hic") {{
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

## datamigrationProjectsLocationsConnectionProfilesList

Retrieves a list of all connection profiles in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesListRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesListResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConnectionProfilesListRequest req = new DatamigrationProjectsLocationsConnectionProfilesListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "amet";
                filter = "dolorum";
                key = "numquam";
                oauthToken = "veritatis";
                orderBy = "ipsa";
                pageSize = 56418L;
                pageToken = "iure";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "quaerat";
                uploadProtocol = "accusamus";
            }};            

            DatamigrationProjectsLocationsConnectionProfilesListResponse res = sdk.projects.datamigrationProjectsLocationsConnectionProfilesList(req, new DatamigrationProjectsLocationsConnectionProfilesListSecurity("quidem", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listConnectionProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datamigrationProjectsLocationsConversionWorkspacesApply

Applies draft tree onto a specific destination database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesApplyRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesApplyResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesApplySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplyConversionWorkspaceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConversionWorkspacesApplyRequest req = new DatamigrationProjectsLocationsConversionWorkspacesApplyRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                applyConversionWorkspaceRequest = new ApplyConversionWorkspaceRequest() {{
                    connectionProfile = "eos";
                    filter = "atque";
                }};;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "soluta";
                key = "dolorum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "dolorum";
                uploadProtocol = "deleniti";
            }};            

            DatamigrationProjectsLocationsConversionWorkspacesApplyResponse res = sdk.projects.datamigrationProjectsLocationsConversionWorkspacesApply(req, new DatamigrationProjectsLocationsConversionWorkspacesApplySecurity("omnis", "necessitatibus") {{
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

## datamigrationProjectsLocationsConversionWorkspacesCommit

Marks all the data in the conversion workspace as committed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesCommitRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesCommitResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesCommitSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CommitConversionWorkspaceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConversionWorkspacesCommitRequest req = new DatamigrationProjectsLocationsConversionWorkspacesCommitRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                commitConversionWorkspaceRequest = new CommitConversionWorkspaceRequest() {{
                    commitName = "nihil";
                }};;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "saepe";
                key = "eius";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "amet";
                uploadProtocol = "optio";
            }};            

            DatamigrationProjectsLocationsConversionWorkspacesCommitResponse res = sdk.projects.datamigrationProjectsLocationsConversionWorkspacesCommit(req, new DatamigrationProjectsLocationsConversionWorkspacesCommitSecurity("accusamus", "ad") {{
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

## datamigrationProjectsLocationsConversionWorkspacesConvert

Creates a draft tree schema for the destination database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesConvertRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesConvertResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesConvertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConvertConversionWorkspaceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConversionWorkspacesConvertRequest req = new DatamigrationProjectsLocationsConversionWorkspacesConvertRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                convertConversionWorkspaceRequest = new ConvertConversionWorkspaceRequest() {{
                    autoCommit = false;
                    filter = "deserunt";
                }};;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "repellendus";
                fields = "totam";
                key = "similique";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "quaerat";
                uploadProtocol = "tempora";
            }};            

            DatamigrationProjectsLocationsConversionWorkspacesConvertResponse res = sdk.projects.datamigrationProjectsLocationsConversionWorkspacesConvert(req, new DatamigrationProjectsLocationsConversionWorkspacesConvertSecurity("vel", "quod") {{
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

## datamigrationProjectsLocationsConversionWorkspacesCreate

Creates a new conversion workspace in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesCreateRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesCreateResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConversionWorkspaceInput;
import org.openapis.openapi.models.shared.DatabaseEngineInfo;
import org.openapis.openapi.models.shared.DatabaseEngineInfoEngineEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConversionWorkspacesCreateRequest req = new DatamigrationProjectsLocationsConversionWorkspacesCreateRequest("officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                conversionWorkspaceInput = new ConversionWorkspaceInput() {{
                    destination = new DatabaseEngineInfo() {{
                        engine = DatabaseEngineInfoEngineEnum.POSTGRESQL;
                        version = "a";
                    }};;
                    displayName = "esse";
                    globalSettings = new java.util.HashMap<String, String>() {{
                        put("iusto", "ipsum");
                        put("quisquam", "tenetur");
                        put("amet", "tempore");
                    }};
                    name = "Francis Haley";
                    source = new DatabaseEngineInfo() {{
                        engine = DatabaseEngineInfoEngineEnum.POSTGRESQL;
                        version = "nihil";
                    }};;
                }};;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "neque";
                conversionWorkspaceId = "sed";
                fields = "vel";
                key = "libero";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "quam";
                uploadType = "ipsum";
                uploadProtocol = "incidunt";
            }};            

            DatamigrationProjectsLocationsConversionWorkspacesCreateResponse res = sdk.projects.datamigrationProjectsLocationsConversionWorkspacesCreate(req, new DatamigrationProjectsLocationsConversionWorkspacesCreateSecurity("qui", "cupiditate") {{
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

## datamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions

Retrieves a list of committed revisions of a specific conversion workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsRequest req = new DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsRequest("maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "laborum";
                commitId = "totam";
                fields = "incidunt";
                key = "aspernatur";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "facilis";
                uploadProtocol = "aliquid";
            }};            

            DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsResponse res = sdk.projects.datamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions(req, new DatamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisionsSecurity("quam", "molestias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.describeConversionWorkspaceRevisionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities

Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesSecurity;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesRequest req = new DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesRequest("temporibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "neque";
                alt = AltEnum.JSON;
                callback = "magni";
                commitId = "odio";
                fields = "sunt";
                filter = "ullam";
                key = "nam";
                oauthToken = "hic";
                pageSize = 30452L;
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "soluta";
                tree = DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnum.DRAFT_TREE;
                uncommitted = false;
                uploadType = "et";
                uploadProtocol = "saepe";
            }};            

            DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesResponse res = sdk.projects.datamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities(req, new DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesSecurity("ipsum", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.describeDatabaseEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datamigrationProjectsLocationsConversionWorkspacesList

Lists conversion workspaces in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesListRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesListResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConversionWorkspacesListRequest req = new DatamigrationProjectsLocationsConversionWorkspacesListRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "delectus";
                filter = "dolorem";
                key = "dolore";
                oauthToken = "labore";
                pageSize = 240829L;
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "quae";
                uploadProtocol = "aut";
            }};            

            DatamigrationProjectsLocationsConversionWorkspacesListResponse res = sdk.projects.datamigrationProjectsLocationsConversionWorkspacesList(req, new DatamigrationProjectsLocationsConversionWorkspacesListSecurity("quas", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listConversionWorkspacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datamigrationProjectsLocationsConversionWorkspacesMappingRulesImport

Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ImportMappingRulesRequest;
import org.openapis.openapi.models.shared.ImportMappingRulesRequestRulesFormatEnum;
import org.openapis.openapi.models.shared.RulesFile;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportRequest req = new DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                importMappingRulesRequest = new ImportMappingRulesRequest() {{
                    autoCommit = false;
                    rulesFiles = new org.openapis.openapi.models.shared.RulesFile[]{{
                        add(new RulesFile() {{
                            rulesContent = "porro";
                            rulesSourceFilename = "doloribus";
                        }}),
                        add(new RulesFile() {{
                            rulesContent = "ut";
                            rulesSourceFilename = "facilis";
                        }}),
                        add(new RulesFile() {{
                            rulesContent = "cupiditate";
                            rulesSourceFilename = "qui";
                        }}),
                        add(new RulesFile() {{
                            rulesContent = "quae";
                            rulesSourceFilename = "laudantium";
                        }}),
                    }};
                    rulesFormat = ImportMappingRulesRequestRulesFormatEnum.IMPORT_RULES_FILE_FORMAT_HARBOUR_BRIDGE_SESSION_FILE;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "quisquam";
                fields = "vero";
                key = "omnis";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "delectus";
                uploadProtocol = "voluptate";
            }};            

            DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportResponse res = sdk.projects.datamigrationProjectsLocationsConversionWorkspacesMappingRulesImport(req, new DatamigrationProjectsLocationsConversionWorkspacesMappingRulesImportSecurity("consectetur", "vero") {{
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

## datamigrationProjectsLocationsConversionWorkspacesRollback

Rolls back a conversion workspace to the last committed snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesRollbackRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesRollbackResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesRollbackSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConversionWorkspacesRollbackRequest req = new DatamigrationProjectsLocationsConversionWorkspacesRollbackRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("distinctio", "quod");
                    put("odio", "similique");
                    put("facilis", "vero");
                    put("ducimus", "dolore");
                }};
                accessToken = "quibusdam";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "natus";
                key = "impedit";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "exercitationem";
                uploadProtocol = "nulla";
            }};            

            DatamigrationProjectsLocationsConversionWorkspacesRollbackResponse res = sdk.projects.datamigrationProjectsLocationsConversionWorkspacesRollback(req, new DatamigrationProjectsLocationsConversionWorkspacesRollbackSecurity("fugit", "porro") {{
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

## datamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs

Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsRequest req = new DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                completedUntilTime = "alias";
                fields = "officia";
                key = "tempora";
                maxSize = 368584L;
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "aspernatur";
                returnMostRecentPerJobType = false;
                uploadType = "vel";
                uploadProtocol = "possimus";
            }};            

            DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsResponse res = sdk.projects.datamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs(req, new DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsSecurity("magnam", "ratione") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchBackgroundJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datamigrationProjectsLocationsConversionWorkspacesSeed

Imports a snapshot of the source database into the conversion workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesSeedRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesSeedResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConversionWorkspacesSeedSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SeedConversionWorkspaceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConversionWorkspacesSeedRequest req = new DatamigrationProjectsLocationsConversionWorkspacesSeedRequest("ex") {{
                dollarXgafv = XgafvEnum.TWO;
                seedConversionWorkspaceRequest = new SeedConversionWorkspaceRequest() {{
                    autoCommit = false;
                    destinationConnectionProfile = "dicta";
                    sourceConnectionProfile = "dolor";
                }};;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "ex";
                fields = "nulla";
                key = "excepturi";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "sapiente";
                uploadProtocol = "quisquam";
            }};            

            DatamigrationProjectsLocationsConversionWorkspacesSeedResponse res = sdk.projects.datamigrationProjectsLocationsConversionWorkspacesSeed(req, new DatamigrationProjectsLocationsConversionWorkspacesSeedSecurity("saepe", "ea") {{
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

## datamigrationProjectsLocationsFetchStaticIps

Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsFetchStaticIpsRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsFetchStaticIpsResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsFetchStaticIpsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsFetchStaticIpsRequest req = new DatamigrationProjectsLocationsFetchStaticIpsRequest("impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "magnam";
                key = "ea";
                oauthToken = "quo";
                pageSize = 232234L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "minima";
                uploadProtocol = "eaque";
            }};            

            DatamigrationProjectsLocationsFetchStaticIpsResponse res = sdk.projects.datamigrationProjectsLocationsFetchStaticIps(req, new DatamigrationProjectsLocationsFetchStaticIpsSecurity("a", "libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fetchStaticIpsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datamigrationProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsListRequest req = new DatamigrationProjectsLocationsListRequest("aut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "fugit";
                filter = "accusamus";
                key = "inventore";
                oauthToken = "non";
                pageSize = 89603L;
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "placeat";
                uploadProtocol = "velit";
            }};            

            DatamigrationProjectsLocationsListResponse res = sdk.projects.datamigrationProjectsLocationsList(req, new DatamigrationProjectsLocationsListSecurity("eum", "autem") {{
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

## datamigrationProjectsLocationsMigrationJobsCreate

Creates a new migration job in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsCreateRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsCreateResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConversionWorkspaceInfo;
import org.openapis.openapi.models.shared.DatabaseType;
import org.openapis.openapi.models.shared.DatabaseTypeEngineEnum;
import org.openapis.openapi.models.shared.DatabaseTypeProviderEnum;
import org.openapis.openapi.models.shared.DumpFlag;
import org.openapis.openapi.models.shared.DumpFlags;
import org.openapis.openapi.models.shared.MigrationJobInput;
import org.openapis.openapi.models.shared.MigrationJobStateEnum;
import org.openapis.openapi.models.shared.MigrationJobTypeEnum;
import org.openapis.openapi.models.shared.ReverseSshConnectivity;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.VpcPeeringConnectivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsMigrationJobsCreateRequest req = new DatamigrationProjectsLocationsMigrationJobsCreateRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                migrationJobInput = new MigrationJobInput() {{
                    conversionWorkspace = new ConversionWorkspaceInfo() {{
                        commitId = "assumenda";
                        name = "Mrs. Shane Reinger";
                    }};;
                    destination = "explicabo";
                    destinationDatabase = new DatabaseType() {{
                        engine = DatabaseTypeEngineEnum.POSTGRESQL;
                        provider = DatabaseTypeProviderEnum.DATABASE_PROVIDER_UNSPECIFIED;
                    }};;
                    displayName = "molestiae";
                    dumpFlags = new DumpFlags() {{
                        dumpFlags = new org.openapis.openapi.models.shared.DumpFlag[]{{
                            add(new DumpFlag() {{
                                name = "Esther Koch";
                                value = "fuga";
                            }}),
                            add(new DumpFlag() {{
                                name = "Yvette Stehr";
                                value = "suscipit";
                            }}),
                        }};
                    }};;
                    dumpPath = "assumenda";
                    error = new Status() {{
                        code = 181151;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("veritatis", "ipsa");
                                put("id", "quidem");
                                put("neque", "quo");
                                put("illum", "quo");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("eius", "eos");
                                put("voluptas", "ab");
                                put("cupiditate", "consequatur");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("debitis", "ipsam");
                                put("aspernatur", "sequi");
                            }}),
                        }};
                        message = "quo";
                    }};;
                    filter = "esse";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aperiam", "distinctio");
                        put("quod", "dignissimos");
                        put("inventore", "nihil");
                        put("totam", "accusamus");
                    }};
                    name = "Courtney Mayert";
                    reverseSshConnectivity = new ReverseSshConnectivity() {{
                        vm = "dolores";
                        vmIp = "deserunt";
                        vmPort = 475289;
                        vpc = "accusantium";
                    }};;
                    source = "porro";
                    sourceDatabase = new DatabaseType() {{
                        engine = DatabaseTypeEngineEnum.MYSQL;
                        provider = DatabaseTypeProviderEnum.RDS;
                    }};;
                    state = MigrationJobStateEnum.DELETING;
                    staticIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("deleniti", "fugit");
                    }};
                    type = MigrationJobTypeEnum.CONTINUOUS;
                    vpcPeeringConnectivity = new VpcPeeringConnectivity() {{
                        vpc = "mollitia";
                    }};;
                }};;
                accessToken = "incidunt";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "minima";
                key = "nisi";
                migrationJobId = "fugit";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "consequuntur";
                requestId = "ratione";
                uploadType = "explicabo";
                uploadProtocol = "saepe";
            }};            

            DatamigrationProjectsLocationsMigrationJobsCreateResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsCreate(req, new DatamigrationProjectsLocationsMigrationJobsCreateSecurity("occaecati", "atque") {{
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

## datamigrationProjectsLocationsMigrationJobsGenerateSshScript

Generate a SSH configuration script to configure the reverse SSH connectivity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GenerateSshScriptRequest;
import org.openapis.openapi.models.shared.VmCreationConfig;
import org.openapis.openapi.models.shared.VmSelectionConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest req = new DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest("et") {{
                dollarXgafv = XgafvEnum.ONE;
                generateSshScriptRequest = new GenerateSshScriptRequest() {{
                    vm = "eveniet";
                    vmCreationConfig = new VmCreationConfig() {{
                        subnet = "accusamus";
                        vmMachineType = "veritatis";
                        vmZone = "esse";
                    }};;
                    vmPort = 800379;
                    vmSelectionConfig = new VmSelectionConfig() {{
                        vmZone = "nam";
                    }};;
                }};;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "saepe";
                key = "vel";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "rerum";
                uploadProtocol = "occaecati";
            }};            

            DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsGenerateSshScript(req, new DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity("minima", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sshScript != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datamigrationProjectsLocationsMigrationJobsList

Lists migration jobs in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsListRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsListResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsMigrationJobsListRequest req = new DatamigrationProjectsLocationsMigrationJobsListRequest("eligendi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "cumque";
                filter = "consequuntur";
                key = "consequatur";
                oauthToken = "minus";
                orderBy = "quaerat";
                pageSize = 959167L;
                pageToken = "consectetur";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "blanditiis";
                uploadProtocol = "provident";
            }};            

            DatamigrationProjectsLocationsMigrationJobsListResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsList(req, new DatamigrationProjectsLocationsMigrationJobsListSecurity("a", "nulla") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listMigrationJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datamigrationProjectsLocationsMigrationJobsPatch

Updates the parameters of a single migration job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsPatchRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsPatchResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConversionWorkspaceInfo;
import org.openapis.openapi.models.shared.DatabaseType;
import org.openapis.openapi.models.shared.DatabaseTypeEngineEnum;
import org.openapis.openapi.models.shared.DatabaseTypeProviderEnum;
import org.openapis.openapi.models.shared.DumpFlag;
import org.openapis.openapi.models.shared.DumpFlags;
import org.openapis.openapi.models.shared.MigrationJobInput;
import org.openapis.openapi.models.shared.MigrationJobStateEnum;
import org.openapis.openapi.models.shared.MigrationJobTypeEnum;
import org.openapis.openapi.models.shared.ReverseSshConnectivity;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.VpcPeeringConnectivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsMigrationJobsPatchRequest req = new DatamigrationProjectsLocationsMigrationJobsPatchRequest("quas") {{
                dollarXgafv = XgafvEnum.ONE;
                migrationJobInput = new MigrationJobInput() {{
                    conversionWorkspace = new ConversionWorkspaceInfo() {{
                        commitId = "quasi";
                        name = "Jeremiah Mayer";
                    }};;
                    destination = "quia";
                    destinationDatabase = new DatabaseType() {{
                        engine = DatabaseTypeEngineEnum.ORACLE;
                        provider = DatabaseTypeProviderEnum.ALLOYDB;
                    }};;
                    displayName = "facere";
                    dumpFlags = new DumpFlags() {{
                        dumpFlags = new org.openapis.openapi.models.shared.DumpFlag[]{{
                            add(new DumpFlag() {{
                                name = "Ann Murphy";
                                value = "tenetur";
                            }}),
                        }};
                    }};;
                    dumpPath = "quae";
                    error = new Status() {{
                        code = 936747;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("eius", "libero");
                                put("illum", "soluta");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("aliquam", "sapiente");
                            }}),
                        }};
                        message = "dicta";
                    }};;
                    filter = "ullam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ullam", "nisi");
                        put("aut", "voluptatum");
                    }};
                    name = "Rosemarie Jacobs";
                    reverseSshConnectivity = new ReverseSshConnectivity() {{
                        vm = "dolorum";
                        vmIp = "architecto";
                        vmPort = 609178;
                        vpc = "tenetur";
                    }};;
                    source = "quasi";
                    sourceDatabase = new DatabaseType() {{
                        engine = DatabaseTypeEngineEnum.ORACLE;
                        provider = DatabaseTypeProviderEnum.DATABASE_PROVIDER_UNSPECIFIED;
                    }};;
                    state = MigrationJobStateEnum.COMPLETED;
                    staticIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("minima", "veritatis");
                    }};
                    type = MigrationJobTypeEnum.TYPE_UNSPECIFIED;
                    vpcPeeringConnectivity = new VpcPeeringConnectivity() {{
                        vpc = "adipisci";
                    }};;
                }};;
                accessToken = "iste";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "rem";
                key = "aut";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "eum";
                requestId = "mollitia";
                updateMask = "ab";
                uploadType = "corrupti";
                uploadProtocol = "non";
                validateOnly = false;
            }};            

            DatamigrationProjectsLocationsMigrationJobsPatchResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsPatch(req, new DatamigrationProjectsLocationsMigrationJobsPatchSecurity("voluptatem", "dolor") {{
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

## datamigrationProjectsLocationsMigrationJobsPromote

Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsPromoteRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsPromoteResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsPromoteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsMigrationJobsPromoteRequest req = new DatamigrationProjectsLocationsMigrationJobsPromoteRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("explicabo", "voluptas");
                    put("aut", "dignissimos");
                    put("dicta", "maiores");
                    put("natus", "velit");
                }};
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "aperiam";
                key = "ea";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellendus";
                uploadProtocol = "officia";
            }};            

            DatamigrationProjectsLocationsMigrationJobsPromoteResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsPromote(req, new DatamigrationProjectsLocationsMigrationJobsPromoteSecurity("maxime", "dignissimos") {{
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

## datamigrationProjectsLocationsMigrationJobsRestart

Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsRestartRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsRestartResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsRestartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsMigrationJobsRestartRequest req = new DatamigrationProjectsLocationsMigrationJobsRestartRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quae", "quaerat");
                    put("porro", "quod");
                }};
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "fuga";
                key = "id";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "culpa";
                uploadProtocol = "est";
            }};            

            DatamigrationProjectsLocationsMigrationJobsRestartResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsRestart(req, new DatamigrationProjectsLocationsMigrationJobsRestartSecurity("recusandae", "totam") {{
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

## datamigrationProjectsLocationsMigrationJobsResume

Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsResumeRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsResumeResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsResumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsMigrationJobsResumeRequest req = new DatamigrationProjectsLocationsMigrationJobsResumeRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quos", "vel");
                    put("labore", "possimus");
                }};
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "in";
                key = "corporis";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "nemo";
                uploadProtocol = "recusandae";
            }};            

            DatamigrationProjectsLocationsMigrationJobsResumeResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsResume(req, new DatamigrationProjectsLocationsMigrationJobsResumeSecurity("aliquid", "aperiam") {{
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

## datamigrationProjectsLocationsMigrationJobsStart

Start an already created migration job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsStartRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsStartResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsStartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsMigrationJobsStartRequest req = new DatamigrationProjectsLocationsMigrationJobsStartRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("exercitationem", "earum");
                    put("facere", "numquam");
                }};
                accessToken = "doloribus";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "quidem";
                key = "saepe";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "sunt";
                uploadProtocol = "asperiores";
            }};            

            DatamigrationProjectsLocationsMigrationJobsStartResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsStart(req, new DatamigrationProjectsLocationsMigrationJobsStartSecurity("adipisci", "non") {{
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

## datamigrationProjectsLocationsMigrationJobsStop

Stops a running migration job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsStopRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsStopResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsStopSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsMigrationJobsStopRequest req = new DatamigrationProjectsLocationsMigrationJobsStopRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("a", "debitis");
                    put("consectetur", "corporis");
                }};
                accessToken = "harum";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "voluptates";
                key = "libero";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "similique";
                uploadProtocol = "tempora";
            }};            

            DatamigrationProjectsLocationsMigrationJobsStopResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsStop(req, new DatamigrationProjectsLocationsMigrationJobsStopSecurity("aspernatur", "voluptas") {{
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

## datamigrationProjectsLocationsMigrationJobsVerify

Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsVerifyRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsVerifyResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsVerifySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsMigrationJobsVerifyRequest req = new DatamigrationProjectsLocationsMigrationJobsVerifyRequest("voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nobis", "dolorum");
                    put("adipisci", "minus");
                }};
                accessToken = "dolores";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "dolore";
                key = "aliquam";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ullam";
                uploadProtocol = "adipisci";
            }};            

            DatamigrationProjectsLocationsMigrationJobsVerifyResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsVerify(req, new DatamigrationProjectsLocationsMigrationJobsVerifySecurity("cum", "blanditiis") {{
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

## datamigrationProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsOperationsCancelRequest req = new DatamigrationProjectsLocationsOperationsCancelRequest("quas") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("culpa", "corrupti");
                }};
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "exercitationem";
                key = "nobis";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "sed";
                uploadProtocol = "reiciendis";
            }};            

            DatamigrationProjectsLocationsOperationsCancelResponse res = sdk.projects.datamigrationProjectsLocationsOperationsCancel(req, new DatamigrationProjectsLocationsOperationsCancelSecurity("explicabo", "asperiores") {{
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

## datamigrationProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsOperationsListRequest req = new DatamigrationProjectsLocationsOperationsListRequest("facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolore";
                filter = "laborum";
                key = "sed";
                oauthToken = "in";
                pageSize = 417486L;
                pageToken = "quidem";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "voluptas";
                uploadProtocol = "unde";
            }};            

            DatamigrationProjectsLocationsOperationsListResponse res = sdk.projects.datamigrationProjectsLocationsOperationsList(req, new DatamigrationProjectsLocationsOperationsListSecurity("architecto", "suscipit") {{
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

## datamigrationProjectsLocationsPrivateConnectionsCreate

Creates a new private connection in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsCreateRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsCreateResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PrivateConnectionInput;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.VpcPeeringConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsPrivateConnectionsCreateRequest req = new DatamigrationProjectsLocationsPrivateConnectionsCreateRequest("sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                privateConnectionInput = new PrivateConnectionInput() {{
                    displayName = "illo";
                    error = new Status() {{
                        code = 967795;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("maiores", "incidunt");
                                put("sed", "provident");
                                put("eius", "necessitatibus");
                            }}),
                        }};
                        message = "ipsum";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("occaecati", "quos");
                        put("voluptatibus", "tempora");
                    }};
                    name = "Allison Wisozk I";
                    vpcPeeringConfig = new VpcPeeringConfig() {{
                        subnet = "officiis";
                        vpcName = "praesentium";
                    }};;
                }};;
                accessToken = "facilis";
                alt = AltEnum.JSON;
                callback = "incidunt";
                fields = "ipsam";
                key = "debitis";
                oauthToken = "rem";
                prettyPrint = false;
                privateConnectionId = "sit";
                quotaUser = "nobis";
                requestId = "error";
                skipValidation = false;
                uploadType = "veniam";
                uploadProtocol = "minima";
            }};            

            DatamigrationProjectsLocationsPrivateConnectionsCreateResponse res = sdk.projects.datamigrationProjectsLocationsPrivateConnectionsCreate(req, new DatamigrationProjectsLocationsPrivateConnectionsCreateSecurity("recusandae", "reiciendis") {{
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

## datamigrationProjectsLocationsPrivateConnectionsDelete

Deletes a single Database Migration Service private connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsDeleteRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsDeleteResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsPrivateConnectionsDeleteRequest req = new DatamigrationProjectsLocationsPrivateConnectionsDeleteRequest("nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "veniam";
                key = "in";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "beatae";
                requestId = "laudantium";
                uploadType = "exercitationem";
                uploadProtocol = "praesentium";
            }};            

            DatamigrationProjectsLocationsPrivateConnectionsDeleteResponse res = sdk.projects.datamigrationProjectsLocationsPrivateConnectionsDelete(req, new DatamigrationProjectsLocationsPrivateConnectionsDeleteSecurity("cum", "laboriosam") {{
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

## datamigrationProjectsLocationsPrivateConnectionsGet

Gets details of a single private connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsGetRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsGetResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsPrivateConnectionsGetRequest req = new DatamigrationProjectsLocationsPrivateConnectionsGetRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "debitis";
                key = "neque";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "officia";
                uploadProtocol = "dolorum";
            }};            

            DatamigrationProjectsLocationsPrivateConnectionsGetResponse res = sdk.projects.datamigrationProjectsLocationsPrivateConnectionsGet(req, new DatamigrationProjectsLocationsPrivateConnectionsGetSecurity("corrupti", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.privateConnection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datamigrationProjectsLocationsPrivateConnectionsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicyRequest req = new DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicyRequest("tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "voluptatem";
                key = "culpa";
                oauthToken = "expedita";
                optionsRequestedPolicyVersion = 299643L;
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "esse";
                uploadProtocol = "ipsam";
            }};            

            DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicyResponse res = sdk.projects.datamigrationProjectsLocationsPrivateConnectionsGetIamPolicy(req, new DatamigrationProjectsLocationsPrivateConnectionsGetIamPolicySecurity("sit", "voluptatum") {{
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

## datamigrationProjectsLocationsPrivateConnectionsList

Retrieves a list of private connections in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsListRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsListResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsPrivateConnectionsListRequest req = new DatamigrationProjectsLocationsPrivateConnectionsListRequest("quas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "ex";
                filter = "sed";
                key = "sit";
                oauthToken = "vel";
                orderBy = "nostrum";
                pageSize = 906172L;
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "incidunt";
                uploadProtocol = "reiciendis";
            }};            

            DatamigrationProjectsLocationsPrivateConnectionsListResponse res = sdk.projects.datamigrationProjectsLocationsPrivateConnectionsList(req, new DatamigrationProjectsLocationsPrivateConnectionsListSecurity("dolorem", "harum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPrivateConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datamigrationProjectsLocationsPrivateConnectionsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
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

            DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicyRequest req = new DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicyRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("atque"),
                                            add("laborum"),
                                            add("nam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("alias"),
                                            add("amet"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "voluptate";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("provident"),
                                            add("repellendus"),
                                            add("delectus"),
                                            add("voluptates"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quidem"),
                                            add("reprehenderit"),
                                            add("facere"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("mollitia"),
                                            add("veniam"),
                                            add("voluptatem"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "repudiandae";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("reprehenderit"),
                                            add("asperiores"),
                                            add("totam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "quidem";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "et";
                                    expression = "esse";
                                    location = "amet";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("atque"),
                                    add("error"),
                                }};
                                role = "officiis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "officiis";
                                    expression = "accusamus";
                                    location = "natus";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("ex"),
                                }};
                                role = "maiores";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "corrupti";
                                    expression = "at";
                                    location = "error";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("repudiandae"),
                                    add("atque"),
                                }};
                                role = "atque";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "sunt";
                                    expression = "recusandae";
                                    location = "dolorum";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("reiciendis"),
                                    add("doloremque"),
                                }};
                                role = "repudiandae";
                            }}),
                        }};
                        etag = "dicta";
                        version = 36033;
                    }};;
                    updateMask = "beatae";
                }};;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "velit";
                key = "a";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "saepe";
                uploadProtocol = "consequuntur";
            }};            

            DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicyResponse res = sdk.projects.datamigrationProjectsLocationsPrivateConnectionsSetIamPolicy(req, new DatamigrationProjectsLocationsPrivateConnectionsSetIamPolicySecurity("occaecati", "officiis") {{
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

## datamigrationProjectsLocationsPrivateConnectionsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissionsRequest req = new DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissionsRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("eveniet"),
                    }};
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "id";
                key = "quis";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "illo";
                uploadProtocol = "corporis";
            }};            

            DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissionsResponse res = sdk.projects.datamigrationProjectsLocationsPrivateConnectionsTestIamPermissions(req, new DatamigrationProjectsLocationsPrivateConnectionsTestIamPermissionsSecurity("quidem", "eveniet") {{
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
