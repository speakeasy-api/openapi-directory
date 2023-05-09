# FloodlightConfigurations

### Available Operations

* [DfareportingFloodlightConfigurationsGet](#dfareportingfloodlightconfigurationsget) - Gets one floodlight configuration by ID.
* [DfareportingFloodlightConfigurationsList](#dfareportingfloodlightconfigurationslist) - Retrieves a list of floodlight configurations, possibly filtered.
* [DfareportingFloodlightConfigurationsPatch](#dfareportingfloodlightconfigurationspatch) - Updates an existing floodlight configuration. This method supports patch semantics.
* [DfareportingFloodlightConfigurationsUpdate](#dfareportingfloodlightconfigurationsupdate) - Updates an existing floodlight configuration.

## DfareportingFloodlightConfigurationsGet

Gets one floodlight configuration by ID.

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
    res, err := s.FloodlightConfigurations.DfareportingFloodlightConfigurationsGet(ctx, operations.DfareportingFloodlightConfigurationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("repellendus"),
        ID: "c480d6e3-3086-475c-bf18-6856a7e82cdf",
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptatem",
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.DfareportingFloodlightConfigurationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightConfiguration != nil {
        // handle response
    }
}
```

## DfareportingFloodlightConfigurationsList

Retrieves a list of floodlight configurations, possibly filtered.

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
    res, err := s.FloodlightConfigurations.DfareportingFloodlightConfigurationsList(ctx, operations.DfareportingFloodlightConfigurationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("ea"),
        Ids: []string{
            "est",
            "sapiente",
        },
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ratione",
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.DfareportingFloodlightConfigurationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightConfigurationsListResponse != nil {
        // handle response
    }
}
```

## DfareportingFloodlightConfigurationsPatch

Updates an existing floodlight configuration. This method supports patch semantics.

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
    res, err := s.FloodlightConfigurations.DfareportingFloodlightConfigurationsPatch(ctx, operations.DfareportingFloodlightConfigurationsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FloodlightConfiguration: &shared.FloodlightConfiguration{
            AccountID: sdk.String("provident"),
            AdvertiserID: sdk.String("distinctio"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("accusamus"),
                Etag: sdk.String("est"),
                ID: sdk.String("5d264e41-e2ca-4848-a2e5-13f6d9d2ad37"),
                Kind: sdk.String("quod"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("eaque"),
            },
            AnalyticsDataSharingEnabled: sdk.Bool(false),
            CustomViewabilityMetric: &shared.CustomViewabilityMetric{
                Configuration: &shared.CustomViewabilityMetricConfiguration{
                    Audible: sdk.Bool(false),
                    TimeMillis: sdk.Int(622811),
                    TimePercent: sdk.Int(582115),
                    ViewabilityPercent: sdk.Int(32836),
                },
                ID: sdk.String("iure"),
                Name: sdk.String("Miss Della Bergnaum"),
            },
            ExposureToConversionEnabled: sdk.Bool(false),
            FirstDayOfWeek: shared.FloodlightConfigurationFirstDayOfWeekEnumSunday.ToPointer(),
            ID: sdk.String("molestiae"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("iste"),
                Etag: sdk.String("sed"),
                ID: sdk.String("163e67d4-8860-4543-80a3-049c3cf6c027"),
                Kind: sdk.String("laboriosam"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("dignissimos"),
            },
            InAppAttributionTrackingEnabled: sdk.Bool(false),
            Kind: sdk.String("libero"),
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(182371),
                PostImpressionActivitiesDuration: sdk.Int(76658),
            },
            NaturalSearchConversionAttributionOption: shared.FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumIncludeNaturalSearchTieredConversionAttribution.ToPointer(),
            OmnitureSettings: &shared.OmnitureSettings{
                OmnitureCostDataEnabled: sdk.Bool(false),
                OmnitureIntegrationEnabled: sdk.Bool(false),
            },
            SubaccountID: sdk.String("dolorum"),
            TagSettings: &shared.TagSettings{
                DynamicTagEnabled: sdk.Bool(false),
                ImageTagEnabled: sdk.Bool(false),
            },
            ThirdPartyAuthenticationTokens: []shared.ThirdPartyAuthenticationToken{
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Robert Stanton"),
                    Value: sdk.String("ut"),
                },
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Melba Stiedemann"),
                    Value: sdk.String("magni"),
                },
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Willie Barrows"),
                    Value: sdk.String("placeat"),
                },
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Ada Koepp"),
                    Value: sdk.String("quo"),
                },
            },
            UserDefinedVariableConfigurations: []shared.UserDefinedVariableConfiguration{
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumString.ToPointer(),
                    ReportName: sdk.String("commodi"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU64.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("sint"),
        ID: "227fcc47-996c-4977-bbc5-7f38928a8600",
        Key: sdk.String("quo"),
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "atque",
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.DfareportingFloodlightConfigurationsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightConfiguration != nil {
        // handle response
    }
}
```

## DfareportingFloodlightConfigurationsUpdate

Updates an existing floodlight configuration.

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
    res, err := s.FloodlightConfigurations.DfareportingFloodlightConfigurationsUpdate(ctx, operations.DfareportingFloodlightConfigurationsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FloodlightConfiguration: &shared.FloodlightConfiguration{
            AccountID: sdk.String("ea"),
            AdvertiserID: sdk.String("sequi"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptates"),
                Etag: sdk.String("tempora"),
                ID: sdk.String("aa568464-579c-4fc6-80e5-03f56831f1d8"),
                Kind: sdk.String("itaque"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("rem"),
            },
            AnalyticsDataSharingEnabled: sdk.Bool(false),
            CustomViewabilityMetric: &shared.CustomViewabilityMetric{
                Configuration: &shared.CustomViewabilityMetricConfiguration{
                    Audible: sdk.Bool(false),
                    TimeMillis: sdk.Int(465405),
                    TimePercent: sdk.Int(747742),
                    ViewabilityPercent: sdk.Int(185898),
                },
                ID: sdk.String("totam"),
                Name: sdk.String("Alberto Oberbrunner"),
            },
            ExposureToConversionEnabled: sdk.Bool(false),
            FirstDayOfWeek: shared.FloodlightConfigurationFirstDayOfWeekEnumSunday.ToPointer(),
            ID: sdk.String("quod"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("excepturi"),
                Etag: sdk.String("laudantium"),
                ID: sdk.String("6e241e43-b234-4241-bd13-e3f62aa9ae4a"),
                Kind: sdk.String("necessitatibus"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("animi"),
            },
            InAppAttributionTrackingEnabled: sdk.Bool(false),
            Kind: sdk.String("expedita"),
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(253894),
                PostImpressionActivitiesDuration: sdk.Int(663724),
            },
            NaturalSearchConversionAttributionOption: shared.FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumIncludeNaturalSearchConversionAttribution.ToPointer(),
            OmnitureSettings: &shared.OmnitureSettings{
                OmnitureCostDataEnabled: sdk.Bool(false),
                OmnitureIntegrationEnabled: sdk.Bool(false),
            },
            SubaccountID: sdk.String("cumque"),
            TagSettings: &shared.TagSettings{
                DynamicTagEnabled: sdk.Bool(false),
                ImageTagEnabled: sdk.Bool(false),
            },
            ThirdPartyAuthenticationTokens: []shared.ThirdPartyAuthenticationToken{
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Howard Schoen"),
                    Value: sdk.String("deleniti"),
                },
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Hubert Herzog"),
                    Value: sdk.String("laborum"),
                },
            },
            UserDefinedVariableConfigurations: []shared.UserDefinedVariableConfiguration{
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumString.ToPointer(),
                    ReportName: sdk.String("similique"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU34.ToPointer(),
                },
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumString.ToPointer(),
                    ReportName: sdk.String("quas"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU75.ToPointer(),
                },
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumNumber.ToPointer(),
                    ReportName: sdk.String("dolor"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU53.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "rem",
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("iure"),
    }, operations.DfareportingFloodlightConfigurationsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightConfiguration != nil {
        // handle response
    }
}
```
