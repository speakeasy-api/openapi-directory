# Models

### Available Operations

* [BigqueryModelsDelete](#bigquerymodelsdelete) - Deletes the model specified by modelId from the dataset.
* [BigqueryModelsGet](#bigquerymodelsget) - Gets the specified model resource by model ID.
* [BigqueryModelsList](#bigquerymodelslist) - Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
* [BigqueryModelsPatch](#bigquerymodelspatch) - Patch specific fields in the specified model.

## BigqueryModelsDelete

Deletes the model specified by modelId from the dataset.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Models.BigqueryModelsDelete(ctx, operations.BigqueryModelsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "ratione",
        Fields: sdk.String("ex"),
        Key: sdk.String("laudantium"),
        ModelID: "dicta",
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "maiores",
        QuotaUser: sdk.String("quasi"),
        UserIP: sdk.String("ex"),
    }, operations.BigqueryModelsDeleteSecurity{
        Option1: &operations.BigqueryModelsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## BigqueryModelsGet

Gets the specified model resource by model ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Models.BigqueryModelsGet(ctx, operations.BigqueryModelsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "nulla",
        Fields: sdk.String("excepturi"),
        Key: sdk.String("voluptatibus"),
        ModelID: "nostrum",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quisquam",
        QuotaUser: sdk.String("saepe"),
        UserIP: sdk.String("ea"),
    }, operations.BigqueryModelsGetSecurity{
        Option1: &operations.BigqueryModelsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Model != nil {
        // handle response
    }
}
```

## BigqueryModelsList

Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Models.BigqueryModelsList(ctx, operations.BigqueryModelsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "impedit",
        Fields: sdk.String("corporis"),
        Key: sdk.String("veniam"),
        MaxResults: sdk.Int64(399499),
        OauthToken: sdk.String("inventore"),
        PageToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "ea",
        QuotaUser: sdk.String("quo"),
        UserIP: sdk.String("consectetur"),
    }, operations.BigqueryModelsListSecurity{
        Option1: &operations.BigqueryModelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelsResponse != nil {
        // handle response
    }
}
```

## BigqueryModelsPatch

Patch specific fields in the specified model.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Models.BigqueryModelsPatch(ctx, operations.BigqueryModelsPatchRequest{
        ModelInput: &shared.ModelInput{
            BestTrialID: sdk.String("recusandae"),
            Description: sdk.String("aspernatur"),
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                KmsKeyName: sdk.String("minima"),
            },
            ExpirationTime: sdk.String("eaque"),
            FriendlyName: sdk.String("a"),
            HparamSearchSpaces: &shared.HparamSearchSpaces{
                ActivationFn: &shared.StringHparamSearchSpace{
                    Candidates: []string{
                        "aut",
                        "aut",
                        "deleniti",
                    },
                },
                BatchSize: &shared.IntHparamSearchSpace{
                    Candidates: &shared.IntCandidates{
                        Candidates: []string{
                            "aliquam",
                            "fugit",
                            "accusamus",
                            "inventore",
                        },
                    },
                    Range: &shared.IntRange{
                        Max: sdk.String("non"),
                        Min: sdk.String("et"),
                    },
                },
                BoosterType: &shared.StringHparamSearchSpace{
                    Candidates: []string{
                        "laborum",
                        "placeat",
                        "velit",
                    },
                },
                ColsampleBylevel: &shared.DoubleHparamSearchSpace{
                    Candidates: &shared.DoubleCandidates{
                        Candidates: []float64{
                            4205.39,
                            7521.35,
                        },
                    },
                    Range: &shared.DoubleRange{
                        Max: sdk.Float64(5573.69),
                        Min: sdk.Float64(8296.03),
                    },
                },
                ColsampleBynode: &shared.DoubleHparamSearchSpace{
                    Candidates: &shared.DoubleCandidates{
                        Candidates: []float64{
                            3790.34,
                            7270.44,
                            965.49,
                            2703.28,
                        },
                    },
                    Range: &shared.DoubleRange{
                        Max: sdk.Float64(2561.39),
                        Min: sdk.Float64(1314.82),
                    },
                },
                ColsampleBytree: &shared.DoubleHparamSearchSpace{
                    Candidates: &shared.DoubleCandidates{
                        Candidates: []float64{
                            553.74,
                            4764.77,
                            3015.98,
                        },
                    },
                    Range: &shared.DoubleRange{
                        Max: sdk.Float64(4879.35),
                        Min: sdk.Float64(2621.18),
                    },
                },
                DartNormalizeType: &shared.StringHparamSearchSpace{
                    Candidates: []string{
                        "esse",
                        "rem",
                    },
                },
                Dropout: &shared.DoubleHparamSearchSpace{
                    Candidates: &shared.DoubleCandidates{
                        Candidates: []float64{
                            4420.15,
                            6956.26,
                            8526.35,
                        },
                    },
                    Range: &shared.DoubleRange{
                        Max: sdk.Float64(2835.19),
                        Min: sdk.Float64(4334.39),
                    },
                },
                HiddenUnits: &shared.IntArrayHparamSearchSpace{
                    Candidates: []shared.IntArray{
                        shared.IntArray{
                            Elements: []string{
                                "eos",
                                "praesentium",
                                "quisquam",
                                "veritatis",
                            },
                        },
                        shared.IntArray{
                            Elements: []string{
                                "id",
                            },
                        },
                    },
                },
                L1Reg: &shared.DoubleHparamSearchSpace{
                    Candidates: &shared.DoubleCandidates{
                        Candidates: []float64{
                            2065.94,
                            7786.96,
                            8472.76,
                        },
                    },
                    Range: &shared.DoubleRange{
                        Max: sdk.Float64(7774.08),
                        Min: sdk.Float64(6813.59),
                    },
                },
                L2Reg: &shared.DoubleHparamSearchSpace{
                    Candidates: &shared.DoubleCandidates{
                        Candidates: []float64{
                            1783.67,
                            3738.13,
                        },
                    },
                    Range: &shared.DoubleRange{
                        Max: sdk.Float64(698.59),
                        Min: sdk.Float64(5876),
                    },
                },
                LearnRate: &shared.DoubleHparamSearchSpace{
                    Candidates: &shared.DoubleCandidates{
                        Candidates: []float64{
                            2728.22,
                        },
                    },
                    Range: &shared.DoubleRange{
                        Max: sdk.Float64(8920.5),
                        Min: sdk.Float64(3708.53),
                    },
                },
                MaxTreeDepth: &shared.IntHparamSearchSpace{
                    Candidates: &shared.IntCandidates{
                        Candidates: []string{
                            "sequi",
                        },
                    },
                    Range: &shared.IntRange{
                        Max: sdk.String("quo"),
                        Min: sdk.String("esse"),
                    },
                },
                MinSplitLoss: &shared.DoubleHparamSearchSpace{
                    Candidates: &shared.DoubleCandidates{
                        Candidates: []float64{
                            446.12,
                            7151.79,
                            7997.96,
                            4908.19,
                        },
                    },
                    Range: &shared.DoubleRange{
                        Max: sdk.Float64(769.56),
                        Min: sdk.Float64(4694.98),
                    },
                },
                MinTreeChildWeight: &shared.IntHparamSearchSpace{
                    Candidates: &shared.IntCandidates{
                        Candidates: []string{
                            "accusamus",
                            "aliquam",
                            "odio",
                        },
                    },
                    Range: &shared.IntRange{
                        Max: sdk.String("occaecati"),
                        Min: sdk.String("commodi"),
                    },
                },
                NumClusters: &shared.IntHparamSearchSpace{
                    Candidates: &shared.IntCandidates{
                        Candidates: []string{
                            "dolores",
                            "deserunt",
                            "molestiae",
                            "accusantium",
                        },
                    },
                    Range: &shared.IntRange{
                        Max: sdk.String("porro"),
                        Min: sdk.String("eum"),
                    },
                },
                NumFactors: &shared.IntHparamSearchSpace{
                    Candidates: &shared.IntCandidates{
                        Candidates: []string{
                            "praesentium",
                            "consequuntur",
                            "deleniti",
                        },
                    },
                    Range: &shared.IntRange{
                        Max: sdk.String("fugit"),
                        Min: sdk.String("fuga"),
                    },
                },
                NumParallelTree: &shared.IntHparamSearchSpace{
                    Candidates: &shared.IntCandidates{
                        Candidates: []string{
                            "incidunt",
                            "atque",
                            "explicabo",
                        },
                    },
                    Range: &shared.IntRange{
                        Max: sdk.String("minima"),
                        Min: sdk.String("nisi"),
                    },
                },
                Optimizer: &shared.StringHparamSearchSpace{
                    Candidates: []string{
                        "sapiente",
                    },
                },
                Subsample: &shared.DoubleHparamSearchSpace{
                    Candidates: &shared.DoubleCandidates{
                        Candidates: []float64{
                            1871.31,
                        },
                    },
                    Range: &shared.DoubleRange{
                        Max: sdk.Float64(1294.12),
                        Min: sdk.Float64(9039.84),
                    },
                },
                TreeMethod: &shared.StringHparamSearchSpace{
                    Candidates: []string{
                        "atque",
                        "et",
                        "esse",
                    },
                },
                WalsAlpha: &shared.DoubleHparamSearchSpace{
                    Candidates: &shared.DoubleCandidates{
                        Candidates: []float64{
                            8820.42,
                            829.71,
                            4586.04,
                            8003.79,
                        },
                    },
                    Range: &shared.DoubleRange{
                        Max: sdk.Float64(7241.68),
                        Min: sdk.Float64(8771.31),
                    },
                },
            },
            Labels: map[string]string{
                "quasi": "saepe",
                "vel": "harum",
            },
            ModelReference: &shared.ModelReference{
                DatasetID: sdk.String("molestiae"),
                ModelID: sdk.String("rerum"),
                ProjectID: sdk.String("occaecati"),
            },
            TrainingRuns: []shared.TrainingRunInput{
                shared.TrainingRunInput{
                    DataSplitResult: &shared.DataSplitResult{
                        EvaluationTable: &shared.TableReference{
                            DatasetID: sdk.String("distinctio"),
                            ProjectID: sdk.String("eligendi"),
                            TableID: sdk.String("sit"),
                        },
                        TestTable: &shared.TableReference{
                            DatasetID: sdk.String("culpa"),
                            ProjectID: sdk.String("tempore"),
                            TableID: sdk.String("adipisci"),
                        },
                        TrainingTable: &shared.TableReference{
                            DatasetID: sdk.String("cumque"),
                            ProjectID: sdk.String("consequuntur"),
                            TableID: sdk.String("consequatur"),
                        },
                    },
                    EvaluationMetrics: &shared.EvaluationMetrics{
                        ArimaForecastingMetrics: &shared.ArimaForecastingMetrics{
                            ArimaFittingMetrics: []shared.ArimaFittingMetrics{
                                shared.ArimaFittingMetrics{
                                    Aic: sdk.Float64(3082.86),
                                    LogLikelihood: sdk.Float64(9591.67),
                                    Variance: sdk.Float64(2328.65),
                                },
                                shared.ArimaFittingMetrics{
                                    Aic: sdk.Float64(4581.39),
                                    LogLikelihood: sdk.Float64(5034.27),
                                    Variance: sdk.Float64(5909.84),
                                },
                                shared.ArimaFittingMetrics{
                                    Aic: sdk.Float64(9537.22),
                                    LogLikelihood: sdk.Float64(8577.23),
                                    Variance: sdk.Float64(5578.11),
                                },
                                shared.ArimaFittingMetrics{
                                    Aic: sdk.Float64(4572.23),
                                    LogLikelihood: sdk.Float64(974.68),
                                    Variance: sdk.Float64(9518.75),
                                },
                            },
                            ArimaSingleModelForecastingMetrics: []shared.ArimaSingleModelForecastingMetrics{
                                shared.ArimaSingleModelForecastingMetrics{
                                    ArimaFittingMetrics: &shared.ArimaFittingMetrics{
                                        Aic: sdk.Float64(5757.51),
                                        LogLikelihood: sdk.Float64(8630.23),
                                        Variance: sdk.Float64(8207.67),
                                    },
                                    HasDrift: sdk.Bool(false),
                                    HasHolidayEffect: sdk.Bool(false),
                                    HasSpikesAndDips: sdk.Bool(false),
                                    HasStepChanges: sdk.Bool(false),
                                    NonSeasonalOrder: &shared.ArimaOrder{
                                        D: sdk.String("quia"),
                                        P: sdk.String("eveniet"),
                                        Q: sdk.String("asperiores"),
                                    },
                                    SeasonalPeriods: []shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum{
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumSeasonalPeriodTypeUnspecified,
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumNoSeasonality,
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumSeasonalPeriodTypeUnspecified,
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumMonthly,
                                    },
                                    TimeSeriesID: sdk.String("culpa"),
                                    TimeSeriesIds: []string{
                                        "tenetur",
                                        "quae",
                                    },
                                },
                                shared.ArimaSingleModelForecastingMetrics{
                                    ArimaFittingMetrics: &shared.ArimaFittingMetrics{
                                        Aic: sdk.Float64(9367.47),
                                        LogLikelihood: sdk.Float64(4240.32),
                                        Variance: sdk.Float64(4473.78),
                                    },
                                    HasDrift: sdk.Bool(false),
                                    HasHolidayEffect: sdk.Bool(false),
                                    HasSpikesAndDips: sdk.Bool(false),
                                    HasStepChanges: sdk.Bool(false),
                                    NonSeasonalOrder: &shared.ArimaOrder{
                                        D: sdk.String("eius"),
                                        P: sdk.String("libero"),
                                        Q: sdk.String("illum"),
                                    },
                                    SeasonalPeriods: []shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum{
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumSeasonalPeriodTypeUnspecified,
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumDaily,
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumYearly,
                                    },
                                    TimeSeriesID: sdk.String("dicta"),
                                    TimeSeriesIds: []string{
                                        "reprehenderit",
                                        "ullam",
                                    },
                                },
                                shared.ArimaSingleModelForecastingMetrics{
                                    ArimaFittingMetrics: &shared.ArimaFittingMetrics{
                                        Aic: sdk.Float64(3917.74),
                                        LogLikelihood: sdk.Float64(163.28),
                                        Variance: sdk.Float64(5318.49),
                                    },
                                    HasDrift: sdk.Bool(false),
                                    HasHolidayEffect: sdk.Bool(false),
                                    HasSpikesAndDips: sdk.Bool(false),
                                    HasStepChanges: sdk.Bool(false),
                                    NonSeasonalOrder: &shared.ArimaOrder{
                                        D: sdk.String("qui"),
                                        P: sdk.String("quibusdam"),
                                        Q: sdk.String("ex"),
                                    },
                                    SeasonalPeriods: []shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum{
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumYearly,
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumMonthly,
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumSeasonalPeriodTypeUnspecified,
                                    },
                                    TimeSeriesID: sdk.String("omnis"),
                                    TimeSeriesIds: []string{
                                        "quasi",
                                        "at",
                                        "et",
                                        "voluptate",
                                    },
                                },
                            },
                            HasDrift: []bool{
                                false,
                            },
                            NonSeasonalOrder: []shared.ArimaOrder{
                                shared.ArimaOrder{
                                    D: sdk.String("veritatis"),
                                    P: sdk.String("consectetur"),
                                    Q: sdk.String("adipisci"),
                                },
                                shared.ArimaOrder{
                                    D: sdk.String("iste"),
                                    P: sdk.String("temporibus"),
                                    Q: sdk.String("accusantium"),
                                },
                            },
                            SeasonalPeriods: []shared.ArimaForecastingMetricsSeasonalPeriodsEnum{
                                shared.ArimaForecastingMetricsSeasonalPeriodsEnumSeasonalPeriodTypeUnspecified,
                                shared.ArimaForecastingMetricsSeasonalPeriodsEnumWeekly,
                                shared.ArimaForecastingMetricsSeasonalPeriodsEnumWeekly,
                            },
                            TimeSeriesID: []string{
                                "ab",
                                "corrupti",
                                "non",
                            },
                        },
                        BinaryClassificationMetrics: &shared.BinaryClassificationMetrics{
                            AggregateClassificationMetrics: &shared.AggregateClassificationMetrics{
                                Accuracy: sdk.Float64(324.65),
                                F1Score: sdk.Float64(2211.61),
                                LogLoss: sdk.Float64(5801.52),
                                Precision: sdk.Float64(2531.91),
                                Recall: sdk.Float64(7710.89),
                                RocAuc: sdk.Float64(1310.55),
                                Threshold: sdk.Float64(3762.26),
                            },
                            BinaryConfusionMatrixList: []shared.BinaryConfusionMatrix{
                                shared.BinaryConfusionMatrix{
                                    Accuracy: sdk.Float64(4910.25),
                                    F1Score: sdk.Float64(1154.84),
                                    FalseNegatives: sdk.String("maiores"),
                                    FalsePositives: sdk.String("natus"),
                                    PositiveClassThreshold: sdk.Float64(2446.51),
                                    Precision: sdk.Float64(9742.57),
                                    Recall: sdk.Float64(3743.23),
                                    TrueNegatives: sdk.String("asperiores"),
                                    TruePositives: sdk.String("aperiam"),
                                },
                            },
                            NegativeLabel: sdk.String("ea"),
                            PositiveLabel: sdk.String("quaerat"),
                        },
                        ClusteringMetrics: &shared.ClusteringMetrics{
                            Clusters: []shared.Cluster{
                                shared.Cluster{
                                    CentroidID: sdk.String("repellendus"),
                                    Count: sdk.String("officia"),
                                    FeatureValues: []shared.FeatureValue{
                                        shared.FeatureValue{
                                            CategoricalValue: &shared.CategoricalValue{
                                                CategoryCounts: []shared.CategoryCount{
                                                    shared.CategoryCount{
                                                        Category: sdk.String("officia"),
                                                        Count: sdk.String("asperiores"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("nemo"),
                                                        Count: sdk.String("quae"),
                                                    },
                                                },
                                            },
                                            FeatureColumn: sdk.String("quaerat"),
                                            NumericalValue: sdk.Float64(7832.35),
                                        },
                                        shared.FeatureValue{
                                            CategoricalValue: &shared.CategoricalValue{
                                                CategoryCounts: []shared.CategoryCount{
                                                    shared.CategoryCount{
                                                        Category: sdk.String("labore"),
                                                        Count: sdk.String("ab"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("adipisci"),
                                                        Count: sdk.String("fuga"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("id"),
                                                        Count: sdk.String("suscipit"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("velit"),
                                                        Count: sdk.String("culpa"),
                                                    },
                                                },
                                            },
                                            FeatureColumn: sdk.String("est"),
                                            NumericalValue: sdk.Float64(9268.8),
                                        },
                                        shared.FeatureValue{
                                            CategoricalValue: &shared.CategoricalValue{
                                                CategoryCounts: []shared.CategoryCount{
                                                    shared.CategoryCount{
                                                        Category: sdk.String("fugiat"),
                                                        Count: sdk.String("vel"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("ducimus"),
                                                        Count: sdk.String("quos"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("vel"),
                                                        Count: sdk.String("labore"),
                                                    },
                                                },
                                            },
                                            FeatureColumn: sdk.String("possimus"),
                                            NumericalValue: sdk.Float64(7065.75),
                                        },
                                        shared.FeatureValue{
                                            CategoricalValue: &shared.CategoricalValue{
                                                CategoryCounts: []shared.CategoryCount{
                                                    shared.CategoryCount{
                                                        Category: sdk.String("commodi"),
                                                        Count: sdk.String("in"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("corporis"),
                                                        Count: sdk.String("reiciendis"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("assumenda"),
                                                        Count: sdk.String("nemo"),
                                                    },
                                                },
                                            },
                                            FeatureColumn: sdk.String("recusandae"),
                                            NumericalValue: sdk.Float64(3975.33),
                                        },
                                    },
                                },
                            },
                            DaviesBouldinIndex: sdk.Float64(460.07),
                            MeanSquaredDistance: sdk.Float64(7386.83),
                        },
                        DimensionalityReductionMetrics: &shared.DimensionalityReductionMetrics{
                            TotalExplainedVarianceRatio: sdk.Float64(2326.27),
                        },
                        MultiClassClassificationMetrics: &shared.MultiClassClassificationMetrics{
                            AggregateClassificationMetrics: &shared.AggregateClassificationMetrics{
                                Accuracy: sdk.Float64(4490.83),
                                F1Score: sdk.Float64(3485.19),
                                LogLoss: sdk.Float64(9372.85),
                                Precision: sdk.Float64(8149.67),
                                Recall: sdk.Float64(2572.33),
                                RocAuc: sdk.Float64(9854.92),
                                Threshold: sdk.Float64(3817.6),
                            },
                            ConfusionMatrixList: []shared.ConfusionMatrix{
                                shared.ConfusionMatrix{
                                    ConfidenceThreshold: sdk.Float64(6971.42),
                                    Rows: []shared.Row{
                                        shared.Row{
                                            ActualLabel: sdk.String("necessitatibus"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("sunt"),
                                                    PredictedLabel: sdk.String("asperiores"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("adipisci"),
                                                    PredictedLabel: sdk.String("non"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            ActualLabel: sdk.String("amet"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("dignissimos"),
                                                    PredictedLabel: sdk.String("a"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            ActualLabel: sdk.String("debitis"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("corporis"),
                                                    PredictedLabel: sdk.String("harum"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            ActualLabel: sdk.String("laboriosam"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("voluptates"),
                                                    PredictedLabel: sdk.String("libero"),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.ConfusionMatrix{
                                    ConfidenceThreshold: sdk.Float64(1138.16),
                                    Rows: []shared.Row{
                                        shared.Row{
                                            ActualLabel: sdk.String("similique"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("aspernatur"),
                                                    PredictedLabel: sdk.String("voluptas"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("voluptas"),
                                                    PredictedLabel: sdk.String("voluptas"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            ActualLabel: sdk.String("minima"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("dolorum"),
                                                    PredictedLabel: sdk.String("adipisci"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("minus"),
                                                    PredictedLabel: sdk.String("dolores"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("blanditiis"),
                                                    PredictedLabel: sdk.String("in"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            ActualLabel: sdk.String("dolore"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("officiis"),
                                                    PredictedLabel: sdk.String("temporibus"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("ullam"),
                                                    PredictedLabel: sdk.String("adipisci"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            ActualLabel: sdk.String("cum"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("quas"),
                                                    PredictedLabel: sdk.String("hic"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("nesciunt"),
                                                    PredictedLabel: sdk.String("culpa"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("corrupti"),
                                                    PredictedLabel: sdk.String("pariatur"),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.ConfusionMatrix{
                                    ConfidenceThreshold: sdk.Float64(5196.43),
                                    Rows: []shared.Row{
                                        shared.Row{
                                            ActualLabel: sdk.String("exercitationem"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("sit"),
                                                    PredictedLabel: sdk.String("rerum"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("sed"),
                                                    PredictedLabel: sdk.String("reiciendis"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("explicabo"),
                                                    PredictedLabel: sdk.String("asperiores"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("facilis"),
                                                    PredictedLabel: sdk.String("voluptate"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            ActualLabel: sdk.String("expedita"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("iste"),
                                                    PredictedLabel: sdk.String("dolore"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            ActualLabel: sdk.String("laborum"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("in"),
                                                    PredictedLabel: sdk.String("commodi"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            ActualLabel: sdk.String("quidem"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("voluptas"),
                                                    PredictedLabel: sdk.String("unde"),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.ConfusionMatrix{
                                    ConfidenceThreshold: sdk.Float64(1000.32),
                                    Rows: []shared.Row{
                                        shared.Row{
                                            ActualLabel: sdk.String("sapiente"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("illo"),
                                                    PredictedLabel: sdk.String("reiciendis"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("perferendis"),
                                                    PredictedLabel: sdk.String("corrupti"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("maiores"),
                                                    PredictedLabel: sdk.String("incidunt"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("sed"),
                                                    PredictedLabel: sdk.String("provident"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            ActualLabel: sdk.String("eius"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("ipsum"),
                                                    PredictedLabel: sdk.String("ea"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("occaecati"),
                                                    PredictedLabel: sdk.String("quos"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("voluptatibus"),
                                                    PredictedLabel: sdk.String("tempora"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("tempora"),
                                                    PredictedLabel: sdk.String("voluptate"),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        RankingMetrics: &shared.RankingMetrics{
                            AverageRank: sdk.Float64(9700.76),
                            MeanAveragePrecision: sdk.Float64(4017.13),
                            MeanSquaredError: sdk.Float64(254.97),
                            NormalizedDiscountedCumulativeGain: sdk.Float64(2484.13),
                        },
                        RegressionMetrics: &shared.RegressionMetrics{
                            MeanAbsoluteError: sdk.Float64(8880.44),
                            MeanSquaredError: sdk.Float64(5058.66),
                            MeanSquaredLogError: sdk.Float64(7086.09),
                            MedianAbsoluteError: sdk.Float64(3103.81),
                            RSquared: sdk.Float64(2777.73),
                        },
                    },
                    ModelLevelGlobalExplanation: &shared.GlobalExplanation{
                        ClassLabel: sdk.String("ipsam"),
                        Explanations: []shared.Explanation{
                            shared.Explanation{
                                Attribution: sdk.Float64(5249.7),
                                FeatureName: sdk.String("sit"),
                            },
                            shared.Explanation{
                                Attribution: sdk.Float64(7505.95),
                                FeatureName: sdk.String("error"),
                            },
                            shared.Explanation{
                                Attribution: sdk.Float64(3335.07),
                                FeatureName: sdk.String("minima"),
                            },
                            shared.Explanation{
                                Attribution: sdk.Float64(9241.59),
                                FeatureName: sdk.String("reiciendis"),
                            },
                        },
                    },
                    TrainingOptions: &shared.TrainingOptions{
                        AdjustStepChanges: sdk.Bool(false),
                        AutoArima: sdk.Bool(false),
                        AutoArimaMaxOrder: sdk.String("nulla"),
                        AutoArimaMinOrder: sdk.String("magni"),
                        BatchSize: sdk.String("aperiam"),
                        BoosterType: shared.TrainingOptionsBoosterTypeEnumDart.ToPointer(),
                        CalculatePValues: sdk.Bool(false),
                        CleanSpikesAndDips: sdk.Bool(false),
                        ColorSpace: shared.TrainingOptionsColorSpaceEnumRgb.ToPointer(),
                        ColsampleBylevel: sdk.Float64(3299.35),
                        ColsampleBynode: sdk.Float64(4461.35),
                        ColsampleBytree: sdk.Float64(8892.34),
                        DartNormalizeType: shared.TrainingOptionsDartNormalizeTypeEnumDartNormalizeTypeUnspecified.ToPointer(),
                        DataFrequency: shared.TrainingOptionsDataFrequencyEnumMonthly.ToPointer(),
                        DataSplitColumn: sdk.String("exercitationem"),
                        DataSplitEvalFraction: sdk.Float64(5106.29),
                        DataSplitMethod: shared.TrainingOptionsDataSplitMethodEnumNoSplit.ToPointer(),
                        DecomposeTimeSeries: sdk.Bool(false),
                        DistanceType: shared.TrainingOptionsDistanceTypeEnumEuclidean.ToPointer(),
                        Dropout: sdk.Float64(6805.15),
                        EarlyStop: sdk.Bool(false),
                        EnableGlobalExplain: sdk.Bool(false),
                        FeedbackType: shared.TrainingOptionsFeedbackTypeEnumImplicit.ToPointer(),
                        HiddenUnits: []string{
                            "hic",
                            "expedita",
                            "debitis",
                        },
                        HolidayRegion: shared.TrainingOptionsHolidayRegionEnumCl.ToPointer(),
                        Horizon: sdk.String("dolorum"),
                        HparamTuningObjectives: []shared.TrainingOptionsHparamTuningObjectivesEnum{
                            shared.TrainingOptionsHparamTuningObjectivesEnumF1Score,
                            shared.TrainingOptionsHparamTuningObjectivesEnumLogLoss,
                        },
                        IncludeDrift: sdk.Bool(false),
                        InitialLearnRate: sdk.Float64(5483.61),
                        InputLabelColumns: []string{
                            "tempora",
                            "atque",
                            "fugit",
                            "ut",
                        },
                        InstanceWeightColumn: sdk.String("fugiat"),
                        IntegratedGradientsNumSteps: sdk.String("voluptatem"),
                        ItemColumn: sdk.String("culpa"),
                        KmeansInitializationColumn: sdk.String("expedita"),
                        KmeansInitializationMethod: shared.TrainingOptionsKmeansInitializationMethodEnumRandom.ToPointer(),
                        L1Regularization: sdk.Float64(78.84),
                        L2Regularization: sdk.Float64(4602.2),
                        LabelClassWeights: map[string]float64{
                            "sit": 5305.37,
                            "quas": 9221.12,
                        },
                        LearnRate: sdk.Float64(3611.51),
                        LearnRateStrategy: shared.TrainingOptionsLearnRateStrategyEnumLearnRateStrategyUnspecified.ToPointer(),
                        LossType: shared.TrainingOptionsLossTypeEnumMeanSquaredLoss.ToPointer(),
                        MaxIterations: sdk.String("ex"),
                        MaxParallelTrials: sdk.String("sed"),
                        MaxTimeSeriesLength: sdk.String("sit"),
                        MaxTreeDepth: sdk.String("vel"),
                        MinRelativeProgress: sdk.Float64(3426.11),
                        MinSplitLoss: sdk.Float64(9061.72),
                        MinTimeSeriesLength: sdk.String("error"),
                        MinTreeChildWeight: sdk.String("consequatur"),
                        ModelURI: sdk.String("incidunt"),
                        NonSeasonalOrder: &shared.ArimaOrder{
                            D: sdk.String("reiciendis"),
                            P: sdk.String("dolorem"),
                            Q: sdk.String("harum"),
                        },
                        NumClusters: sdk.String("dicta"),
                        NumFactors: sdk.String("architecto"),
                        NumParallelTree: sdk.String("occaecati"),
                        NumTrials: sdk.String("labore"),
                        OptimizationStrategy: shared.TrainingOptionsOptimizationStrategyEnumNormalEquation.ToPointer(),
                        PreserveInputStructs: sdk.Bool(false),
                        SampledShapleyNumPaths: sdk.String("atque"),
                        Subsample: sdk.Float64(6719.57),
                        TfVersion: sdk.String("nam"),
                        TimeSeriesDataColumn: sdk.String("tenetur"),
                        TimeSeriesIDColumn: sdk.String("laboriosam"),
                        TimeSeriesIDColumns: []string{
                            "amet",
                        },
                        TimeSeriesLengthFraction: sdk.Float64(6471.97),
                        TimeSeriesTimestampColumn: sdk.String("voluptate"),
                        TreeMethod: shared.TrainingOptionsTreeMethodEnumApprox.ToPointer(),
                        TrendSmoothingWindowSize: sdk.String("reiciendis"),
                        UserColumn: sdk.String("provident"),
                        WalsAlpha: sdk.Float64(8338.19),
                        WarmStart: sdk.Bool(false),
                        XgboostVersion: sdk.String("delectus"),
                    },
                    VertexAiModelID: sdk.String("voluptates"),
                },
                shared.TrainingRunInput{
                    DataSplitResult: &shared.DataSplitResult{
                        EvaluationTable: &shared.TableReference{
                            DatasetID: sdk.String("perferendis"),
                            ProjectID: sdk.String("est"),
                            TableID: sdk.String("quidem"),
                        },
                        TestTable: &shared.TableReference{
                            DatasetID: sdk.String("reprehenderit"),
                            ProjectID: sdk.String("facere"),
                            TableID: sdk.String("fuga"),
                        },
                        TrainingTable: &shared.TableReference{
                            DatasetID: sdk.String("praesentium"),
                            ProjectID: sdk.String("mollitia"),
                            TableID: sdk.String("veniam"),
                        },
                    },
                    EvaluationMetrics: &shared.EvaluationMetrics{
                        ArimaForecastingMetrics: &shared.ArimaForecastingMetrics{
                            ArimaFittingMetrics: []shared.ArimaFittingMetrics{
                                shared.ArimaFittingMetrics{
                                    Aic: sdk.Float64(7908.4),
                                    LogLikelihood: sdk.Float64(9195.32),
                                    Variance: sdk.Float64(972.43),
                                },
                            },
                            ArimaSingleModelForecastingMetrics: []shared.ArimaSingleModelForecastingMetrics{
                                shared.ArimaSingleModelForecastingMetrics{
                                    ArimaFittingMetrics: &shared.ArimaFittingMetrics{
                                        Aic: sdk.Float64(4420.36),
                                        LogLikelihood: sdk.Float64(9911.42),
                                        Variance: sdk.Float64(5199.52),
                                    },
                                    HasDrift: sdk.Bool(false),
                                    HasHolidayEffect: sdk.Bool(false),
                                    HasSpikesAndDips: sdk.Bool(false),
                                    HasStepChanges: sdk.Bool(false),
                                    NonSeasonalOrder: &shared.ArimaOrder{
                                        D: sdk.String("suscipit"),
                                        P: sdk.String("quidem"),
                                        Q: sdk.String("maxime"),
                                    },
                                    SeasonalPeriods: []shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum{
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumWeekly,
                                    },
                                    TimeSeriesID: sdk.String("amet"),
                                    TimeSeriesIds: []string{
                                        "ea",
                                        "atque",
                                        "error",
                                        "officiis",
                                    },
                                },
                                shared.ArimaSingleModelForecastingMetrics{
                                    ArimaFittingMetrics: &shared.ArimaFittingMetrics{
                                        Aic: sdk.Float64(8869.61),
                                        LogLikelihood: sdk.Float64(8801.07),
                                        Variance: sdk.Float64(6188.26),
                                    },
                                    HasDrift: sdk.Bool(false),
                                    HasHolidayEffect: sdk.Bool(false),
                                    HasSpikesAndDips: sdk.Bool(false),
                                    HasStepChanges: sdk.Bool(false),
                                    NonSeasonalOrder: &shared.ArimaOrder{
                                        D: sdk.String("minima"),
                                        P: sdk.String("aspernatur"),
                                        Q: sdk.String("ex"),
                                    },
                                    SeasonalPeriods: []shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum{
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumWeekly,
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumYearly,
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumMonthly,
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumWeekly,
                                    },
                                    TimeSeriesID: sdk.String("suscipit"),
                                    TimeSeriesIds: []string{
                                        "atque",
                                        "atque",
                                        "sunt",
                                        "recusandae",
                                    },
                                },
                                shared.ArimaSingleModelForecastingMetrics{
                                    ArimaFittingMetrics: &shared.ArimaFittingMetrics{
                                        Aic: sdk.Float64(6806.97),
                                        LogLikelihood: sdk.Float64(8298.98),
                                        Variance: sdk.Float64(2871.19),
                                    },
                                    HasDrift: sdk.Bool(false),
                                    HasHolidayEffect: sdk.Bool(false),
                                    HasSpikesAndDips: sdk.Bool(false),
                                    HasStepChanges: sdk.Bool(false),
                                    NonSeasonalOrder: &shared.ArimaOrder{
                                        D: sdk.String("reiciendis"),
                                        P: sdk.String("doloremque"),
                                        Q: sdk.String("repudiandae"),
                                    },
                                    SeasonalPeriods: []shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum{
                                        shared.ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumSeasonalPeriodTypeUnspecified,
                                    },
                                    TimeSeriesID: sdk.String("beatae"),
                                    TimeSeriesIds: []string{
                                        "enim",
                                    },
                                },
                            },
                            HasDrift: []bool{
                                false,
                                false,
                            },
                            NonSeasonalOrder: []shared.ArimaOrder{
                                shared.ArimaOrder{
                                    D: sdk.String("a"),
                                    P: sdk.String("molestias"),
                                    Q: sdk.String("magnam"),
                                },
                            },
                            SeasonalPeriods: []shared.ArimaForecastingMetricsSeasonalPeriodsEnum{
                                shared.ArimaForecastingMetricsSeasonalPeriodsEnumNoSeasonality,
                                shared.ArimaForecastingMetricsSeasonalPeriodsEnumMonthly,
                                shared.ArimaForecastingMetricsSeasonalPeriodsEnumYearly,
                                shared.ArimaForecastingMetricsSeasonalPeriodsEnumMonthly,
                            },
                            TimeSeriesID: []string{
                                "adipisci",
                                "eveniet",
                            },
                        },
                        BinaryClassificationMetrics: &shared.BinaryClassificationMetrics{
                            AggregateClassificationMetrics: &shared.AggregateClassificationMetrics{
                                Accuracy: sdk.Float64(5808.87),
                                F1Score: sdk.Float64(1602.3),
                                LogLoss: sdk.Float64(1458.7),
                                Precision: sdk.Float64(6611.18),
                                Recall: sdk.Float64(3356.31),
                                RocAuc: sdk.Float64(4402.64),
                                Threshold: sdk.Float64(6255.28),
                            },
                            BinaryConfusionMatrixList: []shared.BinaryConfusionMatrix{
                                shared.BinaryConfusionMatrix{
                                    Accuracy: sdk.Float64(3613.06),
                                    F1Score: sdk.Float64(6964.63),
                                    FalseNegatives: sdk.String("eveniet"),
                                    FalsePositives: sdk.String("non"),
                                    PositiveClassThreshold: sdk.Float64(8784.93),
                                    Precision: sdk.Float64(396.15),
                                    Recall: sdk.Float64(4341.56),
                                    TrueNegatives: sdk.String("ipsa"),
                                    TruePositives: sdk.String("totam"),
                                },
                            },
                            NegativeLabel: sdk.String("quae"),
                            PositiveLabel: sdk.String("molestiae"),
                        },
                        ClusteringMetrics: &shared.ClusteringMetrics{
                            Clusters: []shared.Cluster{
                                shared.Cluster{
                                    CentroidID: sdk.String("qui"),
                                    Count: sdk.String("cum"),
                                    FeatureValues: []shared.FeatureValue{
                                        shared.FeatureValue{
                                            CategoricalValue: &shared.CategoricalValue{
                                                CategoryCounts: []shared.CategoryCount{
                                                    shared.CategoryCount{
                                                        Category: sdk.String("ratione"),
                                                        Count: sdk.String("laborum"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("distinctio"),
                                                        Count: sdk.String("voluptatum"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("rem"),
                                                        Count: sdk.String("aliquam"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("ad"),
                                                        Count: sdk.String("repellat"),
                                                    },
                                                },
                                            },
                                            FeatureColumn: sdk.String("alias"),
                                            NumericalValue: sdk.Float64(3621.89),
                                        },
                                        shared.FeatureValue{
                                            CategoricalValue: &shared.CategoricalValue{
                                                CategoryCounts: []shared.CategoryCount{
                                                    shared.CategoryCount{
                                                        Category: sdk.String("nihil"),
                                                        Count: sdk.String("mollitia"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("voluptas"),
                                                        Count: sdk.String("alias"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("maiores"),
                                                        Count: sdk.String("reiciendis"),
                                                    },
                                                },
                                            },
                                            FeatureColumn: sdk.String("dolores"),
                                            NumericalValue: sdk.Float64(6638.66),
                                        },
                                    },
                                },
                                shared.Cluster{
                                    CentroidID: sdk.String("minima"),
                                    Count: sdk.String("dolore"),
                                    FeatureValues: []shared.FeatureValue{
                                        shared.FeatureValue{
                                            CategoricalValue: &shared.CategoricalValue{
                                                CategoryCounts: []shared.CategoryCount{
                                                    shared.CategoryCount{
                                                        Category: sdk.String("quae"),
                                                        Count: sdk.String("recusandae"),
                                                    },
                                                },
                                            },
                                            FeatureColumn: sdk.String("omnis"),
                                            NumericalValue: sdk.Float64(3092.51),
                                        },
                                        shared.FeatureValue{
                                            CategoricalValue: &shared.CategoricalValue{
                                                CategoryCounts: []shared.CategoryCount{
                                                    shared.CategoryCount{
                                                        Category: sdk.String("ex"),
                                                        Count: sdk.String("ut"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("culpa"),
                                                        Count: sdk.String("adipisci"),
                                                    },
                                                },
                                            },
                                            FeatureColumn: sdk.String("debitis"),
                                            NumericalValue: sdk.Float64(5145.13),
                                        },
                                        shared.FeatureValue{
                                            CategoricalValue: &shared.CategoricalValue{
                                                CategoryCounts: []shared.CategoryCount{
                                                    shared.CategoryCount{
                                                        Category: sdk.String("nemo"),
                                                        Count: sdk.String("recusandae"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("esse"),
                                                        Count: sdk.String("provident"),
                                                    },
                                                },
                                            },
                                            FeatureColumn: sdk.String("quis"),
                                            NumericalValue: sdk.Float64(4317.85),
                                        },
                                    },
                                },
                                shared.Cluster{
                                    CentroidID: sdk.String("reiciendis"),
                                    Count: sdk.String("provident"),
                                    FeatureValues: []shared.FeatureValue{
                                        shared.FeatureValue{
                                            CategoricalValue: &shared.CategoricalValue{
                                                CategoryCounts: []shared.CategoryCount{
                                                    shared.CategoryCount{
                                                        Category: sdk.String("quasi"),
                                                        Count: sdk.String("animi"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("nostrum"),
                                                        Count: sdk.String("mollitia"),
                                                    },
                                                },
                                            },
                                            FeatureColumn: sdk.String("provident"),
                                            NumericalValue: sdk.Float64(8217.19),
                                        },
                                    },
                                },
                                shared.Cluster{
                                    CentroidID: sdk.String("animi"),
                                    Count: sdk.String("ex"),
                                    FeatureValues: []shared.FeatureValue{
                                        shared.FeatureValue{
                                            CategoricalValue: &shared.CategoricalValue{
                                                CategoryCounts: []shared.CategoryCount{
                                                    shared.CategoryCount{
                                                        Category: sdk.String("repellat"),
                                                        Count: sdk.String("doloribus"),
                                                    },
                                                },
                                            },
                                            FeatureColumn: sdk.String("ullam"),
                                            NumericalValue: sdk.Float64(4481.43),
                                        },
                                        shared.FeatureValue{
                                            CategoricalValue: &shared.CategoricalValue{
                                                CategoryCounts: []shared.CategoryCount{
                                                    shared.CategoryCount{
                                                        Category: sdk.String("earum"),
                                                        Count: sdk.String("officia"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("laborum"),
                                                        Count: sdk.String("placeat"),
                                                    },
                                                    shared.CategoryCount{
                                                        Category: sdk.String("modi"),
                                                        Count: sdk.String("voluptatibus"),
                                                    },
                                                },
                                            },
                                            FeatureColumn: sdk.String("molestias"),
                                            NumericalValue: sdk.Float64(8897.94),
                                        },
                                    },
                                },
                            },
                            DaviesBouldinIndex: sdk.Float64(9569.33),
                            MeanSquaredDistance: sdk.Float64(7645.62),
                        },
                        DimensionalityReductionMetrics: &shared.DimensionalityReductionMetrics{
                            TotalExplainedVarianceRatio: sdk.Float64(1134.86),
                        },
                        MultiClassClassificationMetrics: &shared.MultiClassClassificationMetrics{
                            AggregateClassificationMetrics: &shared.AggregateClassificationMetrics{
                                Accuracy: sdk.Float64(6982.49),
                                F1Score: sdk.Float64(2722.29),
                                LogLoss: sdk.Float64(3354.98),
                                Precision: sdk.Float64(820.57),
                                Recall: sdk.Float64(1476.85),
                                RocAuc: sdk.Float64(7652.71),
                                Threshold: sdk.Float64(626.36),
                            },
                            ConfusionMatrixList: []shared.ConfusionMatrix{
                                shared.ConfusionMatrix{
                                    ConfidenceThreshold: sdk.Float64(2419.01),
                                    Rows: []shared.Row{
                                        shared.Row{
                                            ActualLabel: sdk.String("eum"),
                                            Entries: []shared.Entry{
                                                shared.Entry{
                                                    ItemCount: sdk.String("rem"),
                                                    PredictedLabel: sdk.String("at"),
                                                },
                                                shared.Entry{
                                                    ItemCount: sdk.String("impedit"),
                                                    PredictedLabel: sdk.String("eos"),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        RankingMetrics: &shared.RankingMetrics{
                            AverageRank: sdk.Float64(9587.41),
                            MeanAveragePrecision: sdk.Float64(4332.79),
                            MeanSquaredError: sdk.Float64(1173.2),
                            NormalizedDiscountedCumulativeGain: sdk.Float64(3251.18),
                        },
                        RegressionMetrics: &shared.RegressionMetrics{
                            MeanAbsoluteError: sdk.Float64(1070.04),
                            MeanSquaredError: sdk.Float64(5834.04),
                            MeanSquaredLogError: sdk.Float64(5896.95),
                            MedianAbsoluteError: sdk.Float64(9364.69),
                            RSquared: sdk.Float64(7453.98),
                        },
                    },
                    ModelLevelGlobalExplanation: &shared.GlobalExplanation{
                        ClassLabel: sdk.String("hic"),
                        Explanations: []shared.Explanation{
                            shared.Explanation{
                                Attribution: sdk.Float64(525.08),
                                FeatureName: sdk.String("earum"),
                            },
                            shared.Explanation{
                                Attribution: sdk.Float64(5962.11),
                                FeatureName: sdk.String("maiores"),
                            },
                            shared.Explanation{
                                Attribution: sdk.Float64(8918.01),
                                FeatureName: sdk.String("aliquid"),
                            },
                            shared.Explanation{
                                Attribution: sdk.Float64(7809.31),
                                FeatureName: sdk.String("suscipit"),
                            },
                        },
                    },
                    TrainingOptions: &shared.TrainingOptions{
                        AdjustStepChanges: sdk.Bool(false),
                        AutoArima: sdk.Bool(false),
                        AutoArimaMaxOrder: sdk.String("dolorem"),
                        AutoArimaMinOrder: sdk.String("fugit"),
                        BatchSize: sdk.String("cumque"),
                        BoosterType: shared.TrainingOptionsBoosterTypeEnumDart.ToPointer(),
                        CalculatePValues: sdk.Bool(false),
                        CleanSpikesAndDips: sdk.Bool(false),
                        ColorSpace: shared.TrainingOptionsColorSpaceEnumRgb.ToPointer(),
                        ColsampleBylevel: sdk.Float64(6567.62),
                        ColsampleBynode: sdk.Float64(8987.6),
                        ColsampleBytree: sdk.Float64(8620.63),
                        DartNormalizeType: shared.TrainingOptionsDartNormalizeTypeEnumDartNormalizeTypeUnspecified.ToPointer(),
                        DataFrequency: shared.TrainingOptionsDataFrequencyEnumDataFrequencyUnspecified.ToPointer(),
                        DataSplitColumn: sdk.String("et"),
                        DataSplitEvalFraction: sdk.Float64(4977.77),
                        DataSplitMethod: shared.TrainingOptionsDataSplitMethodEnumSequential.ToPointer(),
                        DecomposeTimeSeries: sdk.Bool(false),
                        DistanceType: shared.TrainingOptionsDistanceTypeEnumEuclidean.ToPointer(),
                        Dropout: sdk.Float64(3824.4),
                        EarlyStop: sdk.Bool(false),
                        EnableGlobalExplain: sdk.Bool(false),
                        FeedbackType: shared.TrainingOptionsFeedbackTypeEnumFeedbackTypeUnspecified.ToPointer(),
                        HiddenUnits: []string{
                            "magni",
                        },
                        HolidayRegion: shared.TrainingOptionsHolidayRegionEnumVn.ToPointer(),
                        Horizon: sdk.String("nulla"),
                        HparamTuningObjectives: []shared.TrainingOptionsHparamTuningObjectivesEnum{
                            shared.TrainingOptionsHparamTuningObjectivesEnumHparamTuningObjectiveUnspecified,
                            shared.TrainingOptionsHparamTuningObjectivesEnumMedianAbsoluteError,
                            shared.TrainingOptionsHparamTuningObjectivesEnumRecall,
                            shared.TrainingOptionsHparamTuningObjectivesEnumRecall,
                        },
                        IncludeDrift: sdk.Bool(false),
                        InitialLearnRate: sdk.Float64(1158.34),
                        InputLabelColumns: []string{
                            "esse",
                            "praesentium",
                        },
                        InstanceWeightColumn: sdk.String("maiores"),
                        IntegratedGradientsNumSteps: sdk.String("reiciendis"),
                        ItemColumn: sdk.String("vel"),
                        KmeansInitializationColumn: sdk.String("architecto"),
                        KmeansInitializationMethod: shared.TrainingOptionsKmeansInitializationMethodEnumKmeansPlusPlus.ToPointer(),
                        L1Regularization: sdk.Float64(396.5),
                        L2Regularization: sdk.Float64(1173.15),
                        LabelClassWeights: map[string]float64{
                            "tempora": 4582.59,
                            "ex": 2352.63,
                        },
                        LearnRate: sdk.Float64(3998.12),
                        LearnRateStrategy: shared.TrainingOptionsLearnRateStrategyEnumLearnRateStrategyUnspecified.ToPointer(),
                        LossType: shared.TrainingOptionsLossTypeEnumMeanLogLoss.ToPointer(),
                        MaxIterations: sdk.String("sunt"),
                        MaxParallelTrials: sdk.String("nostrum"),
                        MaxTimeSeriesLength: sdk.String("fugiat"),
                        MaxTreeDepth: sdk.String("expedita"),
                        MinRelativeProgress: sdk.Float64(3996.67),
                        MinSplitLoss: sdk.Float64(6391.87),
                        MinTimeSeriesLength: sdk.String("suscipit"),
                        MinTreeChildWeight: sdk.String("aliquid"),
                        ModelURI: sdk.String("perferendis"),
                        NonSeasonalOrder: &shared.ArimaOrder{
                            D: sdk.String("eum"),
                            P: sdk.String("voluptas"),
                            Q: sdk.String("iste"),
                        },
                        NumClusters: sdk.String("id"),
                        NumFactors: sdk.String("ab"),
                        NumParallelTree: sdk.String("error"),
                        NumTrials: sdk.String("possimus"),
                        OptimizationStrategy: shared.TrainingOptionsOptimizationStrategyEnumNormalEquation.ToPointer(),
                        PreserveInputStructs: sdk.Bool(false),
                        SampledShapleyNumPaths: sdk.String("mollitia"),
                        Subsample: sdk.Float64(6717.94),
                        TfVersion: sdk.String("libero"),
                        TimeSeriesDataColumn: sdk.String("ad"),
                        TimeSeriesIDColumn: sdk.String("deleniti"),
                        TimeSeriesIDColumns: []string{
                            "vitae",
                            "repellendus",
                        },
                        TimeSeriesLengthFraction: sdk.Float64(4050.36),
                        TimeSeriesTimestampColumn: sdk.String("quo"),
                        TreeMethod: shared.TrainingOptionsTreeMethodEnumExact.ToPointer(),
                        TrendSmoothingWindowSize: sdk.String("ut"),
                        UserColumn: sdk.String("ad"),
                        WalsAlpha: sdk.Float64(7139.27),
                        WarmStart: sdk.Bool(false),
                        XgboostVersion: sdk.String("voluptatem"),
                    },
                    VertexAiModelID: sdk.String("molestias"),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "cum",
        Fields: sdk.String("aliquid"),
        Key: sdk.String("beatae"),
        ModelID: "voluptatum",
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "veritatis",
        QuotaUser: sdk.String("rerum"),
        UserIP: sdk.String("est"),
    }, operations.BigqueryModelsPatchSecurity{
        Option1: &operations.BigqueryModelsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Model != nil {
        // handle response
    }
}
```
