<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateResponse;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity;
import org.openapis.openapi.models.shared.AlloyDbConnectionProfileInput;
import org.openapis.openapi.models.shared.AlloyDbSettingsInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudSqlConnectionProfileInput;
import org.openapis.openapi.models.shared.CloudSqlSettingsActivationPolicyEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsAvailabilityTypeEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDataDiskTypeEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDatabaseVersionEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsInput;
import org.openapis.openapi.models.shared.ConnectionProfileInput;
import org.openapis.openapi.models.shared.ConnectionProfileProviderEnum;
import org.openapis.openapi.models.shared.ConnectionProfileStateEnum;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.ForwardSshTunnelConnectivity;
import org.openapis.openapi.models.shared.MachineConfig;
import org.openapis.openapi.models.shared.MySqlConnectionProfileInput;
import org.openapis.openapi.models.shared.OracleConnectionProfileInput;
import org.openapis.openapi.models.shared.PostgreSqlConnectionProfileInput;
import org.openapis.openapi.models.shared.PrimaryInstanceSettingsInput;
import org.openapis.openapi.models.shared.PrivateConnectivity;
import org.openapis.openapi.models.shared.PrivateServiceConnectConnectivity;
import org.openapis.openapi.models.shared.SqlAclEntry;
import org.openapis.openapi.models.shared.SqlIpConfig;
import org.openapis.openapi.models.shared.SslConfigInput;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.UserPasswordInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConnectionProfilesCreateRequest req = new DatamigrationProjectsLocationsConnectionProfilesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                connectionProfileInput = new ConnectionProfileInput() {{
                    alloydb = new AlloyDbConnectionProfileInput() {{
                        clusterId = "distinctio";
                        settings = new AlloyDbSettingsInput() {{
                            encryptionConfig = new EncryptionConfig() {{
                                kmsKeyName = "quibusdam";
                            }};;
                            initialUser = new UserPasswordInput() {{
                                password = "unde";
                                user = "nulla";
                            }};;
                            labels = new java.util.HashMap<String, String>() {{
                                put("illum", "vel");
                                put("error", "deserunt");
                                put("suscipit", "iure");
                            }};
                            primaryInstanceSettings = new PrimaryInstanceSettingsInput() {{
                                databaseFlags = new java.util.HashMap<String, String>() {{
                                    put("debitis", "ipsa");
                                    put("delectus", "tempora");
                                }};
                                id = "67cc8796-ed15-41a0-9dfc-2ddf7cc78ca1";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("officia", "occaecati");
                                    put("fugit", "deleniti");
                                    put("hic", "optio");
                                }};
                                machineConfig = new MachineConfig() {{
                                    cpuCount = 521848;
                                }};;
                            }};;
                            vpcNetwork = "beatae";
                        }};;
                    }};;
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = CloudSqlSettingsActivationPolicyEnum.ALWAYS;
                            autoStorageIncrease = false;
                            availabilityType = CloudSqlSettingsAvailabilityTypeEnum.ZONAL;
                            cmekKeyName = "modi";
                            collation = "qui";
                            dataDiskSizeGb = "impedit";
                            dataDiskType = CloudSqlSettingsDataDiskTypeEnum.PD_HDD;
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("ipsum", "excepturi");
                                put("aspernatur", "perferendis");
                            }};
                            databaseVersion = CloudSqlSettingsDatabaseVersionEnum.POSTGRES96;
                            ipConfig = new SqlIpConfig() {{
                                allocatedIpRange = "natus";
                                authorizedNetworks = new org.openapis.openapi.models.shared.SqlAclEntry[]{{
                                    add(new SqlAclEntry() {{
                                        expireTime = "iste";
                                        label = "dolor";
                                        ttl = "natus";
                                        value = "laboriosam";
                                    }}),
                                }};
                                enableIpv4 = false;
                                privateNetwork = "hic";
                                requireSsl = false;
                            }};;
                            rootPassword = "saepe";
                            secondaryZone = "fuga";
                            sourceId = "in";
                            storageAutoResizeLimit = "corporis";
                            tier = "iste";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("saepe", "quidem");
                                put("architecto", "ipsa");
                            }};
                            zone = "reiciendis";
                        }};;
                    }};;
                    displayName = "est";
                    error = new Status() {{
                        code = 653140;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("dolorem", "corporis");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("nobis", "enim");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("nemo", "minima");
                                put("excepturi", "accusantium");
                                put("iure", "culpa");
                            }}),
                        }};
                        message = "doloribus";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("architecto", "mollitia");
                        put("dolorem", "culpa");
                        put("consequuntur", "repellat");
                        put("mollitia", "occaecati");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "numquam";
                        host = "commodi";
                        password = "quam";
                        port = 474697;
                        ssl = new SslConfigInput() {{
                            caCertificate = "velit";
                            clientCertificate = "error";
                            clientKey = "quia";
                        }};;
                        username = "Eugene_Brown31";
                    }};;
                    name = "Angelica Dietrich";
                    oracle = new OracleConnectionProfileInput() {{
                        databaseService = "id";
                        forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                            hostname = "sugary-afoul.com";
                            password = "error";
                            port = 837945;
                            privateKey = "laborum";
                            username = "Austyn_Witting46";
                        }};;
                        host = "praesentium";
                        password = "voluptatibus";
                        port = 55714;
                        privateConnectivity = new PrivateConnectivity() {{
                            privateConnection = "omnis";
                        }};;
                        staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("cum", "perferendis");
                            put("doloremque", "reprehenderit");
                        }};
                        username = "Easter35";
                    }};;
                    postgresql = new PostgreSqlConnectionProfileInput() {{
                        cloudSqlId = "dolore";
                        host = "iusto";
                        password = "dicta";
                        port = 688661;
                        privateServiceConnectConnectivity = new PrivateServiceConnectConnectivity() {{
                            serviceAttachment = "enim";
                        }};;
                        ssl = new SslConfigInput() {{
                            caCertificate = "accusamus";
                            clientCertificate = "commodi";
                            clientKey = "repudiandae";
                        }};;
                        staticIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("ipsum", "quidem");
                        }};
                        username = "Kennedi.Mante50";
                    }};;
                    provider = ConnectionProfileProviderEnum.RDS;
                    state = ConnectionProfileStateEnum.FAILED;
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "sint";
                connectionProfileId = "veritatis";
                fields = "itaque";
                key = "incidunt";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "consequatur";
                requestId = "est";
                skipValidation = false;
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
                validateOnly = false;
            }};            

            DatamigrationProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req, new DatamigrationProjectsLocationsConnectionProfilesCreateSecurity("deserunt", "distinctio") {{
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