# Conversions

### Available Operations

* [DfareportingConversionsBatchinsert](#dfareportingconversionsbatchinsert) - Inserts conversions.
* [DfareportingConversionsBatchupdate](#dfareportingconversionsbatchupdate) - Updates existing conversions.

## DfareportingConversionsBatchinsert

Inserts conversions.

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
    res, err := s.Conversions.DfareportingConversionsBatchinsert(ctx, operations.DfareportingConversionsBatchinsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConversionsBatchInsertRequest: &shared.ConversionsBatchInsertRequest{
            Conversions: []shared.Conversion{
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("nulla"),
                            Type: shared.CustomFloodlightVariableTypeEnumU19.ToPointer(),
                            Value: sdk.String("maxime"),
                        },
                    },
                    Dclid: sdk.String("ratione"),
                    EncryptedUserID: sdk.String("soluta"),
                    EncryptedUserIDCandidates: []string{
                        "sit",
                        "laudantium",
                        "sit",
                    },
                    FloodlightActivityID: sdk.String("perspiciatis"),
                    FloodlightConfigurationID: sdk.String("quaerat"),
                    Gclid: sdk.String("nesciunt"),
                    Kind: sdk.String("molestiae"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("adipisci"),
                    MobileDeviceID: sdk.String("eveniet"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("ipsa"),
                    Quantity: sdk.String("laboriosam"),
                    TimestampMicros: sdk.String("sit"),
                    TreatmentForUnderage: sdk.Bool(false),
                    Value: sdk.Float64(2885.25),
                },
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("excepturi"),
                            Type: shared.CustomFloodlightVariableTypeEnumU75.ToPointer(),
                            Value: sdk.String("voluptates"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("rerum"),
                            Type: shared.CustomFloodlightVariableTypeEnumU74.ToPointer(),
                            Value: sdk.String("est"),
                        },
                    },
                    Dclid: sdk.String("fugiat"),
                    EncryptedUserID: sdk.String("perferendis"),
                    EncryptedUserIDCandidates: []string{
                        "tenetur",
                    },
                    FloodlightActivityID: sdk.String("sunt"),
                    FloodlightConfigurationID: sdk.String("quis"),
                    Gclid: sdk.String("corrupti"),
                    Kind: sdk.String("iure"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("quidem"),
                    MobileDeviceID: sdk.String("quod"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("a"),
                    Quantity: sdk.String("et"),
                    TimestampMicros: sdk.String("ipsam"),
                    TreatmentForUnderage: sdk.Bool(false),
                    Value: sdk.Float64(1768.52),
                },
            },
            EncryptionInfo: &shared.EncryptionInfo{
                EncryptionEntityID: sdk.String("exercitationem"),
                EncryptionEntityType: shared.EncryptionInfoEncryptionEntityTypeEnumDcmAdvertiser.ToPointer(),
                EncryptionSource: shared.EncryptionInfoEncryptionSourceEnumAdServing.ToPointer(),
                Kind: sdk.String("quibusdam"),
            },
            Kind: sdk.String("fuga"),
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("nam"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "porro",
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("qui"),
    }, operations.DfareportingConversionsBatchinsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversionsBatchInsertResponse != nil {
        // handle response
    }
}
```

## DfareportingConversionsBatchupdate

Updates existing conversions.

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
    res, err := s.Conversions.DfareportingConversionsBatchupdate(ctx, operations.DfareportingConversionsBatchupdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConversionsBatchUpdateRequest: &shared.ConversionsBatchUpdateRequest{
            Conversions: []shared.Conversion{
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("impedit"),
                            Type: shared.CustomFloodlightVariableTypeEnumU24.ToPointer(),
                            Value: sdk.String("quis"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("ut"),
                            Type: shared.CustomFloodlightVariableTypeEnumU67.ToPointer(),
                            Value: sdk.String("fuga"),
                        },
                    },
                    Dclid: sdk.String("labore"),
                    EncryptedUserID: sdk.String("adipisci"),
                    EncryptedUserIDCandidates: []string{
                        "cum",
                    },
                    FloodlightActivityID: sdk.String("magnam"),
                    FloodlightConfigurationID: sdk.String("nihil"),
                    Gclid: sdk.String("officiis"),
                    Kind: sdk.String("inventore"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("esse"),
                    MobileDeviceID: sdk.String("ex"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("amet"),
                    Quantity: sdk.String("minus"),
                    TimestampMicros: sdk.String("ad"),
                    TreatmentForUnderage: sdk.Bool(false),
                    Value: sdk.Float64(1292.57),
                },
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("blanditiis"),
                            Type: shared.CustomFloodlightVariableTypeEnumU76.ToPointer(),
                            Value: sdk.String("qui"),
                        },
                    },
                    Dclid: sdk.String("amet"),
                    EncryptedUserID: sdk.String("recusandae"),
                    EncryptedUserIDCandidates: []string{
                        "corrupti",
                        "sit",
                        "magni",
                    },
                    FloodlightActivityID: sdk.String("repellendus"),
                    FloodlightConfigurationID: sdk.String("quas"),
                    Gclid: sdk.String("ratione"),
                    Kind: sdk.String("sapiente"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("alias"),
                    MobileDeviceID: sdk.String("repellendus"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("magnam"),
                    Quantity: sdk.String("quis"),
                    TimestampMicros: sdk.String("repudiandae"),
                    TreatmentForUnderage: sdk.Bool(false),
                    Value: sdk.Float64(7436.05),
                },
            },
            EncryptionInfo: &shared.EncryptionInfo{
                EncryptionEntityID: sdk.String("eius"),
                EncryptionEntityType: shared.EncryptionInfoEncryptionEntityTypeEnumDbmAdvertiser.ToPointer(),
                EncryptionSource: shared.EncryptionInfoEncryptionSourceEnumAdServing.ToPointer(),
                Kind: sdk.String("nobis"),
            },
            Kind: sdk.String("ea"),
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "delectus",
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("rem"),
    }, operations.DfareportingConversionsBatchupdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversionsBatchUpdateResponse != nil {
        // handle response
    }
}
```
