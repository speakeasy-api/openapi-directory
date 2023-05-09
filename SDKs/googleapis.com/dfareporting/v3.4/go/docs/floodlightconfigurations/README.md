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
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("error"),
        ID: "ab4ae7b1-a5b9-408d-8e30-491aa35d4a83",
        Key: sdk.String("natus"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "consequatur",
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("dolorum"),
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
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("occaecati"),
        Ids: []string{
            "blanditiis",
        },
        Key: sdk.String("a"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "neque",
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("iste"),
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
            AccountID: sdk.String("ut"),
            AdvertiserID: sdk.String("exercitationem"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sit"),
                Etag: sdk.String("reprehenderit"),
                ID: sdk.String("e0e39c7e-23ec-4b06-8465-2e23a3d6c657"),
                Kind: sdk.String("vero"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("quibusdam"),
            },
            AnalyticsDataSharingEnabled: sdk.Bool(false),
            CustomViewabilityMetric: &shared.CustomViewabilityMetric{
                Configuration: &shared.CustomViewabilityMetricConfiguration{
                    Audible: sdk.Bool(false),
                    TimeMillis: sdk.Int(893605),
                    TimePercent: sdk.Int(524212),
                    ViewabilityPercent: sdk.Int(938720),
                },
                ID: sdk.String("molestiae"),
                Name: sdk.String("Jeffrey Abshire"),
            },
            ExposureToConversionEnabled: sdk.Bool(false),
            FirstDayOfWeek: shared.FloodlightConfigurationFirstDayOfWeekEnumMonday.ToPointer(),
            ID: sdk.String("occaecati"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("rem"),
                Etag: sdk.String("ex"),
                ID: sdk.String("aa99d3a1-d323-429e-8583-7e8f2ad6bb10"),
                Kind: sdk.String("debitis"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("nostrum"),
            },
            InAppAttributionTrackingEnabled: sdk.Bool(false),
            Kind: sdk.String("ipsam"),
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(970215),
                PostImpressionActivitiesDuration: sdk.Int(832225),
            },
            NaturalSearchConversionAttributionOption: shared.FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumIncludeNaturalSearchTieredConversionAttribution.ToPointer(),
            OmnitureSettings: &shared.OmnitureSettings{
                OmnitureCostDataEnabled: sdk.Bool(false),
                OmnitureIntegrationEnabled: sdk.Bool(false),
            },
            SubaccountID: sdk.String("aliquam"),
            TagSettings: &shared.TagSettings{
                DynamicTagEnabled: sdk.Bool(false),
                ImageTagEnabled: sdk.Bool(false),
            },
            ThirdPartyAuthenticationTokens: []shared.ThirdPartyAuthenticationToken{
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Krystal Hoeger"),
                    Value: sdk.String("ipsum"),
                },
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Christy Jacobi"),
                    Value: sdk.String("quod"),
                },
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Timmy Berge"),
                    Value: sdk.String("molestias"),
                },
            },
            UserDefinedVariableConfigurations: []shared.UserDefinedVariableConfiguration{
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumString.ToPointer(),
                    ReportName: sdk.String("deserunt"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU50.ToPointer(),
                },
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumNumber.ToPointer(),
                    ReportName: sdk.String("deleniti"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU15.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("omnis"),
        ID: "d0fc282c-666a-4f3c-bf55-89bea5d264e4",
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ratione",
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("corrupti"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FloodlightConfiguration: &shared.FloodlightConfiguration{
            AccountID: sdk.String("corrupti"),
            AdvertiserID: sdk.String("consequuntur"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("consequuntur"),
                Etag: sdk.String("officiis"),
                ID: sdk.String("513f6d9d-2ad3-47c3-8990-77c10b687921"),
                Kind: sdk.String("commodi"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("eveniet"),
            },
            AnalyticsDataSharingEnabled: sdk.Bool(false),
            CustomViewabilityMetric: &shared.CustomViewabilityMetric{
                Configuration: &shared.CustomViewabilityMetricConfiguration{
                    Audible: sdk.Bool(false),
                    TimeMillis: sdk.Int(417848),
                    TimePercent: sdk.Int(468634),
                    ViewabilityPercent: sdk.Int(834499),
                },
                ID: sdk.String("non"),
                Name: sdk.String("Mrs. Jaime Kautzer"),
            },
            ExposureToConversionEnabled: sdk.Bool(false),
            FirstDayOfWeek: shared.FloodlightConfigurationFirstDayOfWeekEnumMonday.ToPointer(),
            ID: sdk.String("porro"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("aperiam"),
                Etag: sdk.String("officia"),
                ID: sdk.String("3049c3cf-6c02-476e-bb21-bad90d2743fd"),
                Kind: sdk.String("ex"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("magni"),
            },
            InAppAttributionTrackingEnabled: sdk.Bool(false),
            Kind: sdk.String("animi"),
            LookbackConfiguration: &shared.LookbackConfiguration{
                ClickDuration: sdk.Int(120927),
                PostImpressionActivitiesDuration: sdk.Int(27796),
            },
            NaturalSearchConversionAttributionOption: shared.FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumIncludeNaturalSearchTieredConversionAttribution.ToPointer(),
            OmnitureSettings: &shared.OmnitureSettings{
                OmnitureCostDataEnabled: sdk.Bool(false),
                OmnitureIntegrationEnabled: sdk.Bool(false),
            },
            SubaccountID: sdk.String("ea"),
            TagSettings: &shared.TagSettings{
                DynamicTagEnabled: sdk.Bool(false),
                ImageTagEnabled: sdk.Bool(false),
            },
            ThirdPartyAuthenticationTokens: []shared.ThirdPartyAuthenticationToken{
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Ada Koepp"),
                    Value: sdk.String("quo"),
                },
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Erin Jerde"),
                    Value: sdk.String("cum"),
                },
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Bobbie Crooks"),
                    Value: sdk.String("doloribus"),
                },
                shared.ThirdPartyAuthenticationToken{
                    Name: sdk.String("Clark Gerhold"),
                    Value: sdk.String("natus"),
                },
            },
            UserDefinedVariableConfigurations: []shared.UserDefinedVariableConfiguration{
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumNumber.ToPointer(),
                    ReportName: sdk.String("sint"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU46.ToPointer(),
                },
                shared.UserDefinedVariableConfiguration{
                    DataType: shared.UserDefinedVariableConfigurationDataTypeEnumString.ToPointer(),
                    ReportName: sdk.String("cum"),
                    VariableType: shared.UserDefinedVariableConfigurationVariableTypeEnumU75.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("ratione"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "perspiciatis",
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("est"),
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
