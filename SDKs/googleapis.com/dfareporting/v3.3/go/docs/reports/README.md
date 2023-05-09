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
            AccountID: sdk.String("sed"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("dolores"),
                            Etag: sdk.String("dolores"),
                            ID: sdk.String("b4a9850e-d2f4-4a1e-9c4a-e55140e75726"),
                            Kind: sdk.String("earum"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("consequatur"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("nesciunt"),
                            Etag: sdk.String("porro"),
                            ID: sdk.String("2f029419-2518-4cee-81c9-99f469f6f1cf"),
                            Kind: sdk.String("quasi"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("adipisci"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("a"),
                            Etag: sdk.String("ipsa"),
                            ID: sdk.String("23c669e6-a626-4012-aba0-57988c6720c3"),
                            Kind: sdk.String("illo"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("sequi"),
                        },
                    },
                    Kind: sdk.String("maiores"),
                    MetricNames: []string{
                        "officia",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("alias"),
                            Etag: sdk.String("eligendi"),
                            ID: sdk.String("0f3ec868-8fd8-4ec6-bc03-128f0aaaeee0"),
                            Kind: sdk.String("aut"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("accusamus"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("distinctio"),
                            Etag: sdk.String("dolorum"),
                            ID: sdk.String("7bf8732b-e509-4c50-8713-1f06f0bce55a"),
                            Kind: sdk.String("quas"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("voluptatum"),
                        },
                    },
                    Kind: sdk.String("iure"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-09-26"),
                    Kind: sdk.String("ratione"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast365Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-01-27"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("doloremque"),
                        Etag: sdk.String("ullam"),
                        ID: sdk.String("ff797a5d-a664-4b7e-b78a-74baaa2832bb"),
                        Kind: sdk.String("eum"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("totam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("laboriosam"),
                        Etag: sdk.String("fugit"),
                        ID: sdk.String("d2a31f9b-14aa-46bd-ac7f-444232e9a5de"),
                        Kind: sdk.String("debitis"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("laborum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("cumque"),
                        Etag: sdk.String("repellendus"),
                        ID: sdk.String("72a89981-b58f-4e68-ae1c-2dbe23d58e82"),
                        Kind: sdk.String("magnam"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("facere"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("consequuntur"),
                        Name: sdk.String("Brooke McKenzie"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "nihil",
                    "praesentium",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("id"),
                        Name: sdk.String("Jo McClure"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("commodi"),
                        Name: sdk.String("Cindy Hirthe"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("aut"),
                        Name: sdk.String("Velma Baumbach"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("deserunt"),
                        Name: sdk.String("Alton Larson"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-07-24"),
                    Kind: sdk.String("adipisci"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumToday.ToPointer(),
                    StartDate: types.MustDateFromString("2021-06-16"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumSiteByCampaign.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("rerum"),
                        Etag: sdk.String("rem"),
                        ID: sdk.String("9d9ca607-5656-4fc0-abe6-7155e2d06a30"),
                        Kind: sdk.String("in"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("nulla"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("vel"),
                        Etag: sdk.String("earum"),
                        ID: sdk.String("297f581f-abaa-4a7d-8010-88076ff5f6ed"),
                        Kind: sdk.String("quia"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("laudantium"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("ab"),
                        Etag: sdk.String("numquam"),
                        ID: sdk.String("088269b6-a70b-40dd-82f9-4fffbd1e1e21"),
                        Kind: sdk.String("nulla"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("quisquam"),
                    },
                },
                MetricNames: []string{
                    "sint",
                    "doloremque",
                },
                OverlapMetricNames: []string{
                    "deleniti",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment.ToPointer(),
                Message: sdk.String("dicta"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Jan11@yahoo.com"),
                        Kind: sdk.String("accusamus"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Wyatt0@gmail.com"),
                        Kind: sdk.String("tempore"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Amos58@hotmail.com"),
                        Kind: sdk.String("sit"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Britney34@hotmail.com"),
                        Kind: sdk.String("aliquam"),
                    },
                },
            },
            Etag: sdk.String("id"),
            FileName: sdk.String("omnis"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("unde"),
                        Etag: sdk.String("consequatur"),
                        ID: sdk.String("43cb462d-6bc9-4917-b98e-4792b979a413"),
                        Kind: sdk.String("vero"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("dolorum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("rem"),
                        Etag: sdk.String("impedit"),
                        ID: sdk.String("91683bd8-61d0-4d98-8cf8-9d3861186ed7"),
                        Kind: sdk.String("nisi"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("eaque"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-11-01"),
                    Kind: sdk.String("tenetur"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast30Days.ToPointer(),
                    StartDate: types.MustDateFromString("2020-12-05"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("nesciunt"),
                        Etag: sdk.String("dolorum"),
                        ID: sdk.String("c24c8143-b866-4c57-9a1e-2668730be37b"),
                        Kind: sdk.String("sit"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("corrupti"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("nam"),
                        Name: sdk.String("Theodore Lindgren"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("esse"),
                        Name: sdk.String("Hector Marks"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quis"),
                        Name: sdk.String("Mrs. Karen Hilll Sr."),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("fugiat"),
                        Name: sdk.String("Mrs. Ernesto Bogisich"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("sed"),
                    Etag: sdk.String("quaerat"),
                    ID: sdk.String("84c36e94-8892-4782-934e-0b8fc0d59f57"),
                    Kind: sdk.String("tempore"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("asperiores"),
                },
                MetricNames: []string{
                    "rem",
                    "odit",
                    "eaque",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumExcel.ToPointer(),
            ID: sdk.String("accusamus"),
            Kind: sdk.String("ipsa"),
            LastModifiedTime: sdk.String("iusto"),
            Name: sdk.String("Kevin Lueilwitz"),
            OwnerProfileID: sdk.String("commodi"),
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("cupiditate"),
                        Etag: sdk.String("necessitatibus"),
                        ID: sdk.String("2f70344e-00f4-478e-b539-483f748eefcc"),
                        Kind: sdk.String("distinctio"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("sint"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("repellendus"),
                        Etag: sdk.String("minima"),
                        ID: sdk.String("41b4b393-f356-4662-9bea-32201dec379c"),
                        Kind: sdk.String("voluptas"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("quas"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("saepe"),
                        Etag: sdk.String("officia"),
                        ID: sdk.String("1d48c5c2-f9e2-41d9-8fd5-3776bfc7677f"),
                        Kind: sdk.String("voluptatem"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("nostrum"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("doloremque"),
                        Etag: sdk.String("eius"),
                        ID: sdk.String("a6e4828f-b6da-4ee1-9c26-c0cb618c6331"),
                        Kind: sdk.String("optio"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("soluta"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("deserunt"),
                        Name: sdk.String("Karl Kautzer"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("tempora"),
                        Name: sdk.String("Dr. Ernestine Stanton"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("animi"),
                        Name: sdk.String("Dexter Harris"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("velit"),
                        Name: sdk.String("Leo Grant"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("facilis"),
                        Name: sdk.String("Kayla Sporer"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("molestias"),
                        Name: sdk.String("Ms. Dan Schneider"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ipsam"),
                        Name: sdk.String("Jordan Kuhn"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("corrupti"),
                        Name: sdk.String("Florence Connelly"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("molestias"),
                        Etag: sdk.String("exercitationem"),
                        ID: sdk.String("c0cbcb2c-a879-408d-b380-9a02f06e9228"),
                        Kind: sdk.String("cum"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("ex"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("aperiam"),
                        Etag: sdk.String("nisi"),
                        ID: sdk.String("5a5074be-fb8a-4f68-89d2-b99404363a09"),
                        Kind: sdk.String("nisi"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("impedit"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptatem"),
                        Etag: sdk.String("ipsam"),
                        ID: sdk.String("3876e39d-ef9c-4765-9fd7-354e5cb94977"),
                        Kind: sdk.String("voluptatem"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("voluptate"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("harum"),
                        Etag: sdk.String("quia"),
                        ID: sdk.String("6204bb26-ca4e-4999-8287-9defc0b23960"),
                        Kind: sdk.String("autem"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("doloribus"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-12-23"),
                    Kind: sdk.String("laborum"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast365Days.ToPointer(),
                    StartDate: types.MustDateFromString("2021-12-03"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("unde"),
                    Etag: sdk.String("recusandae"),
                    ID: sdk.String("1a34715a-cda0-444f-aaed-6e13a620e2e9"),
                    Kind: sdk.String("illo"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("eligendi"),
                },
                MetricNames: []string{
                    "quis",
                    "distinctio",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("modi"),
                        Name: sdk.String("Leslie Schiller"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(516342),
                    ImpressionsLookbackWindow: sdk.Int(681434),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(29783),
                    MaximumImpressionInteractions: sdk.Int(745497),
                    MaximumInteractionGap: sdk.Int(203094),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("eius"),
                            Etag: sdk.String("eum"),
                            ID: sdk.String("17dd95ce-3044-4be4-ab3b-31cb503c3140"),
                            Kind: sdk.String("repellendus"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("esse"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("iusto"),
                            Etag: sdk.String("explicabo"),
                            ID: sdk.String("c535e1dd-6bf6-44b4-94e9-831e795f0e57"),
                            Kind: sdk.String("voluptatibus"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("eius"),
                        },
                    },
                    Kind: sdk.String("necessitatibus"),
                    MetricNames: []string{
                        "delectus",
                        "quia",
                        "pariatur",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("tempore"),
                            Etag: sdk.String("dolore"),
                            ID: sdk.String("6097efa4-4a8d-4ff4-8cdd-1850bf5a0cbc"),
                            Kind: sdk.String("quas"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("quam"),
                        },
                    },
                    Kind: sdk.String("blanditiis"),
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
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "voluptas",
                    "nemo",
                },
                ReachByFrequencyMetricNames: []string{
                    "nesciunt",
                    "illo",
                    "dolores",
                    "cumque",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(451484),
                ExpirationDate: types.MustDateFromString("2021-11-21"),
                Repeats: sdk.String("ullam"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSaturday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumDayOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2022-11-13"),
            },
            SubAccountID: sdk.String("sunt"),
            Type: shared.ReportTypeEnumFloodlight.ToPointer(),
        },
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("qui"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nulla",
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("quas"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quos",
        QuotaUser: sdk.String("quo"),
        ReportID: "dicta",
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("ab"),
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
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("officiis"),
        FileID: "inventore",
        Key: sdk.String("a"),
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptate",
        QuotaUser: sdk.String("repudiandae"),
        ReportID: "id",
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("aut"),
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
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("aut"),
        Key: sdk.String("laboriosam"),
        MaxResults: sdk.Int64(926252),
        OauthToken: sdk.String("laborum"),
        PageToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "commodi",
        QuotaUser: sdk.String("ipsa"),
        ReportID: "suscipit",
        SortField: operations.DfareportingReportsFilesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingReportsFilesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("accusamus"),
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
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ullam",
        QuotaUser: sdk.String("deleniti"),
        ReportID: "repellendus",
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("laborum"),
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
            AccountID: sdk.String("veniam"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("impedit"),
                            Etag: sdk.String("totam"),
                            ID: sdk.String("0dea77fd-9931-4ec9-9106-cff2c26ab840"),
                            Kind: sdk.String("animi"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("totam"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("repudiandae"),
                            Etag: sdk.String("id"),
                            ID: sdk.String("0672d6b7-3a34-4ca4-b4cd-b3149a19f252"),
                            Kind: sdk.String("perferendis"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("blanditiis"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("similique"),
                            Etag: sdk.String("sunt"),
                            ID: sdk.String("8a4b0dae-d4b5-4cf0-a16e-e9227575bd60"),
                            Kind: sdk.String("pariatur"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("est"),
                        },
                    },
                    Kind: sdk.String("voluptatem"),
                    MetricNames: []string{
                        "quae",
                        "eius",
                        "unde",
                        "placeat",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("dicta"),
                            Etag: sdk.String("quod"),
                            ID: sdk.String("cdd362bb-f923-4900-95f2-6899cf4ffeb9"),
                            Kind: sdk.String("expedita"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("impedit"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("ullam"),
                            Etag: sdk.String("aperiam"),
                            ID: sdk.String("318a81eb-01d2-497f-bb45-6a855e5088c8"),
                            Kind: sdk.String("id"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("magni"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("vel"),
                            Etag: sdk.String("dolorem"),
                            ID: sdk.String("41acccca-663d-44a8-995c-1b32bb213e3b"),
                            Kind: sdk.String("dolor"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("porro"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("temporibus"),
                            Etag: sdk.String("ea"),
                            ID: sdk.String("a5be7490-6b96-4c63-ae74-d28a48149a1b"),
                            Kind: sdk.String("rem"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("veritatis"),
                        },
                    },
                    Kind: sdk.String("dicta"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-12-24"),
                    Kind: sdk.String("ea"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumQuarterToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-09-04"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("dignissimos"),
                        Etag: sdk.String("vel"),
                        ID: sdk.String("b3087113-de40-4610-82d0-953c89cd927a"),
                        Kind: sdk.String("ad"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("officia"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("nostrum"),
                        Etag: sdk.String("exercitationem"),
                        ID: sdk.String("11bb8370-d978-44fb-9464-7331bc5be61b"),
                        Kind: sdk.String("velit"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("dolorem"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("quam"),
                        Etag: sdk.String("beatae"),
                        ID: sdk.String("72874c37-7c8d-4439-ac6b-d2cad006d77c"),
                        Kind: sdk.String("iure"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("soluta"),
                    },
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
                MetricNames: []string{
                    "distinctio",
                    "placeat",
                    "quisquam",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("quo"),
                        Name: sdk.String("Danny Corkery"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("officiis"),
                        Name: sdk.String("Charles Jacobson"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("est"),
                        Name: sdk.String("Miss Stewart Considine Sr."),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-07-09"),
                    Kind: sdk.String("animi"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousQuarter.ToPointer(),
                    StartDate: types.MustDateFromString("2022-02-26"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumSiteByAdvertiser.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("tenetur"),
                        Etag: sdk.String("tempora"),
                        ID: sdk.String("452bed74-70fc-448c-a82b-8716c27f6b17"),
                        Kind: sdk.String("minima"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("atque"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("alias"),
                        Etag: sdk.String("ratione"),
                        ID: sdk.String("04c40ac2-b4ad-4825-8fde-37724350ed85"),
                        Kind: sdk.String("dolorum"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("delectus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("rem"),
                        Etag: sdk.String("placeat"),
                        ID: sdk.String("c2911a6b-7ebd-4c60-89f0-1dd38523cda4"),
                        Kind: sdk.String("officiis"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("distinctio"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("iste"),
                        Etag: sdk.String("asperiores"),
                        ID: sdk.String("d83f83df-9b0c-446a-894e-2e9c2205dfe7"),
                        Kind: sdk.String("laboriosam"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("libero"),
                    },
                },
                MetricNames: []string{
                    "a",
                    "rerum",
                    "eligendi",
                    "quidem",
                },
                OverlapMetricNames: []string{
                    "commodi",
                    "aperiam",
                    "quasi",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumLink.ToPointer(),
                Message: sdk.String("maiores"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Manley29@yahoo.com"),
                        Kind: sdk.String("aut"),
                    },
                },
            },
            Etag: sdk.String("esse"),
            FileName: sdk.String("consequatur"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("hic"),
                        Etag: sdk.String("dolorum"),
                        ID: sdk.String("7398247a-8721-47fe-9962-df3eee7c385c"),
                        Kind: sdk.String("in"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("in"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("consequatur"),
                        Etag: sdk.String("officiis"),
                        ID: sdk.String("1a1a8dbc-f6e1-49b9-812c-444e231ba147"),
                        Kind: sdk.String("in"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("iusto"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2020-04-11"),
                    Kind: sdk.String("iste"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousWeek.ToPointer(),
                    StartDate: types.MustDateFromString("2021-08-15"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("fuga"),
                        Etag: sdk.String("fugiat"),
                        ID: sdk.String("abf6800b-01bc-4bc0-b2f2-c19dbf7111a9"),
                        Kind: sdk.String("commodi"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("maiores"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("quae"),
                        Name: sdk.String("Andrea Dicki"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("beatae"),
                    Etag: sdk.String("sequi"),
                    ID: sdk.String("65217a6e-596a-4a41-b9e2-053ae8c31532"),
                    Kind: sdk.String("nemo"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("ad"),
                },
                MetricNames: []string{
                    "eaque",
                    "dolores",
                    "dolores",
                    "iste",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumCsv.ToPointer(),
            ID: sdk.String("iusto"),
            Kind: sdk.String("sed"),
            LastModifiedTime: sdk.String("voluptas"),
            Name: sdk.String("Mrs. Bob Lebsack"),
            OwnerProfileID: sdk.String("illum"),
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("optio"),
                        Etag: sdk.String("itaque"),
                        ID: sdk.String("6dd2a099-1b6d-4176-8043-c799a2a18db1"),
                        Kind: sdk.String("sunt"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("assumenda"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("minus"),
                        Etag: sdk.String("ipsam"),
                        ID: sdk.String("24abb7b1-0caf-4244-9e10-3d0830ac4d07"),
                        Kind: sdk.String("aut"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("aliquam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("eveniet"),
                        Etag: sdk.String("adipisci"),
                        ID: sdk.String("96e562c5-ccb1-4637-b314-dad58b890542"),
                        Kind: sdk.String("officiis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("laborum"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("minima"),
                        Name: sdk.String("Peter Berge"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("error"),
                        Name: sdk.String("Timothy White"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("occaecati"),
                        Name: sdk.String("Marshall Osinski"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ratione"),
                        Name: sdk.String("Ellen Shields"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("qui"),
                        Name: sdk.String("Darla Beer"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quo"),
                        Name: sdk.String("Calvin Bernhard"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptate"),
                        Etag: sdk.String("aperiam"),
                        ID: sdk.String("4b3ae709-34d9-4ebb-aa28-f6f71b0652fe"),
                        Kind: sdk.String("suscipit"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("amet"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("vel"),
                        Etag: sdk.String("voluptatibus"),
                        ID: sdk.String("b30a414a-a294-4d64-808a-2ec1a807151a"),
                        Kind: sdk.String("non"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("incidunt"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("soluta"),
                        Etag: sdk.String("dolorum"),
                        ID: sdk.String("1a6d7ddc-3991-47b8-84c8-502a99e62f49"),
                        Kind: sdk.String("modi"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("porro"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("est"),
                        Etag: sdk.String("sed"),
                        ID: sdk.String("d7266cd7-6381-4272-baa0-3f83a1e1e7ab"),
                        Kind: sdk.String("dolorem"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("ipsa"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-04-01"),
                    Kind: sdk.String("ipsa"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousWeek.ToPointer(),
                    StartDate: types.MustDateFromString("2022-08-21"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("nesciunt"),
                    Etag: sdk.String("temporibus"),
                    ID: sdk.String("b88f591f-9832-49f9-9922-f7cad07b6545"),
                    Kind: sdk.String("eaque"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("aperiam"),
                },
                MetricNames: []string{
                    "minima",
                    "nobis",
                    "dolor",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("est"),
                        Name: sdk.String("Anne Cassin"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("asperiores"),
                        Name: sdk.String("Pearl Bechtelar"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(267175),
                    ImpressionsLookbackWindow: sdk.Int(133699),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(875978),
                    MaximumImpressionInteractions: sdk.Int(344680),
                    MaximumInteractionGap: sdk.Int(888269),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("delectus"),
                            Etag: sdk.String("ea"),
                            ID: sdk.String("4a2a875c-6a71-40e5-8b47-ec6aaf9bd832"),
                            Kind: sdk.String("molestiae"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("rem"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("repellat"),
                            Etag: sdk.String("esse"),
                            ID: sdk.String("d316145e-bdd8-422a-b2c1-679d8a0a4664"),
                            Kind: sdk.String("suscipit"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("minus"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("ea"),
                            Etag: sdk.String("ipsam"),
                            ID: sdk.String("8e1817cd-e0ae-4e8c-b221-3f425a0338b7"),
                            Kind: sdk.String("inventore"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("neque"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("possimus"),
                            Etag: sdk.String("magni"),
                            ID: sdk.String("fd3b636c-0730-488e-b5ab-7ff2a12fb074"),
                            Kind: sdk.String("quod"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("aliquam"),
                        },
                    },
                    Kind: sdk.String("incidunt"),
                    MetricNames: []string{
                        "dolores",
                        "non",
                        "porro",
                        "perferendis",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("sunt"),
                            Etag: sdk.String("beatae"),
                            ID: sdk.String("281ed683-5b93-4ced-a87b-b453f44af461"),
                            Kind: sdk.String("porro"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("placeat"),
                        },
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
                    },
                    Kind: sdk.String("quisquam"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-10-01"),
                    Kind: sdk.String("sapiente"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast60Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-06-10"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("tempora"),
                        Etag: sdk.String("excepturi"),
                        ID: sdk.String("7b140816-31a1-4660-870c-0bcde7e50ea4"),
                        Kind: sdk.String("labore"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("ab"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("perferendis"),
                        Etag: sdk.String("architecto"),
                        ID: sdk.String("c138b462-923d-450f-b51b-287a33a86cc3"),
                        Kind: sdk.String("animi"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("voluptatibus"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("ullam"),
                        Name: sdk.String("Pearl Casper III"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("adipisci"),
                        Name: sdk.String("Michael Corwin"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("accusantium"),
                        Name: sdk.String("Kristopher Abshire"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "quibusdam",
                },
                ReachByFrequencyMetricNames: []string{
                    "doloribus",
                    "laudantium",
                    "hic",
                    "eveniet",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(15822),
                ExpirationDate: types.MustDateFromString("2022-11-06"),
                Repeats: sdk.String("officiis"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumTuesday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSaturday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumDayOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2022-08-25"),
            },
            SubAccountID: sdk.String("debitis"),
            Type: shared.ReportTypeEnumStandard.ToPointer(),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "excepturi",
        QuotaUser: sdk.String("possimus"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("esse"),
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
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("autem"),
        MaxResults: sdk.Int64(52462),
        OauthToken: sdk.String("inventore"),
        PageToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "deserunt",
        QuotaUser: sdk.String("consectetur"),
        Scope: operations.DfareportingReportsListScopeEnumAll.ToPointer(),
        SortField: operations.DfareportingReportsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingReportsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("consequatur"),
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
            AccountID: sdk.String("fugit"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("minima"),
                            Etag: sdk.String("ipsum"),
                            ID: sdk.String("1bfb30ed-a3f8-4e5e-b92f-22a77cb7af1b"),
                            Kind: sdk.String("suscipit"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("eveniet"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("placeat"),
                            Etag: sdk.String("pariatur"),
                            ID: sdk.String("e080fb80-c056-436c-93d4-159955c5c717"),
                            Kind: sdk.String("vel"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("ut"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("enim"),
                            Etag: sdk.String("provident"),
                            ID: sdk.String("7f37719d-d8c8-4482-8026-5d92c4c8c9f8"),
                            Kind: sdk.String("similique"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("deserunt"),
                        },
                    },
                    Kind: sdk.String("impedit"),
                    MetricNames: []string{
                        "necessitatibus",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("numquam"),
                            Etag: sdk.String("illum"),
                            ID: sdk.String("2aceb0cd-e00e-48ec-b818-a9303e93f00a"),
                            Kind: sdk.String("sunt"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("expedita"),
                        },
                    },
                    Kind: sdk.String("explicabo"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-01-01"),
                    Kind: sdk.String("consequatur"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousWeek.ToPointer(),
                    StartDate: types.MustDateFromString("2022-03-15"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("architecto"),
                        Etag: sdk.String("odio"),
                        ID: sdk.String("852d28be-1db0-41d6-919f-831593a84ea7"),
                        Kind: sdk.String("pariatur"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("et"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("ullam"),
                        Etag: sdk.String("quod"),
                        ID: sdk.String("4c15fe6c-d097-4a67-9597-ecbeb7982baf"),
                        Kind: sdk.String("provident"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("quam"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("illum"),
                        Etag: sdk.String("animi"),
                        ID: sdk.String("6c29b938-e51a-47e6-ad6f-7ff04fda0466"),
                        Kind: sdk.String("cupiditate"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("fuga"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptates"),
                        Etag: sdk.String("quas"),
                        ID: sdk.String("18240365-5aa9-423c-8991-9ebd1cf77953"),
                        Kind: sdk.String("quos"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("expedita"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("voluptatibus"),
                        Name: sdk.String("Gustavo Wehner"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("debitis"),
                        Name: sdk.String("Duane Ortiz"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("expedita"),
                        Name: sdk.String("Theresa Runolfsdottir"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "provident",
                    "vel",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("reprehenderit"),
                        Name: sdk.String("Dr. Ira Krajcik"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-08-22"),
                    Kind: sdk.String("sit"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast90Days.ToPointer(),
                    StartDate: types.MustDateFromString("2022-12-28"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumSiteByCampaign.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("exercitationem"),
                        Etag: sdk.String("dicta"),
                        ID: sdk.String("d2aebe8b-9828-4e26-871a-5ecb87f794f0"),
                        Kind: sdk.String("modi"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("incidunt"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("architecto"),
                        Etag: sdk.String("magnam"),
                        ID: sdk.String("46f793d3-b100-4201-87cd-1b83160b3e3e"),
                        Kind: sdk.String("unde"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("occaecati"),
                    },
                },
                MetricNames: []string{
                    "perferendis",
                    "mollitia",
                },
                OverlapMetricNames: []string{
                    "id",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment.ToPointer(),
                Message: sdk.String("voluptatibus"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Kaleb_Jaskolski@yahoo.com"),
                        Kind: sdk.String("distinctio"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Anderson_Barton@yahoo.com"),
                        Kind: sdk.String("hic"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Neil90@hotmail.com"),
                        Kind: sdk.String("quibusdam"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Vanessa17@hotmail.com"),
                        Kind: sdk.String("exercitationem"),
                    },
                },
            },
            Etag: sdk.String("fugiat"),
            FileName: sdk.String("corporis"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("ea"),
                        Etag: sdk.String("architecto"),
                        ID: sdk.String("58803212-f7b5-49b7-9546-42b9e37c84c3"),
                        Kind: sdk.String("at"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("optio"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("laborum"),
                        Etag: sdk.String("eius"),
                        ID: sdk.String("91837978-88d1-456f-81ae-36bb8d0028e3"),
                        Kind: sdk.String("vero"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("facere"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2021-04-15"),
                    Kind: sdk.String("alias"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousWeek.ToPointer(),
                    StartDate: types.MustDateFromString("2021-01-31"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("eveniet"),
                        Etag: sdk.String("voluptatibus"),
                        ID: sdk.String("0f1385b6-7c24-4673-ac98-f6d268f92a6b"),
                        Kind: sdk.String("cum"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("laudantium"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("voluptas"),
                        Etag: sdk.String("sunt"),
                        ID: sdk.String("52225b05-728e-47a2-81ec-fb74faff5de4"),
                        Kind: sdk.String("voluptatibus"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("expedita"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("culpa"),
                        Name: sdk.String("Dan Koch"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("cumque"),
                    Etag: sdk.String("molestias"),
                    ID: sdk.String("1ff34b51-9003-4b23-8e83-c6c36a56b3ad"),
                    Kind: sdk.String("ullam"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("repellat"),
                },
                MetricNames: []string{
                    "unde",
                    "labore",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumCsv.ToPointer(),
            ID: sdk.String("at"),
            Kind: sdk.String("tempora"),
            LastModifiedTime: sdk.String("autem"),
            Name: sdk.String("Jamie Bechtelar"),
            OwnerProfileID: sdk.String("repellendus"),
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("quos"),
                        Etag: sdk.String("molestias"),
                        ID: sdk.String("af600546-0b05-4f01-a7bd-8643968dd0d7"),
                        Kind: sdk.String("in"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("similique"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("ipsa"),
                        Etag: sdk.String("quam"),
                        ID: sdk.String("c3076c86-2de9-4692-b9ea-86c03ac3f23d"),
                        Kind: sdk.String("maxime"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("non"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("sequi"),
                        Name: sdk.String("Samuel Kovacek"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ex"),
                        Name: sdk.String("Gretchen Hammes"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("necessitatibus"),
                        Name: sdk.String("Earnest Bode"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("deserunt"),
                        Name: sdk.String("Freda VonRueden"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quisquam"),
                        Name: sdk.String("Paul Abernathy"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("dolore"),
                        Name: sdk.String("Ms. Henry Stamm"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("debitis"),
                        Etag: sdk.String("non"),
                        ID: sdk.String("534f41e4-2dda-4714-a944-6899994dc953"),
                        Kind: sdk.String("nobis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("sed"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("ex"),
                        Etag: sdk.String("autem"),
                        ID: sdk.String("c0e500fc-742c-49c7-9089-1ef7b31a84fe"),
                        Kind: sdk.String("facere"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("libero"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("porro"),
                        Etag: sdk.String("vero"),
                        ID: sdk.String("0fba2734-d313-4475-aee2-a90304a708e2"),
                        Kind: sdk.String("veritatis"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("ipsa"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("omnis"),
                        Etag: sdk.String("libero"),
                        ID: sdk.String("67335519-b00c-450e-b3a8-e26f6d65fc99"),
                        Kind: sdk.String("dolore"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("voluptas"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-08-25"),
                    Kind: sdk.String("non"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumMonthToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2021-12-22"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("a"),
                    Etag: sdk.String("deleniti"),
                    ID: sdk.String("c1e639e6-1dff-4235-b545-dbfd69d854ee"),
                    Kind: sdk.String("magnam"),
                    MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                    Value: sdk.String("nostrum"),
                },
                MetricNames: []string{
                    "fugiat",
                    "quas",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("beatae"),
                        Name: sdk.String("Justin Wilkinson I"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("tempora"),
                        Name: sdk.String("Dianne Breitenberg"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(424073),
                    ImpressionsLookbackWindow: sdk.Int(365429),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(250070),
                    MaximumImpressionInteractions: sdk.Int(405215),
                    MaximumInteractionGap: sdk.Int(330822),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("labore"),
                            Etag: sdk.String("ducimus"),
                            ID: sdk.String("563f8249-9f41-4bb9-9d5f-9a10583aa80e"),
                            Kind: sdk.String("iusto"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("quos"),
                        },
                    },
                    Kind: sdk.String("ex"),
                    MetricNames: []string{
                        "cupiditate",
                        "repudiandae",
                        "atque",
                        "consequatur",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("occaecati"),
                            Etag: sdk.String("ea"),
                            ID: sdk.String("6689a74c-c4e0-4edc-9827-0b6c8030772d"),
                            Kind: sdk.String("sint"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("esse"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("fugit"),
                            Etag: sdk.String("et"),
                            ID: sdk.String("e4eb4dd4-c7f2-42ce-a0aa-aa3e6312683f"),
                            Kind: sdk.String("maiores"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("quos"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("minus"),
                            Etag: sdk.String("sequi"),
                            ID: sdk.String("5c49aace-0b93-48f6-9c85-a8b6d73772ac"),
                            Kind: sdk.String("doloribus"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("qui"),
                        },
                    },
                    Kind: sdk.String("laudantium"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-09-23"),
                    Kind: sdk.String("quae"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumLast24Months.ToPointer(),
                    StartDate: types.MustDateFromString("2022-03-03"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("a"),
                        Etag: sdk.String("voluptatem"),
                        ID: sdk.String("5ce1d399-2dbe-4fed-9110-77aeeb0f5aee"),
                        Kind: sdk.String("quo"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("possimus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("atque"),
                        Etag: sdk.String("consectetur"),
                        ID: sdk.String("1a29da55-964e-4e5e-bf7e-69897f051aa7"),
                        Kind: sdk.String("impedit"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("natus"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("itaque"),
                        Etag: sdk.String("vel"),
                        ID: sdk.String("9b7c0e26-83f3-47aa-8dbe-1562afb86e04"),
                        Kind: sdk.String("odit"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("alias"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("vero"),
                        Etag: sdk.String("ipsa"),
                        ID: sdk.String("6b76f966-9abe-4384-abdc-330450b65ef6"),
                        Kind: sdk.String("praesentium"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("illo"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("quaerat"),
                        Name: sdk.String("Tom Wilkinson"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "tenetur",
                    "aut",
                    "commodi",
                },
                ReachByFrequencyMetricNames: []string{
                    "sapiente",
                    "tempore",
                    "hic",
                    "sit",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(271549),
                ExpirationDate: types.MustDateFromString("2022-02-14"),
                Repeats: sdk.String("distinctio"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumSunday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumTuesday,
                    shared.ReportScheduleRepeatsOnWeekDaysEnumWednesday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumDayOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2021-09-12"),
            },
            SubAccountID: sdk.String("debitis"),
            Type: shared.ReportTypeEnumReach.ToPointer(),
        },
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "totam",
        QuotaUser: sdk.String("qui"),
        ReportID: "fugiat",
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("tenetur"),
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
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("eius"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "enim",
        QuotaUser: sdk.String("ab"),
        ReportID: "aut",
        Synchronous: sdk.Bool(false),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("deleniti"),
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
            AccountID: sdk.String("quasi"),
            Criteria: &shared.ReportCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("ducimus"),
                            Etag: sdk.String("molestiae"),
                            ID: sdk.String("bfdc53d2-0b95-45c8-8393-3d5c4dd75ad7"),
                            Kind: sdk.String("tenetur"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("iure"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("consequatur"),
                            Etag: sdk.String("repellendus"),
                            ID: sdk.String("efb4ca1d-e629-4d2c-bb7a-738a81cdb3e7"),
                            Kind: sdk.String("cumque"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("doloremque"),
                        },
                    },
                    Kind: sdk.String("minus"),
                    MetricNames: []string{
                        "accusantium",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("odio"),
                            Etag: sdk.String("quibusdam"),
                            ID: sdk.String("87db9816-64a0-4f26-8f68-9726a926b6ef"),
                            Kind: sdk.String("dolor"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("ad"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("quo"),
                            Etag: sdk.String("neque"),
                            ID: sdk.String("8034f8e4-2de0-4399-be99-d3647afb6994"),
                            Kind: sdk.String("quaerat"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("minus"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("animi"),
                            Etag: sdk.String("ea"),
                            ID: sdk.String("3d2821b5-b3ea-44d9-bee3-775f5ff8a76f"),
                            Kind: sdk.String("dolorum"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("tempora"),
                        },
                    },
                    Kind: sdk.String("velit"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-06-26"),
                    Kind: sdk.String("harum"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousYear.ToPointer(),
                    StartDate: types.MustDateFromString("2022-06-13"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("ex"),
                        Etag: sdk.String("magni"),
                        ID: sdk.String("26d61f24-2008-4d1e-8197-3662ed0d6ba2"),
                        Kind: sdk.String("cupiditate"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("id"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("aperiam"),
                        Name: sdk.String("Mr. Alfred Koss"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                MetricNames: []string{
                    "incidunt",
                    "cupiditate",
                },
            },
            CrossDimensionReachCriteria: &shared.ReportCrossDimensionReachCriteria{
                Breakdown: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("nihil"),
                        Name: sdk.String("Marta Veum IV"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("iure"),
                        Name: sdk.String("Mrs. Agnes Klocko"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("eligendi"),
                        Name: sdk.String("Lynda Quitzon"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ea"),
                        Name: sdk.String("Dr. Bryant Tremblay"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-06-16"),
                    Kind: sdk.String("repellendus"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumPreviousWeek.ToPointer(),
                    StartDate: types.MustDateFromString("2022-11-27"),
                },
                Dimension: shared.ReportCrossDimensionReachCriteriaDimensionEnumCampaign.ToPointer(),
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("quidem"),
                        Etag: sdk.String("nihil"),
                        ID: sdk.String("d67dd78b-fbe3-469f-8c78-1f0b63f1a45b"),
                        Kind: sdk.String("expedita"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("quas"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("aliquid"),
                        Etag: sdk.String("id"),
                        ID: sdk.String("c107dcb6-2f69-40f0-9f37-4593dc3b805c"),
                        Kind: sdk.String("assumenda"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("cumque"),
                    },
                },
                MetricNames: []string{
                    "doloremque",
                    "veniam",
                    "dolorem",
                    "voluptate",
                },
                OverlapMetricNames: []string{
                    "alias",
                    "quibusdam",
                    "assumenda",
                },
                Pivoted: sdk.Bool(false),
            },
            Delivery: &shared.ReportDelivery{
                EmailOwner: sdk.Bool(false),
                EmailOwnerDeliveryType: shared.ReportDeliveryEmailOwnerDeliveryTypeEnumAttachment.ToPointer(),
                Message: sdk.String("quaerat"),
                Recipients: []shared.Recipient{
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumAttachment.ToPointer(),
                        Email: sdk.String("Tiffany33@yahoo.com"),
                        Kind: sdk.String("pariatur"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Nicola82@yahoo.com"),
                        Kind: sdk.String("in"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Ashton78@gmail.com"),
                        Kind: sdk.String("vero"),
                    },
                    shared.Recipient{
                        DeliveryType: shared.RecipientDeliveryTypeEnumLink.ToPointer(),
                        Email: sdk.String("Alvis_Ondricka@yahoo.com"),
                        Kind: sdk.String("eaque"),
                    },
                },
            },
            Etag: sdk.String("aliquam"),
            FileName: sdk.String("mollitia"),
            FloodlightCriteria: &shared.ReportFloodlightCriteria{
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("quia"),
                        Etag: sdk.String("voluptatem"),
                        ID: sdk.String("749c3d9f-148c-49f0-8f41-07c220684963"),
                        Kind: sdk.String("saepe"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("vel"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("eligendi"),
                        Etag: sdk.String("voluptates"),
                        ID: sdk.String("ec848575-890a-49fa-af94-0e8d668c08f1"),
                        Kind: sdk.String("ipsa"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("tempora"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("numquam"),
                        Etag: sdk.String("illo"),
                        ID: sdk.String("4875663c-aef2-4940-b514-6242e339b43f"),
                        Kind: sdk.String("error"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("occaecati"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("non"),
                        Etag: sdk.String("esse"),
                        ID: sdk.String("5d13d74f-62f8-4d44-90d1-9a9a8622981e"),
                        Kind: sdk.String("fuga"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("eaque"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-10-23"),
                    Kind: sdk.String("magni"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumYearToDate.ToPointer(),
                    StartDate: types.MustDateFromString("2022-09-21"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("placeat"),
                        Etag: sdk.String("explicabo"),
                        ID: sdk.String("4b191a21-6434-4312-b448-8f0cb2dc9b2e"),
                        Kind: sdk.String("unde"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("dicta"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("pariatur"),
                        Etag: sdk.String("sunt"),
                        ID: sdk.String("ba4161d4-c13d-4d9f-be76-c8ad6bbbf409"),
                        Kind: sdk.String("recusandae"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("dolor"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("illum"),
                        Name: sdk.String("Eloise Howell"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("eius"),
                        Name: sdk.String("Ruby Beier"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("natus"),
                    Etag: sdk.String("in"),
                    ID: sdk.String("c374f6fc-e889-41f8-9776-7d86212f6f9d"),
                    Kind: sdk.String("aliquam"),
                    MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                    Value: sdk.String("ducimus"),
                },
                MetricNames: []string{
                    "doloribus",
                },
                ReportProperties: &shared.ReportFloodlightCriteriaReportProperties{
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                },
            },
            Format: shared.ReportFormatEnumCsv.ToPointer(),
            ID: sdk.String("voluptatem"),
            Kind: sdk.String("aut"),
            LastModifiedTime: sdk.String("quam"),
            Name: sdk.String("Javier Runolfsson"),
            OwnerProfileID: sdk.String("modi"),
            PathToConversionCriteria: &shared.ReportPathToConversionCriteria{
                ActivityFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("quod"),
                        Etag: sdk.String("veritatis"),
                        ID: sdk.String("6c12aa0e-bd02-49ed-9b59-46c5758608d2"),
                        Kind: sdk.String("repellendus"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("rerum"),
                    },
                },
                ConversionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("excepturi"),
                        Name: sdk.String("Dr. Johnnie Wunsch"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("tempora"),
                        Name: sdk.String("Bernadette Hills I"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("dignissimos"),
                        Name: sdk.String("Miss Mindy Mohr"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                CustomFloodlightVariables: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("corrupti"),
                        Name: sdk.String("Wilson Koelpin DDS"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("ipsum"),
                        Name: sdk.String("Cecilia Schowalter"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("quidem"),
                        Name: sdk.String("Sharon Hilll"),
                        SortOrder: shared.SortedDimensionSortOrderEnumDescending.ToPointer(),
                    },
                },
                CustomRichMediaEvents: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("hic"),
                        Etag: sdk.String("exercitationem"),
                        ID: sdk.String("3e42a330-5ba8-4277-8bf6-d2dee1cb27fd"),
                        Kind: sdk.String("itaque"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("quidem"),
                    },
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-09-16"),
                    Kind: sdk.String("quas"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumToday.ToPointer(),
                    StartDate: types.MustDateFromString("2022-07-07"),
                },
                FloodlightConfigID: &shared.DimensionValue{
                    DimensionName: sdk.String("placeat"),
                    Etag: sdk.String("perspiciatis"),
                    ID: sdk.String("bfd241a6-2cf5-4fa3-a7c6-147e0c2cce29"),
                    Kind: sdk.String("quas"),
                    MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                    Value: sdk.String("iste"),
                },
                MetricNames: []string{
                    "quia",
                },
                PerInteractionDimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("voluptates"),
                        Name: sdk.String("Melissa Beahan"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("sequi"),
                        Name: sdk.String("Lester Hills"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                ReportProperties: &shared.ReportPathToConversionCriteriaReportProperties{
                    ClicksLookbackWindow: sdk.Int(394238),
                    ImpressionsLookbackWindow: sdk.Int(695080),
                    IncludeAttributedIPConversions: sdk.Bool(false),
                    IncludeUnattributedCookieConversions: sdk.Bool(false),
                    IncludeUnattributedIPConversions: sdk.Bool(false),
                    MaximumClickInteractions: sdk.Int(733157),
                    MaximumImpressionInteractions: sdk.Int(423563),
                    MaximumInteractionGap: sdk.Int(852391),
                    PivotOnInteractionPath: sdk.Bool(false),
                },
            },
            ReachCriteria: &shared.ReportReachCriteria{
                Activities: &shared.Activities{
                    Filters: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("rem"),
                            Etag: sdk.String("odio"),
                            ID: sdk.String("60650d0e-b06d-421d-9af7-f5b5a53eb6c0"),
                            Kind: sdk.String("odio"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("maxime"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("exercitationem"),
                            Etag: sdk.String("quibusdam"),
                            ID: sdk.String("26dffa57-7403-4383-a66d-b6bb78aa7310"),
                            Kind: sdk.String("nobis"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("at"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("architecto"),
                            Etag: sdk.String("eius"),
                            ID: sdk.String("ba92c263-49d5-4927-aed5-066462c99eaa"),
                            Kind: sdk.String("assumenda"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("eligendi"),
                        },
                    },
                    Kind: sdk.String("nulla"),
                    MetricNames: []string{
                        "rerum",
                    },
                },
                CustomRichMediaEvents: &shared.CustomRichMediaEvents{
                    FilteredEventIds: []shared.DimensionValue{
                        shared.DimensionValue{
                            DimensionName: sdk.String("voluptas"),
                            Etag: sdk.String("commodi"),
                            ID: sdk.String("ce16de80-82e0-4ab1-a4fb-614494dbb0b5"),
                            Kind: sdk.String("eaque"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("totam"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("illo"),
                            Etag: sdk.String("id"),
                            ID: sdk.String("7f89f7d9-ec43-42ba-b309-239137eac1f8"),
                            Kind: sdk.String("consequatur"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("nulla"),
                        },
                        shared.DimensionValue{
                            DimensionName: sdk.String("numquam"),
                            Etag: sdk.String("eveniet"),
                            ID: sdk.String("2f39e706-278a-4ac6-9344-ba7b3f7bd633"),
                            Kind: sdk.String("voluptates"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("atque"),
                        },
                    },
                    Kind: sdk.String("libero"),
                },
                DateRange: &shared.DateRange{
                    EndDate: types.MustDateFromString("2022-11-19"),
                    Kind: sdk.String("ratione"),
                    RelativeDateRange: shared.DateRangeRelativeDateRangeEnumYesterday.ToPointer(),
                    StartDate: types.MustDateFromString("2022-10-11"),
                },
                DimensionFilters: []shared.DimensionValue{
                    shared.DimensionValue{
                        DimensionName: sdk.String("autem"),
                        Etag: sdk.String("quisquam"),
                        ID: sdk.String("a70d8d4f-5d60-4746-8112-37b62fbc39f8"),
                        Kind: sdk.String("possimus"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("voluptas"),
                    },
                    shared.DimensionValue{
                        DimensionName: sdk.String("dolorum"),
                        Etag: sdk.String("possimus"),
                        ID: sdk.String("968ecac3-3024-4ac5-b7a0-f6cfeb9d3a69"),
                        Kind: sdk.String("quam"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("amet"),
                    },
                },
                Dimensions: []shared.SortedDimension{
                    shared.SortedDimension{
                        Kind: sdk.String("vitae"),
                        Name: sdk.String("Ramiro Feeney PhD"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                    shared.SortedDimension{
                        Kind: sdk.String("saepe"),
                        Name: sdk.String("Antonia Koelpin"),
                        SortOrder: shared.SortedDimensionSortOrderEnumAscending.ToPointer(),
                    },
                },
                EnableAllDimensionCombinations: sdk.Bool(false),
                MetricNames: []string{
                    "corporis",
                    "officia",
                    "officia",
                },
                ReachByFrequencyMetricNames: []string{
                    "esse",
                    "est",
                },
            },
            Schedule: &shared.ReportSchedule{
                Active: sdk.Bool(false),
                Every: sdk.Int(785365),
                ExpirationDate: types.MustDateFromString("2022-11-29"),
                Repeats: sdk.String("omnis"),
                RepeatsOnWeekDays: []shared.ReportScheduleRepeatsOnWeekDaysEnum{
                    shared.ReportScheduleRepeatsOnWeekDaysEnumWednesday,
                },
                RunsOnDayOfMonth: shared.ReportScheduleRunsOnDayOfMonthEnumDayOfMonth.ToPointer(),
                StartDate: types.MustDateFromString("2022-06-28"),
            },
            SubAccountID: sdk.String("veritatis"),
            Type: shared.ReportTypeEnumFloodlight.ToPointer(),
        },
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("unde"),
        Key: sdk.String("illo"),
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptate",
        QuotaUser: sdk.String("ab"),
        ReportID: "necessitatibus",
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("cupiditate"),
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
