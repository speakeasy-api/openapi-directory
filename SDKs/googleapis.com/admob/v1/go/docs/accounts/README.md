# Accounts

### Available Operations

* [AdmobAccountsAdUnitsList](#admobaccountsadunitslist) - List the ad units under the specified AdMob account.
* [AdmobAccountsAppsList](#admobaccountsappslist) - List the apps under the specified AdMob account.
* [AdmobAccountsGet](#admobaccountsget) - Gets information about the specified AdMob publisher account.
* [AdmobAccountsList](#admobaccountslist) - Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
* [AdmobAccountsMediationReportGenerate](#admobaccountsmediationreportgenerate) - Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
* [AdmobAccountsNetworkReportGenerate](#admobaccountsnetworkreportgenerate) - Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

## AdmobAccountsAdUnitsList

List the ad units under the specified AdMob account.

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
    res, err := s.Accounts.AdmobAccountsAdUnitsList(ctx, operations.AdmobAccountsAdUnitsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        PageSize: sdk.Int64(791725),
        PageToken: sdk.String("placeat"),
        Parent: "voluptatum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.AdmobAccountsAdUnitsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdUnitsResponse != nil {
        // handle response
    }
}
```

## AdmobAccountsAppsList

List the apps under the specified AdMob account.

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
    res, err := s.Accounts.AdmobAccountsAppsList(ctx, operations.AdmobAccountsAppsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(368241),
        PageToken: sdk.String("repellendus"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
    }, operations.AdmobAccountsAppsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppsResponse != nil {
        // handle response
    }
}
```

## AdmobAccountsGet

Gets information about the specified AdMob publisher account.

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
    res, err := s.Accounts.AdmobAccountsGet(ctx, operations.AdmobAccountsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        Name: "Miss Lowell Parisian",
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("hic"),
    }, operations.AdmobAccountsGetSecurity{
        Option1: &operations.AdmobAccountsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublisherAccount != nil {
        // handle response
    }
}
```

## AdmobAccountsList

Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.

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
    res, err := s.Accounts.AdmobAccountsList(ctx, operations.AdmobAccountsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("qui"),
        PageSize: sdk.Int64(774234),
        PageToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.AdmobAccountsListSecurity{
        Option1: &operations.AdmobAccountsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPublisherAccountsResponse != nil {
        // handle response
    }
}
```

## AdmobAccountsMediationReportGenerate

Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

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
    res, err := s.Accounts.AdmobAccountsMediationReportGenerate(ctx, operations.AdmobAccountsMediationReportGenerateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GenerateMediationReportRequest: &shared.GenerateMediationReportRequest{
            ReportSpec: &shared.MediationReportSpec{
                DateRange: &shared.DateRange{
                    EndDate: &shared.Date{
                        Day: sdk.Int(18789),
                        Month: sdk.Int(324141),
                        Year: sdk.Int(617636),
                    },
                    StartDate: &shared.Date{
                        Day: sdk.Int(149675),
                        Month: sdk.Int(612096),
                        Year: sdk.Int(222321),
                    },
                },
                DimensionFilters: []shared.MediationReportSpecDimensionFilter{
                    shared.MediationReportSpecDimensionFilter{
                        Dimension: shared.MediationReportSpecDimensionFilterDimensionEnumAdUnit.ToPointer(),
                        MatchesAny: &shared.StringList{
                            Values: []string{
                                "saepe",
                                "fuga",
                                "in",
                                "corporis",
                            },
                        },
                    },
                    shared.MediationReportSpecDimensionFilter{
                        Dimension: shared.MediationReportSpecDimensionFilterDimensionEnumCountry.ToPointer(),
                        MatchesAny: &shared.StringList{
                            Values: []string{
                                "saepe",
                                "quidem",
                            },
                        },
                    },
                    shared.MediationReportSpecDimensionFilter{
                        Dimension: shared.MediationReportSpecDimensionFilterDimensionEnumDate.ToPointer(),
                        MatchesAny: &shared.StringList{
                            Values: []string{
                                "reiciendis",
                            },
                        },
                    },
                },
                Dimensions: []shared.MediationReportSpecDimensionsEnum{
                    shared.MediationReportSpecDimensionsEnumFormat,
                    shared.MediationReportSpecDimensionsEnumFormat,
                    shared.MediationReportSpecDimensionsEnumMonth,
                },
                LocalizationSettings: &shared.LocalizationSettings{
                    CurrencyCode: sdk.String("dolorem"),
                    LanguageCode: sdk.String("corporis"),
                },
                MaxReportRows: sdk.Int(128926),
                Metrics: []shared.MediationReportSpecMetricsEnum{
                    shared.MediationReportSpecMetricsEnumClicks,
                    shared.MediationReportSpecMetricsEnumImpressionCtr,
                    shared.MediationReportSpecMetricsEnumEstimatedEarnings,
                    shared.MediationReportSpecMetricsEnumClicks,
                },
                SortConditions: []shared.MediationReportSpecSortCondition{
                    shared.MediationReportSpecSortCondition{
                        Dimension: shared.MediationReportSpecSortConditionDimensionEnumDimensionUnspecified.ToPointer(),
                        Metric: shared.MediationReportSpecSortConditionMetricEnumEstimatedEarnings.ToPointer(),
                        Order: shared.MediationReportSpecSortConditionOrderEnumAscending.ToPointer(),
                    },
                    shared.MediationReportSpecSortCondition{
                        Dimension: shared.MediationReportSpecSortConditionDimensionEnumServingRestriction.ToPointer(),
                        Metric: shared.MediationReportSpecSortConditionMetricEnumObservedEcpm.ToPointer(),
                        Order: shared.MediationReportSpecSortConditionOrderEnumSortOrderUnspecified.ToPointer(),
                    },
                    shared.MediationReportSpecSortCondition{
                        Dimension: shared.MediationReportSpecSortConditionDimensionEnumFormat.ToPointer(),
                        Metric: shared.MediationReportSpecSortConditionMetricEnumAdRequests.ToPointer(),
                        Order: shared.MediationReportSpecSortConditionOrderEnumAscending.ToPointer(),
                    },
                },
                TimeZone: sdk.String("consequuntur"),
            },
        },
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("quam"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("quia"),
    }, operations.AdmobAccountsMediationReportGenerateSecurity{
        Option1: &operations.AdmobAccountsMediationReportGenerateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateMediationReportResponse != nil {
        // handle response
    }
}
```

## AdmobAccountsNetworkReportGenerate

Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

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
    res, err := s.Accounts.AdmobAccountsNetworkReportGenerate(ctx, operations.AdmobAccountsNetworkReportGenerateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GenerateNetworkReportRequest: &shared.GenerateNetworkReportRequest{
            ReportSpec: &shared.NetworkReportSpec{
                DateRange: &shared.DateRange{
                    EndDate: &shared.Date{
                        Day: sdk.Int(110375),
                        Month: sdk.Int(674752),
                        Year: sdk.Int(656330),
                    },
                    StartDate: &shared.Date{
                        Day: sdk.Int(317202),
                        Month: sdk.Int(138183),
                        Year: sdk.Int(778346),
                    },
                },
                DimensionFilters: []shared.NetworkReportSpecDimensionFilter{
                    shared.NetworkReportSpecDimensionFilter{
                        Dimension: shared.NetworkReportSpecDimensionFilterDimensionEnumServingRestriction.ToPointer(),
                        MatchesAny: &shared.StringList{
                            Values: []string{
                                "id",
                                "possimus",
                            },
                        },
                    },
                },
                Dimensions: []shared.NetworkReportSpecDimensionsEnum{
                    shared.NetworkReportSpecDimensionsEnumDate,
                },
                LocalizationSettings: &shared.LocalizationSettings{
                    CurrencyCode: sdk.String("error"),
                    LanguageCode: sdk.String("temporibus"),
                },
                MaxReportRows: sdk.Int(673660),
                Metrics: []shared.NetworkReportSpecMetricsEnum{
                    shared.NetworkReportSpecMetricsEnumShowRate,
                },
                SortConditions: []shared.NetworkReportSpecSortCondition{
                    shared.NetworkReportSpecSortCondition{
                        Dimension: shared.NetworkReportSpecSortConditionDimensionEnumAppVersionName.ToPointer(),
                        Metric: shared.NetworkReportSpecSortConditionMetricEnumImpressions.ToPointer(),
                        Order: shared.NetworkReportSpecSortConditionOrderEnumAscending.ToPointer(),
                    },
                    shared.NetworkReportSpecSortCondition{
                        Dimension: shared.NetworkReportSpecSortConditionDimensionEnumServingRestriction.ToPointer(),
                        Metric: shared.NetworkReportSpecSortConditionMetricEnumMetricUnspecified.ToPointer(),
                        Order: shared.NetworkReportSpecSortConditionOrderEnumAscending.ToPointer(),
                    },
                    shared.NetworkReportSpecSortCondition{
                        Dimension: shared.NetworkReportSpecSortConditionDimensionEnumAdType.ToPointer(),
                        Metric: shared.NetworkReportSpecSortConditionMetricEnumMatchedRequests.ToPointer(),
                        Order: shared.NetworkReportSpecSortConditionOrderEnumSortOrderUnspecified.ToPointer(),
                    },
                    shared.NetworkReportSpecSortCondition{
                        Dimension: shared.NetworkReportSpecSortConditionDimensionEnumDimensionUnspecified.ToPointer(),
                        Metric: shared.NetworkReportSpecSortConditionMetricEnumImpressions.ToPointer(),
                        Order: shared.NetworkReportSpecSortConditionOrderEnumSortOrderUnspecified.ToPointer(),
                    },
                },
                TimeZone: sdk.String("maiores"),
            },
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("harum"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.AdmobAccountsNetworkReportGenerateSecurity{
        Option1: &operations.AdmobAccountsNetworkReportGenerateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateNetworkReportResponse != nil {
        // handle response
    }
}
```
