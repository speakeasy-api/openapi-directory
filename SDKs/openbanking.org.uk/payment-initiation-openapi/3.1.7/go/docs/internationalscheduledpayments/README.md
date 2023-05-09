# InternationalScheduledPayments

### Available Operations

* [CreateInternationalScheduledPaymentConsentsJSON](#createinternationalscheduledpaymentconsentsjson) - Create International Scheduled Payment Consents
* [CreateInternationalScheduledPaymentConsentsRaw](#createinternationalscheduledpaymentconsentsraw) - Create International Scheduled Payment Consents
* [CreateInternationalScheduledPaymentsJSON](#createinternationalscheduledpaymentsjson) - Create International Scheduled Payments
* [CreateInternationalScheduledPaymentsRaw](#createinternationalscheduledpaymentsraw) - Create International Scheduled Payments
* [GetInternationalScheduledPaymentConsentsConsentID](#getinternationalscheduledpaymentconsentsconsentid) - Get International Scheduled Payment Consents
* [GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmation](#getinternationalscheduledpaymentconsentsconsentidfundsconfirmation) - Get International Scheduled Payment Consents Funds Confirmation
* [GetInternationalScheduledPaymentsInternationalScheduledPaymentID](#getinternationalscheduledpaymentsinternationalscheduledpaymentid) - Get International Scheduled Payments

## CreateInternationalScheduledPaymentConsentsJSON

Create International Scheduled Payment Consents

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
    res, err := s.InternationalScheduledPayments.CreateInternationalScheduledPaymentConsentsJSON(ctx, operations.CreateInternationalScheduledPaymentConsentsJSONRequest{
        Authorization: "voluptatem",
        OBWriteInternationalScheduledConsent5: shared.OBWriteInternationalScheduledConsent5{
            Data: shared.OBWriteInternationalScheduledConsent5Data{
                Authorisation: &shared.OBWriteInternationalScheduledConsent5DataAuthorisation{
                    AuthorisationType: shared.OBWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnumSingle,
                    CompletionDateTime: types.MustTimeFromString("2022-05-27T06:14:44.746Z"),
                },
                Initiation: shared.OBWriteInternationalScheduledConsent5DataInitiation{
                    ChargeBearer: shared.OBChargeBearerType1CodeEnumBorneByCreditor.ToPointer(),
                    Creditor: &shared.OBWriteInternationalScheduledConsent5DataInitiationCreditor{
                        Name: sdk.String("Brittany Bailey"),
                        PostalAddress: &shared.OBPostalAddress6{
                            AddressLine: []string{
                                "corporis",
                                "et",
                                "blanditiis",
                                "ex",
                            },
                            AddressType: shared.OBAddressTypeCodeEnumCorrespondence.ToPointer(),
                            BuildingNumber: sdk.String("sit"),
                            Country: sdk.String("Isle of Man"),
                            CountrySubDivision: sdk.String("nostrum"),
                            Department: sdk.String("saepe"),
                            PostCode: sdk.String("02926-1052"),
                            StreetName: sdk.String("quidem"),
                            SubDepartment: sdk.String("atque"),
                            TownName: sdk.String("laborum"),
                        },
                    },
                    CreditorAccount: shared.OBWriteInternationalScheduledConsent5DataInitiationCreditorAccount{
                        Identification: "nam",
                        Name: "Brent Abernathy",
                        SchemeName: "voluptate",
                        SecondaryIdentification: sdk.String("unde"),
                    },
                    CreditorAgent: &shared.OBWriteInternationalScheduledConsent5DataInitiationCreditorAgent{
                        Identification: sdk.String("reiciendis"),
                        Name: sdk.String("Marcos Windler MD"),
                        PostalAddress: &shared.OBPostalAddress6{
                            AddressLine: []string{
                                "reprehenderit",
                                "facere",
                                "fuga",
                            },
                            AddressType: shared.OBAddressTypeCodeEnumPoBox.ToPointer(),
                            BuildingNumber: sdk.String("mollitia"),
                            Country: sdk.String("Greece"),
                            CountrySubDivision: sdk.String("voluptatem"),
                            Department: sdk.String("quisquam"),
                            PostCode: sdk.String("05495-3680"),
                            StreetName: sdk.String("esse"),
                            SubDepartment: sdk.String("amet"),
                            TownName: sdk.String("assumenda"),
                        },
                        SchemeName: sdk.String("ea"),
                    },
                    CurrencyOfTransfer: "atque",
                    DebtorAccount: &shared.OBWriteInternationalScheduledConsent5DataInitiationDebtorAccount{
                        Identification: "error",
                        Name: sdk.String("Frankie Thompson"),
                        SchemeName: "aspernatur",
                        SecondaryIdentification: sdk.String("ex"),
                    },
                    DestinationCountryCode: sdk.String("maiores"),
                    EndToEndIdentification: sdk.String("corrupti"),
                    ExchangeRateInformation: &shared.OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation{
                        ContractIdentification: sdk.String("at"),
                        ExchangeRate: sdk.Float64(6216.93),
                        RateType: shared.OBWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnumAgreed,
                        UnitCurrency: "suscipit",
                    },
                    ExtendedPurpose: sdk.String("repudiandae"),
                    InstructedAmount: shared.OBWriteInternationalScheduledConsent5DataInitiationInstructedAmount{
                        Amount: "atque",
                        Currency: "atque",
                    },
                    InstructionIdentification: "sunt",
                    InstructionPriority: shared.OBWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnumUrgent.ToPointer(),
                    LocalInstrument: sdk.String("dolorum"),
                    Purpose: sdk.String("repellendus"),
                    RemittanceInformation: &shared.OBWriteInternationalScheduledConsent5DataInitiationRemittanceInformation{
                        Reference: sdk.String("labore"),
                        Unstructured: sdk.String("reiciendis"),
                    },
                    RequestedExecutionDateTime: types.MustTimeFromString("2022-01-30T06:42:09.189Z"),
                    SupplementaryData: map[string]interface{}{
                        "accusantium": "beatae",
                    },
                },
                Permission: shared.OBWriteInternationalScheduledConsent5DataPermissionEnumCreate,
                ReadRefundAccount: shared.OBWriteInternationalScheduledConsent5DataReadRefundAccountEnumNo.ToPointer(),
                SCASupportData: &shared.OBSCASupportData1{
                    AppliedAuthenticationApproach: shared.OBSCASupportData1AppliedAuthenticationApproachEnumCa.ToPointer(),
                    ReferencePaymentOrderID: sdk.String("laboriosam"),
                    RequestedSCAExemptionType: shared.OBSCASupportData1RequestedSCAExemptionTypeEnumContactlessTravel.ToPointer(),
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "molestias",
                        "magnam",
                        "saepe",
                        "consequuntur",
                    },
                    BuildingNumber: sdk.String("occaecati"),
                    Country: "Timor-Leste",
                    CountrySubDivision: sdk.String("perspiciatis"),
                    PostCode: sdk.String("29511"),
                    StreetName: sdk.String("id"),
                    TownName: "quis",
                },
                MerchantCategoryCode: sdk.String("reprehenderit"),
                MerchantCustomerIdentification: sdk.String("error"),
                PaymentContextCode: shared.OBRisk1PaymentContextCodeEnumBillPayment.ToPointer(),
            },
        },
        XCustomerUserAgent: sdk.String("corporis"),
        XFapiAuthDate: sdk.String("quidem"),
        XFapiCustomerIPAddress: sdk.String("eveniet"),
        XFapiInteractionID: sdk.String("non"),
        XIdempotencyKey: "vero",
        XJwsSignature: "doloremque",
    }, operations.CreateInternationalScheduledPaymentConsentsJSONSecurity{
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

## CreateInternationalScheduledPaymentConsentsRaw

Create International Scheduled Payment Consents

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
    res, err := s.InternationalScheduledPayments.CreateInternationalScheduledPaymentConsentsRaw(ctx, operations.CreateInternationalScheduledPaymentConsentsRawRequest{
        Authorization: "iure",
        RequestBody: []byte("ipsa"),
        XCustomerUserAgent: sdk.String("totam"),
        XFapiAuthDate: sdk.String("quae"),
        XFapiCustomerIPAddress: sdk.String("molestiae"),
        XFapiInteractionID: sdk.String("eveniet"),
        XIdempotencyKey: "qui",
        XJwsSignature: "cum",
    }, operations.CreateInternationalScheduledPaymentConsentsRawSecurity{
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

## CreateInternationalScheduledPaymentsJSON

Create International Scheduled Payments

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
    res, err := s.InternationalScheduledPayments.CreateInternationalScheduledPaymentsJSON(ctx, operations.CreateInternationalScheduledPaymentsJSONRequest{
        Authorization: "iure",
        OBWriteInternationalScheduled3: shared.OBWriteInternationalScheduled3{
            Data: shared.OBWriteInternationalScheduled3Data{
                ConsentID: "necessitatibus",
                Initiation: shared.OBWriteInternationalScheduled3DataInitiation{
                    ChargeBearer: shared.OBChargeBearerType1CodeEnumBorneByCreditor.ToPointer(),
                    Creditor: &shared.OBWriteInternationalScheduled3DataInitiationCreditor{
                        Name: sdk.String("Kelvin Lehner"),
                        PostalAddress: &shared.OBPostalAddress6{
                            AddressLine: []string{
                                "repellat",
                                "alias",
                            },
                            AddressType: shared.OBAddressTypeCodeEnumDeliveryTo.ToPointer(),
                            BuildingNumber: sdk.String("perspiciatis"),
                            Country: sdk.String("Republic of Korea"),
                            CountrySubDivision: sdk.String("mollitia"),
                            Department: sdk.String("voluptas"),
                            PostCode: sdk.String("99163"),
                            StreetName: sdk.String("dolore"),
                            SubDepartment: sdk.String("dolorum"),
                            TownName: sdk.String("nesciunt"),
                        },
                    },
                    CreditorAccount: shared.OBWriteInternationalScheduled3DataInitiationCreditorAccount{
                        Identification: "quae",
                        Name: "Arturo Hagenes",
                        SchemeName: "ut",
                        SecondaryIdentification: sdk.String("culpa"),
                    },
                    CreditorAgent: &shared.OBWriteInternationalScheduled3DataInitiationCreditorAgent{
                        Identification: sdk.String("adipisci"),
                        Name: sdk.String("Armando Kemmer"),
                        PostalAddress: &shared.OBPostalAddress6{
                            AddressLine: []string{
                                "provident",
                                "quis",
                            },
                            AddressType: shared.OBAddressTypeCodeEnumMailTo.ToPointer(),
                            BuildingNumber: sdk.String("reiciendis"),
                            Country: sdk.String("Montenegro"),
                            CountrySubDivision: sdk.String("aspernatur"),
                            Department: sdk.String("ullam"),
                            PostCode: sdk.String("63658"),
                            StreetName: sdk.String("animi"),
                            SubDepartment: sdk.String("ex"),
                            TownName: sdk.String("aliquid"),
                        },
                        SchemeName: sdk.String("accusantium"),
                    },
                    CurrencyOfTransfer: "repellat",
                    DebtorAccount: &shared.OBWriteInternationalScheduled3DataInitiationDebtorAccount{
                        Identification: "doloribus",
                        Name: sdk.String("Arlene Reichert"),
                        SchemeName: "laborum",
                        SecondaryIdentification: sdk.String("placeat"),
                    },
                    DestinationCountryCode: sdk.String("modi"),
                    EndToEndIdentification: sdk.String("voluptatibus"),
                    ExchangeRateInformation: &shared.OBWriteInternationalScheduled3DataInitiationExchangeRateInformation{
                        ContractIdentification: sdk.String("molestias"),
                        ExchangeRate: sdk.Float64(8897.94),
                        RateType: shared.OBWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnumIndicative,
                        UnitCurrency: "cumque",
                    },
                    ExtendedPurpose: sdk.String("vitae"),
                    InstructedAmount: shared.OBWriteInternationalScheduled3DataInitiationInstructedAmount{
                        Amount: "rerum",
                        Currency: "tempora",
                    },
                    InstructionIdentification: "quis",
                    InstructionPriority: shared.OBWriteInternationalScheduled3DataInitiationInstructionPriorityEnumNormal.ToPointer(),
                    LocalInstrument: sdk.String("fugit"),
                    Purpose: sdk.String("cumque"),
                    RemittanceInformation: &shared.OBWriteInternationalScheduled3DataInitiationRemittanceInformation{
                        Reference: sdk.String("quae"),
                        Unstructured: sdk.String("perferendis"),
                    },
                    RequestedExecutionDateTime: types.MustTimeFromString("2022-11-11T21:40:40.524Z"),
                    SupplementaryData: map[string]interface{}{
                        "eius": "rem",
                        "at": "impedit",
                    },
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "sapiente",
                    },
                    BuildingNumber: sdk.String("eum"),
                    Country: "Bouvet Island (Bouvetoya)",
                    CountrySubDivision: sdk.String("minima"),
                    PostCode: sdk.String("55979"),
                    StreetName: sdk.String("illum"),
                    TownName: "eaque",
                },
                MerchantCategoryCode: sdk.String("earum"),
                MerchantCustomerIdentification: sdk.String("perspiciatis"),
                PaymentContextCode: shared.OBRisk1PaymentContextCodeEnumPartyToParty.ToPointer(),
            },
        },
        XCustomerUserAgent: sdk.String("debitis"),
        XFapiAuthDate: sdk.String("aliquid"),
        XFapiCustomerIPAddress: sdk.String("porro"),
        XFapiInteractionID: sdk.String("suscipit"),
        XIdempotencyKey: "dolorem",
        XJwsSignature: "fugit",
    }, operations.CreateInternationalScheduledPaymentsJSONSecurity{
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

## CreateInternationalScheduledPaymentsRaw

Create International Scheduled Payments

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
    res, err := s.InternationalScheduledPayments.CreateInternationalScheduledPaymentsRaw(ctx, operations.CreateInternationalScheduledPaymentsRawRequest{
        Authorization: "cumque",
        RequestBody: []byte("fuga"),
        XCustomerUserAgent: sdk.String("ratione"),
        XFapiAuthDate: sdk.String("animi"),
        XFapiCustomerIPAddress: sdk.String("necessitatibus"),
        XFapiInteractionID: sdk.String("nulla"),
        XIdempotencyKey: "consequatur",
        XJwsSignature: "quasi",
    }, operations.CreateInternationalScheduledPaymentsRawSecurity{
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

## GetInternationalScheduledPaymentConsentsConsentID

Get International Scheduled Payment Consents

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
    res, err := s.InternationalScheduledPayments.GetInternationalScheduledPaymentConsentsConsentID(ctx, operations.GetInternationalScheduledPaymentConsentsConsentIDRequest{
        Authorization: "et",
        ConsentID: "ducimus",
        XCustomerUserAgent: sdk.String("natus"),
        XFapiAuthDate: sdk.String("occaecati"),
        XFapiCustomerIPAddress: sdk.String("suscipit"),
        XFapiInteractionID: sdk.String("adipisci"),
    }, operations.GetInternationalScheduledPaymentConsentsConsentIDSecurity{
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

## GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmation

Get International Scheduled Payment Consents Funds Confirmation

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
    res, err := s.InternationalScheduledPayments.GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmation(ctx, operations.GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationRequest{
        Authorization: "quasi",
        ConsentID: "magni",
        XCustomerUserAgent: sdk.String("doloribus"),
        XFapiAuthDate: sdk.String("nulla"),
        XFapiCustomerIPAddress: sdk.String("necessitatibus"),
        XFapiInteractionID: sdk.String("ipsa"),
    }, operations.GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationSecurity{
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

## GetInternationalScheduledPaymentsInternationalScheduledPaymentID

Get International Scheduled Payments

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
    res, err := s.InternationalScheduledPayments.GetInternationalScheduledPaymentsInternationalScheduledPaymentID(ctx, operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDRequest{
        Authorization: "tempora",
        InternationalScheduledPaymentID: "nihil",
        XCustomerUserAgent: sdk.String("molestiae"),
        XFapiAuthDate: sdk.String("dicta"),
        XFapiCustomerIPAddress: sdk.String("iusto"),
        XFapiInteractionID: sdk.String("esse"),
    }, operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDSecurity{
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
