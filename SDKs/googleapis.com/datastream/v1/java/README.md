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
                    parent = "sit";
                }};
                queryParams = new DatastreamProjectsLocationsConnectionProfilesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    connectionProfileId = "dolor";
                    fields = "expedita";
                    force = true;
                    key = "fugit";
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    requestId = "dicta";
                    uploadType = "debitis";
                    uploadProtocol = "voluptatum";
                    validateOnly = false;
                }};
                request = new ConnectionProfileInput() {{
                    bigqueryProfile = new java.util.HashMap<String, Object>() {{
                        put("dolorem", "et");
                        put("voluptate", "iste");
                        put("vitae", "totam");
                    }};
                    displayName = "dolores";
                    forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                        hostname = "illum";
                        password = "debitis";
                        port = 3706853784096366226;
                        privateKey = "odio";
                        username = "dolore";
                    }};
                    gcsProfile = new GcsProfile() {{
                        bucket = "id";
                        rootPath = "aspernatur";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("totam", "commodi");
                        put("quis", "est");
                        put("aut", "odit");
                    }};
                    mysqlProfile = new MysqlProfileInput() {{
                        hostname = "non";
                        password = "voluptas";
                        port = 4778690082005258714;
                        sslConfig = new MysqlSslConfigInput() {{
                            caCertificate = "aut";
                            clientCertificate = "illo";
                            clientKey = "sed";
                        }};
                        username = "officiis";
                    }};
                    oracleProfile = new OracleProfile() {{
                        connectionAttributes = new java.util.HashMap<String, String>() {{
                            put("consectetur", "nobis");
                            put("odio", "qui");
                        }};
                        databaseService = "recusandae";
                        hostname = "at";
                        password = "ipsum";
                        port = 8902041070398994519;
                        username = "modi";
                    }};
                    postgresqlProfile = new PostgresqlProfile() {{
                        database = "sint";
                        hostname = "inventore";
                        password = "ut";
                        port = 406703151708498928;
                        username = "aut";
                    }};
                    privateConnectivity = new PrivateConnectivity() {{
                        privateConnection = "reprehenderit";
                    }};
                    staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("maiores", "incidunt");
                        put("dolor", "beatae");
                        put("veritatis", "in");
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
* `datastreamProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
