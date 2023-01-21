<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DataplexProjectsLocationsDataScansCreateRequest{
        Security: operations.DataplexProjectsLocationsDataScansCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DataplexProjectsLocationsDataScansCreatePathParams{
            Parent: "sit",
        },
        QueryParams: operations.DataplexProjectsLocationsDataScansCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            DataScanID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.GoogleCloudDataplexV1DataScanInput{
            Data: &shared.GoogleCloudDataplexV1DataSource{
                Entity: "debitis",
            },
            DataProfileResult: &shared.GoogleCloudDataplexV1DataProfileResult{
                Profile: &shared.GoogleCloudDataplexV1DataProfileResultProfile{
                    Fields: []shared.GoogleCloudDataplexV1DataProfileResultProfileField{
                        shared.GoogleCloudDataplexV1DataProfileResultProfileField{
                            Mode: "et",
                            Name: "ut",
                            Profile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo{
                                DistinctRatio: 50.099998,
                                DoubleProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo{
                                    Average: 94.199997,
                                    Max: 68.099998,
                                    Min: 80.199997,
                                    Quartiles: []float64{
                                        52.099998,
                                    },
                                    StandardDeviation: 91.099998,
                                },
                                IntegerProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo{
                                    Average: 57.099998,
                                    Max: "totam",
                                    Min: "commodi",
                                    Quartiles: []string{
                                        "est",
                                        "aut",
                                        "odit",
                                    },
                                    StandardDeviation: 49.099998,
                                },
                                NullRatio: 87.099998,
                                StringProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo{
                                    AverageLength: 76.099998,
                                    MaxLength: "officiis",
                                    MinLength: "autem",
                                },
                                TopNValues: []shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue{
                                    shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue{
                                        Count: "nobis",
                                        Value: "odio",
                                    },
                                },
                            },
                            Type: "qui",
                        },
                    },
                },
                RowCount: "recusandae",
                ScannedData: &shared.GoogleCloudDataplexV1ScannedData{
                    IncrementalField: &shared.GoogleCloudDataplexV1ScannedDataIncrementalField{
                        End: "at",
                        Field: "ipsum",
                        Start: "eveniet",
                    },
                },
            },
            DataProfileSpec: map[string]interface{}{
                "sint": "inventore",
                "ut": "exercitationem",
            },
            DataQualityResult: &shared.GoogleCloudDataplexV1DataQualityResult{
                Dimensions: []shared.GoogleCloudDataplexV1DataQualityDimensionResult{
                    shared.GoogleCloudDataplexV1DataQualityDimensionResult{
                        Passed: false,
                    },
                    shared.GoogleCloudDataplexV1DataQualityDimensionResult{
                        Passed: false,
                    },
                    shared.GoogleCloudDataplexV1DataQualityDimensionResult{
                        Passed: false,
                    },
                },
                Passed: false,
                RowCount: "dolor",
                Rules: []shared.GoogleCloudDataplexV1DataQualityRuleResult{
                    shared.GoogleCloudDataplexV1DataQualityRuleResult{
                        EvaluatedCount: "veritatis",
                        FailingRowsQuery: "in",
                        NullCount: "et",
                        PassRatio: 81.199997,
                        Passed: true,
                        PassedCount: "dolores",
                        Rule: &shared.GoogleCloudDataplexV1DataQualityRule{
                            Column: "placeat",
                            Dimension: "vel",
                            IgnoreNull: true,
                            NonNullExpectation: map[string]interface{}{
                                "voluptas": "quam",
                                "reprehenderit": "qui",
                            },
                            RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                                MaxValue: "qui",
                                MinValue: "unde",
                                StrictMaxEnabled: false,
                                StrictMinEnabled: false,
                            },
                            RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                                Regex: "qui",
                            },
                            RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                                SQLExpression: "ut",
                            },
                            SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                                Values: []string{
                                    "ab",
                                    "neque",
                                    "ullam",
                                },
                            },
                            StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                                MaxValue: "et",
                                MinValue: "accusantium",
                                Statistic: "STATISTIC_UNDEFINED",
                                StrictMaxEnabled: true,
                                StrictMinEnabled: false,
                            },
                            TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                                SQLExpression: "velit",
                            },
                            Threshold: 20.100000,
                            UniquenessExpectation: map[string]interface{}{
                                "voluptates": "magni",
                                "et": "optio",
                            },
                        },
                    },
                    shared.GoogleCloudDataplexV1DataQualityRuleResult{
                        EvaluatedCount: "qui",
                        FailingRowsQuery: "earum",
                        NullCount: "illo",
                        PassRatio: 6.100000,
                        Passed: false,
                        PassedCount: "dolor",
                        Rule: &shared.GoogleCloudDataplexV1DataQualityRule{
                            Column: "commodi",
                            Dimension: "error",
                            IgnoreNull: false,
                            NonNullExpectation: map[string]interface{}{
                                "nostrum": "ut",
                            },
                            RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                                MaxValue: "laboriosam",
                                MinValue: "sed",
                                StrictMaxEnabled: false,
                                StrictMinEnabled: true,
                            },
                            RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                                Regex: "aut",
                            },
                            RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                                SQLExpression: "quas",
                            },
                            SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                                Values: []string{
                                    "laudantium",
                                    "autem",
                                    "ipsa",
                                },
                            },
                            StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                                MaxValue: "expedita",
                                MinValue: "doloremque",
                                Statistic: "MEAN",
                                StrictMaxEnabled: false,
                                StrictMinEnabled: true,
                            },
                            TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                                SQLExpression: "quisquam",
                            },
                            Threshold: 0.100000,
                            UniquenessExpectation: map[string]interface{}{
                                "eum": "perferendis",
                            },
                        },
                    },
                    shared.GoogleCloudDataplexV1DataQualityRuleResult{
                        EvaluatedCount: "et",
                        FailingRowsQuery: "rerum",
                        NullCount: "reiciendis",
                        PassRatio: 9.200000,
                        Passed: true,
                        PassedCount: "necessitatibus",
                        Rule: &shared.GoogleCloudDataplexV1DataQualityRule{
                            Column: "est",
                            Dimension: "quis",
                            IgnoreNull: true,
                            NonNullExpectation: map[string]interface{}{
                                "et": "impedit",
                            },
                            RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                                MaxValue: "ad",
                                MinValue: "expedita",
                                StrictMaxEnabled: true,
                                StrictMinEnabled: true,
                            },
                            RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                                Regex: "modi",
                            },
                            RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                                SQLExpression: "nihil",
                            },
                            SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                                Values: []string{
                                    "deserunt",
                                    "eaque",
                                    "sunt",
                                },
                            },
                            StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                                MaxValue: "sit",
                                MinValue: "autem",
                                Statistic: "MIN",
                                StrictMaxEnabled: false,
                                StrictMinEnabled: false,
                            },
                            TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                                SQLExpression: "placeat",
                            },
                            Threshold: 13.200000,
                            UniquenessExpectation: map[string]interface{}{
                                "adipisci": "porro",
                                "rerum": "et",
                                "accusamus": "numquam",
                            },
                        },
                    },
                },
                ScannedData: &shared.GoogleCloudDataplexV1ScannedData{
                    IncrementalField: &shared.GoogleCloudDataplexV1ScannedDataIncrementalField{
                        End: "laborum",
                        Field: "rerum",
                        Start: "ut",
                    },
                },
            },
            DataQualitySpec: &shared.GoogleCloudDataplexV1DataQualitySpec{
                Rules: []shared.GoogleCloudDataplexV1DataQualityRule{
                    shared.GoogleCloudDataplexV1DataQualityRule{
                        Column: "fugit",
                        Dimension: "quis",
                        IgnoreNull: false,
                        NonNullExpectation: map[string]interface{}{
                            "aperiam": "consequuntur",
                        },
                        RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                            MaxValue: "excepturi",
                            MinValue: "mollitia",
                            StrictMaxEnabled: true,
                            StrictMinEnabled: false,
                        },
                        RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                            Regex: "ipsa",
                        },
                        RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                            SQLExpression: "animi",
                        },
                        SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                            Values: []string{
                                "ut",
                                "aliquam",
                            },
                        },
                        StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                            MaxValue: "fuga",
                            MinValue: "sed",
                            Statistic: "MAX",
                            StrictMaxEnabled: false,
                            StrictMinEnabled: true,
                        },
                        TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                            SQLExpression: "non",
                        },
                        Threshold: 42.099998,
                        UniquenessExpectation: map[string]interface{}{
                            "pariatur": "quasi",
                            "corrupti": "enim",
                        },
                    },
                    shared.GoogleCloudDataplexV1DataQualityRule{
                        Column: "qui",
                        Dimension: "sit",
                        IgnoreNull: false,
                        NonNullExpectation: map[string]interface{}{
                            "neque": "consequuntur",
                            "quia": "et",
                        },
                        RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                            MaxValue: "est",
                            MinValue: "occaecati",
                            StrictMaxEnabled: false,
                            StrictMinEnabled: true,
                        },
                        RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                            Regex: "quia",
                        },
                        RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                            SQLExpression: "temporibus",
                        },
                        SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                            Values: []string{
                                "quae",
                            },
                        },
                        StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                            MaxValue: "est",
                            MinValue: "ut",
                            Statistic: "STATISTIC_UNDEFINED",
                            StrictMaxEnabled: true,
                            StrictMinEnabled: true,
                        },
                        TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                            SQLExpression: "voluptatem",
                        },
                        Threshold: 57.099998,
                        UniquenessExpectation: map[string]interface{}{
                            "sunt": "earum",
                            "et": "ut",
                            "asperiores": "et",
                        },
                    },
                    shared.GoogleCloudDataplexV1DataQualityRule{
                        Column: "est",
                        Dimension: "ipsum",
                        IgnoreNull: false,
                        NonNullExpectation: map[string]interface{}{
                            "nihil": "dolores",
                        },
                        RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                            MaxValue: "suscipit",
                            MinValue: "impedit",
                            StrictMaxEnabled: true,
                            StrictMinEnabled: false,
                        },
                        RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                            Regex: "ut",
                        },
                        RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                            SQLExpression: "possimus",
                        },
                        SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                            Values: []string{
                                "qui",
                            },
                        },
                        StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                            MaxValue: "quia",
                            MinValue: "ipsam",
                            Statistic: "MIN",
                            StrictMaxEnabled: false,
                            StrictMinEnabled: true,
                        },
                        TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                            SQLExpression: "distinctio",
                        },
                        Threshold: 84.099998,
                        UniquenessExpectation: map[string]interface{}{
                            "repellat": "velit",
                            "officia": "modi",
                        },
                    },
                },
            },
            Description: "sunt",
            DisplayName: "voluptas",
            ExecutionSpec: &shared.GoogleCloudDataplexV1DataScanExecutionSpec{
                Field: "amet",
                Trigger: &shared.GoogleCloudDataplexV1Trigger{
                    OnDemand: map[string]interface{}{
                        "a": "qui",
                        "excepturi": "autem",
                        "corporis": "dicta",
                    },
                    Schedule: &shared.GoogleCloudDataplexV1TriggerSchedule{
                        Cron: "rem",
                    },
                },
            },
            ExecutionStatus: &shared.GoogleCloudDataplexV1DataScanExecutionStatus{
                LatestJobEndTime: "doloremque",
                LatestJobStartTime: "quae",
            },
            Labels: map[string]string{
                "recusandae": "qui",
                "minus": "et",
            },
        },
    }
    
    res, err := s.Projects.DataplexProjectsLocationsDataScansCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->