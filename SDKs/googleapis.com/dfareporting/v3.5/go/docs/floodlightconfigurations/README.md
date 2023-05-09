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
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("adipisci"),
        ID: "308675cb-f186-4856-a7e8-2cdf9d0fc282",
        Key: sdk.String("quod"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ea",
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("sapiente"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("quis"),
        Ids: []string{
            "totam",
            "provident",
        },
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "est",
        QuotaUser: sdk.String("veniam"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("dolores"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FloodlightConfiguration: &shared.FloodlightConfiguration{
            AccountID: sdk.String("eius"),
            AdvertiserID: sdk.String("voluptates"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("modi"),
                Etag: sdk.String("beatae"),
                ID: sdk.String("e2ca8482-2e51-43f6-99d2-ad37c3099077"),
                Kind: sdk.String("nobis"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("sit"),
            },
            AnalyticsDataSharingEnabled: sdk.Bool(false),
            CustomViewabilityMetric: &shared.CustomViewabilityMetric{
                Configuration: &shared.CustomViewabilityMetricConfiguration{
                    Audible: sdk.Bool(false),
                    TimeMillis: sdk.Int(702164),
                    TimePercent: sdk.Int(386785),
                    ViewabilityPercent: sdk.Int(536223),
                },
                ID: sdk.String("molestiae"),
                Name: sdk.String("Aaron Boehm"),
            },
            ExposureToConversionEnabled: sdk.Bool(false),
            FirstDayOfWeek: shared.FloodlightConfigurationFirstDayOfWeekEnumSunday.ToPointer(),
            ID: sdk.String("autem"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nihil"),
                Etag: sdk.String("repellendus"),
                ID: sdk.String("48860543-c0a3-4049-83cf-6c0276e7b21b"),
                Kind: sdk.String("dolorum"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("provident"),
            },
            InAppAttributionTrackingEnabled: sdk.Bool(false),
            Kind: sdk.String("alias"),
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(849627),
                PostImpressionActivitiesDuration: sdk.Int(133223),
            },
            NaturalSearchConversionAttributionOption: shared.FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumIncludeNaturalSearchConversionAttribution.ToPointer(),
            OmnitureSettings: &shared.OmnitureSettings{
                OmnitureCostDataEnabled: sdk.Bool(false),
                OmnitureIntegrationEnabled: sdk.Bool(false),
            },
            SubaccountID: sdk.String("ut"),
            TagSettings: &shared.TagSettings{
                DynamicTagEnabled: sdk.Bool(false),
                ImageTagEnabled: sdk.Bool(false),
            },
            ThirdPartyAuthenticationTokens: []shared.ThirdPartyAuthenticationToken{
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Ismael Jakubowski"),
                    Value: sdk.String("animi"),
                },
            },
            UserDefinedVariableConfigurations: []shared.UserDefinedVariableConfiguration{
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumString.ToPointer(),
                    ReportName: sdk.String("saepe"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU41.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("quam"),
        ID: "8ec256a5-b092-427f-8c47-996c977bbc57",
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "praesentium",
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("quos"),
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
            AccountID: sdk.String("blanditiis"),
            AdvertiserID: sdk.String("laboriosam"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ipsa"),
                Etag: sdk.String("eaque"),
                ID: sdk.String("c58d67d6-3e4a-4a56-8464-579cfc6c0e50"),
                Kind: sdk.String("dolor"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("quis"),
            },
            AnalyticsDataSharingEnabled: sdk.Bool(false),
            CustomViewabilityMetric: &shared.CustomViewabilityMetric{
                Configuration: &shared.CustomViewabilityMetricConfiguration{
                    Audible: sdk.Bool(false),
                    TimeMillis: sdk.Int(426461),
                    TimePercent: sdk.Int(507356),
                    ViewabilityPercent: sdk.Int(192982),
                },
                ID: sdk.String("illo"),
                Name: sdk.String("Henry Shanahan"),
            },
            ExposureToConversionEnabled: sdk.Bool(false),
            FirstDayOfWeek: shared.FloodlightConfigurationFirstDayOfWeekEnumSunday.ToPointer(),
            ID: sdk.String("rem"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quam"),
                Etag: sdk.String("nobis"),
                ID: sdk.String("28e8afab-c986-4e24-9e43-b2342417d13e"),
                Kind: sdk.String("nesciunt"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("nisi"),
            },
            InAppAttributionTrackingEnabled: sdk.Bool(false),
            Kind: sdk.String("explicabo"),
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(629486),
                PostImpressionActivitiesDuration: sdk.Int(636547),
            },
            NaturalSearchConversionAttributionOption: shared.FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumIncludeNaturalSearchConversionAttribution.ToPointer(),
            OmnitureSettings: &shared.OmnitureSettings{
                OmnitureCostDataEnabled: sdk.Bool(false),
                OmnitureIntegrationEnabled: sdk.Bool(false),
            },
            SubaccountID: sdk.String("culpa"),
            TagSettings: &shared.TagSettings{
                DynamicTagEnabled: sdk.Bool(false),
                ImageTagEnabled: sdk.Bool(false),
            },
            ThirdPartyAuthenticationTokens: []shared.ThirdPartyAuthenticationToken{
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Lee Tromp"),
                    Value: sdk.String("expedita"),
                },
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Alberta McLaughlin"),
                    Value: sdk.String("sint"),
                },
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Jasmine Heidenreich"),
                    Value: sdk.String("quidem"),
                },
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Dan Skiles"),
                    Value: sdk.String("culpa"),
                },
            },
            UserDefinedVariableConfigurations: []shared.UserDefinedVariableConfiguration{
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumNumber.ToPointer(),
                    ReportName: sdk.String("veniam"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU3.ToPointer(),
                },
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumNumber.ToPointer(),
                    ReportName: sdk.String("soluta"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU85.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("optio"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "animi",
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("fugiat"),
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
