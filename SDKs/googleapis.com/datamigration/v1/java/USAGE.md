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
                    parent = "animi";
                }};
                queryParams = new DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "cumque";
                    alt = "proto";
                    callback = "id";
                    connectionProfileId = "vitae";
                    fields = "atque";
                    key = "sit";
                    oauthToken = "fugiat";
                    prettyPrint = false;
                    quotaUser = "nesciunt";
                    requestId = "eaque";
                    uploadType = "suscipit";
                    uploadProtocol = "labore";
                }};
                request = new ConnectionProfileInput() {{
                    alloydb = new AlloyDbConnectionProfileInput() {{
                        clusterId = "voluptatum";
                        settings = new AlloyDbSettingsInput() {{
                            initialUser = new UserPasswordInput() {{
                                password = "quisquam";
                                user = "pariatur";
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("incidunt", "sit");
                                put("voluptas", "velit");
                            }};
                            primaryInstanceSettings = new PrimaryInstanceSettingsInput() {{
                                databaseFlags = new java.util.HashMap<String, String>() {{
                                    put("et", "qui");
                                    put("corporis", "voluptates");
                                    put("quaerat", "aperiam");
                                }};
                                id = "et";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("placeat", "quo");
                                    put("et", "soluta");
                                }};
                                machineConfig = new MachineConfig() {{
                                    cpuCount = 894558792413837213;
                                }};
                            }};
                            vpcNetwork = "vitae";
                        }};
                    }};
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = "NEVER";
                            autoStorageIncrease = true;
                            availabilityType = "REGIONAL";
                            cmekKeyName = "quo";
                            collation = "beatae";
                            dataDiskSizeGb = "aut";
                            dataDiskType = "PD_HDD";
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("et", "ea");
                            }};
                            databaseVersion = "MYSQL_8_0";
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new openapisdk.models.shared.SqlAclEntry[]() {{
                                    add(new SqlAclEntry() {{
                                        expireTime = "animi";
                                        label = "unde";
                                        ttl = "ullam";
                                        value = "assumenda";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "amet";
                                        label = "sequi";
                                        ttl = "officia";
                                        value = "eum";
                                    }}),
                                }};
                                enableIpv4 = true;
                                privateNetwork = "consequatur";
                                requireSsl = false;
                            }};
                            rootPassword = "ea";
                            secondaryZone = "eius";
                            sourceId = "error";
                            storageAutoResizeLimit = "aliquam";
                            tier = "et";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("laboriosam", "vero");
                                put("et", "placeat");
                                put("quibusdam", "quia");
                            }};
                            zone = "voluptas";
                        }};
                    }};
                    displayName = "et";
                    error = new Status() {{
                        code = 4500600018517716623;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("mollitia", "sit");
                                put("est", "quia");
                            }}),
                        }};
                        message = "ipsa";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("id", "ipsa");
                        put("ipsam", "ratione");
                        put("consequatur", "praesentium");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "enim";
                        host = "aut";
                        password = "velit";
                        port = 8628636448964422193;
                        ssl = new SslConfigInput() {{
                            caCertificate = "non";
                            clientCertificate = "enim";
                            clientKey = "reprehenderit";
                        }};
                        username = "vel";
                    }};
                    name = "voluptates";
                    postgresql = new PostgreSqlConnectionProfileInput() {{
                        cloudSqlId = "nesciunt";
                        host = "vel";
                        password = "quaerat";
                        port = 7278960282919804440;
                        ssl = new SslConfigInput() {{
                            caCertificate = "sequi";
                            clientCertificate = "et";
                            clientKey = "minus";
                        }};
                        username = "quibusdam";
                    }};
                    provider = "RDS";
                    state = "DRAFT";
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