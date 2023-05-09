<!-- Start SDK Example Usage -->
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
    res, err := s.Queries.DoubleclickbidmanagerQueriesCreatequery(ctx, operations.DoubleclickbidmanagerQueriesCreatequeryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Query: &shared.Query{
            Kind: sdk.String("provident"),
            Metadata: &shared.QueryMetadata{
                DataRange: shared.QueryMetadataDataRangeEnumLast90Days.ToPointer(),
                Format: shared.QueryMetadataFormatEnumXlsx.ToPointer(),
                GoogleCloudStoragePathForLatestReport: sdk.String("unde"),
                GoogleDrivePathForLatestReport: sdk.String("nulla"),
                LatestReportRunTimeMs: sdk.String("corrupti"),
                Locale: sdk.String("illum"),
                ReportCount: sdk.Int(423655),
                Running: sdk.Bool(false),
                SendNotification: sdk.Bool(false),
                ShareEmailAddress: []string{
                    "deserunt",
                    "suscipit",
                    "iure",
                },
                Title: sdk.String("Mrs."),
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: shared.FilterPairTypeEnumFilterRegion.ToPointer(),
                        Value: sdk.String("delectus"),
                    },
                    shared.FilterPair{
                        Type: shared.FilterPairTypeEnumFilterTrueviewIarCategory.ToPointer(),
                        Value: sdk.String("suscipit"),
                    },
                    shared.FilterPair{
                        Type: shared.FilterPairTypeEnumFilterAlgorithmID.ToPointer(),
                        Value: sdk.String("minus"),
                    },
                    shared.FilterPair{
                        Type: shared.FilterPairTypeEnumFilterVariantID.ToPointer(),
                        Value: sdk.String("voluptatum"),
                    },
                },
                GroupBys: []shared.ParametersGroupBysEnum{
                    shared.ParametersGroupBysEnumFilterDataProviderName,
                    shared.ParametersGroupBysEnumFilterAuthorizedSellerState,
                },
                IncludeInviteData: sdk.Bool(false),
                Metrics: []shared.ParametersMetricsEnum{
                    shared.ParametersMetricsEnumMetricStopsAudio,
                    shared.ParametersMetricsEnumMetricTotalMediaCostAdvertiser,
                    shared.ParametersMetricsEnumMetricCpmFee4Partner,
                    shared.ParametersMetricsEnumMetricProfitEcpmAdvertiser,
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: sdk.Bool(false),
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: sdk.String("deserunt"),
                            Name: sdk.String("Roberta Sipes"),
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterVerificationVideoResized.ToPointer(),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumPartial.ToPointer(),
                                                        Values: []string{
                                                            "quod",
                                                            "esse",
                                                            "totam",
                                                            "porro",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterInsertionOrderIntegrationCode.ToPointer(),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumUnknown.ToPointer(),
                                                        Values: []string{
                                                            "officia",
                                                            "occaecati",
                                                            "fugit",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterCmPlacementID.ToPointer(),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumWildcardExpression.ToPointer(),
                                                        Values: []string{
                                                            "totam",
                                                            "beatae",
                                                            "commodi",
                                                            "molestiae",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterTrueviewIarLanguage.ToPointer(),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumUnknown.ToPointer(),
                                                        Values: []string{
                                                            "cum",
                                                            "esse",
                                                            "ipsum",
                                                            "excepturi",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterYear.ToPointer(),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumExact.ToPointer(),
                                                        Values: []string{
                                                            "sed",
                                                            "iste",
                                                            "dolor",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterInventoryDeliveryMethod.ToPointer(),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumWildcardExpression.ToPointer(),
                                                        Values: []string{
                                                            "fuga",
                                                            "in",
                                                            "corporis",
                                                            "iste",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterNielsenRestatementDate.ToPointer(),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumWildcardExpression.ToPointer(),
                                                        Values: []string{
                                                            "architecto",
                                                            "ipsa",
                                                            "reiciendis",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterHouseholdIncome.ToPointer(),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumBeginsWith.ToPointer(),
                                                        Values: []string{
                                                            "dolores",
                                                            "dolorem",
                                                            "corporis",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterPublisherPropertyID.ToPointer(),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumExact.ToPointer(),
                                                        Values: []string{
                                                            "nemo",
                                                            "minima",
                                                            "excepturi",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: sdk.String("Charlene Nicolas"),
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: shared.PathQueryOptionsFilterFilterEnumFilterVideoCreativeDurationSkippable.ToPointer(),
                                            Match: shared.PathQueryOptionsFilterMatchEnumBeginsWith.ToPointer(),
                                            Values: []string{
                                                "repellat",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: shared.PathQueryOptionsFilterFilterEnumFilterGmailDeviceTypeName.ToPointer(),
                                            Match: shared.PathQueryOptionsFilterMatchEnumPartial.ToPointer(),
                                            Values: []string{
                                                "commodi",
                                                "quam",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: shared.PathQueryOptionsFilterFilterEnumFilterAlgorithm.ToPointer(),
                                            Match: shared.PathQueryOptionsFilterMatchEnumExact.ToPointer(),
                                            Values: []string{
                                                "quia",
                                                "quis",
                                                "vitae",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: shared.PathFilterPathMatchPositionEnumLast.ToPointer(),
                            },
                        },
                    },
                },
                Type: shared.ParametersTypeEnumTypeEstimatedConversion.ToPointer(),
            },
            QueryID: sdk.String("enim"),
            ReportDataEndTimeMs: sdk.String("odit"),
            ReportDataStartTimeMs: sdk.String("quo"),
            Schedule: &shared.QuerySchedule{
                EndTimeMs: sdk.String("sequi"),
                Frequency: shared.QueryScheduleFrequencyEnumYearly.ToPointer(),
                NextRunMinuteOfDay: sdk.Int(368725),
                NextRunTimezoneCode: sdk.String("id"),
                StartTimeMs: sdk.String("possimus"),
            },
            TimezoneCode: sdk.String("aut"),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Asynchronous: sdk.Bool(false),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.DoubleclickbidmanagerQueriesCreatequerySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Query != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->