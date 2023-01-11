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
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    requestId = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
                request = new ConnectionProfileInput() {{
                    displayName = "voluptatum";
                    forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                        hostname = "et";
                        password = "ut";
                        port = 161231572858529631;
                        privateKey = "et";
                        username = "voluptate";
                    }};
                    gcsProfile = new GcsProfile() {{
                        bucketName = "iste";
                        rootPath = "vitae";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolores", "illum");
                        put("debitis", "vel");
                        put("odio", "dolore");
                    }};
                    mysqlProfile = new MysqlProfileInput() {{
                        hostname = "id";
                        password = "aspernatur";
                        port = 2914295034816259174;
                        sslConfig = new MysqlSslConfigInput() {{
                            caCertificate = "totam";
                            clientCertificate = "commodi";
                            clientKey = "quis";
                        }};
                        username = "est";
                    }};
                    noConnectivity = new java.util.HashMap<String, Object>() {{
                        put("odit", "non");
                        put("voluptas", "omnis");
                        put("aut", "illo");
                    }};
                    oracleProfile = new OracleProfile() {{
                        connectionAttributes = new java.util.HashMap<String, String>() {{
                            put("officiis", "autem");
                            put("consectetur", "nobis");
                            put("odio", "qui");
                        }};
                        databaseService = "recusandae";
                        hostname = "at";
                        password = "ipsum";
                        port = 8902041070398994519;
                        username = "modi";
                    }};
                    privateConnectivity = new PrivateConnectivity() {{
                        privateConnectionName = "sint";
                    }};
                    staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("ut", "exercitationem");
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