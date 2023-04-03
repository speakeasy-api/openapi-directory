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
import org.openapis.openapi.models.shared.PostgresqlProfile;
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
                    bigqueryProfile = new java.util.HashMap<String, Object>() {{
                        put("distinctio", "quibusdam");
                        put("unde", "nulla");
                        put("corrupti", "illum");
                    }};
                    displayName = "vel";
                    forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                        hostname = "physical-pegboard.info";
                        password = "iure";
                        port = 297534;
                        privateKey = "debitis";
                        username = "Anahi38";
                    }};
                    gcsProfile = new GcsProfile() {{
                        bucket = "molestiae";
                        rootPath = "minus";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptatum", "iusto");
                        put("excepturi", "nisi");
                        put("recusandae", "temporibus");
                        put("ab", "quis");
                    }};
                    mysqlProfile = new MysqlProfileInput() {{
                        hostname = "bountiful-pension.com";
                        password = "ipsam";
                        port = 832620;
                        sslConfig = new MysqlSslConfigInput() {{
                            caCertificate = "sapiente";
                            clientCertificate = "quo";
                            clientKey = "odit";
                        }};
                        username = "Sarah.Strosin79";
                    }};
                    oracleProfile = new OracleProfile() {{
                        connectionAttributes = new java.util.HashMap<String, String>() {{
                            put("esse", "totam");
                            put("porro", "dolorum");
                            put("dicta", "nam");
                            put("officia", "occaecati");
                        }};
                        databaseService = "fugit";
                        hostname = "miserly-usage.net";
                        password = "totam";
                        port = 105907;
                        username = "Haskell18";
                    }};
                    postgresqlProfile = new PostgresqlProfile() {{
                        database = "impedit";
                        hostname = "several-increase.biz";
                        password = "excepturi";
                        port = 135218;
                        username = "Aiden.Hane";
                    }};
                    privateConnectivity = new PrivateConnectivity() {{
                        privateConnection = "iste";
                    }};
                    staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("natus", "laboriosam");
                    }};
                }};
                accessToken = "hic";
                alt = "proto";
                callback = "fuga";
                connectionProfileId = "in";
                fields = "corporis";
                force = false;
                key = "iste";
                oauthToken = "iure";
                parent = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                requestId = "architecto";
                uploadType = "ipsa";
                uploadProtocol = "reiciendis";
                validateOnly = false;
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