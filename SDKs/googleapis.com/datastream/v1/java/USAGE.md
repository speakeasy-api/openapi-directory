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
                    parent = "et";
                }};
                queryParams = new DatastreamProjectsLocationsConnectionProfilesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quibusdam";
                    alt = "proto";
                    callback = "sequi";
                    connectionProfileId = "modi";
                    fields = "et";
                    force = false;
                    key = "facilis";
                    oauthToken = "cumque";
                    prettyPrint = false;
                    quotaUser = "ad";
                    requestId = "labore";
                    uploadType = "totam";
                    uploadProtocol = "placeat";
                    validateOnly = true;
                }};
                request = new ConnectionProfileInput() {{
                    bigqueryProfile = new java.util.HashMap<String, Object>() {{
                        put("quaerat", "non");
                    }};
                    displayName = "vel";
                    forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                        hostname = "quia";
                        password = "velit";
                        port = 3297965155044803696;
                        privateKey = "et";
                        username = "qui";
                    }};
                    gcsProfile = new GcsProfile() {{
                        bucket = "repudiandae";
                        rootPath = "sint";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("quae", "officia");
                    }};
                    mysqlProfile = new MysqlProfileInput() {{
                        hostname = "iusto";
                        password = "et";
                        port = 466058705186547039;
                        sslConfig = new MysqlSslConfigInput() {{
                            caCertificate = "enim";
                            clientCertificate = "possimus";
                            clientKey = "illo";
                        }};
                        username = "minus";
                    }};
                    oracleProfile = new OracleProfile() {{
                        connectionAttributes = new java.util.HashMap<String, String>() {{
                            put("cumque", "qui");
                        }};
                        databaseService = "temporibus";
                        hostname = "laborum";
                        password = "corrupti";
                        port = 7441077515971361719;
                        username = "dicta";
                    }};
                    postgresqlProfile = new PostgresqlProfile() {{
                        database = "id";
                        hostname = "amet";
                        password = "qui";
                        port = 9158631684372902705;
                        username = "sapiente";
                    }};
                    privateConnectivity = new PrivateConnectivity() {{
                        privateConnection = "qui";
                    }};
                    staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("a", "sit");
                        put("id", "commodi");
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