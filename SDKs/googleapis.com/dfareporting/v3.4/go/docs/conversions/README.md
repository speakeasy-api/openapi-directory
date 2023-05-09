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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConversionsBatchInsertRequest: &shared.ConversionsBatchInsertRequest{
            Conversions: []shared.Conversion{
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("voluptatibus"),
                            Type: shared.CustomFloodlightVariableTypeEnumU87.ToPointer(),
                            Value: sdk.String("nemo"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("ratione"),
                            Type: shared.CustomFloodlightVariableTypeEnumU30.ToPointer(),
                            Value: sdk.String("perferendis"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("enim"),
                            Type: shared.CustomFloodlightVariableTypeEnumU78.ToPointer(),
                            Value: sdk.String("libero"),
                        },
                    },
                    Dclid: sdk.String("dolor"),
                    EncryptedUserID: sdk.String("nesciunt"),
                    EncryptedUserIDCandidates: []string{
                        "pariatur",
                    },
                    FloodlightActivityID: sdk.String("numquam"),
                    FloodlightConfigurationID: sdk.String("provident"),
                    Gclid: sdk.String("quia"),
                    Kind: sdk.String("reiciendis"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("modi"),
                    MobileDeviceID: sdk.String("doloribus"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("et"),
                    Quantity: sdk.String("qui"),
                    TimestampMicros: sdk.String("iusto"),
                    TreatmentForUnderage: sdk.Bool(false),
                    Value: sdk.Float64(9557.83),
                },
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("aperiam"),
                            Type: shared.CustomFloodlightVariableTypeEnumU91.ToPointer(),
                            Value: sdk.String("voluptatem"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("soluta"),
                            Type: shared.CustomFloodlightVariableTypeEnumU95.ToPointer(),
                            Value: sdk.String("beatae"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("delectus"),
                            Type: shared.CustomFloodlightVariableTypeEnumU54.ToPointer(),
                            Value: sdk.String("fugit"),
                        },
                    },
                    Dclid: sdk.String("inventore"),
                    EncryptedUserID: sdk.String("reprehenderit"),
                    EncryptedUserIDCandidates: []string{
                        "dignissimos",
                        "voluptatum",
                        "nulla",
                    },
                    FloodlightActivityID: sdk.String("consequatur"),
                    FloodlightConfigurationID: sdk.String("similique"),
                    Gclid: sdk.String("eligendi"),
                    Kind: sdk.String("impedit"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("officia"),
                    MobileDeviceID: sdk.String("odio"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("voluptate"),
                    Quantity: sdk.String("mollitia"),
                    TimestampMicros: sdk.String("repudiandae"),
                    TreatmentForUnderage: sdk.Bool(false),
                    Value: sdk.Float64(7354.1),
                },
            },
            EncryptionInfo: &shared.EncryptionInfo{
                EncryptionEntityID: sdk.String("voluptate"),
                EncryptionEntityType: shared.EncryptionInfoEncryptionEntityTypeEnumAdwordsCustomer.ToPointer(),
                EncryptionSource: shared.EncryptionInfoEncryptionSourceEnumAdServing.ToPointer(),
                Kind: sdk.String("alias"),
            },
            Kind: sdk.String("consequuntur"),
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("magni"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "suscipit",
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("aliquam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConversionsBatchUpdateRequest: &shared.ConversionsBatchUpdateRequest{
            Conversions: []shared.Conversion{
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("voluptatibus"),
                            Type: shared.CustomFloodlightVariableTypeEnumU71.ToPointer(),
                            Value: sdk.String("doloremque"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("officiis"),
                            Type: shared.CustomFloodlightVariableTypeEnumU40.ToPointer(),
                            Value: sdk.String("reprehenderit"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("necessitatibus"),
                            Type: shared.CustomFloodlightVariableTypeEnumU1.ToPointer(),
                            Value: sdk.String("provident"),
                        },
                    },
                    Dclid: sdk.String("ut"),
                    EncryptedUserID: sdk.String("hic"),
                    EncryptedUserIDCandidates: []string{
                        "tenetur",
                        "saepe",
                        "assumenda",
                        "exercitationem",
                    },
                    FloodlightActivityID: sdk.String("exercitationem"),
                    FloodlightConfigurationID: sdk.String("dolore"),
                    Gclid: sdk.String("sit"),
                    Kind: sdk.String("recusandae"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("a"),
                    MobileDeviceID: sdk.String("exercitationem"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("neque"),
                    Quantity: sdk.String("mollitia"),
                    TimestampMicros: sdk.String("velit"),
                    TreatmentForUnderage: sdk.Bool(false),
                    Value: sdk.Float64(2803.09),
                },
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("quasi"),
                            Type: shared.CustomFloodlightVariableTypeEnumU71.ToPointer(),
                            Value: sdk.String("blanditiis"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("sapiente"),
                            Type: shared.CustomFloodlightVariableTypeEnumU93.ToPointer(),
                            Value: sdk.String("perspiciatis"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("natus"),
                            Type: shared.CustomFloodlightVariableTypeEnumU45.ToPointer(),
                            Value: sdk.String("dolorem"),
                        },
                    },
                    Dclid: sdk.String("sunt"),
                    EncryptedUserID: sdk.String("fuga"),
                    EncryptedUserIDCandidates: []string{
                        "cumque",
                        "aperiam",
                        "ad",
                        "fugiat",
                    },
                    FloodlightActivityID: sdk.String("quas"),
                    FloodlightConfigurationID: sdk.String("quis"),
                    Gclid: sdk.String("fuga"),
                    Kind: sdk.String("eveniet"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("consequuntur"),
                    MobileDeviceID: sdk.String("illum"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("delectus"),
                    Quantity: sdk.String("rerum"),
                    TimestampMicros: sdk.String("voluptate"),
                    TreatmentForUnderage: sdk.Bool(false),
                    Value: sdk.Float64(213.41),
                },
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("harum"),
                            Type: shared.CustomFloodlightVariableTypeEnumU19.ToPointer(),
                            Value: sdk.String("molestias"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("odio"),
                            Type: shared.CustomFloodlightVariableTypeEnumU26.ToPointer(),
                            Value: sdk.String("magni"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("sint"),
                            Type: shared.CustomFloodlightVariableTypeEnumU2.ToPointer(),
                            Value: sdk.String("illum"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("adipisci"),
                            Type: shared.CustomFloodlightVariableTypeEnumU22.ToPointer(),
                            Value: sdk.String("ex"),
                        },
                    },
                    Dclid: sdk.String("quis"),
                    EncryptedUserID: sdk.String("eum"),
                    EncryptedUserIDCandidates: []string{
                        "officiis",
                    },
                    FloodlightActivityID: sdk.String("quo"),
                    FloodlightConfigurationID: sdk.String("culpa"),
                    Gclid: sdk.String("architecto"),
                    Kind: sdk.String("iure"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("eveniet"),
                    MobileDeviceID: sdk.String("doloribus"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("praesentium"),
                    Quantity: sdk.String("iste"),
                    TimestampMicros: sdk.String("tempora"),
                    TreatmentForUnderage: sdk.Bool(false),
                    Value: sdk.Float64(3226.63),
                },
            },
            EncryptionInfo: &shared.EncryptionInfo{
                EncryptionEntityID: sdk.String("ab"),
                EncryptionEntityType: shared.EncryptionInfoEncryptionEntityTypeEnumDbmAdvertiser.ToPointer(),
                EncryptionSource: shared.EncryptionInfoEncryptionSourceEnumDataTransfer.ToPointer(),
                Kind: sdk.String("ducimus"),
            },
            Kind: sdk.String("nisi"),
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("nam"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "molestias",
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("possimus"),
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
