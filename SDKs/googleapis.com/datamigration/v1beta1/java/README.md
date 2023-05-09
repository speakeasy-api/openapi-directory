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

            DatamigrationProjectsLocationsConnectionProfilesCreateRequest req = new DatamigrationProjectsLocationsConnectionProfilesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                connectionProfileInput = new ConnectionProfileInput() {{
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = CloudSqlSettingsActivationPolicyEnum.NEVER;
                            autoStorageIncrease = false;
                            dataDiskSizeGb = "quibusdam";
                            dataDiskType = CloudSqlSettingsDataDiskTypeEnum.PD_SSD;
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("corrupti", "illum");
                                put("vel", "error");
                                put("deserunt", "suscipit");
                                put("iure", "magnam");
                            }};
                            databaseVersion = CloudSqlSettingsDatabaseVersionEnum.MYSQL80;
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new org.openapis.openapi.models.shared.SqlAclEntry[]{{
                                    add(new SqlAclEntry() {{
                                        expireTime = "delectus";
                                        label = "tempora";
                                        ttl = "suscipit";
                                        value = "molestiae";
                                    }}),
                                }};
                                enableIpv4 = false;
                                privateNetwork = "minus";
                                requireSsl = false;
                            }};;
                            rootPassword = "placeat";
                            sourceId = "voluptatum";
                            storageAutoResizeLimit = "iusto";
                            tier = "excepturi";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("recusandae", "temporibus");
                                put("ab", "quis");
                            }};
                            zone = "veritatis";
                        }};;
                    }};;
                    displayName = "deserunt";
                    error = new Status() {{
                        code = 20218;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("sapiente", "quo");
                                put("odit", "at");
                                put("at", "maiores");
                                put("molestiae", "quod");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("esse", "totam");
                                put("porro", "dolorum");
                                put("dicta", "nam");
                                put("officia", "occaecati");
                            }}),
                        }};
                        message = "fugit";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("hic", "optio");
                        put("totam", "beatae");
                        put("commodi", "molestiae");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "modi";
                        host = "qui";
                        password = "impedit";
                        port = 736918;
                        ssl = new SslConfigInput() {{
                            caCertificate = "esse";
                            clientCertificate = "ipsum";
                            clientKey = "excepturi";
                        }};;
                        username = "Brianne61";
                    }};;
                    name = "Sheryl Fadel";
                    provider = ConnectionProfileProviderEnum.RDS;
                    state = ConnectionProfileStateEnum.FAILED;
                }};;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                connectionProfileId = "iste";
                fields = "iure";
                key = "saepe";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "architecto";
                requestId = "ipsa";
                uploadType = "reiciendis";
                uploadProtocol = "est";
            }};            

            DatamigrationProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req, new DatamigrationProjectsLocationsConnectionProfilesCreateSecurity("mollitia", "laborum") {{
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
* [datamigrationProjectsLocationsConnectionProfilesList](docs/projects/README.md#datamigrationprojectslocationsconnectionprofileslist) - Retrieve a list of all connection profiles in a given project and location.
* [datamigrationProjectsLocationsList](docs/projects/README.md#datamigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [datamigrationProjectsLocationsMigrationJobsCreate](docs/projects/README.md#datamigrationprojectslocationsmigrationjobscreate) - Creates a new migration job in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsGenerateSshScript](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsgeneratesshscript) - Generate a SSH configuration script to configure the reverse SSH connectivity.
* [datamigrationProjectsLocationsMigrationJobsGetIamPolicy](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [datamigrationProjectsLocationsMigrationJobsList](docs/projects/README.md#datamigrationprojectslocationsmigrationjobslist) - Lists migration jobs in a given project and location.
* [datamigrationProjectsLocationsMigrationJobsPatch](docs/projects/README.md#datamigrationprojectslocationsmigrationjobspatch) - Updates the parameters of a single migration job.
* [datamigrationProjectsLocationsMigrationJobsPromote](docs/projects/README.md#datamigrationprojectslocationsmigrationjobspromote) - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* [datamigrationProjectsLocationsMigrationJobsRestart](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsrestart) - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* [datamigrationProjectsLocationsMigrationJobsResume](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsresume) - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* [datamigrationProjectsLocationsMigrationJobsSetIamPolicy](docs/projects/README.md#datamigrationprojectslocationsmigrationjobssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [datamigrationProjectsLocationsMigrationJobsStart](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsstart) - Start an already created migration job.
* [datamigrationProjectsLocationsMigrationJobsStop](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsstop) - Stops a running migration job.
* [datamigrationProjectsLocationsMigrationJobsTestIamPermissions](docs/projects/README.md#datamigrationprojectslocationsmigrationjobstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [datamigrationProjectsLocationsMigrationJobsVerify](docs/projects/README.md#datamigrationprojectslocationsmigrationjobsverify) - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* [datamigrationProjectsLocationsOperationsCancel](docs/projects/README.md#datamigrationprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datamigrationProjectsLocationsOperationsDelete](docs/projects/README.md#datamigrationprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datamigrationProjectsLocationsOperationsGet](docs/projects/README.md#datamigrationprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datamigrationProjectsLocationsOperationsList](docs/projects/README.md#datamigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
