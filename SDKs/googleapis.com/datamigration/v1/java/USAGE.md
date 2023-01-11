<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    connectionProfileId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    requestId = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
                request = new ConnectionProfileInput() {{
                    alloydb = new AlloyDbConnectionProfileInput() {{
                        clusterId = "voluptatum";
                        settings = new AlloyDbSettingsInput() {{
                            initialUser = new UserPasswordInput() {{
                                password = "et";
                                user = "ut";
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("et", "voluptate");
                                put("iste", "vitae");
                                put("totam", "dolores");
                            }};
                            primaryInstanceSettings = new PrimaryInstanceSettingsInput() {{
                                databaseFlags = new java.util.HashMap<String, String>() {{
                                    put("debitis", "vel");
                                    put("odio", "dolore");
                                    put("id", "aspernatur");
                                }};
                                id = "accusantium";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("commodi", "quis");
                                    put("est", "aut");
                                    put("odit", "non");
                                }};
                                machineConfig = new MachineConfig() {{
                                    cpuCount = 167566062957544642;
                                }};
                            }};
                            vpcNetwork = "omnis";
                        }};
                    }};
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = "SQL_ACTIVATION_POLICY_UNSPECIFIED";
                            autoStorageIncrease = true;
                            availabilityType = "REGIONAL";
                            cmekKeyName = "officiis";
                            collation = "autem";
                            dataDiskSizeGb = "consectetur";
                            dataDiskType = "SQL_DATA_DISK_TYPE_UNSPECIFIED";
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("qui", "recusandae");
                            }};
                            databaseVersion = "POSTGRES_13";
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new openapisdk.models.shared.SqlAclEntry[]() {{
                                    add(new SqlAclEntry() {{
                                        expireTime = "eveniet";
                                        label = "modi";
                                        ttl = "sint";
                                        value = "inventore";
                                    }}),
                                }};
                                enableIpv4 = true;
                                privateNetwork = "exercitationem";
                                requireSsl = true;
                            }};
                            rootPassword = "reprehenderit";
                            secondaryZone = "tempore";
                            sourceId = "maiores";
                            storageAutoResizeLimit = "incidunt";
                            tier = "dolor";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("veritatis", "in");
                                put("et", "omnis");
                                put("ipsum", "ex");
                            }};
                            zone = "dolores";
                        }};
                    }};
                    displayName = "placeat";
                    error = new Status() {{
                        code = 2118716725206170867;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("voluptas", "quam");
                                put("reprehenderit", "qui");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("unde", "in");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("qui", "ut");
                                put("itaque", "ab");
                            }}),
                        }};
                        message = "neque";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("et", "accusantium");
                        put("esse", "architecto");
                        put("quam", "velit");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "cumque";
                        host = "soluta";
                        password = "sunt";
                        port = 2408550365227740434;
                        ssl = new SslConfigInput() {{
                            caCertificate = "magni";
                            clientCertificate = "et";
                            clientKey = "optio";
                        }};
                        username = "qui";
                    }};
                    name = "earum";
                    postgresql = new PostgreSqlConnectionProfileInput() {{
                        cloudSqlId = "illo";
                        host = "omnis";
                        password = "ut";
                        port = 7442289190031176026;
                        ssl = new SslConfigInput() {{
                            caCertificate = "dolor";
                            clientCertificate = "commodi";
                            clientKey = "error";
                        }};
                        username = "reprehenderit";
                    }};
                    provider = "AURORA";
                    state = "READY";
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