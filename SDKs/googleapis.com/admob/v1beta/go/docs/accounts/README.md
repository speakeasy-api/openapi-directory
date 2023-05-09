# Accounts

### Available Operations

* [AdmobAccountsAdSourcesList](#admobaccountsadsourceslist) - List the ad sources.
* [AdmobAccountsAdUnitsList](#admobaccountsadunitslist) - List the ad units under the specified AdMob account.
* [AdmobAccountsAppsList](#admobaccountsappslist) - List the apps under the specified AdMob account.
* [AdmobAccountsGet](#admobaccountsget) - Gets information about the specified AdMob publisher account.
* [AdmobAccountsList](#admobaccountslist) - Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
* [AdmobAccountsMediationReportGenerate](#admobaccountsmediationreportgenerate) - Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
* [AdmobAccountsNetworkReportGenerate](#admobaccountsnetworkreportgenerate) - Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

## AdmobAccountsAdSourcesList

List the ad sources.

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
    res, err := s.Accounts.AdmobAccountsAdSourcesList(ctx, operations.AdmobAccountsAdSourcesListRequest{
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
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdSourcesResponse != nil {
        // handle response
    }
}
```

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
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("totam"),
        PageSize: sdk.Int64(780529),
        PageToken: sdk.String("dolorum"),
        Parent: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("occaecati"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("totam"),
        Key: sdk.String("beatae"),
        Name: "Tanya Gleason",
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("excepturi"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("sed"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("dolor"),
        PageSize: sdk.Int64(616934),
        PageToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("fuga"),
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
                        Day: sdk.Int(359508),
                        Month: sdk.Int(613064),
                        Year: sdk.Int(437032),
                    },
                    StartDate: &shared.Date{
                        Day: sdk.Int(902349),
                        Month: sdk.Int(697631),
                        Year: sdk.Int(99280),
                    },
                },
                DimensionFilters: []shared.MediationReportSpecDimensionFilter{
                    shared.MediationReportSpecDimensionFilter{
                        Dimension: shared.MediationReportSpecDimensionFilterDimensionEnumServingRestriction.ToPointer(),
                        MatchesAny: &shared.StringList{
                            Values: []string{
                                "mollitia",
                                "laborum",
                                "dolores",
                            },
                        },
                    },
                },
                Dimensions: []shared.MediationReportSpecDimensionsEnum{
                    shared.MediationReportSpecDimensionsEnumAdSourceInstance,
                },
                LocalizationSettings: &shared.LocalizationSettings{
                    CurrencyCode: sdk.String("explicabo"),
                    LanguageCode: sdk.String("nobis"),
                },
                MaxReportRows: sdk.Int(315428),
                Metrics: []shared.MediationReportSpecMetricsEnum{
                    shared.MediationReportSpecMetricsEnumEstimatedEarnings,
                    shared.MediationReportSpecMetricsEnumClicks,
                    shared.MediationReportSpecMetricsEnumImpressionCtr,
                },
                SortConditions: []shared.MediationReportSpecSortCondition{
                    shared.MediationReportSpecSortCondition{
                        Dimension: shared.MediationReportSpecSortConditionDimensionEnumApp.ToPointer(),
                        Metric: shared.MediationReportSpecSortConditionMetricEnumImpressionCtr.ToPointer(),
                        Order: shared.MediationReportSpecSortConditionOrderEnumDescending.ToPointer(),
                    },
                },
                TimeZone: sdk.String("sapiente"),
            },
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellat"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("commodi"),
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
                        Day: sdk.Int(474697),
                        Month: sdk.Int(244425),
                        Year: sdk.Int(623510),
                    },
                    StartDate: &shared.Date{
                        Day: sdk.Int(158969),
                        Month: sdk.Int(338007),
                        Year: sdk.Int(110375),
                    },
                },
                DimensionFilters: []shared.NetworkReportSpecDimensionFilter{
                    shared.NetworkReportSpecDimensionFilter{
                        Dimension: shared.NetworkReportSpecDimensionFilterDimensionEnumPlatform.ToPointer(),
                        MatchesAny: &shared.StringList{
                            Values: []string{
                                "odit",
                                "quo",
                            },
                        },
                    },
                    shared.NetworkReportSpecDimensionFilter{
                        Dimension: shared.NetworkReportSpecDimensionFilterDimensionEnumMonth.ToPointer(),
                        MatchesAny: &shared.StringList{
                            Values: []string{
                                "ipsam",
                                "id",
                                "possimus",
                                "aut",
                            },
                        },
                    },
                    shared.NetworkReportSpecDimensionFilter{
                        Dimension: shared.NetworkReportSpecDimensionFilterDimensionEnumDate.ToPointer(),
                        MatchesAny: &shared.StringList{
                            Values: []string{
                                "temporibus",
                                "laborum",
                                "quasi",
                            },
                        },
                    },
                },
                Dimensions: []shared.NetworkReportSpecDimensionsEnum{
                    shared.NetworkReportSpecDimensionsEnumServingRestriction,
                    shared.NetworkReportSpecDimensionsEnumAppVersionName,
                    shared.NetworkReportSpecDimensionsEnumAdType,
                    shared.NetworkReportSpecDimensionsEnumCountry,
                },
                LocalizationSettings: &shared.LocalizationSettings{
                    CurrencyCode: sdk.String("voluptatibus"),
                    LanguageCode: sdk.String("ipsa"),
                },
                MaxReportRows: sdk.Int(604846),
                Metrics: []shared.NetworkReportSpecMetricsEnum{
                    shared.NetworkReportSpecMetricsEnumMatchedRequests,
                    shared.NetworkReportSpecMetricsEnumMetricUnspecified,
                },
                SortConditions: []shared.NetworkReportSpecSortCondition{
                    shared.NetworkReportSpecSortCondition{
                        Dimension: shared.NetworkReportSpecSortConditionDimensionEnumAdType.ToPointer(),
                        Metric: shared.NetworkReportSpecSortConditionMetricEnumClicks.ToPointer(),
                        Order: shared.NetworkReportSpecSortConditionOrderEnumDescending.ToPointer(),
                    },
                },
                TimeZone: sdk.String("dicta"),
            },
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("enim"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("quae"),
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
