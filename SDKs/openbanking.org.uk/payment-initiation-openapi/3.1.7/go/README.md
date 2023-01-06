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
            Authorization: "libero",
            XCustomerUserAgent: "nostrum",
            XFapiAuthDate: "hic",
            XFapiCustomerIPAddress: "nisi",
            XFapiInteractionID: "et",
            XIdempotencyKey: "explicabo",
            XJwsSignature: "in",
        },
        Request: operations.CreateDomesticPaymentConsentsRequests{
            ApplicationJosePlusJwe: []byte("maiores"),
            OBWriteDomesticConsent4: &shared.ObWriteDomesticConsent4{
                Data: shared.ObWriteDomesticConsent4Data{
                    Authorisation: &shared.ObWriteDomesticConsent4DataAuthorisation{
                        AuthorisationType: "Any",
                        CompletionDateTime: "1987-09-01T03:23:02Z",
                    },
                    Initiation: shared.ObWriteDomesticConsent4DataInitiation{
                        CreditorAccount: shared.ObWriteDomesticConsent4DataInitiationCreditorAccount{
                            Identification: "placeat",
                            Name: "dolore",
                            SchemeName: "quia",
                            SecondaryIdentification: "mollitia",
                        },
                        CreditorPostalAddress: &shared.ObPostalAddress6{
                            AddressLine: []string{
                                "repellendus",
                            },
                            AddressType: "Correspondence",
                            BuildingNumber: "nesciunt",
                            Country: "ex",
                            CountrySubDivision: "qui",
                            Department: "dolores",
                            PostCode: "perferendis",
                            StreetName: "ipsa",
                            SubDepartment: "voluptate",
                            TownName: "iste",
                        },
                        DebtorAccount: &shared.ObWriteDomesticConsent4DataInitiationDebtorAccount{
                            Identification: "deleniti",
                            Name: "labore",
                            SchemeName: "non",
                            SecondaryIdentification: "sequi",
                        },
                        EndToEndIdentification: "atque",
                        InstructedAmount: shared.ObWriteDomesticConsent4DataInitiationInstructedAmount{
                            Amount: "cumque",
                            Currency: "vero",
                        },
                        InstructionIdentification: "facilis",
                        LocalInstrument: "veniam",
                        RemittanceInformation: &shared.ObWriteDomesticConsent4DataInitiationRemittanceInformation{
                            Reference: "maxime",
                            Unstructured: "pariatur",
                        },
                        SupplementaryData: map[string]interface{}{
                            "illum": "in",
                            "amet": "quae",
                            "qui": "ut",
                        },
                    },
                    ReadRefundAccount: "No",
                    SCASupportData: &shared.ObscaSupportData1{
                        AppliedAuthenticationApproach: "SCA",
                        ReferencePaymentOrderID: "minus",
                        RequestedSCAExemptionType: "Parking",
                    },
                },
                Risk: shared.ObRisk1{
                    DeliveryAddress: &shared.ObRisk1DeliveryAddress{
                        AddressLine: []string{
                            "nihil",
                            "exercitationem",
                            "iste",
                        },
                        BuildingNumber: "tenetur",
                        Country: "ipsam",
                        CountrySubDivision: "dicta",
                        PostCode: "eaque",
                        StreetName: "quod",
                        TownName: "perferendis",
                    },
                    MerchantCategoryCode: "et",
                    MerchantCustomerIdentification: "minus",
                    PaymentContextCode: "EcommerceGoods",
                },
            },
            OBWriteDomesticConsent5: &shared.ObWriteDomesticConsent4{
                Data: shared.ObWriteDomesticConsent4Data{
                    Authorisation: &shared.ObWriteDomesticConsent4DataAuthorisation{
                        AuthorisationType: "Single",
                        CompletionDateTime: "2001-01-07T15:51:26Z",
                    },
                    Initiation: shared.ObWriteDomesticConsent4DataInitiation{
                        CreditorAccount: shared.ObWriteDomesticConsent4DataInitiationCreditorAccount{
                            Identification: "eveniet",
                            Name: "voluptatem",
                            SchemeName: "eaque",
                            SecondaryIdentification: "corrupti",
                        },
                        CreditorPostalAddress: &shared.ObPostalAddress6{
                            AddressLine: []string{
                                "quaerat",
                            },
                            AddressType: "Postal",
                            BuildingNumber: "officia",
                            Country: "et",
                            CountrySubDivision: "aut",
                            Department: "dolorum",
                            PostCode: "et",
                            StreetName: "nihil",
                            SubDepartment: "labore",
                            TownName: "dolorem",
                        },
                        DebtorAccount: &shared.ObWriteDomesticConsent4DataInitiationDebtorAccount{
                            Identification: "nesciunt",
                            Name: "sed",
                            SchemeName: "consequatur",
                            SecondaryIdentification: "voluptatem",
                        },
                        EndToEndIdentification: "ad",
                        InstructedAmount: shared.ObWriteDomesticConsent4DataInitiationInstructedAmount{
                            Amount: "et",
                            Currency: "totam",
                        },
                        InstructionIdentification: "optio",
                        LocalInstrument: "aliquam",
                        RemittanceInformation: &shared.ObWriteDomesticConsent4DataInitiationRemittanceInformation{
                            Reference: "autem",
                            Unstructured: "distinctio",
                        },
                        SupplementaryData: map[string]interface{}{
                            "similique": "animi",
                        },
                    },
                    ReadRefundAccount: "Yes",
                    SCASupportData: &shared.ObscaSupportData1{
                        AppliedAuthenticationApproach: "SCA",
                        ReferencePaymentOrderID: "aspernatur",
                        RequestedSCAExemptionType: "Kiosk",
                    },
                },
                Risk: shared.ObRisk1{
                    DeliveryAddress: &shared.ObRisk1DeliveryAddress{
                        AddressLine: []string{
                            "explicabo",
                        },
                        BuildingNumber: "veritatis",
                        Country: "dolore",
                        CountrySubDivision: "sequi",
                        PostCode: "enim",
                        StreetName: "quia",
                        TownName: "perferendis",
                    },
                    MerchantCategoryCode: "et",
                    MerchantCustomerIdentification: "cumque",
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
