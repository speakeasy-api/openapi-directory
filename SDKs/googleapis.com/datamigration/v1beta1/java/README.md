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
import org.openapis.openapi.models.shared.MySqlConnectionProfileInput;
import org.openapis.openapi.models.shared.SslConfigInput;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.CloudSqlConnectionProfileInput;
import org.openapis.openapi.models.shared.CloudSqlSettingsActivationPolicyEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDataDiskTypeEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDatabaseVersionEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsInput;
import org.openapis.openapi.models.shared.SqlIpConfig;
import org.openapis.openapi.models.shared.SqlAclEntry;
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
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new ConnectionProfileInput() {{
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = "SQL_ACTIVATION_POLICY_UNSPECIFIED";
                            autoStorageIncrease = false;
                            dataDiskSizeGb = "debitis";
                            dataDiskType = "SQL_DATA_DISK_TYPE_UNSPECIFIED";
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                            }};
                            databaseVersion = "MYSQL_5_6";
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new org.openapis.openapi.models.shared.SqlAclEntry[]{{
                                    add(new SqlAclEntry() {{
                                        expireTime = "temporibus";
                                        label = "ab";
                                        ttl = "quis";
                                        value = "veritatis";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "deserunt";
                                        label = "perferendis";
                                        ttl = "ipsam";
                                        value = "repellendus";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "sapiente";
                                        label = "quo";
                                        ttl = "odit";
                                        value = "at";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "at";
                                        label = "maiores";
                                        ttl = "molestiae";
                                        value = "quod";
                                    }}),
                                }};
                                enableIpv4 = false;
                                privateNetwork = "quod";
                                requireSsl = false;
                            }};
                            rootPassword = "esse";
                            sourceId = "totam";
                            storageAutoResizeLimit = "porro";
                            tier = "dolorum";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("nam", "officia");
                            }};
                            zone = "occaecati";
                        }};
                    }};
                    displayName = "fugit";
                    error = new Status() {{
                        code = 537373;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("totam", "beatae");
                                put("commodi", "molestiae");
                                put("modi", "qui");
                                put("impedit", "cum");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("ipsum", "excepturi");
                                put("aspernatur", "perferendis");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("natus", "sed");
                                put("iste", "dolor");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("laboriosam", "hic");
                                put("saepe", "fuga");
                                put("in", "corporis");
                            }}),
                        }};
                        message = "iste";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("saepe", "quidem");
                        put("architecto", "ipsa");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "reiciendis";
                        host = "est";
                        password = "mollitia";
                        port = 670638;
                        ssl = new SslConfigInput() {{
                            caCertificate = "dolores";
                            clientCertificate = "dolorem";
                            clientKey = "corporis";
                        }};
                        username = "Braulio60";
                    }};
                    name = "nemo";
                    provider = "DATABASE_PROVIDER_UNSPECIFIED";
                    state = "UPDATING";
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
* `datamigrationProjectsLocationsConnectionProfilesList` - Retrieve a list of all connection profiles in a given project and location.
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
* `datamigrationProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
