<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesCreateSecurity;
import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesCreatePathParams;
import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesCreateQueryParams;
import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesCreateRequest;
import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesCreateResponse;
import org.openapis.openapi.models.shared.BatchInput;
import org.openapis.openapi.models.shared.SparkSqlBatch;
import org.openapis.openapi.models.shared.SparkRBatch;
import org.openapis.openapi.models.shared.SparkBatch;
import org.openapis.openapi.models.shared.RuntimeInfoInput;
import org.openapis.openapi.models.shared.UsageSnapshot;
import org.openapis.openapi.models.shared.UsageMetrics;
import org.openapis.openapi.models.shared.RuntimeConfig;
import org.openapis.openapi.models.shared.PySparkBatch;
import org.openapis.openapi.models.shared.EnvironmentConfig;
import org.openapis.openapi.models.shared.PeripheralsConfig;
import org.openapis.openapi.models.shared.SparkHistoryServerConfig;
import org.openapis.openapi.models.shared.ExecutionConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new DataprocProjectsLocationsBatchesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    batchId = "unde";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new BatchInput() {{
                    environmentConfig = new EnvironmentConfig() {{
                        executionConfig = new ExecutionConfig() {{
                            idleTtl = "magnam";
                            kmsKey = "debitis";
                            networkTags = new String[]{{
                                add("delectus"),
                            }};
                            networkUri = "tempora";
                            serviceAccount = "suscipit";
                            stagingBucket = "molestiae";
                            subnetworkUri = "minus";
                            ttl = "placeat";
                        }};
                        peripheralsConfig = new PeripheralsConfig() {{
                            metastoreService = "voluptatum";
                            sparkHistoryServerConfig = new SparkHistoryServerConfig() {{
                                dataprocCluster = "iusto";
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                    }};
                    pysparkBatch = new PySparkBatch() {{
                        archiveUris = new String[]{{
                            add("perferendis"),
                            add("ipsam"),
                            add("repellendus"),
                        }};
                        args = new String[]{{
                            add("quo"),
                            add("odit"),
                            add("at"),
                            add("at"),
                        }};
                        fileUris = new String[]{{
                            add("molestiae"),
                            add("quod"),
                            add("quod"),
                            add("esse"),
                        }};
                        jarFileUris = new String[]{{
                            add("porro"),
                            add("dolorum"),
                            add("dicta"),
                        }};
                        mainPythonFileUri = "nam";
                        pythonFileUris = new String[]{{
                            add("occaecati"),
                            add("fugit"),
                            add("deleniti"),
                        }};
                    }};
                    runtimeConfig = new RuntimeConfig() {{
                        containerImage = "hic";
                        properties = new java.util.HashMap<String, String>() {{
                            put("totam", "beatae");
                            put("commodi", "molestiae");
                            put("modi", "qui");
                            put("impedit", "cum");
                        }};
                        version = "esse";
                    }};
                    runtimeInfo = new RuntimeInfoInput() {{
                        approximateUsage = new UsageMetrics() {{
                            milliDcuSeconds = "ipsum";
                            shuffleStorageGbSeconds = "excepturi";
                        }};
                        currentUsage = new UsageSnapshot() {{
                            milliDcu = "aspernatur";
                            shuffleStorageGb = "perferendis";
                            snapshotTime = "ad";
                        }};
                    }};
                    sparkBatch = new SparkBatch() {{
                        archiveUris = new String[]{{
                            add("sed"),
                            add("iste"),
                            add("dolor"),
                        }};
                        args = new String[]{{
                            add("laboriosam"),
                            add("hic"),
                            add("saepe"),
                        }};
                        fileUris = new String[]{{
                            add("in"),
                            add("corporis"),
                            add("iste"),
                        }};
                        jarFileUris = new String[]{{
                            add("saepe"),
                            add("quidem"),
                        }};
                        mainClass = "architecto";
                        mainJarFileUri = "ipsa";
                    }};
                    sparkRBatch = new SparkRBatch() {{
                        archiveUris = new String[]{{
                            add("est"),
                            add("mollitia"),
                            add("laborum"),
                            add("dolores"),
                        }};
                        args = new String[]{{
                            add("corporis"),
                        }};
                        fileUris = new String[]{{
                            add("nobis"),
                        }};
                        mainRFileUri = "enim";
                    }};
                    sparkSqlBatch = new SparkSqlBatch() {{
                        jarFileUris = new String[]{{
                            add("nemo"),
                            add("minima"),
                            add("excepturi"),
                        }};
                        queryFileUri = "accusantium";
                        queryVariables = new java.util.HashMap<String, String>() {{
                            put("culpa", "doloribus");
                            put("sapiente", "architecto");
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