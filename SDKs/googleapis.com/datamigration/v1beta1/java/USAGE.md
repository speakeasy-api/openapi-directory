<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectionProfileProviderEnum;
import org.openapis.openapi.models.shared.ConnectionProfileStateEnum;
import org.openapis.openapi.models.shared.ConnectionProfileInput;
import org.openapis.openapi.models.shared.MySqlConnectionProfileInput;
import org.openapis.openapi.models.shared.SslConfigInput;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.CloudSqlConnectionProfileInput;
import org.openapis.openapi.models.shared.CloudSqlSettingsActivationPolicyEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDataDiskTypeEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDatabaseVersionEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsInput;
import org.openapis.openapi.models.shared.SqlIpConfig;
import org.openapis.openapi.models.shared.SqlAclEntry;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConnectionProfilesCreateRequest req = new DatamigrationProjectsLocationsConnectionProfilesCreateRequest() {{
                dollarXgafv = "2";
                connectionProfileInput = new ConnectionProfileInput() {{
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = "ALWAYS";
                            autoStorageIncrease = false;
                            dataDiskSizeGb = "distinctio";
                            dataDiskType = "PD_HDD";
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("nulla", "corrupti");
                                put("illum", "vel");
                                put("error", "deserunt");
                            }};
                            databaseVersion = "MYSQL_5_6";
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new org.openapis.openapi.models.shared.SqlAclEntry[]{{
                                    add(new SqlAclEntry() {{
                                        expireTime = "magnam";
                                        label = "debitis";
                                        ttl = "ipsa";
                                        value = "delectus";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "tempora";
                                        label = "suscipit";
                                        ttl = "molestiae";
                                        value = "minus";
                                    }}),
                                }};
                                enableIpv4 = false;
                                privateNetwork = "placeat";
                                requireSsl = false;
                            }};
                            rootPassword = "voluptatum";
                            sourceId = "iusto";
                            storageAutoResizeLimit = "excepturi";
                            tier = "nisi";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("temporibus", "ab");
                                put("quis", "veritatis");
                                put("deserunt", "perferendis");
                                put("ipsam", "repellendus");
                            }};
                            zone = "sapiente";
                        }};
                    }};
                    displayName = "quo";
                    error = new Status() {{
                        code = 140350;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("maiores", "molestiae");
                                put("quod", "quod");
                                put("esse", "totam");
                                put("porro", "dolorum");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("nam", "officia");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("fugit", "deleniti");
                                put("hic", "optio");
                                put("totam", "beatae");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("molestiae", "modi");
                                put("qui", "impedit");
                            }}),
                        }};
                        message = "cum";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsum", "excepturi");
                        put("aspernatur", "perferendis");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "ad";
                        host = "natus";
                        password = "sed";
                        port = 612096;
                        ssl = new SslConfigInput() {{
                            caCertificate = "dolor";
                            clientCertificate = "natus";
                            clientKey = "laboriosam";
                        }};
                        username = "Tyra.Turcotte35";
                    }};
                    name = "iste";
                    provider = "CLOUDSQL";
                    state = "FAILED";
                }};
                accessToken = "quidem";
                alt = "json";
                callback = "ipsa";
                connectionProfileId = "reiciendis";
                fields = "est";
                key = "mollitia";
                oauthToken = "laborum";
                parent = "dolores";
                prettyPrint = false;
                quotaUser = "dolorem";
                requestId = "corporis";
                uploadType = "explicabo";
                uploadProtocol = "nobis";
            }}            

            DatamigrationProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req, new DatamigrationProjectsLocationsConnectionProfilesCreateSecurity() {{
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