# Projects

### Available Operations

* [DataplexProjectsLocationsDataAttributeBindingsCreate](#dataplexprojectslocationsdataattributebindingscreate) - Create a DataAttributeBinding resource.
* [DataplexProjectsLocationsDataAttributeBindingsList](#dataplexprojectslocationsdataattributebindingslist) - Lists DataAttributeBinding resources in a project and location.
* [DataplexProjectsLocationsDataScansCreate](#dataplexprojectslocationsdatascanscreate) - Creates a DataScan resource.
* [DataplexProjectsLocationsDataScansList](#dataplexprojectslocationsdatascanslist) - Lists DataScans.
* [DataplexProjectsLocationsDataTaxonomiesAttributesCreate](#dataplexprojectslocationsdatataxonomiesattributescreate) - Create a DataAttribute resource.
* [DataplexProjectsLocationsDataTaxonomiesAttributesList](#dataplexprojectslocationsdatataxonomiesattributeslist) - Lists Data Attribute resources in a DataTaxonomy.
* [DataplexProjectsLocationsDataTaxonomiesCreate](#dataplexprojectslocationsdatataxonomiescreate) - Create a DataTaxonomy resource.
* [DataplexProjectsLocationsDataTaxonomiesList](#dataplexprojectslocationsdatataxonomieslist) - Lists DataTaxonomy resources in a project and location.
* [DataplexProjectsLocationsLakesContentCreate](#dataplexprojectslocationslakescontentcreate) - Create a content.
* [DataplexProjectsLocationsLakesContentList](#dataplexprojectslocationslakescontentlist) - List content.
* [DataplexProjectsLocationsLakesContentitemsCreate](#dataplexprojectslocationslakescontentitemscreate) - Create a content.
* [DataplexProjectsLocationsLakesContentitemsList](#dataplexprojectslocationslakescontentitemslist) - List content.
* [DataplexProjectsLocationsLakesCreate](#dataplexprojectslocationslakescreate) - Creates a lake resource.
* [DataplexProjectsLocationsLakesEnvironmentsCreate](#dataplexprojectslocationslakesenvironmentscreate) - Create an environment resource.
* [DataplexProjectsLocationsLakesEnvironmentsList](#dataplexprojectslocationslakesenvironmentslist) - Lists environments under the given lake.
* [DataplexProjectsLocationsLakesEnvironmentsSessionsList](#dataplexprojectslocationslakesenvironmentssessionslist) - Lists session resources in an environment.
* [DataplexProjectsLocationsLakesList](#dataplexprojectslocationslakeslist) - Lists lake resources in a project and location.
* [DataplexProjectsLocationsLakesTasksCreate](#dataplexprojectslocationslakestaskscreate) - Creates a task resource within a lake.
* [DataplexProjectsLocationsLakesTasksJobsList](#dataplexprojectslocationslakestasksjobslist) - Lists Jobs under the given task.
* [DataplexProjectsLocationsLakesTasksList](#dataplexprojectslocationslakestaskslist) - Lists tasks under the given lake.
* [DataplexProjectsLocationsLakesTasksRun](#dataplexprojectslocationslakestasksrun) - Run an on demand execution of a Task.
* [DataplexProjectsLocationsLakesZonesAssetsActionsList](#dataplexprojectslocationslakeszonesassetsactionslist) - Lists action resources in an asset.
* [DataplexProjectsLocationsLakesZonesAssetsCreate](#dataplexprojectslocationslakeszonesassetscreate) - Creates an asset resource.
* [DataplexProjectsLocationsLakesZonesAssetsGetIamPolicy](#dataplexprojectslocationslakeszonesassetsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DataplexProjectsLocationsLakesZonesAssetsList](#dataplexprojectslocationslakeszonesassetslist) - Lists asset resources in a zone.
* [DataplexProjectsLocationsLakesZonesAssetsPatch](#dataplexprojectslocationslakeszonesassetspatch) - Updates an asset resource.
* [DataplexProjectsLocationsLakesZonesAssetsSetIamPolicy](#dataplexprojectslocationslakeszonesassetssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [DataplexProjectsLocationsLakesZonesAssetsTestIamPermissions](#dataplexprojectslocationslakeszonesassetstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DataplexProjectsLocationsLakesZonesCreate](#dataplexprojectslocationslakeszonescreate) - Creates a zone resource within a lake.
* [DataplexProjectsLocationsLakesZonesEntitiesCreate](#dataplexprojectslocationslakeszonesentitiescreate) - Create a metadata entity.
* [DataplexProjectsLocationsLakesZonesEntitiesList](#dataplexprojectslocationslakeszonesentitieslist) - List metadata entities in a zone.
* [DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate](#dataplexprojectslocationslakeszonesentitiespartitionscreate) - Create a metadata partition.
* [DataplexProjectsLocationsLakesZonesEntitiesPartitionsList](#dataplexprojectslocationslakeszonesentitiespartitionslist) - List metadata partitions of an entity.
* [DataplexProjectsLocationsLakesZonesEntitiesUpdate](#dataplexprojectslocationslakeszonesentitiesupdate) - Update a metadata entity. Only supports full resource update.
* [DataplexProjectsLocationsLakesZonesList](#dataplexprojectslocationslakeszoneslist) - Lists zone resources in a lake.
* [DataplexProjectsLocationsList](#dataplexprojectslocationslist) - Lists information about the supported locations for this service.
* [DataplexProjectsLocationsOperationsCancel](#dataplexprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [DataplexProjectsLocationsOperationsDelete](#dataplexprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
* [DataplexProjectsLocationsOperationsGet](#dataplexprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DataplexProjectsLocationsOperationsList](#dataplexprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

## DataplexProjectsLocationsDataAttributeBindingsCreate

Create a DataAttributeBinding resource.

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
    res, err := s.Projects.DataplexProjectsLocationsDataAttributeBindingsCreate(ctx, operations.DataplexProjectsLocationsDataAttributeBindingsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDataplexV1DataAttributeBindingInput: &shared.GoogleCloudDataplexV1DataAttributeBindingInput{
            Attributes: []string{
                "dicta",
                "nam",
                "officia",
            },
            Description: sdk.String("occaecati"),
            DisplayName: sdk.String("fugit"),
            Etag: sdk.String("deleniti"),
            Labels: map[string]string{
                "optio": "totam",
                "beatae": "commodi",
                "molestiae": "modi",
                "qui": "impedit",
            },
            Paths: []shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                    Attributes: []string{
                        "ipsum",
                        "excepturi",
                    },
                    Name: sdk.String("Dorothy Hane"),
                },
                shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                    Attributes: []string{
                        "dolor",
                        "natus",
                        "laboriosam",
                    },
                    Name: sdk.String("Elias Parker"),
                },
                shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                    Attributes: []string{
                        "iure",
                        "saepe",
                        "quidem",
                    },
                    Name: sdk.String("Brenda Wisozk"),
                },
            },
            Resource: sdk.String("laborum"),
        },
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        DataAttributeBindingID: sdk.String("explicabo"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("omnis"),
        Parent: "nemo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("accusantium"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsDataAttributeBindingsList

Lists DataAttributeBinding resources in a project and location.

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
    res, err := s.Projects.DataplexProjectsLocationsDataAttributeBindingsList(ctx, operations.DataplexProjectsLocationsDataAttributeBindingsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("architecto"),
        Filter: sdk.String("mollitia"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("culpa"),
        OrderBy: sdk.String("consequuntur"),
        PageSize: sdk.Int64(995300),
        PageToken: sdk.String("mollitia"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("quam"),
    }, operations.DataplexProjectsLocationsDataAttributeBindingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListDataAttributeBindingsResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsDataScansCreate

Creates a DataScan resource.

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
    res, err := s.Projects.DataplexProjectsLocationsDataScansCreate(ctx, operations.DataplexProjectsLocationsDataScansCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDataplexV1DataScanInput: &shared.GoogleCloudDataplexV1DataScanInput{
            Data: &shared.GoogleCloudDataplexV1DataSource{
                Entity: sdk.String("velit"),
                Resource: sdk.String("error"),
            },
            DataProfileResult: &shared.GoogleCloudDataplexV1DataProfileResult{
                Profile: &shared.GoogleCloudDataplexV1DataProfileResultProfile{
                    Fields: []shared.GoogleCloudDataplexV1DataProfileResultProfileField{
                        shared.GoogleCloudDataplexV1DataProfileResultProfileField{
                            Mode: sdk.String("quis"),
                            Name: sdk.String("Kayla O'Kon"),
                            Profile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo{
                                DistinctRatio: sdk.Float64(7783.46),
                                DoubleProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo{
                                    Average: sdk.Float64(1965.82),
                                    Max: sdk.Float64(9495.72),
                                    Min: sdk.Float64(3687.25),
                                    Quartiles: []float64{
                                        8209.94,
                                        135.71,
                                        971.01,
                                    },
                                    StandardDeviation: sdk.Float64(6228.46),
                                },
                                IntegerProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo{
                                    Average: sdk.Float64(8379.45),
                                    Max: sdk.String("laborum"),
                                    Min: sdk.String("quasi"),
                                    Quartiles: []string{
                                        "voluptatibus",
                                        "vero",
                                        "nihil",
                                        "praesentium",
                                    },
                                    StandardDeviation: sdk.Float64(9767.62),
                                },
                                NullRatio: sdk.Float64(557.14),
                                StringProfile: &shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo{
                                    AverageLength: sdk.Float64(6048.46),
                                    MaxLength: sdk.String("voluptate"),
                                    MinLength: sdk.String("cum"),
                                },
                                TopNValues: []shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue{
                                    shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue{
                                        Count: sdk.String("doloremque"),
                                        Value: sdk.String("reprehenderit"),
                                    },
                                },
                            },
                            Type: sdk.String("ut"),
                        },
                    },
                },
                RowCount: sdk.String("maiores"),
                ScannedData: &shared.GoogleCloudDataplexV1ScannedData{
                    IncrementalField: &shared.GoogleCloudDataplexV1ScannedDataIncrementalField{
                        End: sdk.String("dicta"),
                        Field: sdk.String("corporis"),
                        Start: sdk.String("dolore"),
                    },
                },
            },
            DataProfileSpec: &shared.GoogleCloudDataplexV1DataProfileSpec{
                RowFilter: sdk.String("iusto"),
                SamplingPercent: sdk.Float32(1187.27),
            },
            DataQualityResult: &shared.GoogleCloudDataplexV1DataQualityResult{
                Dimensions: []shared.GoogleCloudDataplexV1DataQualityDimensionResult{
                    shared.GoogleCloudDataplexV1DataQualityDimensionResult{
                        Passed: sdk.Bool(false),
                    },
                    shared.GoogleCloudDataplexV1DataQualityDimensionResult{
                        Passed: sdk.Bool(false),
                    },
                    shared.GoogleCloudDataplexV1DataQualityDimensionResult{
                        Passed: sdk.Bool(false),
                    },
                },
                Passed: sdk.Bool(false),
                RowCount: sdk.String("enim"),
                Rules: []shared.GoogleCloudDataplexV1DataQualityRuleResult{
                    shared.GoogleCloudDataplexV1DataQualityRuleResult{
                        EvaluatedCount: sdk.String("commodi"),
                        FailingRowsQuery: sdk.String("repudiandae"),
                        NullCount: sdk.String("quae"),
                        PassRatio: sdk.Float64(2168.22),
                        Passed: sdk.Bool(false),
                        PassedCount: sdk.String("quidem"),
                        Rule: &shared.GoogleCloudDataplexV1DataQualityRule{
                            Column: sdk.String("molestias"),
                            Dimension: sdk.String("excepturi"),
                            IgnoreNull: sdk.Bool(false),
                            NonNullExpectation: map[string]interface{}{
                                "modi": "praesentium",
                                "rem": "voluptates",
                                "quasi": "repudiandae",
                                "sint": "veritatis",
                            },
                            RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                                MaxValue: sdk.String("itaque"),
                                MinValue: sdk.String("incidunt"),
                                StrictMaxEnabled: sdk.Bool(false),
                                StrictMinEnabled: sdk.Bool(false),
                            },
                            RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                                Regex: sdk.String("enim"),
                            },
                            RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                                SQLExpression: sdk.String("consequatur"),
                            },
                            SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                                Values: []string{
                                    "quibusdam",
                                    "explicabo",
                                    "deserunt",
                                },
                            },
                            StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                                MaxValue: sdk.String("distinctio"),
                                MinValue: sdk.String("quibusdam"),
                                Statistic: shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnumMean.ToPointer(),
                                StrictMaxEnabled: sdk.Bool(false),
                                StrictMinEnabled: sdk.Bool(false),
                            },
                            TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                                SQLExpression: sdk.String("modi"),
                            },
                            Threshold: sdk.Float64(1831.91),
                            UniquenessExpectation: map[string]interface{}{
                                "cupiditate": "quos",
                                "perferendis": "magni",
                            },
                        },
                    },
                    shared.GoogleCloudDataplexV1DataQualityRuleResult{
                        EvaluatedCount: sdk.String("assumenda"),
                        FailingRowsQuery: sdk.String("ipsam"),
                        NullCount: sdk.String("alias"),
                        PassRatio: sdk.Float64(1464.41),
                        Passed: sdk.Bool(false),
                        PassedCount: sdk.String("dolorum"),
                        Rule: &shared.GoogleCloudDataplexV1DataQualityRule{
                            Column: sdk.String("excepturi"),
                            Dimension: sdk.String("tempora"),
                            IgnoreNull: sdk.Bool(false),
                            NonNullExpectation: map[string]interface{}{
                                "tempore": "labore",
                                "delectus": "eum",
                                "non": "eligendi",
                            },
                            RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                                MaxValue: sdk.String("sint"),
                                MinValue: sdk.String("aliquid"),
                                StrictMaxEnabled: sdk.Bool(false),
                                StrictMinEnabled: sdk.Bool(false),
                            },
                            RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                                Regex: sdk.String("provident"),
                            },
                            RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                                SQLExpression: sdk.String("necessitatibus"),
                            },
                            SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                                Values: []string{
                                    "officia",
                                    "dolor",
                                    "debitis",
                                },
                            },
                            StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                                MaxValue: sdk.String("a"),
                                MinValue: sdk.String("dolorum"),
                                Statistic: shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnumMean.ToPointer(),
                                StrictMaxEnabled: sdk.Bool(false),
                                StrictMinEnabled: sdk.Bool(false),
                            },
                            TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                                SQLExpression: sdk.String("in"),
                            },
                            Threshold: sdk.Float64(8464.09),
                            UniquenessExpectation: map[string]interface{}{
                                "rerum": "dicta",
                                "magnam": "cumque",
                                "facere": "ea",
                                "aliquid": "laborum",
                            },
                        },
                    },
                    shared.GoogleCloudDataplexV1DataQualityRuleResult{
                        EvaluatedCount: sdk.String("accusamus"),
                        FailingRowsQuery: sdk.String("non"),
                        NullCount: sdk.String("occaecati"),
                        PassRatio: sdk.Float64(3132.18),
                        Passed: sdk.Bool(false),
                        PassedCount: sdk.String("accusamus"),
                        Rule: &shared.GoogleCloudDataplexV1DataQualityRule{
                            Column: sdk.String("delectus"),
                            Dimension: sdk.String("quidem"),
                            IgnoreNull: sdk.Bool(false),
                            NonNullExpectation: map[string]interface{}{
                                "nam": "id",
                                "blanditiis": "deleniti",
                                "sapiente": "amet",
                            },
                            RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                                MaxValue: sdk.String("deserunt"),
                                MinValue: sdk.String("nisi"),
                                StrictMaxEnabled: sdk.Bool(false),
                                StrictMinEnabled: sdk.Bool(false),
                            },
                            RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                                Regex: sdk.String("vel"),
                            },
                            RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                                SQLExpression: sdk.String("natus"),
                            },
                            SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                                Values: []string{
                                    "molestiae",
                                    "perferendis",
                                    "nihil",
                                },
                            },
                            StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                                MaxValue: sdk.String("magnam"),
                                MinValue: sdk.String("distinctio"),
                                Statistic: shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnumMin.ToPointer(),
                                StrictMaxEnabled: sdk.Bool(false),
                                StrictMinEnabled: sdk.Bool(false),
                            },
                            TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                                SQLExpression: sdk.String("labore"),
                            },
                            Threshold: sdk.Float64(2900.77),
                            UniquenessExpectation: map[string]interface{}{
                                "natus": "nobis",
                                "eum": "vero",
                            },
                        },
                    },
                    shared.GoogleCloudDataplexV1DataQualityRuleResult{
                        EvaluatedCount: sdk.String("aspernatur"),
                        FailingRowsQuery: sdk.String("architecto"),
                        NullCount: sdk.String("magnam"),
                        PassRatio: sdk.Float64(923.73),
                        Passed: sdk.Bool(false),
                        PassedCount: sdk.String("excepturi"),
                        Rule: &shared.GoogleCloudDataplexV1DataQualityRule{
                            Column: sdk.String("ullam"),
                            Dimension: sdk.String("provident"),
                            IgnoreNull: sdk.Bool(false),
                            NonNullExpectation: map[string]interface{}{
                                "sint": "accusantium",
                                "mollitia": "reiciendis",
                                "mollitia": "ad",
                            },
                            RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                                MaxValue: sdk.String("eum"),
                                MinValue: sdk.String("dolor"),
                                StrictMaxEnabled: sdk.Bool(false),
                                StrictMinEnabled: sdk.Bool(false),
                            },
                            RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                                Regex: sdk.String("necessitatibus"),
                            },
                            RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                                SQLExpression: sdk.String("odit"),
                            },
                            SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                                Values: []string{
                                    "quasi",
                                    "iure",
                                },
                            },
                            StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                                MaxValue: sdk.String("doloribus"),
                                MinValue: sdk.String("debitis"),
                                Statistic: shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnumMean.ToPointer(),
                                StrictMaxEnabled: sdk.Bool(false),
                                StrictMinEnabled: sdk.Bool(false),
                            },
                            TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                                SQLExpression: sdk.String("maxime"),
                            },
                            Threshold: sdk.Float64(5370.23),
                            UniquenessExpectation: map[string]interface{}{
                                "in": "architecto",
                                "architecto": "repudiandae",
                                "ullam": "expedita",
                            },
                        },
                    },
                },
                ScannedData: &shared.GoogleCloudDataplexV1ScannedData{
                    IncrementalField: &shared.GoogleCloudDataplexV1ScannedDataIncrementalField{
                        End: sdk.String("nihil"),
                        Field: sdk.String("repellat"),
                        Start: sdk.String("quibusdam"),
                    },
                },
            },
            DataQualitySpec: &shared.GoogleCloudDataplexV1DataQualitySpec{
                RowFilter: sdk.String("sed"),
                Rules: []shared.GoogleCloudDataplexV1DataQualityRule{
                    shared.GoogleCloudDataplexV1DataQualityRule{
                        Column: sdk.String("pariatur"),
                        Dimension: sdk.String("accusantium"),
                        IgnoreNull: sdk.Bool(false),
                        NonNullExpectation: map[string]interface{}{
                            "praesentium": "natus",
                        },
                        RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                            MaxValue: sdk.String("magni"),
                            MinValue: sdk.String("sunt"),
                            StrictMaxEnabled: sdk.Bool(false),
                            StrictMinEnabled: sdk.Bool(false),
                        },
                        RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                            Regex: sdk.String("quo"),
                        },
                        RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                            SQLExpression: sdk.String("illum"),
                        },
                        SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                            Values: []string{
                                "maxime",
                                "ea",
                                "excepturi",
                                "odit",
                            },
                        },
                        StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                            MaxValue: sdk.String("ea"),
                            MinValue: sdk.String("accusantium"),
                            Statistic: shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnumStatisticUndefined.ToPointer(),
                            StrictMaxEnabled: sdk.Bool(false),
                            StrictMinEnabled: sdk.Bool(false),
                        },
                        TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                            SQLExpression: sdk.String("maiores"),
                        },
                        Threshold: sdk.Float64(6974.29),
                        UniquenessExpectation: map[string]interface{}{
                            "voluptate": "autem",
                            "nam": "eaque",
                        },
                    },
                    shared.GoogleCloudDataplexV1DataQualityRule{
                        Column: sdk.String("pariatur"),
                        Dimension: sdk.String("nemo"),
                        IgnoreNull: sdk.Bool(false),
                        NonNullExpectation: map[string]interface{}{
                            "perferendis": "fugiat",
                            "amet": "aut",
                            "cumque": "corporis",
                            "hic": "libero",
                        },
                        RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                            MaxValue: sdk.String("nobis"),
                            MinValue: sdk.String("dolores"),
                            StrictMaxEnabled: sdk.Bool(false),
                            StrictMinEnabled: sdk.Bool(false),
                        },
                        RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                            Regex: sdk.String("quis"),
                        },
                        RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                            SQLExpression: sdk.String("totam"),
                        },
                        SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                            Values: []string{
                                "eaque",
                                "quis",
                            },
                        },
                        StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                            MaxValue: sdk.String("nesciunt"),
                            MinValue: sdk.String("eos"),
                            Statistic: shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnumStatisticUndefined.ToPointer(),
                            StrictMaxEnabled: sdk.Bool(false),
                            StrictMinEnabled: sdk.Bool(false),
                        },
                        TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                            SQLExpression: sdk.String("dolores"),
                        },
                        Threshold: sdk.Float64(7936.98),
                        UniquenessExpectation: map[string]interface{}{
                            "dolor": "vero",
                            "nostrum": "hic",
                        },
                    },
                    shared.GoogleCloudDataplexV1DataQualityRule{
                        Column: sdk.String("recusandae"),
                        Dimension: sdk.String("omnis"),
                        IgnoreNull: sdk.Bool(false),
                        NonNullExpectation: map[string]interface{}{
                            "perspiciatis": "voluptatem",
                            "porro": "consequuntur",
                            "blanditiis": "error",
                        },
                        RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                            MaxValue: sdk.String("eaque"),
                            MinValue: sdk.String("occaecati"),
                            StrictMaxEnabled: sdk.Bool(false),
                            StrictMinEnabled: sdk.Bool(false),
                        },
                        RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                            Regex: sdk.String("rerum"),
                        },
                        RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                            SQLExpression: sdk.String("adipisci"),
                        },
                        SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                            Values: []string{
                                "earum",
                                "modi",
                                "iste",
                                "dolorum",
                            },
                        },
                        StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                            MaxValue: sdk.String("deleniti"),
                            MinValue: sdk.String("pariatur"),
                            Statistic: shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnumMin.ToPointer(),
                            StrictMaxEnabled: sdk.Bool(false),
                            StrictMinEnabled: sdk.Bool(false),
                        },
                        TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                            SQLExpression: sdk.String("nobis"),
                        },
                        Threshold: sdk.Float64(7301.22),
                        UniquenessExpectation: map[string]interface{}{
                            "quaerat": "quos",
                            "aliquid": "dolorem",
                            "dolorem": "dolor",
                            "qui": "ipsum",
                        },
                    },
                    shared.GoogleCloudDataplexV1DataQualityRule{
                        Column: sdk.String("hic"),
                        Dimension: sdk.String("excepturi"),
                        IgnoreNull: sdk.Bool(false),
                        NonNullExpectation: map[string]interface{}{
                            "voluptate": "dignissimos",
                            "reiciendis": "amet",
                            "dolorum": "numquam",
                        },
                        RangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation{
                            MaxValue: sdk.String("veritatis"),
                            MinValue: sdk.String("ipsa"),
                            StrictMaxEnabled: sdk.Bool(false),
                            StrictMinEnabled: sdk.Bool(false),
                        },
                        RegexExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation{
                            Regex: sdk.String("ipsa"),
                        },
                        RowConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation{
                            SQLExpression: sdk.String("iure"),
                        },
                        SetExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation{
                            Values: []string{
                                "quaerat",
                                "accusamus",
                            },
                        },
                        StatisticRangeExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation{
                            MaxValue: sdk.String("quidem"),
                            MinValue: sdk.String("voluptatibus"),
                            Statistic: shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnumMean.ToPointer(),
                            StrictMaxEnabled: sdk.Bool(false),
                            StrictMinEnabled: sdk.Bool(false),
                        },
                        TableConditionExpectation: &shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation{
                            SQLExpression: sdk.String("natus"),
                        },
                        Threshold: sdk.Float64(1796.03),
                        UniquenessExpectation: map[string]interface{}{
                            "sit": "fugiat",
                            "ab": "soluta",
                            "dolorum": "iusto",
                        },
                    },
                },
                SamplingPercent: sdk.Float32(4536.97),
            },
            Description: sdk.String("dolorum"),
            DisplayName: sdk.String("deleniti"),
            ExecutionSpec: &shared.GoogleCloudDataplexV1DataScanExecutionSpec{
                Field: sdk.String("omnis"),
                Trigger: &shared.GoogleCloudDataplexV1Trigger{
                    OnDemand: map[string]interface{}{
                        "distinctio": "asperiores",
                        "nihil": "ipsum",
                        "voluptate": "id",
                        "saepe": "eius",
                    },
                    Schedule: &shared.GoogleCloudDataplexV1TriggerSchedule{
                        Cron: sdk.String("aspernatur"),
                    },
                },
            },
            ExecutionStatus: &shared.GoogleCloudDataplexV1DataScanExecutionStatus{
                LatestJobEndTime: sdk.String("perferendis"),
                LatestJobStartTime: sdk.String("amet"),
            },
            Labels: map[string]string{
                "accusamus": "ad",
                "saepe": "suscipit",
                "deserunt": "provident",
                "minima": "repellendus",
            },
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        DataScanID: sdk.String("at"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("vel"),
        Parent: "quod",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("dolorum"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsDataScansCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsDataScansList

Lists DataScans.

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
    res, err := s.Projects.DataplexProjectsLocationsDataScansList(ctx, operations.DataplexProjectsLocationsDataScansListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("ipsum"),
        Filter: sdk.String("quisquam"),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("amet"),
        OrderBy: sdk.String("tempore"),
        PageSize: sdk.Int64(880298),
        PageToken: sdk.String("numquam"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("totam"),
    }, operations.DataplexProjectsLocationsDataScansListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListDataScansResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsDataTaxonomiesAttributesCreate

Create a DataAttribute resource.

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
    res, err := s.Projects.DataplexProjectsLocationsDataTaxonomiesAttributesCreate(ctx, operations.DataplexProjectsLocationsDataTaxonomiesAttributesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDataplexV1DataAttributeInput: &shared.GoogleCloudDataplexV1DataAttributeInput{
            DataAccessSpec: &shared.GoogleCloudDataplexV1DataAccessSpec{
                Readers: []string{
                    "expedita",
                },
            },
            Description: sdk.String("neque"),
            DisplayName: sdk.String("sed"),
            Etag: sdk.String("vel"),
            Labels: map[string]string{
                "voluptas": "deserunt",
                "quam": "ipsum",
                "incidunt": "qui",
            },
            ParentID: sdk.String("cupiditate"),
            ResourceAccessSpec: &shared.GoogleCloudDataplexV1ResourceAccessSpec{
                Owners: []string{
                    "pariatur",
                    "soluta",
                    "dicta",
                    "laborum",
                },
                Readers: []string{
                    "incidunt",
                    "aspernatur",
                    "dolores",
                },
                Writers: []string{
                    "facilis",
                    "aliquid",
                    "quam",
                },
            },
        },
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("qui"),
        DataAttributeID: sdk.String("neque"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("odio"),
        Parent: "sunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("hic"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsDataTaxonomiesAttributesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsDataTaxonomiesAttributesList

Lists Data Attribute resources in a DataTaxonomy.

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
    res, err := s.Projects.DataplexProjectsLocationsDataTaxonomiesAttributesList(ctx, operations.DataplexProjectsLocationsDataTaxonomiesAttributesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("et"),
        Filter: sdk.String("saepe"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("veritatis"),
        OrderBy: sdk.String("nobis"),
        PageSize: sdk.Int64(552193),
        PageToken: sdk.String("tempore"),
        Parent: "cupiditate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aperiam"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.DataplexProjectsLocationsDataTaxonomiesAttributesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListDataAttributesResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsDataTaxonomiesCreate

Create a DataTaxonomy resource.

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
    res, err := s.Projects.DataplexProjectsLocationsDataTaxonomiesCreate(ctx, operations.DataplexProjectsLocationsDataTaxonomiesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDataplexV1DataTaxonomyInput: &shared.GoogleCloudDataplexV1DataTaxonomyInput{
            Description: sdk.String("labore"),
            DisplayName: sdk.String("adipisci"),
            Etag: sdk.String("dolorum"),
            Labels: map[string]string{
                "quae": "aut",
            },
        },
        AccessToken: sdk.String("quas"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequatur"),
        DataTaxonomyID: sdk.String("est"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("doloribus"),
        Parent: "ut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("qui"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsDataTaxonomiesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsDataTaxonomiesList

Lists DataTaxonomy resources in a project and location.

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
    res, err := s.Projects.DataplexProjectsLocationsDataTaxonomiesList(ctx, operations.DataplexProjectsLocationsDataTaxonomiesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("voluptatibus"),
        Filter: sdk.String("quisquam"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("omnis"),
        OrderBy: sdk.String("quis"),
        PageSize: sdk.Int64(218403),
        PageToken: sdk.String("delectus"),
        Parent: "voluptate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.DataplexProjectsLocationsDataTaxonomiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListDataTaxonomiesResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesContentCreate

Create a content.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesContentCreate(ctx, operations.DataplexProjectsLocationsLakesContentCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDataplexV1ContentInput: &shared.GoogleCloudDataplexV1ContentInput{
            DataText: sdk.String("hic"),
            Description: sdk.String("distinctio"),
            Labels: map[string]string{
                "odio": "similique",
                "facilis": "vero",
                "ducimus": "dolore",
                "quibusdam": "illum",
            },
            Notebook: &shared.GoogleCloudDataplexV1ContentNotebook{
                KernelType: shared.GoogleCloudDataplexV1ContentNotebookKernelTypeEnumKernelTypeUnspecified.ToPointer(),
            },
            Path: sdk.String("natus"),
            SQLScript: &shared.GoogleCloudDataplexV1ContentSQLScript{
                Engine: shared.GoogleCloudDataplexV1ContentSQLScriptEngineEnumSpark.ToPointer(),
            },
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("porro"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("eligendi"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsLakesContentCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1Content != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesContentList

List content.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesContentList(ctx, operations.DataplexProjectsLocationsLakesContentListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("ipsam"),
        Filter: sdk.String("ea"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("vel"),
        PageSize: sdk.Int64(822118),
        PageToken: sdk.String("magnam"),
        Parent: "ratione",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.DataplexProjectsLocationsLakesContentListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListContentResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesContentitemsCreate

Create a content.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesContentitemsCreate(ctx, operations.DataplexProjectsLocationsLakesContentitemsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDataplexV1ContentInput: &shared.GoogleCloudDataplexV1ContentInput{
            DataText: sdk.String("maiores"),
            Description: sdk.String("quasi"),
            Labels: map[string]string{
                "nulla": "excepturi",
                "voluptatibus": "nostrum",
            },
            Notebook: &shared.GoogleCloudDataplexV1ContentNotebook{
                KernelType: shared.GoogleCloudDataplexV1ContentNotebookKernelTypeEnumPython3.ToPointer(),
            },
            Path: sdk.String("quisquam"),
            SQLScript: &shared.GoogleCloudDataplexV1ContentSQLScript{
                Engine: shared.GoogleCloudDataplexV1ContentSQLScriptEngineEnumSpark.ToPointer(),
            },
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("inventore"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("consectetur"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsLakesContentitemsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1Content != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesContentitemsList

List content.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesContentitemsList(ctx, operations.DataplexProjectsLocationsLakesContentitemsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("a"),
        Filter: sdk.String("libero"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("aut"),
        PageSize: sdk.Int64(533466),
        PageToken: sdk.String("impedit"),
        Parent: "aliquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.DataplexProjectsLocationsLakesContentitemsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListContentResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesCreate

Creates a lake resource.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesCreate(ctx, operations.DataplexProjectsLocationsLakesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDataplexV1LakeInput: &shared.GoogleCloudDataplexV1LakeInput{
            AssetStatus: &shared.GoogleCloudDataplexV1AssetStatus{
                ActiveAssets: sdk.Int(89603),
                SecurityPolicyApplyingAssets: sdk.Int(677412),
                UpdateTime: sdk.String("laborum"),
            },
            Description: sdk.String("placeat"),
            DisplayName: sdk.String("velit"),
            Labels: map[string]string{
                "autem": "nobis",
                "quas": "assumenda",
            },
            Metastore: &shared.GoogleCloudDataplexV1LakeMetastore{
                Service: sdk.String("nulla"),
            },
            MetastoreStatus: &shared.GoogleCloudDataplexV1LakeMetastoreStatus{
                Endpoint: sdk.String("voluptas"),
                Message: sdk.String("libero"),
                State: shared.GoogleCloudDataplexV1LakeMetastoreStatusStateEnumStateUnspecified.ToPointer(),
                UpdateTime: sdk.String("tempora"),
            },
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("molestiae"),
        LakeID: sdk.String("magnam"),
        OauthToken: sdk.String("odio"),
        Parent: "eius",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("rem"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsLakesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesEnvironmentsCreate

Create an environment resource.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesEnvironmentsCreate(ctx, operations.DataplexProjectsLocationsLakesEnvironmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDataplexV1EnvironmentInput: &shared.GoogleCloudDataplexV1EnvironmentInput{
            Description: sdk.String("reprehenderit"),
            DisplayName: sdk.String("quidem"),
            InfrastructureSpec: &shared.GoogleCloudDataplexV1EnvironmentInfrastructureSpec{
                Compute: &shared.GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources{
                    DiskSizeGb: sdk.Int(852635),
                    MaxNodeCount: sdk.Int(283519),
                    NodeCount: sdk.Int(433439),
                },
                OsImage: &shared.GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime{
                    ImageVersion: sdk.String("suscipit"),
                    JavaLibraries: []string{
                        "eos",
                        "praesentium",
                        "quisquam",
                        "veritatis",
                    },
                    Properties: map[string]string{
                        "id": "quidem",
                    },
                    PythonPackages: []string{
                        "quo",
                    },
                },
            },
            Labels: map[string]string{
                "quo": "fuga",
                "eius": "eos",
                "voluptas": "ab",
                "cupiditate": "consequatur",
            },
            SessionSpec: &shared.GoogleCloudDataplexV1EnvironmentSessionSpec{
                EnableFastStartup: sdk.Bool(false),
                MaxIdleDuration: sdk.String("tempora"),
            },
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        EnvironmentID: sdk.String("sequi"),
        Fields: sdk.String("quo"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("recusandae"),
        Parent: "aperiam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("dignissimos"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsLakesEnvironmentsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesEnvironmentsList

Lists environments under the given lake.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesEnvironmentsList(ctx, operations.DataplexProjectsLocationsLakesEnvironmentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("aliquam"),
        Filter: sdk.String("odio"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("commodi"),
        OrderBy: sdk.String("sapiente"),
        PageSize: sdk.Int64(174112),
        PageToken: sdk.String("deserunt"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("eum"),
    }, operations.DataplexProjectsLocationsLakesEnvironmentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListEnvironmentsResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesEnvironmentsSessionsList

Lists session resources in an environment.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesEnvironmentsSessionsList(ctx, operations.DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("fugit"),
        Filter: sdk.String("fuga"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("incidunt"),
        PageSize: sdk.Int64(539224),
        PageToken: sdk.String("explicabo"),
        Parent: "minima",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListSessionsResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesList

Lists lake resources in a project and location.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesList(ctx, operations.DataplexProjectsLocationsLakesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ratione"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("occaecati"),
        Filter: sdk.String("atque"),
        Key: sdk.String("et"),
        OauthToken: sdk.String("esse"),
        OrderBy: sdk.String("eveniet"),
        PageSize: sdk.Int64(882042),
        PageToken: sdk.String("veritatis"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("vero"),
    }, operations.DataplexProjectsLocationsLakesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListLakesResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesTasksCreate

Creates a task resource within a lake.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesTasksCreate(ctx, operations.DataplexProjectsLocationsLakesTasksCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDataplexV1TaskInput: &shared.GoogleCloudDataplexV1TaskInput{
            Description: sdk.String("quasi"),
            DisplayName: sdk.String("saepe"),
            ExecutionSpec: &shared.GoogleCloudDataplexV1TaskExecutionSpec{
                Args: map[string]string{
                    "harum": "molestiae",
                    "rerum": "occaecati",
                },
                KmsKey: sdk.String("minima"),
                MaxJobExecutionLifetime: sdk.String("distinctio"),
                Project: sdk.String("eligendi"),
                ServiceAccount: sdk.String("sit"),
            },
            Labels: map[string]string{
                "tempore": "adipisci",
                "cumque": "consequuntur",
                "consequatur": "minus",
            },
            Notebook: &shared.GoogleCloudDataplexV1TaskNotebookTaskConfig{
                ArchiveUris: []string{
                    "sapiente",
                    "consectetur",
                },
                FileUris: []string{
                    "blanditiis",
                    "provident",
                },
                InfrastructureSpec: &shared.GoogleCloudDataplexV1TaskInfrastructureSpec{
                    Batch: &shared.GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources{
                        ExecutorsCount: sdk.Int(953722),
                        MaxExecutorsCount: sdk.Int(857723),
                    },
                    ContainerImage: &shared.GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime{
                        Image: sdk.String("quas"),
                        JavaJars: []string{
                            "quasi",
                            "a",
                        },
                        Properties: map[string]string{
                            "sint": "pariatur",
                            "possimus": "quia",
                            "eveniet": "asperiores",
                        },
                        PythonPackages: []string{
                            "veritatis",
                            "consequuntur",
                            "quasi",
                            "similique",
                        },
                    },
                    VpcNetwork: &shared.GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork{
                        Network: sdk.String("culpa"),
                        NetworkTags: []string{
                            "tenetur",
                            "quae",
                        },
                        SubNetwork: sdk.String("earum"),
                    },
                },
                Notebook: sdk.String("vel"),
            },
            Spark: &shared.GoogleCloudDataplexV1TaskSparkTaskConfig{
                ArchiveUris: []string{
                    "eius",
                    "libero",
                },
                FileUris: []string{
                    "soluta",
                    "accusantium",
                    "aliquam",
                    "sapiente",
                },
                InfrastructureSpec: &shared.GoogleCloudDataplexV1TaskInfrastructureSpec{
                    Batch: &shared.GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources{
                        ExecutorsCount: sdk.Int(119771),
                        MaxExecutorsCount: sdk.Int(355369),
                    },
                    ContainerImage: &shared.GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime{
                        Image: sdk.String("reprehenderit"),
                        JavaJars: []string{
                            "nisi",
                            "aut",
                        },
                        Properties: map[string]string{
                            "qui": "quibusdam",
                            "ex": "deleniti",
                            "itaque": "dolorum",
                        },
                        PythonPackages: []string{
                            "omnis",
                        },
                    },
                    VpcNetwork: &shared.GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork{
                        Network: sdk.String("tenetur"),
                        NetworkTags: []string{
                            "at",
                        },
                        SubNetwork: sdk.String("et"),
                    },
                },
                MainClass: sdk.String("voluptate"),
                MainJarFileURI: sdk.String("ipsa"),
                PythonScriptFile: sdk.String("minima"),
                SQLScript: sdk.String("veritatis"),
                SQLScriptFile: sdk.String("consectetur"),
            },
            TriggerSpec: &shared.GoogleCloudDataplexV1TaskTriggerSpec{
                Disabled: sdk.Bool(false),
                MaxRetries: sdk.Int(237173),
                Schedule: sdk.String("iste"),
                StartTime: sdk.String("temporibus"),
                Type: shared.GoogleCloudDataplexV1TaskTriggerSpecTypeEnumTypeUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("eum"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("ab"),
        Parent: "corrupti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        TaskID: sdk.String("voluptatem"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("occaecati"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsLakesTasksCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesTasksJobsList

Lists Jobs under the given task.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesTasksJobsList(ctx, operations.DataplexProjectsLocationsLakesTasksJobsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("aut"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("dicta"),
        PageSize: sdk.Int64(981640),
        PageToken: sdk.String("natus"),
        Parent: "velit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.DataplexProjectsLocationsLakesTasksJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListJobsResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesTasksList

Lists tasks under the given lake.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesTasksList(ctx, operations.DataplexProjectsLocationsLakesTasksListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("repellendus"),
        Filter: sdk.String("officia"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("dignissimos"),
        OrderBy: sdk.String("officia"),
        PageSize: sdk.Int64(989410),
        PageToken: sdk.String("nemo"),
        Parent: "quae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("quod"),
    }, operations.DataplexProjectsLocationsLakesTasksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListTasksResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesTasksRun

Run an on demand execution of a Task.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesTasksRun(ctx, operations.DataplexProjectsLocationsLakesTasksRunRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "adipisci": "fuga",
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("est"),
        Name: "Felix Stehr",
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.DataplexProjectsLocationsLakesTasksRunSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1RunTaskResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesAssetsActionsList

Lists action resources in an asset.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesAssetsActionsList(ctx, operations.DataplexProjectsLocationsLakesZonesAssetsActionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("assumenda"),
        PageSize: sdk.Int64(363161),
        PageToken: sdk.String("recusandae"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aperiam"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.DataplexProjectsLocationsLakesZonesAssetsActionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListActionsResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesAssetsCreate

Creates an asset resource.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesAssetsCreate(ctx, operations.DataplexProjectsLocationsLakesZonesAssetsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDataplexV1AssetInput: &shared.GoogleCloudDataplexV1AssetInput{
            Description: sdk.String("exercitationem"),
            DiscoverySpec: &shared.GoogleCloudDataplexV1AssetDiscoverySpec{
                CsvOptions: &shared.GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions{
                    Delimiter: sdk.String("earum"),
                    DisableTypeInference: sdk.Bool(false),
                    Encoding: sdk.String("facere"),
                    HeaderRows: sdk.Int(257233),
                },
                Enabled: sdk.Bool(false),
                ExcludePatterns: []string{
                    "suscipit",
                    "reiciendis",
                    "quidem",
                    "saepe",
                },
                IncludePatterns: []string{
                    "dolore",
                    "sunt",
                    "asperiores",
                    "adipisci",
                },
                JSONOptions: &shared.GoogleCloudDataplexV1AssetDiscoverySpecJSONOptions{
                    DisableTypeInference: sdk.Bool(false),
                    Encoding: sdk.String("non"),
                },
                Schedule: sdk.String("amet"),
            },
            DiscoveryStatus: &shared.GoogleCloudDataplexV1AssetDiscoveryStatus{
                LastRunDuration: sdk.String("beatae"),
                LastRunTime: sdk.String("dignissimos"),
                Message: sdk.String("a"),
                State: shared.GoogleCloudDataplexV1AssetDiscoveryStatusStateEnumDisabled.ToPointer(),
                Stats: &shared.GoogleCloudDataplexV1AssetDiscoveryStatusStats{
                    DataItems: sdk.String("consectetur"),
                    DataSize: sdk.String("corporis"),
                    Filesets: sdk.String("harum"),
                    Tables: sdk.String("laboriosam"),
                },
                UpdateTime: sdk.String("ipsa"),
            },
            DisplayName: sdk.String("voluptates"),
            Labels: map[string]string{
                "vitae": "accusamus",
                "similique": "tempora",
                "aspernatur": "voluptas",
            },
            ResourceSpec: &shared.GoogleCloudDataplexV1AssetResourceSpec{
                Name: sdk.String("Melanie Hane"),
                ReadAccessMode: shared.GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnumAccessModeUnspecified.ToPointer(),
                Type: shared.GoogleCloudDataplexV1AssetResourceSpecTypeEnumBigqueryDataset.ToPointer(),
            },
            ResourceStatus: &shared.GoogleCloudDataplexV1AssetResourceStatusInput{
                Message: sdk.String("dolores"),
                State: shared.GoogleCloudDataplexV1AssetResourceStatusStateEnumReady.ToPointer(),
                UpdateTime: sdk.String("in"),
            },
            SecurityStatus: &shared.GoogleCloudDataplexV1AssetSecurityStatus{
                Message: sdk.String("dolore"),
                State: shared.GoogleCloudDataplexV1AssetSecurityStatusStateEnumReady.ToPointer(),
                UpdateTime: sdk.String("officiis"),
            },
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AssetID: sdk.String("adipisci"),
        Callback: sdk.String("cum"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("hic"),
        Parent: "nesciunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("pariatur"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsLakesZonesAssetsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesAssetsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicy(ctx, operations.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("sit"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("sed"),
        OptionsRequestedPolicyVersion: sdk.Int64(967966),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        Resource: "asperiores",
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesAssetsList

Lists asset resources in a zone.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesAssetsList(ctx, operations.DataplexProjectsLocationsLakesZonesAssetsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("laborum"),
        Filter: sdk.String("sed"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("commodi"),
        OrderBy: sdk.String("quidem"),
        PageSize: sdk.Int64(131289),
        PageToken: sdk.String("voluptas"),
        Parent: "unde",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.DataplexProjectsLocationsLakesZonesAssetsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListAssetsResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesAssetsPatch

Updates an asset resource.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesAssetsPatch(ctx, operations.DataplexProjectsLocationsLakesZonesAssetsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDataplexV1AssetInput: &shared.GoogleCloudDataplexV1AssetInput{
            Description: sdk.String("illo"),
            DiscoverySpec: &shared.GoogleCloudDataplexV1AssetDiscoverySpec{
                CsvOptions: &shared.GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions{
                    Delimiter: sdk.String("reiciendis"),
                    DisableTypeInference: sdk.Bool(false),
                    Encoding: sdk.String("perferendis"),
                    HeaderRows: sdk.Int(546885),
                },
                Enabled: sdk.Bool(false),
                ExcludePatterns: []string{
                    "incidunt",
                    "sed",
                    "provident",
                    "eius",
                },
                IncludePatterns: []string{
                    "ipsum",
                    "ea",
                    "occaecati",
                    "quos",
                },
                JSONOptions: &shared.GoogleCloudDataplexV1AssetDiscoverySpecJSONOptions{
                    DisableTypeInference: sdk.Bool(false),
                    Encoding: sdk.String("voluptatibus"),
                },
                Schedule: sdk.String("tempora"),
            },
            DiscoveryStatus: &shared.GoogleCloudDataplexV1AssetDiscoveryStatus{
                LastRunDuration: sdk.String("tempora"),
                LastRunTime: sdk.String("voluptate"),
                Message: sdk.String("reiciendis"),
                State: shared.GoogleCloudDataplexV1AssetDiscoveryStatusStateEnumInProgress.ToPointer(),
                Stats: &shared.GoogleCloudDataplexV1AssetDiscoveryStatusStats{
                    DataItems: sdk.String("sit"),
                    DataSize: sdk.String("non"),
                    Filesets: sdk.String("officiis"),
                    Tables: sdk.String("praesentium"),
                },
                UpdateTime: sdk.String("facilis"),
            },
            DisplayName: sdk.String("quaerat"),
            Labels: map[string]string{
                "ipsam": "debitis",
                "rem": "sit",
            },
            ResourceSpec: &shared.GoogleCloudDataplexV1AssetResourceSpec{
                Name: sdk.String("Julius Hartmann"),
                ReadAccessMode: shared.GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnumManaged.ToPointer(),
                Type: shared.GoogleCloudDataplexV1AssetResourceSpecTypeEnumBigqueryDataset.ToPointer(),
            },
            ResourceStatus: &shared.GoogleCloudDataplexV1AssetResourceStatusInput{
                Message: sdk.String("magni"),
                State: shared.GoogleCloudDataplexV1AssetResourceStatusStateEnumStateUnspecified.ToPointer(),
                UpdateTime: sdk.String("saepe"),
            },
            SecurityStatus: &shared.GoogleCloudDataplexV1AssetSecurityStatus{
                Message: sdk.String("numquam"),
                State: shared.GoogleCloudDataplexV1AssetSecurityStatusStateEnumReady.ToPointer(),
                UpdateTime: sdk.String("in"),
            },
        },
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("praesentium"),
        Name: "Lester Parisian",
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UpdateMask: sdk.String("debitis"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("dolorum"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsLakesZonesAssetsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesAssetsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicy(ctx, operations.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIamV1SetIamPolicyRequest: &shared.GoogleIamV1SetIamPolicyRequest{
            Policy: &shared.GoogleIamV1Policy{
                AuditConfigs: []shared.GoogleIamV1AuditConfig{
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "accusamus",
                                    "tempora",
                                    "atque",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "fugiat",
                                    "voluptatem",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "magnam",
                                    "consequatur",
                                    "esse",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("sit"),
                    },
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "repudiandae",
                                    "corporis",
                                    "et",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "sed",
                                    "sit",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "saepe",
                                    "error",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("incidunt"),
                    },
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "harum",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "occaecati",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "atque",
                                    "laborum",
                                    "nam",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "alias",
                                    "amet",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("voluptate"),
                    },
                },
                Bindings: []shared.GoogleIamV1Binding{
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("reiciendis"),
                            Expression: sdk.String("provident"),
                            Location: sdk.String("repellendus"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "perferendis",
                            "est",
                            "quidem",
                            "reprehenderit",
                        },
                        Role: sdk.String("facere"),
                    },
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("fuga"),
                            Expression: sdk.String("praesentium"),
                            Location: sdk.String("mollitia"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "quisquam",
                        },
                        Role: sdk.String("repudiandae"),
                    },
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("quasi"),
                            Expression: sdk.String("atque"),
                            Location: sdk.String("reprehenderit"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "suscipit",
                            "quidem",
                            "maxime",
                        },
                        Role: sdk.String("et"),
                    },
                },
                Etag: sdk.String("esse"),
                Version: sdk.Int(227759),
            },
            UpdateMask: sdk.String("assumenda"),
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        Resource: "minima",
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("ex"),
    }, operations.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesAssetsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissions(ctx, operations.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleIamV1TestIamPermissionsRequest: &shared.GoogleIamV1TestIamPermissionsRequest{
            Permissions: []string{
                "at",
                "error",
                "blanditiis",
            },
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("atque"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        Resource: "repellendus",
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesCreate

Creates a zone resource within a lake.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesCreate(ctx, operations.DataplexProjectsLocationsLakesZonesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDataplexV1ZoneInput: &shared.GoogleCloudDataplexV1ZoneInput{
            AssetStatus: &shared.GoogleCloudDataplexV1AssetStatus{
                ActiveAssets: sdk.Int(919783),
                SecurityPolicyApplyingAssets: sdk.Int(116098),
                UpdateTime: sdk.String("accusantium"),
            },
            Description: sdk.String("beatae"),
            DiscoverySpec: &shared.GoogleCloudDataplexV1ZoneDiscoverySpec{
                CsvOptions: &shared.GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions{
                    Delimiter: sdk.String("dolores"),
                    DisableTypeInference: sdk.Bool(false),
                    Encoding: sdk.String("enim"),
                    HeaderRows: sdk.Int(389135),
                },
                Enabled: sdk.Bool(false),
                ExcludePatterns: []string{
                    "a",
                },
                IncludePatterns: []string{
                    "magnam",
                    "saepe",
                    "consequuntur",
                },
                JSONOptions: &shared.GoogleCloudDataplexV1ZoneDiscoverySpecJSONOptions{
                    DisableTypeInference: sdk.Bool(false),
                    Encoding: sdk.String("occaecati"),
                },
                Schedule: sdk.String("officiis"),
            },
            DisplayName: sdk.String("perspiciatis"),
            Labels: map[string]string{
                "adipisci": "eveniet",
                "occaecati": "consequuntur",
            },
            ResourceSpec: &shared.GoogleCloudDataplexV1ZoneResourceSpec{
                LocationType: shared.GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnumLocationTypeUnspecified.ToPointer(),
            },
            Type: shared.GoogleCloudDataplexV1ZoneTypeEnumRaw.ToPointer(),
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("illo"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("quidem"),
        Parent: "eveniet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("doloremque"),
        ValidateOnly: sdk.Bool(false),
        ZoneID: sdk.String("iure"),
    }, operations.DataplexProjectsLocationsLakesZonesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesEntitiesCreate

Create a metadata entity.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesEntitiesCreate(ctx, operations.DataplexProjectsLocationsLakesZonesEntitiesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDataplexV1EntityInput: &shared.GoogleCloudDataplexV1EntityInput{
            Asset: sdk.String("totam"),
            DataPath: sdk.String("quae"),
            DataPathPattern: sdk.String("molestiae"),
            Description: sdk.String("eveniet"),
            DisplayName: sdk.String("qui"),
            Etag: sdk.String("cum"),
            Format: &shared.GoogleCloudDataplexV1StorageFormatInput{
                CompressionFormat: shared.GoogleCloudDataplexV1StorageFormatCompressionFormatEnumGzip.ToPointer(),
                Csv: &shared.GoogleCloudDataplexV1StorageFormatCsvOptions{
                    Delimiter: sdk.String("necessitatibus"),
                    Encoding: sdk.String("ratione"),
                    HeaderRows: sdk.Int(672582),
                    Quote: sdk.String("distinctio"),
                },
                Iceberg: &shared.GoogleCloudDataplexV1StorageFormatIcebergOptions{
                    MetadataLocation: sdk.String("voluptatum"),
                },
                JSON: &shared.GoogleCloudDataplexV1StorageFormatJSONOptions{
                    Encoding: sdk.String("rem"),
                },
                MimeType: sdk.String("aliquam"),
            },
            ID: sdk.String("5f0597a6-0ff2-4a54-a31e-94764a3e865e"),
            Schema: &shared.GoogleCloudDataplexV1Schema{
                Fields: []shared.GoogleCloudDataplexV1SchemaSchemaField{
                    shared.GoogleCloudDataplexV1SchemaSchemaField{
                        Description: sdk.String("provident"),
                        Fields: []shared.GoogleCloudDataplexV1SchemaSchemaField{
                            shared.GoogleCloudDataplexV1SchemaSchemaField{},
                            shared.GoogleCloudDataplexV1SchemaSchemaField{},
                        },
                        Mode: shared.GoogleCloudDataplexV1SchemaSchemaFieldModeEnumRequired.ToPointer(),
                        Name: sdk.String("Terrence Collier MD"),
                        Type: shared.GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumInt64.ToPointer(),
                    },
                    shared.GoogleCloudDataplexV1SchemaSchemaField{
                        Description: sdk.String("mollitia"),
                        Fields: []shared.GoogleCloudDataplexV1SchemaSchemaField{
                            shared.GoogleCloudDataplexV1SchemaSchemaField{},
                            shared.GoogleCloudDataplexV1SchemaSchemaField{},
                            shared.GoogleCloudDataplexV1SchemaSchemaField{},
                        },
                        Mode: shared.GoogleCloudDataplexV1SchemaSchemaFieldModeEnumRepeated.ToPointer(),
                        Name: sdk.String("Dr. Reginald Hyatt"),
                        Type: shared.GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumInt64.ToPointer(),
                    },
                },
                PartitionFields: []shared.GoogleCloudDataplexV1SchemaPartitionField{
                    shared.GoogleCloudDataplexV1SchemaPartitionField{
                        Name: sdk.String("Darin Nienow"),
                        Type: shared.GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumInt32.ToPointer(),
                    },
                    shared.GoogleCloudDataplexV1SchemaPartitionField{
                        Name: sdk.String("Virgil Towne"),
                        Type: shared.GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumBoolean.ToPointer(),
                    },
                },
                PartitionStyle: shared.GoogleCloudDataplexV1SchemaPartitionStyleEnumHiveCompatible.ToPointer(),
                UserManaged: sdk.Bool(false),
            },
            System: shared.GoogleCloudDataplexV1EntitySystemEnumStorageSystemUnspecified.ToPointer(),
            Type: shared.GoogleCloudDataplexV1EntityTypeEnumTable.ToPointer(),
        },
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("quae"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("velit"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("rem"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1Entity != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesEntitiesList

List metadata entities in a zone.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesEntitiesList(ctx, operations.DataplexProjectsLocationsLakesZonesEntitiesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("eum"),
        Filter: sdk.String("dicta"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("beatae"),
        PageSize: sdk.Int64(583404),
        PageToken: sdk.String("provident"),
        Parent: "earum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("illum"),
        View: operations.DataplexProjectsLocationsLakesZonesEntitiesListViewEnumEntityViewUnspecified.ToPointer(),
    }, operations.DataplexProjectsLocationsLakesZonesEntitiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListEntitiesResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate

Create a metadata partition.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate(ctx, operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDataplexV1PartitionInput: &shared.GoogleCloudDataplexV1PartitionInput{
            Etag: sdk.String("perspiciatis"),
            Location: sdk.String("maiores"),
            Values: []string{
                "aliquid",
                "porro",
                "suscipit",
                "dolorem",
            },
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("ratione"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("necessitatibus"),
        Parent: "nulla",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("et"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1Partition != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesEntitiesPartitionsList

List metadata partitions of an entity.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesEntitiesPartitionsList(ctx, operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("adipisci"),
        Filter: sdk.String("quasi"),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("doloribus"),
        PageSize: sdk.Int64(859581),
        PageToken: sdk.String("necessitatibus"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListPartitionsResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesEntitiesUpdate

Update a metadata entity. Only supports full resource update.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesEntitiesUpdate(ctx, operations.DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDataplexV1EntityInput: &shared.GoogleCloudDataplexV1EntityInput{
            Asset: sdk.String("iusto"),
            DataPath: sdk.String("esse"),
            DataPathPattern: sdk.String("praesentium"),
            Description: sdk.String("maiores"),
            DisplayName: sdk.String("reiciendis"),
            Etag: sdk.String("vel"),
            Format: &shared.GoogleCloudDataplexV1StorageFormatInput{
                CompressionFormat: shared.GoogleCloudDataplexV1StorageFormatCompressionFormatEnumCompressionFormatUnspecified.ToPointer(),
                Csv: &shared.GoogleCloudDataplexV1StorageFormatCsvOptions{
                    Delimiter: sdk.String("fugiat"),
                    Encoding: sdk.String("doloremque"),
                    HeaderRows: sdk.Int(117315),
                    Quote: sdk.String("odio"),
                },
                Iceberg: &shared.GoogleCloudDataplexV1StorageFormatIcebergOptions{
                    MetadataLocation: sdk.String("tempora"),
                },
                JSON: &shared.GoogleCloudDataplexV1StorageFormatJSONOptions{
                    Encoding: sdk.String("esse"),
                },
                MimeType: sdk.String("ex"),
            },
            ID: sdk.String("360a15db-6a66-4065-9a1a-deaab5851d6c"),
            Schema: &shared.GoogleCloudDataplexV1Schema{
                Fields: []shared.GoogleCloudDataplexV1SchemaSchemaField{
                    shared.GoogleCloudDataplexV1SchemaSchemaField{
                        Description: sdk.String("ut"),
                        Fields: []shared.GoogleCloudDataplexV1SchemaSchemaField{
                            shared.GoogleCloudDataplexV1SchemaSchemaField{},
                            shared.GoogleCloudDataplexV1SchemaSchemaField{},
                        },
                        Mode: shared.GoogleCloudDataplexV1SchemaSchemaFieldModeEnumNullable.ToPointer(),
                        Name: sdk.String("Leona Rippin IV"),
                        Type: shared.GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumString.ToPointer(),
                    },
                    shared.GoogleCloudDataplexV1SchemaSchemaField{
                        Description: sdk.String("veritatis"),
                        Fields: []shared.GoogleCloudDataplexV1SchemaSchemaField{
                            shared.GoogleCloudDataplexV1SchemaSchemaField{},
                            shared.GoogleCloudDataplexV1SchemaSchemaField{},
                            shared.GoogleCloudDataplexV1SchemaSchemaField{},
                        },
                        Mode: shared.GoogleCloudDataplexV1SchemaSchemaFieldModeEnumNullable.ToPointer(),
                        Name: sdk.String("Donald Williamson MD"),
                        Type: shared.GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumTime.ToPointer(),
                    },
                },
                PartitionFields: []shared.GoogleCloudDataplexV1SchemaPartitionField{
                    shared.GoogleCloudDataplexV1SchemaPartitionField{
                        Name: sdk.String("Mary Leuschke"),
                        Type: shared.GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumNull.ToPointer(),
                    },
                    shared.GoogleCloudDataplexV1SchemaPartitionField{
                        Name: sdk.String("Israel Hickle"),
                        Type: shared.GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumInt64.ToPointer(),
                    },
                    shared.GoogleCloudDataplexV1SchemaPartitionField{
                        Name: sdk.String("Desiree Leannon"),
                        Type: shared.GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumTimestamp.ToPointer(),
                    },
                    shared.GoogleCloudDataplexV1SchemaPartitionField{
                        Name: sdk.String("Molly Fadel IV"),
                        Type: shared.GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumBoolean.ToPointer(),
                    },
                },
                PartitionStyle: shared.GoogleCloudDataplexV1SchemaPartitionStyleEnumPartitionStyleUnspecified.ToPointer(),
                UserManaged: sdk.Bool(false),
            },
            System: shared.GoogleCloudDataplexV1EntitySystemEnumStorageSystemUnspecified.ToPointer(),
            Type: shared.GoogleCloudDataplexV1EntityTypeEnumTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("ab"),
        Name: "Eric Fadel",
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("eveniet"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1Entity != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsLakesZonesList

Lists zone resources in a lake.

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
    res, err := s.Projects.DataplexProjectsLocationsLakesZonesList(ctx, operations.DataplexProjectsLocationsLakesZonesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("sed"),
        Filter: sdk.String("veniam"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("expedita"),
        OrderBy: sdk.String("eum"),
        PageSize: sdk.Int64(426943),
        PageToken: sdk.String("voluptatum"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("exercitationem"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("porro"),
    }, operations.DataplexProjectsLocationsLakesZonesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDataplexV1ListZonesResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsList

Lists information about the supported locations for this service.

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
    res, err := s.Projects.DataplexProjectsLocationsList(ctx, operations.DataplexProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("consequuntur"),
        Filter: sdk.String("voluptatem"),
        Key: sdk.String("exercitationem"),
        Name: "Arthur Huel",
        OauthToken: sdk.String("est"),
        PageSize: sdk.Int64(690785),
        PageToken: sdk.String("sequi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("optio"),
    }, operations.DataplexProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudLocationListLocationsResponse != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

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
    res, err := s.Projects.DataplexProjectsLocationsOperationsCancel(ctx, operations.DataplexProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "voluptate": "blanditiis",
            "officia": "voluptas",
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("eius"),
        Key: sdk.String("aspernatur"),
        Name: "Peggy Parker",
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.DataplexProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

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
    res, err := s.Projects.DataplexProjectsLocationsOperationsDelete(ctx, operations.DataplexProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aperiam"),
        Etag: sdk.String("cupiditate"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("soluta"),
        Name: "Belinda Daugherty",
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.DataplexProjectsLocationsOperationsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.DataplexProjectsLocationsOperationsGet(ctx, operations.DataplexProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("minima"),
        Key: sdk.String("praesentium"),
        Name: "Oscar Smith",
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("earum"),
        View: operations.DataplexProjectsLocationsOperationsGetViewEnumBasic.ToPointer(),
    }, operations.DataplexProjectsLocationsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DataplexProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

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
    res, err := s.Projects.DataplexProjectsLocationsOperationsList(ctx, operations.DataplexProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("vel"),
        Filter: sdk.String("alias"),
        Key: sdk.String("quasi"),
        Name: "Shawna Hamill",
        OauthToken: sdk.String("deserunt"),
        PageSize: sdk.Int64(458503),
        PageToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("quis"),
    }, operations.DataplexProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```
