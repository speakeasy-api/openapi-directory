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

import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreatePathParams;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreateResponse;
import org.openapis.openapi.models.shared.ConnectionProfileInput;
import org.openapis.openapi.models.shared.PrivateConnectivity;
import org.openapis.openapi.models.shared.PostgresqlProfile;
import org.openapis.openapi.models.shared.OracleProfile;
import org.openapis.openapi.models.shared.MysqlProfileInput;
import org.openapis.openapi.models.shared.MysqlSslConfigInput;
import org.openapis.openapi.models.shared.GcsProfile;
import org.openapis.openapi.models.shared.ForwardSshTunnelConnectivity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsConnectionProfilesCreateRequest req = new DatastreamProjectsLocationsConnectionProfilesCreateRequest() {{
                security = new DatastreamProjectsLocationsConnectionProfilesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DatastreamProjectsLocationsConnectionProfilesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DatastreamProjectsLocationsConnectionProfilesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    connectionProfileId = "nulla";
                    fields = "corrupti";
                    force = false;
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                    validateOnly = false;
                }};
                request = new ConnectionProfileInput() {{
                    bigqueryProfile = new java.util.HashMap<String, Object>() {{
                        put("debitis", "ipsa");
                        put("delectus", "tempora");
                    }};
                    displayName = "suscipit";
                    forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                        hostname = "lasting-sex.net";
                        password = "voluptatum";
                        port = 479977;
                        privateKey = "excepturi";
                        username = "Glen.Walsh33";
                    }};
                    gcsProfile = new GcsProfile() {{
                        bucket = "veritatis";
                        rootPath = "deserunt";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsam", "repellendus");
                    }};
                    mysqlProfile = new MysqlProfileInput() {{
                        hostname = "well-informed-screamer.com";
                        password = "at";
                        port = 870088;
                        sslConfig = new MysqlSslConfigInput() {{
                            caCertificate = "maiores";
                            clientCertificate = "molestiae";
                            clientKey = "quod";
                        }};
                        username = "Presley_Koepp";
                    }};
                    oracleProfile = new OracleProfile() {{
                        connectionAttributes = new java.util.HashMap<String, String>() {{
                            put("dicta", "nam");
                            put("officia", "occaecati");
                            put("fugit", "deleniti");
                        }};
                        databaseService = "hic";
                        hostname = "sizzling-locust.com";
                        password = "commodi";
                        port = 473600;
                        username = "Diego_Dibbert45";
                    }};
                    postgresqlProfile = new PostgresqlProfile() {{
                        database = "ipsum";
                        hostname = "nifty-case.com";
                        password = "ad";
                        port = 617636;
                        username = "Camden61";
                    }};
                    privateConnectivity = new PrivateConnectivity() {{
                        privateConnection = "laboriosam";
                    }};
                    staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("saepe", "fuga");
                        put("in", "corporis");
                        put("iste", "iure");
                        put("saepe", "quidem");
                    }};
                }};
            }};            

            DatastreamProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datastreamProjectsLocationsConnectionProfilesCreate(req);

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

* `datastreamProjectsLocationsConnectionProfilesCreate` - Use this method to create a connection profile in a project and location.
* `datastreamProjectsLocationsConnectionProfilesDiscover` - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
* `datastreamProjectsLocationsConnectionProfilesList` - Use this method to list connection profiles created in a project and location.
* `datastreamProjectsLocationsFetchStaticIps` - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* `datastreamProjectsLocationsList` - Lists information about the supported locations for this service.
* `datastreamProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datastreamProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `datastreamProjectsLocationsPrivateConnectionsCreate` - Use this method to create a private connectivity configuration.
* `datastreamProjectsLocationsPrivateConnectionsList` - Use this method to list private connectivity configurations in a project and location.
* `datastreamProjectsLocationsPrivateConnectionsRoutesCreate` - Use this method to create a route for a private connectivity configuration in a project and location.
* `datastreamProjectsLocationsPrivateConnectionsRoutesList` - Use this method to list routes created for a private connectivity configuration in a project and location.
* `datastreamProjectsLocationsStreamsCreate` - Use this method to create a stream.
* `datastreamProjectsLocationsStreamsDelete` - Use this method to delete a stream.
* `datastreamProjectsLocationsStreamsList` - Use this method to list streams in a project and location.
* `datastreamProjectsLocationsStreamsObjectsGet` - Use this method to get details about a stream object.
* `datastreamProjectsLocationsStreamsObjectsList` - Use this method to list the objects of a specific stream.
* `datastreamProjectsLocationsStreamsObjectsLookup` - Use this method to look up a stream object by its source object identifier.
* `datastreamProjectsLocationsStreamsObjectsStartBackfillJob` - Use this method to start a backfill job for the specified stream object.
* `datastreamProjectsLocationsStreamsObjectsStopBackfillJob` - Use this method to stop a backfill job for the specified stream object.
* `datastreamProjectsLocationsStreamsPatch` - Use this method to update the configuration of a stream.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
