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
                    EncryptedUserID: sdk.String("dolor"),
                    EncryptedUserIDCandidates: []string{
                        "vitae",
                    },
                    FloodlightActivityID: sdk.String("pariatur"),
                    FloodlightConfigurationID: sdk.String("numquam"),
                    Gclid: sdk.String("provident"),
                    Kind: sdk.String("quia"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("reiciendis"),
                    MobileDeviceID: sdk.String("modi"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("doloribus"),
                    Quantity: sdk.String("et"),
                    TimestampMicros: sdk.String("qui"),
                    TreatmentForUnderage: sdk.Bool(false),
                    Value: sdk.Float64(4812.67),
                },
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("quidem"),
                            Type: shared.CustomFloodlightVariableTypeEnumU5.ToPointer(),
                            Value: sdk.String("saepe"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("voluptatem"),
                            Type: shared.CustomFloodlightVariableTypeEnumU75.ToPointer(),
                            Value: sdk.String("hic"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("beatae"),
                            Type: shared.CustomFloodlightVariableTypeEnumU97.ToPointer(),
                            Value: sdk.String("deleniti"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("fugit"),
                            Type: shared.CustomFloodlightVariableTypeEnumU8.ToPointer(),
                            Value: sdk.String("reprehenderit"),
                        },
                    },
                    EncryptedUserID: sdk.String("sint"),
                    EncryptedUserIDCandidates: []string{
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
                    EncryptedUserID: sdk.String("ut"),
                    EncryptedUserIDCandidates: []string{
                        "facere",
                        "tenetur",
                        "saepe",
                        "assumenda",
                    },
                    FloodlightActivityID: sdk.String("exercitationem"),
                    FloodlightConfigurationID: sdk.String("exercitationem"),
                    Gclid: sdk.String("dolore"),
                    Kind: sdk.String("sit"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("recusandae"),
                    MobileDeviceID: sdk.String("a"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("exercitationem"),
                    Quantity: sdk.String("neque"),
                    TimestampMicros: sdk.String("mollitia"),
                    TreatmentForUnderage: sdk.Bool(false),
                    Value: sdk.Float64(2425.82),
                },
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("est"),
                            Type: shared.CustomFloodlightVariableTypeEnumU10.ToPointer(),
                            Value: sdk.String("rerum"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("blanditiis"),
                            Type: shared.CustomFloodlightVariableTypeEnumU96.ToPointer(),
                            Value: sdk.String("recusandae"),
                        },
                    },
                    EncryptedUserID: sdk.String("perspiciatis"),
                    EncryptedUserIDCandidates: []string{
                        "reprehenderit",
                        "dolorem",
                        "sunt",
                    },
                    FloodlightActivityID: sdk.String("fuga"),
                    FloodlightConfigurationID: sdk.String("nulla"),
                    Gclid: sdk.String("cumque"),
                    Kind: sdk.String("aperiam"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("ad"),
                    MobileDeviceID: sdk.String("fugiat"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("quas"),
                    Quantity: sdk.String("quis"),
                    TimestampMicros: sdk.String("fuga"),
                    TreatmentForUnderage: sdk.Bool(false),
                    Value: sdk.Float64(9080.3),
                },
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("illum"),
                            Type: shared.CustomFloodlightVariableTypeEnumU97.ToPointer(),
                            Value: sdk.String("rerum"),
                        },
                    },
                    EncryptedUserID: sdk.String("voluptate"),
                    EncryptedUserIDCandidates: []string{
                        "maiores",
                    },
                    FloodlightActivityID: sdk.String("harum"),
                    FloodlightConfigurationID: sdk.String("ratione"),
                    Gclid: sdk.String("molestias"),
                    Kind: sdk.String("odio"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("non"),
                    MobileDeviceID: sdk.String("magni"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("sint"),
                    Quantity: sdk.String("consequatur"),
                    TimestampMicros: sdk.String("illum"),
                    TreatmentForUnderage: sdk.Bool(false),
                    Value: sdk.Float64(2378.75),
                },
            },
            EncryptionInfo: &shared.EncryptionInfo{
                EncryptionEntityID: sdk.String("dolorem"),
                EncryptionEntityType: shared.EncryptionInfoEncryptionEntityTypeEnumDcmAdvertiser.ToPointer(),
                EncryptionSource: shared.EncryptionInfoEncryptionSourceEnumAdServing.ToPointer(),
                Kind: sdk.String("eum"),
            },
            Kind: sdk.String("et"),
        },
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "doloribus",
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("tempora"),
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
