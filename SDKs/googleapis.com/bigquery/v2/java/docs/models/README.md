# models

### Available Operations

* [bigqueryModelsDelete](#bigquerymodelsdelete) - Deletes the model specified by modelId from the dataset.
* [bigqueryModelsGet](#bigquerymodelsget) - Gets the specified model resource by model ID.
* [bigqueryModelsList](#bigquerymodelslist) - Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
* [bigqueryModelsPatch](#bigquerymodelspatch) - Patch specific fields in the specified model.

## bigqueryModelsDelete

Deletes the model specified by modelId from the dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryModelsDeleteRequest;
import org.openapis.openapi.models.operations.BigqueryModelsDeleteResponse;
import org.openapis.openapi.models.operations.BigqueryModelsDeleteSecurity;
import org.openapis.openapi.models.operations.BigqueryModelsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryModelsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryModelsDeleteRequest req = new BigqueryModelsDeleteRequest("tempore", "cupiditate", "aperiam") {{
                alt = AltEnum.JSON;
                fields = "delectus";
                key = "dolorem";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "labore";
                userIp = "adipisci";
            }};            

            BigqueryModelsDeleteResponse res = sdk.models.bigqueryModelsDelete(req, new BigqueryModelsDeleteSecurity() {{
                option1 = new BigqueryModelsDeleteSecurityOption1("dolorum", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryModelsGet

Gets the specified model resource by model ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryModelsGetRequest;
import org.openapis.openapi.models.operations.BigqueryModelsGetResponse;
import org.openapis.openapi.models.operations.BigqueryModelsGetSecurity;
import org.openapis.openapi.models.operations.BigqueryModelsGetSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryModelsGetSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryModelsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryModelsGetRequest req = new BigqueryModelsGetRequest("quae", "aut", "quas") {{
                alt = AltEnum.JSON;
                fields = "itaque";
                key = "consequatur";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "repellendus";
                userIp = "porro";
            }};            

            BigqueryModelsGetResponse res = sdk.models.bigqueryModelsGet(req, new BigqueryModelsGetSecurity() {{
                option1 = new BigqueryModelsGetSecurityOption1("doloribus", "ut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.model != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryModelsList

Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryModelsListRequest;
import org.openapis.openapi.models.operations.BigqueryModelsListResponse;
import org.openapis.openapi.models.operations.BigqueryModelsListSecurity;
import org.openapis.openapi.models.operations.BigqueryModelsListSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryModelsListSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryModelsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryModelsListRequest req = new BigqueryModelsListRequest("facilis", "cupiditate") {{
                alt = AltEnum.JSON;
                fields = "qui";
                key = "quae";
                maxResults = 512393L;
                oauthToken = "odio";
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                userIp = "quisquam";
            }};            

            BigqueryModelsListResponse res = sdk.models.bigqueryModelsList(req, new BigqueryModelsListSecurity() {{
                option1 = new BigqueryModelsListSecurityOption1("vero", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryModelsPatch

Patch specific fields in the specified model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryModelsPatchRequest;
import org.openapis.openapi.models.operations.BigqueryModelsPatchResponse;
import org.openapis.openapi.models.operations.BigqueryModelsPatchSecurity;
import org.openapis.openapi.models.operations.BigqueryModelsPatchSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryModelsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AggregateClassificationMetrics;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ArimaFittingMetrics;
import org.openapis.openapi.models.shared.ArimaForecastingMetrics;
import org.openapis.openapi.models.shared.ArimaForecastingMetricsSeasonalPeriodsEnum;
import org.openapis.openapi.models.shared.ArimaOrder;
import org.openapis.openapi.models.shared.ArimaSingleModelForecastingMetrics;
import org.openapis.openapi.models.shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum;
import org.openapis.openapi.models.shared.BinaryClassificationMetrics;
import org.openapis.openapi.models.shared.BinaryConfusionMatrix;
import org.openapis.openapi.models.shared.CategoricalValue;
import org.openapis.openapi.models.shared.CategoryCount;
import org.openapis.openapi.models.shared.Cluster;
import org.openapis.openapi.models.shared.ClusteringMetrics;
import org.openapis.openapi.models.shared.ConfusionMatrix;
import org.openapis.openapi.models.shared.DataSplitResult;
import org.openapis.openapi.models.shared.DimensionalityReductionMetrics;
import org.openapis.openapi.models.shared.DoubleCandidates;
import org.openapis.openapi.models.shared.DoubleHparamSearchSpace;
import org.openapis.openapi.models.shared.DoubleRange;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.Entry;
import org.openapis.openapi.models.shared.EvaluationMetrics;
import org.openapis.openapi.models.shared.Explanation;
import org.openapis.openapi.models.shared.FeatureValue;
import org.openapis.openapi.models.shared.GlobalExplanation;
import org.openapis.openapi.models.shared.HparamSearchSpaces;
import org.openapis.openapi.models.shared.IntArray;
import org.openapis.openapi.models.shared.IntArrayHparamSearchSpace;
import org.openapis.openapi.models.shared.IntCandidates;
import org.openapis.openapi.models.shared.IntHparamSearchSpace;
import org.openapis.openapi.models.shared.IntRange;
import org.openapis.openapi.models.shared.ModelInput;
import org.openapis.openapi.models.shared.ModelReference;
import org.openapis.openapi.models.shared.MultiClassClassificationMetrics;
import org.openapis.openapi.models.shared.RankingMetrics;
import org.openapis.openapi.models.shared.RegressionMetrics;
import org.openapis.openapi.models.shared.Row;
import org.openapis.openapi.models.shared.StringHparamSearchSpace;
import org.openapis.openapi.models.shared.TableReference;
import org.openapis.openapi.models.shared.TrainingOptions;
import org.openapis.openapi.models.shared.TrainingOptionsBoosterTypeEnum;
import org.openapis.openapi.models.shared.TrainingOptionsColorSpaceEnum;
import org.openapis.openapi.models.shared.TrainingOptionsDartNormalizeTypeEnum;
import org.openapis.openapi.models.shared.TrainingOptionsDataFrequencyEnum;
import org.openapis.openapi.models.shared.TrainingOptionsDataSplitMethodEnum;
import org.openapis.openapi.models.shared.TrainingOptionsDistanceTypeEnum;
import org.openapis.openapi.models.shared.TrainingOptionsFeedbackTypeEnum;
import org.openapis.openapi.models.shared.TrainingOptionsHolidayRegionEnum;
import org.openapis.openapi.models.shared.TrainingOptionsHparamTuningObjectivesEnum;
import org.openapis.openapi.models.shared.TrainingOptionsKmeansInitializationMethodEnum;
import org.openapis.openapi.models.shared.TrainingOptionsLearnRateStrategyEnum;
import org.openapis.openapi.models.shared.TrainingOptionsLossTypeEnum;
import org.openapis.openapi.models.shared.TrainingOptionsOptimizationStrategyEnum;
import org.openapis.openapi.models.shared.TrainingOptionsTreeMethodEnum;
import org.openapis.openapi.models.shared.TrainingRunInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryModelsPatchRequest req = new BigqueryModelsPatchRequest("quis", "ipsum", "delectus") {{
                modelInput = new ModelInput() {{
                    bestTrialId = "voluptate";
                    description = "consectetur";
                    encryptionConfiguration = new EncryptionConfiguration() {{
                        kmsKeyName = "vero";
                    }};;
                    expirationTime = "tenetur";
                    friendlyName = "dignissimos";
                    hparamSearchSpaces = new HparamSearchSpaces() {{
                        activationFn = new StringHparamSearchSpace() {{
                            candidates = new String[]{{
                                add("distinctio"),
                                add("quod"),
                                add("odio"),
                                add("similique"),
                            }};
                        }};;
                        batchSize = new IntHparamSearchSpace() {{
                            candidates = new IntCandidates() {{
                                candidates = new String[]{{
                                    add("vero"),
                                    add("ducimus"),
                                    add("dolore"),
                                }};
                            }};;
                            range = new IntRange() {{
                                max = "quibusdam";
                                min = "illum";
                            }};;
                        }};;
                        boosterType = new StringHparamSearchSpace() {{
                            candidates = new String[]{{
                                add("natus"),
                            }};
                        }};;
                        colsampleBylevel = new DoubleHparamSearchSpace() {{
                            candidates = new DoubleCandidates() {{
                                candidates = new Double[]{{
                                    add(132.36),
                                    add(9742.59),
                                    add(3472.33),
                                    add(8623.1),
                                }};
                            }};;
                            range = new DoubleRange() {{
                                max = 1481.41;
                                min = 7804.27;
                            }};;
                        }};;
                        colsampleBynode = new DoubleHparamSearchSpace() {{
                            candidates = new DoubleCandidates() {{
                                candidates = new Double[]{{
                                    add(9850.33),
                                    add(4783.7),
                                    add(7535.7),
                                    add(4973.91),
                                }};
                            }};;
                            range = new DoubleRange() {{
                                max = 40.48;
                                min = 6394.73;
                            }};;
                        }};;
                        colsampleBytree = new DoubleHparamSearchSpace() {{
                            candidates = new DoubleCandidates() {{
                                candidates = new Double[]{{
                                    add(3685.84),
                                    add(4104.92),
                                }};
                            }};;
                            range = new DoubleRange() {{
                                max = 1369;
                                min = 4282.24;
                            }};;
                        }};;
                        dartNormalizeType = new StringHparamSearchSpace() {{
                            candidates = new String[]{{
                                add("magnam"),
                                add("ratione"),
                                add("ex"),
                                add("laudantium"),
                            }};
                        }};;
                        dropout = new DoubleHparamSearchSpace() {{
                            candidates = new DoubleCandidates() {{
                                candidates = new Double[]{{
                                    add(2243.17),
                                }};
                            }};;
                            range = new DoubleRange() {{
                                max = 9807;
                                min = 978.44;
                            }};;
                        }};;
                        hiddenUnits = new IntArrayHparamSearchSpace() {{
                            candidates = new org.openapis.openapi.models.shared.IntArray[]{{
                                add(new IntArray() {{
                                    elements = new String[]{{
                                        add("excepturi"),
                                        add("voluptatibus"),
                                        add("nostrum"),
                                        add("sapiente"),
                                    }};
                                }}),
                                add(new IntArray() {{
                                    elements = new String[]{{
                                        add("saepe"),
                                        add("ea"),
                                        add("impedit"),
                                        add("corporis"),
                                    }};
                                }}),
                            }};
                        }};;
                        l1Reg = new DoubleHparamSearchSpace() {{
                            candidates = new DoubleCandidates() {{
                                candidates = new Double[]{{
                                    add(3994.99),
                                    add(811.01),
                                }};
                            }};;
                            range = new DoubleRange() {{
                                max = 3018.31;
                                min = 4072.41;
                            }};;
                        }};;
                        l2Reg = new DoubleHparamSearchSpace() {{
                            candidates = new DoubleCandidates() {{
                                candidates = new Double[]{{
                                    add(2322.34),
                                    add(9262.13),
                                    add(1324.87),
                                    add(3253.1),
                                }};
                            }};;
                            range = new DoubleRange() {{
                                max = 534.27;
                                min = 9528.71;
                            }};;
                        }};;
                        learnRate = new DoubleHparamSearchSpace() {{
                            candidates = new DoubleCandidates() {{
                                candidates = new Double[]{{
                                    add(139.48),
                                    add(114.27),
                                    add(5334.66),
                                }};
                            }};;
                            range = new DoubleRange() {{
                                max = 7705.81;
                                min = 3045.82;
                            }};;
                        }};;
                        maxTreeDepth = new IntHparamSearchSpace() {{
                            candidates = new IntCandidates() {{
                                candidates = new String[]{{
                                    add("accusamus"),
                                }};
                            }};;
                            range = new IntRange() {{
                                max = "inventore";
                                min = "non";
                            }};;
                        }};;
                        minSplitLoss = new DoubleHparamSearchSpace() {{
                            candidates = new DoubleCandidates() {{
                                candidates = new Double[]{{
                                    add(6774.12),
                                }};
                            }};;
                            range = new DoubleRange() {{
                                max = 6720.48;
                                min = 8104.24;
                            }};;
                        }};;
                        minTreeChildWeight = new IntHparamSearchSpace() {{
                            candidates = new IntCandidates() {{
                                candidates = new String[]{{
                                    add("eum"),
                                }};
                            }};;
                            range = new IntRange() {{
                                max = "autem";
                                min = "nobis";
                            }};;
                        }};;
                        numClusters = new IntHparamSearchSpace() {{
                            candidates = new IntCandidates() {{
                                candidates = new String[]{{
                                    add("assumenda"),
                                    add("nulla"),
                                    add("voluptas"),
                                }};
                            }};;
                            range = new IntRange() {{
                                max = "libero";
                                min = "quasi";
                            }};;
                        }};;
                        numFactors = new IntHparamSearchSpace() {{
                            candidates = new IntCandidates() {{
                                candidates = new String[]{{
                                    add("numquam"),
                                    add("explicabo"),
                                }};
                            }};;
                            range = new IntRange() {{
                                max = "provident";
                                min = "ipsa";
                            }};;
                        }};;
                        numParallelTree = new IntHparamSearchSpace() {{
                            candidates = new IntCandidates() {{
                                candidates = new String[]{{
                                    add("magnam"),
                                    add("odio"),
                                }};
                            }};;
                            range = new IntRange() {{
                                max = "eius";
                                min = "esse";
                            }};;
                        }};;
                        optimizer = new StringHparamSearchSpace() {{
                            candidates = new String[]{{
                                add("rem"),
                                add("fuga"),
                            }};
                        }};;
                        subsample = new DoubleHparamSearchSpace() {{
                            candidates = new DoubleCandidates() {{
                                candidates = new Double[]{{
                                    add(6956.26),
                                    add(8526.35),
                                }};
                            }};;
                            range = new DoubleRange() {{
                                max = 2835.19;
                                min = 4334.39;
                            }};;
                        }};;
                        treeMethod = new StringHparamSearchSpace() {{
                            candidates = new String[]{{
                                add("assumenda"),
                                add("eos"),
                            }};
                        }};;
                        walsAlpha = new DoubleHparamSearchSpace() {{
                            candidates = new DoubleCandidates() {{
                                candidates = new Double[]{{
                                    add(7885.46),
                                    add(863.77),
                                    add(568.48),
                                }};
                            }};;
                            range = new DoubleRange() {{
                                max = 6600.4;
                                min = 6969.97;
                            }};;
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("quo", "illum");
                    }};
                    modelReference = new ModelReference() {{
                        datasetId = "quo";
                        modelId = "fuga";
                        projectId = "eius";
                    }};;
                    trainingRuns = new org.openapis.openapi.models.shared.TrainingRunInput[]{{
                        add(new TrainingRunInput() {{
                            dataSplitResult = new DataSplitResult() {{
                                evaluationTable = new TableReference() {{
                                    datasetId = "voluptas";
                                    projectId = "ab";
                                    tableId = "cupiditate";
                                }};
                                testTable = new TableReference() {{
                                    datasetId = "consequatur";
                                    projectId = "tempora";
                                    tableId = "debitis";
                                }};
                                trainingTable = new TableReference() {{
                                    datasetId = "ipsam";
                                    projectId = "aspernatur";
                                    tableId = "sequi";
                                }};
                            }};
                            evaluationMetrics = new EvaluationMetrics() {{
                                arimaForecastingMetrics = new ArimaForecastingMetrics() {{
                                    arimaFittingMetrics = new org.openapis.openapi.models.shared.ArimaFittingMetrics[]{{
                                        add(new ArimaFittingMetrics() {{
                                            aic = 4598.56;
                                            logLikelihood = 9251.64;
                                            variance = 446.12;
                                        }}),
                                        add(new ArimaFittingMetrics() {{
                                            aic = 7151.79;
                                            logLikelihood = 7997.96;
                                            variance = 4908.19;
                                        }}),
                                        add(new ArimaFittingMetrics() {{
                                            aic = 769.56;
                                            logLikelihood = 4694.98;
                                            variance = 5188.35;
                                        }}),
                                        add(new ArimaFittingMetrics() {{
                                            aic = 8827.1;
                                            logLikelihood = 3068.1;
                                            variance = 4884.1;
                                        }}),
                                    }};
                                    arimaSingleModelForecastingMetrics = new org.openapis.openapi.models.shared.ArimaSingleModelForecastingMetrics[]{{
                                        add(new ArimaSingleModelForecastingMetrics() {{
                                            arimaFittingMetrics = new ArimaFittingMetrics() {{
                                                aic = 4145.67;
                                                logLikelihood = 9594.34;
                                                variance = 1741.12;
                                            }};
                                            hasDrift = false;
                                            hasHolidayEffect = false;
                                            hasSpikesAndDips = false;
                                            hasStepChanges = false;
                                            nonSeasonalOrder = new ArimaOrder() {{
                                                d = "deserunt";
                                                p = "molestiae";
                                                q = "accusantium";
                                            }};
                                            seasonalPeriods = new org.openapis.openapi.models.shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum[]{{
                                                add(ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum.WEEKLY),
                                                add(ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum.WEEKLY),
                                                add(ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum.WEEKLY),
                                                add(ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum.NO_SEASONALITY),
                                            }};
                                            timeSeriesId = "deleniti";
                                            timeSeriesIds = new String[]{{
                                                add("fuga"),
                                            }};
                                        }}),
                                        add(new ArimaSingleModelForecastingMetrics() {{
                                            arimaFittingMetrics = new ArimaFittingMetrics() {{
                                                aic = 6494.63;
                                                logLikelihood = 2775.96;
                                                variance = 5392.24;
                                            }};
                                            hasDrift = false;
                                            hasHolidayEffect = false;
                                            hasSpikesAndDips = false;
                                            hasStepChanges = false;
                                            nonSeasonalOrder = new ArimaOrder() {{
                                                d = "explicabo";
                                                p = "minima";
                                                q = "nisi";
                                            }};
                                            seasonalPeriods = new org.openapis.openapi.models.shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum[]{{
                                                add(ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum.YEARLY),
                                            }};
                                            timeSeriesId = "consequuntur";
                                            timeSeriesIds = new String[]{{
                                                add("explicabo"),
                                            }};
                                        }}),
                                        add(new ArimaSingleModelForecastingMetrics() {{
                                            arimaFittingMetrics = new ArimaFittingMetrics() {{
                                                aic = 9039.84;
                                                logLikelihood = 5789.22;
                                                variance = 5438.06;
                                            }};
                                            hasDrift = false;
                                            hasHolidayEffect = false;
                                            hasSpikesAndDips = false;
                                            hasStepChanges = false;
                                            nonSeasonalOrder = new ArimaOrder() {{
                                                d = "et";
                                                p = "esse";
                                                q = "eveniet";
                                            }};
                                            seasonalPeriods = new org.openapis.openapi.models.shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum[]{{
                                                add(ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum.SEASONAL_PERIOD_TYPE_UNSPECIFIED),
                                                add(ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum.WEEKLY),
                                                add(ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum.QUARTERLY),
                                                add(ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum.QUARTERLY),
                                            }};
                                            timeSeriesId = "vero";
                                            timeSeriesIds = new String[]{{
                                                add("quasi"),
                                                add("saepe"),
                                            }};
                                        }}),
                                    }};
                                    hasDrift = new Boolean[]{{
                                        add(false),
                                        add(false),
                                    }};
                                    nonSeasonalOrder = new org.openapis.openapi.models.shared.ArimaOrder[]{{
                                        add(new ArimaOrder() {{
                                            d = "molestiae";
                                            p = "rerum";
                                            q = "occaecati";
                                        }}),
                                        add(new ArimaOrder() {{
                                            d = "minima";
                                            p = "distinctio";
                                            q = "eligendi";
                                        }}),
                                        add(new ArimaOrder() {{
                                            d = "sit";
                                            p = "culpa";
                                            q = "tempore";
                                        }}),
                                    }};
                                    seasonalPeriods = new org.openapis.openapi.models.shared.ArimaForecastingMetricsSeasonalPeriodsEnum[]{{
                                        add(ArimaForecastingMetricsSeasonalPeriodsEnum.QUARTERLY),
                                    }};
                                    timeSeriesId = new String[]{{
                                        add("consequatur"),
                                    }};
                                }};
                                binaryClassificationMetrics = new BinaryClassificationMetrics() {{
                                    aggregateClassificationMetrics = new AggregateClassificationMetrics() {{
                                        accuracy = 7963.92;
                                        f1Score = 3082.86;
                                        logLoss = 9591.67;
                                        precision = 2328.65;
                                        recall = 4581.39;
                                        rocAuc = 5034.27;
                                        threshold = 5909.84;
                                    }};
                                    binaryConfusionMatrixList = new org.openapis.openapi.models.shared.BinaryConfusionMatrix[]{{
                                        add(new BinaryConfusionMatrix() {{
                                            accuracy = 8577.23;
                                            f1Score = 5578.11;
                                            falseNegatives = "esse";
                                            falsePositives = "quasi";
                                            positiveClassThreshold = 9518.75;
                                            precision = 6216.79;
                                            recall = 5757.51;
                                            trueNegatives = "pariatur";
                                            truePositives = "possimus";
                                        }}),
                                        add(new BinaryConfusionMatrix() {{
                                            accuracy = 1576.32;
                                            f1Score = 9088.44;
                                            falseNegatives = "asperiores";
                                            falsePositives = "facere";
                                            positiveClassThreshold = 850.01;
                                            precision = 1594.14;
                                            recall = 944.58;
                                            trueNegatives = "similique";
                                            truePositives = "culpa";
                                        }}),
                                        add(new BinaryConfusionMatrix() {{
                                            accuracy = 3984.34;
                                            f1Score = 9492.98;
                                            falseNegatives = "quae";
                                            falsePositives = "earum";
                                            positiveClassThreshold = 4240.32;
                                            precision = 4473.78;
                                            recall = 2586.84;
                                            trueNegatives = "libero";
                                            truePositives = "illum";
                                        }}),
                                        add(new BinaryConfusionMatrix() {{
                                            accuracy = 7422.38;
                                            f1Score = 333.04;
                                            falseNegatives = "aliquam";
                                            falsePositives = "sapiente";
                                            positiveClassThreshold = 1197.71;
                                            precision = 3553.69;
                                            recall = 4438.79;
                                            trueNegatives = "ullam";
                                            truePositives = "nisi";
                                        }}),
                                    }};
                                    negativeLabel = "aut";
                                    positiveLabel = "voluptatum";
                                }};
                                clusteringMetrics = new ClusteringMetrics() {{
                                    clusters = new org.openapis.openapi.models.shared.Cluster[]{{
                                        add(new Cluster() {{
                                            centroidId = "quibusdam";
                                            count = "ex";
                                            featureValues = new org.openapis.openapi.models.shared.FeatureValue[]{{
                                                add(new FeatureValue() {{
                                                    categoricalValue = new CategoricalValue() {{
                                                        categoryCounts = new org.openapis.openapi.models.shared.CategoryCount[]{{
                                                            add(new CategoryCount() {{
                                                                category = "dolorum";
                                                                count = "architecto";
                                                            }}),
                                                            add(new CategoryCount() {{
                                                                category = "omnis";
                                                                count = "tenetur";
                                                            }}),
                                                            add(new CategoryCount() {{
                                                                category = "quasi";
                                                                count = "at";
                                                            }}),
                                                            add(new CategoryCount() {{
                                                                category = "et";
                                                                count = "voluptate";
                                                            }}),
                                                        }};
                                                    }};
                                                    featureColumn = "ipsa";
                                                    numericalValue = 3267.01;
                                                }}),
                                                add(new FeatureValue() {{
                                                    categoricalValue = new CategoricalValue() {{
                                                        categoryCounts = new org.openapis.openapi.models.shared.CategoryCount[]{{
                                                            add(new CategoryCount() {{
                                                                category = "consectetur";
                                                                count = "adipisci";
                                                            }}),
                                                        }};
                                                    }};
                                                    featureColumn = "iste";
                                                    numericalValue = 8395.13;
                                                }}),
                                                add(new FeatureValue() {{
                                                    categoricalValue = new CategoricalValue() {{
                                                        categoryCounts = new org.openapis.openapi.models.shared.CategoryCount[]{{
                                                            add(new CategoryCount() {{
                                                                category = "rem";
                                                                count = "aut";
                                                            }}),
                                                        }};
                                                    }};
                                                    featureColumn = "laudantium";
                                                    numericalValue = 4287.96;
                                                }}),
                                            }};
                                        }}),
                                    }};
                                    daviesBouldinIndex = 6498.32;
                                    meanSquaredDistance = 680.74;
                                }};
                                dimensionalityReductionMetrics = new DimensionalityReductionMetrics() {{
                                    totalExplainedVarianceRatio = 5445.91;
                                }};
                                multiClassClassificationMetrics = new MultiClassClassificationMetrics() {{
                                    aggregateClassificationMetrics = new AggregateClassificationMetrics() {{
                                        accuracy = 2519.41;
                                        f1Score = 324.65;
                                        logLoss = 2211.61;
                                        precision = 5801.52;
                                        recall = 2531.91;
                                        rocAuc = 7710.89;
                                        threshold = 1310.55;
                                    }};
                                    confusionMatrixList = new org.openapis.openapi.models.shared.ConfusionMatrix[]{{
                                        add(new ConfusionMatrix() {{
                                            confidenceThreshold = 120.36;
                                            rows = new org.openapis.openapi.models.shared.Row[]{{
                                                add(new Row() {{
                                                    actualLabel = "dicta";
                                                    entries = new org.openapis.openapi.models.shared.Entry[]{{
                                                        add(new Entry() {{
                                                            itemCount = "natus";
                                                            predictedLabel = "velit";
                                                        }}),
                                                        add(new Entry() {{
                                                            itemCount = "voluptatibus";
                                                            predictedLabel = "voluptas";
                                                        }}),
                                                        add(new Entry() {{
                                                            itemCount = "asperiores";
                                                            predictedLabel = "aperiam";
                                                        }}),
                                                        add(new Entry() {{
                                                            itemCount = "ea";
                                                            predictedLabel = "quaerat";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new Row() {{
                                                    actualLabel = "consequuntur";
                                                    entries = new org.openapis.openapi.models.shared.Entry[]{{
                                                        add(new Entry() {{
                                                            itemCount = "officia";
                                                            predictedLabel = "maxime";
                                                        }}),
                                                        add(new Entry() {{
                                                            itemCount = "dignissimos";
                                                            predictedLabel = "officia";
                                                        }}),
                                                        add(new Entry() {{
                                                            itemCount = "asperiores";
                                                            predictedLabel = "nemo";
                                                        }}),
                                                        add(new Entry() {{
                                                            itemCount = "quae";
                                                            predictedLabel = "quaerat";
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                        add(new ConfusionMatrix() {{
                                            confidenceThreshold = 7832.35;
                                            rows = new org.openapis.openapi.models.shared.Row[]{{
                                                add(new Row() {{
                                                    actualLabel = "labore";
                                                    entries = new org.openapis.openapi.models.shared.Entry[]{{
                                                        add(new Entry() {{
                                                            itemCount = "adipisci";
                                                            predictedLabel = "fuga";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new Row() {{
                                                    actualLabel = "id";
                                                    entries = new org.openapis.openapi.models.shared.Entry[]{{
                                                        add(new Entry() {{
                                                            itemCount = "velit";
                                                            predictedLabel = "culpa";
                                                        }}),
                                                        add(new Entry() {{
                                                            itemCount = "est";
                                                            predictedLabel = "recusandae";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new Row() {{
                                                    actualLabel = "totam";
                                                    entries = new org.openapis.openapi.models.shared.Entry[]{{
                                                        add(new Entry() {{
                                                            itemCount = "vel";
                                                            predictedLabel = "ducimus";
                                                        }}),
                                                        add(new Entry() {{
                                                            itemCount = "quos";
                                                            predictedLabel = "vel";
                                                        }}),
                                                        add(new Entry() {{
                                                            itemCount = "labore";
                                                            predictedLabel = "possimus";
                                                        }}),
                                                        add(new Entry() {{
                                                            itemCount = "facilis";
                                                            predictedLabel = "cum";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new Row() {{
                                                    actualLabel = "commodi";
                                                    entries = new org.openapis.openapi.models.shared.Entry[]{{
                                                        add(new Entry() {{
                                                            itemCount = "corporis";
                                                            predictedLabel = "reiciendis";
                                                        }}),
                                                        add(new Entry() {{
                                                            itemCount = "assumenda";
                                                            predictedLabel = "nemo";
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                        }}),
                                    }};
                                }};
                                rankingMetrics = new RankingMetrics() {{
                                    averageRank = 9249.67;
                                    meanAveragePrecision = 3975.33;
                                    meanSquaredError = 460.07;
                                    normalizedDiscountedCumulativeGain = 7386.83;
                                }};
                                regressionMetrics = new RegressionMetrics() {{
                                    meanAbsoluteError = 2326.27;
                                    meanSquaredError = 4490.83;
                                    meanSquaredLogError = 3485.19;
                                    medianAbsoluteError = 9372.85;
                                    rSquared = 8149.67;
                                }};
                            }};
                            modelLevelGlobalExplanation = new GlobalExplanation() {{
                                classLabel = "numquam";
                                explanations = new org.openapis.openapi.models.shared.Explanation[]{{
                                    add(new Explanation() {{
                                        attribution = 3817.6;
                                        featureName = "reiciendis";
                                    }}),
                                    add(new Explanation() {{
                                        attribution = 6971.42;
                                        featureName = "saepe";
                                    }}),
                                    add(new Explanation() {{
                                        attribution = 8970.71;
                                        featureName = "dolore";
                                    }}),
                                    add(new Explanation() {{
                                        attribution = 1210.59;
                                        featureName = "asperiores";
                                    }}),
                                }};
                            }};
                            trainingOptions = new TrainingOptions() {{
                                adjustStepChanges = false;
                                autoArima = false;
                                autoArimaMaxOrder = "adipisci";
                                autoArimaMinOrder = "non";
                                batchSize = "amet";
                                boosterType = TrainingOptionsBoosterTypeEnum.BOOSTER_TYPE_UNSPECIFIED;
                                calculatePValues = false;
                                cleanSpikesAndDips = false;
                                colorSpace = TrainingOptionsColorSpaceEnum.HSV;
                                colsampleBylevel = 9509.53;
                                colsampleBynode = 8915.23;
                                colsampleBytree = 2334.2;
                                dartNormalizeType = TrainingOptionsDartNormalizeTypeEnum.TREE;
                                dataFrequency = TrainingOptionsDataFrequencyEnum.DAILY;
                                dataSplitColumn = "laboriosam";
                                dataSplitEvalFraction = 583.56;
                                dataSplitMethod = TrainingOptionsDataSplitMethodEnum.AUTO_SPLIT;
                                decomposeTimeSeries = false;
                                distanceType = TrainingOptionsDistanceTypeEnum.COSINE;
                                dropout = 1138.16;
                                earlyStop = false;
                                enableGlobalExplain = false;
                                feedbackType = TrainingOptionsFeedbackTypeEnum.EXPLICIT;
                                hiddenUnits = new String[]{{
                                    add("tempora"),
                                    add("aspernatur"),
                                    add("voluptas"),
                                }};
                                holidayRegion = TrainingOptionsHolidayRegionEnum.ES;
                                horizon = "voluptas";
                                hparamTuningObjectives = new org.openapis.openapi.models.shared.TrainingOptionsHparamTuningObjectivesEnum[]{{
                                    add(TrainingOptionsHparamTuningObjectivesEnum.ROC_AUC),
                                    add(TrainingOptionsHparamTuningObjectivesEnum.LOG_LOSS),
                                }};
                                includeDrift = false;
                                initialLearnRate = 2378.07;
                                inputLabelColumns = new String[]{{
                                    add("dolores"),
                                    add("blanditiis"),
                                    add("in"),
                                    add("dolore"),
                                }};
                                instanceWeightColumn = "aliquam";
                                integratedGradientsNumSteps = "officiis";
                                itemColumn = "temporibus";
                                kmeansInitializationColumn = "ullam";
                                kmeansInitializationMethod = TrainingOptionsKmeansInitializationMethodEnum.KMEANS_INITIALIZATION_METHOD_UNSPECIFIED;
                                l1Regularization = 7383.91;
                                l2Regularization = 5023.89;
                                labelClassWeights = new java.util.HashMap<String, Double>() {{
                                    put("hic", 2015.17);
                                    put("culpa", 5485.19);
                                    put("pariatur", 5196.43);
                                }};
                                learnRate = 9402.1;
                                learnRateStrategy = TrainingOptionsLearnRateStrategyEnum.LINE_SEARCH;
                                lossType = TrainingOptionsLossTypeEnum.MEAN_LOG_LOSS;
                                maxIterations = "sit";
                                maxParallelTrials = "rerum";
                                maxTimeSeriesLength = "sed";
                                maxTreeDepth = "reiciendis";
                                minRelativeProgress = 1318.52;
                                minSplitLoss = 9944.01;
                                minTimeSeriesLength = "facilis";
                                minTreeChildWeight = "voluptate";
                                modelUri = "expedita";
                                nonSeasonalOrder = new ArimaOrder() {{
                                    d = "ab";
                                    p = "iste";
                                    q = "dolore";
                                }};
                                numClusters = "laborum";
                                numFactors = "sed";
                                numParallelTree = "in";
                                numTrials = "commodi";
                                optimizationStrategy = TrainingOptionsOptimizationStrategyEnum.NORMAL_EQUATION;
                                preserveInputStructs = false;
                                sampledShapleyNumPaths = "explicabo";
                                subsample = 3783.26;
                                tfVersion = "unde";
                                timeSeriesDataColumn = "architecto";
                                timeSeriesIdColumn = "suscipit";
                                timeSeriesIdColumns = new String[]{{
                                    add("debitis"),
                                    add("illo"),
                                    add("reiciendis"),
                                    add("perferendis"),
                                }};
                                timeSeriesLengthFraction = 5468.85;
                                timeSeriesTimestampColumn = "maiores";
                                treeMethod = TrainingOptionsTreeMethodEnum.AUTO;
                                trendSmoothingWindowSize = "sed";
                                userColumn = "provident";
                                walsAlpha = 2587.02;
                                warmStart = false;
                                xgboostVersion = "necessitatibus";
                            }};
                            vertexAiModelId = "ipsum";
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "ea";
                key = "occaecati";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                userIp = "tempora";
            }};            

            BigqueryModelsPatchResponse res = sdk.models.bigqueryModelsPatch(req, new BigqueryModelsPatchSecurity() {{
                option1 = new BigqueryModelsPatchSecurityOption1("tempora", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.model != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
