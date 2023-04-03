<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesCreateSecurity;
import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesCreateRequest;
import org.openapis.openapi.models.operations.DataprocProjectsLocationsBatchesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataprocProjectsLocationsBatchesCreateRequest req = new DataprocProjectsLocationsBatchesCreateRequest() {{
                dollarXgafv = "2";
                batchInput = new BatchInput() {{
                    environmentConfig = new EnvironmentConfig() {{
                        executionConfig = new ExecutionConfig() {{
                            idleTtl = "provident";
                            kmsKey = "distinctio";
                            networkTags = new String[]{{
                                add("unde"),
                                add("nulla"),
                                add("corrupti"),
                                add("illum"),
                            }};
                            networkUri = "vel";
                            serviceAccount = "error";
                            stagingBucket = "deserunt";
                            subnetworkUri = "suscipit";
                            ttl = "iure";
                        }};
                        peripheralsConfig = new PeripheralsConfig() {{
                            metastoreService = "magnam";
                            sparkHistoryServerConfig = new SparkHistoryServerConfig() {{
                                dataprocCluster = "debitis";
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("delectus", "tempora");
                    }};
                    pysparkBatch = new PySparkBatch() {{
                        archiveUris = new String[]{{
                            add("molestiae"),
                            add("minus"),
                        }};
                        args = new String[]{{
                            add("voluptatum"),
                            add("iusto"),
                            add("excepturi"),
                            add("nisi"),
                        }};
                        fileUris = new String[]{{
                            add("temporibus"),
                            add("ab"),
                            add("quis"),
                            add("veritatis"),
                        }};
                        jarFileUris = new String[]{{
                            add("perferendis"),
                            add("ipsam"),
                            add("repellendus"),
                        }};
                        mainPythonFileUri = "sapiente";
                        pythonFileUris = new String[]{{
                            add("odit"),
                            add("at"),
                            add("at"),
                            add("maiores"),
                        }};
                    }};
                    runtimeConfig = new RuntimeConfig() {{
                        containerImage = "molestiae";
                        properties = new java.util.HashMap<String, String>() {{
                            put("quod", "esse");
                            put("totam", "porro");
                            put("dolorum", "dicta");
                            put("nam", "officia");
                        }};
                        version = "occaecati";
                    }};
                    runtimeInfo = new RuntimeInfoInput() {{
                        approximateUsage = new UsageMetrics() {{
                            milliDcuSeconds = "fugit";
                            shuffleStorageGbSeconds = "deleniti";
                        }};
                        currentUsage = new UsageSnapshot() {{
                            milliDcu = "hic";
                            shuffleStorageGb = "optio";
                            snapshotTime = "totam";
                        }};
                    }};
                    sparkBatch = new SparkBatch() {{
                        archiveUris = new String[]{{
                            add("commodi"),
                        }};
                        args = new String[]{{
                            add("modi"),
                            add("qui"),
                        }};
                        fileUris = new String[]{{
                            add("cum"),
                            add("esse"),
                            add("ipsum"),
                            add("excepturi"),
                        }};
                        jarFileUris = new String[]{{
                            add("perferendis"),
                        }};
                        mainClass = "ad";
                        mainJarFileUri = "natus";
                    }};
                    sparkRBatch = new SparkRBatch() {{
                        archiveUris = new String[]{{
                            add("iste"),
                        }};
                        args = new String[]{{
                            add("natus"),
                        }};
                        fileUris = new String[]{{
                            add("hic"),
                            add("saepe"),
                        }};
                        mainRFileUri = "fuga";
                    }};
                    sparkSqlBatch = new SparkSqlBatch() {{
                        jarFileUris = new String[]{{
                            add("corporis"),
                            add("iste"),
                        }};
                        queryFileUri = "iure";
                        queryVariables = new java.util.HashMap<String, String>() {{
                            put("quidem", "architecto");
                            put("ipsa", "reiciendis");
                            put("est", "mollitia");
                            put("laborum", "dolores");
                        }};
                    }};
                }};
                accessToken = "dolorem";
                alt = "media";
                batchId = "explicabo";
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                parent = "minima";
                prettyPrint = false;
                quotaUser = "excepturi";
                requestId = "accusantium";
                uploadType = "iure";
                uploadProtocol = "culpa";
            }}            

            DataprocProjectsLocationsBatchesCreateResponse res = sdk.projects.dataprocProjectsLocationsBatchesCreate(req, new DataprocProjectsLocationsBatchesCreateSecurity() {{
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