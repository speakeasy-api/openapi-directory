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
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new ConnectionProfileInput() {{
                    displayName = "magnam";
                    forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                        hostname = "unique-baboon.org";
                        password = "tempora";
                        port = 383441;
                        privateKey = "molestiae";
                        username = "Paxton.Schulist";
                    }};
                    gcsProfile = new GcsProfile() {{
                        bucketName = "excepturi";
                        rootPath = "nisi";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                        put("deserunt", "perferendis");
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
                    noConnectivity = new java.util.HashMap<String, Object>() {{
                        put("dicta", "nam");
                        put("officia", "occaecati");
                        put("fugit", "deleniti");
                    }};
                    oracleProfile = new OracleProfile() {{
                        connectionAttributes = new java.util.HashMap<String, String>() {{
                            put("optio", "totam");
                            put("beatae", "commodi");
                            put("molestiae", "modi");
                            put("qui", "impedit");
                        }};
                        databaseService = "cum";
                        hostname = "jolly-cowboy.name";
                        password = "aspernatur";
                        port = 18789;
                        username = "Enrique61";
                    }};
                    privateConnectivity = new PrivateConnectivity() {{
                        privateConnectionName = "dolor";
                    }};
                    staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("laboriosam", "hic");
                        put("saepe", "fuga");
                        put("in", "corporis");
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