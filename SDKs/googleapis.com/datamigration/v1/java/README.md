# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "animi";
                }};
                queryParams = new DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "cumque";
                    alt = "proto";
                    callback = "id";
                    connectionProfileId = "vitae";
                    fields = "atque";
                    key = "sit";
                    oauthToken = "fugiat";
                    prettyPrint = false;
                    quotaUser = "nesciunt";
                    requestId = "eaque";
                    uploadType = "suscipit";
                    uploadProtocol = "labore";
                }};
                request = new ConnectionProfileInput() {{
                    alloydb = new AlloyDbConnectionProfileInput() {{
                        clusterId = "voluptatum";
                        settings = new AlloyDbSettingsInput() {{
                            initialUser = new UserPasswordInput() {{
                                password = "quisquam";
                                user = "pariatur";
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("incidunt", "sit");
                                put("voluptas", "velit");
                            }};
                            primaryInstanceSettings = new PrimaryInstanceSettingsInput() {{
                                databaseFlags = new java.util.HashMap<String, String>() {{
                                    put("et", "qui");
                                    put("corporis", "voluptates");
                                    put("quaerat", "aperiam");
                                }};
                                id = "et";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("placeat", "quo");
                                    put("et", "soluta");
                                }};
                                machineConfig = new MachineConfig() {{
                                    cpuCount = 894558792413837213;
                                }};
                            }};
                            vpcNetwork = "vitae";
                        }};
                    }};
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = "NEVER";
                            autoStorageIncrease = true;
                            availabilityType = "REGIONAL";
                            cmekKeyName = "quo";
                            collation = "beatae";
                            dataDiskSizeGb = "aut";
                            dataDiskType = "PD_HDD";
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("et", "ea");
                            }};
                            databaseVersion = "MYSQL_8_0";
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new openapisdk.models.shared.SqlAclEntry[]() {{
                                    add(new SqlAclEntry() {{
                                        expireTime = "animi";
                                        label = "unde";
                                        ttl = "ullam";
                                        value = "assumenda";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "amet";
                                        label = "sequi";
                                        ttl = "officia";
                                        value = "eum";
                                    }}),
                                }};
                                enableIpv4 = true;
                                privateNetwork = "consequatur";
                                requireSsl = false;
                            }};
                            rootPassword = "ea";
                            secondaryZone = "eius";
                            sourceId = "error";
                            storageAutoResizeLimit = "aliquam";
                            tier = "et";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("laboriosam", "vero");
                                put("et", "placeat");
                                put("quibusdam", "quia");
                            }};
                            zone = "voluptas";
                        }};
                    }};
                    displayName = "et";
                    error = new Status() {{
                        code = 4500600018517716623;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("mollitia", "sit");
                                put("est", "quia");
                            }}),
                        }};
                        message = "ipsa";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("id", "ipsa");
                        put("ipsam", "ratione");
                        put("consequatur", "praesentium");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "enim";
                        host = "aut";
                        password = "velit";
                        port = 8628636448964422193;
                        ssl = new SslConfigInput() {{
                            caCertificate = "non";
                            clientCertificate = "enim";
                            clientKey = "reprehenderit";
                        }};
                        username = "vel";
                    }};
                    name = "voluptates";
                    postgresql = new PostgreSqlConnectionProfileInput() {{
                        cloudSqlId = "nesciunt";
                        host = "vel";
                        password = "quaerat";
                        port = 7278960282919804440;
                        ssl = new SslConfigInput() {{
                            caCertificate = "sequi";
                            clientCertificate = "et";
                            clientKey = "minus";
                        }};
                        username = "quibusdam";
                    }};
                    provider = "RDS";
                    state = "DRAFT";
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
* `datamigrationProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `datamigrationProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `datamigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
