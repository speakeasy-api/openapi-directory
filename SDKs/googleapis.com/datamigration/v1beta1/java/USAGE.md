<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudSqlConnectionProfileInput;
import org.openapis.openapi.models.shared.CloudSqlSettingsActivationPolicyEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDataDiskTypeEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDatabaseVersionEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsInput;
import org.openapis.openapi.models.shared.ConnectionProfileInput;
import org.openapis.openapi.models.shared.ConnectionProfileProviderEnum;
import org.openapis.openapi.models.shared.ConnectionProfileStateEnum;
import org.openapis.openapi.models.shared.MySqlConnectionProfileInput;
import org.openapis.openapi.models.shared.SqlAclEntry;
import org.openapis.openapi.models.shared.SqlIpConfig;
import org.openapis.openapi.models.shared.SslConfigInput;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConnectionProfilesCreateRequest req = new DatamigrationProjectsLocationsConnectionProfilesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                connectionProfileInput = new ConnectionProfileInput() {{
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = CloudSqlSettingsActivationPolicyEnum.NEVER;
                            autoStorageIncrease = false;
                            dataDiskSizeGb = "quibusdam";
                            dataDiskType = CloudSqlSettingsDataDiskTypeEnum.PD_SSD;
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("corrupti", "illum");
                                put("vel", "error");
                                put("deserunt", "suscipit");
                                put("iure", "magnam");
                            }};
                            databaseVersion = CloudSqlSettingsDatabaseVersionEnum.MYSQL80;
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new org.openapis.openapi.models.shared.SqlAclEntry[]{{
                                    add(new SqlAclEntry() {{
                                        expireTime = "delectus";
                                        label = "tempora";
                                        ttl = "suscipit";
                                        value = "molestiae";
                                    }}),
                                }};
                                enableIpv4 = false;
                                privateNetwork = "minus";
                                requireSsl = false;
                            }};;
                            rootPassword = "placeat";
                            sourceId = "voluptatum";
                            storageAutoResizeLimit = "iusto";
                            tier = "excepturi";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("recusandae", "temporibus");
                                put("ab", "quis");
                            }};
                            zone = "veritatis";
                        }};;
                    }};;
                    displayName = "deserunt";
                    error = new Status() {{
                        code = 20218;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("sapiente", "quo");
                                put("odit", "at");
                                put("at", "maiores");
                                put("molestiae", "quod");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("esse", "totam");
                                put("porro", "dolorum");
                                put("dicta", "nam");
                                put("officia", "occaecati");
                            }}),
                        }};
                        message = "fugit";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("hic", "optio");
                        put("totam", "beatae");
                        put("commodi", "molestiae");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "modi";
                        host = "qui";
                        password = "impedit";
                        port = 736918;
                        ssl = new SslConfigInput() {{
                            caCertificate = "esse";
                            clientCertificate = "ipsum";
                            clientKey = "excepturi";
                        }};;
                        username = "Brianne61";
                    }};;
                    name = "Sheryl Fadel";
                    provider = ConnectionProfileProviderEnum.RDS;
                    state = ConnectionProfileStateEnum.FAILED;
                }};;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                connectionProfileId = "iste";
                fields = "iure";
                key = "saepe";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "architecto";
                requestId = "ipsa";
                uploadType = "reiciendis";
                uploadProtocol = "est";
            }};            

            DatamigrationProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req, new DatamigrationProjectsLocationsConnectionProfilesCreateSecurity("mollitia", "laborum") {{
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