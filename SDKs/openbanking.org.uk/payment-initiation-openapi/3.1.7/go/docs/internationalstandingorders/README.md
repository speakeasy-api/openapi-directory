# InternationalStandingOrders

### Available Operations

* [CreateInternationalStandingOrderConsentsJSON](#createinternationalstandingorderconsentsjson) - Create International Standing Order Consents
* [CreateInternationalStandingOrderConsentsRaw](#createinternationalstandingorderconsentsraw) - Create International Standing Order Consents
* [CreateInternationalStandingOrdersJSON](#createinternationalstandingordersjson) - Create International Standing Orders
* [CreateInternationalStandingOrdersRaw](#createinternationalstandingordersraw) - Create International Standing Orders
* [GetInternationalStandingOrderConsentsConsentID](#getinternationalstandingorderconsentsconsentid) - Get International Standing Order Consents
* [GetInternationalStandingOrdersInternationalStandingOrderPaymentID](#getinternationalstandingordersinternationalstandingorderpaymentid) - Get International Standing Orders

## CreateInternationalStandingOrderConsentsJSON

Create International Standing Order Consents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InternationalStandingOrders.CreateInternationalStandingOrderConsentsJSON(ctx, operations.CreateInternationalStandingOrderConsentsJSONRequest{
        Authorization: "praesentium",
        OBWriteInternationalStandingOrderConsent6: shared.OBWriteInternationalStandingOrderConsent6{
            Data: shared.OBWriteInternationalStandingOrderConsent6Data{
                Authorisation: &shared.OBWriteInternationalStandingOrderConsent6DataAuthorisation{
                    AuthorisationType: shared.OBWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnumSingle,
                    CompletionDateTime: types.MustTimeFromString("2021-09-24T00:59:48.564Z"),
                },
                Initiation: shared.OBWriteInternationalStandingOrderConsent6DataInitiation{
                    ChargeBearer: shared.OBChargeBearerType1CodeEnumBorneByCreditor.ToPointer(),
                    Creditor: &shared.OBWriteInternationalStandingOrderConsent6DataInitiationCreditor{
                        Name: sdk.String("Brian Carroll"),
                        PostalAddress: &shared.OBPostalAddress6{
                            AddressLine: []string{
                                "ex",
                                "consectetur",
                            },
                            AddressType: shared.OBAddressTypeCodeEnumMailTo.ToPointer(),
                            BuildingNumber: sdk.String("ipsa"),
                            Country: sdk.String("Oman"),
                            CountrySubDivision: sdk.String("sunt"),
                            Department: sdk.String("nostrum"),
                            PostCode: sdk.String("73633-0436"),
                            StreetName: sdk.String("id"),
                            SubDepartment: sdk.String("ab"),
                            TownName: sdk.String("error"),
                        },
                    },
                    CreditorAccount: shared.OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount{
                        Identification: "possimus",
                        Name: "Shaun Osinski",
                        SchemeName: "deleniti",
                        SecondaryIdentification: sdk.String("enim"),
                    },
                    CreditorAgent: &shared.OBWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent{
                        Identification: sdk.String("vitae"),
                        Name: sdk.String("Ruben Ryan"),
                        PostalAddress: &shared.OBPostalAddress6{
                            AddressLine: []string{
                                "expedita",
                                "voluptatem",
                            },
                            AddressType: shared.OBAddressTypeCodeEnumPoBox.ToPointer(),
                            BuildingNumber: sdk.String("cum"),
                            Country: sdk.String("Iceland"),
                            CountrySubDivision: sdk.String("beatae"),
                            Department: sdk.String("voluptatum"),
                            PostCode: sdk.String("07660-9816"),
                            StreetName: sdk.String("pariatur"),
                            SubDepartment: sdk.String("debitis"),
                            TownName: sdk.String("voluptatem"),
                        },
                        SchemeName: sdk.String("alias"),
                    },
                    CurrencyOfTransfer: "deleniti",
                    DebtorAccount: &shared.OBWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount{
                        Identification: "earum",
                        Name: sdk.String("Miranda Ledner"),
                        SchemeName: "asperiores",
                        SecondaryIdentification: sdk.String("ratione"),
                    },
                    DestinationCountryCode: sdk.String("ullam"),
                    ExtendedPurpose: sdk.String("perferendis"),
                    FinalPaymentDateTime: types.MustTimeFromString("2021-06-12T15:01:22.390Z"),
                    FirstPaymentDateTime: types.MustTimeFromString("2020-06-22T03:49:26.507Z"),
                    Frequency: "nam",
                    InstructedAmount: shared.OBWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount{
                        Amount: "ipsam",
                        Currency: "culpa",
                    },
                    NumberOfPayments: sdk.String("dolor"),
                    Purpose: sdk.String("aliquam"),
                    Reference: sdk.String("inventore"),
                    SupplementaryData: map[string]interface{}{
                        "veritatis": "tempora",
                        "dolor": "consequatur",
                        "architecto": "sit",
                    },
                },
                Permission: shared.OBWriteInternationalStandingOrderConsent6DataPermissionEnumCreate,
                ReadRefundAccount: shared.OBWriteInternationalStandingOrderConsent6DataReadRefundAccountEnumNo.ToPointer(),
                SCASupportData: &shared.OBSCASupportData1{
                    AppliedAuthenticationApproach: shared.OBSCASupportData1AppliedAuthenticationApproachEnumCa.ToPointer(),
                    ReferencePaymentOrderID: sdk.String("ab"),
                    RequestedSCAExemptionType: shared.OBSCASupportData1RequestedSCAExemptionTypeEnumEcommerceServices.ToPointer(),
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "dolor",
                    },
                    BuildingNumber: sdk.String("fugiat"),
                    Country: "Guyana",
                    CountrySubDivision: sdk.String("consequuntur"),
                    PostCode: sdk.String("59784"),
                    StreetName: sdk.String("necessitatibus"),
                    TownName: "sed",
                },
                MerchantCategoryCode: sdk.String("veniam"),
                MerchantCustomerIdentification: sdk.String("nesciunt"),
                PaymentContextCode: shared.OBRisk1PaymentContextCodeEnumOther.ToPointer(),
            },
        },
        XCustomerUserAgent: sdk.String("eum"),
        XFapiAuthDate: sdk.String("vel"),
        XFapiCustomerIPAddress: sdk.String("voluptatum"),
        XFapiInteractionID: sdk.String("magnam"),
        XIdempotencyKey: "exercitationem",
        XJwsSignature: "ab",
    }, operations.CreateInternationalStandingOrderConsentsJSONSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateInternationalStandingOrderConsentsRaw

Create International Standing Order Consents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InternationalStandingOrders.CreateInternationalStandingOrderConsentsRaw(ctx, operations.CreateInternationalStandingOrderConsentsRawRequest{
        Authorization: "porro",
        RequestBody: []byte("autem"),
        XCustomerUserAgent: sdk.String("nobis"),
        XFapiAuthDate: sdk.String("laboriosam"),
        XFapiCustomerIPAddress: sdk.String("recusandae"),
        XFapiInteractionID: sdk.String("consequuntur"),
        XIdempotencyKey: "voluptatem",
        XJwsSignature: "exercitationem",
    }, operations.CreateInternationalStandingOrderConsentsRawSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateInternationalStandingOrdersJSON

Create International Standing Orders

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InternationalStandingOrders.CreateInternationalStandingOrdersJSON(ctx, operations.CreateInternationalStandingOrdersJSONRequest{
        Authorization: "necessitatibus",
        OBWriteInternationalStandingOrder4: shared.OBWriteInternationalStandingOrder4{
            Data: shared.OBWriteInternationalStandingOrder4Data{
                ConsentID: "quasi",
                Initiation: shared.OBWriteInternationalStandingOrder4DataInitiation{
                    ChargeBearer: shared.OBChargeBearerType1CodeEnumBorneByDebtor.ToPointer(),
                    Creditor: &shared.OBWriteInternationalStandingOrder4DataInitiationCreditor{
                        Name: sdk.String("Caleb Orn"),
                        PostalAddress: &shared.OBPostalAddress6{
                            AddressLine: []string{
                                "repudiandae",
                                "optio",
                                "occaecati",
                                "nemo",
                            },
                            AddressType: shared.OBAddressTypeCodeEnumMailTo.ToPointer(),
                            BuildingNumber: sdk.String("blanditiis"),
                            Country: sdk.String("Nicaragua"),
                            CountrySubDivision: sdk.String("voluptas"),
                            Department: sdk.String("numquam"),
                            PostCode: sdk.String("52142"),
                            StreetName: sdk.String("fuga"),
                            SubDepartment: sdk.String("laudantium"),
                            TownName: sdk.String("incidunt"),
                        },
                    },
                    CreditorAccount: shared.OBWriteInternationalStandingOrder4DataInitiationCreditorAccount{
                        Identification: "quasi",
                        Name: "Clint Carroll",
                        SchemeName: "consectetur",
                        SecondaryIdentification: sdk.String("aperiam"),
                    },
                    CreditorAgent: &shared.OBWriteInternationalStandingOrder4DataInitiationCreditorAgent{
                        Identification: sdk.String("cupiditate"),
                        Name: sdk.String("Dominic Abernathy"),
                        PostalAddress: &shared.OBPostalAddress6{
                            AddressLine: []string{
                                "iste",
                                "magni",
                                "inventore",
                            },
                            AddressType: shared.OBAddressTypeCodeEnumPostal.ToPointer(),
                            BuildingNumber: sdk.String("accusamus"),
                            Country: sdk.String("Virgin Islands, U.S."),
                            CountrySubDivision: sdk.String("distinctio"),
                            Department: sdk.String("omnis"),
                            PostCode: sdk.String("35838-5494"),
                            StreetName: sdk.String("totam"),
                            SubDepartment: sdk.String("earum"),
                            TownName: sdk.String("modi"),
                        },
                        SchemeName: sdk.String("nam"),
                    },
                    CurrencyOfTransfer: "vero",
                    DebtorAccount: &shared.OBWriteInternationalStandingOrder4DataInitiationDebtorAccount{
                        Identification: "voluptatem",
                        Name: sdk.String("Mrs. Gina Abbott"),
                        SchemeName: "enim",
                        SecondaryIdentification: sdk.String("sint"),
                    },
                    DestinationCountryCode: sdk.String("nulla"),
                    ExtendedPurpose: sdk.String("deserunt"),
                    FinalPaymentDateTime: types.MustTimeFromString("2022-08-20T23:18:24.165Z"),
                    FirstPaymentDateTime: types.MustTimeFromString("2022-05-02T06:49:02.857Z"),
                    Frequency: "quis",
                    InstructedAmount: shared.OBWriteInternationalStandingOrder4DataInitiationInstructedAmount{
                        Amount: "sint",
                        Currency: "accusamus",
                    },
                    NumberOfPayments: sdk.String("impedit"),
                    Purpose: sdk.String("hic"),
                    Reference: sdk.String("necessitatibus"),
                    SupplementaryData: map[string]interface{}{
                        "ex": "voluptas",
                        "debitis": "delectus",
                        "quae": "minus",
                        "fuga": "laborum",
                    },
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "velit",
                    },
                    BuildingNumber: sdk.String("atque"),
                    Country: "Croatia",
                    CountrySubDivision: sdk.String("impedit"),
                    PostCode: sdk.String("79724"),
                    StreetName: sdk.String("voluptate"),
                    TownName: "sequi",
                },
                MerchantCategoryCode: sdk.String("dignissimos"),
                MerchantCustomerIdentification: sdk.String("neque"),
                PaymentContextCode: shared.OBRisk1PaymentContextCodeEnumOther.ToPointer(),
            },
        },
        XCustomerUserAgent: sdk.String("deleniti"),
        XFapiAuthDate: sdk.String("quibusdam"),
        XFapiCustomerIPAddress: sdk.String("iure"),
        XFapiInteractionID: sdk.String("odit"),
        XIdempotencyKey: "voluptatibus",
        XJwsSignature: "vel",
    }, operations.CreateInternationalStandingOrdersJSONSecurity{
        PSUOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateInternationalStandingOrdersRaw

Create International Standing Orders

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InternationalStandingOrders.CreateInternationalStandingOrdersRaw(ctx, operations.CreateInternationalStandingOrdersRawRequest{
        Authorization: "magnam",
        RequestBody: []byte("quibusdam"),
        XCustomerUserAgent: sdk.String("inventore"),
        XFapiAuthDate: sdk.String("facere"),
        XFapiCustomerIPAddress: sdk.String("libero"),
        XFapiInteractionID: sdk.String("architecto"),
        XIdempotencyKey: "voluptatibus",
        XJwsSignature: "quia",
    }, operations.CreateInternationalStandingOrdersRawSecurity{
        PSUOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetInternationalStandingOrderConsentsConsentID

Get International Standing Order Consents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InternationalStandingOrders.GetInternationalStandingOrderConsentsConsentID(ctx, operations.GetInternationalStandingOrderConsentsConsentIDRequest{
        Authorization: "porro",
        ConsentID: "aliquam",
        XCustomerUserAgent: sdk.String("velit"),
        XFapiAuthDate: sdk.String("illo"),
        XFapiCustomerIPAddress: sdk.String("accusantium"),
        XFapiInteractionID: sdk.String("vel"),
    }, operations.GetInternationalStandingOrderConsentsConsentIDSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetInternationalStandingOrdersInternationalStandingOrderPaymentID

Get International Standing Orders

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InternationalStandingOrders.GetInternationalStandingOrdersInternationalStandingOrderPaymentID(ctx, operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDRequest{
        Authorization: "ea",
        InternationalStandingOrderPaymentID: "beatae",
        XCustomerUserAgent: sdk.String("vero"),
        XFapiAuthDate: sdk.String("excepturi"),
        XFapiCustomerIPAddress: sdk.String("eum"),
        XFapiInteractionID: sdk.String("velit"),
    }, operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
