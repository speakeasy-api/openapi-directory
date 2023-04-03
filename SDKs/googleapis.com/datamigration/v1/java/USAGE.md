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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatamigrationProjectsLocationsConnectionProfilesCreateRequest req = new DatamigrationProjectsLocationsConnectionProfilesCreateRequest() {{
                dollarXgafv = "2";
                connectionProfileInput = new ConnectionProfileInput() {{
                    alloydb = new AlloyDbConnectionProfileInput() {{
                        clusterId = "provident";
                        settings = new AlloyDbSettingsInput() {{
                            initialUser = new UserPasswordInput() {{
                                password = "distinctio";
                                user = "quibusdam";
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("nulla", "corrupti");
                                put("illum", "vel");
                                put("error", "deserunt");
                            }};
                            primaryInstanceSettings = new PrimaryInstanceSettingsInput() {{
                                databaseFlags = new java.util.HashMap<String, String>() {{
                                    put("iure", "magnam");
                                    put("debitis", "ipsa");
                                }};
                                id = "delectus";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("suscipit", "molestiae");
                                    put("minus", "placeat");
                                }};
                                machineConfig = new MachineConfig() {{
                                    cpuCount = 528895;
                                }};
                            }};
                            vpcNetwork = "iusto";
                        }};
                    }};
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = "ALWAYS";
                            autoStorageIncrease = false;
                            availabilityType = "ZONAL";
                            cmekKeyName = "recusandae";
                            collation = "temporibus";
                            dataDiskSizeGb = "ab";
                            dataDiskType = "PD_SSD";
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("deserunt", "perferendis");
                            }};
                            databaseVersion = "POSTGRES_9_6";
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new org.openapis.openapi.models.shared.SqlAclEntry[]{{
                                    add(new SqlAclEntry() {{
                                        expireTime = "sapiente";
                                        label = "quo";
                                        ttl = "odit";
                                        value = "at";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "at";
                                        label = "maiores";
                                        ttl = "molestiae";
                                        value = "quod";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "quod";
                                        label = "esse";
                                        ttl = "totam";
                                        value = "porro";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "dolorum";
                                        label = "dicta";
                                        ttl = "nam";
                                        value = "officia";
                                    }}),
                                }};
                                enableIpv4 = false;
                                privateNetwork = "occaecati";
                                requireSsl = false;
                            }};
                            rootPassword = "fugit";
                            secondaryZone = "deleniti";
                            sourceId = "hic";
                            storageAutoResizeLimit = "optio";
                            tier = "totam";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("commodi", "molestiae");
                            }};
                            zone = "modi";
                        }};
                    }};
                    displayName = "qui";
                    error = new Status() {{
                        code = 774234;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("ipsum", "excepturi");
                                put("aspernatur", "perferendis");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("natus", "sed");
                                put("iste", "dolor");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("laboriosam", "hic");
                                put("saepe", "fuga");
                                put("in", "corporis");
                            }}),
                        }};
                        message = "iste";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("saepe", "quidem");
                        put("architecto", "ipsa");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "reiciendis";
                        host = "est";
                        password = "mollitia";
                        port = 670638;
                        ssl = new SslConfigInput() {{
                            caCertificate = "dolores";
                            clientCertificate = "dolorem";
                            clientKey = "corporis";
                        }};
                        username = "Braulio60";
                    }};
                    name = "nemo";
                    oracle = new OracleConnectionProfileInput() {{
                        databaseService = "minima";
                        forwardSshConnectivity = new ForwardSshTunnelConnectivity() {{
                            hostname = "nippy-apse.info";
                            password = "culpa";
                            port = 988374;
                            privateKey = "sapiente";
                            username = "Bart63";
                        }};
                        host = "consequuntur";
                        password = "repellat";
                        port = 653108;
                        privateConnectivity = new PrivateConnectivity() {{
                            privateConnection = "occaecati";
                        }};
                        staticServiceIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("commodi", "quam");
                            put("molestiae", "velit");
                        }};
                        username = "Linda.Cronin";
                    }};
                    postgresql = new PostgreSqlConnectionProfileInput() {{
                        cloudSqlId = "laborum";
                        host = "animi";
                        password = "enim";
                        port = 138183;
                        privateServiceConnectConnectivity = new PrivateServiceConnectConnectivity() {{
                            serviceAttachment = "quo";
                        }};
                        ssl = new SslConfigInput() {{
                            caCertificate = "sequi";
                            clientCertificate = "tenetur";
                            clientKey = "ipsam";
                        }};
                        staticIpConnectivity = new java.util.HashMap<String, Object>() {{
                            put("possimus", "aut");
                            put("quasi", "error");
                            put("temporibus", "laborum");
                        }};
                        username = "Austyn_Witting46";
                    }};
                    provider = "RDS";
                    state = "FAILED";
                }};
                accessToken = "ipsa";
                alt = "media";
                callback = "voluptate";
                connectionProfileId = "cum";
                fields = "perferendis";
                key = "doloremque";
                oauthToken = "reprehenderit";
                parent = "ut";
                prettyPrint = false;
                quotaUser = "maiores";
                requestId = "dicta";
                skipValidation = false;
                uploadType = "corporis";
                uploadProtocol = "dolore";
                validateOnly = false;
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