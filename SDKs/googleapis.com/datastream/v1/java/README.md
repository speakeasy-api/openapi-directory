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
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreateResponse;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectionProfileInput;
import org.openapis.openapi.models.shared.ForwardSshTunnelConnectivity;
import org.openapis.openapi.models.shared.GcsProfile;
import org.openapis.openapi.models.shared.MysqlProfileInput;
import org.openapis.openapi.models.shared.MysqlSslConfigInput;
import org.openapis.openapi.models.shared.OracleProfile;
import org.openapis.openapi.models.shared.PostgresqlProfile;
import org.openapis.openapi.models.shared.PrivateConnectivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsConnectionProfilesCreateRequest req = new DatastreamProjectsLocationsConnectionProfilesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                connectionProfileInput = new ConnectionProfileInput() {{
                    bigqueryProfile = new java.util.HashMap<String, Object>() {{
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                        put("illum", "vel");
                    }};
                    displayName = "error";
                    forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                        hostname = "present-giggle.info";
                        password = "magnam";
                        port = 891773;
                        privateKey = "ipsa";
                        username = "Vincenzo.Goldner";
                    }};;
                    gcsProfile = new GcsProfile() {{
                        bucket = "minus";
                        rootPath = "placeat";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("iusto", "excepturi");
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                    }};
                    mysqlProfile = new MysqlProfileInput() {{
                        hostname = "gloomy-blanket.name";
                        password = "perferendis";
                        port = 368241;
                        sslConfig = new MysqlSslConfigInput() {{
                            caCertificate = "repellendus";
                            clientCertificate = "sapiente";
                            clientKey = "quo";
                        }};;
                        username = "Brooke_Strosin47";
                    }};;
                    oracleProfile = new OracleProfile() {{
                        connectionAttributes = new java.util.HashMap<String, String>() {{
                            put("quod", "esse");
                            put("totam", "porro");
                            put("dolorum", "dicta");
                            put("nam", "officia");
                        }};
                        databaseService = "occaecati";
                        hostname = "cool-mandarin.org";
                        password = "optio";
                        port = 521848;
                        username = "Benjamin.Johns";
                    }};;
                    postgresqlProfile = new PostgresqlProfile() {{
                        database = "qui";
                        hostname = "soft-reminder.info";
                        password = "ipsum";
                        port = 568434;
                        username = "Brianne61";
                    }};;
                    privateConnectivity = new PrivateConnectivity() {{
                        privateConnection = "sed";
                    }};;
                    staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("dolor", "natus");
                        put("laboriosam", "hic");
                        put("saepe", "fuga");
                    }};
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "iste";
                connectionProfileId = "iure";
                fields = "saepe";
                force = false;
                key = "quidem";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "ipsa";
                requestId = "reiciendis";
                uploadType = "est";
                uploadProtocol = "mollitia";
                validateOnly = false;
            }};            

            DatastreamProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datastreamProjectsLocationsConnectionProfilesCreate(req, new DatastreamProjectsLocationsConnectionProfilesCreateSecurity("laborum", "dolores") {{
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

* [datastreamProjectsLocationsConnectionProfilesCreate](docs/projects/README.md#datastreamprojectslocationsconnectionprofilescreate) - Use this method to create a connection profile in a project and location.
* [datastreamProjectsLocationsConnectionProfilesDiscover](docs/projects/README.md#datastreamprojectslocationsconnectionprofilesdiscover) - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
* [datastreamProjectsLocationsConnectionProfilesList](docs/projects/README.md#datastreamprojectslocationsconnectionprofileslist) - Use this method to list connection profiles created in a project and location.
* [datastreamProjectsLocationsFetchStaticIps](docs/projects/README.md#datastreamprojectslocationsfetchstaticips) - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* [datastreamProjectsLocationsList](docs/projects/README.md#datastreamprojectslocationslist) - Lists information about the supported locations for this service.
* [datastreamProjectsLocationsOperationsCancel](docs/projects/README.md#datastreamprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datastreamProjectsLocationsOperationsList](docs/projects/README.md#datastreamprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datastreamProjectsLocationsPrivateConnectionsCreate](docs/projects/README.md#datastreamprojectslocationsprivateconnectionscreate) - Use this method to create a private connectivity configuration.
* [datastreamProjectsLocationsPrivateConnectionsList](docs/projects/README.md#datastreamprojectslocationsprivateconnectionslist) - Use this method to list private connectivity configurations in a project and location.
* [datastreamProjectsLocationsPrivateConnectionsRoutesCreate](docs/projects/README.md#datastreamprojectslocationsprivateconnectionsroutescreate) - Use this method to create a route for a private connectivity configuration in a project and location.
* [datastreamProjectsLocationsPrivateConnectionsRoutesList](docs/projects/README.md#datastreamprojectslocationsprivateconnectionsrouteslist) - Use this method to list routes created for a private connectivity configuration in a project and location.
* [datastreamProjectsLocationsStreamsCreate](docs/projects/README.md#datastreamprojectslocationsstreamscreate) - Use this method to create a stream.
* [datastreamProjectsLocationsStreamsDelete](docs/projects/README.md#datastreamprojectslocationsstreamsdelete) - Use this method to delete a stream.
* [datastreamProjectsLocationsStreamsList](docs/projects/README.md#datastreamprojectslocationsstreamslist) - Use this method to list streams in a project and location.
* [datastreamProjectsLocationsStreamsObjectsGet](docs/projects/README.md#datastreamprojectslocationsstreamsobjectsget) - Use this method to get details about a stream object.
* [datastreamProjectsLocationsStreamsObjectsList](docs/projects/README.md#datastreamprojectslocationsstreamsobjectslist) - Use this method to list the objects of a specific stream.
* [datastreamProjectsLocationsStreamsObjectsLookup](docs/projects/README.md#datastreamprojectslocationsstreamsobjectslookup) - Use this method to look up a stream object by its source object identifier.
* [datastreamProjectsLocationsStreamsObjectsStartBackfillJob](docs/projects/README.md#datastreamprojectslocationsstreamsobjectsstartbackfilljob) - Use this method to start a backfill job for the specified stream object.
* [datastreamProjectsLocationsStreamsObjectsStopBackfillJob](docs/projects/README.md#datastreamprojectslocationsstreamsobjectsstopbackfilljob) - Use this method to stop a backfill job for the specified stream object.
* [datastreamProjectsLocationsStreamsPatch](docs/projects/README.md#datastreamprojectslocationsstreamspatch) - Use this method to update the configuration of a stream.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
