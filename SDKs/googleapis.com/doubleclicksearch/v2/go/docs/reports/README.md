# Reports

### Available Operations

* [DoubleclicksearchReportsGenerate](#doubleclicksearchreportsgenerate) - Generates and returns a report immediately.
* [DoubleclicksearchReportsGet](#doubleclicksearchreportsget) - Polls for the status of a report request.
* [DoubleclicksearchReportsGetFile](#doubleclicksearchreportsgetfile) - Downloads a report file encoded in UTF-8.
* [DoubleclicksearchReportsGetIDMappingFile](#doubleclicksearchreportsgetidmappingfile) - Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.
* [DoubleclicksearchReportsRequest](#doubleclicksearchreportsrequest) - Inserts a report request into the reporting system.

## DoubleclicksearchReportsGenerate

Generates and returns a report immediately.

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
    res, err := s.Reports.DoubleclicksearchReportsGenerate(ctx, operations.DoubleclicksearchReportsGenerateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReportRequest: &shared.ReportRequest{
            Columns: []shared.ReportAPIColumnSpec{
                shared.ReportAPIColumnSpec{
                    ColumnName: sdk.String("accusamus"),
                    CustomDimensionName: sdk.String("quidem"),
                    CustomMetricName: sdk.String("voluptatibus"),
                    EndDate: sdk.String("voluptas"),
                    GroupByColumn: sdk.Bool(false),
                    HeaderText: sdk.String("natus"),
                    PlatformSource: sdk.String("eos"),
                    ProductReportPerspective: sdk.String("atque"),
                    SavedColumnName: sdk.String("sit"),
                    StartDate: sdk.String("fugiat"),
                },
                shared.ReportAPIColumnSpec{
                    ColumnName: sdk.String("ab"),
                    CustomDimensionName: sdk.String("soluta"),
                    CustomMetricName: sdk.String("dolorum"),
                    EndDate: sdk.String("iusto"),
                    GroupByColumn: sdk.Bool(false),
                    HeaderText: sdk.String("voluptate"),
                    PlatformSource: sdk.String("dolorum"),
                    ProductReportPerspective: sdk.String("deleniti"),
                    SavedColumnName: sdk.String("omnis"),
                    StartDate: sdk.String("necessitatibus"),
                },
            },
            DownloadFormat: sdk.String("distinctio"),
            Filters: []shared.ReportRequestFilters{
                shared.ReportRequestFilters{
                    Column: &shared.ReportAPIColumnSpec{
                        ColumnName: sdk.String("nihil"),
                        CustomDimensionName: sdk.String("ipsum"),
                        CustomMetricName: sdk.String("voluptate"),
                        EndDate: sdk.String("id"),
                        GroupByColumn: sdk.Bool(false),
                        HeaderText: sdk.String("saepe"),
                        PlatformSource: sdk.String("eius"),
                        ProductReportPerspective: sdk.String("aspernatur"),
                        SavedColumnName: sdk.String("perferendis"),
                        StartDate: sdk.String("amet"),
                    },
                    Operator: sdk.String("optio"),
                    Values: []interface{}{
                        "ad",
                        "saepe",
                        "suscipit",
                        "deserunt",
                    },
                },
                shared.ReportRequestFilters{
                    Column: &shared.ReportAPIColumnSpec{
                        ColumnName: sdk.String("provident"),
                        CustomDimensionName: sdk.String("minima"),
                        CustomMetricName: sdk.String("repellendus"),
                        EndDate: sdk.String("totam"),
                        GroupByColumn: sdk.Bool(false),
                        HeaderText: sdk.String("similique"),
                        PlatformSource: sdk.String("alias"),
                        ProductReportPerspective: sdk.String("at"),
                        SavedColumnName: sdk.String("quaerat"),
                        StartDate: sdk.String("tempora"),
                    },
                    Operator: sdk.String("vel"),
                    Values: []interface{}{
                        "officiis",
                        "qui",
                        "dolorum",
                        "a",
                    },
                },
                shared.ReportRequestFilters{
                    Column: &shared.ReportAPIColumnSpec{
                        ColumnName: sdk.String("esse"),
                        CustomDimensionName: sdk.String("harum"),
                        CustomMetricName: sdk.String("iusto"),
                        EndDate: sdk.String("ipsum"),
                        GroupByColumn: sdk.Bool(false),
                        HeaderText: sdk.String("quisquam"),
                        PlatformSource: sdk.String("tenetur"),
                        ProductReportPerspective: sdk.String("amet"),
                        SavedColumnName: sdk.String("tempore"),
                        StartDate: sdk.String("accusamus"),
                    },
                    Operator: sdk.String("numquam"),
                    Values: []interface{}{
                        "dolorem",
                        "sapiente",
                    },
                },
                shared.ReportRequestFilters{
                    Column: &shared.ReportAPIColumnSpec{
                        ColumnName: sdk.String("totam"),
                        CustomDimensionName: sdk.String("nihil"),
                        CustomMetricName: sdk.String("sit"),
                        EndDate: sdk.String("expedita"),
                        GroupByColumn: sdk.Bool(false),
                        HeaderText: sdk.String("neque"),
                        PlatformSource: sdk.String("sed"),
                        ProductReportPerspective: sdk.String("vel"),
                        SavedColumnName: sdk.String("libero"),
                        StartDate: sdk.String("voluptas"),
                    },
                    Operator: sdk.String("deserunt"),
                    Values: []interface{}{
                        "ipsum",
                        "incidunt",
                    },
                },
            },
            IncludeDeletedEntities: sdk.Bool(false),
            IncludeRemovedEntities: sdk.Bool(false),
            MaxRowsPerFile: sdk.Int(186458),
            OrderBy: []shared.ReportRequestOrderBy{
                shared.ReportRequestOrderBy{
                    Column: &shared.ReportAPIColumnSpec{
                        ColumnName: sdk.String("maxime"),
                        CustomDimensionName: sdk.String("pariatur"),
                        CustomMetricName: sdk.String("soluta"),
                        EndDate: sdk.String("dicta"),
                        GroupByColumn: sdk.Bool(false),
                        HeaderText: sdk.String("laborum"),
                        PlatformSource: sdk.String("totam"),
                        ProductReportPerspective: sdk.String("incidunt"),
                        SavedColumnName: sdk.String("aspernatur"),
                        StartDate: sdk.String("dolores"),
                    },
                    SortOrder: sdk.String("distinctio"),
                },
                shared.ReportRequestOrderBy{
                    Column: &shared.ReportAPIColumnSpec{
                        ColumnName: sdk.String("facilis"),
                        CustomDimensionName: sdk.String("aliquid"),
                        CustomMetricName: sdk.String("quam"),
                        EndDate: sdk.String("molestias"),
                        GroupByColumn: sdk.Bool(false),
                        HeaderText: sdk.String("temporibus"),
                        PlatformSource: sdk.String("qui"),
                        ProductReportPerspective: sdk.String("neque"),
                        SavedColumnName: sdk.String("fugit"),
                        StartDate: sdk.String("magni"),
                    },
                    SortOrder: sdk.String("odio"),
                },
                shared.ReportRequestOrderBy{
                    Column: &shared.ReportAPIColumnSpec{
                        ColumnName: sdk.String("sunt"),
                        CustomDimensionName: sdk.String("ullam"),
                        CustomMetricName: sdk.String("nam"),
                        EndDate: sdk.String("hic"),
                        GroupByColumn: sdk.Bool(false),
                        HeaderText: sdk.String("voluptatem"),
                        PlatformSource: sdk.String("cumque"),
                        ProductReportPerspective: sdk.String("soluta"),
                        SavedColumnName: sdk.String("nobis"),
                        StartDate: sdk.String("et"),
                    },
                    SortOrder: sdk.String("saepe"),
                },
            },
            ReportScope: &shared.ReportRequestReportScope{
                AdGroupID: sdk.String("ipsum"),
                AdID: sdk.String("veritatis"),
                AdvertiserID: sdk.String("nobis"),
                AgencyID: sdk.String("quos"),
                CampaignID: sdk.String("tempore"),
                EngineAccountID: sdk.String("cupiditate"),
                KeywordID: sdk.String("aperiam"),
            },
            ReportType: sdk.String("delectus"),
            RowCount: sdk.Int(209157),
            StartRow: sdk.Int(292147),
            StatisticsCurrency: sdk.String("labore"),
            TimeRange: &shared.ReportRequestTimeRange{
                ChangedAttributesSinceTimestamp: sdk.String("adipisci"),
                ChangedMetricsSinceTimestamp: sdk.String("dolorum"),
                EndDate: sdk.String("architecto"),
                StartDate: sdk.String("quae"),
            },
            VerifySingleTimeZone: sdk.Bool(false),
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("ut"),
    }, operations.DoubleclicksearchReportsGenerateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```

## DoubleclicksearchReportsGet

Polls for the status of a report request.

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
    res, err := s.Reports.DoubleclicksearchReportsGet(ctx, operations.DoubleclicksearchReportsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        ReportID: "quisquam",
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.DoubleclicksearchReportsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```

## DoubleclicksearchReportsGetFile

Downloads a report file encoded in UTF-8.

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
    res, err := s.Reports.DoubleclicksearchReportsGetFile(ctx, operations.DoubleclicksearchReportsGetFileRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("consectetur"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        ReportFragment: 941378,
        ReportID: "distinctio",
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("odio"),
    }, operations.DoubleclicksearchReportsGetFileSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DoubleclicksearchReportsGetIDMappingFile

Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.

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
    res, err := s.Reports.DoubleclicksearchReportsGetIDMappingFile(ctx, operations.DoubleclicksearchReportsGetIDMappingFileRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        AdvertiserID: "vero",
        AgencyID: "ducimus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("illum"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.DoubleclicksearchReportsGetIDMappingFileSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IDMappingFile != nil {
        // handle response
    }
}
```

## DoubleclicksearchReportsRequest

Inserts a report request into the reporting system.

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
    res, err := s.Reports.DoubleclicksearchReportsRequest(ctx, operations.DoubleclicksearchReportsRequestRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReportRequest: &shared.ReportRequest{
            Columns: []shared.ReportAPIColumnSpec{
                shared.ReportAPIColumnSpec{
                    ColumnName: sdk.String("fugit"),
                    CustomDimensionName: sdk.String("porro"),
                    CustomMetricName: sdk.String("maiores"),
                    EndDate: sdk.String("doloribus"),
                    GroupByColumn: sdk.Bool(false),
                    HeaderText: sdk.String("iusto"),
                    PlatformSource: sdk.String("eligendi"),
                    ProductReportPerspective: sdk.String("ducimus"),
                    SavedColumnName: sdk.String("alias"),
                    StartDate: sdk.String("officia"),
                },
                shared.ReportAPIColumnSpec{
                    ColumnName: sdk.String("tempora"),
                    CustomDimensionName: sdk.String("ipsam"),
                    CustomMetricName: sdk.String("ea"),
                    EndDate: sdk.String("aspernatur"),
                    GroupByColumn: sdk.Bool(false),
                    HeaderText: sdk.String("vel"),
                    PlatformSource: sdk.String("possimus"),
                    ProductReportPerspective: sdk.String("magnam"),
                    SavedColumnName: sdk.String("ratione"),
                    StartDate: sdk.String("ex"),
                },
                shared.ReportAPIColumnSpec{
                    ColumnName: sdk.String("laudantium"),
                    CustomDimensionName: sdk.String("dicta"),
                    CustomMetricName: sdk.String("dolor"),
                    EndDate: sdk.String("maiores"),
                    GroupByColumn: sdk.Bool(false),
                    HeaderText: sdk.String("quasi"),
                    PlatformSource: sdk.String("ex"),
                    ProductReportPerspective: sdk.String("nulla"),
                    SavedColumnName: sdk.String("excepturi"),
                    StartDate: sdk.String("voluptatibus"),
                },
                shared.ReportAPIColumnSpec{
                    ColumnName: sdk.String("nostrum"),
                    CustomDimensionName: sdk.String("sapiente"),
                    CustomMetricName: sdk.String("quisquam"),
                    EndDate: sdk.String("saepe"),
                    GroupByColumn: sdk.Bool(false),
                    HeaderText: sdk.String("ea"),
                    PlatformSource: sdk.String("impedit"),
                    ProductReportPerspective: sdk.String("corporis"),
                    SavedColumnName: sdk.String("veniam"),
                    StartDate: sdk.String("aliquid"),
                },
            },
            DownloadFormat: sdk.String("inventore"),
            Filters: []shared.ReportRequestFilters{
                shared.ReportRequestFilters{
                    Column: &shared.ReportAPIColumnSpec{
                        ColumnName: sdk.String("ea"),
                        CustomDimensionName: sdk.String("quo"),
                        CustomMetricName: sdk.String("consectetur"),
                        EndDate: sdk.String("recusandae"),
                        GroupByColumn: sdk.Bool(false),
                        HeaderText: sdk.String("aspernatur"),
                        PlatformSource: sdk.String("minima"),
                        ProductReportPerspective: sdk.String("eaque"),
                        SavedColumnName: sdk.String("a"),
                        StartDate: sdk.String("libero"),
                    },
                    Operator: sdk.String("aut"),
                    Values: []interface{}{
                        "deleniti",
                    },
                },
                shared.ReportRequestFilters{
                    Column: &shared.ReportAPIColumnSpec{
                        ColumnName: sdk.String("impedit"),
                        CustomDimensionName: sdk.String("aliquam"),
                        CustomMetricName: sdk.String("fugit"),
                        EndDate: sdk.String("accusamus"),
                        GroupByColumn: sdk.Bool(false),
                        HeaderText: sdk.String("inventore"),
                        PlatformSource: sdk.String("non"),
                        ProductReportPerspective: sdk.String("et"),
                        SavedColumnName: sdk.String("dolorum"),
                        StartDate: sdk.String("laborum"),
                    },
                    Operator: sdk.String("placeat"),
                    Values: []interface{}{
                        "eum",
                    },
                },
            },
            IncludeDeletedEntities: sdk.Bool(false),
            IncludeRemovedEntities: sdk.Bool(false),
            MaxRowsPerFile: sdk.Int(420539),
            OrderBy: []shared.ReportRequestOrderBy{
                shared.ReportRequestOrderBy{
                    Column: &shared.ReportAPIColumnSpec{
                        ColumnName: sdk.String("quas"),
                        CustomDimensionName: sdk.String("assumenda"),
                        CustomMetricName: sdk.String("nulla"),
                        EndDate: sdk.String("voluptas"),
                        GroupByColumn: sdk.Bool(false),
                        HeaderText: sdk.String("libero"),
                        PlatformSource: sdk.String("quasi"),
                        ProductReportPerspective: sdk.String("tempora"),
                        SavedColumnName: sdk.String("numquam"),
                        StartDate: sdk.String("explicabo"),
                    },
                    SortOrder: sdk.String("provident"),
                },
                shared.ReportRequestOrderBy{
                    Column: &shared.ReportAPIColumnSpec{
                        ColumnName: sdk.String("ipsa"),
                        CustomDimensionName: sdk.String("molestiae"),
                        CustomMetricName: sdk.String("magnam"),
                        EndDate: sdk.String("odio"),
                        GroupByColumn: sdk.Bool(false),
                        HeaderText: sdk.String("eius"),
                        PlatformSource: sdk.String("esse"),
                        ProductReportPerspective: sdk.String("esse"),
                        SavedColumnName: sdk.String("rem"),
                        StartDate: sdk.String("fuga"),
                    },
                    SortOrder: sdk.String("reprehenderit"),
                },
                shared.ReportRequestOrderBy{
                    Column: &shared.ReportAPIColumnSpec{
                        ColumnName: sdk.String("quidem"),
                        CustomDimensionName: sdk.String("fugiat"),
                        CustomMetricName: sdk.String("ut"),
                        EndDate: sdk.String("eum"),
                        GroupByColumn: sdk.Bool(false),
                        HeaderText: sdk.String("suscipit"),
                        PlatformSource: sdk.String("assumenda"),
                        ProductReportPerspective: sdk.String("eos"),
                        SavedColumnName: sdk.String("praesentium"),
                        StartDate: sdk.String("quisquam"),
                    },
                    SortOrder: sdk.String("veritatis"),
                },
                shared.ReportRequestOrderBy{
                    Column: &shared.ReportAPIColumnSpec{
                        ColumnName: sdk.String("ipsa"),
                        CustomDimensionName: sdk.String("id"),
                        CustomMetricName: sdk.String("quidem"),
                        EndDate: sdk.String("neque"),
                        GroupByColumn: sdk.Bool(false),
                        HeaderText: sdk.String("quo"),
                        PlatformSource: sdk.String("illum"),
                        ProductReportPerspective: sdk.String("quo"),
                        SavedColumnName: sdk.String("fuga"),
                        StartDate: sdk.String("eius"),
                    },
                    SortOrder: sdk.String("eos"),
                },
            },
            ReportScope: &shared.ReportRequestReportScope{
                AdGroupID: sdk.String("voluptas"),
                AdID: sdk.String("ab"),
                AdvertiserID: sdk.String("cupiditate"),
                AgencyID: sdk.String("consequatur"),
                CampaignID: sdk.String("tempora"),
                EngineAccountID: sdk.String("debitis"),
                KeywordID: sdk.String("ipsam"),
            },
            ReportType: sdk.String("aspernatur"),
            RowCount: sdk.Int(197054),
            StartRow: sdk.Int(779192),
            StatisticsCurrency: sdk.String("esse"),
            TimeRange: &shared.ReportRequestTimeRange{
                ChangedAttributesSinceTimestamp: sdk.String("recusandae"),
                ChangedMetricsSinceTimestamp: sdk.String("aperiam"),
                EndDate: sdk.String("distinctio"),
                StartDate: sdk.String("quod"),
            },
            VerifySingleTimeZone: sdk.Bool(false),
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("totam"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.DoubleclicksearchReportsRequestSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```
