# Reports

### Available Operations

* [DfareportingReportsCompatibleFieldsQuery](#dfareportingreportscompatiblefieldsquery) - Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
* [DfareportingReportsDelete](#dfareportingreportsdelete) - Deletes a report by its ID.
* [DfareportingReportsFilesGet](#dfareportingreportsfilesget) - Retrieves a report file by its report ID and file ID. This method supports media download.
* [DfareportingReportsFilesList](#dfareportingreportsfileslist) - Lists files for a report.
* [DfareportingReportsGet](#dfareportingreportsget) - Retrieves a report by its ID.
* [DfareportingReportsInsert](#dfareportingreportsinsert) - Creates a report.
* [DfareportingReportsList](#dfareportingreportslist) - Retrieves list of reports.
* [DfareportingReportsPatch](#dfareportingreportspatch) - Updates an existing report. This method supports patch semantics.
* [DfareportingReportsRun](#dfareportingreportsrun) - Runs a report.
* [DfareportingReportsUpdate](#dfareportingreportsupdate) - Updates a report.

## DfareportingReportsCompatibleFieldsQuery

Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.DfareportingReportsCompatibleFieldsQuery(ctx, operations.DfareportingReportsCompatibleFieldsQueryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Report: &shared.Report{
            AccountID: sdk.String("ut"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("porro"),
                            Etag: sdk.String("est"),
                            ID: sdk.String("10588248-4c36-4e94-8892-782d34e0b8fc"),
                            Kind: sdk.String("eaque"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("enim"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("natus"),
                            Etag: sdk.String("sapiente"),
                            ID: sdk.String("57b9f982-0be0-4780-8c36-c9e2f70344e0"),
                            Kind: sdk.String("eaque"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("tempora"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("reprehenderit"),
                            Etag: sdk.String("deleniti"),
                            ID: sdk.String("eb539483-f748-4eef-8cb6-9d541b4b393f"),
                            Kind: sdk.String("amet"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("eum"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("nisi"),
                            Etag: sdk.String("suscipit"),
                            ID: sdk.String("25bea322-01de-4c37-9c59-8ea1d48c5c2f"),
                            Kind: sdk.String("omnis"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("aspernatur"),
                        },
                    },
                    Kind: sdk.String("et"),
                    MetricNames: []string{
                        "provident",
                        "voluptatem",
                        "earum",
                        "quibusdam",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("ipsum"),
                            Etag: sdk.String("esse"),
                            ID: sdk.String("76bfc767-7f0f-4504-a6e4-828fb6daee19"),
                            Kind: sdk.String("cumque"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("nisi"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("quisquam"),
                            Etag: sdk.String("quae"),
                            ID: sdk.String("cb618c63-31ca-4bda-b767-a444dd0da0ab"),
                            Kind: sdk.String("itaque"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("totam"),
                        },
                    },
                    Kind: sdk.String("repudiandae"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-07-08"),
                    Kind: sdk.String("nulla"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumYearToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-04-03"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("illo"),
                        Etag: sdk.String("eligendi"),
                        ID: sdk.String("b3ad49b8-e5c1-48b2-9e87-f64823255be9"),
                        Kind: sdk.String("exercitationem"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("aperiam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("optio"),
                        Etag: sdk.String("rerum"),
                        ID: sdk.String("cb2ca879-08d7-4380-9a02-f06e9228b560"),
                        Kind: sdk.String("nisi"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("similique"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("exercitationem"),
                        Etag: sdk.String("voluptatem"),
                        ID: sdk.String("74befb8a-f684-49d2-b994-04363a0964c0"),
                        Kind: sdk.String("ipsam"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("praesentium"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("ea"),
                        Name: sdk.String("Chris Monahan"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("perspiciatis"),
                        Name: sdk.String("Mitchell Hoppe"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "iusto",
                    "ipsum",
                    "corporis",
                    "tempora",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("veniam"),
                        Name: sdk.String("Marco McKenzie"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ducimus"),
                        Name: sdk.String("Joyce Klein"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("fugit"),
                        Name: sdk.String("Monica Reinger"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quod"),
                        Name: sdk.String("Herbert Veum"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-08-24"),
                    Kind: sdk.String("voluptatum"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousMonth.ToPointer(),
                    StartDate: types.MustDateFromString("2021-05-13"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumSiteByCampaign.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("optio"),
                        Etag: sdk.String("perferendis"),
                        ID: sdk.String("b239606c-f90a-4d98-9e1a-34715acda044"),
                        Kind: sdk.String("a"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("deserunt"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("saepe"),
                        Etag: sdk.String("illum"),
                        ID: sdk.String("6e13a620-e2e9-418c-b5b0-486cf398a0b3"),
                        Kind: sdk.String("in"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("eum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("beatae"),
                        Etag: sdk.String("nihil"),
                        ID: sdk.String("dd95ce30-44be-44eb-bb31-cb503c3140d8"),
                        Kind: sdk.String("esse"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("explicabo"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("cumque"),
                        Etag: sdk.String("ipsam"),
                        ID: sdk.String("35e1dd6b-f64b-4454-a983-1e795f0e57f5"),
                        Kind: sdk.String("eius"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("nam"),
                    },
                },
                MetricNames: []string{
                    "quia",
                    "pariatur",
                    "magni",
                    "tempore",
                },
                OverlapMetricNames: []string{
                    "laboriosam",
                    "aut",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment.ToPointer(),
                Message: sdk.String("odio"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Earline_Grimes84@hotmail.com"),
                        Kind: sdk.String("reiciendis"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Alda_Runolfsson8@gmail.com"),
                        Kind: sdk.String("voluptatum"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Nash_White@gmail.com"),
                        Kind: sdk.String("ipsa"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Ona.Lynch50@hotmail.com"),
                        Kind: sdk.String("commodi"),
                    },
                },
            },
            Etag: sdk.String("eaque"),
            FileName: sdk.String("similique"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptates"),
                        Etag: sdk.String("similique"),
                        ID: sdk.String("6c635132-d530-486c-90a8-56a19d4665ba"),
                        Kind: sdk.String("omnis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("qui"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("ipsam"),
                        Etag: sdk.String("perspiciatis"),
                        ID: sdk.String("875dc0ce-cbc7-48bd-a48e-c6e8b240b1c0"),
                        Kind: sdk.String("eum"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("perspiciatis"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("optio"),
                        Etag: sdk.String("consequatur"),
                        ID: sdk.String("649d2bdd-9e58-4ddb-9665-c312c7f550d4"),
                        Kind: sdk.String("iusto"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("sunt"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quod"),
                        Etag: sdk.String("veritatis"),
                        ID: sdk.String("76292dd7-878e-471b-b8c1-41841fe1f87e"),
                        Kind: sdk.String("id"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("aut"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-05-09"),
                    Kind: sdk.String("error"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousYear.ToPointer(),
                    StartDate: types.MustDateFromString("2022-08-12"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("laborum"),
                        Etag: sdk.String("beatae"),
                        ID: sdk.String("606399ef-17b8-4175-8d4a-b5bc80dea77f"),
                        Kind: sdk.String("quibusdam"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("cupiditate"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("dolor"),
                        Etag: sdk.String("illo"),
                        ID: sdk.String("ec9d106c-ff2c-426a-b840-a28ea0672d6b"),
                        Kind: sdk.String("molestiae"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("dolorum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("sequi"),
                        Etag: sdk.String("ut"),
                        ID: sdk.String("ca434cdb-3149-4a19-b252-078a18a4b0da"),
                        Kind: sdk.String("officiis"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("quaerat"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quidem"),
                        Etag: sdk.String("corporis"),
                        ID: sdk.String("cf0616ee-9227-4575-bd60-daa0e149cd1c"),
                        Kind: sdk.String("quod"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("illum"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("ea"),
                        Name: sdk.String("Susie Predovic"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("amet"),
                    Etag: sdk.String("natus"),
                    ID: sdk.String("0015f268-99cf-44ff-ab9b-ec50318a81eb"),
                    Kind: sdk.String("consequatur"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("fugiat"),
                },
                MetricNames: []string{
                    "omnis",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumCsv.ToPointer(),
            ID: sdk.String("hic"),
            Kind: sdk.String("odio"),
            LastModifiedTime: sdk.String("soluta"),
            Name: sdk.String("Vivian Hoppe"),
            OwnerProfileID: sdk.String("ipsam"),
            PathAttributionCriteria: &shared.ReportPathAttributionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("repudiandae"),
                        Etag: sdk.String("nostrum"),
                        ID: sdk.String("088c8a32-6341-4acc-8ca6-63d4a8595c1b"),
                        Kind: sdk.String("amet"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("quidem"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("soluta"),
                        Etag: sdk.String("magni"),
                        ID: sdk.String("13e3b31c-d6a5-4be7-8906-b96c636e74d2"),
                        Kind: sdk.String("totam"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("quaerat"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("rem"),
                    Kind: sdk.String("et"),
                    Name: sdk.String("Miss Velma Murphy"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("perspiciatis"),
                                                Ids: []string{
                                                    "ea",
                                                    "ut",
                                                    "aut",
                                                },
                                                Kind: sdk.String("minima"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "vel",
                                                    "tempore",
                                                },
                                            },
                                            Kind: sdk.String("dolorem"),
                                        },
                                    },
                                    Kind: sdk.String("aut"),
                                },
                            },
                            Kind: sdk.String("quos"),
                            Name: sdk.String("Katherine Casper"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("aut"),
                                                Ids: []string{
                                                    "inventore",
                                                    "aperiam",
                                                },
                                                Kind: sdk.String("corrupti"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "alias",
                                                    "provident",
                                                    "corporis",
                                                    "dolorem",
                                                },
                                            },
                                            Kind: sdk.String("placeat"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("molestias"),
                                                Ids: []string{
                                                    "nobis",
                                                    "temporibus",
                                                    "sint",
                                                },
                                                Kind: sdk.String("dolores"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "ad",
                                                    "soluta",
                                                    "officia",
                                                },
                                            },
                                            Kind: sdk.String("nostrum"),
                                        },
                                    },
                                    Kind: sdk.String("exercitationem"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("illo"),
                                                Ids: []string{
                                                    "expedita",
                                                    "totam",
                                                    "ipsum",
                                                },
                                                Kind: sdk.String("nihil"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "iste",
                                                    "dignissimos",
                                                    "rem",
                                                    "dolore",
                                                },
                                            },
                                            Kind: sdk.String("voluptatibus"),
                                        },
                                    },
                                    Kind: sdk.String("nobis"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("tempora"),
                                                Ids: []string{
                                                    "incidunt",
                                                    "ducimus",
                                                },
                                                Kind: sdk.String("neque"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "expedita",
                                                },
                                            },
                                            Kind: sdk.String("quod"),
                                        },
                                    },
                                    Kind: sdk.String("minima"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptates"),
                                                Ids: []string{
                                                    "veritatis",
                                                    "nam",
                                                },
                                                Kind: sdk.String("velit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "quam",
                                                },
                                            },
                                            Kind: sdk.String("beatae"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("odio"),
                                                Ids: []string{
                                                    "voluptatum",
                                                },
                                                Kind: sdk.String("reprehenderit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "non",
                                                    "in",
                                                    "odio",
                                                    "placeat",
                                                },
                                            },
                                            Kind: sdk.String("blanditiis"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("possimus"),
                                                Ids: []string{
                                                    "consectetur",
                                                    "occaecati",
                                                },
                                                Kind: sdk.String("voluptates"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "harum",
                                                    "assumenda",
                                                },
                                            },
                                            Kind: sdk.String("fugit"),
                                        },
                                    },
                                    Kind: sdk.String("placeat"),
                                },
                            },
                            Kind: sdk.String("officia"),
                            Name: sdk.String("John Beatty"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-07-17"),
                    Kind: sdk.String("minus"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousMonth.ToPointer(),
                    StartDate: types.MustDateFromString("2020-10-09"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("nam"),
                        Name: sdk.String("Joey Waters"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("incidunt"),
                        Name: sdk.String("Roberto Powlowski"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("fuga"),
                        Name: sdk.String("Jodi Wunsch"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("deserunt"),
                    Etag: sdk.String("distinctio"),
                    ID: sdk.String("ccbca329-25eb-406a-acab-e22a11f77a75"),
                    Kind: sdk.String("quibusdam"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("maiores"),
                },
                MetricNames: []string{
                    "tempora",
                    "quaerat",
                    "quis",
                    "dolores",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("fugiat"),
                                    Ids: []string{
                                        "modi",
                                        "ducimus",
                                    },
                                    Kind: sdk.String("aut"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "modi",
                                        "blanditiis",
                                        "minus",
                                        "odit",
                                    },
                                },
                                Kind: sdk.String("quas"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("dolores"),
                                    Ids: []string{
                                        "praesentium",
                                        "nihil",
                                        "beatae",
                                    },
                                    Kind: sdk.String("suscipit"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "iure",
                                    },
                                },
                                Kind: sdk.String("doloribus"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("aliquid"),
                                    Ids: []string{
                                        "et",
                                        "voluptate",
                                        "minima",
                                    },
                                    Kind: sdk.String("dignissimos"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "ratione",
                                    },
                                },
                                Kind: sdk.String("voluptatem"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("incidunt"),
                                    Ids: []string{
                                        "tempora",
                                        "aperiam",
                                        "error",
                                        "impedit",
                                    },
                                    Kind: sdk.String("magni"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "dolorum",
                                        "temporibus",
                                    },
                                },
                                Kind: sdk.String("corrupti"),
                            },
                        },
                        Kind: sdk.String("eos"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("voluptatibus"),
                                    Ids: []string{
                                        "eveniet",
                                        "velit",
                                        "molestiae",
                                        "molestiae",
                                    },
                                    Kind: sdk.String("dolores"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "exercitationem",
                                    },
                                },
                                Kind: sdk.String("aut"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("officiis"),
                                    Ids: []string{
                                        "deleniti",
                                        "nemo",
                                        "dolorum",
                                        "odio",
                                    },
                                    Kind: sdk.String("delectus"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "minus",
                                        "consequuntur",
                                        "iste",
                                        "veritatis",
                                    },
                                },
                                Kind: sdk.String("ab"),
                            },
                        },
                        Kind: sdk.String("dolorum"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("esse"),
                                    Ids: []string{
                                        "distinctio",
                                        "fugiat",
                                        "porro",
                                        "commodi",
                                    },
                                    Kind: sdk.String("alias"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "sapiente",
                                        "voluptatem",
                                        "sunt",
                                    },
                                },
                                Kind: sdk.String("temporibus"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("illum"),
                                    Ids: []string{
                                        "atque",
                                    },
                                    Kind: sdk.String("veniam"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "quo",
                                    },
                                },
                                Kind: sdk.String("pariatur"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("animi"),
                                    Ids: []string{
                                        "officiis",
                                        "soluta",
                                    },
                                    Kind: sdk.String("distinctio"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "pariatur",
                                        "laudantium",
                                        "sequi",
                                        "repellat",
                                    },
                                },
                                Kind: sdk.String("totam"),
                            },
                        },
                        Kind: sdk.String("neque"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                },
            },
            PathCriteria: &shared.ReportPathCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("iste"),
                        Etag: sdk.String("quidem"),
                        ID: sdk.String("0c46a094-e2e9-4c22-85df-e765bffbcb86"),
                        Kind: sdk.String("aperiam"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("ad"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("maiores"),
                        Etag: sdk.String("magni"),
                        ID: sdk.String("16aa0407-07fa-4739-8247-a87217fed962"),
                        Kind: sdk.String("possimus"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("consectetur"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("debitis"),
                        Etag: sdk.String("itaque"),
                        ID: sdk.String("e7c385c7-970e-41a1-a8db-cf6e19b9012c"),
                        Kind: sdk.String("ut"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("modi"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("repudiandae"),
                        Etag: sdk.String("explicabo"),
                        ID: sdk.String("31ba1477-27de-495f-b2ad-abf6800b01bc"),
                        Kind: sdk.String("tempore"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("aperiam"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("ipsum"),
                    Kind: sdk.String("sunt"),
                    Name: sdk.String("Miss Steve Schimmel"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("architecto"),
                                                Ids: []string{
                                                    "architecto",
                                                },
                                                Kind: sdk.String("culpa"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "assumenda",
                                                    "maiores",
                                                },
                                            },
                                            Kind: sdk.String("quia"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quae"),
                                                Ids: []string{
                                                    "consequuntur",
                                                    "ratione",
                                                },
                                                Kind: sdk.String("necessitatibus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "beatae",
                                                    "sequi",
                                                },
                                            },
                                            Kind: sdk.String("autem"),
                                        },
                                    },
                                    Kind: sdk.String("quaerat"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("illo"),
                                                Ids: []string{
                                                    "culpa",
                                                    "laboriosam",
                                                },
                                                Kind: sdk.String("repudiandae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "suscipit",
                                                    "officia",
                                                    "laborum",
                                                },
                                            },
                                            Kind: sdk.String("dolore"),
                                        },
                                    },
                                    Kind: sdk.String("dicta"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("cupiditate"),
                                                Ids: []string{
                                                    "odit",
                                                    "aperiam",
                                                    "nostrum",
                                                    "ipsum",
                                                },
                                                Kind: sdk.String("est"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "maxime",
                                                    "nesciunt",
                                                    "ab",
                                                },
                                            },
                                            Kind: sdk.String("ullam"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("consectetur"),
                                                Ids: []string{
                                                    "nemo",
                                                },
                                                Kind: sdk.String("expedita"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "eaque",
                                                    "dolores",
                                                    "dolores",
                                                    "iste",
                                                },
                                            },
                                            Kind: sdk.String("ut"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("iusto"),
                                                Ids: []string{
                                                    "voluptas",
                                                },
                                                Kind: sdk.String("assumenda"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "sunt",
                                                    "dolor",
                                                    "atque",
                                                },
                                            },
                                            Kind: sdk.String("illum"),
                                        },
                                    },
                                    Kind: sdk.String("animi"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("itaque"),
                                                Ids: []string{
                                                    "vero",
                                                    "quibusdam",
                                                },
                                                Kind: sdk.String("dolores"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "error",
                                                },
                                            },
                                            Kind: sdk.String("error"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("architecto"),
                                                Ids: []string{
                                                    "ea",
                                                    "fugiat",
                                                    "ab",
                                                },
                                                Kind: sdk.String("reprehenderit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "ipsa",
                                                },
                                            },
                                            Kind: sdk.String("magnam"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("sequi"),
                                                Ids: []string{
                                                    "esse",
                                                    "unde",
                                                    "natus",
                                                    "animi",
                                                },
                                                Kind: sdk.String("eos"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "praesentium",
                                                },
                                            },
                                            Kind: sdk.String("vero"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("distinctio"),
                                                Ids: []string{
                                                    "sunt",
                                                },
                                                Kind: sdk.String("excepturi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "ipsam",
                                                    "magni",
                                                    "labore",
                                                    "deserunt",
                                                },
                                            },
                                            Kind: sdk.String("nam"),
                                        },
                                    },
                                    Kind: sdk.String("libero"),
                                },
                            },
                            Kind: sdk.String("iure"),
                            Name: sdk.String("Jerry Bechtelar"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("magnam"),
                                                Ids: []string{
                                                    "illum",
                                                    "itaque",
                                                },
                                                Kind: sdk.String("architecto"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "nulla",
                                                },
                                            },
                                            Kind: sdk.String("consequatur"),
                                        },
                                    },
                                    Kind: sdk.String("quos"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptatem"),
                                                Ids: []string{
                                                    "eligendi",
                                                    "dolore",
                                                    "nulla",
                                                },
                                                Kind: sdk.String("doloremque"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "minus",
                                                },
                                            },
                                            Kind: sdk.String("aliquam"),
                                        },
                                    },
                                    Kind: sdk.String("eveniet"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("excepturi"),
                                                Ids: []string{
                                                    "voluptates",
                                                    "corporis",
                                                },
                                                Kind: sdk.String("commodi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "quis",
                                                    "porro",
                                                    "impedit",
                                                    "distinctio",
                                                },
                                            },
                                            Kind: sdk.String("ab"),
                                        },
                                    },
                                    Kind: sdk.String("ea"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("nihil"),
                                                Ids: []string{
                                                    "dolorem",
                                                },
                                                Kind: sdk.String("inventore"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "fuga",
                                                    "quibusdam",
                                                    "minima",
                                                    "quas",
                                                },
                                            },
                                            Kind: sdk.String("nam"),
                                        },
                                    },
                                    Kind: sdk.String("praesentium"),
                                },
                            },
                            Kind: sdk.String("error"),
                            Name: sdk.String("Dana Gerhold"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("nemo"),
                                                Ids: []string{
                                                    "deserunt",
                                                    "veritatis",
                                                },
                                                Kind: sdk.String("quae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "deleniti",
                                                    "error",
                                                    "maxime",
                                                    "eaque",
                                                },
                                            },
                                            Kind: sdk.String("tenetur"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("non"),
                                                Ids: []string{
                                                    "sed",
                                                    "maiores",
                                                    "occaecati",
                                                },
                                                Kind: sdk.String("accusamus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "nemo",
                                                    "neque",
                                                    "optio",
                                                },
                                            },
                                            Kind: sdk.String("ratione"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quae"),
                                                Ids: []string{
                                                    "assumenda",
                                                    "dolorum",
                                                },
                                                Kind: sdk.String("officiis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "consequuntur",
                                                },
                                            },
                                            Kind: sdk.String("hic"),
                                        },
                                    },
                                    Kind: sdk.String("ipsa"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("hic"),
                                                Ids: []string{
                                                    "quo",
                                                    "minus",
                                                    "quaerat",
                                                    "ab",
                                                },
                                                Kind: sdk.String("cupiditate"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "illum",
                                                },
                                            },
                                            Kind: sdk.String("voluptate"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("aperiam"),
                                                Ids: []string{
                                                    "expedita",
                                                    "dolorem",
                                                },
                                                Kind: sdk.String("fuga"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "eaque",
                                                    "sint",
                                                },
                                            },
                                            Kind: sdk.String("ipsum"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("eius"),
                                                Ids: []string{
                                                    "provident",
                                                    "recusandae",
                                                    "harum",
                                                    "nobis",
                                                },
                                                Kind: sdk.String("laboriosam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "voluptatum",
                                                },
                                            },
                                            Kind: sdk.String("hic"),
                                        },
                                    },
                                    Kind: sdk.String("vel"),
                                },
                            },
                            Kind: sdk.String("asperiores"),
                            Name: sdk.String("Mrs. Virginia Rippin"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-01-23"),
                    Kind: sdk.String("accusamus"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousWeek.ToPointer(),
                    StartDate: types.MustDateFromString("2022-10-09"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("voluptatibus"),
                        Name: sdk.String("Glenn Bechtelar"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("aliquam"),
                        Name: sdk.String("Alfonso Considine"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("iure"),
                    Etag: sdk.String("dolore"),
                    ID: sdk.String("c08a2ec1-a807-4151-a354-ba1a6d7ddc39"),
                    Kind: sdk.String("sint"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("nihil"),
                },
                MetricNames: []string{
                    "laudantium",
                    "aliquam",
                    "non",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("nemo"),
                                    Ids: []string{
                                        "aspernatur",
                                    },
                                    Kind: sdk.String("officia"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "accusamus",
                                        "suscipit",
                                        "eos",
                                    },
                                },
                                Kind: sdk.String("maiores"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("dolore"),
                                    Ids: []string{
                                        "modi",
                                        "laboriosam",
                                        "porro",
                                    },
                                    Kind: sdk.String("est"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "reprehenderit",
                                        "odit",
                                        "voluptas",
                                        "autem",
                                    },
                                },
                                Kind: sdk.String("impedit"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("facere"),
                                    Ids: []string{
                                        "autem",
                                        "non",
                                    },
                                    Kind: sdk.String("quos"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "odio",
                                    },
                                },
                                Kind: sdk.String("odit"),
                            },
                        },
                        Kind: sdk.String("non"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("aut"),
                                    Ids: []string{
                                        "earum",
                                    },
                                    Kind: sdk.String("deleniti"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "illo",
                                        "necessitatibus",
                                        "veritatis",
                                    },
                                },
                                Kind: sdk.String("saepe"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("quam"),
                                    Ids: []string{
                                        "quidem",
                                        "dolorem",
                                        "earum",
                                    },
                                    Kind: sdk.String("ipsa"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "ipsa",
                                        "corporis",
                                        "officiis",
                                        "dicta",
                                    },
                                },
                                Kind: sdk.String("nesciunt"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("temporibus"),
                                    Ids: []string{
                                        "deleniti",
                                        "rem",
                                        "tenetur",
                                    },
                                    Kind: sdk.String("minima"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "a",
                                    },
                                },
                                Kind: sdk.String("perspiciatis"),
                            },
                        },
                        Kind: sdk.String("corrupti"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("unde"),
                                    Ids: []string{
                                        "natus",
                                        "et",
                                        "perspiciatis",
                                        "qui",
                                    },
                                    Kind: sdk.String("consequuntur"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "quo",
                                        "officia",
                                    },
                                },
                                Kind: sdk.String("quibusdam"),
                            },
                        },
                        Kind: sdk.String("alias"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("voluptas"),
                                    Ids: []string{
                                        "tempora",
                                        "corporis",
                                    },
                                    Kind: sdk.String("eaque"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "mollitia",
                                    },
                                },
                                Kind: sdk.String("minima"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("nobis"),
                                    Ids: []string{
                                        "vel",
                                    },
                                    Kind: sdk.String("est"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "sunt",
                                    },
                                },
                                Kind: sdk.String("eveniet"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("ratione"),
                                    Ids: []string{
                                        "asperiores",
                                        "molestiae",
                                        "in",
                                        "eaque",
                                    },
                                    Kind: sdk.String("animi"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "modi",
                                        "aspernatur",
                                        "vero",
                                    },
                                },
                                Kind: sdk.String("nostrum"),
                            },
                        },
                        Kind: sdk.String("officiis"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                },
            },
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("ea"),
                        Etag: sdk.String("eius"),
                        ID: sdk.String("a2a875c6-a710-4e54-b47e-c6aaf9bd8327"),
                        Kind: sdk.String("repudiandae"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("repellat"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("esse"),
                        Etag: sdk.String("quibusdam"),
                        ID: sdk.String("316145eb-dd82-42af-ac16-79d8a0a46646"),
                        Kind: sdk.String("itaque"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("ea"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("ipsam"),
                        Etag: sdk.String("laudantium"),
                        ID: sdk.String("e1817cde-0aee-48c7-a213-f425a0338b71"),
                        Kind: sdk.String("distinctio"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("possimus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("magni"),
                        Etag: sdk.String("repellat"),
                        ID: sdk.String("d3b636c0-7308-48e7-9ab7-ff2a12fb074c"),
                        Kind: sdk.String("at"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("incidunt"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("dolores"),
                        Name: sdk.String("Johnnie Aufderhar Sr."),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("blanditiis"),
                        Name: sdk.String("Henrietta Streich"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("corporis"),
                        Name: sdk.String("Jackie Farrell"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("autem"),
                        Name: sdk.String("Lonnie Pouros"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("hic"),
                        Name: sdk.String("Rhonda Pfeffer"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("porro"),
                        Etag: sdk.String("ducimus"),
                        ID: sdk.String("cb91c79e-962d-4e32-b875-a4a2e87d87b5"),
                        Kind: sdk.String("vitae"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("dolores"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-02-01"),
                    Kind: sdk.String("iusto"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousQuarter.ToPointer(),
                    StartDate: types.MustDateFromString("2022-12-04"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("necessitatibus"),
                    Etag: sdk.String("autem"),
                    ID: sdk.String("e11c8833-26dc-45b1-8306-7a899e25c6a4"),
                    Kind: sdk.String("quisquam"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("non"),
                },
                MetricNames: []string{
                    "maiores",
                    "quasi",
                    "molestias",
                    "molestiae",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("excepturi"),
                        Name: sdk.String("Susie Brakus IV"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("laboriosam"),
                        Name: sdk.String("Mrs. Joyce Paucek"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(3524),
                    ImpressionsLookbackWindow: sdk.Int(444488),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(24970),
                    MaximumImpressionInteractions: sdk.Int(783677),
                    MaximumInteractionGap: sdk.Int(53264),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("cumque"),
                            Etag: sdk.String("at"),
                            ID: sdk.String("e7e50ea4-4110-41c1-b8b4-62923d50f751"),
                            Kind: sdk.String("distinctio"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("praesentium"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("quam"),
                            Etag: sdk.String("animi"),
                            ID: sdk.String("33a86cc3-adf8-4527-9a06-539024bd09d0"),
                            Kind: sdk.String("a"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("commodi"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("aut"),
                            Etag: sdk.String("quibusdam"),
                            ID: sdk.String("ff8fe0e0-e46f-4225-a29d-79d39d8790e2"),
                            Kind: sdk.String("voluptates"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("eaque"),
                        },
                    },
                    Kind: sdk.String("inventore"),
                    MetricNames: []string{
                        "deserunt",
                        "consectetur",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("pariatur"),
                            Etag: sdk.String("perspiciatis"),
                            ID: sdk.String("70b2b531-bfb3-40ed-a3f8-e5e392f22a77"),
                            Kind: sdk.String("porro"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("iusto"),
                        },
                    },
                    Kind: sdk.String("deserunt"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-10-17"),
                    Kind: sdk.String("tempore"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousWeek.ToPointer(),
                    StartDate: types.MustDateFromString("2022-02-03"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("pariatur"),
                        Etag: sdk.String("officiis"),
                        ID: sdk.String("080fb80c-0563-46c5-bd41-59955c5c7176"),
                        Kind: sdk.String("perferendis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("enim"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("provident"),
                        Etag: sdk.String("nihil"),
                        ID: sdk.String("f37719dd-8c84-482c-8265-d92c4c8c9f8a"),
                        Kind: sdk.String("alias"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("impedit"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quae"),
                        Etag: sdk.String("necessitatibus"),
                        ID: sdk.String("04d2aceb-0cde-400e-8ecf-818a9303e93f"),
                        Kind: sdk.String("sit"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("culpa"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("sunt"),
                        Etag: sdk.String("quas"),
                        ID: sdk.String("b21f06d4-d178-452d-a8be-1db01d6919f8"),
                        Kind: sdk.String("consectetur"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("nemo"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("dolorem"),
                        Name: sdk.String("Ivan Grimes"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("pariatur"),
                        Name: sdk.String("Henry Hermann"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quasi"),
                        Name: sdk.String("Lela Thompson"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "natus",
                },
                ReachByFrequencyMetricNames: []string{
                    "dolorum",
                    "nisi",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(457267),
                ExpirationDate: types.MustDateFromString("2022-09-03"),
                Repeats: sdk.String("occaecati"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSaturday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumFriday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumWeekOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2020-11-07"),
                Timezone: sdk.String("ducimus"),
            },
            SubAccountID: sdk.String("sint"),
            Type: shared.ReportTypeEnumCrossDimensionReach.ToPointer(),
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quam",
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("ex"),
    }, operations.DfareportingReportsCompatibleFieldsQuerySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompatibleFields != nil {
        // handle response
    }
}
```

## DfareportingReportsDelete

Deletes a report by its ID.

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
    res, err := s.Reports.DfareportingReportsDelete(ctx, operations.DfareportingReportsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "officiis",
        QuotaUser: sdk.String("exercitationem"),
        ReportID: "inventore",
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.DfareportingReportsDeleteSecurity{
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

## DfareportingReportsFilesGet

Retrieves a report file by its report ID and file ID. This method supports media download.

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
    res, err := s.Reports.DfareportingReportsFilesGet(ctx, operations.DfareportingReportsFilesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("eum"),
        FileID: "reiciendis",
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "asperiores",
        QuotaUser: sdk.String("eaque"),
        ReportID: "modi",
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.DfareportingReportsFilesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## DfareportingReportsFilesList

Lists files for a report.

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
    res, err := s.Reports.DfareportingReportsFilesList(ctx, operations.DfareportingReportsFilesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("cupiditate"),
        MaxResults: sdk.Int64(888698),
        OauthToken: sdk.String("fuga"),
        PageToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quas",
        QuotaUser: sdk.String("sunt"),
        ReportID: "deleniti",
        SortField: operations.DfareportingReportsFilesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingReportsFilesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.DfareportingReportsFilesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileList != nil {
        // handle response
    }
}
```

## DfareportingReportsGet

Retrieves a report by its ID.

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
    res, err := s.Reports.DfareportingReportsGet(ctx, operations.DfareportingReportsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sequi",
        QuotaUser: sdk.String("quod"),
        ReportID: "modi",
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.DfareportingReportsGetSecurity{
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

## DfareportingReportsInsert

Creates a report.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.DfareportingReportsInsert(ctx, operations.DfareportingReportsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Report: &shared.Report{
            AccountID: sdk.String("provident"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("tempore"),
                            Etag: sdk.String("illum"),
                            ID: sdk.String("1cf77953-8cbb-4fcd-b4ec-e96ac4fb42c3"),
                            Kind: sdk.String("velit"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("ut"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("provident"),
                            Etag: sdk.String("vel"),
                            ID: sdk.String("17cb71dd-c250-4b60-8751-d2aebe8b9828"),
                            Kind: sdk.String("officiis"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("vel"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("aliquam"),
                            Etag: sdk.String("iure"),
                            ID: sdk.String("1a5ecb87-f794-4f04-b414-46f793d3b100"),
                            Kind: sdk.String("sed"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("dicta"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("ut"),
                            Etag: sdk.String("iusto"),
                            ID: sdk.String("cd1b8316-0b3e-43e9-8960-a0aafc7a8678"),
                            Kind: sdk.String("distinctio"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("quis"),
                        },
                    },
                    Kind: sdk.String("ipsa"),
                    MetricNames: []string{
                        "officia",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("hic"),
                            Etag: sdk.String("ut"),
                            ID: sdk.String("cb72ed6c-f622-45d5-9615-8803212f7b59"),
                            Kind: sdk.String("nam"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("beatae"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("nemo"),
                            Etag: sdk.String("aliquam"),
                            ID: sdk.String("642b9e37-c84c-43d3-8a49-183797888d15"),
                            Kind: sdk.String("ea"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("sit"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("ab"),
                            Etag: sdk.String("mollitia"),
                            ID: sdk.String("e36bb8d0-028e-43e1-9c90-59f7ef0f1385"),
                            Kind: sdk.String("harum"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("quam"),
                        },
                    },
                    Kind: sdk.String("quisquam"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-09-09"),
                    Kind: sdk.String("autem"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousMonth.ToPointer(),
                    StartDate: types.MustDateFromString("2022-05-14"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("omnis"),
                        Etag: sdk.String("atque"),
                        ID: sdk.String("f6d268f9-2a6b-4b08-a152-225b05728e7a"),
                        Kind: sdk.String("odit"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("beatae"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("vero"),
                        Etag: sdk.String("optio"),
                        ID: sdk.String("fb74faff-5de4-4f2b-8a85-7bcec81ff34b"),
                        Kind: sdk.String("voluptas"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("sint"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("eaque"),
                        Etag: sdk.String("accusantium"),
                        ID: sdk.String("3b234e83-c6c3-46a5-ab3a-d5bf7940d46d"),
                        Kind: sdk.String("quam"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("ratione"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("iste"),
                        Etag: sdk.String("repellendus"),
                        ID: sdk.String("489af600-5460-4b05-b01e-7bd8643968dd"),
                        Kind: sdk.String("aperiam"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("odio"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("sequi"),
                        Name: sdk.String("Frank Kohler"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("odio"),
                        Name: sdk.String("Rachael Lockman"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "occaecati",
                    "ea",
                    "occaecati",
                    "qui",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("iste"),
                        Name: sdk.String("Luke Lowe"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ipsum"),
                        Name: sdk.String("Israel Ferry"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("possimus"),
                        Name: sdk.String("Clayton Friesen"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("dicta"),
                        Name: sdk.String("Willie Moore"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-01-14"),
                    Kind: sdk.String("molestias"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumWeekToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2020-01-31"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumSiteByCampaign.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("optio"),
                        Etag: sdk.String("inventore"),
                        ID: sdk.String("8aaa3deb-d0c9-4003-9e4c-1d0624de3534"),
                        Kind: sdk.String("sapiente"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("vitae"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("accusamus"),
                        Etag: sdk.String("dolore"),
                        ID: sdk.String("2dda714e-9446-4899-994d-c953b4266c0e"),
                        Kind: sdk.String("ipsam"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("perferendis"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("asperiores"),
                        Etag: sdk.String("minus"),
                        ID: sdk.String("742c9c71-0891-4ef7-b31a-84fed7bce0fb"),
                        Kind: sdk.String("deserunt"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("ducimus"),
                    },
                },
                MetricNames: []string{
                    "dolore",
                },
                OverlapMetricNames: []string{
                    "dolor",
                    "sunt",
                    "dolor",
                    "dolore",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumLink.ToPointer(),
                Message: sdk.String("ipsam"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Bryon.Oberbrunner@hotmail.com"),
                        Kind: sdk.String("nesciunt"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Lonzo54@gmail.com"),
                        Kind: sdk.String("voluptates"),
                    },
                },
            },
            Etag: sdk.String("dolores"),
            FileName: sdk.String("veritatis"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("ipsa"),
                        Etag: sdk.String("omnis"),
                        ID: sdk.String("b6733551-9b00-4c50-a73a-8e26f6d65fc9"),
                        Kind: sdk.String("excepturi"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("dolor"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptas"),
                        Etag: sdk.String("aspernatur"),
                        ID: sdk.String("533a8f8c-1e63-49e6-9dff-2353545dbfd6"),
                        Kind: sdk.String("excepturi"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("corrupti"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quis"),
                        Etag: sdk.String("eius"),
                        ID: sdk.String("ee4956d8-61c1-4fe0-ba43-817586546524"),
                        Kind: sdk.String("ducimus"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("autem"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-01-22"),
                    Kind: sdk.String("praesentium"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumWeekToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-05-21"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("delectus"),
                        Etag: sdk.String("eius"),
                        ID: sdk.String("1bb9dd5f-9a10-4583-aa80-e7186e9e8089"),
                        Kind: sdk.String("ea"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("eum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("deleniti"),
                        Etag: sdk.String("provident"),
                        ID: sdk.String("a74cc4e0-edcd-4827-8b6c-8030772d9372"),
                        Kind: sdk.String("et"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("numquam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("debitis"),
                        Etag: sdk.String("tempore"),
                        ID: sdk.String("4dd4c7f2-2ce2-40aa-aa3e-6312683ff48c"),
                        Kind: sdk.String("sequi"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("quisquam"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("sint"),
                        Name: sdk.String("Lorenzo Russel MD"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("nesciunt"),
                        Name: sdk.String("Tommie Hudson"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("ullam"),
                    Etag: sdk.String("officia"),
                    ID: sdk.String("8b6d7377-2acf-4428-a41d-1ddf05ce1d39"),
                    Kind: sdk.String("provident"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("facere"),
                },
                MetricNames: []string{
                    "debitis",
                    "hic",
                    "accusamus",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumExcel.ToPointer(),
            ID: sdk.String("ab"),
            Kind: sdk.String("illo"),
            LastModifiedTime: sdk.String("inventore"),
            Name: sdk.String("Tamara Koelpin"),
            OwnerProfileID: sdk.String("necessitatibus"),
            PathAttributionCriteria: &shared.ReportPathAttributionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("ipsa"),
                        Etag: sdk.String("repellat"),
                        ID: sdk.String("5aeeccd8-31a2-49da-9596-4ee5ebf7e698"),
                        Kind: sdk.String("unde"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("delectus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("eaque"),
                        Etag: sdk.String("ipsam"),
                        ID: sdk.String("1aa7c59e-69b7-4c0e-a683-f37aa8dbe156"),
                        Kind: sdk.String("consequuntur"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("reiciendis"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("cum"),
                        Etag: sdk.String("voluptatum"),
                        ID: sdk.String("6e04210e-06b7-46f9-a69a-be3842bdc330"),
                        Kind: sdk.String("quaerat"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("consequatur"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("nam"),
                    Kind: sdk.String("laboriosam"),
                    Name: sdk.String("Gwen Zboncak"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quaerat"),
                                                Ids: []string{
                                                    "quaerat",
                                                    "a",
                                                    "corrupti",
                                                },
                                                Kind: sdk.String("doloribus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "tenetur",
                                                    "aut",
                                                    "commodi",
                                                },
                                            },
                                            Kind: sdk.String("temporibus"),
                                        },
                                    },
                                    Kind: sdk.String("sapiente"),
                                },
                            },
                            Kind: sdk.String("tempore"),
                            Name: sdk.String("Paul Goldner"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quasi"),
                                                Ids: []string{
                                                    "deleniti",
                                                    "veniam",
                                                },
                                                Kind: sdk.String("corrupti"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "adipisci",
                                                    "reprehenderit",
                                                    "nesciunt",
                                                    "quas",
                                                },
                                            },
                                            Kind: sdk.String("magnam"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quos"),
                                                Ids: []string{
                                                    "totam",
                                                    "qui",
                                                    "fugiat",
                                                },
                                                Kind: sdk.String("et"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "voluptates",
                                                    "omnis",
                                                    "sequi",
                                                },
                                            },
                                            Kind: sdk.String("eius"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("pariatur"),
                                                Ids: []string{
                                                    "enim",
                                                    "ab",
                                                    "aut",
                                                    "expedita",
                                                },
                                                Kind: sdk.String("deleniti"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "ex",
                                                },
                                            },
                                            Kind: sdk.String("ducimus"),
                                        },
                                    },
                                    Kind: sdk.String("molestiae"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("maiores"),
                                                Ids: []string{
                                                    "minus",
                                                    "ad",
                                                    "sequi",
                                                    "temporibus",
                                                },
                                                Kind: sdk.String("eos"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "natus",
                                                    "ad",
                                                    "exercitationem",
                                                },
                                            },
                                            Kind: sdk.String("minus"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("corrupti"),
                                                Ids: []string{
                                                    "ratione",
                                                    "cupiditate",
                                                    "consectetur",
                                                },
                                                Kind: sdk.String("amet"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "quod",
                                                    "eius",
                                                },
                                            },
                                            Kind: sdk.String("fugiat"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("assumenda"),
                                                Ids: []string{
                                                    "ipsam",
                                                    "id",
                                                },
                                                Kind: sdk.String("pariatur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "non",
                                                    "iure",
                                                    "consequatur",
                                                    "repellendus",
                                                },
                                            },
                                            Kind: sdk.String("repudiandae"),
                                        },
                                    },
                                    Kind: sdk.String("a"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("aliquam"),
                                                Ids: []string{
                                                    "similique",
                                                    "illo",
                                                    "pariatur",
                                                    "accusamus",
                                                },
                                                Kind: sdk.String("laboriosam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "quibusdam",
                                                    "dolores",
                                                    "cumque",
                                                },
                                            },
                                            Kind: sdk.String("doloribus"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("cum"),
                                                Ids: []string{
                                                    "harum",
                                                    "reprehenderit",
                                                },
                                                Kind: sdk.String("nesciunt"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "atque",
                                                    "beatae",
                                                    "quo",
                                                },
                                            },
                                            Kind: sdk.String("nulla"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quidem"),
                                                Ids: []string{
                                                    "officiis",
                                                },
                                                Kind: sdk.String("reprehenderit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "doloremque",
                                                    "minus",
                                                    "consectetur",
                                                    "accusantium",
                                                },
                                            },
                                            Kind: sdk.String("fuga"),
                                        },
                                    },
                                    Kind: sdk.String("odio"),
                                },
                            },
                            Kind: sdk.String("quibusdam"),
                            Name: sdk.String("Darren Smith"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("nisi"),
                                                Ids: []string{
                                                    "magnam",
                                                    "id",
                                                },
                                                Kind: sdk.String("eaque"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "suscipit",
                                                },
                                            },
                                            Kind: sdk.String("aliquam"),
                                        },
                                    },
                                    Kind: sdk.String("doloribus"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("corrupti"),
                                                Ids: []string{
                                                    "quam",
                                                    "fugit",
                                                    "commodi",
                                                },
                                                Kind: sdk.String("id"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "vel",
                                                },
                                            },
                                            Kind: sdk.String("quidem"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("suscipit"),
                                                Ids: []string{
                                                    "maiores",
                                                    "dolor",
                                                    "ducimus",
                                                    "ad",
                                                },
                                                Kind: sdk.String("quo"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "quae",
                                                    "consectetur",
                                                    "incidunt",
                                                },
                                            },
                                            Kind: sdk.String("tenetur"),
                                        },
                                    },
                                    Kind: sdk.String("blanditiis"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("eius"),
                                                Ids: []string{
                                                    "assumenda",
                                                },
                                                Kind: sdk.String("officiis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "perspiciatis",
                                                },
                                            },
                                            Kind: sdk.String("excepturi"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("neque"),
                                                Ids: []string{
                                                    "omnis",
                                                    "molestias",
                                                    "fugiat",
                                                    "dolorem",
                                                },
                                                Kind: sdk.String("nisi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "dolorum",
                                                    "reiciendis",
                                                },
                                            },
                                            Kind: sdk.String("soluta"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("laboriosam"),
                                                Ids: []string{
                                                    "omnis",
                                                    "ut",
                                                    "quaerat",
                                                },
                                                Kind: sdk.String("qui"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "ea",
                                                    "amet",
                                                    "illum",
                                                },
                                            },
                                            Kind: sdk.String("consequuntur"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("deleniti"),
                                                Ids: []string{
                                                    "veritatis",
                                                },
                                                Kind: sdk.String("cum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "non",
                                                    "recusandae",
                                                    "deserunt",
                                                },
                                            },
                                            Kind: sdk.String("eius"),
                                        },
                                    },
                                    Kind: sdk.String("repellendus"),
                                },
                            },
                            Kind: sdk.String("provident"),
                            Name: sdk.String("Phil Treutel"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("delectus"),
                                                Ids: []string{
                                                    "a",
                                                    "delectus",
                                                },
                                                Kind: sdk.String("laudantium"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "laboriosam",
                                                    "hic",
                                                },
                                            },
                                            Kind: sdk.String("dolorum"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("unde"),
                                                Ids: []string{
                                                    "velit",
                                                    "ullam",
                                                },
                                                Kind: sdk.String("totam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "numquam",
                                                    "quos",
                                                    "non",
                                                },
                                            },
                                            Kind: sdk.String("ex"),
                                        },
                                    },
                                    Kind: sdk.String("magni"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ex"),
                                                Ids: []string{
                                                    "iure",
                                                    "vitae",
                                                    "sapiente",
                                                    "odit",
                                                },
                                                Kind: sdk.String("modi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "doloremque",
                                                },
                                            },
                                            Kind: sdk.String("blanditiis"),
                                        },
                                    },
                                    Kind: sdk.String("nulla"),
                                },
                            },
                            Kind: sdk.String("quasi"),
                            Name: sdk.String("Randall Cartwright"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-08-10"),
                    Kind: sdk.String("aliquid"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumWeekToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2020-05-29"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("pariatur"),
                        Name: sdk.String("Celia Nikolaus"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("id"),
                    Etag: sdk.String("ratione"),
                    ID: sdk.String("0d3702a0-649f-470f-a208-a65671385c4a"),
                    Kind: sdk.String("expedita"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("at"),
                },
                MetricNames: []string{
                    "ea",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("debitis"),
                                    Ids: []string{
                                        "temporibus",
                                    },
                                    Kind: sdk.String("quisquam"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "tempora",
                                        "repellendus",
                                        "suscipit",
                                    },
                                },
                                Kind: sdk.String("dolor"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("quasi"),
                                    Ids: []string{
                                        "reprehenderit",
                                        "quidem",
                                    },
                                    Kind: sdk.String("nihil"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "iusto",
                                        "quibusdam",
                                    },
                                },
                                Kind: sdk.String("illum"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("odio"),
                                    Ids: []string{
                                        "nobis",
                                        "asperiores",
                                        "nam",
                                    },
                                    Kind: sdk.String("saepe"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "cupiditate",
                                        "a",
                                    },
                                },
                                Kind: sdk.String("eaque"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("cumque"),
                                    Ids: []string{
                                        "rem",
                                        "dicta",
                                    },
                                    Kind: sdk.String("asperiores"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "voluptas",
                                        "sequi",
                                        "delectus",
                                    },
                                },
                                Kind: sdk.String("vitae"),
                            },
                        },
                        Kind: sdk.String("fuga"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("tempore"),
                                    Ids: []string{
                                        "quos",
                                        "quas",
                                        "aliquid",
                                    },
                                    Kind: sdk.String("id"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "sit",
                                    },
                                },
                                Kind: sdk.String("nihil"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("facere"),
                                    Ids: []string{
                                        "nobis",
                                        "suscipit",
                                        "eos",
                                        "a",
                                    },
                                    Kind: sdk.String("laboriosam"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "hic",
                                    },
                                },
                                Kind: sdk.String("aut"),
                            },
                        },
                        Kind: sdk.String("excepturi"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("odio"),
                                    Ids: []string{
                                        "ipsam",
                                        "occaecati",
                                    },
                                    Kind: sdk.String("sequi"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "sequi",
                                        "facilis",
                                        "corrupti",
                                        "alias",
                                    },
                                },
                                Kind: sdk.String("exercitationem"),
                            },
                        },
                        Kind: sdk.String("impedit"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("cumque"),
                                    Ids: []string{
                                        "doloremque",
                                        "veniam",
                                        "dolorem",
                                        "voluptate",
                                    },
                                    Kind: sdk.String("perspiciatis"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "assumenda",
                                        "error",
                                        "quaerat",
                                        "recusandae",
                                    },
                                },
                                Kind: sdk.String("quas"),
                            },
                        },
                        Kind: sdk.String("nihil"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                },
            },
            PathCriteria: &shared.ReportPathCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("quia"),
                        Etag: sdk.String("quis"),
                        ID: sdk.String("d18ce5d7-7414-40cd-870a-ae04ae20749c"),
                        Kind: sdk.String("ipsum"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("omnis"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("hic"),
                        Etag: sdk.String("quasi"),
                        ID: sdk.String("48c9f08f-4107-4c22-8684-963ea6ceec84"),
                        Kind: sdk.String("deleniti"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("iure"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("ipsam"),
                        Etag: sdk.String("atque"),
                        ID: sdk.String("90a9faef-940e-48d6-a8c0-8f1014414875"),
                        Kind: sdk.String("eum"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("amet"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("quisquam"),
                    Kind: sdk.String("id"),
                    Name: sdk.String("Emilio Cummerata"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("vitae"),
                                                Ids: []string{
                                                    "laboriosam",
                                                    "quia",
                                                },
                                                Kind: sdk.String("magnam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "amet",
                                                    "nesciunt",
                                                    "sint",
                                                    "nam",
                                                },
                                            },
                                            Kind: sdk.String("numquam"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ipsum"),
                                                Ids: []string{
                                                    "error",
                                                    "architecto",
                                                    "occaecati",
                                                    "non",
                                                },
                                                Kind: sdk.String("esse"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "veritatis",
                                                    "dolor",
                                                    "facere",
                                                    "molestiae",
                                                },
                                            },
                                            Kind: sdk.String("labore"),
                                        },
                                    },
                                    Kind: sdk.String("maiores"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("qui"),
                                                Ids: []string{
                                                    "corrupti",
                                                    "pariatur",
                                                    "dolore",
                                                    "magnam",
                                                },
                                                Kind: sdk.String("sunt"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "illo",
                                                    "occaecati",
                                                    "similique",
                                                    "occaecati",
                                                },
                                            },
                                            Kind: sdk.String("deserunt"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("corrupti"),
                                                Ids: []string{
                                                    "qui",
                                                    "qui",
                                                },
                                                Kind: sdk.String("excepturi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "accusamus",
                                                },
                                            },
                                            Kind: sdk.String("fuga"),
                                        },
                                    },
                                    Kind: sdk.String("officiis"),
                                },
                            },
                            Kind: sdk.String("eaque"),
                            Name: sdk.String("Paula Cummings"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-09-12"),
                    Kind: sdk.String("placeat"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumWeekToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-04-02"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("provident"),
                        Name: sdk.String("Mrs. Sonya Cormier"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("labore"),
                    Etag: sdk.String("consectetur"),
                    ID: sdk.String("1274488f-0cb2-4dc9-b2e9-61d2ba4161d4"),
                    Kind: sdk.String("placeat"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("velit"),
                },
                MetricNames: []string{
                    "temporibus",
                    "cupiditate",
                    "tenetur",
                    "iure",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("suscipit"),
                                    Ids: []string{
                                        "atque",
                                        "fuga",
                                        "quibusdam",
                                        "laboriosam",
                                    },
                                    Kind: sdk.String("distinctio"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "voluptatibus",
                                        "ut",
                                        "perferendis",
                                    },
                                },
                                Kind: sdk.String("iste"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("recusandae"),
                                    Ids: []string{
                                        "dolor",
                                    },
                                    Kind: sdk.String("magnam"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "accusamus",
                                    },
                                },
                                Kind: sdk.String("laboriosam"),
                            },
                        },
                        Kind: sdk.String("pariatur"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("eius"),
                                    Ids: []string{
                                        "eos",
                                    },
                                    Kind: sdk.String("quae"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "voluptates",
                                    },
                                },
                                Kind: sdk.String("natus"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("in"),
                                    Ids: []string{
                                        "velit",
                                        "iure",
                                        "non",
                                        "delectus",
                                    },
                                    Kind: sdk.String("commodi"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "itaque",
                                        "molestias",
                                        "laudantium",
                                        "occaecati",
                                    },
                                },
                                Kind: sdk.String("inventore"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("maiores"),
                                    Ids: []string{
                                        "inventore",
                                        "reprehenderit",
                                        "molestiae",
                                    },
                                    Kind: sdk.String("autem"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "quos",
                                        "aliquid",
                                        "magni",
                                        "quasi",
                                    },
                                },
                                Kind: sdk.String("magni"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("delectus"),
                                    Ids: []string{
                                        "a",
                                        "omnis",
                                    },
                                    Kind: sdk.String("facere"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "ducimus",
                                        "dolorem",
                                        "doloribus",
                                        "in",
                                    },
                                },
                                Kind: sdk.String("voluptatem"),
                            },
                        },
                        Kind: sdk.String("aut"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("molestiae"),
                                    Ids: []string{
                                        "harum",
                                        "expedita",
                                        "modi",
                                        "dolorem",
                                    },
                                    Kind: sdk.String("quod"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "quo",
                                        "quasi",
                                    },
                                },
                                Kind: sdk.String("explicabo"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("similique"),
                                    Ids: []string{
                                        "sit",
                                        "vero",
                                        "distinctio",
                                    },
                                    Kind: sdk.String("fugiat"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "perspiciatis",
                                    },
                                },
                                Kind: sdk.String("recusandae"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("at"),
                                    Ids: []string{
                                        "rerum",
                                        "ad",
                                        "error",
                                        "non",
                                    },
                                    Kind: sdk.String("eum"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "reprehenderit",
                                        "ipsam",
                                    },
                                },
                                Kind: sdk.String("praesentium"),
                            },
                        },
                        Kind: sdk.String("voluptas"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("illum"),
                                    Ids: []string{
                                        "repellendus",
                                    },
                                    Kind: sdk.String("accusamus"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "excepturi",
                                        "voluptas",
                                        "quo",
                                    },
                                },
                                Kind: sdk.String("maiores"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("inventore"),
                                    Ids: []string{
                                        "cupiditate",
                                        "omnis",
                                        "tempora",
                                        "ipsam",
                                    },
                                    Kind: sdk.String("quod"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "ab",
                                        "numquam",
                                        "nostrum",
                                        "dignissimos",
                                    },
                                },
                                Kind: sdk.String("velit"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("tenetur"),
                                    Ids: []string{
                                        "alias",
                                        "nam",
                                        "possimus",
                                    },
                                    Kind: sdk.String("dolore"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "rem",
                                        "quisquam",
                                        "esse",
                                    },
                                },
                                Kind: sdk.String("officia"),
                            },
                        },
                        Kind: sdk.String("consequatur"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                    },
                },
            },
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("ipsum"),
                        Etag: sdk.String("dolorem"),
                        ID: sdk.String("ac473b40-567b-43f5-be42-a3305ba82770"),
                        Kind: sdk.String("quidem"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("nisi"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quibusdam"),
                        Etag: sdk.String("odit"),
                        ID: sdk.String("dee1cb27-fde0-4b64-8077-d9bfd241a62c"),
                        Kind: sdk.String("maiores"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("doloribus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("id"),
                        Etag: sdk.String("consectetur"),
                        ID: sdk.String("e7c6147e-0c2c-4ce2-9819-224e200e513e"),
                        Kind: sdk.String("laboriosam"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("nemo"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quisquam"),
                        Etag: sdk.String("labore"),
                        ID: sdk.String("6bb6d887-6065-40d0-ab06-d21d9af7f5b5"),
                        Kind: sdk.String("id"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("ipsum"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("facilis"),
                        Name: sdk.String("Brooke Aufderhar"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("exercitationem"),
                        Name: sdk.String("Victor Kemmer"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("dolorum"),
                        Name: sdk.String("Bessie Kuhic I"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("corrupti"),
                        Name: sdk.String("Hattie Howell"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("facilis"),
                        Name: sdk.String("Roland Lehner"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("sequi"),
                        Name: sdk.String("Sharon Rolfson"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("rerum"),
                        Etag: sdk.String("laborum"),
                        ID: sdk.String("92c26349-d592-472e-9506-6462c99eaada"),
                        Kind: sdk.String("eligendi"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("magni"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("rerum"),
                        Etag: sdk.String("atque"),
                        ID: sdk.String("66ce16de-8082-4e0a-b164-fb614494dbb0"),
                        Kind: sdk.String("facilis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("eaque"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-06-25"),
                    Kind: sdk.String("illo"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast30Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-01-08"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("voluptatum"),
                    Etag: sdk.String("natus"),
                    ID: sdk.String("f7d9ec43-2ba7-4309-a391-37eac1f806d4"),
                    Kind: sdk.String("eveniet"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("delectus"),
                },
                MetricNames: []string{
                    "sint",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("iure"),
                        Name: sdk.String("Tonya Corkery"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("fuga"),
                        Name: sdk.String("Nathaniel Block"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("tempore"),
                        Name: sdk.String("Darryl Ratke"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("facilis"),
                        Name: sdk.String("Raul Dooley"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(541181),
                    ImpressionsLookbackWindow: sdk.Int(726566),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(433055),
                    MaximumImpressionInteractions: sdk.Int(116592),
                    MaximumInteractionGap: sdk.Int(187702),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("tempora"),
                            Etag: sdk.String("dolor"),
                            ID: sdk.String("56ca70d8-d4f5-4d60-b464-11237b62fbc3"),
                            Kind: sdk.String("cupiditate"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("corrupti"),
                        },
                    },
                    Kind: sdk.String("possimus"),
                    MetricNames: []string{
                        "voluptas",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("possimus"),
                            Etag: sdk.String("molestias"),
                            ID: sdk.String("68ecac33-024a-4c5b-ba0f-6cfeb9d3a697"),
                            Kind: sdk.String("reiciendis"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("dignissimos"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("vitae"),
                            Etag: sdk.String("quisquam"),
                            ID: sdk.String("e361d2e5-d73e-4795-aa67-ac619187481d"),
                            Kind: sdk.String("sunt"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("sint"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("unde"),
                            Etag: sdk.String("illo"),
                            ID: sdk.String("c71e59cf-64fa-47e5-9f8c-d95906f46816"),
                            Kind: sdk.String("tempore"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("minima"),
                        },
                    },
                    Kind: sdk.String("asperiores"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-04-23"),
                    Kind: sdk.String("dicta"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast14Days.ToPointer(),
                    StartDate: types.MustDateFromString("2021-08-06"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("impedit"),
                        Etag: sdk.String("nisi"),
                        ID: sdk.String("3cca5650-5600-49ff-a29e-f49122f73623"),
                        Kind: sdk.String("corporis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("iure"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("amet"),
                        Etag: sdk.String("voluptatibus"),
                        ID: sdk.String("28acac36-11e1-4afa-9656-d9e0eaec2ecc"),
                        Kind: sdk.String("ipsa"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("maxime"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("expedita"),
                        Etag: sdk.String("sint"),
                        ID: sdk.String("bb6889a0-b04c-4745-8cb0-9f121661e331"),
                        Kind: sdk.String("autem"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("officia"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("accusantium"),
                        Etag: sdk.String("ducimus"),
                        ID: sdk.String("00ebfe79-39ad-43d5-ad61-dcb7d82d77b1"),
                        Kind: sdk.String("libero"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("illo"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("expedita"),
                        Name: sdk.String("Marguerite Abernathy"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("velit"),
                        Name: sdk.String("Barbara Huel"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("eum"),
                        Name: sdk.String("Malcolm Hills"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("explicabo"),
                        Name: sdk.String("Emmett Franey"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "sint",
                    "vitae",
                    "sapiente",
                    "dicta",
                },
                ReachByFrequencyMetricNames: []string{
                    "deserunt",
                    "doloremque",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(517190),
                ExpirationDate: types.MustDateFromString("2022-02-05"),
                Repeats: sdk.String("ipsa"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumThursday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumWednesday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumTuesday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSunday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumDayOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2022-01-09"),
                Timezone: sdk.String("in"),
            },
            SubAccountID: sdk.String("blanditiis"),
            Type: shared.ReportTypeEnumPathToConversion.ToPointer(),
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("est"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quidem",
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.DfareportingReportsInsertSecurity{
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

## DfareportingReportsList

Retrieves list of reports.

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
    res, err := s.Reports.DfareportingReportsList(ctx, operations.DfareportingReportsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("officia"),
        MaxResults: sdk.Int64(298297),
        OauthToken: sdk.String("dolores"),
        PageToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolorum",
        QuotaUser: sdk.String("sint"),
        Scope: operations.DfareportingReportsListScopeEnumAll.ToPointer(),
        SortField: operations.DfareportingReportsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingReportsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("similique"),
    }, operations.DfareportingReportsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportList != nil {
        // handle response
    }
}
```

## DfareportingReportsPatch

Updates an existing report. This method supports patch semantics.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.DfareportingReportsPatch(ctx, operations.DfareportingReportsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Report: &shared.Report{
            AccountID: sdk.String("occaecati"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("ratione"),
                            Etag: sdk.String("distinctio"),
                            ID: sdk.String("b73dcfce-fac4-4598-8a74-ec7582b0da94"),
                            Kind: sdk.String("corrupti"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("quam"),
                        },
                    },
                    Kind: sdk.String("impedit"),
                    MetricNames: []string{
                        "vitae",
                        "ducimus",
                        "quas",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("reiciendis"),
                            Etag: sdk.String("in"),
                            ID: sdk.String("dcd943bc-56d3-414a-ba84-8afe8902b485"),
                            Kind: sdk.String("velit"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("reiciendis"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("fuga"),
                            Etag: sdk.String("ipsum"),
                            ID: sdk.String("fc83c1fc-5b0a-4cdb-84c4-8b427d7de963"),
                            Kind: sdk.String("tenetur"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("doloremque"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("consectetur"),
                            Etag: sdk.String("eveniet"),
                            ID: sdk.String("497d8970-02de-40de-bd4e-15f2303b3252"),
                            Kind: sdk.String("excepturi"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("laudantium"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("incidunt"),
                            Etag: sdk.String("quae"),
                            ID: sdk.String("33948aaf-abda-4028-a65c-230924d34541"),
                            Kind: sdk.String("unde"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("distinctio"),
                        },
                    },
                    Kind: sdk.String("accusamus"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-12-13"),
                    Kind: sdk.String("maxime"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast30Days.ToPointer(),
                    StartDate: types.MustDateFromString("2021-11-16"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("saepe"),
                        Etag: sdk.String("consectetur"),
                        ID: sdk.String("a7659520-2b36-47d4-a168-9b618b30bb7f"),
                        Kind: sdk.String("blanditiis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("eius"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("nobis"),
                        Name: sdk.String("Amelia Corkery"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "eveniet",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("nobis"),
                        Name: sdk.String("Mr. Faith Howell"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("veritatis"),
                        Name: sdk.String("Carole Gibson"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quasi"),
                        Name: sdk.String("Miss Levi Nitzsche"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("labore"),
                        Name: sdk.String("Travis Dibbert MD"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-02-21"),
                    Kind: sdk.String("ea"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast14Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-10-25"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumSiteByAdvertiser.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("modi"),
                        Etag: sdk.String("occaecati"),
                        ID: sdk.String("db430a79-4a76-444f-8f29-4e355c0c95bb"),
                        Kind: sdk.String("iusto"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("suscipit"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("consectetur"),
                        Etag: sdk.String("voluptas"),
                        ID: sdk.String("3ba33642-49f4-4f6d-97e7-b5a78224e2ce"),
                        Kind: sdk.String("eligendi"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("quam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("aspernatur"),
                        Etag: sdk.String("eius"),
                        ID: sdk.String("605504be-755d-4207-b448-548486095d14"),
                        Kind: sdk.String("incidunt"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("eos"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("deserunt"),
                        Etag: sdk.String("voluptatem"),
                        ID: sdk.String("fc3a3bdd-cd5b-4006-88cc-9a5a2cec6731"),
                        Kind: sdk.String("itaque"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("beatae"),
                    },
                },
                MetricNames: []string{
                    "eaque",
                    "accusantium",
                    "pariatur",
                },
                OverlapMetricNames: []string{
                    "perspiciatis",
                    "nisi",
                    "ratione",
                    "enim",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumLink.ToPointer(),
                Message: sdk.String("laudantium"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Tia39@hotmail.com"),
                        Kind: sdk.String("aliquam"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Micah_Spinka30@gmail.com"),
                        Kind: sdk.String("tempora"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Agnes_Nader55@hotmail.com"),
                        Kind: sdk.String("nobis"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Monte51@gmail.com"),
                        Kind: sdk.String("quia"),
                    },
                },
            },
            Etag: sdk.String("quis"),
            FileName: sdk.String("ea"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("veritatis"),
                        Etag: sdk.String("iure"),
                        ID: sdk.String("e703eb60-6728-4e45-a75f-10bb960effce"),
                        Kind: sdk.String("voluptatibus"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("officia"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptatum"),
                        Etag: sdk.String("hic"),
                        ID: sdk.String("1c046c01-682e-4c8d-b364-8095fdbd9510"),
                        Kind: sdk.String("dolor"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("sunt"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("nulla"),
                        Etag: sdk.String("laudantium"),
                        ID: sdk.String("2fbd37e8-50ed-486b-8def-74a085ceff9d"),
                        Kind: sdk.String("dicta"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("provident"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-11-27"),
                    Kind: sdk.String("culpa"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumYearToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-11-07"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("ut"),
                        Etag: sdk.String("explicabo"),
                        ID: sdk.String("e33cca69-5fd5-460f-937e-24d8713045d2"),
                        Kind: sdk.String("delectus"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("quasi"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("velit"),
                        Etag: sdk.String("vero"),
                        ID: sdk.String("05b5592b-fc73-495f-b122-3b5846a1b9c7"),
                        Kind: sdk.String("commodi"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("dicta"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("earum"),
                        Name: sdk.String("Mrs. Bernice Hackett"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("voluptates"),
                        Name: sdk.String("Jacob Barton"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("nobis"),
                    Etag: sdk.String("recusandae"),
                    ID: sdk.String("abf80124-5904-48fa-a676-7e29d4e543c4"),
                    Kind: sdk.String("illum"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("ad"),
                },
                MetricNames: []string{
                    "debitis",
                    "eius",
                    "necessitatibus",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumExcel.ToPointer(),
            ID: sdk.String("expedita"),
            Kind: sdk.String("nulla"),
            LastModifiedTime: sdk.String("nobis"),
            Name: sdk.String("Allison Bailey"),
            OwnerProfileID: sdk.String("nesciunt"),
            PathAttributionCriteria: &shared.ReportPathAttributionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("saepe"),
                        Etag: sdk.String("perferendis"),
                        ID: sdk.String("81a2fbff-e931-4a78-8426-4cab51b2c0d0"),
                        Kind: sdk.String("quos"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("voluptas"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("tempore"),
                        Etag: sdk.String("natus"),
                        ID: sdk.String("3203cd4d-7627-4167-b438-37d1aaff2bec"),
                        Kind: sdk.String("cumque"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("voluptatum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("rerum"),
                        Etag: sdk.String("mollitia"),
                        ID: sdk.String("fd481abf-cb61-4cb2-b769-01b943ef2a62"),
                        Kind: sdk.String("sit"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("iure"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("placeat"),
                        Etag: sdk.String("ratione"),
                        ID: sdk.String("190b1442-41b4-47d0-a73b-4158358492c4"),
                        Kind: sdk.String("quidem"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("velit"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("porro"),
                    Kind: sdk.String("quia"),
                    Name: sdk.String("Kerry Hettinger"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dolore"),
                                                Ids: []string{
                                                    "quasi",
                                                    "temporibus",
                                                },
                                                Kind: sdk.String("asperiores"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "sequi",
                                                },
                                            },
                                            Kind: sdk.String("rem"),
                                        },
                                    },
                                    Kind: sdk.String("placeat"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("commodi"),
                                                Ids: []string{
                                                    "mollitia",
                                                    "illo",
                                                    "enim",
                                                },
                                                Kind: sdk.String("fugiat"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "facilis",
                                                    "velit",
                                                },
                                            },
                                            Kind: sdk.String("quaerat"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("culpa"),
                                                Ids: []string{
                                                    "qui",
                                                },
                                                Kind: sdk.String("delectus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "ratione",
                                                    "architecto",
                                                },
                                            },
                                            Kind: sdk.String("earum"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("placeat"),
                                                Ids: []string{
                                                    "illum",
                                                    "soluta",
                                                    "magnam",
                                                },
                                                Kind: sdk.String("corrupti"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "dicta",
                                                    "dicta",
                                                    "laboriosam",
                                                    "est",
                                                },
                                            },
                                            Kind: sdk.String("dolor"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("doloribus"),
                                                Ids: []string{
                                                    "nihil",
                                                },
                                                Kind: sdk.String("delectus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "voluptatem",
                                                },
                                            },
                                            Kind: sdk.String("quos"),
                                        },
                                    },
                                    Kind: sdk.String("est"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("delectus"),
                                                Ids: []string{
                                                    "magni",
                                                    "velit",
                                                },
                                                Kind: sdk.String("alias"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "dolores",
                                                    "esse",
                                                },
                                            },
                                            Kind: sdk.String("mollitia"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("sequi"),
                                                Ids: []string{
                                                    "impedit",
                                                    "temporibus",
                                                    "non",
                                                    "vel",
                                                },
                                                Kind: sdk.String("sed"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "provident",
                                                    "eius",
                                                    "mollitia",
                                                    "a",
                                                },
                                            },
                                            Kind: sdk.String("quaerat"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("incidunt"),
                                                Ids: []string{
                                                    "beatae",
                                                    "illo",
                                                    "atque",
                                                },
                                                Kind: sdk.String("consectetur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "corporis",
                                                    "quia",
                                                },
                                            },
                                            Kind: sdk.String("eum"),
                                        },
                                    },
                                    Kind: sdk.String("consequuntur"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("eos"),
                                                Ids: []string{
                                                    "quos",
                                                    "vitae",
                                                    "voluptate",
                                                    "nemo",
                                                },
                                                Kind: sdk.String("error"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "aut",
                                                    "omnis",
                                                    "occaecati",
                                                    "dolor",
                                                },
                                            },
                                            Kind: sdk.String("neque"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("modi"),
                                                Ids: []string{
                                                    "sequi",
                                                    "impedit",
                                                },
                                                Kind: sdk.String("quo"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "unde",
                                                    "vitae",
                                                },
                                            },
                                            Kind: sdk.String("veritatis"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("vero"),
                                                Ids: []string{
                                                    "aliquid",
                                                },
                                                Kind: sdk.String("ex"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "voluptatibus",
                                                    "mollitia",
                                                    "cupiditate",
                                                    "minus",
                                                },
                                            },
                                            Kind: sdk.String("praesentium"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("asperiores"),
                                                Ids: []string{
                                                    "ab",
                                                    "debitis",
                                                    "molestiae",
                                                    "voluptate",
                                                },
                                                Kind: sdk.String("facilis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "dolorum",
                                                    "voluptatum",
                                                    "dolore",
                                                    "nemo",
                                                },
                                            },
                                            Kind: sdk.String("consequuntur"),
                                        },
                                    },
                                    Kind: sdk.String("aliquam"),
                                },
                            },
                            Kind: sdk.String("excepturi"),
                            Name: sdk.String("Edward Leannon"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2020-08-12"),
                    Kind: sdk.String("expedita"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumYearToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-01-21"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("sit"),
                        Name: sdk.String("Gail Padberg"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("fugiat"),
                        Name: sdk.String("Lyle Ritchie"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("aspernatur"),
                        Name: sdk.String("Helen Bahringer"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("explicabo"),
                        Name: sdk.String("Rachael Kling"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("laborum"),
                    Etag: sdk.String("quae"),
                    ID: sdk.String("4804c108-1073-4979-9bd4-465de326956c"),
                    Kind: sdk.String("quae"),
                    MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                    Value: sdk.String("quod"),
                },
                MetricNames: []string{
                    "repellat",
                    "doloribus",
                    "autem",
                    "dolorem",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("temporibus"),
                                    Ids: []string{
                                        "quisquam",
                                    },
                                    Kind: sdk.String("adipisci"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "ut",
                                        "cupiditate",
                                        "non",
                                    },
                                },
                                Kind: sdk.String("veniam"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("at"),
                                    Ids: []string{
                                        "illo",
                                        "magnam",
                                        "provident",
                                    },
                                    Kind: sdk.String("deserunt"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "dignissimos",
                                        "iure",
                                        "maxime",
                                    },
                                },
                                Kind: sdk.String("saepe"),
                            },
                        },
                        Kind: sdk.String("sed"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("labore"),
                                    Ids: []string{
                                        "ut",
                                        "assumenda",
                                    },
                                    Kind: sdk.String("dolores"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "optio",
                                        "non",
                                        "laborum",
                                        "sequi",
                                    },
                                },
                                Kind: sdk.String("minus"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("similique"),
                                    Ids: []string{
                                        "dignissimos",
                                        "fuga",
                                        "pariatur",
                                        "laudantium",
                                    },
                                    Kind: sdk.String("neque"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "optio",
                                        "mollitia",
                                        "esse",
                                    },
                                },
                                Kind: sdk.String("modi"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("amet"),
                                    Ids: []string{
                                        "ipsum",
                                    },
                                    Kind: sdk.String("totam"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "optio",
                                        "excepturi",
                                        "exercitationem",
                                    },
                                },
                                Kind: sdk.String("sint"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("optio"),
                                    Ids: []string{
                                        "explicabo",
                                        "neque",
                                    },
                                    Kind: sdk.String("laborum"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "praesentium",
                                    },
                                },
                                Kind: sdk.String("perspiciatis"),
                            },
                        },
                        Kind: sdk.String("temporibus"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("quidem"),
                                    Ids: []string{
                                        "minus",
                                        "suscipit",
                                        "commodi",
                                    },
                                    Kind: sdk.String("totam"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "consectetur",
                                        "rem",
                                        "fugiat",
                                        "deleniti",
                                    },
                                },
                                Kind: sdk.String("nihil"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("totam"),
                                    Ids: []string{
                                        "voluptatibus",
                                        "natus",
                                        "necessitatibus",
                                        "fugit",
                                    },
                                    Kind: sdk.String("ea"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "eius",
                                        "quaerat",
                                    },
                                },
                                Kind: sdk.String("nulla"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("aperiam"),
                                    Ids: []string{
                                        "a",
                                        "officiis",
                                    },
                                    Kind: sdk.String("sequi"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "facilis",
                                        "vero",
                                        "ut",
                                    },
                                },
                                Kind: sdk.String("labore"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("aperiam"),
                                    Ids: []string{
                                        "voluptate",
                                        "corporis",
                                        "officia",
                                        "tempore",
                                    },
                                    Kind: sdk.String("quis"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "nostrum",
                                        "officia",
                                        "molestias",
                                        "asperiores",
                                    },
                                },
                                Kind: sdk.String("blanditiis"),
                            },
                        },
                        Kind: sdk.String("quod"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                },
            },
            PathCriteria: &shared.ReportPathCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("distinctio"),
                        Etag: sdk.String("consequuntur"),
                        ID: sdk.String("7a32a637-77c3-4e03-8a75-1d851df5b750"),
                        Kind: sdk.String("temporibus"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("architecto"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("officiis"),
                        Etag: sdk.String("vero"),
                        ID: sdk.String("3a91e6f9-59bb-45ad-a9da-09f96b4172f9"),
                        Kind: sdk.String("repudiandae"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("facere"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("blanditiis"),
                        Etag: sdk.String("dolor"),
                        ID: sdk.String("a46dda23-fdde-4fa0-b38d-dd4cf85c1829"),
                        Kind: sdk.String("culpa"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("eligendi"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("cum"),
                    Kind: sdk.String("eaque"),
                    Name: sdk.String("Jackie Cummings IV"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("eos"),
                                                Ids: []string{
                                                    "vitae",
                                                    "quasi",
                                                    "veniam",
                                                    "minima",
                                                },
                                                Kind: sdk.String("ut"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "molestias",
                                                    "illo",
                                                },
                                            },
                                            Kind: sdk.String("eaque"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("amet"),
                                                Ids: []string{
                                                    "laudantium",
                                                    "aliquid",
                                                    "asperiores",
                                                },
                                                Kind: sdk.String("harum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "commodi",
                                                    "distinctio",
                                                    "ut",
                                                    "labore",
                                                },
                                            },
                                            Kind: sdk.String("quas"),
                                        },
                                    },
                                    Kind: sdk.String("eos"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("distinctio"),
                                                Ids: []string{
                                                    "nulla",
                                                    "repellat",
                                                    "consequuntur",
                                                },
                                                Kind: sdk.String("tenetur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "error",
                                                    "doloremque",
                                                    "neque",
                                                    "eligendi",
                                                },
                                            },
                                            Kind: sdk.String("ratione"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("natus"),
                                                Ids: []string{
                                                    "soluta",
                                                    "consequuntur",
                                                    "voluptatibus",
                                                },
                                                Kind: sdk.String("quod"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "corporis",
                                                    "quis",
                                                    "quos",
                                                },
                                            },
                                            Kind: sdk.String("eum"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quis"),
                                                Ids: []string{
                                                    "pariatur",
                                                },
                                                Kind: sdk.String("aut"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "alias",
                                                    "aliquid",
                                                    "eveniet",
                                                    "deserunt",
                                                },
                                            },
                                            Kind: sdk.String("rem"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("incidunt"),
                                                Ids: []string{
                                                    "soluta",
                                                    "praesentium",
                                                    "quae",
                                                },
                                                Kind: sdk.String("iste"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "maxime",
                                                    "reprehenderit",
                                                    "alias",
                                                    "rerum",
                                                },
                                            },
                                            Kind: sdk.String("nesciunt"),
                                        },
                                    },
                                    Kind: sdk.String("nulla"),
                                },
                            },
                            Kind: sdk.String("repudiandae"),
                            Name: sdk.String("Ms. Linda McClure DVM"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2020-03-11"),
                    Kind: sdk.String("magnam"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumMonthToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-11-26"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("voluptate"),
                        Name: sdk.String("Thomas Williamson"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ab"),
                        Name: sdk.String("Bennie Windler"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("voluptates"),
                        Name: sdk.String("Regina Fritsch"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("ipsam"),
                    Etag: sdk.String("nihil"),
                    ID: sdk.String("c22705a1-758f-45ec-b39d-133b2b38ee3e"),
                    Kind: sdk.String("voluptas"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("et"),
                },
                MetricNames: []string{
                    "accusantium",
                    "eius",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("optio"),
                                    Ids: []string{
                                        "iure",
                                        "ullam",
                                        "magni",
                                        "totam",
                                    },
                                    Kind: sdk.String("maiores"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "sit",
                                        "corrupti",
                                    },
                                },
                                Kind: sdk.String("nemo"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("illo"),
                                    Ids: []string{
                                        "incidunt",
                                        "ipsum",
                                        "eius",
                                        "ipsam",
                                    },
                                    Kind: sdk.String("odit"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "illo",
                                        "sequi",
                                        "officia",
                                        "voluptatem",
                                    },
                                },
                                Kind: sdk.String("distinctio"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("doloribus"),
                                    Ids: []string{
                                        "hic",
                                    },
                                    Kind: sdk.String("earum"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "quibusdam",
                                    },
                                },
                                Kind: sdk.String("praesentium"),
                            },
                        },
                        Kind: sdk.String("quia"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("odit"),
                                    Ids: []string{
                                        "nam",
                                        "corporis",
                                        "est",
                                        "ad",
                                    },
                                    Kind: sdk.String("sapiente"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "eligendi",
                                    },
                                },
                                Kind: sdk.String("similique"),
                            },
                        },
                        Kind: sdk.String("iste"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("assumenda"),
                                    Ids: []string{
                                        "officiis",
                                        "aut",
                                    },
                                    Kind: sdk.String("perferendis"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "libero",
                                    },
                                },
                                Kind: sdk.String("facere"),
                            },
                        },
                        Kind: sdk.String("tempora"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("repellat"),
                                    Ids: []string{
                                        "maiores",
                                        "possimus",
                                        "vitae",
                                        "fuga",
                                    },
                                    Kind: sdk.String("eum"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "magni",
                                        "ut",
                                    },
                                },
                                Kind: sdk.String("facere"),
                            },
                        },
                        Kind: sdk.String("possimus"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                },
            },
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("pariatur"),
                        Etag: sdk.String("doloribus"),
                        ID: sdk.String("4b1a8ec2-fde3-4030-aa62-a900db365cdb"),
                        Kind: sdk.String("cumque"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("reprehenderit"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("praesentium"),
                        Etag: sdk.String("blanditiis"),
                        ID: sdk.String("13a2a6dc-053a-4a68-8670-cd14c597e813"),
                        Kind: sdk.String("odio"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("tenetur"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("recusandae"),
                        Etag: sdk.String("ipsum"),
                        ID: sdk.String("3881fc7d-e209-4840-849e-4667c67b3658"),
                        Kind: sdk.String("incidunt"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("consequuntur"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("porro"),
                        Name: sdk.String("Rafael Wiza"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("nostrum"),
                        Name: sdk.String("Brittany Hermann"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("iusto"),
                        Name: sdk.String("Gerald Witting DVM"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("dolorum"),
                        Name: sdk.String("Tiffany Hudson"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("ut"),
                        Etag: sdk.String("perspiciatis"),
                        ID: sdk.String("fc257ebb-7d8f-4720-a541-ccc7d6ccfa66"),
                        Kind: sdk.String("delectus"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("dolores"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("iusto"),
                        Etag: sdk.String("voluptate"),
                        ID: sdk.String("316def41-6a04-4e81-8a8f-3e70b461a687"),
                        Kind: sdk.String("deserunt"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("voluptate"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("impedit"),
                        Etag: sdk.String("doloribus"),
                        ID: sdk.String("5b6b414b-606e-487b-b1d1-c27182f07d3c"),
                        Kind: sdk.String("ad"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("excepturi"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-05-03"),
                    Kind: sdk.String("similique"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousQuarter.ToPointer(),
                    StartDate: types.MustDateFromString("2022-12-25"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("dolores"),
                    Etag: sdk.String("laudantium"),
                    ID: sdk.String("1624aeac-4440-46d7-be9a-c5cca7b9aa65"),
                    Kind: sdk.String("odio"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("harum"),
                },
                MetricNames: []string{
                    "tempore",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("quibusdam"),
                        Name: sdk.String("Mr. Mitchell Turcotte"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("repellat"),
                        Name: sdk.String("Ted Christiansen"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("eaque"),
                        Name: sdk.String("Clark Funk DVM"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("eum"),
                        Name: sdk.String("Dora Stoltenberg"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(591187),
                    ImpressionsLookbackWindow: sdk.Int(815366),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(724964),
                    MaximumImpressionInteractions: sdk.Int(868374),
                    MaximumInteractionGap: sdk.Int(806932),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("praesentium"),
                            Etag: sdk.String("est"),
                            ID: sdk.String("19d97b9b-31bb-4dd0-8d5a-3a09d587bd34"),
                            Kind: sdk.String("sunt"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("quia"),
                        },
                    },
                    Kind: sdk.String("ipsam"),
                    MetricNames: []string{
                        "necessitatibus",
                        "eius",
                        "aspernatur",
                        "natus",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("ullam"),
                            Etag: sdk.String("nesciunt"),
                            ID: sdk.String("7fd8ba50-ea5a-4c2c-b5b8-47491bdea90e"),
                            Kind: sdk.String("ipsa"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("quis"),
                        },
                    },
                    Kind: sdk.String("corrupti"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-09-30"),
                    Kind: sdk.String("vero"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast7Days.ToPointer(),
                    StartDate: types.MustDateFromString("2021-07-17"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("deserunt"),
                        Etag: sdk.String("quasi"),
                        ID: sdk.String("0a363f32-fda2-4342-b004-9524dba9a17a"),
                        Kind: sdk.String("blanditiis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("reiciendis"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("expedita"),
                        Name: sdk.String("Lindsay Connelly"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quos"),
                        Name: sdk.String("Leslie Yundt DDS"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quas"),
                        Name: sdk.String("Ignacio Leannon Sr."),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "neque",
                },
                ReachByFrequencyMetricNames: []string{
                    "beatae",
                    "deleniti",
                    "corporis",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(734297),
                ExpirationDate: types.MustDateFromString("2021-05-03"),
                Repeats: sdk.String("tempore"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSaturday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSaturday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumTuesday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumMonday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumWeekOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2021-06-02"),
                Timezone: sdk.String("cumque"),
            },
            SubAccountID: sdk.String("aliquam"),
            Type: shared.ReportTypeEnumPath.ToPointer(),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aut",
        QuotaUser: sdk.String("expedita"),
        ReportID: "natus",
        UploadType: sdk.String("unde"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.DfareportingReportsPatchSecurity{
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

## DfareportingReportsRun

Runs a report.

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
    res, err := s.Reports.DfareportingReportsRun(ctx, operations.DfareportingReportsRunRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "adipisci",
        QuotaUser: sdk.String("aliquid"),
        ReportID: "eaque",
        Synchronous: sdk.Bool(false),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.DfareportingReportsRunSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## DfareportingReportsUpdate

Updates a report.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.DfareportingReportsUpdate(ctx, operations.DfareportingReportsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Report: &shared.Report{
            AccountID: sdk.String("pariatur"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("dicta"),
                            Etag: sdk.String("ea"),
                            ID: sdk.String("3ae1c1e2-22a2-450a-8293-f368d63af900"),
                            Kind: sdk.String("sit"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("corporis"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("nulla"),
                            Etag: sdk.String("vero"),
                            ID: sdk.String("d9d00dc2-6611-4fea-8de2-2336382724d0"),
                            Kind: sdk.String("commodi"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("nemo"),
                        },
                    },
                    Kind: sdk.String("id"),
                    MetricNames: []string{
                        "dolorum",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("voluptatum"),
                            Etag: sdk.String("cupiditate"),
                            ID: sdk.String("2563ee83-81ea-4f4a-a794-752695a9b444"),
                            Kind: sdk.String("totam"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("quis"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("modi"),
                            Etag: sdk.String("recusandae"),
                            ID: sdk.String("e709a8df-6e2f-433c-b57b-bfb860857ac0"),
                            Kind: sdk.String("dignissimos"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("dolorum"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("laborum"),
                            Etag: sdk.String("possimus"),
                            ID: sdk.String("6a85f7b7-cf56-44ea-a8bc-3b63aa4b277d"),
                            Kind: sdk.String("unde"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("deserunt"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("itaque"),
                            Etag: sdk.String("iste"),
                            ID: sdk.String("d4a576c3-5347-4123-978e-0763b4fc7b4f"),
                            Kind: sdk.String("similique"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("fugit"),
                        },
                    },
                    Kind: sdk.String("sequi"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2020-05-30"),
                    Kind: sdk.String("eligendi"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast365Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-10-28"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("accusamus"),
                        Etag: sdk.String("recusandae"),
                        ID: sdk.String("3f14b20b-dfc4-405f-9871-4f8edf6e48ee"),
                        Kind: sdk.String("quos"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("consectetur"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("exercitationem"),
                        Name: sdk.String("Dr. Vickie Hahn I"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quibusdam"),
                        Name: sdk.String("Dr. Leo Kovacek V"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("eligendi"),
                        Name: sdk.String("Sonja Kunze"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quo"),
                        Name: sdk.String("Melinda Batz"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "nesciunt",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("recusandae"),
                        Name: sdk.String("Mildred Reynolds"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("aut"),
                        Name: sdk.String("Josh Padberg V"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("rerum"),
                        Name: sdk.String("Brenda Friesen Jr."),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-05-19"),
                    Kind: sdk.String("magnam"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumQuarterToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2020-09-03"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumCampaign.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("quae"),
                        Etag: sdk.String("illo"),
                        ID: sdk.String("3e7df636-c92b-4a33-8ca8-9e71b32ce5a1"),
                        Kind: sdk.String("ipsum"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("fugiat"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("aspernatur"),
                        Etag: sdk.String("dolor"),
                        ID: sdk.String("1c8d6222-a86e-4a96-8df9-ccaa75766c20"),
                        Kind: sdk.String("aperiam"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("molestiae"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("similique"),
                        Etag: sdk.String("minus"),
                        ID: sdk.String("b9d3cbfe-ed63-4c64-be7f-fb75ff102628"),
                        Kind: sdk.String("ea"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("cum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("dolor"),
                        Etag: sdk.String("temporibus"),
                        ID: sdk.String("68bdcfb0-02a2-43fa-a619-f32a5ee5015f"),
                        Kind: sdk.String("esse"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("illo"),
                    },
                },
                MetricNames: []string{
                    "fuga",
                    "tenetur",
                    "architecto",
                    "vero",
                },
                OverlapMetricNames: []string{
                    "totam",
                    "necessitatibus",
                    "voluptatibus",
                    "eaque",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumLink.ToPointer(),
                Message: sdk.String("doloremque"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Ashleigh5@hotmail.com"),
                        Kind: sdk.String("culpa"),
                    },
                },
            },
            Etag: sdk.String("cum"),
            FileName: sdk.String("dolorem"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("quis"),
                        Etag: sdk.String("nulla"),
                        ID: sdk.String("b33912ce-024a-4534-8e21-c081b180849c"),
                        Kind: sdk.String("amet"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("sint"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("repellendus"),
                        Etag: sdk.String("modi"),
                        ID: sdk.String("74e77399-e412-4ee7-a7f9-6d0b3bd159d8"),
                        Kind: sdk.String("laboriosam"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("magnam"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-03-14"),
                    Kind: sdk.String("cumque"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumYesterday.ToPointer(),
                    StartDate: types.MustDateFromString("2022-02-15"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("autem"),
                        Etag: sdk.String("accusamus"),
                        ID: sdk.String("5e309dfc-5f3f-43f1-83fa-2b96cf325b26"),
                        Kind: sdk.String("error"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("neque"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("sequi"),
                        Etag: sdk.String("optio"),
                        ID: sdk.String("2afb6990-61c4-4cc0-aa2f-8d0469c72988"),
                        Kind: sdk.String("optio"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("quidem"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("eos"),
                        Name: sdk.String("Darla Mayert I"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("porro"),
                        Name: sdk.String("Carrie Davis"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("beatae"),
                    Etag: sdk.String("culpa"),
                    ID: sdk.String("bad1a5ee-b434-4d73-add9-c829562467a2"),
                    Kind: sdk.String("eius"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("cumque"),
                },
                MetricNames: []string{
                    "delectus",
                    "laborum",
                    "iste",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumExcel.ToPointer(),
            ID: sdk.String("veniam"),
            Kind: sdk.String("recusandae"),
            LastModifiedTime: sdk.String("tempore"),
            Name: sdk.String("Joel Anderson"),
            OwnerProfileID: sdk.String("optio"),
            PathAttributionCriteria: &shared.ReportPathAttributionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("autem"),
                        Etag: sdk.String("libero"),
                        ID: sdk.String("b301cfb0-6017-4690-a2b4-f0791ed6fbd1"),
                        Kind: sdk.String("molestias"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("temporibus"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("pariatur"),
                    Kind: sdk.String("voluptas"),
                    Name: sdk.String("Dr. Allan Wilkinson"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("fugiat"),
                                                Ids: []string{
                                                    "perspiciatis",
                                                    "harum",
                                                },
                                                Kind: sdk.String("saepe"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "a",
                                                    "earum",
                                                },
                                            },
                                            Kind: sdk.String("dolorem"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("tenetur"),
                                                Ids: []string{
                                                    "excepturi",
                                                    "ipsam",
                                                    "eaque",
                                                    "omnis",
                                                },
                                                Kind: sdk.String("officiis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "quod",
                                                    "hic",
                                                    "sit",
                                                    "nihil",
                                                },
                                            },
                                            Kind: sdk.String("ex"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dolore"),
                                                Ids: []string{
                                                    "veritatis",
                                                    "deserunt",
                                                },
                                                Kind: sdk.String("accusamus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "id",
                                                    "quod",
                                                    "aliquam",
                                                },
                                            },
                                            Kind: sdk.String("cumque"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("aut"),
                                                Ids: []string{
                                                    "doloribus",
                                                    "vitae",
                                                    "porro",
                                                    "quis",
                                                },
                                                Kind: sdk.String("doloribus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "tempore",
                                                    "iusto",
                                                    "cumque",
                                                    "magnam",
                                                },
                                            },
                                            Kind: sdk.String("optio"),
                                        },
                                    },
                                    Kind: sdk.String("debitis"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("perferendis"),
                                                Ids: []string{
                                                    "neque",
                                                    "veritatis",
                                                    "corrupti",
                                                    "possimus",
                                                },
                                                Kind: sdk.String("sequi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "dolorem",
                                                    "perspiciatis",
                                                },
                                            },
                                            Kind: sdk.String("sequi"),
                                        },
                                    },
                                    Kind: sdk.String("officiis"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("repellendus"),
                                                Ids: []string{
                                                    "quisquam",
                                                    "porro",
                                                },
                                                Kind: sdk.String("omnis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "asperiores",
                                                    "consequuntur",
                                                    "impedit",
                                                    "temporibus",
                                                },
                                            },
                                            Kind: sdk.String("libero"),
                                        },
                                    },
                                    Kind: sdk.String("aliquam"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("magni"),
                                                Ids: []string{
                                                    "nisi",
                                                },
                                                Kind: sdk.String("suscipit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "at",
                                                    "quis",
                                                    "nostrum",
                                                    "sunt",
                                                },
                                            },
                                            Kind: sdk.String("quia"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptatum"),
                                                Ids: []string{
                                                    "omnis",
                                                    "architecto",
                                                    "dicta",
                                                    "quod",
                                                },
                                                Kind: sdk.String("cumque"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "at",
                                                    "cupiditate",
                                                    "eius",
                                                },
                                            },
                                            Kind: sdk.String("accusantium"),
                                        },
                                    },
                                    Kind: sdk.String("voluptatibus"),
                                },
                            },
                            Kind: sdk.String("ipsum"),
                            Name: sdk.String("Mrs. Bessie Lind"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ipsam"),
                                                Ids: []string{
                                                    "hic",
                                                    "accusantium",
                                                },
                                                Kind: sdk.String("et"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "illum",
                                                    "enim",
                                                    "deleniti",
                                                },
                                            },
                                            Kind: sdk.String("mollitia"),
                                        },
                                    },
                                    Kind: sdk.String("tempore"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("neque"),
                                                Ids: []string{
                                                    "sequi",
                                                },
                                                Kind: sdk.String("delectus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "ratione",
                                                },
                                            },
                                            Kind: sdk.String("a"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("sequi"),
                                                Ids: []string{
                                                    "architecto",
                                                    "consequatur",
                                                    "optio",
                                                },
                                                Kind: sdk.String("cum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "officiis",
                                                },
                                            },
                                            Kind: sdk.String("cum"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("at"),
                                                Ids: []string{
                                                    "consequuntur",
                                                    "sapiente",
                                                },
                                                Kind: sdk.String("reiciendis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "libero",
                                                    "officiis",
                                                },
                                            },
                                            Kind: sdk.String("sequi"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("illo"),
                                                Ids: []string{
                                                    "fugit",
                                                    "officia",
                                                    "reprehenderit",
                                                },
                                                Kind: sdk.String("voluptates"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "tempora",
                                                },
                                            },
                                            Kind: sdk.String("voluptate"),
                                        },
                                    },
                                    Kind: sdk.String("perspiciatis"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("explicabo"),
                                                Ids: []string{
                                                    "sunt",
                                                    "fugiat",
                                                    "ex",
                                                },
                                                Kind: sdk.String("eius"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "mollitia",
                                                    "dolores",
                                                },
                                            },
                                            Kind: sdk.String("quisquam"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("perspiciatis"),
                                                Ids: []string{
                                                    "at",
                                                    "quae",
                                                },
                                                Kind: sdk.String("molestiae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "adipisci",
                                                },
                                            },
                                            Kind: sdk.String("qui"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("suscipit"),
                                                Ids: []string{
                                                    "sequi",
                                                },
                                                Kind: sdk.String("corporis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "possimus",
                                                    "nostrum",
                                                    "nulla",
                                                    "doloremque",
                                                },
                                            },
                                            Kind: sdk.String("impedit"),
                                        },
                                    },
                                    Kind: sdk.String("ad"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("nobis"),
                                                Ids: []string{
                                                    "ratione",
                                                    "nesciunt",
                                                    "blanditiis",
                                                },
                                                Kind: sdk.String("aut"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "illum",
                                                    "quidem",
                                                    "accusamus",
                                                },
                                            },
                                            Kind: sdk.String("aliquid"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("magnam"),
                                                Ids: []string{
                                                    "voluptates",
                                                    "minima",
                                                    "cumque",
                                                },
                                                Kind: sdk.String("ullam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "at",
                                                    "illum",
                                                },
                                            },
                                            Kind: sdk.String("alias"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("neque"),
                                                Ids: []string{
                                                    "reiciendis",
                                                },
                                                Kind: sdk.String("in"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "dignissimos",
                                                },
                                            },
                                            Kind: sdk.String("dicta"),
                                        },
                                    },
                                    Kind: sdk.String("numquam"),
                                },
                            },
                            Kind: sdk.String("iure"),
                            Name: sdk.String("Celia Jacobi"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("mollitia"),
                                                Ids: []string{
                                                    "eveniet",
                                                },
                                                Kind: sdk.String("maxime"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "incidunt",
                                                    "eius",
                                                },
                                            },
                                            Kind: sdk.String("omnis"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ratione"),
                                                Ids: []string{
                                                    "quia",
                                                    "minus",
                                                    "tenetur",
                                                },
                                                Kind: sdk.String("saepe"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "eius",
                                                },
                                            },
                                            Kind: sdk.String("ullam"),
                                        },
                                    },
                                    Kind: sdk.String("eius"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("asperiores"),
                                                Ids: []string{
                                                    "deserunt",
                                                    "quis",
                                                },
                                                Kind: sdk.String("consequuntur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "ipsa",
                                                    "iure",
                                                    "porro",
                                                    "est",
                                                },
                                            },
                                            Kind: sdk.String("incidunt"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("cupiditate"),
                                                Ids: []string{
                                                    "odit",
                                                    "odit",
                                                },
                                                Kind: sdk.String("sunt"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "numquam",
                                                    "adipisci",
                                                    "tempora",
                                                    "expedita",
                                                },
                                            },
                                            Kind: sdk.String("occaecati"),
                                        },
                                    },
                                    Kind: sdk.String("sit"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptatibus"),
                                                Ids: []string{
                                                    "blanditiis",
                                                    "doloribus",
                                                    "eum",
                                                    "harum",
                                                },
                                                Kind: sdk.String("minus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "deleniti",
                                                    "harum",
                                                },
                                            },
                                            Kind: sdk.String("eaque"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("sit"),
                                                Ids: []string{
                                                    "repudiandae",
                                                    "ab",
                                                },
                                                Kind: sdk.String("corrupti"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "illum",
                                                    "hic",
                                                    "doloremque",
                                                },
                                            },
                                            Kind: sdk.String("autem"),
                                        },
                                    },
                                    Kind: sdk.String("tempore"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dolorum"),
                                                Ids: []string{
                                                    "sapiente",
                                                },
                                                Kind: sdk.String("molestiae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "ea",
                                                    "ullam",
                                                    "corporis",
                                                },
                                            },
                                            Kind: sdk.String("odio"),
                                        },
                                    },
                                    Kind: sdk.String("magni"),
                                },
                            },
                            Kind: sdk.String("explicabo"),
                            Name: sdk.String("Carlos Stoltenberg"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("deleniti"),
                                                Ids: []string{
                                                    "minima",
                                                    "cum",
                                                    "tenetur",
                                                },
                                                Kind: sdk.String("at"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "amet",
                                                },
                                            },
                                            Kind: sdk.String("cum"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("magnam"),
                                                Ids: []string{
                                                    "corporis",
                                                    "suscipit",
                                                    "quasi",
                                                    "doloribus",
                                                },
                                                Kind: sdk.String("quia"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "tempora",
                                                    "iusto",
                                                    "incidunt",
                                                    "consequuntur",
                                                },
                                            },
                                            Kind: sdk.String("unde"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptates"),
                                                Ids: []string{
                                                    "nam",
                                                    "repellat",
                                                    "numquam",
                                                    "maxime",
                                                },
                                                Kind: sdk.String("vero"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "consequuntur",
                                                    "repellat",
                                                    "debitis",
                                                },
                                            },
                                            Kind: sdk.String("inventore"),
                                        },
                                    },
                                    Kind: sdk.String("dolorum"),
                                },
                            },
                            Kind: sdk.String("natus"),
                            Name: sdk.String("Monica Hartmann"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-07-18"),
                    Kind: sdk.String("libero"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumYearToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-01-12"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("cumque"),
                        Name: sdk.String("Estelle Casper"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("molestiae"),
                        Name: sdk.String("Dr. Roberto Koelpin"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("modi"),
                    Etag: sdk.String("sed"),
                    ID: sdk.String("d5b46fe9-8fd5-49ef-a1ec-50411c9b198e"),
                    Kind: sdk.String("ad"),
                    MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                    Value: sdk.String("ipsa"),
                },
                MetricNames: []string{
                    "hic",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("nam"),
                                    Ids: []string{
                                        "eius",
                                        "repellendus",
                                        "cupiditate",
                                        "commodi",
                                    },
                                    Kind: sdk.String("reprehenderit"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "dolores",
                                    },
                                },
                                Kind: sdk.String("soluta"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("rerum"),
                                    Ids: []string{
                                        "porro",
                                    },
                                    Kind: sdk.String("fuga"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "sapiente",
                                        "veritatis",
                                        "unde",
                                    },
                                },
                                Kind: sdk.String("incidunt"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("soluta"),
                                    Ids: []string{
                                        "neque",
                                        "quam",
                                        "nam",
                                        "cupiditate",
                                    },
                                    Kind: sdk.String("consequatur"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "fugiat",
                                        "placeat",
                                        "architecto",
                                    },
                                },
                                Kind: sdk.String("eaque"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("voluptatum"),
                                    Ids: []string{
                                        "neque",
                                        "fugit",
                                    },
                                    Kind: sdk.String("quidem"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "dolorum",
                                        "aperiam",
                                        "laboriosam",
                                        "deserunt",
                                    },
                                },
                                Kind: sdk.String("nisi"),
                            },
                        },
                        Kind: sdk.String("officia"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                },
            },
            PathCriteria: &shared.ReportPathCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("sapiente"),
                        Etag: sdk.String("similique"),
                        ID: sdk.String("46cfc77d-aebb-49a4-b822-497d622654b4"),
                        Kind: sdk.String("eaque"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("culpa"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("neque"),
                        Etag: sdk.String("nemo"),
                        ID: sdk.String("7e14ef9d-e32e-4c4e-b56d-2e8b05f969d9"),
                        Kind: sdk.String("aliquam"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("labore"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("totam"),
                    Kind: sdk.String("unde"),
                    Name: sdk.String("Pat Padberg"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("magnam"),
                                                Ids: []string{
                                                    "facilis",
                                                },
                                                Kind: sdk.String("et"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "nam",
                                                    "totam",
                                                },
                                            },
                                            Kind: sdk.String("nobis"),
                                        },
                                    },
                                    Kind: sdk.String("magnam"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("magnam"),
                                                Ids: []string{
                                                    "blanditiis",
                                                    "delectus",
                                                    "doloremque",
                                                    "nihil",
                                                },
                                                Kind: sdk.String("repellendus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "blanditiis",
                                                    "dicta",
                                                    "veritatis",
                                                },
                                            },
                                            Kind: sdk.String("voluptatibus"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quis"),
                                                Ids: []string{
                                                    "enim",
                                                    "consectetur",
                                                },
                                                Kind: sdk.String("perspiciatis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "nobis",
                                                    "dolorum",
                                                },
                                            },
                                            Kind: sdk.String("dignissimos"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dignissimos"),
                                                Ids: []string{
                                                    "necessitatibus",
                                                    "quam",
                                                    "sunt",
                                                    "sit",
                                                },
                                                Kind: sdk.String("consequatur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "eius",
                                                    "eius",
                                                },
                                            },
                                            Kind: sdk.String("ad"),
                                        },
                                    },
                                    Kind: sdk.String("vel"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("maiores"),
                                                Ids: []string{
                                                    "itaque",
                                                    "cumque",
                                                    "nemo",
                                                },
                                                Kind: sdk.String("deleniti"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "veniam",
                                                    "cumque",
                                                    "ea",
                                                },
                                            },
                                            Kind: sdk.String("tenetur"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ipsa"),
                                                Ids: []string{
                                                    "explicabo",
                                                    "voluptatem",
                                                    "cumque",
                                                },
                                                Kind: sdk.String("ullam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "impedit",
                                                    "accusantium",
                                                    "voluptates",
                                                    "accusamus",
                                                },
                                            },
                                            Kind: sdk.String("quaerat"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("laborum"),
                                                Ids: []string{
                                                    "adipisci",
                                                    "ipsa",
                                                },
                                                Kind: sdk.String("iure"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "a",
                                                },
                                            },
                                            Kind: sdk.String("ab"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ipsum"),
                                                Ids: []string{
                                                    "amet",
                                                    "amet",
                                                    "modi",
                                                },
                                                Kind: sdk.String("eos"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "dignissimos",
                                                    "mollitia",
                                                    "ex",
                                                    "doloremque",
                                                },
                                            },
                                            Kind: sdk.String("eaque"),
                                        },
                                    },
                                    Kind: sdk.String("dolore"),
                                },
                            },
                            Kind: sdk.String("dolore"),
                            Name: sdk.String("Nellie Williamson"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("explicabo"),
                                                Ids: []string{
                                                    "aliquam",
                                                    "eveniet",
                                                    "doloremque",
                                                },
                                                Kind: sdk.String("alias"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "distinctio",
                                                    "dolores",
                                                },
                                            },
                                            Kind: sdk.String("possimus"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("porro"),
                                                Ids: []string{
                                                    "laboriosam",
                                                },
                                                Kind: sdk.String("tempore"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "voluptatum",
                                                    "aliquid",
                                                },
                                            },
                                            Kind: sdk.String("tenetur"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("doloribus"),
                                                Ids: []string{
                                                    "nemo",
                                                    "exercitationem",
                                                },
                                                Kind: sdk.String("architecto"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "qui",
                                                },
                                            },
                                            Kind: sdk.String("similique"),
                                        },
                                    },
                                    Kind: sdk.String("officia"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ipsa"),
                                                Ids: []string{
                                                    "libero",
                                                    "eligendi",
                                                    "impedit",
                                                },
                                                Kind: sdk.String("blanditiis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "accusamus",
                                                    "alias",
                                                    "et",
                                                },
                                            },
                                            Kind: sdk.String("sit"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("soluta"),
                                                Ids: []string{
                                                    "voluptates",
                                                    "modi",
                                                },
                                                Kind: sdk.String("deserunt"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "totam",
                                                    "nam",
                                                    "ratione",
                                                },
                                            },
                                            Kind: sdk.String("dolor"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("accusamus"),
                                                Ids: []string{
                                                    "reprehenderit",
                                                    "repellendus",
                                                },
                                                Kind: sdk.String("dignissimos"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "cupiditate",
                                                },
                                            },
                                            Kind: sdk.String("velit"),
                                        },
                                    },
                                    Kind: sdk.String("officiis"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("inventore"),
                                                Ids: []string{
                                                    "magni",
                                                    "numquam",
                                                },
                                                Kind: sdk.String("architecto"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "repellendus",
                                                },
                                            },
                                            Kind: sdk.String("maxime"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("facere"),
                                                Ids: []string{
                                                    "ea",
                                                    "dolor",
                                                    "eos",
                                                },
                                                Kind: sdk.String("eum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "labore",
                                                    "rerum",
                                                    "praesentium",
                                                },
                                            },
                                            Kind: sdk.String("corporis"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("autem"),
                                                Ids: []string{
                                                    "quos",
                                                    "nisi",
                                                },
                                                Kind: sdk.String("deserunt"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "doloremque",
                                                    "iure",
                                                },
                                            },
                                            Kind: sdk.String("natus"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("atque"),
                                                Ids: []string{
                                                    "quia",
                                                    "ut",
                                                },
                                                Kind: sdk.String("reprehenderit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "quasi",
                                                    "eligendi",
                                                },
                                            },
                                            Kind: sdk.String("laboriosam"),
                                        },
                                    },
                                    Kind: sdk.String("nemo"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("nesciunt"),
                                                Ids: []string{
                                                    "ipsum",
                                                    "ducimus",
                                                    "nisi",
                                                    "velit",
                                                },
                                                Kind: sdk.String("rem"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "ipsum",
                                                    "reprehenderit",
                                                    "eveniet",
                                                },
                                            },
                                            Kind: sdk.String("facilis"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("itaque"),
                                                Ids: []string{
                                                    "eaque",
                                                    "explicabo",
                                                },
                                                Kind: sdk.String("nobis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "laborum",
                                                    "assumenda",
                                                },
                                            },
                                            Kind: sdk.String("officia"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("provident"),
                                                Ids: []string{
                                                    "quaerat",
                                                    "sequi",
                                                    "sit",
                                                },
                                                Kind: sdk.String("vel"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "perspiciatis",
                                                },
                                            },
                                            Kind: sdk.String("quaerat"),
                                        },
                                    },
                                    Kind: sdk.String("magnam"),
                                },
                            },
                            Kind: sdk.String("consectetur"),
                            Name: sdk.String("Sandra Luettgen"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("laboriosam"),
                                                Ids: []string{
                                                    "quasi",
                                                },
                                                Kind: sdk.String("debitis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "sint",
                                                    "illo",
                                                },
                                            },
                                            Kind: sdk.String("ut"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("expedita"),
                                                Ids: []string{
                                                    "nihil",
                                                    "nostrum",
                                                    "laboriosam",
                                                    "dicta",
                                                },
                                                Kind: sdk.String("quos"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "eveniet",
                                                    "adipisci",
                                                },
                                            },
                                            Kind: sdk.String("praesentium"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("eveniet"),
                                                Ids: []string{
                                                    "maxime",
                                                    "maiores",
                                                    "veniam",
                                                    "blanditiis",
                                                },
                                                Kind: sdk.String("labore"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "ullam",
                                                    "impedit",
                                                    "porro",
                                                    "consequatur",
                                                },
                                            },
                                            Kind: sdk.String("blanditiis"),
                                        },
                                    },
                                    Kind: sdk.String("illum"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("in"),
                                                Ids: []string{
                                                    "quasi",
                                                    "provident",
                                                    "natus",
                                                },
                                                Kind: sdk.String("minima"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "itaque",
                                                },
                                            },
                                            Kind: sdk.String("dolores"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("maxime"),
                                                Ids: []string{
                                                    "magni",
                                                    "dolores",
                                                    "impedit",
                                                    "iusto",
                                                },
                                                Kind: sdk.String("numquam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "aliquam",
                                                    "doloribus",
                                                },
                                            },
                                            Kind: sdk.String("adipisci"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("vitae"),
                                                Ids: []string{
                                                    "soluta",
                                                },
                                                Kind: sdk.String("quam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "dolorem",
                                                },
                                            },
                                            Kind: sdk.String("tempore"),
                                        },
                                    },
                                    Kind: sdk.String("accusamus"),
                                },
                            },
                            Kind: sdk.String("repellat"),
                            Name: sdk.String("Marguerite Raynor DDS"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-11-20"),
                    Kind: sdk.String("natus"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousMonth.ToPointer(),
                    StartDate: types.MustDateFromString("2022-08-20"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("repellat"),
                        Name: sdk.String("Jean Moore"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quaerat"),
                        Name: sdk.String("Hugo Herman II"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("doloribus"),
                        Name: sdk.String("Essie Rippin"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("corrupti"),
                    Etag: sdk.String("consectetur"),
                    ID: sdk.String("2701ce86-85a7-45ee-a143-8c6d0089cbc2"),
                    Kind: sdk.String("tempore"),
                    MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                    Value: sdk.String("neque"),
                },
                MetricNames: []string{
                    "illo",
                    "illo",
                    "magni",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("reprehenderit"),
                                    Ids: []string{
                                        "voluptas",
                                        "neque",
                                        "tempora",
                                        "iure",
                                    },
                                    Kind: sdk.String("eligendi"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "deleniti",
                                        "cupiditate",
                                        "ea",
                                    },
                                },
                                Kind: sdk.String("optio"),
                            },
                        },
                        Kind: sdk.String("tempora"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("amet"),
                                    Ids: []string{
                                        "voluptate",
                                        "est",
                                    },
                                    Kind: sdk.String("rem"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "rerum",
                                        "laudantium",
                                        "harum",
                                    },
                                },
                                Kind: sdk.String("voluptas"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("porro"),
                                    Ids: []string{
                                        "mollitia",
                                    },
                                    Kind: sdk.String("pariatur"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "consectetur",
                                        "iste",
                                    },
                                },
                                Kind: sdk.String("sapiente"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("similique"),
                                    Ids: []string{
                                        "facilis",
                                        "consequatur",
                                        "cupiditate",
                                    },
                                    Kind: sdk.String("voluptas"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "vero",
                                    },
                                },
                                Kind: sdk.String("nulla"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("maiores"),
                                    Ids: []string{
                                        "eligendi",
                                    },
                                    Kind: sdk.String("atque"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "debitis",
                                    },
                                },
                                Kind: sdk.String("officia"),
                            },
                        },
                        Kind: sdk.String("molestias"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("cumque"),
                                    Ids: []string{
                                        "rem",
                                        "officia",
                                        "repellendus",
                                    },
                                    Kind: sdk.String("voluptatibus"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "totam",
                                    },
                                },
                                Kind: sdk.String("laudantium"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("fugiat"),
                                    Ids: []string{
                                        "sunt",
                                        "nesciunt",
                                        "odit",
                                    },
                                    Kind: sdk.String("unde"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "explicabo",
                                    },
                                },
                                Kind: sdk.String("dolore"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("similique"),
                                    Ids: []string{
                                        "officia",
                                        "blanditiis",
                                        "laboriosam",
                                        "sunt",
                                    },
                                    Kind: sdk.String("iure"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "veritatis",
                                        "molestiae",
                                        "cum",
                                    },
                                },
                                Kind: sdk.String("similique"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("magnam"),
                                    Ids: []string{
                                        "quibusdam",
                                    },
                                    Kind: sdk.String("amet"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "ducimus",
                                        "molestias",
                                        "illo",
                                    },
                                },
                                Kind: sdk.String("adipisci"),
                            },
                        },
                        Kind: sdk.String("nulla"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                },
            },
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("dolorem"),
                        Etag: sdk.String("facilis"),
                        ID: sdk.String("8d624709-0fd9-487e-a3a2-e01919d3d621"),
                        Kind: sdk.String("molestias"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("ad"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("similique"),
                        Etag: sdk.String("dolore"),
                        ID: sdk.String("52459d3e-0946-4d2e-aef3-eaf784fab9b2"),
                        Kind: sdk.String("debitis"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("cumque"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("eveniet"),
                        Etag: sdk.String("cum"),
                        ID: sdk.String("411c53da-7fcb-499f-a84c-d6f74454883a"),
                        Kind: sdk.String("deserunt"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("quia"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("doloremque"),
                        Etag: sdk.String("sequi"),
                        ID: sdk.String("0c82978d-7780-442e-8d68-09f9e3425ef6"),
                        Kind: sdk.String("dolorem"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("nam"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("aliquam"),
                        Name: sdk.String("Jordan Deckow"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("minus"),
                        Name: sdk.String("Jeffrey Simonis IV"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quidem"),
                        Name: sdk.String("Kristopher Macejkovic"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("maxime"),
                        Name: sdk.String("Roberto Littel"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("porro"),
                        Name: sdk.String("Dr. Ross Moen"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("accusantium"),
                        Name: sdk.String("Valerie Rutherford"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("id"),
                        Name: sdk.String("Ashley Deckow"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("modi"),
                        Etag: sdk.String("doloribus"),
                        ID: sdk.String("19099706-eae1-4e6a-b058-d171e0d1b829"),
                        Kind: sdk.String("accusantium"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("magnam"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-07-02"),
                    Kind: sdk.String("magnam"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast30Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-07-21"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("praesentium"),
                    Etag: sdk.String("pariatur"),
                    ID: sdk.String("05e3709b-38cb-457a-b8bd-387dd5d56b4b"),
                    Kind: sdk.String("ipsa"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("debitis"),
                },
                MetricNames: []string{
                    "cumque",
                    "explicabo",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("consectetur"),
                        Name: sdk.String("Brittany Bins"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("cupiditate"),
                        Name: sdk.String("Violet Blick"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(302650),
                    ImpressionsLookbackWindow: sdk.Int(4565),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(365974),
                    MaximumImpressionInteractions: sdk.Int(102894),
                    MaximumInteractionGap: sdk.Int(118529),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("animi"),
                            Etag: sdk.String("laboriosam"),
                            ID: sdk.String("12bd3fb2-7df3-46fd-bf90-b9b4a3a84f90"),
                            Kind: sdk.String("soluta"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("a"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("maxime"),
                            Etag: sdk.String("tempora"),
                            ID: sdk.String("ec034f16-6b23-419a-88ce-b25569218e6f"),
                            Kind: sdk.String("voluptatem"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("dolorem"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("assumenda"),
                            Etag: sdk.String("sunt"),
                            ID: sdk.String("7110688d-bc20-473b-9a41-4520b2630668"),
                            Kind: sdk.String("facere"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("incidunt"),
                        },
                    },
                    Kind: sdk.String("quo"),
                    MetricNames: []string{
                        "ducimus",
                        "aperiam",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("quae"),
                            Etag: sdk.String("aspernatur"),
                            ID: sdk.String("ee07890b-fb2d-417e-a4c6-5c08d7ab7cf3"),
                            Kind: sdk.String("dolorum"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("aspernatur"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("delectus"),
                            Etag: sdk.String("exercitationem"),
                            ID: sdk.String("e87c1d79-b145-415e-a221-48067e25f46b"),
                            Kind: sdk.String("saepe"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("nesciunt"),
                        },
                    },
                    Kind: sdk.String("vero"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-04-04"),
                    Kind: sdk.String("cum"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast14Days.ToPointer(),
                    StartDate: types.MustDateFromString("2020-07-25"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("harum"),
                        Etag: sdk.String("repellat"),
                        ID: sdk.String("1b692dab-42fc-4e24-a14c-b79e5fca1f4f"),
                        Kind: sdk.String("illum"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("corporis"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("aut"),
                        Etag: sdk.String("minima"),
                        ID: sdk.String("180e5f51-8fff-4b56-8851-cc1a35190ed4"),
                        Kind: sdk.String("perspiciatis"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("vero"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("dolor"),
                        Etag: sdk.String("sunt"),
                        ID: sdk.String("9a998d67-0478-4772-aaf6-5c9d5483eb5e"),
                        Kind: sdk.String("itaque"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("cumque"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("libero"),
                        Name: sdk.String("Kendra Hansen"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "asperiores",
                    "magni",
                },
                ReachByFrequencyMetricNames: []string{
                    "libero",
                    "ut",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(153494),
                ExpirationDate: types.MustDateFromString("2021-07-07"),
                Repeats: sdk.String("ea"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSunday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumMonday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumDayOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2022-08-30"),
                Timezone: sdk.String("nulla"),
            },
            SubAccountID: sdk.String("voluptates"),
            Type: shared.ReportTypeEnumPathToConversion.ToPointer(),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "provident",
        QuotaUser: sdk.String("quo"),
        ReportID: "consectetur",
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.DfareportingReportsUpdateSecurity{
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
