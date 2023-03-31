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
        Authorization: "corrupti",
        OBWriteDomesticConsent4: shared.OBWriteDomesticConsent4{
            Data: shared.OBWriteDomesticConsent4Data{
                Authorisation: &shared.OBWriteDomesticConsent4DataAuthorisation{
                    AuthorisationType: "Single",
                    CompletionDateTime: "2021-04-24T16:27:50.833Z",
                },
                Initiation: shared.OBWriteDomesticConsent4DataInitiation{
                    CreditorAccount: shared.OBWriteDomesticConsent4DataInitiationCreditorAccount{
                        Identification: "unde",
                        Name: "nulla",
                        SchemeName: "corrupti",
                        SecondaryIdentification: "illum",
                    },
                    CreditorPostalAddress: &shared.OBPostalAddress6{
                        AddressLine: []string{
                            "error",
                            "deserunt",
                        },
                        AddressType: "MailTo",
                        BuildingNumber: "iure",
                        Country: "French Guiana",
                        CountrySubDivision: "debitis",
                        Department: "ipsa",
                        PostCode: "23478-5453",
                        StreetName: "recusandae",
                        SubDepartment: "temporibus",
                        TownName: "ab",
                    },
                    DebtorAccount: &shared.OBWriteDomesticConsent4DataInitiationDebtorAccount{
                        Identification: "quis",
                        Name: "veritatis",
                        SchemeName: "deserunt",
                        SecondaryIdentification: "perferendis",
                    },
                    EndToEndIdentification: "ipsam",
                    InstructedAmount: shared.OBWriteDomesticConsent4DataInitiationInstructedAmount{
                        Amount: "repellendus",
                        Currency: "sapiente",
                    },
                    InstructionIdentification: "quo",
                    LocalInstrument: "odit",
                    RemittanceInformation: &shared.OBWriteDomesticConsent4DataInitiationRemittanceInformation{
                        Reference: "at",
                        Unstructured: "at",
                    },
                    SupplementaryData: map[string]interface{}{
                        "molestiae": "quod",
                        "quod": "esse",
                        "totam": "porro",
                        "dolorum": "dicta",
                    },
                },
                ReadRefundAccount: "Yes",
                SCASupportData: &shared.OBSCASupportData1{
                    AppliedAuthenticationApproach: "SCA",
                    ReferencePaymentOrderID: "occaecati",
                    RequestedSCAExemptionType: "ContactlessTravel",
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "hic",
                        "optio",
                        "totam",
                    },
                    BuildingNumber: "beatae",
                    Country: "Iraq",
                    CountrySubDivision: "molestiae",
                    PostCode: "17742",
                    StreetName: "excepturi",
                    TownName: "aspernatur",
                },
                MerchantCategoryCode: "perferendis",
                MerchantCustomerIdentification: "ad",
                PaymentContextCode: "Other",
            },
        },
        XCustomerUserAgent: "sed",
        XFapiAuthDate: "iste",
        XFapiCustomerIPAddress: "dolor",
        XFapiInteractionID: "natus",
        XIdempotencyKey: "laboriosam",
        XJwsSignature: "hic",
    }

    ctx := context.Background()
    res, err := s.DomesticPayments.CreateDomesticPaymentConsentsJSON(ctx, req, operations.CreateDomesticPaymentConsentsJSONSecurity{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
