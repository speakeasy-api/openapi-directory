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
                    parent = "temporibus";
                }};
                queryParams = new DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "tempore";
                    alt = "media";
                    callback = "minus";
                    connectionProfileId = "nihil";
                    fields = "asperiores";
                    key = "recusandae";
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "possimus";
                    requestId = "earum";
                    uploadType = "amet";
                    uploadProtocol = "eos";
                }};
                request = new ConnectionProfileInput() {{
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = "SQL_ACTIVATION_POLICY_UNSPECIFIED";
                            autoStorageIncrease = true;
                            dataDiskSizeGb = "animi";
                            dataDiskType = "SQL_DATA_DISK_TYPE_UNSPECIFIED";
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("vitae", "vel");
                            }};
                            databaseVersion = "MYSQL_8_0";
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new openapisdk.models.shared.SqlAclEntry[]() {{
                                    add(new SqlAclEntry() {{
                                        expireTime = "id";
                                        label = "aut";
                                        ttl = "harum";
                                        value = "fugit";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "quaerat";
                                        label = "exercitationem";
                                        ttl = "ut";
                                        value = "ipsum";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "rerum";
                                        label = "assumenda";
                                        ttl = "porro";
                                        value = "ut";
                                    }}),
                                }};
                                enableIpv4 = true;
                                privateNetwork = "tenetur";
                                requireSsl = true;
                            }};
                            rootPassword = "quia";
                            sourceId = "velit";
                            storageAutoResizeLimit = "sed";
                            tier = "occaecati";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("maxime", "eos");
                                put("dignissimos", "ullam");
                                put("nisi", "enim");
                            }};
                            zone = "voluptas";
                        }};
                    }};
                    displayName = "dolores";
                    error = new Status() {{
                        code = 2453076062051200745;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("quia", "et");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("dolorum", "distinctio");
                                put("aliquam", "illum");
                            }}),
                        }};
                        message = "ut";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("nisi", "necessitatibus");
                    }};
                    mysql = new MySqlConnectionProfileInput() {{
                        cloudSqlId = "quam";
                        host = "similique";
                        password = "et";
                        port = 4417303482628021405;
                        ssl = new SslConfigInput() {{
                            caCertificate = "minus";
                            clientCertificate = "et";
                            clientKey = "laudantium";
                        }};
                        username = "voluptatibus";
                    }};
                    name = "expedita";
                    provider = "RDS";
                    state = "DELETING";
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