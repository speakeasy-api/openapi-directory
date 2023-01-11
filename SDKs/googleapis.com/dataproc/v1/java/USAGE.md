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

            DataprocProjectsLocationsBatchesCreateRequest req = new DataprocProjectsLocationsBatchesCreateRequest() {{
                security = new DataprocProjectsLocationsBatchesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DataprocProjectsLocationsBatchesCreatePathParams() {{
                    parent = "eum";
                }};
                queryParams = new DataprocProjectsLocationsBatchesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "laborum";
                    alt = "json";
                    batchId = "illum";
                    callback = "nam";
                    fields = "necessitatibus";
                    key = "aspernatur";
                    oauthToken = "quasi";
                    prettyPrint = false;
                    quotaUser = "consequatur";
                    requestId = "quos";
                    uploadType = "voluptas";
                    uploadProtocol = "quam";
                }};
                request = new BatchInput() {{
                    environmentConfig = new EnvironmentConfig() {{
                        executionConfig = new ExecutionConfig() {{
                            idleTtl = "vero";
                            kmsKey = "nam";
                            networkTags = new String[]() {{
                                add("quia"),
                                add("blanditiis"),
                                add("vel"),
                            }};
                            networkUri = "expedita";
                            serviceAccount = "quo";
                            subnetworkUri = "id";
                        }};
                        peripheralsConfig = new PeripheralsConfig() {{
                            metastoreService = "perferendis";
                            sparkHistoryServerConfig = new SparkHistoryServerConfig() {{
                                dataprocCluster = "impedit";
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("dignissimos", "dolor");
                    }};
                    pysparkBatch = new PySparkBatch() {{
                        archiveUris = new String[]() {{
                            add("illo"),
                            add("est"),
                        }};
                        args = new String[]() {{
                            add("facilis"),
                        }};
                        fileUris = new String[]() {{
                            add("iure"),
                            add("est"),
                            add("sequi"),
                        }};
                        jarFileUris = new String[]() {{
                            add("ipsam"),
                            add("nihil"),
                        }};
                        mainPythonFileUri = "sunt";
                        pythonFileUris = new String[]() {{
                            add("vitae"),
                        }};
                    }};
                    runtimeConfig = new RuntimeConfig() {{
                        containerImage = "provident";
                        properties = new java.util.HashMap<String, String>() {{
                            put("laborum", "voluptas");
                            put("veniam", "dolorum");
                        }};
                        version = "id";
                    }};
                    runtimeInfo = new RuntimeInfoInput() {{
                        approximateUsage = new UsageMetrics() {{
                            milliDcuSeconds = "velit";
                            shuffleStorageGbSeconds = "neque";
                        }};
                    }};
                    sparkBatch = new SparkBatch() {{
                        archiveUris = new String[]() {{
                            add("consequatur"),
                        }};
                        args = new String[]() {{
                            add("sit"),
                        }};
                        fileUris = new String[]() {{
                            add("praesentium"),
                            add("sint"),
                        }};
                        jarFileUris = new String[]() {{
                            add("atque"),
                        }};
                        mainClass = "iusto";
                        mainJarFileUri = "rem";
                    }};
                    sparkRBatch = new SparkRBatch() {{
                        archiveUris = new String[]() {{
                            add("ut"),
                        }};
                        args = new String[]() {{
                            add("nulla"),
                        }};
                        fileUris = new String[]() {{
                            add("maiores"),
                            add("ab"),
                            add("amet"),
                        }};
                        mainRFileUri = "fugiat";
                    }};
                    sparkSqlBatch = new SparkSqlBatch() {{
                        jarFileUris = new String[]() {{
                            add("eveniet"),
                            add("consequatur"),
                        }};
                        queryFileUri = "quia";
                        queryVariables = new java.util.HashMap<String, String>() {{
                            put("nesciunt", "necessitatibus");
                            put("ipsa", "id");
                        }};
                    }};
                }};
            }};

            DataprocProjectsLocationsBatchesCreateResponse res = sdk.projects.dataprocProjectsLocationsBatchesCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->