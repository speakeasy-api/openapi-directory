# projects

### Available Operations

* [datamigrationProjectsLocationsConnectionProfilesCreate](#datamigrationprojectslocationsconnectionprofilescreate) - Creates a new connection profile in a given project and location.
* [datamigrationProjectsLocationsConnectionProfilesList](#datamigrationprojectslocationsconnectionprofileslist) - Retrieve a list of all connection profiles in a given project and location.
* [datamigrationProjectsLocationsList](#datamigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [datamigrationProjectsLocationsMigrationJobsCreate](#datamigrationprojectslocationsmigrationjobscreate) - Creates a new migration job in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsGenerateSshScript](#datamigrationprojectslocationsmigrationjobsgeneratesshscript) - Generate a SSH configuration script to configure the reverse SSH connectivity.
* [datamigrationProjectsLocationsMigrationJobsGetIamPolicy](#datamigrationprojectslocationsmigrationjobsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [datamigrationProjectsLocationsMigrationJobsList](#datamigrationprojectslocationsmigrationjobslist) - Lists migration jobs in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsPatch](#datamigrationprojectslocationsmigrationjobspatch) - Updates the parameters of a single migration job.
* [datamigrationProjectsLocationsMigrationJobsPromote](#datamigrationprojectslocationsmigrationjobspromote) - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* [datamigrationProjectsLocationsMigrationJobsRestart](#datamigrationprojectslocationsmigrationjobsrestart) - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* [datamigrationProjectsLocationsMigrationJobsResume](#datamigrationprojectslocationsmigrationjobsresume) - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* [datamigrationProjectsLocationsMigrationJobsSetIamPolicy](#datamigrationprojectslocationsmigrationjobssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [datamigrationProjectsLocationsMigrationJobsStart](#datamigrationprojectslocationsmigrationjobsstart) - Start an already created migration job.
* [datamigrationProjectsLocationsMigrationJobsStop](#datamigrationprojectslocationsmigrationjobsstop) - Stops a running migration job.
* [datamigrationProjectsLocationsMigrationJobsTestIamPermissions](#datamigrationprojectslocationsmigrationjobstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [datamigrationProjectsLocationsMigrationJobsVerify](#datamigrationprojectslocationsmigrationjobsverify) - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* [datamigrationProjectsLocationsOperationsCancel](#datamigrationprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datamigrationProjectsLocationsOperationsDelete](#datamigrationprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datamigrationProjectsLocationsOperationsGet](#datamigrationprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datamigrationProjectsLocationsOperationsList](#datamigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## datamigrationProjectsLocationsConnectionProfilesCreate

Creates a new connection profile in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudSqlConnectionProfileInput;
import org.openapis.openapi.models.shared.CloudSqlSettingsActivationPolicyEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDataDiskTypeEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDatabaseVersionEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsInput;
import org.openapis.openapi.models.shared.ConnectionProfileInput;
import org.openapis.openapi.models.shared.ConnectionProfileProviderEnum;
import org.openapis.openapi.models.shared.ConnectionProfileStateEnum;
import org.openapis.openapi.models.shared.MySqlConnectionProfileInput;
import org.openapis.openapi.models.shared.SqlAclEntry;
import org.openapis.openapi.models.shared.SqlIpConfig;
import org.openapis.openapi.models.shared.SslConfigInput;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConnectionProfilesCreateRequest req = new DatamigrationProjectsLocationsConnectionProfilesCreateRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                connectionProfileInput = new ConnectionProfileInput() {{
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = CloudSqlSettingsActivationPolicyEnum.ALWAYS;
                            autoStorageIncrease = false;
                            dataDiskSizeGb = "explicabo";
                            dataDiskType = CloudSqlSettingsDataDiskTypeEnum.PD_HDD;
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("omnis", "nemo");
                                put("minima", "excepturi");
                            }};
                            databaseVersion = CloudSqlSettingsDatabaseVersionEnum.SQL_DATABASE_VERSION_UNSPECIFIED;
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new org.openapis.openapi.models.shared.SqlAclEntry[]{{
                                    add(new SqlAclEntry() {{
                                        expireTime = "culpa";
                                        label = "doloribus";
                                        ttl = "sapiente";
                                        value = "architecto";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "mollitia";
                                        label = "dolorem";
                                        ttl = "culpa";
                                        value = "consequuntur";
                                    }}),
                                }};
                                enableIpv4 = false;
                                privateNetwork = "repellat";
                                requireSsl = false;
                            }};;
                            rootPassword = "mollitia";
                            sourceId = "occaecati";
                            storageAutoResizeLimit = "numquam";
                            tier = "commodi";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("molestiae", "velit");
                                put("error", "quia");
                            }};
                            zone = "quis";
                        }};;
                    }};;
                    displayName = "vitae";
                    error = new Status() {{
                        code = 674752;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("odit", "quo");
                                put("sequi", "tenetur");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("id", "possimus");
                                put("aut", "quasi");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("temporibus", "laborum");
                                put("quasi", "reiciendis");
                                put("voluptatibus", "vero");
                            }}),
                        }};
                        message = "nihil";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptatibus", "ipsa");
                        put("omnis", "voluptate");
                        put("cum", "perferendis");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "doloremque";
                        host = "reprehenderit";
                        password = "ut";
                        port = 979587;
                        ssl = new SslConfigInput() {{
                            caCertificate = "dicta";
                            clientCertificate = "corporis";
                            clientKey = "dolore";
                        }};;
                        username = "Jayden.Carter88";
                    }};;
                    name = "Elvira Bergnaum";
                    provider = ConnectionProfileProviderEnum.CLOUDSQL;
                    state = ConnectionProfileStateEnum.UPDATING;
                }};;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "praesentium";
                connectionProfileId = "rem";
                fields = "voluptates";
                key = "quasi";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "sint";
                requestId = "veritatis";
                uploadType = "itaque";
                uploadProtocol = "incidunt";
            }};            

            DatamigrationProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req, new DatamigrationProjectsLocationsConnectionProfilesCreateSecurity("enim", "consequatur") {{
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

Retrieve a list of all connection profiles in a given project and location.

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

            DatamigrationProjectsLocationsConnectionProfilesListRequest req = new DatamigrationProjectsLocationsConnectionProfilesListRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "quibusdam";
                filter = "labore";
                key = "modi";
                oauthToken = "qui";
                orderBy = "aliquid";
                pageSize = 586513L;
                pageToken = "quos";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "magni";
                uploadProtocol = "assumenda";
            }};            

            DatamigrationProjectsLocationsConnectionProfilesListResponse res = sdk.projects.datamigrationProjectsLocationsConnectionProfilesList(req, new DatamigrationProjectsLocationsConnectionProfilesListSecurity("ipsam", "alias") {{
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

            DatamigrationProjectsLocationsListRequest req = new DatamigrationProjectsLocationsListRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "tempore";
                filter = "labore";
                key = "delectus";
                oauthToken = "eum";
                pageSize = 248753L;
                pageToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "aliquid";
                uploadProtocol = "provident";
            }};            

            DatamigrationProjectsLocationsListResponse res = sdk.projects.datamigrationProjectsLocationsList(req, new DatamigrationProjectsLocationsListSecurity("necessitatibus", "sint") {{
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
import org.openapis.openapi.models.shared.DatabaseType;
import org.openapis.openapi.models.shared.DatabaseTypeEngineEnum;
import org.openapis.openapi.models.shared.DatabaseTypeProviderEnum;
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

            DatamigrationProjectsLocationsMigrationJobsCreateRequest req = new DatamigrationProjectsLocationsMigrationJobsCreateRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                migrationJobInput = new MigrationJobInput() {{
                    destination = "debitis";
                    destinationDatabase = new DatabaseType() {{
                        engine = DatabaseTypeEngineEnum.MYSQL;
                        provider = DatabaseTypeProviderEnum.RDS;
                    }};;
                    displayName = "in";
                    dumpPath = "in";
                    error = new Status() {{
                        code = 846409;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("dicta", "magnam");
                                put("cumque", "facere");
                                put("ea", "aliquid");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("accusamus", "non");
                                put("occaecati", "enim");
                                put("accusamus", "delectus");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("provident", "nam");
                                put("id", "blanditiis");
                                put("deleniti", "sapiente");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("deserunt", "nisi");
                            }}),
                        }};
                        message = "vel";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("omnis", "molestiae");
                        put("perferendis", "nihil");
                        put("magnam", "distinctio");
                    }};
                    name = "Leroy Greenfelder";
                    reverseSshConnectivity = new ReverseSshConnectivity() {{
                        vm = "nobis";
                        vmIp = "eum";
                        vmPort = 878453;
                        vpc = "aspernatur";
                    }};;
                    source = "architecto";
                    sourceDatabase = new DatabaseType() {{
                        engine = DatabaseTypeEngineEnum.DATABASE_ENGINE_UNSPECIFIED;
                        provider = DatabaseTypeProviderEnum.DATABASE_PROVIDER_UNSPECIFIED;
                    }};;
                    state = MigrationJobStateEnum.STOPPING;
                    staticIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("provident", "quos");
                        put("sint", "accusantium");
                    }};
                    type = MigrationJobTypeEnum.ONE_TIME;
                    vpcPeeringConnectivity = new VpcPeeringConnectivity() {{
                        vpc = "reiciendis";
                    }};;
                }};;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "dolor";
                key = "necessitatibus";
                migrationJobId = "odit";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "quasi";
                requestId = "iure";
                uploadType = "doloribus";
                uploadProtocol = "debitis";
            }};            

            DatamigrationProjectsLocationsMigrationJobsCreateResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsCreate(req, new DatamigrationProjectsLocationsMigrationJobsCreateSecurity("eius", "maxime") {{
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

            DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest req = new DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                generateSshScriptRequest = new GenerateSshScriptRequest() {{
                    vm = "in";
                    vmCreationConfig = new VmCreationConfig() {{
                        subnet = "architecto";
                        vmMachineType = "architecto";
                        vmZone = "repudiandae";
                    }};;
                    vmPort = 352312;
                    vmSelectionConfig = new VmSelectionConfig() {{
                        vmZone = "expedita";
                    }};;
                }};;
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "sed";
                key = "saepe";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "consequuntur";
                uploadProtocol = "praesentium";
            }};            

            DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsGenerateSshScript(req, new DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptSecurity("natus", "magni") {{
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

## datamigrationProjectsLocationsMigrationJobsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest req = new DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "ea";
                key = "excepturi";
                oauthToken = "odit";
                optionsRequestedPolicyVersion = 407183L;
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "ab";
                uploadProtocol = "maiores";
            }};            

            DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsGetIamPolicy(req, new DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity("quidem", "ipsam") {{
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

            DatamigrationProjectsLocationsMigrationJobsListRequest req = new DatamigrationProjectsLocationsMigrationJobsListRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "nemo";
                filter = "voluptatibus";
                key = "perferendis";
                oauthToken = "fugiat";
                orderBy = "amet";
                pageSize = 11714L;
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "hic";
                uploadProtocol = "libero";
            }};            

            DatamigrationProjectsLocationsMigrationJobsListResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsList(req, new DatamigrationProjectsLocationsMigrationJobsListSecurity("nobis", "dolores") {{
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
import org.openapis.openapi.models.shared.DatabaseType;
import org.openapis.openapi.models.shared.DatabaseTypeEngineEnum;
import org.openapis.openapi.models.shared.DatabaseTypeProviderEnum;
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

            DatamigrationProjectsLocationsMigrationJobsPatchRequest req = new DatamigrationProjectsLocationsMigrationJobsPatchRequest("quis") {{
                dollarXgafv = XgafvEnum.TWO;
                migrationJobInput = new MigrationJobInput() {{
                    destination = "dignissimos";
                    destinationDatabase = new DatabaseType() {{
                        engine = DatabaseTypeEngineEnum.DATABASE_ENGINE_UNSPECIFIED;
                        provider = DatabaseTypeProviderEnum.CLOUDSQL;
                    }};;
                    displayName = "nesciunt";
                    dumpPath = "eos";
                    error = new Status() {{
                        code = 18521;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("quam", "dolor");
                                put("vero", "nostrum");
                                put("hic", "recusandae");
                                put("omnis", "facilis");
                            }}),
                        }};
                        message = "perspiciatis";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("porro", "consequuntur");
                    }};
                    name = "Jeremiah Beatty";
                    reverseSshConnectivity = new ReverseSshConnectivity() {{
                        vm = "adipisci";
                        vmIp = "asperiores";
                        vmPort = 934214;
                        vpc = "modi";
                    }};;
                    source = "iste";
                    sourceDatabase = new DatabaseType() {{
                        engine = DatabaseTypeEngineEnum.MYSQL;
                        provider = DatabaseTypeProviderEnum.CLOUDSQL;
                    }};;
                    state = MigrationJobStateEnum.STARTING;
                    staticIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("nobis", "libero");
                        put("delectus", "quaerat");
                        put("quos", "aliquid");
                    }};
                    type = MigrationJobTypeEnum.TYPE_UNSPECIFIED;
                    vpcPeeringConnectivity = new VpcPeeringConnectivity() {{
                        vpc = "dolorem";
                    }};;
                }};;
                accessToken = "dolor";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "hic";
                key = "excepturi";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "voluptate";
                requestId = "dignissimos";
                updateMask = "reiciendis";
                uploadType = "amet";
                uploadProtocol = "dolorum";
            }};            

            DatamigrationProjectsLocationsMigrationJobsPatchResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsPatch(req, new DatamigrationProjectsLocationsMigrationJobsPatchSecurity("numquam", "veritatis") {{
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

            DatamigrationProjectsLocationsMigrationJobsPromoteRequest req = new DatamigrationProjectsLocationsMigrationJobsPromoteRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("odio", "quaerat");
                    put("accusamus", "quidem");
                }};
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "eos";
                key = "atque";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "ab";
                uploadProtocol = "soluta";
            }};            

            DatamigrationProjectsLocationsMigrationJobsPromoteResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsPromote(req, new DatamigrationProjectsLocationsMigrationJobsPromoteSecurity("dolorum", "iusto") {{
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

            DatamigrationProjectsLocationsMigrationJobsRestartRequest req = new DatamigrationProjectsLocationsMigrationJobsRestartRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("omnis", "necessitatibus");
                    put("distinctio", "asperiores");
                    put("nihil", "ipsum");
                }};
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "eius";
                key = "aspernatur";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "optio";
                uploadProtocol = "accusamus";
            }};            

            DatamigrationProjectsLocationsMigrationJobsRestartResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsRestart(req, new DatamigrationProjectsLocationsMigrationJobsRestartSecurity("ad", "saepe") {{
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

            DatamigrationProjectsLocationsMigrationJobsResumeRequest req = new DatamigrationProjectsLocationsMigrationJobsResumeRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("minima", "repellendus");
                    put("totam", "similique");
                    put("alias", "at");
                }};
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "quod";
                key = "officiis";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "a";
                uploadProtocol = "esse";
            }};            

            DatamigrationProjectsLocationsMigrationJobsResumeResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsResume(req, new DatamigrationProjectsLocationsMigrationJobsResumeSecurity("harum", "iusto") {{
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

## datamigrationProjectsLocationsMigrationJobsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity;
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

            DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest req = new DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("accusamus"),
                                            add("numquam"),
                                            add("enim"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "sapiente";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sit"),
                                            add("expedita"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("vel"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deserunt"),
                                            add("quam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "incidunt";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("maxime"),
                                            add("pariatur"),
                                            add("soluta"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "laborum";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aspernatur"),
                                            add("dolores"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aliquid"),
                                            add("quam"),
                                            add("molestias"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("neque"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "magni";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
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
                    updateMask = "aperiam";
                }};;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "dolore";
                fields = "labore";
                key = "adipisci";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "quae";
                uploadProtocol = "aut";
            }};            

            DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsSetIamPolicy(req, new DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity("quas", "itaque") {{
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

            DatamigrationProjectsLocationsMigrationJobsStartRequest req = new DatamigrationProjectsLocationsMigrationJobsStartRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("porro", "doloribus");
                    put("ut", "facilis");
                    put("cupiditate", "qui");
                    put("quae", "laudantium");
                }};
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "quisquam";
                key = "vero";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "ipsum";
                uploadProtocol = "delectus";
            }};            

            DatamigrationProjectsLocationsMigrationJobsStartResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsStart(req, new DatamigrationProjectsLocationsMigrationJobsStartSecurity("voluptate", "consectetur") {{
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

            DatamigrationProjectsLocationsMigrationJobsStopRequest req = new DatamigrationProjectsLocationsMigrationJobsStopRequest("vero") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("hic", "distinctio");
                    put("quod", "odio");
                }};
                accessToken = "similique";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "ducimus";
                key = "dolore";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "sequi";
                uploadProtocol = "natus";
            }};            

            DatamigrationProjectsLocationsMigrationJobsStopResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsStop(req, new DatamigrationProjectsLocationsMigrationJobsStopSecurity("impedit", "aut") {{
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

## datamigrationProjectsLocationsMigrationJobsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest req = new DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("fugit"),
                        add("porro"),
                        add("maiores"),
                        add("doloribus"),
                    }};
                }};;
                accessToken = "iusto";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "alias";
                key = "officia";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "ea";
                uploadProtocol = "aspernatur";
            }};            

            DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsTestIamPermissions(req, new DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsSecurity("vel", "possimus") {{
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

            DatamigrationProjectsLocationsMigrationJobsVerifyRequest req = new DatamigrationProjectsLocationsMigrationJobsVerifyRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("laudantium", "dicta");
                    put("dolor", "maiores");
                }};
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "excepturi";
                key = "voluptatibus";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quisquam";
                uploadProtocol = "saepe";
            }};            

            DatamigrationProjectsLocationsMigrationJobsVerifyResponse res = sdk.projects.datamigrationProjectsLocationsMigrationJobsVerify(req, new DatamigrationProjectsLocationsMigrationJobsVerifySecurity("ea", "impedit") {{
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

            DatamigrationProjectsLocationsOperationsCancelRequest req = new DatamigrationProjectsLocationsOperationsCancelRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("inventore", "magnam");
                    put("ea", "quo");
                }};
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "minima";
                key = "eaque";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "aut";
                uploadProtocol = "aut";
            }};            

            DatamigrationProjectsLocationsOperationsCancelResponse res = sdk.projects.datamigrationProjectsLocationsOperationsCancel(req, new DatamigrationProjectsLocationsOperationsCancelSecurity("deleniti", "impedit") {{
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

## datamigrationProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsOperationsDeleteRequest req = new DatamigrationProjectsLocationsOperationsDeleteRequest("aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "non";
                fields = "et";
                force = false;
                key = "dolorum";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "placeat";
                requestId = "velit";
                uploadType = "eum";
                uploadProtocol = "autem";
            }};            

            DatamigrationProjectsLocationsOperationsDeleteResponse res = sdk.projects.datamigrationProjectsLocationsOperationsDelete(req, new DatamigrationProjectsLocationsOperationsDeleteSecurity("nobis", "quas") {{
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

## datamigrationProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsOperationsGetRequest req = new DatamigrationProjectsLocationsOperationsGetRequest("assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "tempora";
                key = "numquam";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "ipsa";
                uploadProtocol = "molestiae";
            }};            

            DatamigrationProjectsLocationsOperationsGetResponse res = sdk.projects.datamigrationProjectsLocationsOperationsGet(req, new DatamigrationProjectsLocationsOperationsGetSecurity("magnam", "odio") {{
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

            DatamigrationProjectsLocationsOperationsListRequest req = new DatamigrationProjectsLocationsOperationsListRequest("eius") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "fuga";
                fields = "reprehenderit";
                filter = "quidem";
                key = "fugiat";
                oauthToken = "ut";
                pageSize = 433439L;
                pageToken = "suscipit";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "eos";
                uploadProtocol = "praesentium";
            }};            

            DatamigrationProjectsLocationsOperationsListResponse res = sdk.projects.datamigrationProjectsLocationsOperationsList(req, new DatamigrationProjectsLocationsOperationsListSecurity("quisquam", "veritatis") {{
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
