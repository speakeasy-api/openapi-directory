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
                    parent = "dolor";
                }};
                queryParams = new DatastreamProjectsLocationsConnectionProfilesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "aliquam";
                    alt = "media";
                    callback = "enim";
                    connectionProfileId = "nemo";
                    fields = "impedit";
                    key = "est";
                    oauthToken = "quo";
                    prettyPrint = true;
                    quotaUser = "natus";
                    requestId = "corporis";
                    uploadType = "accusamus";
                    uploadProtocol = "vitae";
                }};
                request = new ConnectionProfileInput() {{
                    displayName = "enim";
                    forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                        hostname = "ut";
                        password = "voluptates";
                        port = 4556031978488940954;
                        privateKey = "culpa";
                        username = "omnis";
                    }};
                    gcsProfile = new GcsProfile() {{
                        bucketName = "ut";
                        rootPath = "nobis";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("quis", "aut");
                        put("cupiditate", "et");
                        put("ut", "distinctio");
                    }};
                    mysqlProfile = new MysqlProfileInput() {{
                        hostname = "exercitationem";
                        password = "consequatur";
                        port = 429309384571615090;
                        sslConfig = new MysqlSslConfigInput() {{
                            caCertificate = "nam";
                            clientCertificate = "et";
                            clientKey = "error";
                        }};
                        username = "nostrum";
                    }};
                    noConnectivity = new java.util.HashMap<String, Object>() {{
                        put("aut", "aut");
                        put("voluptatem", "quisquam");
                        put("architecto", "architecto");
                    }};
                    oracleProfile = new OracleProfile() {{
                        connectionAttributes = new java.util.HashMap<String, String>() {{
                            put("reiciendis", "laudantium");
                        }};
                        databaseService = "in";
                        hostname = "quam";
                        password = "animi";
                        port = 8508841424682115153;
                        username = "inventore";
                    }};
                    privateConnectivity = new PrivateConnectivity() {{
                        privateConnectionName = "non";
                    }};
                    staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("laborum", "mollitia");
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