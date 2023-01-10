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
            Authorization: "unde",
            XCustomerUserAgent: "nihil",
            XFapiAuthDate: "voluptate",
            XFapiCustomerIPAddress: "beatae",
            XFapiInteractionID: "ex",
            XIdempotencyKey: "et",
            XJwsSignature: "tenetur",
        },
        Request: operations.CreateDomesticPaymentConsentsRequests{
            ApplicationJosePlusJwe: []byte("dolorem"),
            OBWriteDomesticConsent4: &shared.ObWriteDomesticConsent4{
                Data: shared.ObWriteDomesticConsent4Data{
                    Authorisation: &shared.ObWriteDomesticConsent4DataAuthorisation{
                        AuthorisationType: "Any",
                        CompletionDateTime: "2021-11-01T01:51:56Z",
                    },
                    Initiation: shared.ObWriteDomesticConsent4DataInitiation{
                        CreditorAccount: shared.ObWriteDomesticConsent4DataInitiationCreditorAccount{
                            Identification: "rerum",
                            Name: "facere",
                            SchemeName: "eius",
                            SecondaryIdentification: "quia",
                        },
                        CreditorPostalAddress: &shared.ObPostalAddress6{
                            AddressLine: []string{
                                "quo",
                                "animi",
                            },
                            AddressType: "Statement",
                            BuildingNumber: "tempore",
                            Country: "beatae",
                            CountrySubDivision: "aut",
                            Department: "quis",
                            PostCode: "odio",
                            StreetName: "ducimus",
                            SubDepartment: "consectetur",
                            TownName: "eius",
                        },
                        DebtorAccount: &shared.ObWriteDomesticConsent4DataInitiationDebtorAccount{
                            Identification: "et",
                            Name: "dolores",
                            SchemeName: "eum",
                            SecondaryIdentification: "autem",
                        },
                        EndToEndIdentification: "doloremque",
                        InstructedAmount: shared.ObWriteDomesticConsent4DataInitiationInstructedAmount{
                            Amount: "maiores",
                            Currency: "atque",
                        },
                        InstructionIdentification: "ipsa",
                        LocalInstrument: "blanditiis",
                        RemittanceInformation: &shared.ObWriteDomesticConsent4DataInitiationRemittanceInformation{
                            Reference: "expedita",
                            Unstructured: "tenetur",
                        },
                        SupplementaryData: map[string]interface{}{
                            "repellat": "in",
                        },
                    },
                    ReadRefundAccount: "No",
                    SCASupportData: &shared.ObscaSupportData1{
                        AppliedAuthenticationApproach: "SCA",
                        ReferencePaymentOrderID: "voluptatem",
                        RequestedSCAExemptionType: "EcommerceServices",
                    },
                },
                Risk: shared.ObRisk1{
                    DeliveryAddress: &shared.ObRisk1DeliveryAddress{
                        AddressLine: []string{
                            "expedita",
                        },
                        BuildingNumber: "illum",
                        Country: "eligendi",
                        CountrySubDivision: "recusandae",
                        PostCode: "doloribus",
                        StreetName: "molestiae",
                        TownName: "cupiditate",
                    },
                    MerchantCategoryCode: "mollitia",
                    MerchantCustomerIdentification: "reiciendis",
                    PaymentContextCode: "BillPayment",
                },
            },
            OBWriteDomesticConsent5: &shared.ObWriteDomesticConsent4{
                Data: shared.ObWriteDomesticConsent4Data{
                    Authorisation: &shared.ObWriteDomesticConsent4DataAuthorisation{
                        AuthorisationType: "Any",
                        CompletionDateTime: "2001-09-28T01:22:47Z",
                    },
                    Initiation: shared.ObWriteDomesticConsent4DataInitiation{
                        CreditorAccount: shared.ObWriteDomesticConsent4DataInitiationCreditorAccount{
                            Identification: "aliquid",
                            Name: "enim",
                            SchemeName: "tempore",
                            SecondaryIdentification: "iure",
                        },
                        CreditorPostalAddress: &shared.ObPostalAddress6{
                            AddressLine: []string{
                                "quia",
                                "officia",
                                "sit",
                            },
                            AddressType: "Correspondence",
                            BuildingNumber: "ipsam",
                            Country: "ut",
                            CountrySubDivision: "voluptatum",
                            Department: "velit",
                            PostCode: "eius",
                            StreetName: "quo",
                            SubDepartment: "aut",
                            TownName: "et",
                        },
                        DebtorAccount: &shared.ObWriteDomesticConsent4DataInitiationDebtorAccount{
                            Identification: "nesciunt",
                            Name: "soluta",
                            SchemeName: "sint",
                            SecondaryIdentification: "sint",
                        },
                        EndToEndIdentification: "officia",
                        InstructedAmount: shared.ObWriteDomesticConsent4DataInitiationInstructedAmount{
                            Amount: "reprehenderit",
                            Currency: "dolorem",
                        },
                        InstructionIdentification: "ea",
                        LocalInstrument: "dolore",
                        RemittanceInformation: &shared.ObWriteDomesticConsent4DataInitiationRemittanceInformation{
                            Reference: "saepe",
                            Unstructured: "atque",
                        },
                        SupplementaryData: map[string]interface{}{
                            "ut": "voluptate",
                        },
                    },
                    ReadRefundAccount: "Yes",
                    SCASupportData: &shared.ObscaSupportData1{
                        AppliedAuthenticationApproach: "CA",
                        ReferencePaymentOrderID: "quisquam",
                        RequestedSCAExemptionType: "BillPayment",
                    },
                },
                Risk: shared.ObRisk1{
                    DeliveryAddress: &shared.ObRisk1DeliveryAddress{
                        AddressLine: []string{
                            "ipsa",
                            "commodi",
                        },
                        BuildingNumber: "rem",
                        Country: "quo",
                        CountrySubDivision: "facilis",
                        PostCode: "eum",
                        StreetName: "facilis",
                        TownName: "sint",
                    },
                    MerchantCategoryCode: "vitae",
                    MerchantCustomerIdentification: "labore",
                    PaymentContextCode: "Other",
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
