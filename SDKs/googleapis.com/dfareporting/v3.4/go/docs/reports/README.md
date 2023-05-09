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
            AccountID: sdk.String("quo"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("voluptatum"),
                            Etag: sdk.String("excepturi"),
                            ID: sdk.String("d3861186-ed76-4c00-afac-b13ac24c8143"),
                            Kind: sdk.String("quidem"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("voluptas"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("suscipit"),
                            Etag: sdk.String("optio"),
                            ID: sdk.String("575a1e26-6873-40be-b7b0-e8fbc48ddc7e"),
                            Kind: sdk.String("voluptas"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("rerum"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("ipsam"),
                            Etag: sdk.String("neque"),
                            ID: sdk.String("51050501-4dca-4105-8824-84c36e948892"),
                            Kind: sdk.String("iusto"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("magni"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("assumenda"),
                            Etag: sdk.String("adipisci"),
                            ID: sdk.String("4e0b8fc0-d59f-457b-9f98-20be07808c36"),
                            Kind: sdk.String("nobis"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("necessitatibus"),
                        },
                    },
                    Kind: sdk.String("consequuntur"),
                    MetricNames: []string{
                        "esse",
                        "sit",
                        "adipisci",
                        "quaerat",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("recusandae"),
                            Etag: sdk.String("accusantium"),
                            ID: sdk.String("0f478eb5-3948-43f7-88ee-fccb69d541b4"),
                            Kind: sdk.String("tempore"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("sint"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("amet"),
                            Etag: sdk.String("voluptatibus"),
                            ID: sdk.String("3566625b-ea32-4201-9ec3-79c598ea1d48"),
                            Kind: sdk.String("porro"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("placeat"),
                        },
                    },
                    Kind: sdk.String("eos"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-03-07"),
                    Kind: sdk.String("itaque"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumWeekToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-02-22"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptatem"),
                        Etag: sdk.String("earum"),
                        ID: sdk.String("d53776bf-c767-47f0-b504-a6e4828fb6da"),
                        Kind: sdk.String("repudiandae"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("architecto"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("sint"),
                        Etag: sdk.String("cumque"),
                        ID: sdk.String("26c0cb61-8c63-431c-abda-b767a444dd0d"),
                        Kind: sdk.String("culpa"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("animi"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("distinctio"),
                        Etag: sdk.String("itaque"),
                        ID: sdk.String("58eb3d54-ba1c-4b3a-949b-8e5c18b25e87"),
                        Kind: sdk.String("maiores"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("incidunt"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("aspernatur"),
                        Name: sdk.String("Christina Hauck"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("molestias"),
                        Name: sdk.String("Jacquelyn Beahan"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("tempore"),
                        Name: sdk.String("Bernadette O'Conner"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "quos",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("in"),
                        Name: sdk.String("Carole Ankunding"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("dolores"),
                        Name: sdk.String("Frank Keeling"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("qui"),
                        Name: sdk.String("Bennie Hilll III"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("similique"),
                        Name: sdk.String("Helen Kunde"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2020-10-14"),
                    Kind: sdk.String("totam"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast30Days.ToPointer(),
                    StartDate: types.MustDateFromString("2021-09-17"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumSiteByAdvertiser.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("perspiciatis"),
                        Etag: sdk.String("possimus"),
                        ID: sdk.String("2b994043-63a0-4964-8053-876e39def9c7"),
                        Kind: sdk.String("suscipit"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("temporibus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("reiciendis"),
                        Etag: sdk.String("fugiat"),
                        ID: sdk.String("7354e5cb-9497-4701-ba26-204bb26ca4e9"),
                        Kind: sdk.String("natus"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("quos"),
                    },
                },
                MetricNames: []string{
                    "voluptatum",
                },
                OverlapMetricNames: []string{
                    "iste",
                    "possimus",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment.ToPointer(),
                Message: sdk.String("reiciendis"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Caden.Franecki@hotmail.com"),
                        Kind: sdk.String("alias"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Wyatt67@hotmail.com"),
                        Kind: sdk.String("facere"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Lavonne64@yahoo.com"),
                        Kind: sdk.String("consectetur"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Audra_Harvey@yahoo.com"),
                        Kind: sdk.String("possimus"),
                    },
                },
            },
            Etag: sdk.String("laborum"),
            FileName: sdk.String("voluptatem"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("eius"),
                        Etag: sdk.String("a"),
                        ID: sdk.String("aaed6e13-a620-4e2e-918c-75b0486cf398"),
                        Kind: sdk.String("fuga"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("soluta"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("nesciunt"),
                        Etag: sdk.String("in"),
                        ID: sdk.String("4617dd95-ce30-444b-a4eb-3b31cb503c31"),
                        Kind: sdk.String("aliquam"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("repellendus"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-02-01"),
                    Kind: sdk.String("iusto"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumWeekToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2021-11-20"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("ad"),
                        Etag: sdk.String("itaque"),
                        ID: sdk.String("1dd6bf64-b454-4e98-b1e7-95f0e57f54eb"),
                        Kind: sdk.String("delectus"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("pariatur"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("tempore"),
                        Name: sdk.String("Kristen Ankunding"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("reiciendis"),
                    Etag: sdk.String("est"),
                    ID: sdk.String("44a8dff4-0cdd-4185-8bf5-a0cbc8b7860a"),
                    Kind: sdk.String("voluptatibus"),
                    MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                    Value: sdk.String("similique"),
                },
                MetricNames: []string{
                    "nobis",
                    "laboriosam",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumCsv.ToPointer(),
            ID: sdk.String("corporis"),
            Kind: sdk.String("ab"),
            LastModifiedTime: sdk.String("nesciunt"),
            Name: sdk.String("Estelle Hintz V"),
            OwnerProfileID: sdk.String("voluptas"),
            PathAttributionCriteria: &shared.ReportPathAttributionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("illo"),
                        Etag: sdk.String("sit"),
                        ID: sdk.String("a856a19d-4665-4ba9-b259-875dc0cecbc7"),
                        Kind: sdk.String("atque"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("possimus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("fugit"),
                        Etag: sdk.String("modi"),
                        ID: sdk.String("8ec6e8b2-40b1-4c06-89c0-649d2bdd9e58"),
                        Kind: sdk.String("fugiat"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("expedita"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("et"),
                        Etag: sdk.String("autem"),
                        ID: sdk.String("65c312c7-f550-4d47-a1c1-76292dd7878e"),
                        Kind: sdk.String("in"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("soluta"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("delectus"),
                        Etag: sdk.String("quos"),
                        ID: sdk.String("c141841f-e1f8-47ea-903a-9806ea160639"),
                        Kind: sdk.String("iste"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("hic"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("beatae"),
                    Kind: sdk.String("iusto"),
                    Name: sdk.String("Casey Cartwright"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("laborum"),
                                                Ids: []string{
                                                    "veniam",
                                                    "expedita",
                                                    "impedit",
                                                },
                                                Kind: sdk.String("totam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "accusamus",
                                                    "id",
                                                    "reprehenderit",
                                                    "dignissimos",
                                                },
                                            },
                                            Kind: sdk.String("doloribus"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quibusdam"),
                                                Ids: []string{
                                                    "cupiditate",
                                                    "dolor",
                                                    "illo",
                                                },
                                                Kind: sdk.String("debitis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "quibusdam",
                                                    "quasi",
                                                    "aperiam",
                                                },
                                            },
                                            Kind: sdk.String("aliquid"),
                                        },
                                    },
                                    Kind: sdk.String("impedit"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("maiores"),
                                                Ids: []string{
                                                    "quisquam",
                                                },
                                                Kind: sdk.String("dolores"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "distinctio",
                                                    "corrupti",
                                                    "dolore",
                                                },
                                            },
                                            Kind: sdk.String("doloremque"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("animi"),
                                                Ids: []string{
                                                    "totam",
                                                },
                                                Kind: sdk.String("repudiandae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "commodi",
                                                },
                                            },
                                            Kind: sdk.String("ducimus"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quia"),
                                                Ids: []string{
                                                    "autem",
                                                    "soluta",
                                                    "molestiae",
                                                    "neque",
                                                },
                                                Kind: sdk.String("dolorum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "maxime",
                                                    "deserunt",
                                                },
                                            },
                                            Kind: sdk.String("labore"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("consectetur"),
                                                Ids: []string{
                                                    "cumque",
                                                    "quibusdam",
                                                },
                                                Kind: sdk.String("nam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "tempora",
                                                },
                                            },
                                            Kind: sdk.String("provident"),
                                        },
                                    },
                                    Kind: sdk.String("fuga"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("molestias"),
                                                Ids: []string{
                                                    "qui",
                                                    "quis",
                                                    "sed",
                                                    "perferendis",
                                                },
                                                Kind: sdk.String("nihil"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "sunt",
                                                    "praesentium",
                                                    "mollitia",
                                                },
                                            },
                                            Kind: sdk.String("magnam"),
                                        },
                                    },
                                    Kind: sdk.String("tempore"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("nulla"),
                                                Ids: []string{
                                                    "officiis",
                                                    "repellendus",
                                                    "quaerat",
                                                },
                                                Kind: sdk.String("quidem"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "voluptatibus",
                                                    "consequatur",
                                                    "eum",
                                                    "sunt",
                                                },
                                            },
                                            Kind: sdk.String("ex"),
                                        },
                                    },
                                    Kind: sdk.String("accusamus"),
                                },
                            },
                            Kind: sdk.String("recusandae"),
                            Name: sdk.String("Sean Crona"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("soluta"),
                                                Ids: []string{
                                                    "iure",
                                                    "doloremque",
                                                    "pariatur",
                                                    "officia",
                                                },
                                                Kind: sdk.String("est"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "quae",
                                                    "eius",
                                                    "unde",
                                                    "placeat",
                                                },
                                            },
                                            Kind: sdk.String("pariatur"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dicta"),
                                                Ids: []string{
                                                    "quod",
                                                    "assumenda",
                                                    "illum",
                                                    "ipsum",
                                                },
                                                Kind: sdk.String("ea"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "quidem",
                                                    "reiciendis",
                                                    "sint",
                                                },
                                            },
                                            Kind: sdk.String("qui"),
                                        },
                                    },
                                    Kind: sdk.String("amet"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("alias"),
                                                Ids: []string{
                                                    "illo",
                                                },
                                                Kind: sdk.String("quis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "laboriosam",
                                                },
                                            },
                                            Kind: sdk.String("deleniti"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("excepturi"),
                                                Ids: []string{
                                                    "optio",
                                                    "asperiores",
                                                    "numquam",
                                                },
                                                Kind: sdk.String("delectus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "cum",
                                                    "excepturi",
                                                    "expedita",
                                                    "officiis",
                                                },
                                            },
                                            Kind: sdk.String("impedit"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ullam"),
                                                Ids: []string{
                                                    "nesciunt",
                                                },
                                                Kind: sdk.String("beatae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "voluptatum",
                                                    "vitae",
                                                    "eveniet",
                                                },
                                            },
                                            Kind: sdk.String("expedita"),
                                        },
                                    },
                                    Kind: sdk.String("consequatur"),
                                },
                            },
                            Kind: sdk.String("beatae"),
                            Name: sdk.String("Jesse Mohr"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("incidunt"),
                                                Ids: []string{
                                                    "suscipit",
                                                    "culpa",
                                                },
                                                Kind: sdk.String("quas"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "repudiandae",
                                                    "nostrum",
                                                },
                                            },
                                            Kind: sdk.String("perferendis"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("rem"),
                                                Ids: []string{
                                                    "maxime",
                                                    "praesentium",
                                                    "id",
                                                },
                                                Kind: sdk.String("ratione"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "dolorem",
                                                    "magnam",
                                                },
                                            },
                                            Kind: sdk.String("beatae"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("laborum"),
                                                Ids: []string{
                                                    "eligendi",
                                                    "quod",
                                                    "impedit",
                                                    "culpa",
                                                },
                                                Kind: sdk.String("nisi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "facere",
                                                },
                                            },
                                            Kind: sdk.String("dolore"),
                                        },
                                    },
                                    Kind: sdk.String("officia"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ad"),
                                                Ids: []string{
                                                    "corporis",
                                                    "minus",
                                                    "dicta",
                                                },
                                                Kind: sdk.String("distinctio"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "quidem",
                                                },
                                            },
                                            Kind: sdk.String("soluta"),
                                        },
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
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ea"),
                                                Ids: []string{
                                                    "exercitationem",
                                                    "expedita",
                                                    "repudiandae",
                                                },
                                                Kind: sdk.String("odio"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "doloremque",
                                                    "vel",
                                                    "expedita",
                                                },
                                            },
                                            Kind: sdk.String("excepturi"),
                                        },
                                    },
                                    Kind: sdk.String("vel"),
                                },
                            },
                            Kind: sdk.String("quisquam"),
                            Name: sdk.String("Robin Kassulke"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-03-02"),
                    Kind: sdk.String("fugit"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousQuarter.ToPointer(),
                    StartDate: types.MustDateFromString("2022-05-17"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("et"),
                        Name: sdk.String("Miss Velma Murphy"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("veritatis"),
                        Name: sdk.String("Claire Langosh"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("minima"),
                        Name: sdk.String("Julio Kautzer"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("quos"),
                    Etag: sdk.String("iusto"),
                    ID: sdk.String("113de406-1082-4d09-93c8-9cd927a5ba55"),
                    Kind: sdk.String("vitae"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("soluta"),
                },
                MetricNames: []string{
                    "totam",
                    "ipsum",
                    "nihil",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("iste"),
                                    Ids: []string{
                                        "rem",
                                        "dolore",
                                    },
                                    Kind: sdk.String("voluptatibus"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "tempora",
                                    },
                                },
                                Kind: sdk.String("eum"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("incidunt"),
                                    Ids: []string{
                                        "neque",
                                        "sequi",
                                    },
                                    Kind: sdk.String("architecto"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "minima",
                                        "rerum",
                                        "voluptates",
                                        "suscipit",
                                    },
                                },
                                Kind: sdk.String("veritatis"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("nam"),
                                    Ids: []string{
                                        "sapiente",
                                    },
                                    Kind: sdk.String("dolorem"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "odio",
                                    },
                                },
                                Kind: sdk.String("dolores"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("voluptatum"),
                                    Ids: []string{
                                        "modi",
                                        "minus",
                                    },
                                    Kind: sdk.String("non"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "placeat",
                                        "blanditiis",
                                    },
                                },
                                Kind: sdk.String("possimus"),
                            },
                        },
                        Kind: sdk.String("labore"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                },
            },
            PathCriteria: &shared.ReportPathCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptates"),
                        Etag: sdk.String("impedit"),
                        ID: sdk.String("6bd2cad0-06d7-47c6-abbb-c9e9744c5b64"),
                        Kind: sdk.String("enim"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("aliquam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("est"),
                        Etag: sdk.String("maiores"),
                        ID: sdk.String("2fcabccb-ca32-4925-ab06-a6cabe22a11f"),
                        Kind: sdk.String("quam"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("animi"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("nihil"),
                        Etag: sdk.String("ipsam"),
                        ID: sdk.String("d8ff4452-bed7-4470-bc48-c282b8716c27"),
                        Kind: sdk.String("doloribus"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("libero"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("et"),
                    Kind: sdk.String("voluptate"),
                    Name: sdk.String("Mr. Stella Lindgren II"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("error"),
                                                Ids: []string{
                                                    "magni",
                                                    "expedita",
                                                    "magnam",
                                                    "dolorum",
                                                },
                                                Kind: sdk.String("temporibus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "exercitationem",
                                                },
                                            },
                                            Kind: sdk.String("ut"),
                                        },
                                    },
                                    Kind: sdk.String("voluptatibus"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("eveniet"),
                                                Ids: []string{
                                                    "molestiae",
                                                },
                                                Kind: sdk.String("molestiae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "consectetur",
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
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dolorum"),
                                                Ids: []string{
                                                    "quidem",
                                                    "esse",
                                                },
                                                Kind: sdk.String("debitis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "porro",
                                                    "commodi",
                                                    "alias",
                                                    "doloremque",
                                                },
                                            },
                                            Kind: sdk.String("perspiciatis"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("sapiente"),
                                                Ids: []string{
                                                    "sunt",
                                                },
                                                Kind: sdk.String("temporibus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "atque",
                                                },
                                            },
                                            Kind: sdk.String("veniam"),
                                        },
                                    },
                                    Kind: sdk.String("sed"),
                                },
                            },
                            Kind: sdk.String("consectetur"),
                            Name: sdk.String("Dewey Okuneva"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("iste"),
                                                Ids: []string{
                                                    "pariatur",
                                                    "laudantium",
                                                    "sequi",
                                                    "repellat",
                                                },
                                                Kind: sdk.String("totam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "asperiores",
                                                    "iste",
                                                    "quidem",
                                                    "aut",
                                                },
                                            },
                                            Kind: sdk.String("minus"),
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
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("qui"),
                                                Ids: []string{
                                                    "ipsam",
                                                },
                                                Kind: sdk.String("nulla"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "odio",
                                                    "laboriosam",
                                                    "veniam",
                                                    "libero",
                                                },
                                            },
                                            Kind: sdk.String("delectus"),
                                        },
                                    },
                                    Kind: sdk.String("a"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("eligendi"),
                                                Ids: []string{
                                                    "rem",
                                                    "commodi",
                                                    "aperiam",
                                                },
                                                Kind: sdk.String("quasi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "magni",
                                                    "veritatis",
                                                    "aliquid",
                                                    "est",
                                                },
                                            },
                                            Kind: sdk.String("fuga"),
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
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("odit"),
                                                Ids: []string{
                                                    "odio",
                                                    "officia",
                                                },
                                                Kind: sdk.String("totam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "beatae",
                                                },
                                            },
                                            Kind: sdk.String("esse"),
                                        },
                                    },
                                    Kind: sdk.String("hic"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("illum"),
                                                Ids: []string{
                                                    "commodi",
                                                    "qui",
                                                    "possimus",
                                                },
                                                Kind: sdk.String("a"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "itaque",
                                                    "recusandae",
                                                    "dignissimos",
                                                    "porro",
                                                },
                                            },
                                            Kind: sdk.String("consectetur"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("molestias"),
                                                Ids: []string{
                                                    "quo",
                                                    "in",
                                                },
                                                Kind: sdk.String("natus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "officiis",
                                                },
                                            },
                                            Kind: sdk.String("dicta"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("harum"),
                                                Ids: []string{
                                                    "culpa",
                                                },
                                                Kind: sdk.String("quos"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "impedit",
                                                    "earum",
                                                    "eum",
                                                },
                                            },
                                            Kind: sdk.String("saepe"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("et"),
                                                Ids: []string{
                                                    "cum",
                                                    "excepturi",
                                                    "aperiam",
                                                },
                                                Kind: sdk.String("ab"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "ut",
                                                    "modi",
                                                    "modi",
                                                    "repudiandae",
                                                },
                                            },
                                            Kind: sdk.String("explicabo"),
                                        },
                                    },
                                    Kind: sdk.String("dolor"),
                                },
                            },
                            Kind: sdk.String("dicta"),
                            Name: sdk.String("Doug Bruen"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("iusto"),
                                                Ids: []string{
                                                    "eveniet",
                                                    "iste",
                                                    "ullam",
                                                    "voluptatibus",
                                                },
                                                Kind: sdk.String("esse"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "fugiat",
                                                    "fuga",
                                                    "tempore",
                                                },
                                            },
                                            Kind: sdk.String("hic"),
                                        },
                                    },
                                    Kind: sdk.String("laboriosam"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("perferendis"),
                                                Ids: []string{
                                                    "tempore",
                                                },
                                                Kind: sdk.String("eaque"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "placeat",
                                                    "tempore",
                                                    "quod",
                                                },
                                            },
                                            Kind: sdk.String("aperiam"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ipsum"),
                                                Ids: []string{
                                                    "delectus",
                                                },
                                                Kind: sdk.String("fugit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "omnis",
                                                },
                                            },
                                            Kind: sdk.String("quibusdam"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("tempore"),
                                                Ids: []string{
                                                    "nihil",
                                                    "architecto",
                                                    "et",
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
                                    },
                                    Kind: sdk.String("quae"),
                                },
                            },
                            Kind: sdk.String("ullam"),
                            Name: sdk.String("Diana Tromp"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("autem"),
                                                Ids: []string{
                                                    "aspernatur",
                                                    "illo",
                                                },
                                                Kind: sdk.String("reprehenderit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "repudiandae",
                                                    "ad",
                                                },
                                            },
                                            Kind: sdk.String("excepturi"),
                                        },
                                    },
                                    Kind: sdk.String("suscipit"),
                                },
                            },
                            Kind: sdk.String("officia"),
                            Name: sdk.String("Micheal Carter"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-07-28"),
                    Kind: sdk.String("aperiam"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumYearToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-05-03"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("quos"),
                        Name: sdk.String("Danny Bernier"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("nemo"),
                        Name: sdk.String("Mr. Lloyd Vandervort"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ut"),
                        Name: sdk.String("Jane Hintz"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("sunt"),
                        Name: sdk.String("Leah Stamm"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("laboriosam"),
                    Etag: sdk.String("vero"),
                    ID: sdk.String("d2a0991b-6d17-4600-83c7-99a2a18db129"),
                    Kind: sdk.String("assumenda"),
                    MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                    Value: sdk.String("ipsam"),
                },
                MetricNames: []string{
                    "labore",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("libero"),
                                    Ids: []string{
                                        "facilis",
                                        "inventore",
                                    },
                                    Kind: sdk.String("eaque"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "asperiores",
                                        "quia",
                                        "magnam",
                                    },
                                },
                                Kind: sdk.String("magnam"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("illum"),
                                    Ids: []string{
                                        "architecto",
                                        "eaque",
                                        "neque",
                                        "nulla",
                                    },
                                    Kind: sdk.String("consequatur"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "voluptatem",
                                    },
                                },
                                Kind: sdk.String("id"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("eligendi"),
                                    Ids: []string{
                                        "nulla",
                                        "doloremque",
                                    },
                                    Kind: sdk.String("esse"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "aliquam",
                                        "eveniet",
                                        "adipisci",
                                        "excepturi",
                                    },
                                },
                                Kind: sdk.String("laboriosam"),
                            },
                        },
                        Kind: sdk.String("voluptates"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("sunt"),
                                    Ids: []string{
                                        "quis",
                                        "porro",
                                        "impedit",
                                        "distinctio",
                                    },
                                    Kind: sdk.String("ab"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "nihil",
                                    },
                                },
                                Kind: sdk.String("ipsum"),
                            },
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
                            },
                        },
                        Kind: sdk.String("alias"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("magni"),
                                    Ids: []string{
                                        "ad",
                                        "laborum",
                                        "nemo",
                                        "minima",
                                    },
                                    Kind: sdk.String("deserunt"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "hic",
                                    },
                                },
                                Kind: sdk.String("pariatur"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("deleniti"),
                                    Ids: []string{
                                        "maxime",
                                        "eaque",
                                        "tenetur",
                                    },
                                    Kind: sdk.String("non"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "maiores",
                                    },
                                },
                                Kind: sdk.String("occaecati"),
                            },
                        },
                        Kind: sdk.String("accusamus"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                    },
                },
            },
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("nemo"),
                        Etag: sdk.String("neque"),
                        ID: sdk.String("c304dae1-22f0-4bfe-8c41-932d704b3ae7"),
                        Kind: sdk.String("eaque"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("ipsum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("eius"),
                        Etag: sdk.String("nulla"),
                        ID: sdk.String("9ebb6a28-f6f7-41b0-a52f-e6536fb30a41"),
                        Kind: sdk.String("aliquam"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("id"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("fugit"),
                        Etag: sdk.String("unde"),
                        ID: sdk.String("4d64c08a-2ec1-4a80-b151-a354ba1a6d7d"),
                        Kind: sdk.String("pariatur"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("nesciunt"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("sint"),
                        Name: sdk.String("Claudia Pfeffer"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("porro"),
                        Name: sdk.String("Maurice Anderson"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("omnis"),
                        Name: sdk.String("Ricardo Dare"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("laboriosam"),
                        Name: sdk.String("Ernesto Corwin"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("voluptas"),
                        Name: sdk.String("Myra Schumm"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("inventore"),
                        Etag: sdk.String("eos"),
                        ID: sdk.String("723aa03f-83a1-4e1e-bab3-e07c05e13db8"),
                        Kind: sdk.String("rem"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("minima"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("occaecati"),
                        Etag: sdk.String("veritatis"),
                        ID: sdk.String("f98329f9-1922-4f7c-ad07-b6545000a5b3"),
                        Kind: sdk.String("vel"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("sed"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("magni"),
                        Etag: sdk.String("sunt"),
                        ID: sdk.String("e3ff770a-2b42-4e5e-9f64-a2a875c6a710"),
                        Kind: sdk.String("saepe"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("numquam"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-05-20"),
                    Kind: sdk.String("iusto"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast24Months.ToPointer(),
                    StartDate: types.MustDateFromString("2021-10-28"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("laborum"),
                    Etag: sdk.String("mollitia"),
                    ID: sdk.String("f9bd8327-e8f7-4d31-a145-ebdd822af2c1"),
                    Kind: sdk.String("iure"),
                    MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                    Value: sdk.String("excepturi"),
                },
                MetricNames: []string{
                    "deleniti",
                    "similique",
                    "sit",
                    "fuga",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("nisi"),
                        Name: sdk.String("Emma Homenick"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ipsam"),
                        Name: sdk.String("Pat Bins IV"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(853449),
                    ImpressionsLookbackWindow: sdk.Int(932006),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(23056),
                    MaximumImpressionInteractions: sdk.Int(636696),
                    MaximumInteractionGap: sdk.Int(923482),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("totam"),
                            Etag: sdk.String("impedit"),
                            ID: sdk.String("72213f42-5a03-438b-b1b3-d2fd3b636c07"),
                            Kind: sdk.String("adipisci"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("corrupti"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("corrupti"),
                            Etag: sdk.String("vero"),
                            ID: sdk.String("75ab7ff2-a12f-4b07-8cd4-4c23c0b11281"),
                            Kind: sdk.String("debitis"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("vel"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("atque"),
                            Etag: sdk.String("dolor"),
                            ID: sdk.String("5b93ced6-87bb-4453-b44a-f461c7cb91c7"),
                            Kind: sdk.String("provident"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("unde"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("laboriosam"),
                            Etag: sdk.String("odit"),
                            ID: sdk.String("de323875-a4a2-4e87-987b-51e22e77c0e6"),
                            Kind: sdk.String("recusandae"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("vitae"),
                        },
                    },
                    Kind: sdk.String("porro"),
                    MetricNames: []string{
                        "corrupti",
                        "dolorem",
                        "ratione",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("laboriosam"),
                            Etag: sdk.String("pariatur"),
                            ID: sdk.String("c5b10306-7a89-49e2-9c6a-4c14ff187497"),
                            Kind: sdk.String("rerum"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("tempora"),
                        },
                    },
                    Kind: sdk.String("consequatur"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-10-27"),
                    Kind: sdk.String("laboriosam"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumQuarterToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-04-26"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("laboriosam"),
                        Etag: sdk.String("ex"),
                        ID: sdk.String("0070c0bc-de7e-450e-a441-101c138b4629"),
                        Kind: sdk.String("fugit"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("temporibus"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("sit"),
                        Name: sdk.String("Miss Kelly Hickle"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quam"),
                        Name: sdk.String("Luis Feeney"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "porro",
                    "ratione",
                    "animi",
                    "possimus",
                },
                ReachByFrequencyMetricNames: []string{
                    "quos",
                    "ullam",
                    "fugit",
                    "in",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(124506),
                ExpirationDate: types.MustDateFromString("2022-12-25"),
                Repeats: sdk.String("autem"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumMonday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumWednesday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumDayOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2022-09-22"),
            },
            SubAccountID: sdk.String("soluta"),
            Type: shared.ReportTypeEnumPathAttribution.ToPointer(),
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("alias"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "commodi",
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("a"),
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
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("aut"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "officiis",
        QuotaUser: sdk.String("tempora"),
        ReportID: "voluptas",
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("qui"),
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
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("occaecati"),
        FileID: "repellendus",
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "temporibus",
        QuotaUser: sdk.String("non"),
        ReportID: "excepturi",
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("blanditiis"),
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
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("sed"),
        Key: sdk.String("voluptates"),
        MaxResults: sdk.Int64(421756),
        OauthToken: sdk.String("eaque"),
        PageToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "labore",
        QuotaUser: sdk.String("deserunt"),
        ReportID: "consectetur",
        SortField: operations.DfareportingReportsFilesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingReportsFilesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("iusto"),
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
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("minima"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "rerum",
        QuotaUser: sdk.String("doloribus"),
        ReportID: "cum",
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("doloremque"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Report: &shared.Report{
            AccountID: sdk.String("possimus"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("dolor"),
                            Etag: sdk.String("sapiente"),
                            ID: sdk.String("8e5e392f-22a7-47cb-baf1-b63ecde080fb"),
                            Kind: sdk.String("deleniti"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("impedit"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("aperiam"),
                            Etag: sdk.String("ad"),
                            ID: sdk.String("636c53d4-1599-455c-9c71-7604597f3771"),
                            Kind: sdk.String("excepturi"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("temporibus"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("blanditiis"),
                            Etag: sdk.String("quo"),
                            ID: sdk.String("8482c026-5d92-4c4c-8c9f-8a0ac1e04d2a"),
                            Kind: sdk.String("cumque"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("libero"),
                        },
                    },
                    Kind: sdk.String("aut"),
                    MetricNames: []string{
                        "temporibus",
                        "repudiandae",
                        "perferendis",
                        "aperiam",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("deleniti"),
                            Etag: sdk.String("necessitatibus"),
                            ID: sdk.String("cf818a93-03e9-43f0-8a18-b21f06d4d178"),
                            Kind: sdk.String("ullam"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("assumenda"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("fugit"),
                            Etag: sdk.String("praesentium"),
                            ID: sdk.String("be1db01d-6919-4f83-9593-a84ea7db15c4"),
                            Kind: sdk.String("cumque"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("nostrum"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("reiciendis"),
                            Etag: sdk.String("accusamus"),
                            ID: sdk.String("6cd097a6-7559-47ec-beb7-982baf9a7da6"),
                            Kind: sdk.String("optio"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("cupiditate"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("facilis"),
                            Etag: sdk.String("perspiciatis"),
                            ID: sdk.String("38e51a7e-6ed6-4f7f-b04f-da04669eae81"),
                            Kind: sdk.String("deleniti"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("tempora"),
                        },
                    },
                    Kind: sdk.String("aperiam"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-08-10"),
                    Kind: sdk.String("veniam"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumYearToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2021-08-27"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("consequuntur"),
                        Etag: sdk.String("sequi"),
                        ID: sdk.String("c49919eb-d1cf-4779-938c-bbfcdf4ece96"),
                        Kind: sdk.String("est"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("magnam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("reiciendis"),
                        Etag: sdk.String("expedita"),
                        ID: sdk.String("42c33049-617c-4b71-9dc2-50b60c751d2a"),
                        Kind: sdk.String("officiis"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("necessitatibus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("totam"),
                        Etag: sdk.String("tempore"),
                        ID: sdk.String("9828e264-71a5-4ecb-87f7-94f04f41446f"),
                        Kind: sdk.String("dignissimos"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("ratione"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("dolorem"),
                        Name: sdk.String("Mr. Keith Bayer Sr."),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("iusto"),
                        Name: sdk.String("Bryant Carter"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quasi"),
                        Name: sdk.String("Amy Price"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("voluptates"),
                        Name: sdk.String("Clayton McClure MD"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "mollitia",
                    "voluptatibus",
                    "quo",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("est"),
                        Name: sdk.String("Brett Koelpin"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quis"),
                        Name: sdk.String("Carol Nienow"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2020-10-03"),
                    Kind: sdk.String("nihil"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumWeekToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2020-06-19"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumCampaign.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("a"),
                        Etag: sdk.String("voluptas"),
                        ID: sdk.String("225d5561-5880-4321-af7b-59b7154642b9"),
                        Kind: sdk.String("accusamus"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("dignissimos"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("placeat"),
                        Etag: sdk.String("molestias"),
                        ID: sdk.String("4c3d3ca4-9183-4797-888d-156f01ae36bb"),
                        Kind: sdk.String("voluptatum"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("eaque"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("consequatur"),
                        Etag: sdk.String("odit"),
                        ID: sdk.String("8e3e1dc9-059f-47ef-8f13-85b67c24673a"),
                        Kind: sdk.String("maxime"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("atque"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("reiciendis"),
                        Etag: sdk.String("ea"),
                        ID: sdk.String("d268f92a-6bb0-4861-9222-5b05728e7a20"),
                        Kind: sdk.String("beatae"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("optio"),
                    },
                },
                MetricNames: []string{
                    "nobis",
                    "voluptate",
                    "magnam",
                    "doloribus",
                },
                OverlapMetricNames: []string{
                    "maiores",
                    "hic",
                    "minima",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment.ToPointer(),
                Message: sdk.String("repudiandae"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Merl_Bechtelar@gmail.com"),
                        Kind: sdk.String("corporis"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Neva_Ullrich6@hotmail.com"),
                        Kind: sdk.String("voluptatibus"),
                    },
                },
            },
            Etag: sdk.String("reiciendis"),
            FileName: sdk.String("sequi"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("rerum"),
                        Etag: sdk.String("voluptas"),
                        ID: sdk.String("19003b23-4e83-4c6c-b6a5-6b3ad5bf7940"),
                        Kind: sdk.String("at"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("autem"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("repellendus"),
                        Etag: sdk.String("quam"),
                        ID: sdk.String("039d489a-f600-4546-8b05-f01e7bd86439"),
                        Kind: sdk.String("commodi"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("possimus"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-11-12"),
                    Kind: sdk.String("repellendus"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousQuarter.ToPointer(),
                    StartDate: types.MustDateFromString("2022-10-22"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("ipsa"),
                        Etag: sdk.String("quam"),
                        ID: sdk.String("c3076c86-2de9-4692-b9ea-86c03ac3f23d"),
                        Kind: sdk.String("maxime"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("non"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("in"),
                        Etag: sdk.String("sequi"),
                        ID: sdk.String("c1769864-e592-4efe-bc18-aaa3debd0c90"),
                        Kind: sdk.String("alias"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("ad"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptates"),
                        Etag: sdk.String("dolore"),
                        ID: sdk.String("c1d0624d-e353-44f4-9e42-dda714e94468"),
                        Kind: sdk.String("sint"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("occaecati"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("modi"),
                        Name: sdk.String("Myron Mosciski"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("dolore"),
                        Name: sdk.String("Carla Johnston PhD"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("sit"),
                        Name: sdk.String("Ollie Schimmel"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("porro"),
                    Etag: sdk.String("molestias"),
                    ID: sdk.String("c710891e-f7b3-41a8-8fed-7bce0fba2734"),
                    Kind: sdk.String("nulla"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("sunt"),
                },
                MetricNames: []string{
                    "dolore",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumCsv.ToPointer(),
            ID: sdk.String("ipsam"),
            Kind: sdk.String("eum"),
            LastModifiedTime: sdk.String("eveniet"),
            Name: sdk.String("Wayne Oberbrunner I"),
            OwnerProfileID: sdk.String("ipsa"),
            PathAttributionCriteria: &shared.ReportPathAttributionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("culpa"),
                        Etag: sdk.String("in"),
                        ID: sdk.String("08e21909-b673-4355-99b0-0c50e73a8e26"),
                        Kind: sdk.String("tenetur"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("possimus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("commodi"),
                        Etag: sdk.String("quaerat"),
                        ID: sdk.String("fc994362-533a-48f8-81e6-39e61dff2353"),
                        Kind: sdk.String("nostrum"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("veniam"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("pariatur"),
                    Kind: sdk.String("cum"),
                    Name: sdk.String("Lionel Kerluke"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("officiis"),
                                                Ids: []string{
                                                    "magnam",
                                                    "molestias",
                                                    "nostrum",
                                                    "ea",
                                                },
                                                Kind: sdk.String("fugiat"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "beatae",
                                                    "porro",
                                                },
                                            },
                                            Kind: sdk.String("vitae"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("a"),
                                                Ids: []string{
                                                    "aperiam",
                                                    "ipsum",
                                                    "dolorum",
                                                    "tempora",
                                                },
                                                Kind: sdk.String("amet"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "odio",
                                                },
                                            },
                                            Kind: sdk.String("nostrum"),
                                        },
                                    },
                                    Kind: sdk.String("quas"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("nemo"),
                                                Ids: []string{
                                                    "ex",
                                                    "veniam",
                                                },
                                                Kind: sdk.String("magni"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "voluptas",
                                                    "autem",
                                                },
                                            },
                                            Kind: sdk.String("adipisci"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("hic"),
                                                Ids: []string{
                                                    "explicabo",
                                                    "modi",
                                                    "natus",
                                                },
                                                Kind: sdk.String("iste"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "quasi",
                                                    "cum",
                                                },
                                            },
                                            Kind: sdk.String("nam"),
                                        },
                                    },
                                    Kind: sdk.String("excepturi"),
                                },
                            },
                            Kind: sdk.String("pariatur"),
                            Name: sdk.String("Floyd Will"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quis"),
                                                Ids: []string{
                                                    "non",
                                                    "laborum",
                                                    "fuga",
                                                },
                                                Kind: sdk.String("corrupti"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "iusto",
                                                    "quae",
                                                    "quos",
                                                    "ex",
                                                },
                                            },
                                            Kind: sdk.String("itaque"),
                                        },
                                    },
                                    Kind: sdk.String("cupiditate"),
                                },
                            },
                            Kind: sdk.String("repudiandae"),
                            Name: sdk.String("Michael Larkin"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("deleniti"),
                                                Ids: []string{
                                                    "mollitia",
                                                    "ducimus",
                                                    "tempora",
                                                },
                                                Kind: sdk.String("porro"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "repudiandae",
                                                    "voluptatem",
                                                },
                                            },
                                            Kind: sdk.String("officiis"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("vero"),
                                                Ids: []string{
                                                    "pariatur",
                                                    "rem",
                                                    "quia",
                                                    "odio",
                                                },
                                                Kind: sdk.String("doloremque"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "impedit",
                                                    "rem",
                                                },
                                            },
                                            Kind: sdk.String("aut"),
                                        },
                                    },
                                    Kind: sdk.String("sequi"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("reprehenderit"),
                                                Ids: []string{
                                                    "eos",
                                                    "pariatur",
                                                },
                                                Kind: sdk.String("sint"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "fugit",
                                                    "et",
                                                },
                                            },
                                            Kind: sdk.String("itaque"),
                                        },
                                    },
                                    Kind: sdk.String("numquam"),
                                },
                            },
                            Kind: sdk.String("debitis"),
                            Name: sdk.String("Don Schuster"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-07-16"),
                    Kind: sdk.String("repellat"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumWeekToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-03-14"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("fugit"),
                        Name: sdk.String("Blanche Pacocha"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("voluptates"),
                        Name: sdk.String("Grace Block"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ratione"),
                        Name: sdk.String("Emilio Gottlieb"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ad"),
                        Name: sdk.String("Bradley Marvin"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("debitis"),
                    Etag: sdk.String("aut"),
                    ID: sdk.String("b938f6dc-85a8-4b6d-b377-2acf428241d1"),
                    Kind: sdk.String("repellendus"),
                    MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                    Value: sdk.String("a"),
                },
                MetricNames: []string{
                    "nemo",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("vitae"),
                                    Ids: []string{
                                        "adipisci",
                                        "sint",
                                        "provident",
                                        "fugit",
                                    },
                                    Kind: sdk.String("facere"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "hic",
                                        "accusamus",
                                        "possimus",
                                        "ab",
                                    },
                                },
                                Kind: sdk.String("illo"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("inventore"),
                                    Ids: []string{
                                        "esse",
                                    },
                                    Kind: sdk.String("esse"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "necessitatibus",
                                        "nam",
                                        "ipsa",
                                        "repellat",
                                    },
                                },
                                Kind: sdk.String("corporis"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("similique"),
                                    Ids: []string{
                                        "accusamus",
                                        "quo",
                                        "placeat",
                                        "possimus",
                                    },
                                    Kind: sdk.String("atque"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "fuga",
                                    },
                                },
                                Kind: sdk.String("explicabo"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("provident"),
                                    Ids: []string{
                                        "deserunt",
                                        "ipsam",
                                        "corporis",
                                        "unde",
                                    },
                                    Kind: sdk.String("eum"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "debitis",
                                        "veniam",
                                        "voluptates",
                                        "harum",
                                    },
                                },
                                Kind: sdk.String("a"),
                            },
                        },
                        Kind: sdk.String("quam"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("molestias"),
                                    Ids: []string{
                                        "unde",
                                        "esse",
                                        "delectus",
                                    },
                                    Kind: sdk.String("eaque"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "similique",
                                    },
                                },
                                Kind: sdk.String("fuga"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("reprehenderit"),
                                    Ids: []string{
                                        "nostrum",
                                        "natus",
                                        "itaque",
                                        "vel",
                                    },
                                    Kind: sdk.String("excepturi"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "nobis",
                                        "eaque",
                                    },
                                },
                                Kind: sdk.String("vero"),
                            },
                        },
                        Kind: sdk.String("quia"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("sequi"),
                                    Ids: []string{
                                        "dolor",
                                        "esse",
                                        "animi",
                                        "error",
                                    },
                                    Kind: sdk.String("voluptatum"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "repudiandae",
                                        "illo",
                                        "nemo",
                                    },
                                },
                                Kind: sdk.String("laboriosam"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("consequuntur"),
                                    Ids: []string{
                                        "reiciendis",
                                        "cum",
                                        "voluptatum",
                                    },
                                    Kind: sdk.String("voluptas"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "magnam",
                                    },
                                },
                                Kind: sdk.String("odit"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("et"),
                                    Ids: []string{
                                        "vero",
                                    },
                                    Kind: sdk.String("ipsa"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "reprehenderit",
                                        "ea",
                                        "doloribus",
                                    },
                                },
                                Kind: sdk.String("error"),
                            },
                        },
                        Kind: sdk.String("ea"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("animi"),
                                    Ids: []string{
                                        "repudiandae",
                                        "dolor",
                                        "blanditiis",
                                    },
                                    Kind: sdk.String("tempora"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "possimus",
                                        "maxime",
                                        "dolor",
                                    },
                                },
                                Kind: sdk.String("nesciunt"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("aut"),
                                    Ids: []string{
                                        "quis",
                                        "consequatur",
                                    },
                                    Kind: sdk.String("nam"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "saepe",
                                        "asperiores",
                                    },
                                },
                                Kind: sdk.String("ex"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("praesentium"),
                                    Ids: []string{
                                        "illo",
                                        "ipsa",
                                        "quaerat",
                                        "cupiditate",
                                    },
                                    Kind: sdk.String("quaerat"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "doloribus",
                                        "veritatis",
                                        "occaecati",
                                    },
                                },
                                Kind: sdk.String("tenetur"),
                            },
                        },
                        Kind: sdk.String("aut"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                },
            },
            PathCriteria: &shared.ReportPathCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("sapiente"),
                        Etag: sdk.String("tempore"),
                        ID: sdk.String("f04c4ba1-6858-4ae3-b384-8982d1f8e934"),
                        Kind: sdk.String("pariatur"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("enim"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("ab"),
                        Etag: sdk.String("aut"),
                        ID: sdk.String("b861677b-fdc5-43d2-8b95-5c883933d5c4"),
                        Kind: sdk.String("fugiat"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("iusto"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("ipsam"),
                        Etag: sdk.String("id"),
                        ID: sdk.String("d7f370de-fb4c-4a1d-a629-d2cfb7a738a8"),
                        Kind: sdk.String("beatae"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("nulla"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quidem"),
                        Etag: sdk.String("nesciunt"),
                        ID: sdk.String("e7ce0c30-a7d8-47db-9816-64a0f264f689"),
                        Kind: sdk.String("quam"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("commodi"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("id"),
                    Kind: sdk.String("occaecati"),
                    Name: sdk.String("Jessie Powlowski"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ad"),
                                                Ids: []string{
                                                    "neque",
                                                    "praesentium",
                                                    "quae",
                                                    "consectetur",
                                                },
                                                Kind: sdk.String("incidunt"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "accusamus",
                                                    "eius",
                                                    "odit",
                                                },
                                            },
                                            Kind: sdk.String("assumenda"),
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
                                        },
                                    },
                                    Kind: sdk.String("molestias"),
                                },
                            },
                            Kind: sdk.String("fugiat"),
                            Name: sdk.String("Elsie Gleason"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
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
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("repellendus"),
                                                Ids: []string{
                                                    "delectus",
                                                    "repudiandae",
                                                    "necessitatibus",
                                                },
                                                Kind: sdk.String("dolor"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "nemo",
                                                    "delectus",
                                                },
                                            },
                                            Kind: sdk.String("corporis"),
                                        },
                                    },
                                    Kind: sdk.String("a"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("laudantium"),
                                                Ids: []string{
                                                    "in",
                                                    "laboriosam",
                                                    "hic",
                                                },
                                                Kind: sdk.String("dolorum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "velit",
                                                    "ullam",
                                                },
                                            },
                                            Kind: sdk.String("totam"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("harum"),
                                                Ids: []string{
                                                    "numquam",
                                                    "quos",
                                                    "non",
                                                },
                                                Kind: sdk.String("ex"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "ex",
                                                },
                                            },
                                            Kind: sdk.String("pariatur"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("iure"),
                                                Ids: []string{
                                                    "sapiente",
                                                },
                                                Kind: sdk.String("odit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "doloremque",
                                                },
                                            },
                                            Kind: sdk.String("doloremque"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("blanditiis"),
                                                Ids: []string{
                                                    "quasi",
                                                    "debitis",
                                                    "incidunt",
                                                    "sunt",
                                                },
                                                Kind: sdk.String("excepturi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "nisi",
                                                },
                                            },
                                            Kind: sdk.String("aliquid"),
                                        },
                                    },
                                    Kind: sdk.String("sunt"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("pariatur"),
                                                Ids: []string{
                                                    "pariatur",
                                                },
                                                Kind: sdk.String("iure"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "magni",
                                                    "cupiditate",
                                                    "eius",
                                                },
                                            },
                                            Kind: sdk.String("id"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ratione"),
                                                Ids: []string{
                                                    "repellendus",
                                                },
                                                Kind: sdk.String("non"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "sed",
                                                },
                                            },
                                            Kind: sdk.String("animi"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("consequatur"),
                                                Ids: []string{
                                                    "incidunt",
                                                    "cupiditate",
                                                },
                                                Kind: sdk.String("voluptatibus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "delectus",
                                                },
                                            },
                                            Kind: sdk.String("eveniet"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("aspernatur"),
                                                Ids: []string{
                                                    "atque",
                                                },
                                                Kind: sdk.String("laborum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "eum",
                                                    "voluptate",
                                                },
                                            },
                                            Kind: sdk.String("veritatis"),
                                        },
                                    },
                                    Kind: sdk.String("dolor"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quis"),
                                                Ids: []string{
                                                    "quaerat",
                                                    "animi",
                                                    "expedita",
                                                    "consectetur",
                                                },
                                                Kind: sdk.String("at"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "illum",
                                                    "facere",
                                                },
                                            },
                                            Kind: sdk.String("debitis"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("aut"),
                                                Ids: []string{
                                                    "quisquam",
                                                    "eaque",
                                                    "rem",
                                                    "tempora",
                                                },
                                                Kind: sdk.String("repellendus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "quasi",
                                                },
                                            },
                                            Kind: sdk.String("voluptas"),
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
                                        },
                                    },
                                    Kind: sdk.String("saepe"),
                                },
                            },
                            Kind: sdk.String("amet"),
                            Name: sdk.String("Miss Shelly Wilkinson"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("asperiores"),
                                                Ids: []string{
                                                    "quidem",
                                                },
                                                Kind: sdk.String("voluptas"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "vitae",
                                                    "fuga",
                                                    "eius",
                                                    "exercitationem",
                                                },
                                            },
                                            Kind: sdk.String("tempore"),
                                        },
                                    },
                                    Kind: sdk.String("expedita"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quas"),
                                                Ids: []string{
                                                    "id",
                                                    "optio",
                                                },
                                                Kind: sdk.String("dicta"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "facere",
                                                    "quisquam",
                                                },
                                            },
                                            Kind: sdk.String("nobis"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("suscipit"),
                                                Ids: []string{
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
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("excepturi"),
                                                Ids: []string{
                                                    "dolorem",
                                                    "odio",
                                                    "eius",
                                                    "ipsam",
                                                },
                                                Kind: sdk.String("occaecati"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "maxime",
                                                    "sequi",
                                                    "facilis",
                                                    "corrupti",
                                                },
                                            },
                                            Kind: sdk.String("alias"),
                                        },
                                    },
                                    Kind: sdk.String("exercitationem"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("assumenda"),
                                                Ids: []string{
                                                    "cumque",
                                                },
                                                Kind: sdk.String("tenetur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "dolorem",
                                                    "voluptate",
                                                },
                                            },
                                            Kind: sdk.String("perspiciatis"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("alias"),
                                                Ids: []string{
                                                    "assumenda",
                                                    "error",
                                                    "quaerat",
                                                    "recusandae",
                                                },
                                                Kind: sdk.String("quas"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "soluta",
                                                    "quia",
                                                    "quis",
                                                    "pariatur",
                                                },
                                            },
                                            Kind: sdk.String("illo"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("blanditiis"),
                                                Ids: []string{
                                                    "recusandae",
                                                    "enim",
                                                    "possimus",
                                                    "in",
                                                },
                                                Kind: sdk.String("reprehenderit"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "quaerat",
                                                },
                                            },
                                            Kind: sdk.String("voluptatem"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("porro"),
                                                Ids: []string{
                                                    "doloremque",
                                                    "molestiae",
                                                    "aperiam",
                                                    "id",
                                                },
                                                Kind: sdk.String("similique"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "aliquam",
                                                },
                                            },
                                            Kind: sdk.String("mollitia"),
                                        },
                                    },
                                    Kind: sdk.String("necessitatibus"),
                                },
                            },
                            Kind: sdk.String("quia"),
                            Name: sdk.String("Claudia Goyette"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("omnis"),
                                                Ids: []string{
                                                    "quasi",
                                                    "aliquam",
                                                    "corrupti",
                                                    "porro",
                                                },
                                                Kind: sdk.String("omnis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "rem",
                                                },
                                            },
                                            Kind: sdk.String("asperiores"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("non"),
                                                Ids: []string{
                                                    "doloremque",
                                                },
                                                Kind: sdk.String("in"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "odit",
                                                },
                                            },
                                            Kind: sdk.String("doloremque"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("laboriosam"),
                                                Ids: []string{
                                                    "quaerat",
                                                    "perspiciatis",
                                                    "commodi",
                                                },
                                                Kind: sdk.String("adipisci"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "vel",
                                                    "eligendi",
                                                    "voluptates",
                                                },
                                            },
                                            Kind: sdk.String("officiis"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("maxime"),
                                                Ids: []string{
                                                    "labore",
                                                    "deleniti",
                                                    "enim",
                                                },
                                                Kind: sdk.String("iure"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "omnis",
                                                    "voluptatem",
                                                    "laborum",
                                                },
                                            },
                                            Kind: sdk.String("occaecati"),
                                        },
                                    },
                                    Kind: sdk.String("reiciendis"),
                                },
                            },
                            Kind: sdk.String("officia"),
                            Name: sdk.String("Edmond Moore DVM"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-04-05"),
                    Kind: sdk.String("ex"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousMonth.ToPointer(),
                    StartDate: types.MustDateFromString("2021-06-03"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("deleniti"),
                        Name: sdk.String("Mrs. Jonathan Bednar"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("magnam"),
                    Etag: sdk.String("corrupti"),
                    ID: sdk.String("75663cae-f294-4075-9462-42e339b43fa1"),
                    Kind: sdk.String("occaecati"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("esse"),
                },
                MetricNames: []string{
                    "facere",
                    "veritatis",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("molestiae"),
                                    Ids: []string{
                                        "maiores",
                                        "ea",
                                    },
                                    Kind: sdk.String("qui"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "pariatur",
                                        "dolore",
                                        "magnam",
                                    },
                                },
                                Kind: sdk.String("sunt"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("perferendis"),
                                    Ids: []string{
                                        "illo",
                                        "occaecati",
                                        "similique",
                                        "occaecati",
                                    },
                                    Kind: sdk.String("deserunt"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "qui",
                                        "qui",
                                    },
                                },
                                Kind: sdk.String("excepturi"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("quos"),
                                    Ids: []string{
                                        "accusamus",
                                    },
                                    Kind: sdk.String("fuga"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "qui",
                                    },
                                },
                                Kind: sdk.String("ratione"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("magni"),
                                    Ids: []string{
                                        "eius",
                                        "incidunt",
                                    },
                                    Kind: sdk.String("aliquam"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "labore",
                                    },
                                },
                                Kind: sdk.String("nobis"),
                            },
                        },
                        Kind: sdk.String("illo"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                    },
                },
            },
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("dolorum"),
                        Etag: sdk.String("sed"),
                        ID: sdk.String("16434312-7448-48f0-8b2d-c9b2e961d2ba"),
                        Kind: sdk.String("tempora"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("laboriosam"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("temporibus"),
                        Name: sdk.String("Jasmine Bins"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("tenetur"),
                        Name: sdk.String("Leigh Kilback"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("fuga"),
                        Name: sdk.String("Lester Rau"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ut"),
                        Name: sdk.String("Mrs. Margarita Walsh"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("accusamus"),
                        Etag: sdk.String("laboriosam"),
                        ID: sdk.String("dbc4320d-3e97-4c37-8f6f-ce8891f81776"),
                        Kind: sdk.String("iusto"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("quos"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-10-31"),
                    Kind: sdk.String("quasi"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumWeekToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2021-10-03"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("a"),
                    Etag: sdk.String("omnis"),
                    ID: sdk.String("d4f73f70-07a7-4cbb-83c1-6c12aa0ebd02"),
                    Kind: sdk.String("perspiciatis"),
                    MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                    Value: sdk.String("at"),
                },
                MetricNames: []string{
                    "rerum",
                    "ad",
                    "error",
                    "non",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("maxime"),
                        Name: sdk.String("Delores Hilpert"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("voluptatum"),
                        Name: sdk.String("Wayne Skiles"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(567463),
                    ImpressionsLookbackWindow: sdk.Int(374436),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(780112),
                    MaximumImpressionInteractions: sdk.Int(982213),
                    MaximumInteractionGap: sdk.Int(81414),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("cupiditate"),
                            Etag: sdk.String("omnis"),
                            ID: sdk.String("45c5c145-73f9-40bd-8a88-c7a0bc33ac47"),
                            Kind: sdk.String("amet"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("tempora"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("doloremque"),
                            Etag: sdk.String("nemo"),
                            ID: sdk.String("67b3f53e-42a3-4305-ba82-770bf6d2dee1"),
                            Kind: sdk.String("quo"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("odit"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("dignissimos"),
                            Etag: sdk.String("reiciendis"),
                            ID: sdk.String("de0b6480-77d9-4bfd-a41a-62cf5fa3e7c6"),
                            Kind: sdk.String("architecto"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("in"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("recusandae"),
                            Etag: sdk.String("accusantium"),
                            ID: sdk.String("c2cce298-1922-44e2-80e5-13e655c46bb6"),
                            Kind: sdk.String("fugiat"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("rem"),
                        },
                    },
                    Kind: sdk.String("odio"),
                    MetricNames: []string{
                        "voluptatem",
                        "nisi",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("ipsa"),
                            Etag: sdk.String("temporibus"),
                            ID: sdk.String("0eb06d21-d9af-47f5-b5a5-3eb6c072c5d2"),
                            Kind: sdk.String("eum"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("delectus"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("repellat"),
                            Etag: sdk.String("dolorum"),
                            ID: sdk.String("57740338-3a66-4db6-bb78-aa7310c3d14b"),
                            Kind: sdk.String("laborum"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("eos"),
                        },
                    },
                    Kind: sdk.String("minus"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-08-07"),
                    Kind: sdk.String("adipisci"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumQuarterToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2021-04-12"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("molestias"),
                        Etag: sdk.String("consequuntur"),
                        ID: sdk.String("72ed5066-462c-499e-aada-cd2b866ce16d"),
                        Kind: sdk.String("recusandae"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("quae"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("corrupti"),
                        Etag: sdk.String("sunt"),
                        ID: sdk.String("e0ab164f-b614-4494-9bb0-b50681a7f89f"),
                        Kind: sdk.String("dignissimos"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("perspiciatis"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("cumque"),
                        Name: sdk.String("Ethel Corwin"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("nesciunt"),
                        Name: sdk.String("Shelly Cole"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("amet"),
                        Name: sdk.String("Silvia Nienow DVM"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("consequatur"),
                        Name: sdk.String("Christie Funk"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "sint",
                },
                ReachByFrequencyMetricNames: []string{
                    "iure",
                    "voluptatem",
                    "commodi",
                    "fugit",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(474648),
                ExpirationDate: types.MustDateFromString("2021-08-30"),
                Repeats: sdk.String("fuga"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumTuesday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSunday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumMonday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumMonday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumDayOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2021-09-13"),
            },
            SubAccountID: sdk.String("quam"),
            Type: shared.ReportTypeEnumFloodlight.ToPointer(),
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nesciunt",
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("deleniti"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("ratione"),
        Key: sdk.String("ipsa"),
        MaxResults: sdk.Int64(270879),
        OauthToken: sdk.String("dolor"),
        PageToken: sdk.String("exercitationem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "autem",
        QuotaUser: sdk.String("quisquam"),
        Scope: operations.DfareportingReportsListScopeEnumMine.ToPointer(),
        SortField: operations.DfareportingReportsListSortFieldEnumLastModifiedTime.ToPointer(),
        SortOrder: operations.DfareportingReportsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("atque"),
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
            AccountID: sdk.String("labore"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("veniam"),
                            Etag: sdk.String("facere"),
                            ID: sdk.String("60746411-237b-462f-bc39-f8d06ad968ec"),
                            Kind: sdk.String("similique"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("non"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("ipsum"),
                            Etag: sdk.String("eaque"),
                            ID: sdk.String("24ac5b7a-0f6c-4feb-9d3a-697f371ce361"),
                            Kind: sdk.String("repellendus"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("saepe"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("nostrum"),
                            Etag: sdk.String("illum"),
                            ID: sdk.String("73e795aa-67ac-4619-9874-81d1b991c71e"),
                            Kind: sdk.String("ipsam"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("nobis"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("voluptatibus"),
                            Etag: sdk.String("vel"),
                            ID: sdk.String("4fa7e55f-8cd9-4590-af46-816b65f2b1eb"),
                            Kind: sdk.String("rerum"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("impedit"),
                        },
                    },
                    Kind: sdk.String("nisi"),
                    MetricNames: []string{
                        "cumque",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
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
                    Kind: sdk.String("exercitationem"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-05-24"),
                    Kind: sdk.String("velit"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumToday.ToPointer(),
                    StartDate: types.MustDateFromString("2022-08-10"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("aliquam"),
                        Etag: sdk.String("fugiat"),
                        ID: sdk.String("6ab52272-cf3d-4dee-91f1-7a083e0cb851"),
                        Kind: sdk.String("accusantium"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("voluptatibus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("in"),
                        Etag: sdk.String("blanditiis"),
                        ID: sdk.String("4bf3a74b-5412-4305-9a42-3a913e1a7902"),
                        Kind: sdk.String("distinctio"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("molestiae"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("nulla"),
                        Name: sdk.String("Toby Satterfield"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "numquam",
                    "nemo",
                    "error",
                    "praesentium",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("similique"),
                        Name: sdk.String("Emma Torphy"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("voluptatum"),
                        Name: sdk.String("Whitney Beier"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-06-15"),
                    Kind: sdk.String("illum"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousMonth.ToPointer(),
                    StartDate: types.MustDateFromString("2020-10-02"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumAdvertiser.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("quas"),
                        Etag: sdk.String("possimus"),
                        ID: sdk.String("f7dcd943-bc56-4d31-8aba-848afe8902b4"),
                        Kind: sdk.String("atque"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("velit"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quaerat"),
                        Etag: sdk.String("reiciendis"),
                        ID: sdk.String("a3fc83c1-fc5b-40ac-9b04-c48b427d7de9"),
                        Kind: sdk.String("voluptas"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("tenetur"),
                    },
                },
                MetricNames: []string{
                    "doloremque",
                    "consectetur",
                    "eveniet",
                    "quaerat",
                },
                OverlapMetricNames: []string{
                    "reprehenderit",
                    "assumenda",
                    "totam",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment.ToPointer(),
                Message: sdk.String("voluptate"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Sage83@gmail.com"),
                        Kind: sdk.String("accusamus"),
                    },
                },
            },
            Etag: sdk.String("maiores"),
            FileName: sdk.String("possimus"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("earum"),
                        Etag: sdk.String("inventore"),
                        ID: sdk.String("5f2303b3-2529-4384-9339-48aafabda028"),
                        Kind: sdk.String("debitis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("veniam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quisquam"),
                        Etag: sdk.String("fugit"),
                        ID: sdk.String("30924d34-5419-4bbe-b0ca-991e3a765952"),
                        Kind: sdk.String("eaque"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("tempore"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-08-15"),
                    Kind: sdk.String("iusto"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast24Months.ToPointer(),
                    StartDate: types.MustDateFromString("2022-02-01"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("aliquid"),
                        Etag: sdk.String("totam"),
                        ID: sdk.String("9b618b30-bb7f-4874-9b4a-2d8c2efc6f61"),
                        Kind: sdk.String("quae"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("perspiciatis"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("sunt"),
                        Name: sdk.String("Frederick Schamberger"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("blanditiis"),
                    Etag: sdk.String("repellendus"),
                    ID: sdk.String("a1a7e4b3-230a-49c9-ae52-bd49db430a79"),
                    Kind: sdk.String("magnam"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("quam"),
                },
                MetricNames: []string{
                    "dolore",
                    "magnam",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumExcel.ToPointer(),
            ID: sdk.String("ipsa"),
            Kind: sdk.String("voluptatibus"),
            LastModifiedTime: sdk.String("explicabo"),
            Name: sdk.String("Ray Ullrich"),
            OwnerProfileID: sdk.String("exercitationem"),
            PathAttributionCriteria: &shared.ReportPathAttributionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("doloremque"),
                        Etag: sdk.String("cumque"),
                        ID: sdk.String("95bb7163-63ba-4336-8249-f4f6d97e7b5a"),
                        Kind: sdk.String("esse"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("odit"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("magni"),
                        Etag: sdk.String("tempora"),
                        ID: sdk.String("e2cecb72-4605-4504-be75-5d207f448548"),
                        Kind: sdk.String("dolore"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("vel"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("eaque"),
                        Etag: sdk.String("iste"),
                        ID: sdk.String("5d14452a-0fc3-4a3b-9dcd-5b00688cc9a5"),
                        Kind: sdk.String("laborum"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("maxime"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("officiis"),
                        Etag: sdk.String("quo"),
                        ID: sdk.String("6731ed19-00dc-4963-948d-aee9064a0bde"),
                        Kind: sdk.String("facilis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("tempora"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("delectus"),
                    Kind: sdk.String("impedit"),
                    Name: sdk.String("Molly Pacocha"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("libero"),
                                                Ids: []string{
                                                    "alias",
                                                    "totam",
                                                    "quia",
                                                },
                                                Kind: sdk.String("quis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "veritatis",
                                                    "iure",
                                                    "recusandae",
                                                },
                                            },
                                            Kind: sdk.String("nihil"),
                                        },
                                    },
                                    Kind: sdk.String("perferendis"),
                                },
                            },
                            Kind: sdk.String("dolorem"),
                            Name: sdk.String("Mrs. Felipe Jenkins"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("accusamus"),
                                                Ids: []string{
                                                    "ipsam",
                                                    "magni",
                                                },
                                                Kind: sdk.String("molestiae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "beatae",
                                                    "eaque",
                                                    "nam",
                                                    "expedita",
                                                },
                                            },
                                            Kind: sdk.String("occaecati"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("aliquid"),
                                                Ids: []string{
                                                    "recusandae",
                                                },
                                                Kind: sdk.String("a"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "necessitatibus",
                                                    "voluptatibus",
                                                    "quasi",
                                                    "officia",
                                                },
                                            },
                                            Kind: sdk.String("voluptatum"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("hic"),
                                                Ids: []string{
                                                    "maxime",
                                                },
                                                Kind: sdk.String("accusantium"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "eligendi",
                                                    "consequatur",
                                                },
                                            },
                                            Kind: sdk.String("sunt"),
                                        },
                                    },
                                    Kind: sdk.String("commodi"),
                                },
                            },
                            Kind: sdk.String("praesentium"),
                            Name: sdk.String("Laverne Schmeler"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("suscipit"),
                                                Ids: []string{
                                                    "rem",
                                                    "aut",
                                                },
                                                Kind: sdk.String("excepturi"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "repellendus",
                                                    "facilis",
                                                    "possimus",
                                                    "perspiciatis",
                                                },
                                            },
                                            Kind: sdk.String("corporis"),
                                        },
                                    },
                                    Kind: sdk.String("quae"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dolor"),
                                                Ids: []string{
                                                    "sunt",
                                                    "nulla",
                                                },
                                                Kind: sdk.String("laudantium"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "cum",
                                                    "temporibus",
                                                    "amet",
                                                    "odio",
                                                },
                                            },
                                            Kind: sdk.String("accusamus"),
                                        },
                                    },
                                    Kind: sdk.String("laudantium"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("doloremque"),
                                                Ids: []string{
                                                    "temporibus",
                                                    "quos",
                                                    "suscipit",
                                                    "nam",
                                                },
                                                Kind: sdk.String("voluptatem"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "tenetur",
                                                    "reprehenderit",
                                                    "non",
                                                    "laborum",
                                                },
                                            },
                                            Kind: sdk.String("doloremque"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("atque"),
                                                Ids: []string{
                                                    "quisquam",
                                                    "saepe",
                                                },
                                                Kind: sdk.String("delectus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "nulla",
                                                    "dicta",
                                                    "voluptatem",
                                                },
                                            },
                                            Kind: sdk.String("provident"),
                                        },
                                    },
                                    Kind: sdk.String("quod"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("culpa"),
                                                Ids: []string{
                                                    "est",
                                                    "illo",
                                                },
                                                Kind: sdk.String("dignissimos"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "necessitatibus",
                                                },
                                            },
                                            Kind: sdk.String("velit"),
                                        },
                                    },
                                    Kind: sdk.String("dolorem"),
                                },
                            },
                            Kind: sdk.String("quisquam"),
                            Name: sdk.String("Oliver Hyatt"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("veniam"),
                                                Ids: []string{
                                                    "perferendis",
                                                    "maiores",
                                                },
                                                Kind: sdk.String("provident"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "accusamus",
                                                    "dolores",
                                                },
                                            },
                                            Kind: sdk.String("tempora"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quibusdam"),
                                                Ids: []string{
                                                    "iure",
                                                    "dicta",
                                                    "amet",
                                                },
                                                Kind: sdk.String("aperiam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "quibusdam",
                                                    "eos",
                                                },
                                            },
                                            Kind: sdk.String("delectus"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("odio"),
                                                Ids: []string{
                                                    "velit",
                                                },
                                                Kind: sdk.String("vero"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "distinctio",
                                                    "nemo",
                                                },
                                            },
                                            Kind: sdk.String("veniam"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("unde"),
                                                Ids: []string{
                                                    "distinctio",
                                                },
                                                Kind: sdk.String("tenetur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "nesciunt",
                                                    "molestias",
                                                },
                                            },
                                            Kind: sdk.String("enim"),
                                        },
                                    },
                                    Kind: sdk.String("delectus"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dicta"),
                                                Ids: []string{
                                                    "qui",
                                                },
                                                Kind: sdk.String("ipsum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "molestias",
                                                    "magnam",
                                                },
                                            },
                                            Kind: sdk.String("commodi"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("deserunt"),
                                                Ids: []string{
                                                    "tempore",
                                                },
                                                Kind: sdk.String("cupiditate"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "commodi",
                                                    "laborum",
                                                },
                                            },
                                            Kind: sdk.String("dicta"),
                                        },
                                    },
                                    Kind: sdk.String("magnam"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("ex"),
                                                Ids: []string{
                                                    "quaerat",
                                                    "accusantium",
                                                },
                                                Kind: sdk.String("nesciunt"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "voluptates",
                                                    "assumenda",
                                                    "velit",
                                                },
                                            },
                                            Kind: sdk.String("accusantium"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("tenetur"),
                                                Ids: []string{
                                                    "culpa",
                                                    "nobis",
                                                },
                                                Kind: sdk.String("recusandae"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "asperiores",
                                                    "quas",
                                                    "ipsa",
                                                },
                                            },
                                            Kind: sdk.String("vitae"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("consequuntur"),
                                                Ids: []string{
                                                    "ad",
                                                    "perspiciatis",
                                                },
                                                Kind: sdk.String("consequatur"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "a",
                                                    "officia",
                                                    "suscipit",
                                                },
                                            },
                                            Kind: sdk.String("autem"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("dignissimos"),
                                                Ids: []string{
                                                    "iure",
                                                    "vero",
                                                },
                                                Kind: sdk.String("dolores"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "eius",
                                                    "vero",
                                                    "ad",
                                                    "modi",
                                                },
                                            },
                                            Kind: sdk.String("nesciunt"),
                                        },
                                    },
                                    Kind: sdk.String("quod"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("illum"),
                                                Ids: []string{
                                                    "ad",
                                                    "officia",
                                                    "debitis",
                                                },
                                                Kind: sdk.String("eius"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "expedita",
                                                    "nulla",
                                                    "nobis",
                                                },
                                            },
                                            Kind: sdk.String("modi"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("voluptate"),
                                                Ids: []string{
                                                    "atque",
                                                },
                                                Kind: sdk.String("incidunt"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "saepe",
                                                    "perferendis",
                                                    "rem",
                                                    "sunt",
                                                },
                                            },
                                            Kind: sdk.String("deserunt"),
                                        },
                                    },
                                    Kind: sdk.String("dolores"),
                                },
                            },
                            Kind: sdk.String("asperiores"),
                            Name: sdk.String("Jan Wolff"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-11-29"),
                    Kind: sdk.String("laborum"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousMonth.ToPointer(),
                    StartDate: types.MustDateFromString("2021-06-08"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("eos"),
                        Name: sdk.String("Eleanor Schneider"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("veritatis"),
                        Name: sdk.String("Dr. Adam Schinner V"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("voluptas"),
                    Etag: sdk.String("tempore"),
                    ID: sdk.String("93203cd4-d762-4716-b743-837d1aaff2be"),
                    Kind: sdk.String("quisquam"),
                    MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                    Value: sdk.String("amet"),
                },
                MetricNames: []string{
                    "rerum",
                    "mollitia",
                    "asperiores",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("voluptatum"),
                                    Ids: []string{
                                        "deserunt",
                                    },
                                    Kind: sdk.String("distinctio"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "nam",
                                        "suscipit",
                                        "inventore",
                                        "optio",
                                    },
                                },
                                Kind: sdk.String("distinctio"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("magni"),
                                    Ids: []string{
                                        "quam",
                                        "nisi",
                                        "perspiciatis",
                                        "doloremque",
                                    },
                                    Kind: sdk.String("quasi"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "quaerat",
                                        "velit",
                                        "repudiandae",
                                    },
                                },
                                Kind: sdk.String("hic"),
                            },
                        },
                        Kind: sdk.String("qui"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("explicabo"),
                                    Ids: []string{
                                        "facilis",
                                    },
                                    Kind: sdk.String("iure"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "vitae",
                                    },
                                },
                                Kind: sdk.String("perspiciatis"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("consequatur"),
                                    Ids: []string{
                                        "veritatis",
                                        "incidunt",
                                        "quaerat",
                                    },
                                    Kind: sdk.String("aspernatur"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "cum",
                                    },
                                },
                                Kind: sdk.String("numquam"),
                            },
                        },
                        Kind: sdk.String("in"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("eum"),
                                    Ids: []string{
                                        "sequi",
                                        "distinctio",
                                    },
                                    Kind: sdk.String("ut"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "deleniti",
                                        "neque",
                                    },
                                },
                                Kind: sdk.String("ullam"),
                            },
                        },
                        Kind: sdk.String("atque"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("sunt"),
                                    Ids: []string{
                                        "dolore",
                                        "quidem",
                                        "quaerat",
                                        "velit",
                                    },
                                    Kind: sdk.String("porro"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "saepe",
                                    },
                                },
                                Kind: sdk.String("corporis"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("assumenda"),
                                    Ids: []string{
                                        "consequatur",
                                        "necessitatibus",
                                        "sit",
                                        "dolore",
                                    },
                                    Kind: sdk.String("odio"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "asperiores",
                                        "recusandae",
                                        "explicabo",
                                        "sequi",
                                    },
                                },
                                Kind: sdk.String("rem"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("placeat"),
                                    Ids: []string{
                                        "commodi",
                                        "sint",
                                        "mollitia",
                                        "illo",
                                    },
                                    Kind: sdk.String("enim"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "iure",
                                    },
                                },
                                Kind: sdk.String("facilis"),
                            },
                        },
                        Kind: sdk.String("velit"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                },
            },
            PathCriteria: &shared.ReportPathCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptatem"),
                        Etag: sdk.String("qui"),
                        ID: sdk.String("ff631fc8-db48-4ad1-96a3-f37f7008aaf5"),
                        Kind: sdk.String("magni"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("alias"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("minus"),
                        Etag: sdk.String("ut"),
                        ID: sdk.String("27a3fcd3-62ad-494a-b448-1183765262c2"),
                        Kind: sdk.String("possimus"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("vitae"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptate"),
                        Etag: sdk.String("nemo"),
                        ID: sdk.String("9af09933-473c-4cb7-911d-2669ffa9c8fe"),
                        Kind: sdk.String("ab"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("molestiae"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("voluptate"),
                    Kind: sdk.String("facilis"),
                    Name: sdk.String("Wilbert Pagac"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("excepturi"),
                                                Ids: []string{
                                                    "accusantium",
                                                    "totam",
                                                    "possimus",
                                                    "magni",
                                                },
                                                Kind: sdk.String("optio"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "magnam",
                                                    "recusandae",
                                                    "enim",
                                                },
                                            },
                                            Kind: sdk.String("sapiente"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("sit"),
                                                Ids: []string{
                                                    "quaerat",
                                                    "laborum",
                                                },
                                                Kind: sdk.String("soluta"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "fugiat",
                                                    "itaque",
                                                    "animi",
                                                    "cum",
                                                },
                                            },
                                            Kind: sdk.String("iure"),
                                        },
                                    },
                                    Kind: sdk.String("reiciendis"),
                                },
                            },
                            Kind: sdk.String("soluta"),
                            Name: sdk.String("Miss Melissa Barrows"),
                        },
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("incidunt"),
                                                Ids: []string{
                                                    "voluptate",
                                                    "nisi",
                                                    "ad",
                                                    "a",
                                                },
                                                Kind: sdk.String("laborum"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "blanditiis",
                                                    "eaque",
                                                },
                                            },
                                            Kind: sdk.String("tempora"),
                                        },
                                    },
                                    Kind: sdk.String("impedit"),
                                },
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("consequatur"),
                                                Ids: []string{
                                                    "sunt",
                                                    "consequatur",
                                                    "iure",
                                                },
                                                Kind: sdk.String("dolorem"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                                Values: []string{
                                                    "cupiditate",
                                                    "exercitationem",
                                                },
                                            },
                                            Kind: sdk.String("rerum"),
                                        },
                                    },
                                    Kind: sdk.String("pariatur"),
                                },
                            },
                            Kind: sdk.String("numquam"),
                            Name: sdk.String("Vera Hand"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-10-30"),
                    Kind: sdk.String("nisi"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast7Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-08-09"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("quae"),
                        Name: sdk.String("Sadie Treutel"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("dolorem"),
                        Name: sdk.String("Pedro Smith"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("blanditiis"),
                        Name: sdk.String("Mario McDermott"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quas"),
                        Name: sdk.String("Megan McLaughlin"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("dignissimos"),
                    Etag: sdk.String("iure"),
                    ID: sdk.String("ce21f454-d22c-4c4a-bcaf-7ad83b9ca743"),
                    Kind: sdk.String("dolores"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("totam"),
                },
                MetricNames: []string{
                    "iste",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("exercitationem"),
                                    Ids: []string{
                                        "optio",
                                        "ducimus",
                                        "explicabo",
                                    },
                                    Kind: sdk.String("neque"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "doloremque",
                                        "praesentium",
                                        "perspiciatis",
                                    },
                                },
                                Kind: sdk.String("temporibus"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("sit"),
                                    Ids: []string{
                                        "quidem",
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
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("fugiat"),
                                    Ids: []string{
                                        "nihil",
                                        "totam",
                                        "eligendi",
                                    },
                                    Kind: sdk.String("voluptatibus"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "fugit",
                                        "ea",
                                        "magni",
                                        "molestiae",
                                    },
                                },
                                Kind: sdk.String("eius"),
                            },
                        },
                        Kind: sdk.String("quaerat"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("ad"),
                                    Ids: []string{
                                        "officiis",
                                        "sequi",
                                        "similique",
                                        "error",
                                    },
                                    Kind: sdk.String("facilis"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "labore",
                                        "aperiam",
                                    },
                                },
                                Kind: sdk.String("temporibus"),
                            },
                        },
                        Kind: sdk.String("voluptate"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("tempore"),
                                    Ids: []string{
                                        "vitae",
                                        "a",
                                    },
                                    Kind: sdk.String("nostrum"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "asperiores",
                                        "blanditiis",
                                        "quod",
                                    },
                                },
                                Kind: sdk.String("voluptates"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("praesentium"),
                                    Ids: []string{
                                        "consequuntur",
                                        "in",
                                        "mollitia",
                                    },
                                    Kind: sdk.String("ratione"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "ex",
                                        "dolor",
                                        "dignissimos",
                                    },
                                },
                                Kind: sdk.String("reprehenderit"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("ducimus"),
                                    Ids: []string{
                                        "non",
                                        "eveniet",
                                        "sit",
                                        "nesciunt",
                                    },
                                    Kind: sdk.String("quos"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "corporis",
                                        "quae",
                                    },
                                },
                                Kind: sdk.String("repellendus"),
                            },
                        },
                        Kind: sdk.String("totam"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("nulla"),
                                    Ids: []string{
                                        "ullam",
                                        "cum",
                                        "dignissimos",
                                        "nemo",
                                    },
                                    Kind: sdk.String("alias"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "architecto",
                                        "officiis",
                                        "vero",
                                        "ratione",
                                    },
                                },
                                Kind: sdk.String("animi"),
                            },
                        },
                        Kind: sdk.String("occaecati"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                },
            },
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("iure"),
                        Etag: sdk.String("repellat"),
                        ID: sdk.String("959bb5ad-a9da-409f-96b4-172f9e4d83a4"),
                        Kind: sdk.String("nisi"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("pariatur"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("mollitia"),
                        Etag: sdk.String("fugit"),
                        ID: sdk.String("3fddefa0-f38d-4dd4-8f85-c1829adcb067"),
                        Kind: sdk.String("magni"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("et"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("rem"),
                        Etag: sdk.String("dicta"),
                        ID: sdk.String("652d1155-4d59-4103-a86f-b6d6b4482dba"),
                        Kind: sdk.String("nulla"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("consequuntur"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("tenetur"),
                        Etag: sdk.String("hic"),
                        ID: sdk.String("da03c399-b2fc-43a5-9865-3d08c06ea84a"),
                        Kind: sdk.String("soluta"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("quae"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("facilis"),
                        Name: sdk.String("Miss Wilbert Kiehn"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("repudiandae"),
                        Name: sdk.String("Ms. Linda McClure DVM"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("earum"),
                        Name: sdk.String("Ms. Norma Deckow"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("sapiente"),
                        Name: sdk.String("Dr. Anne Ritchie"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptates"),
                        Etag: sdk.String("non"),
                        ID: sdk.String("e75469d5-7c22-4705-a175-8f5ecf39d133"),
                        Kind: sdk.String("rerum"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("expedita"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-06-17"),
                    Kind: sdk.String("officiis"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast14Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-02-02"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("voluptas"),
                    Etag: sdk.String("consequuntur"),
                    ID: sdk.String("1504f9cd-6528-4f06-8851-c434522e13a0"),
                    Kind: sdk.String("distinctio"),
                    MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                    Value: sdk.String("et"),
                },
                MetricNames: []string{
                    "earum",
                    "nam",
                    "qui",
                    "quibusdam",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("quia"),
                        Name: sdk.String("Amanda Conroy"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("est"),
                        Name: sdk.String("Miss Jeannie Pfeffer"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("debitis"),
                        Name: sdk.String("Krystal Hickle Jr."),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(68293),
                    ImpressionsLookbackWindow: sdk.Int(728371),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(813845),
                    MaximumImpressionInteractions: sdk.Int(272604),
                    MaximumInteractionGap: sdk.Int(862994),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("repellat"),
                            Etag: sdk.String("maiores"),
                            ID: sdk.String("fd1a6552-4dde-4adf-8b1a-8ec2fde30306"),
                            Kind: sdk.String("similique"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("explicabo"),
                        },
                    },
                    Kind: sdk.String("dolorum"),
                    MetricNames: []string{
                        "alias",
                        "consequatur",
                        "repellendus",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("ipsum"),
                            Etag: sdk.String("laboriosam"),
                            ID: sdk.String("5cdbc778-813a-42a6-9c05-3aa684670cd1"),
                            Kind: sdk.String("labore"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("nemo"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("unde"),
                            Etag: sdk.String("voluptate"),
                            ID: sdk.String("e81377fe-3388-41fc-bde2-09840849e466"),
                            Kind: sdk.String("quam"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("ex"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("iusto"),
                            Etag: sdk.String("cum"),
                            ID: sdk.String("3658412b-c86f-49dd-9655-a97781f81f90"),
                            Kind: sdk.String("dolorum"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("ipsum"),
                        },
                    },
                    Kind: sdk.String("nisi"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-10-22"),
                    Kind: sdk.String("quo"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast30Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-05-28"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("impedit"),
                        Etag: sdk.String("explicabo"),
                        ID: sdk.String("57ebb7d8-f720-4e54-9ccc-7d6ccfa66f22"),
                        Kind: sdk.String("iusto"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("sequi"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("beatae"),
                        Etag: sdk.String("autem"),
                        ID: sdk.String("def416a0-4e81-48a8-b3e7-0b461a687a27"),
                        Kind: sdk.String("impedit"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("exercitationem"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("nam"),
                        Etag: sdk.String("aliquid"),
                        ID: sdk.String("b414b606-e87b-4f1d-9c27-182f07d3c509"),
                        Kind: sdk.String("minima"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("similique"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("totam"),
                        Etag: sdk.String("sed"),
                        ID: sdk.String("0281624a-eac4-4440-ad7b-e9ac5cca7b9a"),
                        Kind: sdk.String("animi"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("minima"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("blanditiis"),
                        Name: sdk.String("Joe Reynolds"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("reprehenderit"),
                        Name: sdk.String("Peter Bayer"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "iusto",
                    "explicabo",
                    "deleniti",
                    "nam",
                },
                ReachByFrequencyMetricNames: []string{
                    "eaque",
                    "a",
                    "placeat",
                    "numquam",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(802027),
                ExpirationDate: types.MustDateFromString("2022-01-12"),
                Repeats: sdk.String("sequi"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumTuesday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumWednesday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumWeekOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2022-04-06"),
            },
            SubAccountID: sdk.String("praesentium"),
            Type: shared.ReportTypeEnumFloodlight.ToPointer(),
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "est",
        QuotaUser: sdk.String("ab"),
        ReportID: "error",
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("iste"),
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
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "expedita",
        QuotaUser: sdk.String("illum"),
        ReportID: "assumenda",
        Synchronous: sdk.Bool(false),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("aut"),
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
            AccountID: sdk.String("ad"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("nesciunt"),
                            Etag: sdk.String("officia"),
                            ID: sdk.String("09d587bd-341b-425d-a429-0537fd8ba50e"),
                            Kind: sdk.String("dolorum"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("laborum"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("nobis"),
                            Etag: sdk.String("qui"),
                            ID: sdk.String("c35b8474-91bd-4ea9-8e0f-5844da9b1a10"),
                            Kind: sdk.String("officia"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("voluptas"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("adipisci"),
                            Etag: sdk.String("hic"),
                            ID: sdk.String("32fda234-2b00-4495-a4db-a9a17a84fbb7"),
                            Kind: sdk.String("unde"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("facere"),
                        },
                    },
                    Kind: sdk.String("qui"),
                    MetricNames: []string{
                        "quos",
                        "vitae",
                        "ut",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("suscipit"),
                            Etag: sdk.String("dicta"),
                            ID: sdk.String("cc8de8b0-2b13-4a18-9bc8-bfff44ec8c4d"),
                            Kind: sdk.String("sapiente"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("et"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("recusandae"),
                            Etag: sdk.String("error"),
                            ID: sdk.String("60b99b5e-31a1-4e36-81a4-d6163ae1c1e2"),
                            Kind: sdk.String("odit"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("est"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("dolores"),
                            Etag: sdk.String("veniam"),
                            ID: sdk.String("0a4293f3-68d6-43af-9000-d5ded9d00dc2"),
                            Kind: sdk.String("laboriosam"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("vitae"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("veritatis"),
                            Etag: sdk.String("repellat"),
                            ID: sdk.String("ea0de223-3638-4272-8d06-05a3ae892563"),
                            Kind: sdk.String("voluptates"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("praesentium"),
                        },
                    },
                    Kind: sdk.String("neque"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-11-14"),
                    Kind: sdk.String("recusandae"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast7Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-03-03"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("eos"),
                        Etag: sdk.String("esse"),
                        ID: sdk.String("94752695-a9b4-4448-a54e-e709a8df6e2f"),
                        Kind: sdk.String("dolorem"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("impedit"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("iusto"),
                        Etag: sdk.String("nemo"),
                        ID: sdk.String("7bbfb860-857a-4c07-baad-6a85f7b7cf56"),
                        Kind: sdk.String("eius"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("fuga"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("eveniet"),
                        Etag: sdk.String("atque"),
                        ID: sdk.String("bc3b63aa-4b27-47d9-8ae9-d4a576c35347"),
                        Kind: sdk.String("sunt"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("dolor"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("quam"),
                        Name: sdk.String("Doyle Beahan"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "dolore",
                    "voluptatibus",
                    "minus",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("soluta"),
                        Name: sdk.String("Mr. Lorene Murphy"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("pariatur"),
                        Name: sdk.String("Bryant Corwin PhD"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-01-17"),
                    Kind: sdk.String("illo"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumQuarterToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-08-28"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumAdvertiser.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("nulla"),
                        Etag: sdk.String("asperiores"),
                        ID: sdk.String("c405f587-14f8-4edf-ae48-ee833e56841f"),
                        Kind: sdk.String("accusantium"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("expedita"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quibusdam"),
                        Etag: sdk.String("soluta"),
                        ID: sdk.String("571d09bc-1e7c-464c-970a-6903be71b777"),
                        Kind: sdk.String("aut"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("at"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("laborum"),
                        Etag: sdk.String("repudiandae"),
                        ID: sdk.String("092b704b-1195-4944-9c7f-113e7df636c9"),
                        Kind: sdk.String("dolores"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("officia"),
                    },
                },
                MetricNames: []string{
                    "amet",
                },
                OverlapMetricNames: []string{
                    "impedit",
                    "deserunt",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment.ToPointer(),
                Message: sdk.String("error"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Mohammad76@gmail.com"),
                        Kind: sdk.String("recusandae"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Ansel_Erdman13@yahoo.com"),
                        Kind: sdk.String("dolor"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Joan.Swift@hotmail.com"),
                        Kind: sdk.String("dolores"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Joshua_Johns57@hotmail.com"),
                        Kind: sdk.String("suscipit"),
                    },
                },
            },
            Etag: sdk.String("deleniti"),
            FileName: sdk.String("assumenda"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("sint"),
                        Etag: sdk.String("porro"),
                        ID: sdk.String("caa75766-c200-427a-8b9d-3cbfeed63c64"),
                        Kind: sdk.String("amet"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("reprehenderit"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("repellat"),
                        Etag: sdk.String("maiores"),
                        ID: sdk.String("b75ff102-6286-48b3-968b-dcfb002a23fa"),
                        Kind: sdk.String("necessitatibus"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("beatae"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("sint"),
                        Etag: sdk.String("asperiores"),
                        ID: sdk.String("32a5ee50-15f7-481d-af1d-f8ef0703ed1e"),
                        Kind: sdk.String("consequuntur"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("culpa"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("cum"),
                        Etag: sdk.String("dolorem"),
                        ID: sdk.String("55db3391-2ce0-424a-934c-e21c081b1808"),
                        Kind: sdk.String("modi"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("impedit"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-12-19"),
                    Kind: sdk.String("sint"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast24Months.ToPointer(),
                    StartDate: types.MustDateFromString("2022-07-14"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptates"),
                        Etag: sdk.String("ducimus"),
                        ID: sdk.String("7399e412-ee76-47f9-ad0b-3bd159d86840"),
                        Kind: sdk.String("quod"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("illo"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("ad"),
                        Etag: sdk.String("vero"),
                        ID: sdk.String("66e5e309-dfc5-4f3f-bf1c-3fa2b96cf325"),
                        Kind: sdk.String("distinctio"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("ex"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("adipisci"),
                        Name: sdk.String("Lillian Ruecker"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("soluta"),
                        Name: sdk.String("Ms. Daisy Mohr DDS"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("optio"),
                        Name: sdk.String("Jason Parker"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("totam"),
                    Etag: sdk.String("illum"),
                    ID: sdk.String("0469c729-88cb-4b52-af9c-024c742ebd1a"),
                    Kind: sdk.String("nam"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("possimus"),
                },
                MetricNames: []string{
                    "fuga",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumCsv.ToPointer(),
            ID: sdk.String("voluptates"),
            Kind: sdk.String("officiis"),
            LastModifiedTime: sdk.String("expedita"),
            Name: sdk.String("Carmen Gusikowski"),
            OwnerProfileID: sdk.String("velit"),
            PathAttributionCriteria: &shared.ReportPathAttributionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("repellendus"),
                        Etag: sdk.String("vero"),
                        ID: sdk.String("9c829562-467a-4249-88fa-9a5eb840eec1"),
                        Kind: sdk.String("autem"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("tempore"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("sequi"),
                    Kind: sdk.String("alias"),
                    Name: sdk.String("Robyn Wilkinson III"),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("eum"),
                                                Ids: []string{
                                                    "alias",
                                                    "eos",
                                                    "aspernatur",
                                                },
                                                Kind: sdk.String("nam"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "accusantium",
                                                    "ducimus",
                                                    "omnis",
                                                    "sunt",
                                                },
                                            },
                                            Kind: sdk.String("necessitatibus"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("quibusdam"),
                                                Ids: []string{
                                                    "hic",
                                                    "rerum",
                                                },
                                                Kind: sdk.String("repellendus"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                                Values: []string{
                                                    "earum",
                                                    "temporibus",
                                                    "pariatur",
                                                },
                                            },
                                            Kind: sdk.String("voluptas"),
                                        },
                                    },
                                    Kind: sdk.String("pariatur"),
                                },
                            },
                            Kind: sdk.String("ducimus"),
                            Name: sdk.String("Walter Wisozk"),
                        },
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2020-02-16"),
                    Kind: sdk.String("fugiat"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumQuarterToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2021-08-15"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("repellendus"),
                        Name: sdk.String("Josefina Wehner"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("excepturi"),
                        Name: sdk.String("Jessica Mohr"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quod"),
                        Name: sdk.String("Mark Kozey"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("veritatis"),
                        Name: sdk.String("Caleb Dibbert"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("aliquam"),
                    Etag: sdk.String("cumque"),
                    ID: sdk.String("0df1c5fd-fb7c-44ce-90d3-18d356393e1d"),
                    Kind: sdk.String("ducimus"),
                    MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                    Value: sdk.String("porro"),
                },
                MetricNames: []string{
                    "mollitia",
                    "quo",
                    "asperiores",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("temporibus"),
                                    Ids: []string{
                                        "aliquam",
                                        "ea",
                                        "magni",
                                    },
                                    Kind: sdk.String("dicta"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "quasi",
                                        "nulla",
                                    },
                                },
                                Kind: sdk.String("at"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("quis"),
                                    Ids: []string{
                                        "sunt",
                                        "quia",
                                    },
                                    Kind: sdk.String("voluptatum"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "architecto",
                                        "dicta",
                                        "quod",
                                    },
                                },
                                Kind: sdk.String("cumque"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("minus"),
                                    Ids: []string{
                                        "at",
                                        "cupiditate",
                                        "eius",
                                    },
                                    Kind: sdk.String("accusantium"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "in",
                                    },
                                },
                                Kind: sdk.String("reprehenderit"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("atque"),
                                    Ids: []string{
                                        "adipisci",
                                    },
                                    Kind: sdk.String("libero"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "ipsam",
                                    },
                                },
                                Kind: sdk.String("corporis"),
                            },
                        },
                        Kind: sdk.String("hic"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumPathMatchPositionUnspecified.ToPointer(),
                    },
                },
            },
            PathCriteria: &shared.ReportPathCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("numquam"),
                        Etag: sdk.String("natus"),
                        ID: sdk.String("d58abf33-3f91-43f3-b10c-b13ebd52ff95"),
                        Kind: sdk.String("libero"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("sequi"),
                    },
                },
                CustomChannelGrouping: &shared.ChannelGrouping{
                    FallbackName: sdk.String("illo"),
                    Kind: sdk.String("est"),
                    Name: sdk.String("Brandi Kiehn Sr."),
                    Rules: []shared.ChannelGroupingRule{
                        shared.ChannelGroupingRule{
                            DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                shared.DisjunctiveMatchStatement{
                                    EventFilters: []shared.EventFilter{
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("molestias"),
                                                Ids: []string{
                                                    "sint",
                                                },
                                                Kind: sdk.String("sunt"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                                Values: []string{
                                                    "eius",
                                                    "architecto",
                                                },
                                            },
                                            Kind: sdk.String("aliquid"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("mollitia"),
                                                Ids: []string{
                                                    "quisquam",
                                                },
                                                Kind: sdk.String("perspiciatis"),
                                                MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                                Values: []string{
                                                    "quae",
                                                    "molestiae",
                                                    "iste",
                                                    "et",
                                                },
                                            },
                                            Kind: sdk.String("adipisci"),
                                        },
                                        shared.EventFilter{
                                            DimensionFilter: &shared.PathReportDimensionValue{
                                                DimensionName: sdk.String("qui"),
                                                Ids: []string{
                                                    "adipisci",
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
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-04-16"),
                    Kind: sdk.String("deleniti"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousQuarter.ToPointer(),
                    StartDate: types.MustDateFromString("2022-04-05"),
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("at"),
                        Name: sdk.String("Jacqueline Fay"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("corporis"),
                        Name: sdk.String("Joyce Wyman"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("tempora"),
                        Name: sdk.String("Eva Cronin"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("nam"),
                        Name: sdk.String("Bradley Schoen"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("consequuntur"),
                    Etag: sdk.String("repellat"),
                    ID: sdk.String("e1a92452-947b-45a7-9c1d-18927d571e7d"),
                    Kind: sdk.String("modi"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("at"),
                },
                MetricNames: []string{
                    "quidem",
                    "aliquam",
                },
                PathFilters: []shared.PathFilter{
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("repudiandae"),
                                    Ids: []string{
                                        "quas",
                                        "maiores",
                                        "assumenda",
                                    },
                                    Kind: sdk.String("nemo"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "hic",
                                        "eveniet",
                                        "et",
                                        "itaque",
                                    },
                                },
                                Kind: sdk.String("quo"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("corporis"),
                                    Ids: []string{
                                        "quaerat",
                                    },
                                    Kind: sdk.String("beatae"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumExact.ToPointer(),
                                    Values: []string{
                                        "error",
                                        "libero",
                                        "ab",
                                        "perspiciatis",
                                    },
                                },
                                Kind: sdk.String("molestias"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("voluptates"),
                                    Ids: []string{
                                        "nisi",
                                        "ipsa",
                                    },
                                    Kind: sdk.String("alias"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                    Values: []string{
                                        "quibusdam",
                                    },
                                },
                                Kind: sdk.String("nam"),
                            },
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("cumque"),
                                    Ids: []string{
                                        "repellendus",
                                        "cupiditate",
                                    },
                                    Kind: sdk.String("commodi"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                    Values: []string{
                                        "consectetur",
                                    },
                                },
                                Kind: sdk.String("dolores"),
                            },
                        },
                        Kind: sdk.String("soluta"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                    },
                    shared.PathFilter{
                        EventFilters: []shared.EventFilter{
                            shared.EventFilter{
                                DimensionFilter: &shared.PathReportDimensionValue{
                                    DimensionName: sdk.String("porro"),
                                    Ids: []string{
                                        "sunt",
                                        "nobis",
                                        "sapiente",
                                    },
                                    Kind: sdk.String("veritatis"),
                                    MatchType: shared.PathReportDimensionValueMatchTypeEnumContains.ToPointer(),
                                    Values: []string{
                                        "soluta",
                                        "recusandae",
                                    },
                                },
                                Kind: sdk.String("neque"),
                            },
                        },
                        Kind: sdk.String("quam"),
                        PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                    },
                },
            },
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("consequatur"),
                        Etag: sdk.String("impedit"),
                        ID: sdk.String("9dc10853-2bbf-4a06-a6a6-6fa46cfc77da"),
                        Kind: sdk.String("itaque"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("cum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("excepturi"),
                        Etag: sdk.String("laborum"),
                        ID: sdk.String("4b822497-d622-4654-b405-a357e14ef9de"),
                        Kind: sdk.String("dolorem"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("necessitatibus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("impedit"),
                        Etag: sdk.String("quaerat"),
                        ID: sdk.String("e756d2e8-b05f-4969-9948-4892ca55b914"),
                        Kind: sdk.String("illo"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("et"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("ut"),
                        Name: sdk.String("Everett Rohan"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("at"),
                        Name: sdk.String("Winston Bauch"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("excepturi"),
                        Name: sdk.String("Samuel Bogan"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("consectetur"),
                        Name: sdk.String("Dewey Harber"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("dignissimos"),
                        Name: sdk.String("Mr. Rogelio Kohler MD"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("eius"),
                        Etag: sdk.String("ad"),
                        ID: sdk.String("6ef9ec58-b95c-46f0-b20c-5fcc0ee4a530"),
                        Kind: sdk.String("iure"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("voluptatem"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("a"),
                        Etag: sdk.String("ab"),
                        ID: sdk.String("3833424f-7a60-4044-a7fd-4f9284e0025b"),
                        Kind: sdk.String("dolores"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("porro"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-08-11"),
                    Kind: sdk.String("tempore"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast24Months.ToPointer(),
                    StartDate: types.MustDateFromString("2022-06-22"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("aliquid"),
                    Etag: sdk.String("tenetur"),
                    ID: sdk.String("f7551b22-aab0-49bc-882a-e010b5e4a698"),
                    Kind: sdk.String("nam"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("dolor"),
                },
                MetricNames: []string{
                    "magnam",
                    "reprehenderit",
                    "repellendus",
                    "dignissimos",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("veritatis"),
                        Name: sdk.String("Melvin Torp IV"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(257297),
                    ImpressionsLookbackWindow: sdk.Int(103496),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(86004),
                    MaximumImpressionInteractions: sdk.Int(106535),
                    MaximumInteractionGap: sdk.Int(831169),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("facere"),
                            Etag: sdk.String("error"),
                            ID: sdk.String("6326794b-8565-486a-a406-987247751c65"),
                            Kind: sdk.String("natus"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("itaque"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("ipsum"),
                            Etag: sdk.String("ducimus"),
                            ID: sdk.String("6387837e-be60-42b2-bada-9b5306e39443"),
                            Kind: sdk.String("vitae"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("quas"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("iusto"),
                            Etag: sdk.String("rerum"),
                            ID: sdk.String("79601e76-914b-4f75-a183-5e38efcf584a"),
                            Kind: sdk.String("eligendi"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("impedit"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("porro"),
                            Etag: sdk.String("consequatur"),
                            ID: sdk.String("8d97a199-553e-42cc-a2c7-4544f310b7b3"),
                            Kind: sdk.String("dolorem"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("accusamus"),
                        },
                    },
                    Kind: sdk.String("repellat"),
                    MetricNames: []string{
                        "similique",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("excepturi"),
                            Etag: sdk.String("alias"),
                            ID: sdk.String("cb09665a-fab9-4b36-8dd5-d055f5fbbe38"),
                            Kind: sdk.String("consectetur"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("molestiae"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("perferendis"),
                            Etag: sdk.String("illo"),
                            ID: sdk.String("ce8685a7-5eee-4143-8c6d-0089cbc2b63a"),
                            Kind: sdk.String("illo"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("magni"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("quas"),
                            Etag: sdk.String("consequatur"),
                            ID: sdk.String("7c6346c1-a896-4c41-b347-a8f8b8a6c0ad"),
                            Kind: sdk.String("ea"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("consectetur"),
                        },
                    },
                    Kind: sdk.String("iste"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-02-09"),
                    Kind: sdk.String("deserunt"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast30Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-06-01"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("rerum"),
                        Etag: sdk.String("doloremque"),
                        ID: sdk.String("edf3c8b3-ea9a-4dcb-8adf-c088d81329f3"),
                        Kind: sdk.String("explicabo"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("similique"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("reiciendis"),
                        Etag: sdk.String("officia"),
                        ID: sdk.String("8616c817-ba41-4d31-9791-3d1e3b8d6247"),
                        Kind: sdk.String("aperiam"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("eaque"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("placeat"),
                        Name: sdk.String("Byron Kilback"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("fuga"),
                        Name: sdk.String("Ms. Delia Bartell V"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ipsum"),
                        Name: sdk.String("Ms. Angel Cole"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("similique"),
                        Name: sdk.String("Veronica Crist"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "velit",
                    "vero",
                    "aut",
                    "provident",
                },
                ReachByFrequencyMetricNames: []string{
                    "commodi",
                    "vero",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(145580),
                ExpirationDate: types.MustDateFromString("2022-07-22"),
                Repeats: sdk.String("repudiandae"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumMonday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSaturday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumThursday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSaturday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumDayOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2022-06-22"),
            },
            SubAccountID: sdk.String("doloribus"),
            Type: shared.ReportTypeEnumFloodlight.ToPointer(),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "cumque",
        QuotaUser: sdk.String("eveniet"),
        ReportID: "cum",
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("ab"),
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
