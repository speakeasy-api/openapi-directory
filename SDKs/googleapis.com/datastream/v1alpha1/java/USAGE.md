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
                    displayName = "distinctio";
                    forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                        hostname = "terrible-nutrient.org";
                        password = "corrupti";
                        port = 847252;
                        privateKey = "vel";
                        username = "Linda.Oberbrunner";
                    }};;
                    gcsProfile = new GcsProfile() {{
                        bucketName = "magnam";
                        rootPath = "debitis";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("delectus", "tempora");
                    }};
                    mysqlProfile = new MysqlProfileInput() {{
                        hostname = "hideous-jam.net";
                        password = "placeat";
                        port = 528895;
                        sslConfig = new MysqlSslConfigInput() {{
                            caCertificate = "iusto";
                            clientCertificate = "excepturi";
                            clientKey = "nisi";
                        }};;
                        username = "Tianna33";
                    }};;
                    noConnectivity = new java.util.HashMap<String, Object>() {{
                        put("deserunt", "perferendis");
                    }};
                    oracleProfile = new OracleProfile() {{
                        connectionAttributes = new java.util.HashMap<String, String>() {{
                            put("repellendus", "sapiente");
                            put("quo", "odit");
                        }};
                        databaseService = "at";
                        hostname = "trim-wheat.info";
                        password = "quod";
                        port = 800911;
                        username = "Jakayla_Lebsack11";
                    }};;
                    privateConnectivity = new PrivateConnectivity() {{
                        privateConnectionName = "nam";
                    }};;
                    staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("occaecati", "fugit");
                        put("deleniti", "hic");
                        put("optio", "totam");
                    }};
                }};;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                connectionProfileId = "modi";
                fields = "qui";
                key = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                requestId = "ipsum";
                uploadType = "excepturi";
                uploadProtocol = "aspernatur";
            }};            

            DatastreamProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datastreamProjectsLocationsConnectionProfilesCreate(req, new DatastreamProjectsLocationsConnectionProfilesCreateSecurity("perferendis", "ad") {{
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