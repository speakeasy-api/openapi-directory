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

            DatamigrationProjectsLocationsConnectionProfilesCreateRequest req = new DatamigrationProjectsLocationsConnectionProfilesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                connectionProfileInput = new ConnectionProfileInput() {{
                    alloydb = new AlloyDbConnectionProfileInput() {{
                        clusterId = "distinctio";
                        settings = new AlloyDbSettingsInput() {{
                            encryptionConfig = new EncryptionConfig() {{
                                kmsKeyName = "quibusdam";
                            }};;
                            initialUser = new UserPasswordInput() {{
                                password = "unde";
                                user = "nulla";
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("illum", "vel");
                                put("error", "deserunt");
                                put("suscipit", "iure");
                            }};
                            primaryInstanceSettings = new PrimaryInstanceSettingsInput() {{
                                databaseFlags = new java.util.HashMap<String, String>() {{
                                    put("debitis", "ipsa");
                                    put("delectus", "tempora");
                                }};
                                id = "67cc8796-ed15-41a0-9dfc-2ddf7cc78ca1";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("officia", "occaecati");
                                    put("fugit", "deleniti");
                                    put("hic", "optio");
                                }};
                                machineConfig = new MachineConfig() {{
                                    cpuCount = 521848;
                                }};;
                            }};;
                            vpcNetwork = "beatae";
                        }};;
                    }};;
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = CloudSqlSettingsActivationPolicyEnum.ALWAYS;
                            autoStorageIncrease = false;
                            availabilityType = CloudSqlSettingsAvailabilityTypeEnum.ZONAL;
                            cmekKeyName = "modi";
                            collation = "qui";
                            dataDiskSizeGb = "impedit";
                            dataDiskType = CloudSqlSettingsDataDiskTypeEnum.PD_HDD;
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("ipsum", "excepturi");
                                put("aspernatur", "perferendis");
                            }};
                            databaseVersion = CloudSqlSettingsDatabaseVersionEnum.POSTGRES96;
                            ipConfig = new SqlIpConfig() {{
                                allocatedIpRange = "natus";
                                authorizedNetworks = new org.openapis.openapi.models.shared.SqlAclEntry[]{{
                                    add(new SqlAclEntry() {{
                                        expireTime = "iste";
                                        label = "dolor";
                                        ttl = "natus";
                                        value = "laboriosam";
                                    }}),
                                }};
                                enableIpv4 = false;
                                privateNetwork = "hic";
                                requireSsl = false;
                            }};;
                            rootPassword = "saepe";
                            secondaryZone = "fuga";
                            sourceId = "in";
                            storageAutoResizeLimit = "corporis";
                            tier = "iste";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("saepe", "quidem");
                                put("architecto", "ipsa");
                            }};
                            zone = "reiciendis";
                        }};;
                    }};;
                    displayName = "est";
                    error = new Status() {{
                        code = 653140;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("dolorem", "corporis");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("nobis", "enim");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("nemo", "minima");
                                put("excepturi", "accusantium");
                                put("iure", "culpa");
                            }}),
                        }};
                        message = "doloribus";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("architecto", "mollitia");
                        put("dolorem", "culpa");
                        put("consequuntur", "repellat");
                        put("mollitia", "occaecati");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "numquam";
                        host = "commodi";
                        password = "quam";
                        port = 474697;
                        ssl = new SslConfigInput() {{
                            caCertificate = "velit";
                            clientCertificate = "error";
                            clientKey = "quia";
                        }};;
                        username = "Eugene_Brown31";
                    }};;
                    name = "Angelica Dietrich";
                    oracle = new OracleConnectionProfileInput() {{
                        databaseService = "id";
                        forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                            hostname = "sugary-afoul.com";
                            password = "error";
                            port = 837945;
                            privateKey = "laborum";
                            username = "Austyn_Witting46";
                        }};;
                        host = "praesentium";
                        password = "voluptatibus";
                        port = 55714;
                        privateConnectivity = new PrivateConnectivity() {{
                            privateConnection = "omnis";
                        }};;
                        staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("cum", "perferendis");
                            put("doloremque", "reprehenderit");
                        }};
                        username = "Easter35";
                    }};;
                    postgresql = new PostgreSqlConnectionProfileInput() {{
                        cloudSqlId = "dolore";
                        host = "iusto";
                        password = "dicta";
                        port = 688661;
                        privateServiceConnectConnectivity = new PrivateServiceConnectConnectivity() {{
                            serviceAttachment = "enim";
                        }};;
                        ssl = new SslConfigInput() {{
                            caCertificate = "accusamus";
                            clientCertificate = "commodi";
                            clientKey = "repudiandae";
                        }};;
                        staticIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("ipsum", "quidem");
                        }};
                        username = "Kennedi.Mante50";
                    }};;
                    provider = ConnectionProfileProviderEnum.RDS;
                    state = ConnectionProfileStateEnum.FAILED;
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "sint";
                connectionProfileId = "veritatis";
                fields = "itaque";
                key = "incidunt";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "consequatur";
                requestId = "est";
                skipValidation = false;
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
                validateOnly = false;
            }};            

            DatamigrationProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req, new DatamigrationProjectsLocationsConnectionProfilesCreateSecurity("deserunt", "distinctio") {{
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

* [datamigrationProjectsLocationsConnectionProfilesCreate](docs/projects/README.md#datamigrationprojectslocationsconnectionprofilescreate) - Creates a new connection profile in a given project and location.
* [datamigrationProjectsLocationsConnectionProfilesList](docs/projects/README.md#datamigrationprojectslocationsconnectionprofileslist) - Retrieves a list of all connection profiles in a given project and location.
* [datamigrationProjectsLocationsConversionWorkspacesApply](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesapply) - Applies draft tree onto a specific destination database.
* [datamigrationProjectsLocationsConversionWorkspacesCommit](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacescommit) - Marks all the data in the conversion workspace as committed.
* [datamigrationProjectsLocationsConversionWorkspacesConvert](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesconvert) - Creates a draft tree schema for the destination database.
* [datamigrationProjectsLocationsConversionWorkspacesCreate](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacescreate) - Creates a new conversion workspace in a given project and location.
* [datamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesdescribeconversionworkspacerevisions) - Retrieves a list of committed revisions of a specific conversion workspace.
* [datamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesdescribedatabaseentities) - Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.
* [datamigrationProjectsLocationsConversionWorkspacesList](docs/projects/README.md#datamigrationprojectslocationsconversionworkspaceslist) - Lists conversion workspaces in a given project and location.
* [datamigrationProjectsLocationsConversionWorkspacesMappingRulesImport](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesmappingrulesimport) - Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
* [datamigrationProjectsLocationsConversionWorkspacesRollback](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesrollback) - Rolls back a conversion workspace to the last committed snapshot.
* [datamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacessearchbackgroundjobs) - Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.
* [datamigrationProjectsLocationsConversionWorkspacesSeed](docs/projects/README.md#datamigrationprojectslocationsconversionworkspacesseed) - Imports a snapshot of the source database into the conversion workspace.
* [datamigrationProjectsLocationsFetchStaticIps](docs/projects/README.md#datamigrationprojectslocationsfetchstaticips) - Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
* [datamigrationProjectsLocationsList](docs/projects/README.md#datamigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [datamigrationProjectsLocationsMigrationJobsCreate](docs/projects/README.md#datamigrationprojectslocationsmigrationjobscreate) - Creates a new migration job in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsGenerateSshScript](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsgeneratesshscript) - Generate a SSH configuration script to configure the reverse SSH connectivity.
* [datamigrationProjectsLocationsMigrationJobsList](docs/projects/README.md#datamigrationprojectslocationsmigrationjobslist) - Lists migration jobs in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsPatch](docs/projects/README.md#datamigrationprojectslocationsmigrationjobspatch) - Updates the parameters of a single migration job.
* [datamigrationProjectsLocationsMigrationJobsPromote](docs/projects/README.md#datamigrationprojectslocationsmigrationjobspromote) - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* [datamigrationProjectsLocationsMigrationJobsRestart](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsrestart) - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* [datamigrationProjectsLocationsMigrationJobsResume](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsresume) - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* [datamigrationProjectsLocationsMigrationJobsStart](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsstart) - Start an already created migration job.
* [datamigrationProjectsLocationsMigrationJobsStop](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsstop) - Stops a running migration job.
* [datamigrationProjectsLocationsMigrationJobsVerify](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsverify) - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* [datamigrationProjectsLocationsOperationsCancel](docs/projects/README.md#datamigrationprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datamigrationProjectsLocationsOperationsList](docs/projects/README.md#datamigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datamigrationProjectsLocationsPrivateConnectionsCreate](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionscreate) - Creates a new private connection in a given project and location.
* [datamigrationProjectsLocationsPrivateConnectionsDelete](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionsdelete) - Deletes a single Database Migration Service private connection.
* [datamigrationProjectsLocationsPrivateConnectionsGet](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionsget) - Gets details of a single private connection.
* [datamigrationProjectsLocationsPrivateConnectionsGetIamPolicy](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [datamigrationProjectsLocationsPrivateConnectionsList](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionslist) - Retrieves a list of private connections in a given project and location.
* [datamigrationProjectsLocationsPrivateConnectionsSetIamPolicy](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [datamigrationProjectsLocationsPrivateConnectionsTestIamPermissions](docs/projects/README.md#datamigrationprojectslocationsprivateconnectionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
