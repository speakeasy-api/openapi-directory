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
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("laboriosam"),
        ID: "6db8a749-e398-4451-9cc7-5e4f0c004b5b",
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsam",
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("nobis"),
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
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("quia"),
        Ids: []string{
            "alias",
            "consequatur",
            "suscipit",
            "occaecati",
        },
        Key: sdk.String("ea"),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nemo",
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("possimus"),
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
            AccountID: sdk.String("est"),
            AdvertiserID: sdk.String("vitae"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nihil"),
                Etag: sdk.String("consectetur"),
                ID: sdk.String("d84bbe24-f298-434a-bb07-35cb6285d4a2"),
                Kind: sdk.String("unde"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("fuga"),
            },
            AnalyticsDataSharingEnabled: sdk.Bool(false),
            CustomViewabilityMetric: &shared.CustomViewabilityMetric{
                Configuration: &shared.CustomViewabilityMetricConfiguration{
                    Audible: sdk.Bool(false),
                    TimeMillis: sdk.Int(666215),
                    TimePercent: sdk.Int(64244),
                    ViewabilityPercent: sdk.Int(890615),
                },
                ID: sdk.String("quasi"),
                Name: sdk.String("Guadalupe Bogan"),
            },
            ExposureToConversionEnabled: sdk.Bool(false),
            FirstDayOfWeek: shared.FloodlightConfigurationFirstDayOfWeekEnumSunday.ToPointer(),
            ID: sdk.String("voluptate"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("possimus"),
                Etag: sdk.String("aspernatur"),
                ID: sdk.String("ee209505-bf03-4a93-a944-80ca37fb1078"),
                Kind: sdk.String("natus"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("sequi"),
            },
            InAppAttributionTrackingEnabled: sdk.Bool(false),
            Kind: sdk.String("fugit"),
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(648017),
                PostImpressionActivitiesDuration: sdk.Int(784414),
            },
            NaturalSearchConversionAttributionOption: shared.FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumExcludeNaturalSearchConversionAttribution.ToPointer(),
            OmnitureSettings: &shared.OmnitureSettings{
                OmnitureCostDataEnabled: sdk.Bool(false),
                OmnitureIntegrationEnabled: sdk.Bool(false),
            },
            SubaccountID: sdk.String("amet"),
            TagSettings: &shared.TagSettings{
                DynamicTagEnabled: sdk.Bool(false),
                ImageTagEnabled: sdk.Bool(false),
            },
            ThirdPartyAuthenticationTokens: []shared.ThirdPartyAuthenticationToken{
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Constance Conroy"),
                    Value: sdk.String("assumenda"),
                },
            },
            UserDefinedVariableConfigurations: []shared.UserDefinedVariableConfiguration{
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumString.ToPointer(),
                    ReportName: sdk.String("provident"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU93.ToPointer(),
                },
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumNumber.ToPointer(),
                    ReportName: sdk.String("in"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU26.ToPointer(),
                },
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumNumber.ToPointer(),
                    ReportName: sdk.String("error"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU49.ToPointer(),
                },
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumNumber.ToPointer(),
                    ReportName: sdk.String("corrupti"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU54.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("ipsum"),
        ID: "6fd1ccc3-41c8-4657-b474-f0a740fb4ab4",
        Key: sdk.String("eius"),
        OauthToken: sdk.String("illo"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "impedit",
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("doloremque"),
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
            AccountID: sdk.String("saepe"),
            AdvertiserID: sdk.String("esse"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("commodi"),
                Etag: sdk.String("velit"),
                ID: sdk.String("995d808b-be79-4445-9ebc-550a1c426b59"),
                Kind: sdk.String("maxime"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("dolor"),
            },
            AnalyticsDataSharingEnabled: sdk.Bool(false),
            CustomViewabilityMetric: &shared.CustomViewabilityMetric{
                Configuration: &shared.CustomViewabilityMetricConfiguration{
                    Audible: sdk.Bool(false),
                    TimeMillis: sdk.Int(413096),
                    TimePercent: sdk.Int(410313),
                    ViewabilityPercent: sdk.Int(992447),
                },
                ID: sdk.String("facere"),
                Name: sdk.String("Kim Braun"),
            },
            ExposureToConversionEnabled: sdk.Bool(false),
            FirstDayOfWeek: shared.FloodlightConfigurationFirstDayOfWeekEnumMonday.ToPointer(),
            ID: sdk.String("voluptatum"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quia"),
                Etag: sdk.String("quisquam"),
                ID: sdk.String("1b855e88-9d9e-4f93-ae90-00a13ad81242"),
                Kind: sdk.String("alias"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("voluptates"),
            },
            InAppAttributionTrackingEnabled: sdk.Bool(false),
            Kind: sdk.String("sapiente"),
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(870738),
                PostImpressionActivitiesDuration: sdk.Int(182730),
            },
            NaturalSearchConversionAttributionOption: shared.FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumExcludeNaturalSearchConversionAttribution.ToPointer(),
            OmnitureSettings: &shared.OmnitureSettings{
                OmnitureCostDataEnabled: sdk.Bool(false),
                OmnitureIntegrationEnabled: sdk.Bool(false),
            },
            SubaccountID: sdk.String("eius"),
            TagSettings: &shared.TagSettings{
                DynamicTagEnabled: sdk.Bool(false),
                ImageTagEnabled: sdk.Bool(false),
            },
            ThirdPartyAuthenticationTokens: []shared.ThirdPartyAuthenticationToken{
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Nina Mertz"),
                    Value: sdk.String("quam"),
                },
            },
            UserDefinedVariableConfigurations: []shared.UserDefinedVariableConfiguration{
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumNumber.ToPointer(),
                    ReportName: sdk.String("nihil"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU61.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("eveniet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("eveniet"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "officia",
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("mollitia"),
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
