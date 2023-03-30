# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/openbanking.org.uk/payment-initiation-openapi/3.1.7/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateDomesticPaymentConsentsJSONRequest{
        Security: operations.CreateDomesticPaymentConsentsJSONSecurity{
            TPPOAuth2Security: shared.SchemeTppoAuth2Security{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Headers: operations.CreateDomesticPaymentConsentsJSONHeaders{
            Authorization: "corrupti",
            XCustomerUserAgent: "provident",
            XFapiAuthDate: "distinctio",
            XFapiCustomerIPAddress: "quibusdam",
            XFapiInteractionID: "unde",
            XIdempotencyKey: "nulla",
            XJwsSignature: "corrupti",
        },
        Request: shared.OBWriteDomesticConsent4{
            Data: shared.OBWriteDomesticConsent4Data{
                Authorisation: &shared.OBWriteDomesticConsent4DataAuthorisation{
                    AuthorisationType: "Single",
                    CompletionDateTime: "2022-10-26T11:55:12.450Z",
                },
                Initiation: shared.OBWriteDomesticConsent4DataInitiation{
                    CreditorAccount: shared.OBWriteDomesticConsent4DataInitiationCreditorAccount{
                        Identification: "error",
                        Name: "deserunt",
                        SchemeName: "suscipit",
                        SecondaryIdentification: "iure",
                    },
                    CreditorPostalAddress: &shared.OBPostalAddress6{
                        AddressLine: []string{
                            "debitis",
                            "ipsa",
                        },
                        AddressType: "Statement",
                        BuildingNumber: "tempora",
                        Country: "Holy See (Vatican City State)",
                        CountrySubDivision: "molestiae",
                        Department: "minus",
                        PostCode: "54539-8030",
                        StreetName: "deserunt",
                        SubDepartment: "perferendis",
                        TownName: "ipsam",
                    },
                    DebtorAccount: &shared.OBWriteDomesticConsent4DataInitiationDebtorAccount{
                        Identification: "repellendus",
                        Name: "sapiente",
                        SchemeName: "quo",
                        SecondaryIdentification: "odit",
                    },
                    EndToEndIdentification: "at",
                    InstructedAmount: shared.OBWriteDomesticConsent4DataInitiationInstructedAmount{
                        Amount: "at",
                        Currency: "maiores",
                    },
                    InstructionIdentification: "molestiae",
                    LocalInstrument: "quod",
                    RemittanceInformation: &shared.OBWriteDomesticConsent4DataInitiationRemittanceInformation{
                        Reference: "quod",
                        Unstructured: "esse",
                    },
                    SupplementaryData: map[string]interface{}{
                        "porro": "dolorum",
                        "dicta": "nam",
                        "officia": "occaecati",
                    },
                },
                ReadRefundAccount: "No",
                SCASupportData: &shared.OBSCASupportData1{
                    AppliedAuthenticationApproach: "SCA",
                    ReferencePaymentOrderID: "hic",
                    RequestedSCAExemptionType: "Parking",
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "beatae",
                        "commodi",
                        "molestiae",
                    },
                    BuildingNumber: "modi",
                    Country: "Cocos (Keeling) Islands",
                    CountrySubDivision: "impedit",
                    PostCode: "42510-3616",
                    StreetName: "dolor",
                    TownName: "natus",
                },
                MerchantCategoryCode: "laboriosam",
                MerchantCustomerIdentification: "hic",
                PaymentContextCode: "PartyToParty",
            },
        },
    }

    ctx := context.Background()
    res, err := s.DomesticPayments.CreateDomesticPaymentConsentsJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### DomesticPayments

* `CreateDomesticPaymentConsentsJSON` - Create Domestic Payment Consents
* `CreateDomesticPaymentConsentsRaw` - Create Domestic Payment Consents
* `CreateDomesticPaymentsJSON` - Create Domestic Payments
* `CreateDomesticPaymentsRaw` - Create Domestic Payments
* `GetDomesticPaymentConsentsConsentID` - Get Domestic Payment Consents
* `GetDomesticPaymentConsentsConsentIDFundsConfirmation` - Get Domestic Payment Consents Funds Confirmation
* `GetDomesticPaymentsDomesticPaymentID` - Get Domestic Payments

### DomesticScheduledPayments

* `CreateDomesticScheduledPaymentConsentsJSON` - Create Domestic Scheduled Payment Consents
* `CreateDomesticScheduledPaymentConsentsRaw` - Create Domestic Scheduled Payment Consents
* `CreateDomesticScheduledPaymentsJSON` - Create Domestic Scheduled Payments
* `CreateDomesticScheduledPaymentsRaw` - Create Domestic Scheduled Payments
* `GetDomesticScheduledPaymentConsentsConsentID` - Get Domestic Scheduled Payment Consents
* `GetDomesticScheduledPaymentsDomesticScheduledPaymentID` - Get Domestic Scheduled Payments

### DomesticStandingOrders

* `CreateDomesticStandingOrderConsentsJSON` - Create Domestic Standing Order Consents
* `CreateDomesticStandingOrderConsentsRaw` - Create Domestic Standing Order Consents
* `CreateDomesticStandingOrdersJSON` - Create Domestic Standing Orders
* `CreateDomesticStandingOrdersRaw` - Create Domestic Standing Orders
* `GetDomesticStandingOrderConsentsConsentID` - Get Domestic Standing Order Consents
* `GetDomesticStandingOrdersDomesticStandingOrderID` - Get Domestic Standing Orders

### FilePayments

* `CreateFilePaymentConsentsConsentIDFileJSON` - Create File Payment Consents
* `CreateFilePaymentConsentsConsentIDFileRaw` - Create File Payment Consents
* `CreateFilePaymentConsentsJSON` - Create File Payment Consents
* `CreateFilePaymentConsentsRaw` - Create File Payment Consents
* `CreateFilePaymentsJSON` - Create File Payments
* `CreateFilePaymentsRaw` - Create File Payments
* `GetFilePaymentConsentsConsentID` - Get File Payment Consents
* `GetFilePaymentConsentsConsentIDFile` - Get File Payment Consents
* `GetFilePaymentsFilePaymentID` - Get File Payments
* `GetFilePaymentsFilePaymentIDReportFile` - Get File Payments

### InternationalPayments

* `CreateInternationalPaymentConsentsJSON` - Create International Payment Consents
* `CreateInternationalPaymentConsentsRaw` - Create International Payment Consents
* `CreateInternationalPaymentsJSON` - Create International Payments
* `CreateInternationalPaymentsRaw` - Create International Payments
* `GetInternationalPaymentConsentsConsentID` - Get International Payment Consents
* `GetInternationalPaymentConsentsConsentIDFundsConfirmation` - Get International Payment Consents Funds Confirmation
* `GetInternationalPaymentsInternationalPaymentID` - Get International Payments

### InternationalScheduledPayments

* `CreateInternationalScheduledPaymentConsentsJSON` - Create International Scheduled Payment Consents
* `CreateInternationalScheduledPaymentConsentsRaw` - Create International Scheduled Payment Consents
* `CreateInternationalScheduledPaymentsJSON` - Create International Scheduled Payments
* `CreateInternationalScheduledPaymentsRaw` - Create International Scheduled Payments
* `GetInternationalScheduledPaymentConsentsConsentID` - Get International Scheduled Payment Consents
* `GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmation` - Get International Scheduled Payment Consents Funds Confirmation
* `GetInternationalScheduledPaymentsInternationalScheduledPaymentID` - Get International Scheduled Payments

### InternationalStandingOrders

* `CreateInternationalStandingOrderConsentsJSON` - Create International Standing Order Consents
* `CreateInternationalStandingOrderConsentsRaw` - Create International Standing Order Consents
* `CreateInternationalStandingOrdersJSON` - Create International Standing Orders
* `CreateInternationalStandingOrdersRaw` - Create International Standing Orders
* `GetInternationalStandingOrderConsentsConsentID` - Get International Standing Order Consents
* `GetInternationalStandingOrdersInternationalStandingOrderPaymentID` - Get International Standing Orders

### PaymentDetails

* `GetDomesticPaymentsDomesticPaymentIDPaymentDetails` - Get Payment Details
* `GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetails` - Get Payment Details
* `GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetails` - Get Payment Details
* `GetFilePaymentsFilePaymentIDPaymentDetails` - Get Payment Details
* `GetInternationalPaymentsInternationalPaymentIDPaymentDetails` - Get Payment Details
* `GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetails` - Get Payment Details
* `GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetails` - Get Payment Details
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
