# InternationalPayments

### Available Operations

* [CreateInternationalPaymentConsentsJSON](#createinternationalpaymentconsentsjson) - Create International Payment Consents
* [CreateInternationalPaymentConsentsRaw](#createinternationalpaymentconsentsraw) - Create International Payment Consents
* [CreateInternationalPaymentsJSON](#createinternationalpaymentsjson) - Create International Payments
* [CreateInternationalPaymentsRaw](#createinternationalpaymentsraw) - Create International Payments
* [GetInternationalPaymentConsentsConsentID](#getinternationalpaymentconsentsconsentid) - Get International Payment Consents
* [GetInternationalPaymentConsentsConsentIDFundsConfirmation](#getinternationalpaymentconsentsconsentidfundsconfirmation) - Get International Payment Consents Funds Confirmation
* [GetInternationalPaymentsInternationalPaymentID](#getinternationalpaymentsinternationalpaymentid) - Get International Payments

## CreateInternationalPaymentConsentsJSON

Create International Payment Consents

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
    res, err := s.InternationalPayments.CreateInternationalPaymentConsentsJSON(ctx, operations.CreateInternationalPaymentConsentsJSONRequest{
        Authorization: "quas",
        OBWriteInternationalConsent5: shared.OBWriteInternationalConsent5{
            Data: shared.OBWriteInternationalConsent5Data{
                Authorisation: &shared.OBWriteInternationalConsent5DataAuthorisation{
                    AuthorisationType: shared.OBWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnumAny,
                    CompletionDateTime: types.MustTimeFromString("2022-01-18T13:34:46.515Z"),
                },
                Initiation: shared.OBWriteInternationalConsent5DataInitiation{
                    ChargeBearer: shared.OBChargeBearerType1CodeEnumFollowingServiceLevel.ToPointer(),
                    Creditor: &shared.OBWriteInternationalConsent5DataInitiationCreditor{
                        Name: sdk.String("Jody Schuster"),
                        PostalAddress: &shared.OBPostalAddress6{
                            AddressLine: []string{
                                "facere",
                                "veritatis",
                                "consequuntur",
                                "quasi",
                            },
                            AddressType: shared.OBAddressTypeCodeEnumPostal.ToPointer(),
                            BuildingNumber: sdk.String("culpa"),
                            Country: sdk.String("Iceland"),
                            CountrySubDivision: sdk.String("tenetur"),
                            Department: sdk.String("quae"),
                            PostCode: sdk.String("44278-7039"),
                            StreetName: sdk.String("dicta"),
                            SubDepartment: sdk.String("ullam"),
                            TownName: sdk.String("reprehenderit"),
                        },
                    },
                    CreditorAccount: shared.OBWriteInternationalConsent5DataInitiationCreditorAccount{
                        Identification: "ullam",
                        Name: "Margaret Lemke",
                        SchemeName: "ex",
                        SecondaryIdentification: sdk.String("deleniti"),
                    },
                    CreditorAgent: &shared.OBWriteInternationalConsent5DataInitiationCreditorAgent{
                        Identification: sdk.String("itaque"),
                        Name: sdk.String("Roger Monahan PhD"),
                        PostalAddress: &shared.OBPostalAddress6{
                            AddressLine: []string{
                                "voluptate",
                            },
                            AddressType: shared.OBAddressTypeCodeEnumBusiness.ToPointer(),
                            BuildingNumber: sdk.String("minima"),
                            Country: sdk.String("Belize"),
                            CountrySubDivision: sdk.String("consectetur"),
                            Department: sdk.String("adipisci"),
                            PostCode: sdk.String("80505-4605"),
                            StreetName: sdk.String("non"),
                            SubDepartment: sdk.String("voluptatem"),
                            TownName: sdk.String("dolor"),
                        },
                        SchemeName: sdk.String("occaecati"),
                    },
                    CurrencyOfTransfer: "numquam",
                    DebtorAccount: &shared.OBWriteInternationalConsent5DataInitiationDebtorAccount{
                        Identification: "impedit",
                        Name: sdk.String("Loretta Anderson DVM"),
                        SchemeName: "natus",
                        SecondaryIdentification: sdk.String("velit"),
                    },
                    DestinationCountryCode: sdk.String("voluptatibus"),
                    EndToEndIdentification: "voluptas",
                    ExchangeRateInformation: &shared.OBWriteInternationalConsent5DataInitiationExchangeRateInformation{
                        ContractIdentification: sdk.String("asperiores"),
                        ExchangeRate: sdk.Float64(456.59),
                        RateType: shared.OBWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnumAgreed,
                        UnitCurrency: "quaerat",
                    },
                    ExtendedPurpose: sdk.String("consequuntur"),
                    InstructedAmount: shared.OBWriteInternationalConsent5DataInitiationInstructedAmount{
                        Amount: "repellendus",
                        Currency: "officia",
                    },
                    InstructionIdentification: "maxime",
                    InstructionPriority: shared.OBWriteInternationalConsent5DataInitiationInstructionPriorityEnumNormal.ToPointer(),
                    LocalInstrument: sdk.String("officia"),
                    Purpose: sdk.String("asperiores"),
                    RemittanceInformation: &shared.OBWriteInternationalConsent5DataInitiationRemittanceInformation{
                        Reference: sdk.String("nemo"),
                        Unstructured: sdk.String("quae"),
                    },
                    SupplementaryData: map[string]interface{}{
                        "porro": "quod",
                        "labore": "ab",
                    },
                },
                ReadRefundAccount: shared.OBWriteInternationalConsent5DataReadRefundAccountEnumNo.ToPointer(),
                SCASupportData: &shared.OBSCASupportData1{
                    AppliedAuthenticationApproach: shared.OBSCASupportData1AppliedAuthenticationApproachEnumSca.ToPointer(),
                    ReferencePaymentOrderID: sdk.String("id"),
                    RequestedSCAExemptionType: shared.OBSCASupportData1RequestedSCAExemptionTypeEnumEcommerceGoods.ToPointer(),
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "culpa",
                    },
                    BuildingNumber: sdk.String("est"),
                    Country: "Uganda",
                    CountrySubDivision: sdk.String("totam"),
                    PostCode: sdk.String("44542-8774"),
                    StreetName: sdk.String("in"),
                    TownName: "corporis",
                },
                MerchantCategoryCode: sdk.String("reiciendis"),
                MerchantCustomerIdentification: sdk.String("assumenda"),
                PaymentContextCode: shared.OBRisk1PaymentContextCodeEnumEcommerceGoods.ToPointer(),
            },
        },
        XCustomerUserAgent: sdk.String("recusandae"),
        XFapiAuthDate: sdk.String("aliquid"),
        XFapiCustomerIPAddress: sdk.String("aperiam"),
        XFapiInteractionID: sdk.String("cum"),
        XIdempotencyKey: "consectetur",
        XJwsSignature: "in",
    }, operations.CreateInternationalPaymentConsentsJSONSecurity{
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

## CreateInternationalPaymentConsentsRaw

Create International Payment Consents

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
    res, err := s.InternationalPayments.CreateInternationalPaymentConsentsRaw(ctx, operations.CreateInternationalPaymentConsentsRawRequest{
        Authorization: "exercitationem",
        RequestBody: []byte("earum"),
        XCustomerUserAgent: sdk.String("facere"),
        XFapiAuthDate: sdk.String("numquam"),
        XFapiCustomerIPAddress: sdk.String("doloribus"),
        XFapiInteractionID: sdk.String("suscipit"),
        XIdempotencyKey: "reiciendis",
        XJwsSignature: "quidem",
    }, operations.CreateInternationalPaymentConsentsRawSecurity{
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

## CreateInternationalPaymentsJSON

Create International Payments

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
    res, err := s.InternationalPayments.CreateInternationalPaymentsJSON(ctx, operations.CreateInternationalPaymentsJSONRequest{
        Authorization: "saepe",
        OBWriteInternational3: shared.OBWriteInternational3{
            Data: shared.OBWriteInternational3Data{
                ConsentID: "necessitatibus",
                Initiation: shared.OBWriteInternational3DataInitiation{
                    ChargeBearer: shared.OBChargeBearerType1CodeEnumBorneByDebtor.ToPointer(),
                    Creditor: &shared.OBWriteInternational3DataInitiationCreditor{
                        Name: sdk.String("Ollie Flatley"),
                        PostalAddress: &shared.OBPostalAddress6{
                            AddressLine: []string{
                                "dignissimos",
                            },
                            AddressType: shared.OBAddressTypeCodeEnumStatement.ToPointer(),
                            BuildingNumber: sdk.String("debitis"),
                            Country: sdk.String("Denmark"),
                            CountrySubDivision: sdk.String("corporis"),
                            Department: sdk.String("harum"),
                            PostCode: sdk.String("09718"),
                            StreetName: sdk.String("similique"),
                            SubDepartment: sdk.String("tempora"),
                            TownName: sdk.String("aspernatur"),
                        },
                    },
                    CreditorAccount: shared.OBWriteInternational3DataInitiationCreditorAccount{
                        Identification: "voluptas",
                        Name: "Melanie Hane",
                        SchemeName: "adipisci",
                        SecondaryIdentification: sdk.String("minus"),
                    },
                    CreditorAgent: &shared.OBWriteInternational3DataInitiationCreditorAgent{
                        Identification: sdk.String("dolores"),
                        Name: sdk.String("Harvey Gulgowski"),
                        PostalAddress: &shared.OBPostalAddress6{
                            AddressLine: []string{
                                "ullam",
                                "adipisci",
                                "cum",
                                "blanditiis",
                            },
                            AddressType: shared.OBAddressTypeCodeEnumPoBox.ToPointer(),
                            BuildingNumber: sdk.String("hic"),
                            Country: sdk.String("Cook Islands"),
                            CountrySubDivision: sdk.String("culpa"),
                            Department: sdk.String("corrupti"),
                            PostCode: sdk.String("59370-6191"),
                            StreetName: sdk.String("asperiores"),
                            SubDepartment: sdk.String("facilis"),
                            TownName: sdk.String("voluptate"),
                        },
                        SchemeName: sdk.String("expedita"),
                    },
                    CurrencyOfTransfer: "ab",
                    DebtorAccount: &shared.OBWriteInternational3DataInitiationDebtorAccount{
                        Identification: "iste",
                        Name: sdk.String("Janie Cremin"),
                        SchemeName: "quidem",
                        SecondaryIdentification: sdk.String("explicabo"),
                    },
                    DestinationCountryCode: sdk.String("voluptas"),
                    EndToEndIdentification: "unde",
                    ExchangeRateInformation: &shared.OBWriteInternational3DataInitiationExchangeRateInformation{
                        ContractIdentification: sdk.String("architecto"),
                        ExchangeRate: sdk.Float64(3828.08),
                        RateType: shared.OBWriteInternational3DataInitiationExchangeRateInformationRateTypeEnumIndicative,
                        UnitCurrency: "debitis",
                    },
                    ExtendedPurpose: sdk.String("illo"),
                    InstructedAmount: shared.OBWriteInternational3DataInitiationInstructedAmount{
                        Amount: "reiciendis",
                        Currency: "perferendis",
                    },
                    InstructionIdentification: "corrupti",
                    InstructionPriority: shared.OBWriteInternational3DataInitiationInstructionPriorityEnumUrgent.ToPointer(),
                    LocalInstrument: sdk.String("incidunt"),
                    Purpose: sdk.String("sed"),
                    RemittanceInformation: &shared.OBWriteInternational3DataInitiationRemittanceInformation{
                        Reference: sdk.String("provident"),
                        Unstructured: sdk.String("eius"),
                    },
                    SupplementaryData: map[string]interface{}{
                        "ipsum": "ea",
                        "occaecati": "quos",
                        "voluptatibus": "tempora",
                        "tempora": "voluptate",
                    },
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "ex",
                        "sit",
                        "non",
                        "officiis",
                    },
                    BuildingNumber: sdk.String("praesentium"),
                    Country: "Pitcairn Islands",
                    CountrySubDivision: sdk.String("quaerat"),
                    PostCode: sdk.String("38507"),
                    StreetName: sdk.String("error"),
                    TownName: "veniam",
                },
                MerchantCategoryCode: sdk.String("minima"),
                MerchantCustomerIdentification: sdk.String("recusandae"),
                PaymentContextCode: shared.OBRisk1PaymentContextCodeEnumPartyToParty.ToPointer(),
            },
        },
        XCustomerUserAgent: sdk.String("nulla"),
        XFapiAuthDate: sdk.String("magni"),
        XFapiCustomerIPAddress: sdk.String("aperiam"),
        XFapiInteractionID: sdk.String("saepe"),
        XIdempotencyKey: "numquam",
        XJwsSignature: "veniam",
    }, operations.CreateInternationalPaymentsJSONSecurity{
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

## CreateInternationalPaymentsRaw

Create International Payments

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
    res, err := s.InternationalPayments.CreateInternationalPaymentsRaw(ctx, operations.CreateInternationalPaymentsRawRequest{
        Authorization: "in",
        RequestBody: []byte("officiis"),
        XCustomerUserAgent: sdk.String("beatae"),
        XFapiAuthDate: sdk.String("laudantium"),
        XFapiCustomerIPAddress: sdk.String("exercitationem"),
        XFapiInteractionID: sdk.String("praesentium"),
        XIdempotencyKey: "cum",
        XJwsSignature: "laboriosam",
    }, operations.CreateInternationalPaymentsRawSecurity{
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

## GetInternationalPaymentConsentsConsentID

Get International Payment Consents

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
    res, err := s.InternationalPayments.GetInternationalPaymentConsentsConsentID(ctx, operations.GetInternationalPaymentConsentsConsentIDRequest{
        Authorization: "dolorum",
        ConsentID: "voluptatum",
        XCustomerUserAgent: sdk.String("error"),
        XFapiAuthDate: sdk.String("hic"),
        XFapiCustomerIPAddress: sdk.String("expedita"),
        XFapiInteractionID: sdk.String("debitis"),
    }, operations.GetInternationalPaymentConsentsConsentIDSecurity{
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

## GetInternationalPaymentConsentsConsentIDFundsConfirmation

Get International Payment Consents Funds Confirmation

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
    res, err := s.InternationalPayments.GetInternationalPaymentConsentsConsentIDFundsConfirmation(ctx, operations.GetInternationalPaymentConsentsConsentIDFundsConfirmationRequest{
        Authorization: "neque",
        ConsentID: "dolorum",
        XCustomerUserAgent: sdk.String("nostrum"),
        XFapiAuthDate: sdk.String("officia"),
        XFapiCustomerIPAddress: sdk.String("dolorum"),
        XFapiInteractionID: sdk.String("corrupti"),
    }, operations.GetInternationalPaymentConsentsConsentIDFundsConfirmationSecurity{
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

## GetInternationalPaymentsInternationalPaymentID

Get International Payments

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
    res, err := s.InternationalPayments.GetInternationalPaymentsInternationalPaymentID(ctx, operations.GetInternationalPaymentsInternationalPaymentIDRequest{
        Authorization: "accusamus",
        InternationalPaymentID: "tempora",
        XCustomerUserAgent: sdk.String("atque"),
        XFapiAuthDate: sdk.String("fugit"),
        XFapiCustomerIPAddress: sdk.String("ut"),
        XFapiInteractionID: sdk.String("fugiat"),
    }, operations.GetInternationalPaymentsInternationalPaymentIDSecurity{
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
