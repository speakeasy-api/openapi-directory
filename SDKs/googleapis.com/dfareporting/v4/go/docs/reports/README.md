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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Report: &shared.Report{
            AccountID: sdk.String("consectetur"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("debitis"),
                            Etag: sdk.String("perspiciatis"),
                            ID: sdk.String("48892782-d34e-40b8-bc0d-59f57b9f9820"),
                            Kind: sdk.String("tempore"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("ipsa"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("iusto"),
                            Etag: sdk.String("deleniti"),
                            ID: sdk.String("08c36c9e-2f70-4344-a00f-478eb539483f"),
                            Kind: sdk.String("reprehenderit"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("blanditiis"),
                        },
                    },
                    Kind: sdk.String("eveniet"),
                    MetricNames: []string{
                        "delectus",
                        "impedit",
                        "quisquam",
                        "distinctio",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("sint"),
                            Etag: sdk.String("repellendus"),
                            ID: sdk.String("541b4b39-3f35-4666-a5be-a32201dec379"),
                            Kind: sdk.String("optio"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("error"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("quas"),
                            Etag: sdk.String("saepe"),
                            ID: sdk.String("a1d48c5c-2f9e-421d-90fd-53776bfc7677"),
                            Kind: sdk.String("voluptatibus"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("doloribus"),
                        },
                    },
                    Kind: sdk.String("nostrum"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-09-27"),
                    Kind: sdk.String("mollitia"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousWeek.ToPointer(),
                    StartDate: types.MustDateFromString("2022-02-05"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("consequuntur"),
                        Etag: sdk.String("totam"),
                        ID: sdk.String("fb6daee1-9c26-4c0c-b618-c6331cabdab7"),
                        Kind: sdk.String("vel"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("est"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("magnam"),
                        Etag: sdk.String("tempora"),
                        ID: sdk.String("4dd0da0a-be58-4eb3-954b-a1cb3ad49b8e"),
                        Kind: sdk.String("corporis"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("quasi"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("totam"),
                        Etag: sdk.String("harum"),
                        ID: sdk.String("25e87f64-8232-455b-a95c-0cbcb2ca8790"),
                        Kind: sdk.String("quos"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("in"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("corrupti"),
                        Name: sdk.String("Mr. Sheryl Nolan"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "itaque",
                    "unde",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("qui"),
                        Name: sdk.String("Bennie Hilll III"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-04-20"),
                    Kind: sdk.String("voluptatem"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousQuarter.ToPointer(),
                    StartDate: types.MustDateFromString("2022-04-18"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumSiteByCampaign.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("cum"),
                        Etag: sdk.String("totam"),
                        ID: sdk.String("af6849d2-b994-4043-a3a0-964c053876e3"),
                        Kind: sdk.String("iste"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("vero"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("tenetur"),
                        Etag: sdk.String("perspiciatis"),
                        ID: sdk.String("c765dfd7-354e-45cb-9497-7017a26204bb"),
                        Kind: sdk.String("explicabo"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("quod"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("laborum"),
                        Etag: sdk.String("eius"),
                        ID: sdk.String("e9998287-9def-4c0b-a396-06cf90ad989e"),
                        Kind: sdk.String("architecto"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("consectetur"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("tempora"),
                        Etag: sdk.String("quam"),
                        ID: sdk.String("15acda04-4faa-4ed6-a13a-620e2e918c75"),
                        Kind: sdk.String("distinctio"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("modi"),
                    },
                },
                MetricNames: []string{
                    "commodi",
                    "minus",
                    "earum",
                },
                OverlapMetricNames: []string{
                    "excepturi",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment.ToPointer(),
                Message: sdk.String("fuga"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Isac.Gibson@gmail.com"),
                        Kind: sdk.String("nihil"),
                    },
                },
            },
            Etag: sdk.String("quibusdam"),
            FileName: sdk.String("nulla"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("nemo"),
                        Etag: sdk.String("minus"),
                        ID: sdk.String("e3044be4-eb3b-431c-b503-c3140d8772c5"),
                        Kind: sdk.String("consectetur"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("itaque"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("illo"),
                        Etag: sdk.String("possimus"),
                        ID: sdk.String("d6bf64b4-54e9-4831-a795-f0e57f54ebf2"),
                        Kind: sdk.String("pariatur"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("tempore"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("dolore"),
                        Etag: sdk.String("laboriosam"),
                        ID: sdk.String("097efa44-a8df-4f40-8dd1-850bf5a0cbc8"),
                        Kind: sdk.String("facilis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("blanditiis"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-12-12"),
                    Kind: sdk.String("similique"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast60Days.ToPointer(),
                    StartDate: types.MustDateFromString("2021-02-11"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("nobis"),
                        Etag: sdk.String("laboriosam"),
                        ID: sdk.String("35132d53-086c-410a-856a-19d4665ba972"),
                        Kind: sdk.String("ipsam"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("molestias"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("reprehenderit"),
                        Etag: sdk.String("corporis"),
                        ID: sdk.String("dc0cecbc-78bd-4248-ac6e-8b240b1c06c9"),
                        Kind: sdk.String("optio"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("commodi"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("omnis"),
                        Name: sdk.String("Jeremy Rau"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("necessitatibus"),
                        Name: sdk.String("Margie Stiedemann"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("autem"),
                    Etag: sdk.String("voluptas"),
                    ID: sdk.String("5c312c7f-550d-4472-9c17-6292dd7878e7"),
                    Kind: sdk.String("dicta"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("delectus"),
                },
                MetricNames: []string{
                    "quo",
                    "dicta",
                    "numquam",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumCsv.ToPointer(),
            ID: sdk.String("quos"),
            Kind: sdk.String("modi"),
            LastModifiedTime: sdk.String("vitae"),
            Name: sdk.String("Stewart Bode"),
            OwnerProfileID: sdk.String("voluptate"),
            PathAttributionCriteria: &shared.ReportPathAttributionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("id"),
                        Etag: sdk.String("illo"),
                        ID: sdk.String("03a9806e-a160-4639-9ef1-7b81758d4ab5"),
                        Kind: sdk.String("expedita"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("totam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("alias"),
                        Etag: sdk.String("nulla"),
                        ID: sdk.String("ea77fd99-31ec-49d1-86cf-f2c26ab840a2"),
                        Kind: sdk.String("totam"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("id"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("aperiam"),
                        Etag: sdk.String("commodi"),
                        ID: sdk.String("72d6b73a-34ca-4434-8db3-149a19f25207"),
                        Kind: sdk.String("blanditiis"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("sunt"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("praesentium"),
                        Etag: sdk.String("mollitia"),
                        ID: sdk.String("4b0daed4-b5cf-4061-aee9-227575bd60da"),
                        Kind: sdk.String("est"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("itaque"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("quae"),
                    Kind: sdk.String("eius"),
                    Name: sdk.String("Miss Irving Streich"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ea"),
                                                Ids: []string{
                                                    "rerum",
                                                },
                                                Kind: sdk.String("quidem"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "qui",
                                                    "amet",
                                                    "natus",
                                                },
                                            },
                                            Kind: sdk.String("alias"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("aperiam"),
                                                Kind: sdk.String("illo"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "odit",
                                                    "laboriosam",
                                                    "deleniti",
                                                    "excepturi",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("unde"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("asperiores"),
                                                Ids: []string{
                                                    "delectus",
                                                    "delectus",
                                                },
                                                Kind: sdk.String("accusamus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "expedita",
                                                    "officiis",
                                                    "impedit",
                                                },
                                            },
                                            Kind: sdk.String("ullam"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("aperiam"),
                                                Kind: sdk.String("nesciunt"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "laborum",
                                                    "voluptatum",
                                                    "vitae",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("eveniet"),
                                                Ids: []string{
                                                    "consequatur",
                                                    "beatae",
                                                    "fugiat",
                                                },
                                                Kind: sdk.String("eos"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "hic",
                                                    "odio",
                                                },
                                            },
                                            Kind: sdk.String("soluta"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("incidunt"),
                                                Kind: sdk.String("nemo"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "quas",
                                                    "ipsam",
                                                    "enim",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("repudiandae"),
                                                Ids: []string{
                                                    "perferendis",
                                                    "rem",
                                                },
                                                Kind: sdk.String("quos"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "id",
                                                    "ratione",
                                                    "magni",
                                                },
                                            },
                                            Kind: sdk.String("vel"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("dolorem"),
                                                Kind: sdk.String("magnam"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "quo",
                                                    "eligendi",
                                                    "quod",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("impedit"),
                                                Ids: []string{
                                                    "nisi",
                                                    "nisi",
                                                    "ratione",
                                                },
                                                Kind: sdk.String("facere"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "deleniti",
                                                    "ad",
                                                    "iste",
                                                },
                                            },
                                            Kind: sdk.String("corporis"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("minus"),
                                                Kind: sdk.String("dicta"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "dolores",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quidem"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("magni"),
                                                Ids: []string{
                                                    "consectetur",
                                                },
                                                Kind: sdk.String("repudiandae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "dolor",
                                                    "vitae",
                                                    "porro",
                                                },
                                            },
                                            Kind: sdk.String("temporibus"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("ea"),
                                                Kind: sdk.String("dolorum"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "repudiandae",
                                                    "odio",
                                                    "incidunt",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("omnis"),
                                                Ids: []string{
                                                    "vel",
                                                },
                                                Kind: sdk.String("expedita"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "quisquam",
                                                    "iure",
                                                },
                                            },
                                            Kind: sdk.String("nesciunt"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("vel"),
                                                Kind: sdk.String("vero"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "repellendus",
                                                    "fugit",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("totam"),
                                                Ids: []string{
                                                    "quaerat",
                                                    "rem",
                                                    "et",
                                                },
                                                Kind: sdk.String("dolore"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "quae",
                                                    "distinctio",
                                                    "rem",
                                                },
                                            },
                                            Kind: sdk.String("tempora"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("veritatis"),
                                                Kind: sdk.String("dicta"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "ea",
                                                    "ut",
                                                    "aut",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("minima"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dignissimos"),
                                                Ids: []string{
                                                    "tempore",
                                                    "dolorem",
                                                },
                                                Kind: sdk.String("aut"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "dicta",
                                                    "sunt",
                                                },
                                            },
                                            Kind: sdk.String("velit"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("fugiat"),
                                                Kind: sdk.String("recusandae"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "ex",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("inventore"),
                                                Ids: []string{
                                                    "corrupti",
                                                },
                                                Kind: sdk.String("sed"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "provident",
                                                },
                                            },
                                            Kind: sdk.String("corporis"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("dolorem"),
                                                Kind: sdk.String("placeat"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "nobis",
                                                    "temporibus",
                                                    "sint",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dolores"),
                                                Ids: []string{
                                                    "dolorum",
                                                    "ad",
                                                },
                                                Kind: sdk.String("soluta"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "exercitationem",
                                                    "vitae",
                                                },
                                            },
                                            Kind: sdk.String("illo"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("soluta"),
                                                Kind: sdk.String("expedita"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "nihil",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("accusantium"),
                                },
                            },
                            Kind: sdk.String("temporibus"),
                            Name: sdk.String("Julio Ledner"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
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
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("minima"),
                                                Kind: sdk.String("rerum"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "veritatis",
                                                    "nam",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("velit"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dolorem"),
                                                Ids: []string{
                                                    "beatae",
                                                    "odio",
                                                },
                                                Kind: sdk.String("dolores"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "modi",
                                                    "minus",
                                                },
                                            },
                                            Kind: sdk.String("non"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("in"),
                                                Kind: sdk.String("odio"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "possimus",
                                                    "labore",
                                                    "consectetur",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("occaecati"),
                                                Ids: []string{
                                                    "impedit",
                                                    "ea",
                                                    "harum",
                                                    "assumenda",
                                                },
                                                Kind: sdk.String("fugit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "illum",
                                                    "alias",
                                                    "aperiam",
                                                },
                                            },
                                            Kind: sdk.String("nisi"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("quibusdam"),
                                                Kind: sdk.String("esse"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "iure",
                                                    "accusamus",
                                                    "soluta",
                                                    "distinctio",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("nam"),
                                                Ids: []string{
                                                    "iste",
                                                    "itaque",
                                                    "provident",
                                                    "odio",
                                                },
                                                Kind: sdk.String("aliquam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "ipsam",
                                                    "quidem",
                                                    "eum",
                                                    "numquam",
                                                },
                                            },
                                            Kind: sdk.String("enim"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("fuga"),
                                                Kind: sdk.String("aliquam"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "quia",
                                                    "asperiores",
                                                    "eligendi",
                                                    "deserunt",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("distinctio"),
                                                Ids: []string{
                                                    "quisquam",
                                                    "nam",
                                                    "quo",
                                                    "fuga",
                                                },
                                                Kind: sdk.String("nesciunt"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "aspernatur",
                                                    "quis",
                                                    "officiis",
                                                },
                                            },
                                            Kind: sdk.String("cum"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("aut"),
                                                Kind: sdk.String("ex"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "maxime",
                                                    "est",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("distinctio"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("fugit"),
                                                Ids: []string{
                                                    "officia",
                                                },
                                                Kind: sdk.String("et"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "quam",
                                                    "iusto",
                                                    "animi",
                                                    "nihil",
                                                },
                                            },
                                            Kind: sdk.String("ipsam"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("quibusdam"),
                                                Kind: sdk.String("totam"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "tempora",
                                                    "quaerat",
                                                    "quis",
                                                    "dolores",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("harum"),
                                                Ids: []string{
                                                    "fugiat",
                                                    "iusto",
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
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("dolores"),
                                                Kind: sdk.String("harum"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "beatae",
                                                    "suscipit",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("porro"),
                                                Ids: []string{
                                                    "iure",
                                                },
                                                Kind: sdk.String("doloribus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "et",
                                                    "voluptate",
                                                    "minima",
                                                },
                                            },
                                            Kind: sdk.String("dignissimos"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("atque"),
                                                Kind: sdk.String("alias"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "incidunt",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("maxime"),
                                                Ids: []string{
                                                    "aperiam",
                                                    "error",
                                                },
                                                Kind: sdk.String("impedit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "magnam",
                                                    "dolorum",
                                                    "temporibus",
                                                },
                                            },
                                            Kind: sdk.String("corrupti"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("eos"),
                                                Kind: sdk.String("exercitationem"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "nulla",
                                                    "eveniet",
                                                    "velit",
                                                    "molestiae",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("molestiae"),
                                },
                            },
                            Kind: sdk.String("dolores"),
                            Name: sdk.String("Dr. Kim Heller"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dolorum"),
                                                Ids: []string{
                                                    "delectus",
                                                    "rem",
                                                },
                                                Kind: sdk.String("placeat"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "iste",
                                                },
                                            },
                                            Kind: sdk.String("veritatis"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("ab"),
                                                Kind: sdk.String("dolorum"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "esse",
                                                    "debitis",
                                                    "distinctio",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("fugiat"),
                                                Ids: []string{
                                                    "commodi",
                                                    "alias",
                                                    "doloremque",
                                                    "perspiciatis",
                                                },
                                                Kind: sdk.String("sapiente"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "temporibus",
                                                },
                                            },
                                            Kind: sdk.String("illum"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("adipisci"),
                                                Kind: sdk.String("atque"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "consectetur",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quo"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
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
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("neque"),
                                                Kind: sdk.String("repellendus"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "quidem",
                                                    "aut",
                                                    "minus",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("numquam"),
                                                Ids: []string{
                                                    "fuga",
                                                    "eaque",
                                                },
                                                Kind: sdk.String("iste"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "fugit",
                                                    "recusandae",
                                                    "provident",
                                                    "quod",
                                                },
                                            },
                                            Kind: sdk.String("explicabo"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("qui"),
                                                Kind: sdk.String("aut"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "delectus",
                                                    "saepe",
                                                    "odio",
                                                    "laboriosam",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("veniam"),
                                                Ids: []string{
                                                    "delectus",
                                                    "a",
                                                    "rerum",
                                                },
                                                Kind: sdk.String("eligendi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "commodi",
                                                    "aperiam",
                                                    "quasi",
                                                },
                                            },
                                            Kind: sdk.String("ad"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("maiores"),
                                                Kind: sdk.String("magni"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "est",
                                                    "fuga",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("eaque"),
                                                Ids: []string{
                                                    "aut",
                                                    "esse",
                                                },
                                                Kind: sdk.String("consequatur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "dolorum",
                                                    "quam",
                                                    "amet",
                                                    "unde",
                                                },
                                            },
                                            Kind: sdk.String("corrupti"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("odit"),
                                                Kind: sdk.String("modi"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "totam",
                                                    "esse",
                                                    "sed",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("beatae"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("hic"),
                                                Ids: []string{
                                                    "illum",
                                                    "sint",
                                                    "commodi",
                                                    "qui",
                                                },
                                                Kind: sdk.String("possimus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "debitis",
                                                },
                                            },
                                            Kind: sdk.String("itaque"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("recusandae"),
                                                Kind: sdk.String("dignissimos"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "molestias",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("nostrum"),
                                                Ids: []string{
                                                    "in",
                                                    "natus",
                                                    "in",
                                                    "consequatur",
                                                },
                                                Kind: sdk.String("officiis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "beatae",
                                                    "culpa",
                                                    "quos",
                                                },
                                            },
                                            Kind: sdk.String("temporibus"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("quidem"),
                                                Kind: sdk.String("impedit"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "saepe",
                                                    "et",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("perspiciatis"),
                                },
                            },
                            Kind: sdk.String("cum"),
                            Name: sdk.String("Kevin Bernhard"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("modi"),
                                                Ids: []string{
                                                    "explicabo",
                                                    "dolor",
                                                    "dicta",
                                                    "quidem",
                                                },
                                                Kind: sdk.String("deserunt"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "dignissimos",
                                                    "in",
                                                },
                                            },
                                            Kind: sdk.String("sed"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("iusto"),
                                                Kind: sdk.String("quibusdam"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "ullam",
                                                    "voluptatibus",
                                                    "esse",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("odit"),
                                                Ids: []string{
                                                    "fugiat",
                                                    "fuga",
                                                    "tempore",
                                                },
                                                Kind: sdk.String("hic"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "perferendis",
                                                    "eaque",
                                                    "tempore",
                                                },
                                            },
                                            Kind: sdk.String("eaque"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("quasi"),
                                                Kind: sdk.String("tempore"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "quod",
                                                    "aperiam",
                                                    "ipsum",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("sunt"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("fugit"),
                                                Ids: []string{
                                                    "illo",
                                                    "omnis",
                                                    "quibusdam",
                                                    "tempore",
                                                },
                                                Kind: sdk.String("asperiores"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "et",
                                                },
                                            },
                                            Kind: sdk.String("architecto"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("culpa"),
                                                Kind: sdk.String("molestias"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "maiores",
                                                    "quia",
                                                    "quae",
                                                    "ullam",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("consequuntur"),
                                                Ids: []string{
                                                    "necessitatibus",
                                                },
                                                Kind: sdk.String("consectetur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "sequi",
                                                },
                                            },
                                            Kind: sdk.String("autem"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("quaerat"),
                                                Kind: sdk.String("aspernatur"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "culpa",
                                                    "laboriosam",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("repudiandae"),
                                                Ids: []string{
                                                    "excepturi",
                                                    "suscipit",
                                                },
                                                Kind: sdk.String("officia"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "dicta",
                                                    "facilis",
                                                },
                                            },
                                            Kind: sdk.String("cupiditate"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("voluptates"),
                                                Kind: sdk.String("odit"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "ipsum",
                                                    "est",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("earum"),
                                                Ids: []string{
                                                    "maxime",
                                                    "nesciunt",
                                                    "ab",
                                                },
                                                Kind: sdk.String("ullam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "nemo",
                                                },
                                            },
                                            Kind: sdk.String("expedita"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("ad"),
                                                Kind: sdk.String("eveniet"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "dolores",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("iste"),
                                },
                            },
                            Kind: sdk.String("ut"),
                            Name: sdk.String("Jane Hintz"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-10-04"),
                    Kind: sdk.String("dolor"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousYear.ToPointer(),
                    StartDate: types.MustDateFromString("2021-01-09"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("itaque"),
                        Name: sdk.String("Eula Spencer"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("error"),
                        Name: sdk.String("Juan Purdy"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("reprehenderit"),
                        Name: sdk.String("Angela Beier"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("esse"),
                        Name: sdk.String("Wendell O'Keefe"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("praesentium"),
                    Etag: sdk.String("vero"),
                    ID: sdk.String("b129dc52-4abb-47b1-8caf-244de103d083"),
                    Kind: sdk.String("voluptatem"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("eligendi"),
                },
                MetricNames: []string{
                    "nulla",
                    "doloremque",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("minus"),
                                    Ids: []string{
                                        "eveniet",
                                        "adipisci",
                                    },
                                    Kind: sdk.String("excepturi"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "corporis",
                                        "commodi",
                                        "sunt",
                                        "placeat",
                                    },
                                },
                                Kind: sdk.String("quis"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("porro"),
                                    Kind: sdk.String("impedit"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "ea",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("dolor"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("dolorem"),
                                    Ids: []string{
                                        "incidunt",
                                    },
                                    Kind: sdk.String("illum"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "minima",
                                        "quas",
                                        "nam",
                                        "praesentium",
                                    },
                                },
                                Kind: sdk.String("error"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("alias"),
                                    Kind: sdk.String("ullam"),
                                    Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                    Values: []string{
                                        "officiis",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("ad"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                    },
                },
            },
            PathCriteria: &shared.ReportPathCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("minima"),
                        Etag: sdk.String("deserunt"),
                        ID: sdk.String("10fd8ac0-f482-4f9e-9a53-c304dae122f0"),
                        Kind: sdk.String("tempore"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("debitis"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quo"),
                        Etag: sdk.String("minus"),
                        ID: sdk.String("41932d70-4b3a-4e70-934d-9ebb6a28f6f7"),
                        Kind: sdk.String("ab"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("ipsa"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("laboriosam"),
                    Kind: sdk.String("nemo"),
                    Name: sdk.String("Lana Tillman"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("tempore"),
                                                Ids: []string{
                                                    "eaque",
                                                },
                                                Kind: sdk.String("fuga"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "aliquam",
                                                },
                                            },
                                            Kind: sdk.String("culpa"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("id"),
                                                Kind: sdk.String("fugit"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "nulla",
                                                    "iure",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dolore"),
                                                Ids: []string{
                                                    "quae",
                                                    "quas",
                                                    "officia",
                                                    "eos",
                                                },
                                                Kind: sdk.String("accusamus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "officia",
                                                },
                                            },
                                            Kind: sdk.String("laudantium"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("perferendis"),
                                                Kind: sdk.String("reprehenderit"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "et",
                                                    "deserunt",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("non"),
                                                Ids: []string{
                                                    "incidunt",
                                                    "soluta",
                                                },
                                                Kind: sdk.String("dolorum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "commodi",
                                                    "at",
                                                    "esse",
                                                },
                                            },
                                            Kind: sdk.String("facere"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("pariatur"),
                                                Kind: sdk.String("quisquam"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "sint",
                                                    "beatae",
                                                    "nihil",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("harum"),
                                                Ids: []string{
                                                    "aliquam",
                                                    "non",
                                                    "porro",
                                                },
                                                Kind: sdk.String("rem"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "aspernatur",
                                                },
                                            },
                                            Kind: sdk.String("officia"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("omnis"),
                                                Kind: sdk.String("omnis"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "eos",
                                                    "maiores",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("dolore"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("modi"),
                                                Ids: []string{
                                                    "porro",
                                                    "est",
                                                },
                                                Kind: sdk.String("sed"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "odit",
                                                    "voluptas",
                                                },
                                            },
                                            Kind: sdk.String("autem"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("impedit"),
                                                Kind: sdk.String("facere"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "non",
                                                    "quos",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("inventore"),
                                                Ids: []string{
                                                    "odio",
                                                },
                                                Kind: sdk.String("odit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "fuga",
                                                    "aut",
                                                    "adipisci",
                                                },
                                            },
                                            Kind: sdk.String("earum"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("deleniti"),
                                                Kind: sdk.String("amet"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "necessitatibus",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("veritatis"),
                                                Ids: []string{
                                                    "quam",
                                                    "est",
                                                    "quidem",
                                                    "dolorem",
                                                },
                                                Kind: sdk.String("earum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "nobis",
                                                    "ipsa",
                                                },
                                            },
                                            Kind: sdk.String("corporis"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("officiis"),
                                                Kind: sdk.String("dicta"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "facilis",
                                                    "deleniti",
                                                    "rem",
                                                    "tenetur",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("minima"),
                                },
                            },
                            Kind: sdk.String("occaecati"),
                            Name: sdk.String("Lorene Metz"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-05-27"),
                    Kind: sdk.String("delectus"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast7Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-05-27"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("consequuntur"),
                        Name: sdk.String("Javier Satterfield"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("nihil"),
                    Etag: sdk.String("distinctio"),
                    ID: sdk.String("6545000a-5b36-4a22-ae3f-f770a2b42e5e"),
                    Kind: sdk.String("fugiat"),
                    MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                    Value: sdk.String("ea"),
                },
                MetricNames: []string{
                    "error",
                    "dolores",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("quam"),
                                    Ids: []string{
                                        "optio",
                                        "aliquid",
                                    },
                                    Kind: sdk.String("laborum"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "quae",
                                    },
                                },
                                Kind: sdk.String("saepe"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("minima"),
                                    Kind: sdk.String("numquam"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "iusto",
                                        "accusamus",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("cumque"),
                                    Ids: []string{
                                        "laborum",
                                        "mollitia",
                                    },
                                    Kind: sdk.String("hic"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "assumenda",
                                        "quas",
                                        "adipisci",
                                    },
                                },
                                Kind: sdk.String("quia"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("molestiae"),
                                    Kind: sdk.String("repudiandae"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "esse",
                                        "quibusdam",
                                        "non",
                                        "quasi",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("nisi"),
                                    Ids: []string{
                                        "incidunt",
                                    },
                                    Kind: sdk.String("nemo"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "vero",
                                        "assumenda",
                                        "praesentium",
                                    },
                                },
                                Kind: sdk.String("eos"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("ratione"),
                                    Kind: sdk.String("error"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "optio",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("vitae"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("excepturi"),
                                    Ids: []string{
                                        "deleniti",
                                        "similique",
                                        "sit",
                                        "fuga",
                                    },
                                    Kind: sdk.String("dolore"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "modi",
                                        "suscipit",
                                    },
                                },
                                Kind: sdk.String("itaque"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("minus"),
                                    Kind: sdk.String("ea"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "voluptates",
                                        "illo",
                                        "rem",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("ab"),
                                    Ids: []string{
                                        "eligendi",
                                        "fugiat",
                                    },
                                    Kind: sdk.String("itaque"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "recusandae",
                                        "necessitatibus",
                                        "totam",
                                    },
                                },
                                Kind: sdk.String("impedit"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("reprehenderit"),
                                    Kind: sdk.String("explicabo"),
                                    Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                    Values: []string{
                                        "consectetur",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("hic"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("minima"),
                                    Ids: []string{
                                        "eaque",
                                        "consectetur",
                                        "consectetur",
                                    },
                                    Kind: sdk.String("laudantium"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "inventore",
                                        "distinctio",
                                    },
                                },
                                Kind: sdk.String("neque"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("possimus"),
                                    Kind: sdk.String("magni"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "neque",
                                        "facilis",
                                        "iure",
                                        "amet",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("voluptas"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                },
            },
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("dignissimos"),
                        Etag: sdk.String("adipisci"),
                        ID: sdk.String("088e75ab-7ff2-4a12-bb07-4cd44c23c0b1"),
                        Kind: sdk.String("beatae"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("blanditiis"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("debitis"),
                        Name: sdk.String("Chester Lindgren"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("amet"),
                        Name: sdk.String("Elbert Schuster"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("harum"),
                        Name: sdk.String("Ray Hessel"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("tempora"),
                        Name: sdk.String("Toby Glover DDS"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("expedita"),
                        Etag: sdk.String("error"),
                        ID: sdk.String("1c79e962-de32-4387-9a4a-2e87d87b51e2"),
                        Kind: sdk.String("aspernatur"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("iusto"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("molestiae"),
                        Etag: sdk.String("optio"),
                        ID: sdk.String("0e6e11c8-8332-46dc-9b10-3067a899e25c"),
                        Kind: sdk.String("aliquid"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("ut"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quisquam"),
                        Etag: sdk.String("dicta"),
                        ID: sdk.String("4ff18749-7b14-4081-a31a-1660070c0bcd"),
                        Kind: sdk.String("officiis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("saepe"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("ad"),
                        Etag: sdk.String("consequatur"),
                        ID: sdk.String("ea441101-c138-4b46-a923-d50f751b287a"),
                        Kind: sdk.String("neque"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("culpa"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-03-30"),
                    Kind: sdk.String("eligendi"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast365Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-05-05"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("possimus"),
                    Etag: sdk.String("voluptatibus"),
                    ID: sdk.String("85271a06-5390-424b-909d-0fc60dff8fe0"),
                    Kind: sdk.String("officiis"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("officiis"),
                },
                MetricNames: []string{
                    "voluptas",
                    "delectus",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("fugit"),
                        Name: sdk.String("Alyssa Collier"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(568590),
                    ImpressionsLookbackWindow: sdk.Int(837187),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(248582),
                    MaximumImpressionInteractions: sdk.Int(566532),
                    MaximumInteractionGap: sdk.Int(819983),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("esse"),
                            Etag: sdk.String("omnis"),
                            ID: sdk.String("0e2e6014-a33d-4970-b2b5-31bfb30eda3f"),
                            Kind: sdk.String("rem"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("veniam"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("vero"),
                            Etag: sdk.String("dolor"),
                            ID: sdk.String("92f22a77-cb7a-4f1b-a3ec-de080fb80c05"),
                            Kind: sdk.String("voluptas"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("autem"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("porro"),
                            Etag: sdk.String("corporis"),
                            ID: sdk.String("3d415995-5c5c-4717-a045-97f37719dd8c"),
                            Kind: sdk.String("corrupti"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("quos"),
                        },
                    },
                    Kind: sdk.String("explicabo"),
                    MetricNames: []string{
                        "alias",
                        "fugit",
                        "aliquid",
                        "minima",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("sint"),
                            Etag: sdk.String("consequuntur"),
                            ID: sdk.String("c4c8c9f8-a0ac-41e0-8d2a-ceb0cde00e8e"),
                            Kind: sdk.String("quisquam"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("blanditiis"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("inventore"),
                            Etag: sdk.String("quos"),
                            ID: sdk.String("a9303e93-f00a-418b-a1f0-6d4d17852d28"),
                            Kind: sdk.String("libero"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("ab"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("at"),
                            Etag: sdk.String("expedita"),
                            ID: sdk.String("01d6919f-8315-493a-84ea-7db15c4c15fe"),
                            Kind: sdk.String("voluptas"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("at"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("perferendis"),
                            Etag: sdk.String("natus"),
                            ID: sdk.String("7a675597-ecbe-4b79-82ba-f9a7da6c29b9"),
                            Kind: sdk.String("velit"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("officiis"),
                        },
                    },
                    Kind: sdk.String("exercitationem"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-05-16"),
                    Kind: sdk.String("molestiae"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast14Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-02-13"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("eum"),
                        Etag: sdk.String("reiciendis"),
                        ID: sdk.String("7ff04fda-0466-49ea-a818-2403655aa923"),
                        Kind: sdk.String("quod"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("occaecati"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("occaecati"),
                        Etag: sdk.String("vitae"),
                        ID: sdk.String("9ebd1cf7-7953-48cb-bfcd-f4ece96ac4fb"),
                        Kind: sdk.String("modi"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("cumque"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("dolor"),
                        Etag: sdk.String("velit"),
                        ID: sdk.String("049617cb-71dd-4c25-8b60-c751d2aebe8b"),
                        Kind: sdk.String("provident"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("consequuntur"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("molestias"),
                        Etag: sdk.String("officiis"),
                        ID: sdk.String("26471a5e-cb87-4f79-8f04-f41446f793d3"),
                        Kind: sdk.String("quidem"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("aperiam"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("sed"),
                        Name: sdk.String("Cheryl Grady"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "distinctio",
                },
                ReachByFrequencyMetricNames: []string{
                    "neque",
                    "quasi",
                    "commodi",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(62313),
                ExpirationDate: types.MustDateFromString("2022-07-15"),
                Repeats: sdk.String("debitis"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSaturday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumWeekOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2021-11-03"),
                Timezone: sdk.String("commodi"),
            },
            SubAccountID: sdk.String("perferendis"),
            Type: shared.ReportTypeEnumFloodlight.ToPointer(),
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("ducimus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "est",
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("esse"),
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
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quas",
        QuotaUser: sdk.String("hic"),
        ReportID: "ut",
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("nobis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("ex"),
        FileID: "optio",
        Key: sdk.String("a"),
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "qui",
        QuotaUser: sdk.String("dolores"),
        ReportID: "exercitationem",
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("corporis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("corrupti"),
        MaxResults: sdk.Int64(40319),
        OauthToken: sdk.String("non"),
        PageToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "beatae",
        QuotaUser: sdk.String("aspernatur"),
        ReportID: "doloribus",
        SortField: operations.DfareportingReportsFilesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingReportsFilesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("unde"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "odit",
        QuotaUser: sdk.String("nobis"),
        ReportID: "occaecati",
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("ipsum"),
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
            AccountID: sdk.String("placeat"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("aliquam"),
                            Etag: sdk.String("quod"),
                            ID: sdk.String("3d3ca491-8379-4788-8d15-6f01ae36bb8d"),
                            Kind: sdk.String("eaque"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("odit"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("praesentium"),
                            Etag: sdk.String("eveniet"),
                            ID: sdk.String("3e1dc905-9f7e-4f0f-9385-b67c24673ac9"),
                            Kind: sdk.String("atque"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("ea"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("repellendus"),
                            Etag: sdk.String("odit"),
                            ID: sdk.String("68f92a6b-b086-4152-a25b-05728e7a201e"),
                            Kind: sdk.String("optio"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("nobis"),
                        },
                    },
                    Kind: sdk.String("voluptate"),
                    MetricNames: []string{
                        "doloribus",
                        "dolorum",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("hic"),
                            Etag: sdk.String("minima"),
                            ID: sdk.String("de4f2b0a-857b-4cec-81ff-34b519003b23"),
                            Kind: sdk.String("incidunt"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("blanditiis"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("velit"),
                            Etag: sdk.String("porro"),
                            ID: sdk.String("6c36a56b-3ad5-4bf7-940d-46d7039d489a"),
                            Kind: sdk.String("hic"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("voluptatem"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("perferendis"),
                            Etag: sdk.String("ipsam"),
                            ID: sdk.String("460b05f0-1e7b-4d86-8396-8dd0d773a07c"),
                            Kind: sdk.String("sequi"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("odio"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("commodi"),
                            Etag: sdk.String("placeat"),
                            ID: sdk.String("862de969-2f9e-4a86-803a-c3f23dc8373c"),
                            Kind: sdk.String("dicta"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("iure"),
                        },
                    },
                    Kind: sdk.String("iste"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-03-10"),
                    Kind: sdk.String("dolore"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast14Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-06-08"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("saepe"),
                        Etag: sdk.String("voluptatibus"),
                        ID: sdk.String("ebc18aaa-3deb-4d0c-9003-5e4c1d0624de"),
                        Kind: sdk.String("non"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("nesciunt"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("sapiente"),
                        Name: sdk.String("Jean Tillman"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("repellendus"),
                        Name: sdk.String("Clinton Bernhard"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "incidunt",
                    "laboriosam",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("sint"),
                        Name: sdk.String("Tracy McCullough"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("natus"),
                        Name: sdk.String("Carmen Rohan"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("autem"),
                        Name: sdk.String("Paul Turner Jr."),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-07-11"),
                    Kind: sdk.String("modi"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumWeekToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2021-04-21"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumSiteByCampaign.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("inventore"),
                        Etag: sdk.String("aperiam"),
                        ID: sdk.String("891ef7b3-1a84-4fed-bbce-0fba2734d313"),
                        Kind: sdk.String("dolore"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("ipsam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("eum"),
                        Etag: sdk.String("eveniet"),
                        ID: sdk.String("e2a90304-a708-4e21-909b-67335519b00c"),
                        Kind: sdk.String("veniam"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("recusandae"),
                    },
                },
                MetricNames: []string{
                    "ratione",
                    "deserunt",
                },
                OverlapMetricNames: []string{
                    "accusamus",
                    "sed",
                    "autem",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment.ToPointer(),
                Message: sdk.String("autem"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Valentina_Rolfson@gmail.com"),
                        Kind: sdk.String("dolore"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Bria18@yahoo.com"),
                        Kind: sdk.String("similique"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Kade90@hotmail.com"),
                        Kind: sdk.String("voluptas"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Tavares82@yahoo.com"),
                        Kind: sdk.String("hic"),
                    },
                },
            },
            Etag: sdk.String("maiores"),
            FileName: sdk.String("odit"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("corporis"),
                        Etag: sdk.String("dolor"),
                        ID: sdk.String("545dbfd6-9d85-44ee-8956-d861c1fe03a4"),
                        Kind: sdk.String("amet"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("beatae"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-08-29"),
                    Kind: sdk.String("quas"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousMonth.ToPointer(),
                    StartDate: types.MustDateFromString("2022-10-01"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("veniam"),
                        Etag: sdk.String("magni"),
                        ID: sdk.String("47563f82-499f-441b-b9dd-5f9a10583aa8"),
                        Kind: sdk.String("ipsa"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("iusto"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quae"),
                        Etag: sdk.String("quos"),
                        ID: sdk.String("6e9e8089-6668-49a7-8cc4-e0edcd8270b6"),
                        Kind: sdk.String("impedit"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("aut"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("accusantium"),
                        Name: sdk.String("Minnie Daugherty"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("esse"),
                    Etag: sdk.String("fugit"),
                    ID: sdk.String("1e4eb4dd-4c7f-422c-a20a-aaa3e6312683"),
                    Kind: sdk.String("a"),
                    MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                    Value: sdk.String("incidunt"),
                },
                MetricNames: []string{
                    "minus",
                    "sequi",
                    "ad",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumExcel.ToPointer(),
            ID: sdk.String("numquam"),
            Kind: sdk.String("sint"),
            LastModifiedTime: sdk.String("fuga"),
            Name: sdk.String("Miss Myron Toy"),
            OwnerProfileID: sdk.String("nesciunt"),
            PathAttributionCriteria: &shared.ReportPathAttributionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("a"),
                        Etag: sdk.String("laboriosam"),
                        ID: sdk.String("dc85a8b6-d737-472a-8f42-8241d1ddf05c"),
                        Kind: sdk.String("officiis"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("nulla"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("adipisci"),
                        Etag: sdk.String("sint"),
                        ID: sdk.String("92dbefed-1110-477a-aeb0-f5aeeccd831a"),
                        Kind: sdk.String("explicabo"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("facere"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("deserunt"),
                        Etag: sdk.String("ipsam"),
                        ID: sdk.String("5964ee5e-bf7e-4698-97f0-51aa7c59e69b"),
                        Kind: sdk.String("quam"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("eaque"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("vero"),
                    Kind: sdk.String("quia"),
                    Name: sdk.String("Penny Donnelly"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptatum"),
                                                Ids: []string{
                                                    "nobis",
                                                    "repudiandae",
                                                    "illo",
                                                    "nemo",
                                                },
                                                Kind: sdk.String("laboriosam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "reiciendis",
                                                    "cum",
                                                    "voluptatum",
                                                },
                                            },
                                            Kind: sdk.String("voluptas"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("officiis"),
                                                Kind: sdk.String("voluptatem"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "et",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("alias"),
                                                Ids: []string{
                                                    "ipsa",
                                                    "commodi",
                                                    "facilis",
                                                    "reprehenderit",
                                                },
                                                Kind: sdk.String("ea"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "ea",
                                                    "voluptas",
                                                    "sint",
                                                },
                                            },
                                            Kind: sdk.String("animi"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("cum"),
                                                Kind: sdk.String("repudiandae"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "tempora",
                                                    "eos",
                                                    "cum",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("possimus"),
                                                Ids: []string{
                                                    "dolor",
                                                    "nesciunt",
                                                    "aut",
                                                    "quaerat",
                                                },
                                                Kind: sdk.String("quis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "laboriosam",
                                                    "minima",
                                                    "saepe",
                                                },
                                            },
                                            Kind: sdk.String("asperiores"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("ex"),
                                                Kind: sdk.String("praesentium"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "ipsa",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quaerat"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quaerat"),
                                                Ids: []string{
                                                    "corrupti",
                                                    "doloribus",
                                                    "veritatis",
                                                    "occaecati",
                                                },
                                                Kind: sdk.String("tenetur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "temporibus",
                                                    "sapiente",
                                                },
                                            },
                                            Kind: sdk.String("tempore"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("hic"),
                                                Kind: sdk.String("sit"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "dolore",
                                                    "distinctio",
                                                    "culpa",
                                                    "quasi",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("laboriosam"),
                                                Ids: []string{
                                                    "veniam",
                                                    "corrupti",
                                                    "mollitia",
                                                },
                                                Kind: sdk.String("debitis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "nesciunt",
                                                    "quas",
                                                },
                                            },
                                            Kind: sdk.String("magnam"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("quos"),
                                                Kind: sdk.String("perspiciatis"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "fugiat",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("et"),
                                                Ids: []string{
                                                    "voluptatum",
                                                    "voluptates",
                                                    "omnis",
                                                    "sequi",
                                                },
                                                Kind: sdk.String("eius"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "enim",
                                                    "ab",
                                                    "aut",
                                                    "expedita",
                                                },
                                            },
                                            Kind: sdk.String("deleniti"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("aliquid"),
                                                Kind: sdk.String("quasi"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "molestiae",
                                                    "cum",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("maiores"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("minus"),
                                                Ids: []string{
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
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("corrupti"),
                                                Kind: sdk.String("voluptatum"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "consectetur",
                                                    "amet",
                                                    "temporibus",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("nostrum"),
                                                Ids: []string{
                                                    "eius",
                                                    "fugiat",
                                                    "assumenda",
                                                    "iusto",
                                                },
                                                Kind: sdk.String("ipsam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "esse",
                                                    "tenetur",
                                                    "non",
                                                    "iure",
                                                },
                                            },
                                            Kind: sdk.String("consequatur"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("repellendus"),
                                                Kind: sdk.String("repudiandae"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "aliquam",
                                                    "porro",
                                                    "similique",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("illo"),
                                                Ids: []string{
                                                    "accusamus",
                                                    "laboriosam",
                                                    "fugit",
                                                    "molestias",
                                                },
                                                Kind: sdk.String("quibusdam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "doloribus",
                                                    "cum",
                                                    "dignissimos",
                                                    "harum",
                                                },
                                            },
                                            Kind: sdk.String("reprehenderit"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("nesciunt"),
                                                Kind: sdk.String("voluptatum"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "beatae",
                                                    "quo",
                                                    "nulla",
                                                },
                                            },
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
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("odio"),
                                                Kind: sdk.String("quibusdam"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "temporibus",
                                                    "nam",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("perspiciatis"),
                                },
                            },
                            Kind: sdk.String("totam"),
                            Name: sdk.String("Elsie Johnston"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("consequuntur"),
                                                Ids: []string{
                                                    "aliquam",
                                                    "doloribus",
                                                },
                                                Kind: sdk.String("iure"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "quam",
                                                    "fugit",
                                                    "commodi",
                                                },
                                            },
                                            Kind: sdk.String("id"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("occaecati"),
                                                Kind: sdk.String("aspernatur"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "suscipit",
                                                    "voluptates",
                                                    "maiores",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dolor"),
                                                Ids: []string{
                                                    "ad",
                                                    "quo",
                                                },
                                                Kind: sdk.String("neque"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "consectetur",
                                                },
                                            },
                                            Kind: sdk.String("incidunt"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("tenetur"),
                                                Kind: sdk.String("blanditiis"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "odit",
                                                    "assumenda",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("officiis"),
                                                Ids: []string{
                                                    "sequi",
                                                },
                                                Kind: sdk.String("perspiciatis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "itaque",
                                                },
                                            },
                                            Kind: sdk.String("omnis"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("molestias"),
                                                Kind: sdk.String("fugiat"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "modi",
                                                    "molestiae",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dolorum"),
                                                Ids: []string{
                                                    "soluta",
                                                    "laboriosam",
                                                    "provident",
                                                    "omnis",
                                                },
                                                Kind: sdk.String("ut"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "minus",
                                                },
                                            },
                                            Kind: sdk.String("animi"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("ea"),
                                                Kind: sdk.String("amet"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "deleniti",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("explicabo"),
                                },
                            },
                            Kind: sdk.String("veritatis"),
                            Name: sdk.String("Lloyd Rath"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-06-23"),
                    Kind: sdk.String("repellendus"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast7Days.ToPointer(),
                    StartDate: types.MustDateFromString("2020-03-30"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("dolor"),
                        Name: sdk.String("Colleen Hilll"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("delectus"),
                        Name: sdk.String("Ernesto Kirlin"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("unde"),
                        Name: sdk.String("Sheila Hermiston"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("numquam"),
                        Name: sdk.String("Melvin Jakubowski"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("pariatur"),
                    Etag: sdk.String("iure"),
                    ID: sdk.String("1f242008-d1e4-4197-b662-ed0d6ba294a3"),
                    Kind: sdk.String("aperiam"),
                    MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                    Value: sdk.String("non"),
                },
                MetricNames: []string{
                    "accusantium",
                    "sed",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("autem"),
                                    Ids: []string{
                                        "cupiditate",
                                        "voluptatibus",
                                    },
                                    Kind: sdk.String("nihil"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "eveniet",
                                        "aspernatur",
                                        "ipsa",
                                        "atque",
                                    },
                                },
                                Kind: sdk.String("laborum"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("iure"),
                                    Kind: sdk.String("exercitationem"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "veritatis",
                                        "dolor",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("corrupti"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("quaerat"),
                                    Ids: []string{
                                        "expedita",
                                        "consectetur",
                                        "at",
                                    },
                                    Kind: sdk.String("ipsum"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "facere",
                                        "debitis",
                                        "aut",
                                        "temporibus",
                                    },
                                },
                                Kind: sdk.String("quisquam"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("eaque"),
                                    Kind: sdk.String("rem"),
                                    Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                    Values: []string{
                                        "suscipit",
                                        "dolor",
                                        "quasi",
                                        "voluptas",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("reprehenderit"),
                                    Ids: []string{
                                        "nihil",
                                        "illum",
                                        "ea",
                                    },
                                    Kind: sdk.String("iusto"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "odio",
                                        "corrupti",
                                        "nobis",
                                        "asperiores",
                                    },
                                },
                                Kind: sdk.String("nam"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("saepe"),
                                    Kind: sdk.String("amet"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "a",
                                        "eaque",
                                        "cumque",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("ducimus"),
                                    Ids: []string{
                                        "dicta",
                                        "asperiores",
                                        "alias",
                                    },
                                    Kind: sdk.String("quidem"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "delectus",
                                    },
                                },
                                Kind: sdk.String("vitae"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("fuga"),
                                    Kind: sdk.String("eius"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "expedita",
                                        "quos",
                                        "quas",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("aliquid"),
                                    Ids: []string{
                                        "optio",
                                        "dicta",
                                        "sit",
                                    },
                                    Kind: sdk.String("nihil"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "nobis",
                                        "suscipit",
                                        "eos",
                                        "a",
                                    },
                                },
                                Kind: sdk.String("laboriosam"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("perspiciatis"),
                                    Kind: sdk.String("accusantium"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "excepturi",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("repellat"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("eius"),
                                    Ids: []string{
                                        "occaecati",
                                        "sequi",
                                    },
                                    Kind: sdk.String("assumenda"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "facilis",
                                    },
                                },
                                Kind: sdk.String("corrupti"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("alias"),
                                    Kind: sdk.String("exercitationem"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "vitae",
                                        "cumque",
                                        "tenetur",
                                        "doloremque",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("veniam"),
                                    Ids: []string{
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
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("nihil"),
                                    Kind: sdk.String("recusandae"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "quis",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("pariatur"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                },
            },
            PathCriteria: &shared.ReportPathCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("eligendi"),
                        Etag: sdk.String("recusandae"),
                        ID: sdk.String("5d774140-cd07-40aa-a04a-e20749c3d9f1"),
                        Kind: sdk.String("aliquam"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("porro"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("omnis"),
                        Etag: sdk.String("doloribus"),
                        ID: sdk.String("08f4107c-2206-4849-a3ea-6ceec8485758"),
                        Kind: sdk.String("omnis"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("laborum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("occaecati"),
                        Etag: sdk.String("reiciendis"),
                        ID: sdk.String("aef940e8-d668-4c08-b101-4414875663ca"),
                        Kind: sdk.String("saepe"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("magni"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("iste"),
                    Kind: sdk.String("incidunt"),
                    Name: sdk.String("Mrs. Tanya Hettinger"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("repudiandae"),
                                                Ids: []string{
                                                    "nesciunt",
                                                },
                                                Kind: sdk.String("sint"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "ipsum",
                                                    "reiciendis",
                                                },
                                            },
                                            Kind: sdk.String("error"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("architecto"),
                                                Kind: sdk.String("occaecati"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "nostrum",
                                                    "facere",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("veritatis"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("facere"),
                                                Ids: []string{
                                                    "labore",
                                                    "maiores",
                                                },
                                                Kind: sdk.String("ea"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "corrupti",
                                                    "pariatur",
                                                    "dolore",
                                                    "magnam",
                                                },
                                            },
                                            Kind: sdk.String("sunt"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("perferendis"),
                                                Kind: sdk.String("illum"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "similique",
                                                    "occaecati",
                                                    "deserunt",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("corrupti"),
                                },
                            },
                            Kind: sdk.String("iure"),
                            Name: sdk.String("Phyllis Mante PhD"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-03-25"),
                    Kind: sdk.String("eaque"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumMonthToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-10-31"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("eius"),
                        Name: sdk.String("Mrs. Alicia Schulist"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
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
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("recusandae"),
                                    Kind: sdk.String("eaque"),
                                    Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                    Values: []string{
                                        "illum",
                                        "nesciunt",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("accusamus"),
                                    Ids: []string{
                                        "pariatur",
                                        "cum",
                                    },
                                    Kind: sdk.String("placeat"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "eos",
                                    },
                                },
                                Kind: sdk.String("quae"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("quibusdam"),
                                    Kind: sdk.String("adipisci"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "in",
                                        "eligendi",
                                        "velit",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("iure"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("commodi"),
                                    Ids: []string{
                                        "maxime",
                                        "itaque",
                                        "molestias",
                                        "laudantium",
                                    },
                                    Kind: sdk.String("occaecati"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "voluptatum",
                                        "inventore",
                                        "reprehenderit",
                                        "molestiae",
                                    },
                                },
                                Kind: sdk.String("autem"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("iusto"),
                                    Kind: sdk.String("illum"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "magni",
                                        "quasi",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("magni"),
                                    Ids: []string{
                                        "commodi",
                                        "a",
                                        "omnis",
                                        "facere",
                                    },
                                    Kind: sdk.String("aliquam"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "dolorem",
                                        "doloribus",
                                    },
                                },
                                Kind: sdk.String("in"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("voluptatem"),
                                    Kind: sdk.String("aut"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "molestiae",
                                        "cumque",
                                        "harum",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("expedita"),
                                    Ids: []string{
                                        "dolorem",
                                        "quod",
                                    },
                                    Kind: sdk.String("veritatis"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "quasi",
                                        "explicabo",
                                        "similique",
                                        "fuga",
                                    },
                                },
                                Kind: sdk.String("sit"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("vero"),
                                    Kind: sdk.String("distinctio"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "qui",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("perspiciatis"),
                                    Ids: []string{
                                        "at",
                                        "possimus",
                                        "rerum",
                                        "ad",
                                    },
                                    Kind: sdk.String("error"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "maxime",
                                        "quis",
                                    },
                                },
                                Kind: sdk.String("reprehenderit"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("ipsam"),
                                    Kind: sdk.String("praesentium"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "voluptatum",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("illum"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("accusamus"),
                                    Ids: []string{
                                        "error",
                                        "excepturi",
                                        "voluptas",
                                    },
                                    Kind: sdk.String("quo"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "at",
                                    },
                                },
                                Kind: sdk.String("cupiditate"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("omnis"),
                                    Kind: sdk.String("tempora"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "ipsam",
                                        "impedit",
                                        "ab",
                                        "numquam",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("nostrum"),
                                    Ids: []string{
                                        "velit",
                                        "tenetur",
                                    },
                                    Kind: sdk.String("omnis"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "possimus",
                                        "dolore",
                                        "fuga",
                                    },
                                },
                                Kind: sdk.String("corrupti"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("rem"),
                                    Kind: sdk.String("quisquam"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "consequatur",
                                        "soluta",
                                        "cumque",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("ipsum"),
                                    Ids: []string{
                                        "culpa",
                                    },
                                    Kind: sdk.String("placeat"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "amet",
                                        "quidem",
                                    },
                                },
                                Kind: sdk.String("tempora"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("doloremque"),
                                    Kind: sdk.String("nemo"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "tempore",
                                        "amet",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("hic"),
                                    Ids: []string{
                                        "dolor",
                                        "necessitatibus",
                                    },
                                    Kind: sdk.String("eius"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "ipsum",
                                        "neque",
                                        "quae",
                                    },
                                },
                                Kind: sdk.String("ullam"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("expedita"),
                                    Kind: sdk.String("animi"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "molestiae",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("nihil"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("sapiente"),
                                    Ids: []string{
                                        "quibusdam",
                                        "odit",
                                    },
                                    Kind: sdk.String("possimus"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "illo",
                                        "quo",
                                        "rerum",
                                        "odit",
                                    },
                                },
                                Kind: sdk.String("dignissimos"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("reiciendis"),
                                    Kind: sdk.String("fugiat"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "quidem",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("ex"),
                                    Ids: []string{
                                        "quas",
                                        "alias",
                                    },
                                    Kind: sdk.String("reprehenderit"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "perspiciatis",
                                        "harum",
                                        "asperiores",
                                        "at",
                                    },
                                },
                                Kind: sdk.String("aspernatur"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("labore"),
                                    Kind: sdk.String("et"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "sed",
                                        "nobis",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("maiores"),
                                    Ids: []string{
                                        "doloribus",
                                        "id",
                                    },
                                    Kind: sdk.String("consectetur"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "minus",
                                        "suscipit",
                                    },
                                },
                                Kind: sdk.String("architecto"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("aliquam"),
                                    Kind: sdk.String("in"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "eligendi",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("magni"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                },
            },
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("recusandae"),
                        Etag: sdk.String("dolores"),
                        ID: sdk.String("9819224e-200e-4513-a655-c46bb6d88760"),
                        Kind: sdk.String("nisi"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("ipsa"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("temporibus"),
                        Etag: sdk.String("aut"),
                        ID: sdk.String("eb06d21d-9af7-4f5b-9a53-eb6c072c5d26"),
                        Kind: sdk.String("possimus"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("repellat"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("dolorum"),
                        Etag: sdk.String("veniam"),
                        ID: sdk.String("77403383-a66d-4b6b-b78a-a7310c3d14ba"),
                        Kind: sdk.String("excepturi"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("minus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("sed"),
                        Etag: sdk.String("ex"),
                        ID: sdk.String("349d5927-2ed5-4066-862c-99eaadacd2b8"),
                        Kind: sdk.String("voluptas"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("maxime"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("sunt"),
                        Name: sdk.String("Teri Walter V"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("repudiandae"),
                        Name: sdk.String("Ms. Kristine Powlowski"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("expedita"),
                        Name: sdk.String("Frances Grant"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("repellendus"),
                        Name: sdk.String("Marco Bechtelar"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("totam"),
                        Name: sdk.String("Madeline Koch"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("reiciendis"),
                        Name: sdk.String("Cristina Miller"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("sed"),
                        Etag: sdk.String("nobis"),
                        ID: sdk.String("a7309239-137e-4ac1-b806-d4e2f39e7062"),
                        Kind: sdk.String("molestiae"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("est"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-05-29"),
                    Kind: sdk.String("ea"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumYesterday.ToPointer(),
                    StartDate: types.MustDateFromString("2022-09-24"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("tempora"),
                    Etag: sdk.String("tempore"),
                    ID: sdk.String("a7b3f7bd-633e-488b-a130-4356ca70d8d4"),
                    Kind: sdk.String("doloribus"),
                    MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                    Value: sdk.String("facere"),
                },
                MetricNames: []string{
                    "accusantium",
                    "esse",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("ex"),
                        Name: sdk.String("Marie Borer"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("harum"),
                        Name: sdk.String("Christina Zieme"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(582851),
                    ImpressionsLookbackWindow: sdk.Int(965119),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(547835),
                    MaximumImpressionInteractions: sdk.Int(823229),
                    MaximumInteractionGap: sdk.Int(49996),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("dolorum"),
                            Etag: sdk.String("possimus"),
                            ID: sdk.String("968ecac3-3024-4ac5-b7a0-f6cfeb9d3a69"),
                            Kind: sdk.String("quam"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("amet"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("dignissimos"),
                            Etag: sdk.String("vitae"),
                            ID: sdk.String("ce361d2e-5d73-4e79-9aa6-7ac619187481"),
                            Kind: sdk.String("temporibus"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("tempore"),
                        },
                    },
                    Kind: sdk.String("sint"),
                    MetricNames: []string{
                        "illo",
                        "optio",
                        "voluptate",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("necessitatibus"),
                            Etag: sdk.String("ipsam"),
                            ID: sdk.String("9cf64fa7-e55f-48cd-9590-6f46816b65f2"),
                            Kind: sdk.String("harum"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("necessitatibus"),
                        },
                    },
                    Kind: sdk.String("quidem"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-01-05"),
                    Kind: sdk.String("impedit"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousWeek.ToPointer(),
                    StartDate: types.MustDateFromString("2022-03-28"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("animi"),
                        Etag: sdk.String("enim"),
                        ID: sdk.String("65056009-ff62-49ef-8912-2f736235763f"),
                        Kind: sdk.String("eos"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("officia"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("maxime"),
                        Etag: sdk.String("est"),
                        ID: sdk.String("c3611e1a-fad6-456d-9e0e-aec2ecc07cb9"),
                        Kind: sdk.String("tempore"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("voluptas"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quos"),
                        Etag: sdk.String("quas"),
                        ID: sdk.String("9a0b04c7-45cc-4b09-b121-661e3316da07"),
                        Kind: sdk.String("aperiam"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("itaque"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quidem"),
                        Etag: sdk.String("maiores"),
                        ID: sdk.String("e7939ad3-d52d-461d-8b7d-82d77b1ba1eb"),
                        Kind: sdk.String("sunt"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("alias"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("quidem"),
                        Name: sdk.String("Mrs. Sheila Barrows"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("fugiat"),
                        Name: sdk.String("Monique Quitzon"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "explicabo",
                    "minus",
                },
                ReachByFrequencyMetricNames: []string{
                    "non",
                    "at",
                    "pariatur",
                    "earum",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(932960),
                ExpirationDate: types.MustDateFromString("2022-10-10"),
                Repeats: sdk.String("sapiente"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumWednesday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumWeekOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2022-06-26"),
                Timezone: sdk.String("dolor"),
            },
            SubAccountID: sdk.String("saepe"),
            Type: shared.ReportTypeEnumStandard.ToPointer(),
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quasi",
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("blanditiis"),
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
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("est"),
        Key: sdk.String("quam"),
        MaxResults: sdk.Int64(270530),
        OauthToken: sdk.String("quidem"),
        PageToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ut",
        QuotaUser: sdk.String("inventore"),
        Scope: operations.DfareportingReportsListScopeEnumAll.ToPointer(),
        SortField: operations.DfareportingReportsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingReportsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("vitae"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Report: &shared.Report{
            AccountID: sdk.String("magnam"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("amet"),
                            Etag: sdk.String("dolorum"),
                            ID: sdk.String("913e1a79-02bb-473d-8fce-fac45984a74e"),
                            Kind: sdk.String("quod"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("minima"),
                        },
                    },
                    Kind: sdk.String("voluptatum"),
                    MetricNames: []string{
                        "tempore",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("at"),
                            Etag: sdk.String("id"),
                            ID: sdk.String("948d7cb1-78df-47dc-9943-bc56d314aba8"),
                            Kind: sdk.String("eius"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("culpa"),
                        },
                    },
                    Kind: sdk.String("voluptatibus"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-06-04"),
                    Kind: sdk.String("iste"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumToday.ToPointer(),
                    StartDate: types.MustDateFromString("2022-04-19"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("atque"),
                        Etag: sdk.String("exercitationem"),
                        ID: sdk.String("34fa3fc8-3c1f-4c5b-8acd-b04c48b427d7"),
                        Kind: sdk.String("nulla"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("excepturi"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptas"),
                        Etag: sdk.String("ipsum"),
                        ID: sdk.String("ff03e497-d897-4002-9e0d-efd4e15f2303"),
                        Kind: sdk.String("harum"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("quia"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("magni"),
                        Name: sdk.String("Vincent Larkin I"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("omnis"),
                        Name: sdk.String("Mabel Ondricka"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "fugiat",
                    "dolorum",
                    "accusantium",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("quas"),
                        Name: sdk.String("Rick Hartmann"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-05-23"),
                    Kind: sdk.String("eos"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumQuarterToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-04-19"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumCampaign.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("labore"),
                        Etag: sdk.String("quae"),
                        ID: sdk.String("9bbef0ca-991e-43a7-a595-202b367d4e16"),
                        Kind: sdk.String("totam"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("rerum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("aliquid"),
                        Etag: sdk.String("quasi"),
                        ID: sdk.String("8b30bb7f-8741-4b4a-ad8c-2efc6f611e91"),
                        Kind: sdk.String("sunt"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("eius"),
                    },
                },
                MetricNames: []string{
                    "magnam",
                    "labore",
                    "quasi",
                    "blanditiis",
                },
                OverlapMetricNames: []string{
                    "officia",
                    "vitae",
                    "laborum",
                    "iusto",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment.ToPointer(),
                Message: sdk.String("labore"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Damion_Beatty79@gmail.com"),
                        Kind: sdk.String("natus"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Emily_Deckow26@hotmail.com"),
                        Kind: sdk.String("occaecati"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Eldred63@hotmail.com"),
                        Kind: sdk.String("nihil"),
                    },
                },
            },
            Etag: sdk.String("error"),
            FileName: sdk.String("magnam"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("quam"),
                        Etag: sdk.String("laboriosam"),
                        ID: sdk.String("44f0f294-e355-4c0c-95bb-716363ba3364"),
                        Kind: sdk.String("consequuntur"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("sint"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("hic"),
                        Etag: sdk.String("eius"),
                        ID: sdk.String("f6d97e7b-5a78-4224-a2ce-cb724605504b"),
                        Kind: sdk.String("saepe"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("nemo"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("corporis"),
                        Etag: sdk.String("possimus"),
                        ID: sdk.String("207f4485-4848-4609-9d14-452a0fc3a3bd"),
                        Kind: sdk.String("possimus"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("repellendus"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-04-17"),
                    Kind: sdk.String("aut"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumToday.ToPointer(),
                    StartDate: types.MustDateFromString("2022-06-10"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("eligendi"),
                        Etag: sdk.String("optio"),
                        ID: sdk.String("9a5a2cec-6731-4ed1-900d-c963548daee9"),
                        Kind: sdk.String("sit"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("aliquam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("culpa"),
                        Etag: sdk.String("doloremque"),
                        ID: sdk.String("bdeb44fc-0aaa-48c2-ab90-8256b16e703e"),
                        Kind: sdk.String("cum"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("consequatur"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("suscipit"),
                        Etag: sdk.String("ducimus"),
                        ID: sdk.String("28e45275-f10b-4b96-8eff-cef1a8f1c046"),
                        Kind: sdk.String("eligendi"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("sunt"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("praesentium"),
                        Name: sdk.String("Laverne Schmeler"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("consectetur"),
                        Name: sdk.String("Ms. Emma Ledner"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("repellendus"),
                    Etag: sdk.String("facilis"),
                    ID: sdk.String("d9510351-d82f-4bd3-be85-0ed86b0def74"),
                    Kind: sdk.String("laborum"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("atque"),
                },
                MetricNames: []string{
                    "quisquam",
                    "saepe",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumExcel.ToPointer(),
            ID: sdk.String("sapiente"),
            Kind: sdk.String("error"),
            LastModifiedTime: sdk.String("nulla"),
            Name: sdk.String("Sandra McKenzie V"),
            OwnerProfileID: sdk.String("nostrum"),
            PathAttributionCriteria: &shared.ReportPathAttributionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("illo"),
                        Etag: sdk.String("dignissimos"),
                        ID: sdk.String("42e33cca-695f-4d56-8f93-7e24d8713045"),
                        Kind: sdk.String("quibusdam"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("delectus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("odio"),
                        Etag: sdk.String("quasi"),
                        ID: sdk.String("3e05b559-2bfc-4739-9f71-223b5846a1b9"),
                        Kind: sdk.String("quisquam"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("commodi"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("laborum"),
                        Etag: sdk.String("dicta"),
                        ID: sdk.String("4e654036-8ed3-40f7-acea-bf8012459048"),
                        Kind: sdk.String("a"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("suscipit"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("autem"),
                    Kind: sdk.String("dignissimos"),
                    Name: sdk.String("Charlene Terry"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ad"),
                                                Ids: []string{
                                                    "nesciunt",
                                                    "quod",
                                                },
                                                Kind: sdk.String("modi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "ad",
                                                    "officia",
                                                    "debitis",
                                                },
                                            },
                                            Kind: sdk.String("eius"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("necessitatibus"),
                                                Kind: sdk.String("atque"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "nobis",
                                                    "modi",
                                                    "voluptate",
                                                    "sit",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("atque"),
                                                Ids: []string{
                                                    "nesciunt",
                                                    "hic",
                                                },
                                                Kind: sdk.String("saepe"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "sunt",
                                                    "deserunt",
                                                    "dolores",
                                                },
                                            },
                                            Kind: sdk.String("asperiores"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("facilis"),
                                                Kind: sdk.String("voluptatibus"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "provident",
                                                    "velit",
                                                    "et",
                                                    "laborum",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("esse"),
                                                Ids: []string{
                                                    "porro",
                                                    "incidunt",
                                                    "eos",
                                                },
                                                Kind: sdk.String("commodi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "est",
                                                    "libero",
                                                    "enim",
                                                    "veritatis",
                                                },
                                            },
                                            Kind: sdk.String("libero"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("aspernatur"),
                                                Kind: sdk.String("minus"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "ipsa",
                                                    "quos",
                                                    "porro",
                                                    "voluptas",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("tempore"),
                                                Ids: []string{
                                                    "sequi",
                                                    "qui",
                                                    "sit",
                                                },
                                                Kind: sdk.String("neque"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "magnam",
                                                    "facere",
                                                    "in",
                                                    "ea",
                                                },
                                            },
                                            Kind: sdk.String("odit"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("nihil"),
                                                Kind: sdk.String("vitae"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "voluptate",
                                                    "eius",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("amet"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ipsum"),
                                                Ids: []string{
                                                    "repellendus",
                                                    "ab",
                                                },
                                                Kind: sdk.String("est"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "earum",
                                                    "consequuntur",
                                                    "facilis",
                                                    "recusandae",
                                                },
                                            },
                                            Kind: sdk.String("quisquam"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("cumque"),
                                                Kind: sdk.String("amet"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "mollitia",
                                                    "asperiores",
                                                    "temporibus",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("labore"),
                                                Ids: []string{
                                                    "vitae",
                                                    "deserunt",
                                                    "distinctio",
                                                },
                                                Kind: sdk.String("voluptatibus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "suscipit",
                                                    "inventore",
                                                    "optio",
                                                },
                                            },
                                            Kind: sdk.String("distinctio"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("magni"),
                                                Kind: sdk.String("voluptatibus"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "perspiciatis",
                                                    "doloremque",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quasi"),
                                                Ids: []string{
                                                    "occaecati",
                                                    "quaerat",
                                                    "velit",
                                                },
                                                Kind: sdk.String("repudiandae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "est",
                                                },
                                            },
                                            Kind: sdk.String("voluptas"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("explicabo"),
                                                Kind: sdk.String("sit"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "placeat",
                                                    "ratione",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("vitae"),
                                },
                            },
                            Kind: sdk.String("perspiciatis"),
                            Name: sdk.String("Shelia Bogisich"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dicta"),
                                                Ids: []string{
                                                    "numquam",
                                                    "in",
                                                    "assumenda",
                                                },
                                                Kind: sdk.String("consequatur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "sequi",
                                                    "distinctio",
                                                },
                                            },
                                            Kind: sdk.String("ut"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("quae"),
                                                Kind: sdk.String("exercitationem"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "ullam",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("atque"),
                                                Ids: []string{
                                                    "excepturi",
                                                    "sunt",
                                                },
                                                Kind: sdk.String("quo"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "quaerat",
                                                    "velit",
                                                    "porro",
                                                },
                                            },
                                            Kind: sdk.String("quia"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("amet"),
                                                Kind: sdk.String("saepe"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "temporibus",
                                                    "consequatur",
                                                    "necessitatibus",
                                                    "sit",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("dolore"),
                                },
                            },
                            Kind: sdk.String("odio"),
                            Name: sdk.String("Lora Ziemann I"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptates"),
                                                Ids: []string{
                                                    "sint",
                                                    "mollitia",
                                                },
                                                Kind: sdk.String("illo"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "sunt",
                                                    "iure",
                                                    "facilis",
                                                    "velit",
                                                },
                                            },
                                            Kind: sdk.String("quaerat"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("culpa"),
                                                Kind: sdk.String("voluptatem"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "reiciendis",
                                                    "eum",
                                                    "ratione",
                                                    "architecto",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("earum"),
                                                Ids: []string{
                                                    "deleniti",
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
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("doloribus"),
                                                Kind: sdk.String("velit"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "quam",
                                                    "accusantium",
                                                    "voluptatem",
                                                    "quos",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("est"),
                                                Ids: []string{
                                                    "delectus",
                                                    "veniam",
                                                    "magni",
                                                },
                                                Kind: sdk.String("velit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "ut",
                                                    "dolores",
                                                    "esse",
                                                    "mollitia",
                                                },
                                            },
                                            Kind: sdk.String("sequi"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("repellat"),
                                                Kind: sdk.String("impedit"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "vel",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("sed"),
                                                Ids: []string{
                                                    "at",
                                                    "provident",
                                                    "eius",
                                                },
                                                Kind: sdk.String("mollitia"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "incidunt",
                                                    "blanditiis",
                                                },
                                            },
                                            Kind: sdk.String("beatae"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("illo"),
                                                Kind: sdk.String("atque"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "aliquid",
                                                    "corporis",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quia"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("consequuntur"),
                                                Ids: []string{
                                                    "eos",
                                                    "possimus",
                                                    "quos",
                                                    "vitae",
                                                },
                                                Kind: sdk.String("voluptate"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "animi",
                                                    "maiores",
                                                    "aut",
                                                },
                                            },
                                            Kind: sdk.String("omnis"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("occaecati"),
                                                Kind: sdk.String("dolor"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "ducimus",
                                                    "sequi",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("impedit"),
                                                Ids: []string{
                                                    "distinctio",
                                                    "ducimus",
                                                    "unde",
                                                    "vitae",
                                                },
                                                Kind: sdk.String("veritatis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "aliquid",
                                                },
                                            },
                                            Kind: sdk.String("ex"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("omnis"),
                                                Kind: sdk.String("sapiente"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "cupiditate",
                                                    "minus",
                                                    "praesentium",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("asperiores"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ab"),
                                                Ids: []string{
                                                    "molestiae",
                                                    "voluptate",
                                                    "facilis",
                                                    "fuga",
                                                },
                                                Kind: sdk.String("quod"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "dolore",
                                                    "nemo",
                                                    "consequuntur",
                                                },
                                            },
                                            Kind: sdk.String("aliquam"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("excepturi"),
                                                Kind: sdk.String("accusamus"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "possimus",
                                                    "magni",
                                                    "optio",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("minus"),
                                                Ids: []string{
                                                    "magnam",
                                                    "recusandae",
                                                    "enim",
                                                },
                                                Kind: sdk.String("sapiente"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "quaerat",
                                                    "laborum",
                                                },
                                            },
                                            Kind: sdk.String("soluta"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("voluptatibus"),
                                                Kind: sdk.String("temporibus"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "animi",
                                                    "cum",
                                                    "iure",
                                                    "reiciendis",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("soluta"),
                                                Ids: []string{
                                                    "ipsa",
                                                },
                                                Kind: sdk.String("voluptatem"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "eligendi",
                                                    "dignissimos",
                                                    "explicabo",
                                                },
                                            },
                                            Kind: sdk.String("incidunt"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("placeat"),
                                                Kind: sdk.String("voluptate"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "a",
                                                    "laborum",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quae"),
                                                Ids: []string{
                                                    "blanditiis",
                                                    "eaque",
                                                },
                                                Kind: sdk.String("tempora"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "consequatur",
                                                },
                                            },
                                            Kind: sdk.String("atque"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("sunt"),
                                                Kind: sdk.String("consequatur"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "occaecati",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("voluptate"),
                                },
                            },
                            Kind: sdk.String("cupiditate"),
                            Name: sdk.String("Olivia Stracke"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("assumenda"),
                                                Ids: []string{
                                                    "neque",
                                                    "dolores",
                                                    "nisi",
                                                    "error",
                                                },
                                                Kind: sdk.String("nemo"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "quae",
                                                    "nostrum",
                                                    "quod",
                                                    "necessitatibus",
                                                },
                                            },
                                            Kind: sdk.String("repellat"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("doloribus"),
                                                Kind: sdk.String("autem"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "ullam",
                                                    "temporibus",
                                                    "dolores",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quisquam"),
                                                Ids: []string{
                                                    "blanditiis",
                                                },
                                                Kind: sdk.String("omnis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "non",
                                                    "veniam",
                                                    "at",
                                                },
                                            },
                                            Kind: sdk.String("quas"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("illo"),
                                                Kind: sdk.String("magnam"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "dignissimos",
                                                    "quidem",
                                                    "dignissimos",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("iure"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("saepe"),
                                                Ids: []string{
                                                    "vitae",
                                                },
                                                Kind: sdk.String("doloribus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "ut",
                                                    "assumenda",
                                                },
                                            },
                                            Kind: sdk.String("dolores"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("magni"),
                                                Kind: sdk.String("impedit"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "laborum",
                                                    "sequi",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("minus"),
                                                Ids: []string{
                                                    "repellat",
                                                    "dignissimos",
                                                    "fuga",
                                                },
                                                Kind: sdk.String("pariatur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "rerum",
                                                },
                                            },
                                            Kind: sdk.String("occaecati"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("optio"),
                                                Kind: sdk.String("mollitia"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "amet",
                                                    "dolores",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ipsum"),
                                                Ids: []string{
                                                    "perferendis",
                                                    "iste",
                                                    "optio",
                                                },
                                                Kind: sdk.String("excepturi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "optio",
                                                    "ducimus",
                                                    "explicabo",
                                                },
                                            },
                                            Kind: sdk.String("neque"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("laborum"),
                                                Kind: sdk.String("dolorum"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "perspiciatis",
                                                    "temporibus",
                                                    "sit",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("maxime"),
                                                Ids: []string{
                                                    "atque",
                                                    "minus",
                                                    "suscipit",
                                                },
                                                Kind: sdk.String("commodi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "repudiandae",
                                                    "consectetur",
                                                },
                                            },
                                            Kind: sdk.String("rem"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("fugiat"),
                                                Kind: sdk.String("deleniti"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "eligendi",
                                                    "voluptatibus",
                                                    "natus",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("necessitatibus"),
                                },
                            },
                            Kind: sdk.String("fugit"),
                            Name: sdk.String("Jacqueline Kreiger"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-11-12"),
                    Kind: sdk.String("ad"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast60Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-06-03"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("error"),
                        Name: sdk.String("Josh Goyette PhD"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("corporis"),
                        Name: sdk.String("Dr. Garry Harvey"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("molestias"),
                        Name: sdk.String("Clayton Schmitt"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("consequuntur"),
                    Etag: sdk.String("in"),
                    ID: sdk.String("a32a6377-7c3e-4038-a751-d851df5b750d"),
                    Kind: sdk.String("reiciendis"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("officiis"),
                },
                MetricNames: []string{
                    "ratione",
                    "animi",
                    "occaecati",
                    "inventore",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("repellat"),
                                    Ids: []string{
                                        "ipsam",
                                        "error",
                                        "cum",
                                    },
                                    Kind: sdk.String("cum"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "temporibus",
                                        "deserunt",
                                        "natus",
                                    },
                                },
                                Kind: sdk.String("possimus"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("est"),
                                    Kind: sdk.String("perferendis"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "molestias",
                                        "eum",
                                        "facilis",
                                        "ut",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("veritatis"),
                                    Ids: []string{
                                        "sed",
                                        "hic",
                                    },
                                    Kind: sdk.String("iste"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "facere",
                                        "blanditiis",
                                    },
                                },
                                Kind: sdk.String("dolor"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("fuga"),
                                    Kind: sdk.String("labore"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "pariatur",
                                        "mollitia",
                                        "fugit",
                                        "velit",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("reiciendis"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("saepe"),
                                    Ids: []string{
                                        "culpa",
                                        "consequatur",
                                        "doloribus",
                                        "sequi",
                                    },
                                    Kind: sdk.String("quos"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "pariatur",
                                        "aliquam",
                                        "quisquam",
                                        "a",
                                    },
                                },
                                Kind: sdk.String("voluptatum"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("corporis"),
                                    Kind: sdk.String("porro"),
                                    Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                    Values: []string{
                                        "quia",
                                        "iste",
                                        "culpa",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("possimus"),
                                    Ids: []string{
                                        "cum",
                                        "eaque",
                                        "suscipit",
                                        "nihil",
                                    },
                                    Kind: sdk.String("magni"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "rem",
                                    },
                                },
                                Kind: sdk.String("dicta"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("autem"),
                                    Kind: sdk.String("veniam"),
                                    Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                    Values: []string{
                                        "vitae",
                                        "quasi",
                                        "veniam",
                                        "minima",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("ut"),
                                    Ids: []string{
                                        "nemo",
                                        "molestias",
                                        "illo",
                                        "eaque",
                                    },
                                    Kind: sdk.String("amet"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "aliquid",
                                        "asperiores",
                                        "harum",
                                    },
                                },
                                Kind: sdk.String("commodi"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("temporibus"),
                                    Kind: sdk.String("commodi"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "labore",
                                        "quas",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("eos"),
                                    Ids: []string{
                                        "distinctio",
                                        "est",
                                        "nulla",
                                        "repellat",
                                    },
                                    Kind: sdk.String("consequuntur"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "quibusdam",
                                        "error",
                                        "doloremque",
                                        "neque",
                                    },
                                },
                                Kind: sdk.String("eligendi"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("ratione"),
                                    Kind: sdk.String("natus"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "consequuntur",
                                        "voluptatibus",
                                        "quod",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("dolor"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("quis"),
                                    Ids: []string{
                                        "eum",
                                        "quis",
                                        "consectetur",
                                    },
                                    Kind: sdk.String("pariatur"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "maxime",
                                        "alias",
                                        "aliquid",
                                    },
                                },
                                Kind: sdk.String("eveniet"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("deserunt"),
                                    Kind: sdk.String("rem"),
                                    Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                    Values: []string{
                                        "soluta",
                                        "praesentium",
                                        "quae",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("iste"),
                                    Ids: []string{
                                        "maiores",
                                        "maxime",
                                        "reprehenderit",
                                    },
                                    Kind: sdk.String("alias"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "nulla",
                                    },
                                },
                                Kind: sdk.String("repudiandae"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("beatae"),
                                    Kind: sdk.String("alias"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "esse",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("accusantium"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("earum"),
                                    Ids: []string{
                                        "qui",
                                        "qui",
                                    },
                                    Kind: sdk.String("quasi"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "quibusdam",
                                        "perferendis",
                                    },
                                },
                                Kind: sdk.String("sapiente"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("ducimus"),
                                    Kind: sdk.String("magni"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "accusamus",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("soluta"),
                                    Ids: []string{
                                        "odit",
                                        "voluptates",
                                        "non",
                                        "voluptates",
                                    },
                                    Kind: sdk.String("odio"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "laboriosam",
                                        "sint",
                                    },
                                },
                                Kind: sdk.String("facere"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("ipsam"),
                                    Kind: sdk.String("nihil"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "fugit",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("voluptate"),
                                    Ids: []string{
                                        "ipsam",
                                    },
                                    Kind: sdk.String("officia"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "exercitationem",
                                        "totam",
                                    },
                                },
                                Kind: sdk.String("sapiente"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("enim"),
                                    Kind: sdk.String("recusandae"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "adipisci",
                                        "sint",
                                        "nulla",
                                        "beatae",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("nesciunt"),
                                    Ids: []string{
                                        "rerum",
                                    },
                                    Kind: sdk.String("qui"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "atque",
                                    },
                                },
                                Kind: sdk.String("officiis"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("itaque"),
                                    Kind: sdk.String("neque"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "consequuntur",
                                        "et",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("ipsam"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                },
            },
            PathCriteria: &shared.ReportPathCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("tenetur"),
                        Etag: sdk.String("excepturi"),
                        ID: sdk.String("cd6528f0-6085-41c4-b452-2e13a0bf1ffb"),
                        Kind: sdk.String("qui"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("praesentium"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quia"),
                        Etag: sdk.String("esse"),
                        ID: sdk.String("12db5a5f-b1ca-49e1-95e0-011bd4d2fffd"),
                        Kind: sdk.String("vitae"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("eum"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("minima"),
                    Kind: sdk.String("ipsam"),
                    Name: sdk.String("Debbie Schumm"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("non"),
                                                Ids: []string{
                                                    "et",
                                                    "mollitia",
                                                    "blanditiis",
                                                },
                                                Kind: sdk.String("debitis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "maiores",
                                                },
                                            },
                                            Kind: sdk.String("facere"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("voluptates"),
                                                Kind: sdk.String("neque"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "sit",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("iure"),
                                                Ids: []string{
                                                    "ex",
                                                    "explicabo",
                                                    "dolorum",
                                                },
                                                Kind: sdk.String("omnis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "repellendus",
                                                },
                                            },
                                            Kind: sdk.String("cum"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("ipsum"),
                                                Kind: sdk.String("laboriosam"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "facere",
                                                    "quidem",
                                                    "cumque",
                                                    "molestiae",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("reprehenderit"),
                                                Ids: []string{
                                                    "blanditiis",
                                                    "et",
                                                    "amet",
                                                },
                                                Kind: sdk.String("mollitia"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "nisi",
                                                    "facere",
                                                    "maxime",
                                                },
                                            },
                                            Kind: sdk.String("aperiam"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("ipsam"),
                                                Kind: sdk.String("ratione"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "eum",
                                                    "quos",
                                                    "magnam",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("commodi"),
                                                Ids: []string{
                                                    "sit",
                                                    "quisquam",
                                                },
                                                Kind: sdk.String("repellendus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "placeat",
                                                    "nemo",
                                                },
                                            },
                                            Kind: sdk.String("unde"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("voluptate"),
                                                Kind: sdk.String("accusamus"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "adipisci",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("odio"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("tenetur"),
                                                Ids: []string{
                                                    "ipsum",
                                                    "nesciunt",
                                                    "praesentium",
                                                    "quos",
                                                },
                                                Kind: sdk.String("et"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "iusto",
                                                    "possimus",
                                                    "saepe",
                                                    "odit",
                                                },
                                            },
                                            Kind: sdk.String("accusantium"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("error"),
                                                Kind: sdk.String("rem"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "blanditiis",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("tempora"),
                                                Ids: []string{
                                                    "voluptates",
                                                    "aliquam",
                                                    "commodi",
                                                },
                                                Kind: sdk.String("autem"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "ex",
                                                    "iusto",
                                                    "cum",
                                                    "sequi",
                                                },
                                            },
                                            Kind: sdk.String("aliquid"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("veniam"),
                                                Kind: sdk.String("laudantium"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "consequuntur",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("expedita"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("deleniti"),
                                                Ids: []string{
                                                    "voluptatibus",
                                                    "omnis",
                                                },
                                                Kind: sdk.String("at"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "nisi",
                                                    "ipsam",
                                                },
                                            },
                                            Kind: sdk.String("ullam"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("id"),
                                                Kind: sdk.String("cupiditate"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "quos",
                                                    "vitae",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("reiciendis"),
                                                Ids: []string{
                                                    "et",
                                                    "maiores",
                                                    "perspiciatis",
                                                },
                                                Kind: sdk.String("accusantium"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "ipsum",
                                                    "nisi",
                                                },
                                            },
                                            Kind: sdk.String("cupiditate"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("perspiciatis"),
                                                Kind: sdk.String("quo"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "perspiciatis",
                                                    "voluptatibus",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("impedit"),
                                                Ids: []string{
                                                    "ullam",
                                                },
                                                Kind: sdk.String("molestiae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "cum",
                                                    "reprehenderit",
                                                    "quibusdam",
                                                },
                                            },
                                            Kind: sdk.String("laudantium"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("repellat"),
                                                Kind: sdk.String("molestiae"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "itaque",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ad"),
                                                Ids: []string{
                                                    "veritatis",
                                                    "porro",
                                                },
                                                Kind: sdk.String("optio"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "nulla",
                                                    "ea",
                                                },
                                            },
                                            Kind: sdk.String("eligendi"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("optio"),
                                                Kind: sdk.String("maiores"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "commodi",
                                                    "delectus",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("aspernatur"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("iusto"),
                                                Ids: []string{
                                                    "sequi",
                                                    "beatae",
                                                },
                                                Kind: sdk.String("autem"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "voluptatibus",
                                                    "incidunt",
                                                    "veritatis",
                                                    "eum",
                                                },
                                            },
                                            Kind: sdk.String("deserunt"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("voluptatem"),
                                                Kind: sdk.String("non"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "inventore",
                                                    "laudantium",
                                                    "culpa",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quos"),
                                },
                            },
                            Kind: sdk.String("reiciendis"),
                            Name: sdk.String("Miss Alexis Klein"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("officia"),
                                                Ids: []string{
                                                    "totam",
                                                    "voluptate",
                                                },
                                                Kind: sdk.String("deserunt"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "impedit",
                                                    "doloribus",
                                                },
                                            },
                                            Kind: sdk.String("exercitationem"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("nam"),
                                                Kind: sdk.String("aliquid"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "beatae",
                                                    "labore",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("rerum"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ipsa"),
                                                Ids: []string{
                                                    "voluptates",
                                                    "laudantium",
                                                },
                                                Kind: sdk.String("reprehenderit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "vitae",
                                                    "temporibus",
                                                    "et",
                                                    "optio",
                                                },
                                            },
                                            Kind: sdk.String("quia"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("esse"),
                                                Kind: sdk.String("quasi"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "hic",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptatem"),
                                                Ids: []string{
                                                    "assumenda",
                                                    "nesciunt",
                                                },
                                                Kind: sdk.String("quod"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "excepturi",
                                                },
                                            },
                                            Kind: sdk.String("minima"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("id"),
                                                Kind: sdk.String("similique"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "perferendis",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("dolores"),
                                },
                            },
                            Kind: sdk.String("laudantium"),
                            Name: sdk.String("Agnes Crona"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("placeat"),
                                                Ids: []string{
                                                    "quaerat",
                                                    "numquam",
                                                },
                                                Kind: sdk.String("aperiam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "iusto",
                                                    "rerum",
                                                    "repudiandae",
                                                    "unde",
                                                },
                                            },
                                            Kind: sdk.String("dolorum"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("optio"),
                                                Kind: sdk.String("ad"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "id",
                                                    "reprehenderit",
                                                    "facilis",
                                                    "provident",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dolorum"),
                                                Ids: []string{
                                                    "iure",
                                                    "minima",
                                                    "odio",
                                                },
                                                Kind: sdk.String("blanditiis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "tempore",
                                                },
                                            },
                                            Kind: sdk.String("illum"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("quibusdam"),
                                                Kind: sdk.String("a"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "veritatis",
                                                    "aperiam",
                                                    "temporibus",
                                                    "fugiat",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("repellat"),
                                                Ids: []string{
                                                    "iusto",
                                                    "explicabo",
                                                    "deleniti",
                                                    "nam",
                                                },
                                                Kind: sdk.String("accusamus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "placeat",
                                                    "numquam",
                                                    "quod",
                                                    "explicabo",
                                                },
                                            },
                                            Kind: sdk.String("reiciendis"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("sequi"),
                                                Kind: sdk.String("eum"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "nulla",
                                                    "eum",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("cum"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("provident"),
                                                Ids: []string{
                                                    "nam",
                                                    "at",
                                                    "maxime",
                                                    "aut",
                                                },
                                                Kind: sdk.String("praesentium"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "error",
                                                },
                                            },
                                            Kind: sdk.String("illum"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("iste"),
                                                Kind: sdk.String("reprehenderit"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "tempore",
                                                    "adipisci",
                                                    "beatae",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("cum"),
                                                Ids: []string{
                                                    "illum",
                                                    "assumenda",
                                                    "perferendis",
                                                },
                                                Kind: sdk.String("aut"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "dolorum",
                                                    "nesciunt",
                                                },
                                            },
                                            Kind: sdk.String("officia"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("perferendis"),
                                                Kind: sdk.String("iste"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "deleniti",
                                                    "voluptate",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("cum"),
                                                Ids: []string{
                                                    "ipsum",
                                                    "tempora",
                                                    "sunt",
                                                    "harum",
                                                },
                                                Kind: sdk.String("quia"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "necessitatibus",
                                                    "eius",
                                                    "aspernatur",
                                                    "natus",
                                                },
                                            },
                                            Kind: sdk.String("consequatur"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("ullam"),
                                                Kind: sdk.String("nesciunt"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "fugiat",
                                                    "voluptatum",
                                                    "tempore",
                                                    "dolorum",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quis"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("necessitatibus"),
                                                Ids: []string{
                                                    "enim",
                                                    "laborum",
                                                    "nobis",
                                                },
                                                Kind: sdk.String("qui"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "corporis",
                                                },
                                            },
                                            Kind: sdk.String("soluta"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("rem"),
                                                Kind: sdk.String("incidunt"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "error",
                                                    "inventore",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("libero"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptates"),
                                                Ids: []string{
                                                    "cupiditate",
                                                    "perferendis",
                                                    "saepe",
                                                },
                                                Kind: sdk.String("ipsa"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "corrupti",
                                                    "aliquam",
                                                },
                                            },
                                            Kind: sdk.String("non"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("vero"),
                                                Kind: sdk.String("officia"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "quasi",
                                                    "deserunt",
                                                    "quasi",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ipsa"),
                                                Ids: []string{
                                                    "ratione",
                                                    "voluptas",
                                                    "adipisci",
                                                },
                                                Kind: sdk.String("hic"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "earum",
                                                },
                                            },
                                            Kind: sdk.String("illum"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("est"),
                                                Kind: sdk.String("qui"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "magni",
                                                    "expedita",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("aperiam"),
                                                Ids: []string{
                                                    "ut",
                                                },
                                                Kind: sdk.String("sint"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "ut",
                                                },
                                            },
                                            Kind: sdk.String("temporibus"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("nam"),
                                                Kind: sdk.String("similique"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "architecto",
                                                    "voluptate",
                                                    "mollitia",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("blanditiis"),
                                                Ids: []string{
                                                    "reiciendis",
                                                    "cum",
                                                },
                                                Kind: sdk.String("expedita"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "odit",
                                                    "facere",
                                                    "qui",
                                                },
                                            },
                                            Kind: sdk.String("libero"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("quos"),
                                                Kind: sdk.String("vitae"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "suscipit",
                                                    "dicta",
                                                    "porro",
                                                    "cumque",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quas"),
                                },
                            },
                            Kind: sdk.String("fugiat"),
                            Name: sdk.String("Mr. Jimmie Pfeffer"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-10-18"),
                    Kind: sdk.String("deserunt"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumYesterday.ToPointer(),
                    StartDate: types.MustDateFromString("2022-04-12"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("placeat"),
                        Name: sdk.String("Geoffrey Yundt"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("tempora"),
                        Name: sdk.String("Sylvester Legros"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("sapiente"),
                        Name: sdk.String("Catherine Walter"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("expedita"),
                    Etag: sdk.String("natus"),
                    ID: sdk.String("9b5e31a1-e360-41a4-9616-3ae1c1e222a2"),
                    Kind: sdk.String("veniam"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("fuga"),
                },
                MetricNames: []string{
                    "sed",
                    "molestias",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("neque"),
                                    Ids: []string{
                                        "rem",
                                        "quibusdam",
                                    },
                                    Kind: sdk.String("suscipit"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "hic",
                                        "perspiciatis",
                                        "perferendis",
                                    },
                                },
                                Kind: sdk.String("doloremque"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("sit"),
                                    Kind: sdk.String("fugiat"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "vero",
                                        "facere",
                                        "excepturi",
                                        "temporibus",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("accusantium"),
                                    Ids: []string{
                                        "temporibus",
                                    },
                                    Kind: sdk.String("impedit"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "voluptas",
                                        "vitae",
                                    },
                                },
                                Kind: sdk.String("veritatis"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("repellat"),
                                    Kind: sdk.String("itaque"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "facere",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("vero"),
                                    Ids: []string{
                                        "magni",
                                    },
                                    Kind: sdk.String("non"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "dolor",
                                        "blanditiis",
                                    },
                                },
                                Kind: sdk.String("odit"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("reprehenderit"),
                                    Kind: sdk.String("fugit"),
                                    Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                    Values: []string{
                                        "consequatur",
                                        "commodi",
                                        "doloremque",
                                        "nemo",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("id"),
                                    Ids: []string{
                                        "dolorum",
                                    },
                                    Kind: sdk.String("saepe"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "quia",
                                        "nostrum",
                                        "aliquid",
                                    },
                                },
                                Kind: sdk.String("sequi"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("voluptates"),
                                    Kind: sdk.String("voluptates"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "corrupti",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("quae"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                },
            },
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("reiciendis"),
                        Etag: sdk.String("incidunt"),
                        ID: sdk.String("a2794752-695a-49b4-8486-54ee709a8df6"),
                        Kind: sdk.String("necessitatibus"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("doloribus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("dolorem"),
                        Etag: sdk.String("adipisci"),
                        ID: sdk.String("c757bbfb-8608-457a-807f-aad6a85f7b7c"),
                        Kind: sdk.String("sapiente"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("iure"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("eius"),
                        Etag: sdk.String("voluptates"),
                        ID: sdk.String("ae8bc3b6-3aa4-4b27-bd98-ae9d4a576c35"),
                        Kind: sdk.String("neque"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("esse"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("explicabo"),
                        Name: sdk.String("Doris Kohler"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("ex"),
                        Name: sdk.String("Gayle Greenholt"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("soluta"),
                        Name: sdk.String("Mr. Lorene Murphy"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("eligendi"),
                        Etag: sdk.String("facere"),
                        ID: sdk.String("221ee3f1-4b20-4bdf-8405-f58714f8edf6"),
                        Kind: sdk.String("saepe"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("quas"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("earum"),
                        Etag: sdk.String("necessitatibus"),
                        ID: sdk.String("833e5684-1f03-4bdb-971d-09bc1e7c64c1"),
                        Kind: sdk.String("in"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("laborum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("nisi"),
                        Etag: sdk.String("cupiditate"),
                        ID: sdk.String("03be71b7-7708-4dae-892b-704b1195944d"),
                        Kind: sdk.String("quo"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("tenetur"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quae"),
                        Etag: sdk.String("illo"),
                        ID: sdk.String("3e7df636-c92b-4a33-8ca8-9e71b32ce5a1"),
                        Kind: sdk.String("ipsum"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("fugiat"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-10-12"),
                    Kind: sdk.String("dicta"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast365Days.ToPointer(),
                    StartDate: types.MustDateFromString("2021-04-02"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("ea"),
                    Etag: sdk.String("fugit"),
                    ID: sdk.String("22a86ea9-68df-49cc-aa75-766c20027acb"),
                    Kind: sdk.String("provident"),
                    MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                    Value: sdk.String("ratione"),
                },
                MetricNames: []string{
                    "tempore",
                    "maiores",
                    "eveniet",
                    "repudiandae",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("autem"),
                        Name: sdk.String("Rosalie Jones"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("reprehenderit"),
                        Name: sdk.String("Elijah Rice"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("delectus"),
                        Name: sdk.String("Michelle Daniel IV"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("laudantium"),
                        Name: sdk.String("Norman Spencer"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(855963),
                    ImpressionsLookbackWindow: sdk.Int(777583),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(955758),
                    MaximumImpressionInteractions: sdk.Int(718320),
                    MaximumInteractionGap: sdk.Int(4507),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("magni"),
                            Etag: sdk.String("laborum"),
                            ID: sdk.String("23fae619-f32a-45ee-9015-f781daf1df8e"),
                            Kind: sdk.String("voluptatibus"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("iure"),
                        },
                    },
                    Kind: sdk.String("doloremque"),
                    MetricNames: []string{
                        "vero",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("veritatis"),
                            Etag: sdk.String("accusamus"),
                            ID: sdk.String("20ab355d-b339-412c-a024-a534ce21c081"),
                            Kind: sdk.String("facilis"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("totam"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("voluptatem"),
                            Etag: sdk.String("quas"),
                            ID: sdk.String("49c309d4-74e7-4739-9e41-2ee767f96d0b"),
                            Kind: sdk.String("nesciunt"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("temporibus"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("dicta"),
                            Etag: sdk.String("corporis"),
                            ID: sdk.String("9d86840c-c15e-466e-9e30-9dfc5f3f3f1c"),
                            Kind: sdk.String("adipisci"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("deserunt"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("fugit"),
                            Etag: sdk.String("expedita"),
                            ID: sdk.String("96cf325b-2693-433c-aafb-699061c4cc0a"),
                            Kind: sdk.String("officia"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("reiciendis"),
                        },
                    },
                    Kind: sdk.String("totam"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-12-10"),
                    Kind: sdk.String("dolore"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousMonth.ToPointer(),
                    StartDate: types.MustDateFromString("2021-06-18"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("odit"),
                        Etag: sdk.String("cupiditate"),
                        ID: sdk.String("88cbb526-f9c0-424c-b42e-bd1abad1a5ee"),
                        Kind: sdk.String("expedita"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("dolor"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("magnam"),
                        Etag: sdk.String("possimus"),
                        ID: sdk.String("732dd9c8-2956-4246-ba24-9c8fa9a5eb84"),
                        Kind: sdk.String("aut"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("accusamus"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("sunt"),
                        Name: sdk.String("Pam Reynolds Sr."),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("a"),
                        Name: sdk.String("Mr. Steven Hodkiewicz"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("cupiditate"),
                        Name: sdk.String("Julia Collier"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("accusantium"),
                        Name: sdk.String("Guadalupe Cartwright"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "rerum",
                    "repellendus",
                    "dicta",
                    "molestias",
                },
                ReachByFrequencyMetricNames: []string{
                    "temporibus",
                    "pariatur",
                    "voluptas",
                    "pariatur",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(499676),
                ExpirationDate: types.MustDateFromString("2022-10-03"),
                Repeats: sdk.String("reiciendis"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSaturday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSaturday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumWeekOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2022-03-04"),
                Timezone: sdk.String("perspiciatis"),
            },
            SubAccountID: sdk.String("harum"),
            Type: shared.ReportTypeEnumPathAttribution.ToPointer(),
        },
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("earum"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "illum",
        QuotaUser: sdk.String("excepturi"),
        ReportID: "ipsam",
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("omnis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("hic"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ex",
        QuotaUser: sdk.String("dolore"),
        ReportID: "corporis",
        Synchronous: sdk.Bool(false),
        UploadType: sdk.String("veritatis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Report: &shared.Report{
            AccountID: sdk.String("ratione"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("id"),
                            Etag: sdk.String("quod"),
                            ID: sdk.String("4c0df1c5-fdfb-47c4-8e10-d318d356393e"),
                            Kind: sdk.String("inventore"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("ducimus"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("quisquam"),
                            Etag: sdk.String("porro"),
                            ID: sdk.String("9acf2cdb-4621-4661-9d55-128e911ccc8d"),
                            Kind: sdk.String("cupiditate"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("accusantium"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("voluptatibus"),
                            Etag: sdk.String("ipsum"),
                            ID: sdk.String("77813bd3-55f0-4149-958a-bf333f913f3b"),
                            Kind: sdk.String("architecto"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("optio"),
                        },
                    },
                    Kind: sdk.String("cum"),
                    MetricNames: []string{
                        "ipsum",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("cum"),
                            Etag: sdk.String("at"),
                            ID: sdk.String("52ff95be-31a2-4a7e-8147-98291d6416a2"),
                            Kind: sdk.String("quisquam"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("molestiae"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("at"),
                            Etag: sdk.String("quae"),
                            ID: sdk.String("79132633-5aed-45d0-858c-8338098dbe64"),
                            Kind: sdk.String("deserunt"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("minima"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("cumque"),
                            Etag: sdk.String("ullam"),
                            ID: sdk.String("56dd032f-7417-4147-bb62-5d4a0ecf7449"),
                            Kind: sdk.String("ratione"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("quia"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("minus"),
                            Etag: sdk.String("tenetur"),
                            ID: sdk.String("e904547f-7a52-4fc0-aca4-96221ac434b9"),
                            Kind: sdk.String("sit"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("voluptatibus"),
                        },
                    },
                    Kind: sdk.String("doloribus"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-01-13"),
                    Kind: sdk.String("eum"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast30Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-07-12"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("deleniti"),
                        Etag: sdk.String("harum"),
                        ID: sdk.String("006e186b-df06-4b1a-8f74-965572292dee"),
                        Kind: sdk.String("eos"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("deleniti"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("laudantium"),
                        Etag: sdk.String("minima"),
                        ID: sdk.String("bfd123b4-f561-4f23-9474-29edbf4ce5b2"),
                        Kind: sdk.String("repellat"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("inventore"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("natus"),
                        Name: sdk.String("Monica Hartmann"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("esse"),
                        Name: sdk.String("Tim Murphy"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("beatae"),
                        Name: sdk.String("Ralph Legros"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "ipsam",
                    "esse",
                    "quasi",
                    "necessitatibus",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("at"),
                        Name: sdk.String("Irene Swift"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("commodi"),
                        Name: sdk.String("Phil Mann"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-05-29"),
                    Kind: sdk.String("officiis"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast60Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-09-25"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumSiteByCampaign.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("corporis"),
                        Etag: sdk.String("doloremque"),
                        ID: sdk.String("411c9b19-8e56-400f-9dbc-4d967332bb0c"),
                        Kind: sdk.String("fuga"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("nobis"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("sapiente"),
                        Etag: sdk.String("veritatis"),
                        ID: sdk.String("94be37b9-0c9d-4c10-8532-bbfa06a6a66f"),
                        Kind: sdk.String("similique"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("laboriosam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("optio"),
                        Etag: sdk.String("doloribus"),
                        ID: sdk.String("c77daebb-9a4b-4822-897d-622654b405a3"),
                        Kind: sdk.String("nemo"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("earum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("et"),
                        Etag: sdk.String("labore"),
                        ID: sdk.String("ef9de32e-c4e7-456d-ae8b-05f969d94848"),
                        Kind: sdk.String("unde"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("impedit"),
                    },
                },
                MetricNames: []string{
                    "minima",
                    "ullam",
                    "cum",
                },
                OverlapMetricNames: []string{
                    "beatae",
                    "magnam",
                    "illo",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment.ToPointer(),
                Message: sdk.String("et"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Jovany72@hotmail.com"),
                        Kind: sdk.String("magnam"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Vidal_Bauch@yahoo.com"),
                        Kind: sdk.String("tempora"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Billie.Bogan28@yahoo.com"),
                        Kind: sdk.String("enim"),
                    },
                },
            },
            Etag: sdk.String("consectetur"),
            FileName: sdk.String("perspiciatis"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("minima"),
                        Etag: sdk.String("nobis"),
                        ID: sdk.String("a77ee710-0b74-4456-af9e-c58b95c6f0b2"),
                        Kind: sdk.String("voluptatem"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("ullam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptatibus"),
                        Etag: sdk.String("impedit"),
                        ID: sdk.String("c0ee4a53-0600-4f13-8334-24f7a6004427"),
                        Kind: sdk.String("sapiente"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("aliquam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptatibus"),
                        Etag: sdk.String("omnis"),
                        ID: sdk.String("284e0025-b2dc-416b-9686-ff7551b22aab"),
                        Kind: sdk.String("ipsa"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("libero"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("eligendi"),
                        Etag: sdk.String("impedit"),
                        ID: sdk.String("82ae010b-5e4a-4698-b33e-47d71193ec17"),
                        Kind: sdk.String("magni"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("architecto"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-11-23"),
                    Kind: sdk.String("repellendus"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast365Days.ToPointer(),
                    StartDate: types.MustDateFromString("2021-02-14"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("dolor"),
                        Etag: sdk.String("eos"),
                        ID: sdk.String("6794b856-586a-4240-a987-247751c6593e"),
                        Kind: sdk.String("ipsum"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("nisi"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("velit"),
                        Etag: sdk.String("rem"),
                        ID: sdk.String("7837ebe6-02b2-47ad-a9b5-306e39443108"),
                        Kind: sdk.String("iusto"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("iusto"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("laboriosam"),
                        Name: sdk.String("Joyce Toy"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("illo"),
                        Name: sdk.String("Mamie Windler"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("dicta"),
                        Name: sdk.String("Stanley Hansen"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("eveniet"),
                    Etag: sdk.String("repellat"),
                    ID: sdk.String("cf584ac5-cc08-4d97-a199-553e2cc22c74"),
                    Kind: sdk.String("veniam"),
                    MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                    Value: sdk.String("aliquam"),
                },
                MetricNames: []string{
                    "adipisci",
                    "vitae",
                    "perferendis",
                    "soluta",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumCsv.ToPointer(),
            ID: sdk.String("soluta"),
            Kind: sdk.String("amet"),
            LastModifiedTime: sdk.String("dolorem"),
            Name: sdk.String("Miss Sheldon Zieme"),
            OwnerProfileID: sdk.String("excepturi"),
            PathAttributionCriteria: &shared.ReportPathAttributionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("quisquam"),
                        Etag: sdk.String("expedita"),
                        ID: sdk.String("09665afa-b9b3-464d-95d0-55f5fbbe3832"),
                        Kind: sdk.String("molestiae"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("illo"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("cumque"),
                    Kind: sdk.String("necessitatibus"),
                    Name: sdk.String("Angel Ledner"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("debitis"),
                                                Ids: []string{
                                                    "vitae",
                                                    "numquam",
                                                    "nesciunt",
                                                    "corrupti",
                                                },
                                                Kind: sdk.String("placeat"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "aperiam",
                                                    "doloremque",
                                                    "rem",
                                                    "unde",
                                                },
                                            },
                                            Kind: sdk.String("cumque"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("harum"),
                                                Kind: sdk.String("impedit"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "ex",
                                                    "neque",
                                                    "officia",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("illo"),
                                                Ids: []string{
                                                    "magni",
                                                },
                                                Kind: sdk.String("quas"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "eligendi",
                                                    "voluptas",
                                                },
                                            },
                                            Kind: sdk.String("neque"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("tempora"),
                                                Kind: sdk.String("iure"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "deserunt",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("deleniti"),
                                                Ids: []string{
                                                    "ea",
                                                    "optio",
                                                    "tempora",
                                                },
                                                Kind: sdk.String("quae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "quaerat",
                                                },
                                            },
                                            Kind: sdk.String("voluptate"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("est"),
                                                Kind: sdk.String("rem"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "rerum",
                                                    "laudantium",
                                                    "harum",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptas"),
                                                Ids: []string{
                                                    "doloremque",
                                                    "mollitia",
                                                    "pariatur",
                                                    "ea",
                                                },
                                                Kind: sdk.String("exercitationem"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "sapiente",
                                                    "similique",
                                                    "deserunt",
                                                },
                                            },
                                            Kind: sdk.String("facilis"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("consequatur"),
                                                Kind: sdk.String("cupiditate"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "doloremque",
                                                    "vero",
                                                    "nulla",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("maiores"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("eligendi"),
                                                Ids: []string{
                                                    "nobis",
                                                    "nesciunt",
                                                    "debitis",
                                                },
                                                Kind: sdk.String("officia"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "repellendus",
                                                    "cumque",
                                                    "nam",
                                                },
                                            },
                                            Kind: sdk.String("rem"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("officia"),
                                                Kind: sdk.String("repellendus"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "alias",
                                                    "totam",
                                                    "laudantium",
                                                    "fugiat",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quas"),
                                },
                            },
                            Kind: sdk.String("sunt"),
                            Name: sdk.String("Kathy Mitchell"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
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
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("magnam"),
                                                Kind: sdk.String("quae"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "beatae",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("excepturi"),
                                                Ids: []string{
                                                    "molestias",
                                                    "illo",
                                                },
                                                Kind: sdk.String("adipisci"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "itaque",
                                                },
                                            },
                                            Kind: sdk.String("dolorem"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("facilis"),
                                                Kind: sdk.String("voluptatum"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "quia",
                                                    "dolore",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("esse"),
                                },
                            },
                            Kind: sdk.String("aperiam"),
                            Name: sdk.String("Timothy Windler"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-02-09"),
                    Kind: sdk.String("itaque"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast14Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-04-26"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("recusandae"),
                        Name: sdk.String("Ms. Virginia Medhurst"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("assumenda"),
                    Etag: sdk.String("ea"),
                    ID: sdk.String("21825a45-2459-4d3e-8946-d2e2ef3eaf78"),
                    Kind: sdk.String("eius"),
                    MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                    Value: sdk.String("deserunt"),
                },
                MetricNames: []string{
                    "iste",
                    "expedita",
                    "fugit",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("cumque"),
                                    Ids: []string{
                                        "cum",
                                        "quaerat",
                                        "ab",
                                        "architecto",
                                    },
                                    Kind: sdk.String("placeat"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "illum",
                                    },
                                },
                                Kind: sdk.String("laborum"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("quam"),
                                    Kind: sdk.String("delectus"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "cupiditate",
                                        "iste",
                                        "voluptatibus",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("sed"),
                                    Ids: []string{
                                        "incidunt",
                                        "porro",
                                        "quibusdam",
                                    },
                                    Kind: sdk.String("laboriosam"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "labore",
                                        "tempora",
                                    },
                                },
                                Kind: sdk.String("nemo"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("numquam"),
                                    Kind: sdk.String("corrupti"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "laborum",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("deserunt"),
                                    Ids: []string{
                                        "quia",
                                    },
                                    Kind: sdk.String("doloremque"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "optio",
                                    },
                                },
                                Kind: sdk.String("deleniti"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("quia"),
                                    Kind: sdk.String("cupiditate"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "quibusdam",
                                        "odio",
                                        "in",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("molestias"),
                                    Ids: []string{
                                        "magnam",
                                    },
                                    Kind: sdk.String("odit"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "illum",
                                        "autem",
                                    },
                                },
                                Kind: sdk.String("blanditiis"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("sit"),
                                    Kind: sdk.String("iste"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "vero",
                                        "adipisci",
                                        "tempora",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("consequuntur"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("voluptatibus"),
                                    Ids: []string{
                                        "dolorem",
                                        "eveniet",
                                    },
                                    Kind: sdk.String("nam"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "tempore",
                                        "rem",
                                    },
                                },
                                Kind: sdk.String("qui"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("repudiandae"),
                                    Kind: sdk.String("officiis"),
                                    Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                    Values: []string{
                                        "totam",
                                        "ipsa",
                                        "assumenda",
                                        "necessitatibus",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("accusantium"),
                                    Ids: []string{
                                        "porro",
                                        "quidem",
                                        "assumenda",
                                    },
                                    Kind: sdk.String("assumenda"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "esse",
                                    },
                                },
                                Kind: sdk.String("nostrum"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("maxime"),
                                    Kind: sdk.String("maxime"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "atque",
                                        "animi",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("molestiae"),
                                    Ids: []string{
                                        "porro",
                                        "quo",
                                        "molestias",
                                        "omnis",
                                    },
                                    Kind: sdk.String("ab"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "magnam",
                                        "accusantium",
                                        "eum",
                                    },
                                },
                                Kind: sdk.String("magnam"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("impedit"),
                                    Kind: sdk.String("aspernatur"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "id",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("ducimus"),
                                    Ids: []string{
                                        "qui",
                                    },
                                    Kind: sdk.String("occaecati"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "beatae",
                                        "modi",
                                        "doloribus",
                                        "ab",
                                    },
                                },
                                Kind: sdk.String("perspiciatis"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("aut"),
                                    Kind: sdk.String("cupiditate"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "eaque",
                                        "iure",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("recusandae"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("ab"),
                                    Ids: []string{
                                        "ea",
                                        "deserunt",
                                        "ducimus",
                                        "voluptatem",
                                    },
                                    Kind: sdk.String("ipsam"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "inventore",
                                        "voluptate",
                                        "inventore",
                                        "vero",
                                    },
                                },
                                Kind: sdk.String("ipsa"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("pariatur"),
                                    Kind: sdk.String("sunt"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "odit",
                                        "excepturi",
                                        "accusantium",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("quo"),
                                    Ids: []string{
                                        "porro",
                                        "blanditiis",
                                    },
                                    Kind: sdk.String("magnam"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "in",
                                        "praesentium",
                                    },
                                },
                                Kind: sdk.String("pariatur"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("alias"),
                                    Kind: sdk.String("corporis"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "ducimus",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("accusantium"),
                                    Ids: []string{
                                        "distinctio",
                                        "consectetur",
                                        "totam",
                                    },
                                    Kind: sdk.String("quo"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "ducimus",
                                        "fuga",
                                    },
                                },
                                Kind: sdk.String("amet"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("laudantium"),
                                    Kind: sdk.String("expedita"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "voluptatum",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("dignissimos"),
                                    Ids: []string{
                                        "possimus",
                                        "veniam",
                                        "at",
                                        "exercitationem",
                                    },
                                    Kind: sdk.String("ea"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "harum",
                                        "ipsa",
                                    },
                                },
                                Kind: sdk.String("vitae"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("debitis"),
                                    Kind: sdk.String("quaerat"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "aliquid",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("consectetur"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("illo"),
                                    Ids: []string{
                                        "placeat",
                                        "ipsam",
                                        "cupiditate",
                                        "in",
                                    },
                                    Kind: sdk.String("occaecati"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "ipsam",
                                        "fugiat",
                                        "aliquam",
                                    },
                                },
                                Kind: sdk.String("alias"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("nemo"),
                                    Kind: sdk.String("architecto"),
                                    Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                    Values: []string{
                                        "animi",
                                        "laboriosam",
                                        "inventore",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("eos"),
                                    Ids: []string{
                                        "at",
                                        "consectetur",
                                        "a",
                                    },
                                    Kind: sdk.String("quidem"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "fugiat",
                                        "sapiente",
                                    },
                                },
                                Kind: sdk.String("adipisci"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("laboriosam"),
                                    Kind: sdk.String("delectus"),
                                    Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                    Values: []string{
                                        "earum",
                                        "excepturi",
                                        "accusantium",
                                        "facilis",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("unde"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                    },
                },
            },
            PathCriteria: &shared.ReportPathCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("id"),
                        Etag: sdk.String("consectetur"),
                        ID: sdk.String("a84f90bf-fc4e-4c03-8f16-6b2319ac8ceb"),
                        Kind: sdk.String("quia"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("exercitationem"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("iure"),
                        Etag: sdk.String("cupiditate"),
                        ID: sdk.String("218e6f08-3d17-4110-a88d-bc2073b1a414"),
                        Kind: sdk.String("quis"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("aperiam"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("rerum"),
                    Kind: sdk.String("sed"),
                    Name: sdk.String("Dawn Becker"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("incidunt"),
                                                Ids: []string{
                                                    "suscipit",
                                                    "ducimus",
                                                    "aperiam",
                                                    "quaerat",
                                                },
                                                Kind: sdk.String("quae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "accusamus",
                                                    "doloremque",
                                                    "esse",
                                                    "quas",
                                                },
                                            },
                                            Kind: sdk.String("natus"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("eaque"),
                                                Kind: sdk.String("quidem"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "odit",
                                                    "possimus",
                                                    "beatae",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dignissimos"),
                                                Ids: []string{
                                                    "eum",
                                                    "incidunt",
                                                    "eligendi",
                                                    "laboriosam",
                                                },
                                                Kind: sdk.String("corporis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "laudantium",
                                                },
                                            },
                                            Kind: sdk.String("facere"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("quam"),
                                                Kind: sdk.String("mollitia"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "quisquam",
                                                    "maiores",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dolor"),
                                                Ids: []string{
                                                    "dolorum",
                                                    "aspernatur",
                                                    "delectus",
                                                },
                                                Kind: sdk.String("exercitationem"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "voluptate",
                                                    "minus",
                                                    "vitae",
                                                },
                                            },
                                            Kind: sdk.String("fugiat"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("nihil"),
                                                Kind: sdk.String("provident"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "incidunt",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptas"),
                                                Ids: []string{
                                                    "quis",
                                                },
                                                Kind: sdk.String("earum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "sed",
                                                },
                                            },
                                            Kind: sdk.String("veritatis"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("eius"),
                                                Kind: sdk.String("voluptatum"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "quam",
                                                    "vero",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("consequuntur"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptatibus"),
                                                Ids: []string{
                                                    "eum",
                                                    "nobis",
                                                },
                                                Kind: sdk.String("saepe"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "vero",
                                                },
                                            },
                                            Kind: sdk.String("sint"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("at"),
                                                Kind: sdk.String("cum"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "placeat",
                                                    "est",
                                                    "harum",
                                                    "repellat",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quasi"),
                                                Ids: []string{
                                                    "iure",
                                                    "iste",
                                                    "dolores",
                                                },
                                                Kind: sdk.String("vero"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "incidunt",
                                                    "explicabo",
                                                    "sapiente",
                                                },
                                            },
                                            Kind: sdk.String("cumque"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("voluptates"),
                                                Kind: sdk.String("sed"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "dicta",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("labore"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("soluta"),
                                                Ids: []string{
                                                    "cupiditate",
                                                    "voluptates",
                                                },
                                                Kind: sdk.String("nostrum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "similique",
                                                    "quasi",
                                                    "hic",
                                                    "magnam",
                                                },
                                            },
                                            Kind: sdk.String("reiciendis"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("illum"),
                                                Kind: sdk.String("reiciendis"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "minima",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("beatae"),
                                                Ids: []string{
                                                    "aut",
                                                    "eveniet",
                                                    "veniam",
                                                },
                                                Kind: sdk.String("delectus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "molestias",
                                                },
                                            },
                                            Kind: sdk.String("tenetur"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("delectus"),
                                                Kind: sdk.String("sapiente"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "eum",
                                                    "perferendis",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("blanditiis"),
                                                Ids: []string{
                                                    "beatae",
                                                    "impedit",
                                                },
                                                Kind: sdk.String("porro"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "velit",
                                                    "ipsam",
                                                    "dicta",
                                                },
                                            },
                                            Kind: sdk.String("iste"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("accusantium"),
                                                Kind: sdk.String("repudiandae"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "perspiciatis",
                                                    "a",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("vero"),
                                                Ids: []string{
                                                    "sunt",
                                                },
                                                Kind: sdk.String("natus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "sint",
                                                    "quas",
                                                    "temporibus",
                                                },
                                            },
                                            Kind: sdk.String("voluptas"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("iusto"),
                                                Kind: sdk.String("accusantium"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "praesentium",
                                                    "nihil",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("molestiae"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("fuga"),
                                                Ids: []string{
                                                    "hic",
                                                    "aliquid",
                                                    "nemo",
                                                },
                                                Kind: sdk.String("maxime"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "ullam",
                                                    "dolore",
                                                    "quas",
                                                    "neque",
                                                },
                                            },
                                            Kind: sdk.String("voluptates"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("soluta"),
                                                Kind: sdk.String("minima"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "aliquid",
                                                    "cumque",
                                                    "qui",
                                                    "libero",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("incidunt"),
                                },
                            },
                            Kind: sdk.String("maxime"),
                            Name: sdk.String("Kay Denesik"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ut"),
                                                Ids: []string{
                                                    "ut",
                                                    "sed",
                                                    "voluptatum",
                                                },
                                                Kind: sdk.String("soluta"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "veritatis",
                                                    "nesciunt",
                                                },
                                            },
                                            Kind: sdk.String("esse"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("ipsam"),
                                                Kind: sdk.String("quis"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "autem",
                                                    "debitis",
                                                    "doloremque",
                                                    "omnis",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("cupiditate"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("illum"),
                                                Ids: []string{
                                                    "quo",
                                                    "consectetur",
                                                    "ullam",
                                                },
                                                Kind: sdk.String("eligendi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "a",
                                                    "nemo",
                                                },
                                            },
                                            Kind: sdk.String("iste"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("quibusdam"),
                                                Kind: sdk.String("magnam"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "aperiam",
                                                    "aperiam",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("sit"),
                                                Ids: []string{
                                                    "tempore",
                                                },
                                                Kind: sdk.String("perferendis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "repellat",
                                                },
                                            },
                                            Kind: sdk.String("quasi"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("asperiores"),
                                                Kind: sdk.String("dolorem"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "non",
                                                    "iste",
                                                    "maxime",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ex"),
                                                Ids: []string{
                                                    "earum",
                                                    "hic",
                                                    "voluptates",
                                                },
                                                Kind: sdk.String("ipsum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "impedit",
                                                    "perspiciatis",
                                                    "architecto",
                                                    "quos",
                                                },
                                            },
                                            Kind: sdk.String("quam"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("error"),
                                                Kind: sdk.String("id"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "ipsam",
                                                    "doloremque",
                                                    "accusamus",
                                                    "sed",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("animi"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("pariatur"),
                                                Ids: []string{
                                                    "labore",
                                                    "laboriosam",
                                                    "illo",
                                                    "repellendus",
                                                },
                                                Kind: sdk.String("aspernatur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "placeat",
                                                    "dignissimos",
                                                },
                                            },
                                            Kind: sdk.String("praesentium"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("ratione"),
                                                Kind: sdk.String("officiis"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "quo",
                                                    "officia",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("expedita"),
                                                Ids: []string{
                                                    "libero",
                                                },
                                                Kind: sdk.String("harum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "soluta",
                                                    "nihil",
                                                    "officiis",
                                                },
                                            },
                                            Kind: sdk.String("repellat"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("officia"),
                                                Kind: sdk.String("eveniet"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "quas",
                                                    "saepe",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("est"),
                                                Ids: []string{
                                                    "molestiae",
                                                    "repudiandae",
                                                    "quos",
                                                },
                                                Kind: sdk.String("quaerat"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "repellat",
                                                    "quam",
                                                    "aperiam",
                                                },
                                            },
                                            Kind: sdk.String("fugit"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("corrupti"),
                                                Kind: sdk.String("minus"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "itaque",
                                                    "perferendis",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quia"),
                                                Ids: []string{
                                                    "possimus",
                                                    "sequi",
                                                    "explicabo",
                                                },
                                                Kind: sdk.String("asperiores"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "debitis",
                                                    "rerum",
                                                    "soluta",
                                                    "omnis",
                                                },
                                            },
                                            Kind: sdk.String("tenetur"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("non"),
                                                Kind: sdk.String("unde"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "minima",
                                                    "pariatur",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("eos"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("impedit"),
                                                Ids: []string{
                                                    "inventore",
                                                    "voluptatum",
                                                    "mollitia",
                                                    "quibusdam",
                                                },
                                                Kind: sdk.String("debitis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "repudiandae",
                                                    "odio",
                                                    "amet",
                                                    "cumque",
                                                },
                                            },
                                            Kind: sdk.String("porro"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("itaque"),
                                                Kind: sdk.String("alias"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "reprehenderit",
                                                    "a",
                                                    "praesentium",
                                                    "earum",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("fuga"),
                                                Ids: []string{
                                                    "repudiandae",
                                                    "eos",
                                                    "suscipit",
                                                },
                                                Kind: sdk.String("illo"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "mollitia",
                                                    "deleniti",
                                                    "cupiditate",
                                                },
                                            },
                                            Kind: sdk.String("nihil"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("iusto"),
                                                Kind: sdk.String("architecto"),
                                                Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                                Values: []string{
                                                    "atque",
                                                    "libero",
                                                    "quisquam",
                                                    "vero",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("aliquam"),
                                                Ids: []string{
                                                    "officia",
                                                    "natus",
                                                },
                                                Kind: sdk.String("rem"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "maiores",
                                                },
                                            },
                                            Kind: sdk.String("esse"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("laboriosam"),
                                                Kind: sdk.String("optio"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "provident",
                                                    "numquam",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("enim"),
                                },
                            },
                            Kind: sdk.String("quia"),
                            Name: sdk.String("Kristine Herman"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("exercitationem"),
                                                Ids: []string{
                                                    "perspiciatis",
                                                },
                                                Kind: sdk.String("impedit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "deserunt",
                                                    "minima",
                                                },
                                            },
                                            Kind: sdk.String("aliquid"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("voluptas"),
                                                Kind: sdk.String("amet"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "quaerat",
                                                    "quis",
                                                    "dolores",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("illo"),
                                                Ids: []string{
                                                    "voluptates",
                                                    "voluptatum",
                                                },
                                                Kind: sdk.String("exercitationem"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "cumque",
                                                    "asperiores",
                                                    "voluptatum",
                                                },
                                            },
                                            Kind: sdk.String("inventore"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("voluptas"),
                                                Kind: sdk.String("iste"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "suscipit",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("tempore"),
                                                Ids: []string{
                                                    "non",
                                                    "eos",
                                                    "vero",
                                                },
                                                Kind: sdk.String("necessitatibus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "modi",
                                                    "ex",
                                                    "inventore",
                                                },
                                            },
                                            Kind: sdk.String("minus"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("veritatis"),
                                                Kind: sdk.String("aspernatur"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "cum",
                                                    "perferendis",
                                                    "cum",
                                                    "nisi",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("in"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptates"),
                                                Ids: []string{
                                                    "perspiciatis",
                                                },
                                                Kind: sdk.String("est"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "a",
                                                    "inventore",
                                                    "architecto",
                                                    "consequatur",
                                                },
                                            },
                                            Kind: sdk.String("quasi"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("facilis"),
                                                Kind: sdk.String("aspernatur"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "commodi",
                                                    "aliquid",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("nostrum"),
                                                Ids: []string{
                                                    "exercitationem",
                                                    "rerum",
                                                    "temporibus",
                                                },
                                                Kind: sdk.String("porro"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "minus",
                                                },
                                            },
                                            Kind: sdk.String("aliquam"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("odit"),
                                                Kind: sdk.String("error"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "atque",
                                                    "atque",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("temporibus"),
                                                Ids: []string{
                                                    "fugit",
                                                    "nostrum",
                                                },
                                                Kind: sdk.String("fugit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "eos",
                                                },
                                            },
                                            Kind: sdk.String("totam"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("ratione"),
                                                Kind: sdk.String("reprehenderit"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "vitae",
                                                    "incidunt",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quia"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quo"),
                                                Ids: []string{
                                                    "amet",
                                                },
                                                Kind: sdk.String("necessitatibus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "fuga",
                                                    "eligendi",
                                                },
                                            },
                                            Kind: sdk.String("architecto"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("quia"),
                                                Kind: sdk.String("libero"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "numquam",
                                                    "minus",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("alias"),
                                                Ids: []string{
                                                    "quo",
                                                    "commodi",
                                                    "provident",
                                                },
                                                Kind: sdk.String("aut"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "perspiciatis",
                                                },
                                            },
                                            Kind: sdk.String("minus"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("consectetur"),
                                                Kind: sdk.String("aperiam"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "consequatur",
                                                    "sed",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("eveniet"),
                                                Ids: []string{
                                                    "iure",
                                                    "quo",
                                                },
                                                Kind: sdk.String("magni"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "iste",
                                                },
                                            },
                                            Kind: sdk.String("porro"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("quasi"),
                                                Kind: sdk.String("nostrum"),
                                                Match: shared.UvarFilterMatchEnumContains.ToPointer(),
                                                Values: []string{
                                                    "assumenda",
                                                    "voluptatum",
                                                },
                                            },
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("velit"),
                                                Ids: []string{
                                                    "velit",
                                                    "natus",
                                                },
                                                Kind: sdk.String("sint"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "nemo",
                                                    "quibusdam",
                                                },
                                            },
                                            Kind: sdk.String("voluptatibus"),
                                            UvarFilter: &shared.UvarFilter{
                                                Complement: sdk.Bool(false),
                                                Index: sdk.String("consequuntur"),
                                                Kind: sdk.String("neque"),
                                                Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                                Values: []string{
                                                    "est",
                                                    "vitae",
                                                },
                                            },
                                        },
                                    },
                                    Kind: sdk.String("sequi"),
                                },
                            },
                            Kind: sdk.String("blanditiis"),
                            Name: sdk.String("Vicki Pouros"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-03-24"),
                    Kind: sdk.String("rerum"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumWeekToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-06-05"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("magnam"),
                        Name: sdk.String("Catherine West"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("odit"),
                        Name: sdk.String("Elena Schamberger"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("velit"),
                    Etag: sdk.String("sit"),
                    ID: sdk.String("cc55a88c-8734-42d7-aeb0-090092c228ef"),
                    Kind: sdk.String("voluptates"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("minus"),
                },
                MetricNames: []string{
                    "mollitia",
                    "nesciunt",
                    "nemo",
                    "consectetur",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("earum"),
                                    Ids: []string{
                                        "ut",
                                        "hic",
                                    },
                                    Kind: sdk.String("qui"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "maiores",
                                        "perspiciatis",
                                        "iure",
                                        "a",
                                    },
                                },
                                Kind: sdk.String("voluptatem"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("assumenda"),
                                    Kind: sdk.String("eaque"),
                                    Match: shared.UvarFilterMatchEnumUnspecified.ToPointer(),
                                    Values: []string{
                                        "est",
                                        "ullam",
                                    },
                                },
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("omnis"),
                                    Ids: []string{
                                        "aliquid",
                                    },
                                    Kind: sdk.String("molestias"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "voluptatum",
                                        "quos",
                                        "quae",
                                    },
                                },
                                Kind: sdk.String("modi"),
                                UvarFilter: &shared.UvarFilter{
                                    Complement: sdk.Bool(false),
                                    Index: sdk.String("eos"),
                                    Kind: sdk.String("cumque"),
                                    Match: shared.UvarFilterMatchEnumExact.ToPointer(),
                                    Values: []string{
                                        "doloremque",
                                        "corporis",
                                        "placeat",
                                        "harum",
                                    },
                                },
                            },
                        },
                        Kind: sdk.String("nisi"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                },
            },
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("amet"),
                        Etag: sdk.String("quibusdam"),
                        ID: sdk.String("21d28cce-60e0-4a7f-a3f8-72b25b23bc78"),
                        Kind: sdk.String("excepturi"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("maxime"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("ullam"),
                        Name: sdk.String("Julio McCullough"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("libero"),
                        Name: sdk.String("Abraham Kihn"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("molestiae"),
                        Name: sdk.String("Veronica Pacocha"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("atque"),
                        Name: sdk.String("Lila Lang"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("iure"),
                        Name: sdk.String("Cindy Abshire"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("doloribus"),
                        Name: sdk.String("Irving Quigley"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("sint"),
                        Etag: sdk.String("dolorem"),
                        ID: sdk.String("9b6e2fae-0d3c-40f7-85b6-b971f4a37e8b"),
                        Kind: sdk.String("accusamus"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("blanditiis"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-03-12"),
                    Kind: sdk.String("dignissimos"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast24Months.ToPointer(),
                    StartDate: types.MustDateFromString("2021-03-27"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("tempore"),
                    Etag: sdk.String("repudiandae"),
                    ID: sdk.String("549691e4-19db-4622-9472-7174670baf23"),
                    Kind: sdk.String("minima"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("quibusdam"),
                },
                MetricNames: []string{
                    "itaque",
                    "cum",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("assumenda"),
                        Name: sdk.String("Peggy Towne"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(71669),
                    ImpressionsLookbackWindow: sdk.Int(368510),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(883393),
                    MaximumImpressionInteractions: sdk.Int(324973),
                    MaximumInteractionGap: sdk.Int(393074),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("quae"),
                            Etag: sdk.String("rerum"),
                            ID: sdk.String("27c08bb3-aa9e-4368-84e1-48b35fdea245"),
                            Kind: sdk.String("aspernatur"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("consequuntur"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("nihil"),
                            Etag: sdk.String("quo"),
                            ID: sdk.String("11f29952-50c3-4a45-aebd-c1a08d157011"),
                            Kind: sdk.String("repellendus"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("dolore"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("facere"),
                            Etag: sdk.String("ex"),
                            ID: sdk.String("b0564ad7-2d66-4ef7-95c8-2d375926180c"),
                            Kind: sdk.String("commodi"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("accusantium"),
                        },
                    },
                    Kind: sdk.String("ducimus"),
                    MetricNames: []string{
                        "nihil",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("quo"),
                            Etag: sdk.String("ducimus"),
                            ID: sdk.String("316e4217-9daf-412e-b914-90c8559f5f47"),
                            Kind: sdk.String("veniam"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("mollitia"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("occaecati"),
                            Etag: sdk.String("natus"),
                            ID: sdk.String("1e4d2959-483a-4c6d-b70c-212c299b021e"),
                            Kind: sdk.String("explicabo"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("maxime"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("aspernatur"),
                            Etag: sdk.String("quibusdam"),
                            ID: sdk.String("cac68b4d-155a-49bb-ae09-716ae01cf7ba"),
                            Kind: sdk.String("voluptates"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("dolorem"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("magnam"),
                            Etag: sdk.String("id"),
                            ID: sdk.String("834cb066-44ec-42e2-87dc-21ada0a1b7e7"),
                            Kind: sdk.String("quaerat"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("iure"),
                        },
                    },
                    Kind: sdk.String("earum"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-11-02"),
                    Kind: sdk.String("ducimus"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumToday.ToPointer(),
                    StartDate: types.MustDateFromString("2022-04-05"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("qui"),
                        Etag: sdk.String("maxime"),
                        ID: sdk.String("b8850bdd-84ce-476d-9d98-2be5cd13efe5"),
                        Kind: sdk.String("similique"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("earum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("nesciunt"),
                        Etag: sdk.String("impedit"),
                        ID: sdk.String("1b3ef4f4-017c-4ae1-b5d4-d874b66440fd"),
                        Kind: sdk.String("autem"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("nulla"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("delectus"),
                        Etag: sdk.String("unde"),
                        ID: sdk.String("b5c61df3-4701-4940-a35f-b96c7077962c"),
                        Kind: sdk.String("veritatis"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("tenetur"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("aliquid"),
                        Etag: sdk.String("labore"),
                        ID: sdk.String("0c582ae0-eafd-45c5-8b0b-7848839367c0"),
                        Kind: sdk.String("exercitationem"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("amet"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("similique"),
                        Name: sdk.String("Ann Gleason"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ipsa"),
                        Name: sdk.String("Bethany Bosco"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("expedita"),
                        Name: sdk.String("Alonzo Paucek"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "natus",
                    "sed",
                    "vitae",
                },
                ReachByFrequencyMetricNames: []string{
                    "et",
                    "molestiae",
                    "eius",
                    "temporibus",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(667582),
                ExpirationDate: types.MustDateFromString("2022-11-18"),
                Repeats: sdk.String("magnam"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumWednesday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSaturday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumWeekOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2022-07-26"),
                Timezone: sdk.String("optio"),
            },
            SubAccountID: sdk.String("minus"),
            Type: shared.ReportTypeEnumStandard.ToPointer(),
        },
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("autem"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nesciunt",
        QuotaUser: sdk.String("perferendis"),
        ReportID: "labore",
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("asperiores"),
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
