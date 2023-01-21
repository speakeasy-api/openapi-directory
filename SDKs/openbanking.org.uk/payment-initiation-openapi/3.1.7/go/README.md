# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CreateDomesticPaymentConsentsRequest{
        Security: operations.CreateDomesticPaymentConsentsSecurity{
            TPPOAuth2Security: shared.SchemeTppoAuth2Security{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Headers: operations.CreateDomesticPaymentConsentsHeaders{
            Authorization: "sit",
            XCustomerUserAgent: "voluptas",
            XFapiAuthDate: "culpa",
            XFapiCustomerIPAddress: "expedita",
            XFapiInteractionID: "consequuntur",
            XIdempotencyKey: "dolor",
            XJwsSignature: "expedita",
        },
        Request: operations.CreateDomesticPaymentConsentsRequests{
            ApplicationJosePlusJwe: []byte("voluptas"),
            OBWriteDomesticConsent4: &shared.ObWriteDomesticConsent4{
                Data: shared.ObWriteDomesticConsent4Data{
                    Authorisation: &shared.ObWriteDomesticConsent4DataAuthorisation{
                        AuthorisationType: "Any",
                        CompletionDateTime: "2011-08-12T10:11:12Z",
                    },
                    Initiation: shared.ObWriteDomesticConsent4DataInitiation{
                        CreditorAccount: shared.ObWriteDomesticConsent4DataInitiationCreditorAccount{
                            Identification: "nihil",
                            Name: "rerum",
                            SchemeName: "dicta",
                            SecondaryIdentification: "debitis",
                        },
                        CreditorPostalAddress: &shared.ObPostalAddress6{
                            AddressLine: []string{
                                "et",
                            },
                            AddressType: "Statement",
                            BuildingNumber: "dolorem",
                            Country: "et",
                            CountrySubDivision: "voluptate",
                            Department: "iste",
                            PostCode: "vitae",
                            StreetName: "totam",
                            SubDepartment: "dolores",
                            TownName: "illum",
                        },
                        DebtorAccount: &shared.ObWriteDomesticConsent4DataInitiationDebtorAccount{
                            Identification: "debitis",
                            Name: "vel",
                            SchemeName: "odio",
                            SecondaryIdentification: "dolore",
                        },
                        EndToEndIdentification: "id",
                        InstructedAmount: shared.ObWriteDomesticConsent4DataInitiationInstructedAmount{
                            Amount: "aspernatur",
                            Currency: "accusantium",
                        },
                        InstructionIdentification: "totam",
                        LocalInstrument: "commodi",
                        RemittanceInformation: &shared.ObWriteDomesticConsent4DataInitiationRemittanceInformation{
                            Reference: "quis",
                            Unstructured: "est",
                        },
                        SupplementaryData: map[string]interface{}{
                            "odit": "non",
                            "voluptas": "omnis",
                            "aut": "illo",
                        },
                    },
                    ReadRefundAccount: "No",
                    SCASupportData: &shared.ObscaSupportData1{
                        AppliedAuthenticationApproach: "SCA",
                        ReferencePaymentOrderID: "autem",
                        RequestedSCAExemptionType: "PartyToParty",
                    },
                },
                Risk: shared.ObRisk1{
                    DeliveryAddress: &shared.ObRisk1DeliveryAddress{
                        AddressLine: []string{
                            "odio",
                        },
                        BuildingNumber: "qui",
                        Country: "recusandae",
                        CountrySubDivision: "at",
                        PostCode: "ipsum",
                        StreetName: "eveniet",
                        TownName: "modi",
                    },
                    MerchantCategoryCode: "sint",
                    MerchantCustomerIdentification: "inventore",
                    PaymentContextCode: "PartyToParty",
                },
            },
            OBWriteDomesticConsent5: &shared.ObWriteDomesticConsent4{
                Data: shared.ObWriteDomesticConsent4Data{
                    Authorisation: &shared.ObWriteDomesticConsent4DataAuthorisation{
                        AuthorisationType: "Any",
                        CompletionDateTime: "1987-11-29T05:58:16Z",
                    },
                    Initiation: shared.ObWriteDomesticConsent4DataInitiation{
                        CreditorAccount: shared.ObWriteDomesticConsent4DataInitiationCreditorAccount{
                            Identification: "reprehenderit",
                            Name: "tempore",
                            SchemeName: "maiores",
                            SecondaryIdentification: "incidunt",
                        },
                        CreditorPostalAddress: &shared.ObPostalAddress6{
                            AddressLine: []string{
                                "beatae",
                                "veritatis",
                            },
                            AddressType: "Business",
                            BuildingNumber: "et",
                            Country: "omnis",
                            CountrySubDivision: "ipsum",
                            Department: "ex",
                            PostCode: "dolores",
                            StreetName: "placeat",
                            SubDepartment: "vel",
                            TownName: "rerum",
                        },
                        DebtorAccount: &shared.ObWriteDomesticConsent4DataInitiationDebtorAccount{
                            Identification: "mollitia",
                            Name: "voluptas",
                            SchemeName: "quam",
                            SecondaryIdentification: "reprehenderit",
                        },
                        EndToEndIdentification: "qui",
                        InstructedAmount: shared.ObWriteDomesticConsent4DataInitiationInstructedAmount{
                            Amount: "qui",
                            Currency: "unde",
                        },
                        InstructionIdentification: "in",
                        LocalInstrument: "autem",
                        RemittanceInformation: &shared.ObWriteDomesticConsent4DataInitiationRemittanceInformation{
                            Reference: "qui",
                            Unstructured: "ut",
                        },
                        SupplementaryData: map[string]interface{}{
                            "ab": "neque",
                            "ullam": "et",
                            "accusantium": "esse",
                        },
                    },
                    ReadRefundAccount: "No",
                    SCASupportData: &shared.ObscaSupportData1{
                        AppliedAuthenticationApproach: "CA",
                        ReferencePaymentOrderID: "velit",
                        RequestedSCAExemptionType: "PartyToParty",
                    },
                },
                Risk: shared.ObRisk1{
                    DeliveryAddress: &shared.ObRisk1DeliveryAddress{
                        AddressLine: []string{
                            "sunt",
                        },
                        BuildingNumber: "voluptates",
                        Country: "magni",
                        CountrySubDivision: "et",
                        PostCode: "optio",
                        StreetName: "qui",
                        TownName: "earum",
                    },
                    MerchantCategoryCode: "illo",
                    MerchantCustomerIdentification: "omnis",
                    PaymentContextCode: "PartyToParty",
                },
            },
        },
    }
    
    res, err := s.DomesticPayments.CreateDomesticPaymentConsents(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Domestic Payments

* `CreateDomesticPaymentConsents` - Create Domestic Payment Consents
* `CreateDomesticPayments` - Create Domestic Payments
* `GetDomesticPaymentConsentsConsentID` - Get Domestic Payment Consents
* `GetDomesticPaymentConsentsConsentIDFundsConfirmation` - Get Domestic Payment Consents Funds Confirmation
* `GetDomesticPaymentsDomesticPaymentID` - Get Domestic Payments

### Domestic Scheduled Payments

* `CreateDomesticScheduledPaymentConsents` - Create Domestic Scheduled Payment Consents
* `CreateDomesticScheduledPayments` - Create Domestic Scheduled Payments
* `GetDomesticScheduledPaymentConsentsConsentID` - Get Domestic Scheduled Payment Consents
* `GetDomesticScheduledPaymentsDomesticScheduledPaymentID` - Get Domestic Scheduled Payments

### Domestic Standing Orders

* `CreateDomesticStandingOrderConsents` - Create Domestic Standing Order Consents
* `CreateDomesticStandingOrders` - Create Domestic Standing Orders
* `GetDomesticStandingOrderConsentsConsentID` - Get Domestic Standing Order Consents
* `GetDomesticStandingOrdersDomesticStandingOrderID` - Get Domestic Standing Orders

### File Payments

* `CreateFilePaymentConsents` - Create File Payment Consents
* `CreateFilePaymentConsentsConsentIDFile` - Create File Payment Consents
* `CreateFilePayments` - Create File Payments
* `GetFilePaymentConsentsConsentID` - Get File Payment Consents
* `GetFilePaymentConsentsConsentIDFile` - Get File Payment Consents
* `GetFilePaymentsFilePaymentID` - Get File Payments
* `GetFilePaymentsFilePaymentIDReportFile` - Get File Payments

### International Payments

* `CreateInternationalPaymentConsents` - Create International Payment Consents
* `CreateInternationalPayments` - Create International Payments
* `GetInternationalPaymentConsentsConsentID` - Get International Payment Consents
* `GetInternationalPaymentConsentsConsentIDFundsConfirmation` - Get International Payment Consents Funds Confirmation
* `GetInternationalPaymentsInternationalPaymentID` - Get International Payments

### International Scheduled Payments

* `CreateInternationalScheduledPaymentConsents` - Create International Scheduled Payment Consents
* `CreateInternationalScheduledPayments` - Create International Scheduled Payments
* `GetInternationalScheduledPaymentConsentsConsentID` - Get International Scheduled Payment Consents
* `GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmation` - Get International Scheduled Payment Consents Funds Confirmation
* `GetInternationalScheduledPaymentsInternationalScheduledPaymentID` - Get International Scheduled Payments

### International Standing Orders

* `CreateInternationalStandingOrderConsents` - Create International Standing Order Consents
* `CreateInternationalStandingOrders` - Create International Standing Orders
* `GetInternationalStandingOrderConsentsConsentID` - Get International Standing Order Consents
* `GetInternationalStandingOrdersInternationalStandingOrderPaymentID` - Get International Standing Orders

### Payment Details

* `GetDomesticPaymentsDomesticPaymentIDPaymentDetails` - Get Payment Details
* `GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetails` - Get Payment Details
* `GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetails` - Get Payment Details
* `GetFilePaymentsFilePaymentIDPaymentDetails` - Get Payment Details
* `GetInternationalPaymentsInternationalPaymentIDPaymentDetails` - Get Payment Details
* `GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetails` - Get Payment Details
* `GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetails` - Get Payment Details

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
