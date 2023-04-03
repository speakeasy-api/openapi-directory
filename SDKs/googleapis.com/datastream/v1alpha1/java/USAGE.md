<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest;
import org.openapis.openapi.models.operations.DatastreamProjectsLocationsConnectionProfilesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectionProfileInput;
import org.openapis.openapi.models.shared.PrivateConnectivity;
import org.openapis.openapi.models.shared.OracleProfile;
import org.openapis.openapi.models.shared.MysqlProfileInput;
import org.openapis.openapi.models.shared.MysqlSslConfigInput;
import org.openapis.openapi.models.shared.GcsProfile;
import org.openapis.openapi.models.shared.ForwardSshTunnelConnectivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastreamProjectsLocationsConnectionProfilesCreateRequest req = new DatastreamProjectsLocationsConnectionProfilesCreateRequest() {{
                dollarXgafv = "2";
                connectionProfileInput = new ConnectionProfileInput() {{
                    displayName = "provident";
                    forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                        hostname = "salty-stag.name";
                        password = "nulla";
                        port = 544883;
                        privateKey = "illum";
                        username = "Henry.Mueller";
                    }};
                    gcsProfile = new GcsProfile() {{
                        bucketName = "iure";
                        rootPath = "magnam";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsa", "delectus");
                        put("tempora", "suscipit");
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    mysqlProfile = new MysqlProfileInput() {{
                        hostname = "lawful-missionary.info";
                        password = "recusandae";
                        port = 836079;
                        sslConfig = new MysqlSslConfigInput() {{
                            caCertificate = "ab";
                            clientCertificate = "quis";
                            clientKey = "veritatis";
                        }};
                        username = "Lydia_Aufderhar";
                    }};
                    noConnectivity = new java.util.HashMap<String, Object>() {{
                        put("quo", "odit");
                        put("at", "at");
                        put("maiores", "molestiae");
                        put("quod", "quod");
                    }};
                    oracleProfile = new OracleProfile() {{
                        connectionAttributes = new java.util.HashMap<String, String>() {{
                            put("totam", "porro");
                            put("dolorum", "dicta");
                        }};
                        databaseService = "nam";
                        hostname = "posh-muffin.com";
                        password = "deleniti";
                        port = 944669;
                        username = "Nina41";
                    }};
                    privateConnectivity = new PrivateConnectivity() {{
                        privateConnectionName = "molestiae";
                    }};
                    staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("qui", "impedit");
                        put("cum", "esse");
                    }};
                }};
                accessToken = "ipsum";
                alt = "media";
                callback = "aspernatur";
                connectionProfileId = "perferendis";
                fields = "ad";
                key = "natus";
                oauthToken = "sed";
                parent = "iste";
                prettyPrint = false;
                quotaUser = "dolor";
                requestId = "natus";
                uploadType = "laboriosam";
                uploadProtocol = "hic";
            }}            

            DatastreamProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datastreamProjectsLocationsConnectionProfilesCreate(req, new DatastreamProjectsLocationsConnectionProfilesCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->