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

import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreatePathParams;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateResponse;
import org.openapis.openapi.models.shared.ConnectionProfileProviderEnum;
import org.openapis.openapi.models.shared.ConnectionProfileStateEnum;
import org.openapis.openapi.models.shared.ConnectionProfileInput;
import org.openapis.openapi.models.shared.PostgreSqlConnectionProfileInput;
import org.openapis.openapi.models.shared.SslConfigInput;
import org.openapis.openapi.models.shared.PrivateServiceConnectConnectivity;
import org.openapis.openapi.models.shared.OracleConnectionProfileInput;
import org.openapis.openapi.models.shared.PrivateConnectivity;
import org.openapis.openapi.models.shared.ForwardSshTunnelConnectivity;
import org.openapis.openapi.models.shared.MySqlConnectionProfileInput;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.CloudSqlConnectionProfileInput;
import org.openapis.openapi.models.shared.CloudSqlSettingsActivationPolicyEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsAvailabilityTypeEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDataDiskTypeEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDatabaseVersionEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsInput;
import org.openapis.openapi.models.shared.SqlIpConfig;
import org.openapis.openapi.models.shared.SqlAclEntry;
import org.openapis.openapi.models.shared.AlloyDbConnectionProfileInput;
import org.openapis.openapi.models.shared.AlloyDbSettingsInput;
import org.openapis.openapi.models.shared.PrimaryInstanceSettingsInput;
import org.openapis.openapi.models.shared.MachineConfig;
import org.openapis.openapi.models.shared.UserPasswordInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConnectionProfilesCreateRequest req = new DatamigrationProjectsLocationsConnectionProfilesCreateRequest() {{
                security = new DatamigrationProjectsLocationsConnectionProfilesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DatamigrationProjectsLocationsConnectionProfilesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    connectionProfileId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    skipValidation = false;
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                    validateOnly = false;
                }};
                request = new ConnectionProfileInput() {{
                    alloydb = new AlloyDbConnectionProfileInput() {{
                        clusterId = "magnam";
                        settings = new AlloyDbSettingsInput() {{
                            initialUser = new UserPasswordInput() {{
                                password = "debitis";
                                user = "ipsa";
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                            }};
                            primaryInstanceSettings = new PrimaryInstanceSettingsInput() {{
                                databaseFlags = new java.util.HashMap<String, String>() {{
                                    put("recusandae", "temporibus");
                                    put("ab", "quis");
                                }};
                                id = "veritatis";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("perferendis", "ipsam");
                                    put("repellendus", "sapiente");
                                    put("quo", "odit");
                                }};
                                machineConfig = new MachineConfig() {{
                                    cpuCount = 870013;
                                }};
                            }};
                            vpcNetwork = "at";
                        }};
                    }};
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = "NEVER";
                            autoStorageIncrease = false;
                            availabilityType = "ZONAL";
                            cmekKeyName = "quod";
                            collation = "quod";
                            dataDiskSizeGb = "esse";
                            dataDiskType = "PD_SSD";
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("dolorum", "dicta");
                                put("nam", "officia");
                                put("occaecati", "fugit");
                                put("deleniti", "hic");
                            }};
                            databaseVersion = "POSTGRES_12";
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new org.openapis.openapi.models.shared.SqlAclEntry[]{{
                                    add(new SqlAclEntry() {{
                                        expireTime = "beatae";
                                        label = "commodi";
                                        ttl = "molestiae";
                                        value = "modi";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "qui";
                                        label = "impedit";
                                        ttl = "cum";
                                        value = "esse";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "ipsum";
                                        label = "excepturi";
                                        ttl = "aspernatur";
                                        value = "perferendis";
                                    }}),
                                }};
                                enableIpv4 = false;
                                privateNetwork = "ad";
                                requireSsl = false;
                            }};
                            rootPassword = "natus";
                            secondaryZone = "sed";
                            sourceId = "iste";
                            storageAutoResizeLimit = "dolor";
                            tier = "natus";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("hic", "saepe");
                                put("fuga", "in");
                            }};
                            zone = "corporis";
                        }};
                    }};
                    displayName = "iste";
                    error = new Status() {{
                        code = 437032;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("architecto", "ipsa");
                                put("reiciendis", "est");
                                put("mollitia", "laborum");
                            }}),
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
                    }};
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
                        }};
                        username = "Eugene_Brown31";
                    }};
                    name = "odit";
                    oracle = new OracleConnectionProfileInput() {{
                        databaseService = "quo";
                        forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                            hostname = "dimwitted-vaulting.info";
                            password = "id";
                            port = 820994;
                            privateKey = "aut";
                            username = "Avery_Mueller9";
                        }};
                        host = "reiciendis";
                        password = "voluptatibus";
                        port = 878194;
                        privateConnectivity = new PrivateConnectivity() {{
                            privateConnection = "nihil";
                        }};
                        staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("voluptatibus", "ipsa");
                            put("omnis", "voluptate");
                            put("cum", "perferendis");
                        }};
                        username = "Alison97";
                    }};
                    postgresql = new PostgreSqlConnectionProfileInput() {{
                        cloudSqlId = "dicta";
                        host = "corporis";
                        password = "dolore";
                        port = 480894;
                        privateServiceConnectConnectivity = new PrivateServiceConnectConnectivity() {{
                            serviceAttachment = "dicta";
                        }};
                        ssl = new SslConfigInput() {{
                            caCertificate = "harum";
                            clientCertificate = "enim";
                            clientKey = "accusamus";
                        }};
                        staticIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("repudiandae", "quae");
                            put("ipsum", "quidem");
                        }};
                        username = "Kennedi.Mante50";
                    }};
                    provider = "RDS";
                    state = "FAILED";
                }};
            }};            

            DatamigrationProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `datamigrationProjectsLocationsConnectionProfilesCreate` - Creates a new connection profile in a given project and location.
* `datamigrationProjectsLocationsConnectionProfilesList` - Retrieves a list of all connection profiles in a given project and location.
* `datamigrationProjectsLocationsConversionWorkspacesApply` - Applies draft tree onto a specific destination database.
* `datamigrationProjectsLocationsConversionWorkspacesCommit` - Marks all the data in the conversion workspace as committed.
* `datamigrationProjectsLocationsConversionWorkspacesConvert` - Creates a draft tree schema for the destination database.
* `datamigrationProjectsLocationsConversionWorkspacesCreate` - Creates a new conversion workspace in a given project and location.
* `datamigrationProjectsLocationsConversionWorkspacesDescribeConversionWorkspaceRevisions` - Retrieves a list of committed revisions of a specific conversion workspace.
* `datamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntities` - Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.
* `datamigrationProjectsLocationsConversionWorkspacesList` - Lists conversion workspaces in a given project and location.
* `datamigrationProjectsLocationsConversionWorkspacesMappingRulesImport` - Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
* `datamigrationProjectsLocationsConversionWorkspacesRollback` - Rolls back a conversion workspace to the last committed snapshot.
* `datamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobs` - Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.
* `datamigrationProjectsLocationsConversionWorkspacesSeed` - Imports a snapshot of the source database into the conversion workspace.
* `datamigrationProjectsLocationsFetchStaticIps` - Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
* `datamigrationProjectsLocationsList` - Lists information about the supported locations for this service.
* `datamigrationProjectsLocationsMigrationJobsCreate` - Creates a new migration job in a given project and location.
* `datamigrationProjectsLocationsMigrationJobsGenerateSshScript` - Generate a SSH configuration script to configure the reverse SSH connectivity.
* `datamigrationProjectsLocationsMigrationJobsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `datamigrationProjectsLocationsMigrationJobsList` - Lists migration jobs in a given project and location.
* `datamigrationProjectsLocationsMigrationJobsPatch` - Updates the parameters of a single migration job.
* `datamigrationProjectsLocationsMigrationJobsPromote` - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* `datamigrationProjectsLocationsMigrationJobsRestart` - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* `datamigrationProjectsLocationsMigrationJobsResume` - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* `datamigrationProjectsLocationsMigrationJobsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `datamigrationProjectsLocationsMigrationJobsStart` - Start an already created migration job.
* `datamigrationProjectsLocationsMigrationJobsStop` - Stops a running migration job.
* `datamigrationProjectsLocationsMigrationJobsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `datamigrationProjectsLocationsMigrationJobsVerify` - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* `datamigrationProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datamigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `datamigrationProjectsLocationsPrivateConnectionsCreate` - Creates a new private connection in a given project and location.
* `datamigrationProjectsLocationsPrivateConnectionsDelete` - Deletes a single Database Migration Service private connection.
* `datamigrationProjectsLocationsPrivateConnectionsGet` - Gets details of a single private connection.
* `datamigrationProjectsLocationsPrivateConnectionsList` - Retrieves a list of private connections in a given project and location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
