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