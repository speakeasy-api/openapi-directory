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
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new ConnectionProfileInput() {{
                    cloudsql = new CloudSqlConnectionProfileInput() {{
                        settings = new CloudSqlSettingsInput() {{
                            activationPolicy = "SQL_ACTIVATION_POLICY_UNSPECIFIED";
                            autoStorageIncrease = false;
                            dataDiskSizeGb = "debitis";
                            dataDiskType = "SQL_DATA_DISK_TYPE_UNSPECIFIED";
                            databaseFlags = new java.util.HashMap<String, String>() {{
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                            }};
                            databaseVersion = "MYSQL_5_6";
                            ipConfig = new SqlIpConfig() {{
                                authorizedNetworks = new org.openapis.openapi.models.shared.SqlAclEntry[]{{
                                    add(new SqlAclEntry() {{
                                        expireTime = "temporibus";
                                        label = "ab";
                                        ttl = "quis";
                                        value = "veritatis";
                                    }}),
                                    add(new SqlAclEntry() {{
                                        expireTime = "deserunt";
                                        label = "perferendis";
                                        ttl = "ipsam";
                                        value = "repellendus";
                                    }}),
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
                                }};
                                enableIpv4 = false;
                                privateNetwork = "quod";
                                requireSsl = false;
                            }};
                            rootPassword = "esse";
                            sourceId = "totam";
                            storageAutoResizeLimit = "porro";
                            tier = "dolorum";
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("nam", "officia");
                            }};
                            zone = "occaecati";
                        }};
                    }};
                    displayName = "fugit";
                    error = new Status() {{
                        code = 537373;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("totam", "beatae");
                                put("commodi", "molestiae");
                                put("modi", "qui");
                                put("impedit", "cum");
                            }}),
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
                    provider = "DATABASE_PROVIDER_UNSPECIFIED";
                    state = "UPDATING";
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