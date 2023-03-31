<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreatePathParams;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest;
import org.openapis.openapi.models.operations.DatamigrationProjectsLocationsConnectionProfilesCreateResponse;
import org.openapis.openapi.models.shared.ConnectionProfileProviderEnum;
import org.openapis.openapi.models.shared.ConnectionProfileStateEnum;
import org.openapis.openapi.models.shared.ConnectionProfileInput;
import org.openapis.openapi.models.shared.PostgreSqlConnectionProfileInput;
import org.openapis.openapi.models.shared.SslConfigInput;
import org.openapis.openapi.models.shared.PrivateServiceConnectConnectivity;
import org.openapis.openapi.models.shared.OracleConnectionProfileInput;
import org.openapis.openapi.models.shared.PrivateConnectivity;
import org.openapis.openapi.models.shared.ForwardSshTunnelConnectivity;
import org.openapis.openapi.models.shared.MySqlConnectionProfileInput;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.CloudSqlConnectionProfileInput;
import org.openapis.openapi.models.shared.CloudSqlSettingsActivationPolicyEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsAvailabilityTypeEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDataDiskTypeEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsDatabaseVersionEnum;
import org.openapis.openapi.models.shared.CloudSqlSettingsInput;
import org.openapis.openapi.models.shared.SqlIpConfig;
import org.openapis.openapi.models.shared.SqlAclEntry;
import org.openapis.openapi.models.shared.AlloyDbConnectionProfileInput;
import org.openapis.openapi.models.shared.AlloyDbSettingsInput;
import org.openapis.openapi.models.shared.PrimaryInstanceSettingsInput;
import org.openapis.openapi.models.shared.MachineConfig;
import org.openapis.openapi.models.shared.UserPasswordInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConnectionProfilesCreateRequest req = new DatamigrationProjectsLocationsConnectionProfilesCreateRequest() {{
                security = new DatamigrationProjectsLocationsConnectionProfilesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DatamigrationProjectsLocationsConnectionProfilesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams() {{
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
                    skipValidation = false;
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                    validateOnly = false;
                }};
                request = new ConnectionProfileInput() {{
                    alloydb = new AlloyDbConnectionProfileInput() {{
                        clusterId = "magnam";
                        settings = new AlloyDbSettingsInput() {{
                            initialUser = new UserPasswordInput() {{
                                password = "debitis";
                                user = "ipsa";
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                            }};
                            primaryInstanceSettings = new PrimaryInstanceSettingsInput() {{
                                databaseFlags = new java.util.HashMap<String, String>() {{
                                    put("recusandae", "temporibus");
                                    put("ab", "quis");
                                }};
                                id = "veritatis";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("perferendis", "ipsam");
                                    put("repellendus", "sapiente");
                                    put("quo", "odit");
                                }};
                                machineConfig = new MachineConfig() {{
                                    cpuCount = 870013;
                                }};
                            }};
                            vpcNetwork = "at";
                        }};
                    }};
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = "NEVER";
                            autoStorageIncrease = false;
                            availabilityType = "ZONAL";
                            cmekKeyName = "quod";
                            collation = "quod";
                            dataDiskSizeGb = "esse";
                            dataDiskType = "PD_SSD";
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("dolorum", "dicta");
                                put("nam", "officia");
                                put("occaecati", "fugit");
                                put("deleniti", "hic");
                            }};
                            databaseVersion = "POSTGRES_12";
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new org.openapis.openapi.models.shared.SqlAclEntry[]{{
                                    add(new SqlAclEntry() {{
                                        expireTime = "beatae";
                                        label = "commodi";
                                        ttl = "molestiae";
                                        value = "modi";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "qui";
                                        label = "impedit";
                                        ttl = "cum";
                                        value = "esse";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "ipsum";
                                        label = "excepturi";
                                        ttl = "aspernatur";
                                        value = "perferendis";
                                    }}),
                                }};
                                enableIpv4 = false;
                                privateNetwork = "ad";
                                requireSsl = false;
                            }};
                            rootPassword = "natus";
                            secondaryZone = "sed";
                            sourceId = "iste";
                            storageAutoResizeLimit = "dolor";
                            tier = "natus";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("hic", "saepe");
                                put("fuga", "in");
                            }};
                            zone = "corporis";
                        }};
                    }};
                    displayName = "iste";
                    error = new Status() {{
                        code = 437032;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("architecto", "ipsa");
                                put("reiciendis", "est");
                                put("mollitia", "laborum");
                            }}),
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
                    }};
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
                        }};
                        username = "Eugene_Brown31";
                    }};
                    name = "odit";
                    oracle = new OracleConnectionProfileInput() {{
                        databaseService = "quo";
                        forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                            hostname = "dimwitted-vaulting.info";
                            password = "id";
                            port = 820994;
                            privateKey = "aut";
                            username = "Avery_Mueller9";
                        }};
                        host = "reiciendis";
                        password = "voluptatibus";
                        port = 878194;
                        privateConnectivity = new PrivateConnectivity() {{
                            privateConnection = "nihil";
                        }};
                        staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("voluptatibus", "ipsa");
                            put("omnis", "voluptate");
                            put("cum", "perferendis");
                        }};
                        username = "Alison97";
                    }};
                    postgresql = new PostgreSqlConnectionProfileInput() {{
                        cloudSqlId = "dicta";
                        host = "corporis";
                        password = "dolore";
                        port = 480894;
                        privateServiceConnectConnectivity = new PrivateServiceConnectConnectivity() {{
                            serviceAttachment = "dicta";
                        }};
                        ssl = new SslConfigInput() {{
                            caCertificate = "harum";
                            clientCertificate = "enim";
                            clientKey = "accusamus";
                        }};
                        staticIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("repudiandae", "quae");
                            put("ipsum", "quidem");
                        }};
                        username = "Kennedi.Mante50";
                    }};
                    provider = "RDS";
                    state = "FAILED";
                }};
            }};            

            DatamigrationProjectsLocationsConnectionProfilesCreateResponse res = sdk.projects.datamigrationProjectsLocationsConnectionProfilesCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->