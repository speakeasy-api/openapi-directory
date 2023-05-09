# DomesticPayments

### Available Operations

* [CreateDomesticPaymentConsentsJSON](#createdomesticpaymentconsentsjson) - Create Domestic Payment Consents
* [CreateDomesticPaymentConsentsRaw](#createdomesticpaymentconsentsraw) - Create Domestic Payment Consents
* [CreateDomesticPaymentsJSON](#createdomesticpaymentsjson) - Create Domestic Payments
* [CreateDomesticPaymentsRaw](#createdomesticpaymentsraw) - Create Domestic Payments
* [GetDomesticPaymentConsentsConsentID](#getdomesticpaymentconsentsconsentid) - Get Domestic Payment Consents
* [GetDomesticPaymentConsentsConsentIDFundsConfirmation](#getdomesticpaymentconsentsconsentidfundsconfirmation) - Get Domestic Payment Consents Funds Confirmation
* [GetDomesticPaymentsDomesticPaymentID](#getdomesticpaymentsdomesticpaymentid) - Get Domestic Payments

## CreateDomesticPaymentConsentsJSON

Create Domestic Payment Consents

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
    res, err := s.DomesticPayments.CreateDomesticPaymentConsentsJSON(ctx, operations.CreateDomesticPaymentConsentsJSONRequest{
        Authorization: "quidem",
        OBWriteDomesticConsent4: shared.OBWriteDomesticConsent4{
            Data: shared.OBWriteDomesticConsent4Data{
                Authorisation: &shared.OBWriteDomesticConsent4DataAuthorisation{
                    AuthorisationType: shared.OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnumAny,
                    CompletionDateTime: types.MustTimeFromString("2022-01-12T00:28:21.182Z"),
                },
                Initiation: shared.OBWriteDomesticConsent4DataInitiation{
                    CreditorAccount: shared.OBWriteDomesticConsent4DataInitiationCreditorAccount{
                        Identification: "est",
                        Name: "Cameron Dach",
                        SchemeName: "explicabo",
                        SecondaryIdentification: sdk.String("nobis"),
                    },
                    CreditorPostalAddress: &shared.OBPostalAddress6{
                        AddressLine: []string{
                            "omnis",
                            "nemo",
                        },
                        AddressType: shared.OBAddressTypeCodeEnumDeliveryTo.ToPointer(),
                        BuildingNumber: sdk.String("excepturi"),
                        Country: sdk.String("Argentina"),
                        CountrySubDivision: sdk.String("iure"),
                        Department: sdk.String("culpa"),
                        PostCode: sdk.String("91626-1965"),
                        StreetName: sdk.String("numquam"),
                        SubDepartment: sdk.String("commodi"),
                        TownName: sdk.String("quam"),
                    },
                    DebtorAccount: &shared.OBWriteDomesticConsent4DataInitiationDebtorAccount{
                        Identification: "molestiae",
                        Name: sdk.String("Sabrina Cronin MD"),
                        SchemeName: "animi",
                        SecondaryIdentification: sdk.String("enim"),
                    },
                    EndToEndIdentification: "odit",
                    InstructedAmount: shared.OBWriteDomesticConsent4DataInitiationInstructedAmount{
                        Amount: "quo",
                        Currency: "sequi",
                    },
                    InstructionIdentification: "tenetur",
                    LocalInstrument: sdk.String("ipsam"),
                    RemittanceInformation: &shared.OBWriteDomesticConsent4DataInitiationRemittanceInformation{
                        Reference: sdk.String("id"),
                        Unstructured: sdk.String("possimus"),
                    },
                    SupplementaryData: map[string]interface{}{
                        "quasi": "error",
                    },
                },
                ReadRefundAccount: shared.OBWriteDomesticConsent4DataReadRefundAccountEnumYes.ToPointer(),
                SCASupportData: &shared.OBSCASupportData1{
                    AppliedAuthenticationApproach: shared.OBSCASupportData1AppliedAuthenticationApproachEnumSca.ToPointer(),
                    ReferencePaymentOrderID: sdk.String("quasi"),
                    RequestedSCAExemptionType: shared.OBSCASupportData1RequestedSCAExemptionTypeEnumPartyToParty.ToPointer(),
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "vero",
                        "nihil",
                        "praesentium",
                        "voluptatibus",
                    },
                    BuildingNumber: sdk.String("ipsa"),
                    Country: "Mozambique",
                    CountrySubDivision: sdk.String("voluptate"),
                    PostCode: sdk.String("00429-1324"),
                    StreetName: sdk.String("dicta"),
                    TownName: "harum",
                },
                MerchantCategoryCode: sdk.String("enim"),
                MerchantCustomerIdentification: sdk.String("accusamus"),
                PaymentContextCode: shared.OBRisk1PaymentContextCodeEnumEcommerceServices.ToPointer(),
            },
        },
        XCustomerUserAgent: sdk.String("repudiandae"),
        XFapiAuthDate: sdk.String("quae"),
        XFapiCustomerIPAddress: sdk.String("ipsum"),
        XFapiInteractionID: sdk.String("quidem"),
        XIdempotencyKey: "molestias",
        XJwsSignature: "excepturi",
    }, operations.CreateDomesticPaymentConsentsJSONSecurity{
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

## CreateDomesticPaymentConsentsRaw

Create Domestic Payment Consents

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
    res, err := s.DomesticPayments.CreateDomesticPaymentConsentsRaw(ctx, operations.CreateDomesticPaymentConsentsRawRequest{
        Authorization: "pariatur",
        RequestBody: []byte("modi"),
        XCustomerUserAgent: sdk.String("praesentium"),
        XFapiAuthDate: sdk.String("rem"),
        XFapiCustomerIPAddress: sdk.String("voluptates"),
        XFapiInteractionID: sdk.String("quasi"),
        XIdempotencyKey: "repudiandae",
        XJwsSignature: "sint",
    }, operations.CreateDomesticPaymentConsentsRawSecurity{
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

## CreateDomesticPaymentsJSON

Create Domestic Payments

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
    res, err := s.DomesticPayments.CreateDomesticPaymentsJSON(ctx, operations.CreateDomesticPaymentsJSONRequest{
        Authorization: "veritatis",
        OBWriteDomestic2: shared.OBWriteDomestic2{
            Data: shared.OBWriteDomestic2Data{
                ConsentID: "itaque",
                Initiation: shared.OBWriteDomestic2DataInitiation{
                    CreditorAccount: shared.OBWriteDomestic2DataInitiationCreditorAccount{
                        Identification: "incidunt",
                        Name: "Elizabeth Orn",
                        SchemeName: "deserunt",
                        SecondaryIdentification: sdk.String("distinctio"),
                    },
                    CreditorPostalAddress: &shared.OBPostalAddress6{
                        AddressLine: []string{
                            "labore",
                            "modi",
                            "qui",
                            "aliquid",
                        },
                        AddressType: shared.OBAddressTypeCodeEnumPoBox.ToPointer(),
                        BuildingNumber: sdk.String("quos"),
                        Country: sdk.String("Andorra"),
                        CountrySubDivision: sdk.String("magni"),
                        Department: sdk.String("assumenda"),
                        PostCode: sdk.String("01652"),
                        StreetName: sdk.String("facilis"),
                        SubDepartment: sdk.String("tempore"),
                        TownName: sdk.String("labore"),
                    },
                    DebtorAccount: &shared.OBWriteDomestic2DataInitiationDebtorAccount{
                        Identification: "delectus",
                        Name: sdk.String("Ethel Roob"),
                        SchemeName: "provident",
                        SecondaryIdentification: sdk.String("necessitatibus"),
                    },
                    EndToEndIdentification: "sint",
                    InstructedAmount: shared.OBWriteDomestic2DataInitiationInstructedAmount{
                        Amount: "officia",
                        Currency: "dolor",
                    },
                    InstructionIdentification: "debitis",
                    LocalInstrument: sdk.String("a"),
                    RemittanceInformation: &shared.OBWriteDomestic2DataInitiationRemittanceInformation{
                        Reference: sdk.String("dolorum"),
                        Unstructured: sdk.String("in"),
                    },
                    SupplementaryData: map[string]interface{}{
                        "illum": "maiores",
                        "rerum": "dicta",
                    },
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "cumque",
                        "facere",
                    },
                    BuildingNumber: sdk.String("ea"),
                    Country: "Hungary",
                    CountrySubDivision: sdk.String("laborum"),
                    PostCode: sdk.String("25389-6576"),
                    StreetName: sdk.String("blanditiis"),
                    TownName: "deleniti",
                },
                MerchantCategoryCode: sdk.String("sapiente"),
                MerchantCustomerIdentification: sdk.String("amet"),
                PaymentContextCode: shared.OBRisk1PaymentContextCodeEnumOther.ToPointer(),
            },
        },
        XCustomerUserAgent: sdk.String("nisi"),
        XFapiAuthDate: sdk.String("vel"),
        XFapiCustomerIPAddress: sdk.String("natus"),
        XFapiInteractionID: sdk.String("omnis"),
        XIdempotencyKey: "molestiae",
        XJwsSignature: "perferendis",
    }, operations.CreateDomesticPaymentsJSONSecurity{
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

## CreateDomesticPaymentsRaw

Create Domestic Payments

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
    res, err := s.DomesticPayments.CreateDomesticPaymentsRaw(ctx, operations.CreateDomesticPaymentsRawRequest{
        Authorization: "nihil",
        RequestBody: []byte("magnam"),
        XCustomerUserAgent: sdk.String("distinctio"),
        XFapiAuthDate: sdk.String("id"),
        XFapiCustomerIPAddress: sdk.String("labore"),
        XFapiInteractionID: sdk.String("labore"),
        XIdempotencyKey: "suscipit",
        XJwsSignature: "natus",
    }, operations.CreateDomesticPaymentsRawSecurity{
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

## GetDomesticPaymentConsentsConsentID

Get Domestic Payment Consents

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
    res, err := s.DomesticPayments.GetDomesticPaymentConsentsConsentID(ctx, operations.GetDomesticPaymentConsentsConsentIDRequest{
        Authorization: "nobis",
        ConsentID: "eum",
        XCustomerUserAgent: sdk.String("vero"),
        XFapiAuthDate: sdk.String("aspernatur"),
        XFapiCustomerIPAddress: sdk.String("architecto"),
        XFapiInteractionID: sdk.String("magnam"),
    }, operations.GetDomesticPaymentConsentsConsentIDSecurity{
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

## GetDomesticPaymentConsentsConsentIDFundsConfirmation

Get Domestic Payment Consents Funds Confirmation

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
    res, err := s.DomesticPayments.GetDomesticPaymentConsentsConsentIDFundsConfirmation(ctx, operations.GetDomesticPaymentConsentsConsentIDFundsConfirmationRequest{
        Authorization: "et",
        ConsentID: "excepturi",
        XCustomerUserAgent: sdk.String("ullam"),
        XFapiAuthDate: sdk.String("provident"),
        XFapiCustomerIPAddress: sdk.String("quos"),
        XFapiInteractionID: sdk.String("sint"),
    }, operations.GetDomesticPaymentConsentsConsentIDFundsConfirmationSecurity{
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

## GetDomesticPaymentsDomesticPaymentID

Get Domestic Payments

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
    res, err := s.DomesticPayments.GetDomesticPaymentsDomesticPaymentID(ctx, operations.GetDomesticPaymentsDomesticPaymentIDRequest{
        Authorization: "accusantium",
        DomesticPaymentID: "mollitia",
        XCustomerUserAgent: sdk.String("reiciendis"),
        XFapiAuthDate: sdk.String("mollitia"),
        XFapiCustomerIPAddress: sdk.String("ad"),
        XFapiInteractionID: sdk.String("eum"),
    }, operations.GetDomesticPaymentsDomesticPaymentIDSecurity{
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
