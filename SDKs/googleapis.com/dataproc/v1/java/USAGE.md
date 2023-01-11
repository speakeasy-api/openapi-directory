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
                    parent = "sit";
                }};
                queryParams = new DataprocProjectsLocationsBatchesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    batchId = "consequuntur";
                    callback = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    requestId = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
                request = new BatchInput() {{
                    environmentConfig = new EnvironmentConfig() {{
                        executionConfig = new ExecutionConfig() {{
                            idleTtl = "voluptatum";
                            kmsKey = "et";
                            networkTags = new String[]() {{
                                add("dolorem"),
                                add("et"),
                                add("voluptate"),
                            }};
                            networkUri = "iste";
                            serviceAccount = "vitae";
                            subnetworkUri = "totam";
                        }};
                        peripheralsConfig = new PeripheralsConfig() {{
                            metastoreService = "dolores";
                            sparkHistoryServerConfig = new SparkHistoryServerConfig() {{
                                dataprocCluster = "illum";
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("vel", "odio");
                    }};
                    pysparkBatch = new PySparkBatch() {{
                        archiveUris = new String[]() {{
                            add("id"),
                            add("aspernatur"),
                        }};
                        args = new String[]() {{
                            add("totam"),
                            add("commodi"),
                            add("quis"),
                        }};
                        fileUris = new String[]() {{
                            add("aut"),
                            add("odit"),
                        }};
                        jarFileUris = new String[]() {{
                            add("voluptas"),
                            add("omnis"),
                            add("aut"),
                        }};
                        mainPythonFileUri = "illo";
                        pythonFileUris = new String[]() {{
                            add("officiis"),
                            add("autem"),
                            add("consectetur"),
                        }};
                    }};
                    runtimeConfig = new RuntimeConfig() {{
                        containerImage = "nobis";
                        properties = new java.util.HashMap<String, String>() {{
                            put("qui", "recusandae");
                        }};
                        version = "at";
                    }};
                    runtimeInfo = new RuntimeInfoInput() {{
                        approximateUsage = new UsageMetrics() {{
                            milliDcuSeconds = "ipsum";
                            shuffleStorageGbSeconds = "eveniet";
                        }};
                    }};
                    sparkBatch = new SparkBatch() {{
                        archiveUris = new String[]() {{
                            add("sint"),
                            add("inventore"),
                        }};
                        args = new String[]() {{
                            add("exercitationem"),
                            add("aut"),
                            add("reprehenderit"),
                        }};
                        fileUris = new String[]() {{
                            add("maiores"),
                            add("incidunt"),
                            add("dolor"),
                        }};
                        jarFileUris = new String[]() {{
                            add("veritatis"),
                            add("in"),
                            add("et"),
                        }};
                        mainClass = "omnis";
                        mainJarFileUri = "ipsum";
                    }};
                    sparkRBatch = new SparkRBatch() {{
                        archiveUris = new String[]() {{
                            add("dolores"),
                        }};
                        args = new String[]() {{
                            add("vel"),
                        }};
                        fileUris = new String[]() {{
                            add("mollitia"),
                            add("voluptas"),
                            add("quam"),
                        }};
                        mainRFileUri = "reprehenderit";
                    }};
                    sparkSqlBatch = new SparkSqlBatch() {{
                        jarFileUris = new String[]() {{
                            add("qui"),
                        }};
                        queryFileUri = "unde";
                        queryVariables = new java.util.HashMap<String, String>() {{
                            put("autem", "qui");
                            put("ut", "itaque");
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