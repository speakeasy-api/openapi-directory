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
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = "SQL_ACTIVATION_POLICY_UNSPECIFIED";
                            autoStorageIncrease = false;
                            dataDiskSizeGb = "ut";
                            dataDiskType = "PD_HDD";
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("voluptate", "iste");
                                put("vitae", "totam");
                            }};
                            databaseVersion = "SQL_DATABASE_VERSION_UNSPECIFIED";
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new openapisdk.models.shared.SqlAclEntry[]() {{
                                    add(new SqlAclEntry() {{
                                        expireTime = "debitis";
                                        label = "vel";
                                        ttl = "odio";
                                        value = "dolore";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "id";
                                        label = "aspernatur";
                                        ttl = "accusantium";
                                        value = "totam";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "commodi";
                                        label = "quis";
                                        ttl = "est";
                                        value = "aut";
                                    }}),
                                }};
                                enableIpv4 = true;
                                privateNetwork = "non";
                                requireSsl = false;
                            }};
                            rootPassword = "omnis";
                            sourceId = "aut";
                            storageAutoResizeLimit = "illo";
                            tier = "sed";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("autem", "consectetur");
                                put("nobis", "odio");
                            }};
                            zone = "qui";
                        }};
                    }};
                    displayName = "recusandae";
                    error = new Status() {{
                        code = 7561811714888168464;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("modi", "sint");
                                put("inventore", "ut");
                            }}),
                        }};
                        message = "exercitationem";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("reprehenderit", "tempore");
                        put("maiores", "incidunt");
                        put("dolor", "beatae");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "veritatis";
                        host = "in";
                        password = "et";
                        port = 8565714761387219319;
                        ssl = new SslConfigInput() {{
                            caCertificate = "ipsum";
                            clientCertificate = "ex";
                            clientKey = "dolores";
                        }};
                        username = "placeat";
                    }};
                    name = "vel";
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