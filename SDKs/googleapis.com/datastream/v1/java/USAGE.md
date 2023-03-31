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
import org.openapis.openapi.models.shared.PostgresqlProfile;
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
                    force = false;
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                    validateOnly = false;
                }};
                request = new ConnectionProfileInput() {{
                    bigqueryProfile = new java.util.HashMap<String, Object>() {{
                        put("debitis", "ipsa");
                        put("delectus", "tempora");
                    }};
                    displayName = "suscipit";
                    forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                        hostname = "lasting-sex.net";
                        password = "voluptatum";
                        port = 479977;
                        privateKey = "excepturi";
                        username = "Glen.Walsh33";
                    }};
                    gcsProfile = new GcsProfile() {{
                        bucket = "veritatis";
                        rootPath = "deserunt";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
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
                    oracleProfile = new OracleProfile() {{
                        connectionAttributes = new java.util.HashMap<String, String>() {{
                            put("dicta", "nam");
                            put("officia", "occaecati");
                            put("fugit", "deleniti");
                        }};
                        databaseService = "hic";
                        hostname = "sizzling-locust.com";
                        password = "commodi";
                        port = 473600;
                        username = "Diego_Dibbert45";
                    }};
                    postgresqlProfile = new PostgresqlProfile() {{
                        database = "ipsum";
                        hostname = "nifty-case.com";
                        password = "ad";
                        port = 617636;
                        username = "Camden61";
                    }};
                    privateConnectivity = new PrivateConnectivity() {{
                        privateConnection = "laboriosam";
                    }};
                    staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                        put("saepe", "fuga");
                        put("in", "corporis");
                        put("iste", "iure");
                        put("saepe", "quidem");
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