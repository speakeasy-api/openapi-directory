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
                            Kind: sdk.String("explicabo"),
                            Type: shared.CustomFloodlightVariableTypeEnumU53.ToPointer(),
                            Value: sdk.String("ipsam"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("nemo"),
                            Type: shared.CustomFloodlightVariableTypeEnumU20.ToPointer(),
                            Value: sdk.String("optio"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("libero"),
                            Type: shared.CustomFloodlightVariableTypeEnumU7.ToPointer(),
                            Value: sdk.String("alias"),
                        },
                    },
                    Dclid: sdk.String("accusantium"),
                    EncryptedUserID: sdk.String("doloremque"),
                    EncryptedUserIDCandidates: []string{
                        "tempore",
                        "necessitatibus",
                    },
                    FloodlightActivityID: sdk.String("reiciendis"),
                    FloodlightConfigurationID: sdk.String("incidunt"),
                    Gclid: sdk.String("provident"),
                    ImpressionID: sdk.String("dolores"),
                    Kind: sdk.String("illo"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("recusandae"),
                    MobileDeviceID: sdk.String("quod"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("magni"),
                    Quantity: sdk.String("sit"),
                    TimestampMicros: sdk.String("voluptas"),
                    TreatmentForUnderage: sdk.Bool(false),
                    UserIdentifiers: []shared.UserIdentifier{
                        shared.UserIdentifier{
                            AddressInfo: &shared.OfflineUserAddressInfo{
                                City: sdk.String("Krajcikboro"),
                                CountryCode: sdk.String("MQ"),
                                HashedFirstName: sdk.String("amet"),
                                HashedLastName: sdk.String("ex"),
                                HashedStreetAddress: sdk.String("aliquid"),
                                PostalCode: sdk.String("75990-9179"),
                                State: sdk.String("veritatis"),
                            },
                            HashedEmail: sdk.String("provident"),
                            HashedPhoneNumber: sdk.String("veniam"),
                        },
                    },
                    Value: sdk.Float64(5514.1),
                },
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("facere"),
                            Type: shared.CustomFloodlightVariableTypeEnumU27.ToPointer(),
                            Value: sdk.String("doloremque"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("vero"),
                            Type: shared.CustomFloodlightVariableTypeEnumU2.ToPointer(),
                            Value: sdk.String("sequi"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("reiciendis"),
                            Type: shared.CustomFloodlightVariableTypeEnumU21.ToPointer(),
                            Value: sdk.String("assumenda"),
                        },
                    },
                    Dclid: sdk.String("saepe"),
                    EncryptedUserID: sdk.String("nobis"),
                    EncryptedUserIDCandidates: []string{
                        "quia",
                        "natus",
                        "molestiae",
                    },
                    FloodlightActivityID: sdk.String("facilis"),
                    FloodlightConfigurationID: sdk.String("earum"),
                    Gclid: sdk.String("ipsum"),
                    ImpressionID: sdk.String("itaque"),
                    Kind: sdk.String("cupiditate"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("consequatur"),
                    MobileDeviceID: sdk.String("harum"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("nobis"),
                    Quantity: sdk.String("numquam"),
                    TimestampMicros: sdk.String("consequatur"),
                    TreatmentForUnderage: sdk.Bool(false),
                    UserIdentifiers: []shared.UserIdentifier{
                        shared.UserIdentifier{
                            AddressInfo: &shared.OfflineUserAddressInfo{
                                City: sdk.String("Middletown"),
                                CountryCode: sdk.String("IM"),
                                HashedFirstName: sdk.String("blanditiis"),
                                HashedLastName: sdk.String("voluptatibus"),
                                HashedStreetAddress: sdk.String("nulla"),
                                PostalCode: sdk.String("12037"),
                                State: sdk.String("libero"),
                            },
                            HashedEmail: sdk.String("dolor"),
                            HashedPhoneNumber: sdk.String("nesciunt"),
                        },
                        shared.UserIdentifier{
                            AddressInfo: &shared.OfflineUserAddressInfo{
                                City: sdk.String("Port Deonstead"),
                                CountryCode: sdk.String("CD"),
                                HashedFirstName: sdk.String("reiciendis"),
                                HashedLastName: sdk.String("modi"),
                                HashedStreetAddress: sdk.String("doloribus"),
                                PostalCode: sdk.String("14960"),
                                State: sdk.String("saepe"),
                            },
                            HashedEmail: sdk.String("voluptatem"),
                            HashedPhoneNumber: sdk.String("soluta"),
                        },
                        shared.UserIdentifier{
                            AddressInfo: &shared.OfflineUserAddressInfo{
                                City: sdk.String("Bridgeport"),
                                CountryCode: sdk.String("VI"),
                                HashedFirstName: sdk.String("deleniti"),
                                HashedLastName: sdk.String("fugit"),
                                HashedStreetAddress: sdk.String("inventore"),
                                PostalCode: sdk.String("54580"),
                                State: sdk.String("similique"),
                            },
                            HashedEmail: sdk.String("eligendi"),
                            HashedPhoneNumber: sdk.String("impedit"),
                        },
                        shared.UserIdentifier{
                            AddressInfo: &shared.OfflineUserAddressInfo{
                                City: sdk.String("Kuhicport"),
                                CountryCode: sdk.String("NE"),
                                HashedFirstName: sdk.String("repudiandae"),
                                HashedLastName: sdk.String("tempore"),
                                HashedStreetAddress: sdk.String("voluptate"),
                                PostalCode: sdk.String("40106-3103"),
                                State: sdk.String("suscipit"),
                            },
                            HashedEmail: sdk.String("rerum"),
                            HashedPhoneNumber: sdk.String("laboriosam"),
                        },
                    },
                    Value: sdk.Float64(3060.58),
                },
                shared.Conversion{
                    ChildDirectedTreatment: sdk.Bool(false),
                    CustomVariables: []shared.CustomFloodlightVariable{
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("unde"),
                            Type: shared.CustomFloodlightVariableTypeEnumU57.ToPointer(),
                            Value: sdk.String("voluptatibus"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("facilis"),
                            Type: shared.CustomFloodlightVariableTypeEnumU5.ToPointer(),
                            Value: sdk.String("officiis"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("nisi"),
                            Type: shared.CustomFloodlightVariableTypeEnumU45.ToPointer(),
                            Value: sdk.String("necessitatibus"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("alias"),
                            Type: shared.CustomFloodlightVariableTypeEnumU59.ToPointer(),
                            Value: sdk.String("ut"),
                        },
                    },
                    Dclid: sdk.String("hic"),
                    EncryptedUserID: sdk.String("facere"),
                    EncryptedUserIDCandidates: []string{
                        "saepe",
                        "assumenda",
                        "exercitationem",
                        "exercitationem",
                    },
                    FloodlightActivityID: sdk.String("dolore"),
                    FloodlightConfigurationID: sdk.String("sit"),
                    Gclid: sdk.String("recusandae"),
                    ImpressionID: sdk.String("a"),
                    Kind: sdk.String("exercitationem"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("neque"),
                    MobileDeviceID: sdk.String("mollitia"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("velit"),
                    Quantity: sdk.String("ut"),
                    TimestampMicros: sdk.String("est"),
                    TreatmentForUnderage: sdk.Bool(false),
                    UserIdentifiers: []shared.UserIdentifier{
                        shared.UserIdentifier{
                            AddressInfo: &shared.OfflineUserAddressInfo{
                                City: sdk.String("Kuvalisworth"),
                                CountryCode: sdk.String("UA"),
                                HashedFirstName: sdk.String("perspiciatis"),
                                HashedLastName: sdk.String("natus"),
                                HashedStreetAddress: sdk.String("reprehenderit"),
                                PostalCode: sdk.String("16870"),
                                State: sdk.String("ad"),
                            },
                            HashedEmail: sdk.String("fugiat"),
                            HashedPhoneNumber: sdk.String("quas"),
                        },
                    },
                    Value: sdk.Float64(3363.14),
                },
            },
            EncryptionInfo: &shared.EncryptionInfo{
                EncryptionEntityID: sdk.String("fuga"),
                EncryptionEntityType: shared.EncryptionInfoEncryptionEntityTypeEnumDfpNetworkCode.ToPointer(),
                EncryptionSource: shared.EncryptionInfoEncryptionSourceEnumEncryptionScopeUnknown.ToPointer(),
                Kind: sdk.String("illum"),
            },
            Kind: sdk.String("delectus"),
        },
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "molestias",
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("magni"),
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
                            Kind: sdk.String("adipisci"),
                            Type: shared.CustomFloodlightVariableTypeEnumU22.ToPointer(),
                            Value: sdk.String("ex"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("quis"),
                            Type: shared.CustomFloodlightVariableTypeEnumU44.ToPointer(),
                            Value: sdk.String("et"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("officiis"),
                            Type: shared.CustomFloodlightVariableTypeEnumU78.ToPointer(),
                            Value: sdk.String("culpa"),
                        },
                        shared.CustomFloodlightVariable{
                            Kind: sdk.String("architecto"),
                            Type: shared.CustomFloodlightVariableTypeEnumU44.ToPointer(),
                            Value: sdk.String("eveniet"),
                        },
                    },
                    Dclid: sdk.String("doloribus"),
                    EncryptedUserID: sdk.String("praesentium"),
                    EncryptedUserIDCandidates: []string{
                        "tempora",
                        "ad",
                        "ab",
                    },
                    FloodlightActivityID: sdk.String("harum"),
                    FloodlightConfigurationID: sdk.String("facere"),
                    Gclid: sdk.String("ducimus"),
                    ImpressionID: sdk.String("nisi"),
                    Kind: sdk.String("accusamus"),
                    LimitAdTracking: sdk.Bool(false),
                    MatchID: sdk.String("officiis"),
                    MobileDeviceID: sdk.String("necessitatibus"),
                    NonPersonalizedAd: sdk.Bool(false),
                    Ordinal: sdk.String("nam"),
                    Quantity: sdk.String("nemo"),
                    TimestampMicros: sdk.String("veritatis"),
                    TreatmentForUnderage: sdk.Bool(false),
                    UserIdentifiers: []shared.UserIdentifier{
                        shared.UserIdentifier{
                            AddressInfo: &shared.OfflineUserAddressInfo{
                                City: sdk.String("Gleasonfield"),
                                CountryCode: sdk.String("MX"),
                                HashedFirstName: sdk.String("architecto"),
                                HashedLastName: sdk.String("asperiores"),
                                HashedStreetAddress: sdk.String("est"),
                                PostalCode: sdk.String("23301-9038"),
                                State: sdk.String("dolore"),
                            },
                            HashedEmail: sdk.String("itaque"),
                            HashedPhoneNumber: sdk.String("enim"),
                        },
                        shared.UserIdentifier{
                            AddressInfo: &shared.OfflineUserAddressInfo{
                                City: sdk.String("Kuhnville"),
                                CountryCode: sdk.String("VG"),
                                HashedFirstName: sdk.String("alias"),
                                HashedLastName: sdk.String("doloribus"),
                                HashedStreetAddress: sdk.String("nemo"),
                                PostalCode: sdk.String("53456"),
                                State: sdk.String("consequatur"),
                            },
                            HashedEmail: sdk.String("incidunt"),
                            HashedPhoneNumber: sdk.String("dolores"),
                        },
                        shared.UserIdentifier{
                            AddressInfo: &shared.OfflineUserAddressInfo{
                                City: sdk.String("Fort Ada"),
                                CountryCode: sdk.String("AO"),
                                HashedFirstName: sdk.String("officia"),
                                HashedLastName: sdk.String("architecto"),
                                HashedStreetAddress: sdk.String("quibusdam"),
                                PostalCode: sdk.String("97521"),
                                State: sdk.String("aliquam"),
                            },
                            HashedEmail: sdk.String("ea"),
                            HashedPhoneNumber: sdk.String("aliquam"),
                        },
                    },
                    Value: sdk.Float64(3576.84),
                },
            },
            EncryptionInfo: &shared.EncryptionInfo{
                EncryptionEntityID: sdk.String("at"),
                EncryptionEntityType: shared.EncryptionInfoEncryptionEntityTypeEnumEncryptionEntityTypeUnknown.ToPointer(),
                EncryptionSource: shared.EncryptionInfoEncryptionSourceEnumEncryptionScopeUnknown.ToPointer(),
                Kind: sdk.String("aut"),
            },
            Kind: sdk.String("molestias"),
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("libero"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "cumque",
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("a"),
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
