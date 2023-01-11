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