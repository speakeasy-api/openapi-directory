# DomesticScheduledPayments

### Available Operations

* [CreateDomesticScheduledPaymentConsentsJSON](#createdomesticscheduledpaymentconsentsjson) - Create Domestic Scheduled Payment Consents
* [CreateDomesticScheduledPaymentConsentsRaw](#createdomesticscheduledpaymentconsentsraw) - Create Domestic Scheduled Payment Consents
* [CreateDomesticScheduledPaymentsJSON](#createdomesticscheduledpaymentsjson) - Create Domestic Scheduled Payments
* [CreateDomesticScheduledPaymentsRaw](#createdomesticscheduledpaymentsraw) - Create Domestic Scheduled Payments
* [GetDomesticScheduledPaymentConsentsConsentID](#getdomesticscheduledpaymentconsentsconsentid) - Get Domestic Scheduled Payment Consents
* [GetDomesticScheduledPaymentsDomesticScheduledPaymentID](#getdomesticscheduledpaymentsdomesticscheduledpaymentid) - Get Domestic Scheduled Payments

## CreateDomesticScheduledPaymentConsentsJSON

Create Domestic Scheduled Payment Consents

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
    res, err := s.DomesticScheduledPayments.CreateDomesticScheduledPaymentConsentsJSON(ctx, operations.CreateDomesticScheduledPaymentConsentsJSONRequest{
        Authorization: "dolor",
        OBWriteDomesticScheduledConsent4: shared.OBWriteDomesticScheduledConsent4{
            Data: shared.OBWriteDomesticScheduledConsent4Data{
                Authorisation: &shared.OBWriteDomesticScheduledConsent4DataAuthorisation{
                    AuthorisationType: shared.OBWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnumSingle,
                    CompletionDateTime: types.MustTimeFromString("2022-08-19T20:09:28.183Z"),
                },
                Initiation: shared.OBWriteDomesticScheduledConsent4DataInitiation{
                    CreditorAccount: shared.OBWriteDomesticScheduledConsent4DataInitiationCreditorAccount{
                        Identification: "quasi",
                        Name: "Melba Toy",
                        SchemeName: "deleniti",
                        SecondaryIdentification: sdk.String("facilis"),
                    },
                    CreditorPostalAddress: &shared.OBPostalAddress6{
                        AddressLine: []string{
                            "architecto",
                            "architecto",
                        },
                        AddressType: shared.OBAddressTypeCodeEnumStatement.ToPointer(),
                        BuildingNumber: sdk.String("ullam"),
                        Country: sdk.String("Portugal"),
                        CountrySubDivision: sdk.String("nihil"),
                        Department: sdk.String("repellat"),
                        PostCode: sdk.String("19801-5611"),
                        StreetName: sdk.String("quo"),
                        SubDepartment: sdk.String("illum"),
                        TownName: sdk.String("pariatur"),
                    },
                    DebtorAccount: &shared.OBWriteDomesticScheduledConsent4DataInitiationDebtorAccount{
                        Identification: "maxime",
                        Name: sdk.String("Miriam Connelly Jr."),
                        SchemeName: "maiores",
                        SecondaryIdentification: sdk.String("quidem"),
                    },
                    EndToEndIdentification: sdk.String("ipsam"),
                    InstructedAmount: shared.OBWriteDomesticScheduledConsent4DataInitiationInstructedAmount{
                        Amount: "voluptate",
                        Currency: "autem",
                    },
                    InstructionIdentification: "nam",
                    LocalInstrument: sdk.String("eaque"),
                    RemittanceInformation: &shared.OBWriteDomesticScheduledConsent4DataInitiationRemittanceInformation{
                        Reference: sdk.String("pariatur"),
                        Unstructured: sdk.String("nemo"),
                    },
                    RequestedExecutionDateTime: types.MustTimeFromString("2022-12-13T19:01:00.083Z"),
                    SupplementaryData: map[string]interface{}{
                        "amet": "aut",
                        "cumque": "corporis",
                        "hic": "libero",
                        "nobis": "dolores",
                    },
                },
                Permission: shared.OBWriteDomesticScheduledConsent4DataPermissionEnumCreate,
                ReadRefundAccount: shared.OBWriteDomesticScheduledConsent4DataReadRefundAccountEnumNo.ToPointer(),
                SCASupportData: &shared.OBSCASupportData1{
                    AppliedAuthenticationApproach: shared.OBSCASupportData1AppliedAuthenticationApproachEnumSca.ToPointer(),
                    ReferencePaymentOrderID: sdk.String("dignissimos"),
                    RequestedSCAExemptionType: shared.OBSCASupportData1RequestedSCAExemptionTypeEnumBillPayment.ToPointer(),
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "nesciunt",
                        "eos",
                    },
                    BuildingNumber: sdk.String("perferendis"),
                    Country: "Chad",
                    CountrySubDivision: sdk.String("minus"),
                    PostCode: sdk.String("28399"),
                    StreetName: sdk.String("omnis"),
                    TownName: "facilis",
                },
                MerchantCategoryCode: sdk.String("perspiciatis"),
                MerchantCustomerIdentification: sdk.String("voluptatem"),
                PaymentContextCode: shared.OBRisk1PaymentContextCodeEnumOther.ToPointer(),
            },
        },
        XCustomerUserAgent: sdk.String("consequuntur"),
        XFapiAuthDate: sdk.String("blanditiis"),
        XFapiCustomerIPAddress: sdk.String("error"),
        XFapiInteractionID: sdk.String("eaque"),
        XIdempotencyKey: "occaecati",
        XJwsSignature: "rerum",
    }, operations.CreateDomesticScheduledPaymentConsentsJSONSecurity{
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

## CreateDomesticScheduledPaymentConsentsRaw

Create Domestic Scheduled Payment Consents

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
    res, err := s.DomesticScheduledPayments.CreateDomesticScheduledPaymentConsentsRaw(ctx, operations.CreateDomesticScheduledPaymentConsentsRawRequest{
        Authorization: "adipisci",
        RequestBody: []byte("asperiores"),
        XCustomerUserAgent: sdk.String("earum"),
        XFapiAuthDate: sdk.String("modi"),
        XFapiCustomerIPAddress: sdk.String("iste"),
        XFapiInteractionID: sdk.String("dolorum"),
        XIdempotencyKey: "deleniti",
        XJwsSignature: "pariatur",
    }, operations.CreateDomesticScheduledPaymentConsentsRawSecurity{
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

## CreateDomesticScheduledPaymentsJSON

Create Domestic Scheduled Payments

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
    res, err := s.DomesticScheduledPayments.CreateDomesticScheduledPaymentsJSON(ctx, operations.CreateDomesticScheduledPaymentsJSONRequest{
        Authorization: "provident",
        OBWriteDomesticScheduled2: shared.OBWriteDomesticScheduled2{
            Data: shared.OBWriteDomesticScheduled2Data{
                ConsentID: "nobis",
                Initiation: shared.OBWriteDomesticScheduled2DataInitiation{
                    CreditorAccount: shared.OBWriteDomesticScheduled2DataInitiationCreditorAccount{
                        Identification: "libero",
                        Name: "Alex Luettgen",
                        SchemeName: "dolorem",
                        SecondaryIdentification: sdk.String("dolor"),
                    },
                    CreditorPostalAddress: &shared.OBPostalAddress6{
                        AddressLine: []string{
                            "ipsum",
                        },
                        AddressType: shared.OBAddressTypeCodeEnumStatement.ToPointer(),
                        BuildingNumber: sdk.String("excepturi"),
                        Country: sdk.String("Rwanda"),
                        CountrySubDivision: sdk.String("voluptate"),
                        Department: sdk.String("dignissimos"),
                        PostCode: sdk.String("26200-0443"),
                        StreetName: sdk.String("accusamus"),
                        SubDepartment: sdk.String("quidem"),
                        TownName: sdk.String("voluptatibus"),
                    },
                    DebtorAccount: &shared.OBWriteDomesticScheduled2DataInitiationDebtorAccount{
                        Identification: "voluptas",
                        Name: sdk.String("Dr. Craig Littel DDS"),
                        SchemeName: "dolorum",
                        SecondaryIdentification: sdk.String("iusto"),
                    },
                    EndToEndIdentification: sdk.String("voluptate"),
                    InstructedAmount: shared.OBWriteDomesticScheduled2DataInitiationInstructedAmount{
                        Amount: "dolorum",
                        Currency: "deleniti",
                    },
                    InstructionIdentification: "omnis",
                    LocalInstrument: sdk.String("necessitatibus"),
                    RemittanceInformation: &shared.OBWriteDomesticScheduled2DataInitiationRemittanceInformation{
                        Reference: sdk.String("distinctio"),
                        Unstructured: sdk.String("asperiores"),
                    },
                    RequestedExecutionDateTime: types.MustTimeFromString("2022-10-13T19:58:56.024Z"),
                    SupplementaryData: map[string]interface{}{
                        "id": "saepe",
                        "eius": "aspernatur",
                    },
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "amet",
                    },
                    BuildingNumber: sdk.String("optio"),
                    Country: "Thailand",
                    CountrySubDivision: sdk.String("ad"),
                    PostCode: sdk.String("36538-5608"),
                    StreetName: sdk.String("quaerat"),
                    TownName: "tempora",
                },
                MerchantCategoryCode: sdk.String("vel"),
                MerchantCustomerIdentification: sdk.String("quod"),
                PaymentContextCode: shared.OBRisk1PaymentContextCodeEnumPartyToParty.ToPointer(),
            },
        },
        XCustomerUserAgent: sdk.String("qui"),
        XFapiAuthDate: sdk.String("dolorum"),
        XFapiCustomerIPAddress: sdk.String("a"),
        XFapiInteractionID: sdk.String("esse"),
        XIdempotencyKey: "harum",
        XJwsSignature: "iusto",
    }, operations.CreateDomesticScheduledPaymentsJSONSecurity{
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

## CreateDomesticScheduledPaymentsRaw

Create Domestic Scheduled Payments

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
    res, err := s.DomesticScheduledPayments.CreateDomesticScheduledPaymentsRaw(ctx, operations.CreateDomesticScheduledPaymentsRawRequest{
        Authorization: "ipsum",
        RequestBody: []byte("quisquam"),
        XCustomerUserAgent: sdk.String("tenetur"),
        XFapiAuthDate: sdk.String("amet"),
        XFapiCustomerIPAddress: sdk.String("tempore"),
        XFapiInteractionID: sdk.String("accusamus"),
        XIdempotencyKey: "numquam",
        XJwsSignature: "enim",
    }, operations.CreateDomesticScheduledPaymentsRawSecurity{
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

## GetDomesticScheduledPaymentConsentsConsentID

Get Domestic Scheduled Payment Consents

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
    res, err := s.DomesticScheduledPayments.GetDomesticScheduledPaymentConsentsConsentID(ctx, operations.GetDomesticScheduledPaymentConsentsConsentIDRequest{
        Authorization: "dolorem",
        ConsentID: "sapiente",
        XCustomerUserAgent: sdk.String("totam"),
        XFapiAuthDate: sdk.String("nihil"),
        XFapiCustomerIPAddress: sdk.String("sit"),
        XFapiInteractionID: sdk.String("expedita"),
    }, operations.GetDomesticScheduledPaymentConsentsConsentIDSecurity{
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

## GetDomesticScheduledPaymentsDomesticScheduledPaymentID

Get Domestic Scheduled Payments

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
    res, err := s.DomesticScheduledPayments.GetDomesticScheduledPaymentsDomesticScheduledPaymentID(ctx, operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDRequest{
        Authorization: "neque",
        DomesticScheduledPaymentID: "sed",
        XCustomerUserAgent: sdk.String("vel"),
        XFapiAuthDate: sdk.String("libero"),
        XFapiCustomerIPAddress: sdk.String("voluptas"),
        XFapiInteractionID: sdk.String("deserunt"),
    }, operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDSecurity{
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
