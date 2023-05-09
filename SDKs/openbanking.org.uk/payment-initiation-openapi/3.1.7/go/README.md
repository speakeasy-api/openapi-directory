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
        Authorization: "corrupti",
        OBWriteDomesticConsent4: shared.OBWriteDomesticConsent4{
            Data: shared.OBWriteDomesticConsent4Data{
                Authorisation: &shared.OBWriteDomesticConsent4DataAuthorisation{
                    AuthorisationType: shared.OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnumSingle,
                    CompletionDateTime: types.MustTimeFromString("2021-04-24T16:27:50.833Z"),
                },
                Initiation: shared.OBWriteDomesticConsent4DataInitiation{
                    CreditorAccount: shared.OBWriteDomesticConsent4DataInitiationCreditorAccount{
                        Identification: "unde",
                        Name: "Johnnie Stamm",
                        SchemeName: "deserunt",
                        SecondaryIdentification: sdk.String("suscipit"),
                    },
                    CreditorPostalAddress: &shared.OBPostalAddress6{
                        AddressLine: []string{
                            "magnam",
                            "debitis",
                        },
                        AddressType: shared.OBAddressTypeCodeEnumBusiness.ToPointer(),
                        BuildingNumber: sdk.String("delectus"),
                        Country: sdk.String("Ethiopia"),
                        CountrySubDivision: sdk.String("suscipit"),
                        Department: sdk.String("molestiae"),
                        PostCode: sdk.String("85453-9803"),
                        StreetName: sdk.String("veritatis"),
                        SubDepartment: sdk.String("deserunt"),
                        TownName: sdk.String("perferendis"),
                    },
                    DebtorAccount: &shared.OBWriteDomesticConsent4DataInitiationDebtorAccount{
                        Identification: "ipsam",
                        Name: sdk.String("Timmy Satterfield"),
                        SchemeName: "at",
                        SecondaryIdentification: sdk.String("maiores"),
                    },
                    EndToEndIdentification: "molestiae",
                    InstructedAmount: shared.OBWriteDomesticConsent4DataInitiationInstructedAmount{
                        Amount: "quod",
                        Currency: "quod",
                    },
                    InstructionIdentification: "esse",
                    LocalInstrument: sdk.String("totam"),
                    RemittanceInformation: &shared.OBWriteDomesticConsent4DataInitiationRemittanceInformation{
                        Reference: sdk.String("porro"),
                        Unstructured: sdk.String("dolorum"),
                    },
                    SupplementaryData: map[string]interface{}{
                        "nam": "officia",
                    },
                },
                ReadRefundAccount: shared.OBWriteDomesticConsent4DataReadRefundAccountEnumYes.ToPointer(),
                SCASupportData: &shared.OBSCASupportData1{
                    AppliedAuthenticationApproach: shared.OBSCASupportData1AppliedAuthenticationApproachEnumCa.ToPointer(),
                    ReferencePaymentOrderID: sdk.String("deleniti"),
                    RequestedSCAExemptionType: shared.OBSCASupportData1RequestedSCAExemptionTypeEnumPartyToParty.ToPointer(),
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "totam",
                        "beatae",
                        "commodi",
                        "molestiae",
                    },
                    BuildingNumber: sdk.String("modi"),
                    Country: "Cocos (Keeling) Islands",
                    CountrySubDivision: sdk.String("impedit"),
                    PostCode: sdk.String("42510-3616"),
                    StreetName: sdk.String("dolor"),
                    TownName: "natus",
                },
                MerchantCategoryCode: sdk.String("laboriosam"),
                MerchantCustomerIdentification: sdk.String("hic"),
                PaymentContextCode: shared.OBRisk1PaymentContextCodeEnumPartyToParty.ToPointer(),
            },
        },
        XCustomerUserAgent: sdk.String("fuga"),
        XFapiAuthDate: sdk.String("in"),
        XFapiCustomerIPAddress: sdk.String("corporis"),
        XFapiInteractionID: sdk.String("iste"),
        XIdempotencyKey: "iure",
        XJwsSignature: "saepe",
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [DomesticPayments](docs/domesticpayments/README.md)

* [CreateDomesticPaymentConsentsJSON](docs/domesticpayments/README.md#createdomesticpaymentconsentsjson) - Create Domestic Payment Consents
* [CreateDomesticPaymentConsentsRaw](docs/domesticpayments/README.md#createdomesticpaymentconsentsraw) - Create Domestic Payment Consents
* [CreateDomesticPaymentsJSON](docs/domesticpayments/README.md#createdomesticpaymentsjson) - Create Domestic Payments
* [CreateDomesticPaymentsRaw](docs/domesticpayments/README.md#createdomesticpaymentsraw) - Create Domestic Payments
* [GetDomesticPaymentConsentsConsentID](docs/domesticpayments/README.md#getdomesticpaymentconsentsconsentid) - Get Domestic Payment Consents
* [GetDomesticPaymentConsentsConsentIDFundsConfirmation](docs/domesticpayments/README.md#getdomesticpaymentconsentsconsentidfundsconfirmation) - Get Domestic Payment Consents Funds Confirmation
* [GetDomesticPaymentsDomesticPaymentID](docs/domesticpayments/README.md#getdomesticpaymentsdomesticpaymentid) - Get Domestic Payments

### [DomesticScheduledPayments](docs/domesticscheduledpayments/README.md)

* [CreateDomesticScheduledPaymentConsentsJSON](docs/domesticscheduledpayments/README.md#createdomesticscheduledpaymentconsentsjson) - Create Domestic Scheduled Payment Consents
* [CreateDomesticScheduledPaymentConsentsRaw](docs/domesticscheduledpayments/README.md#createdomesticscheduledpaymentconsentsraw) - Create Domestic Scheduled Payment Consents
* [CreateDomesticScheduledPaymentsJSON](docs/domesticscheduledpayments/README.md#createdomesticscheduledpaymentsjson) - Create Domestic Scheduled Payments
* [CreateDomesticScheduledPaymentsRaw](docs/domesticscheduledpayments/README.md#createdomesticscheduledpaymentsraw) - Create Domestic Scheduled Payments
* [GetDomesticScheduledPaymentConsentsConsentID](docs/domesticscheduledpayments/README.md#getdomesticscheduledpaymentconsentsconsentid) - Get Domestic Scheduled Payment Consents
* [GetDomesticScheduledPaymentsDomesticScheduledPaymentID](docs/domesticscheduledpayments/README.md#getdomesticscheduledpaymentsdomesticscheduledpaymentid) - Get Domestic Scheduled Payments

### [DomesticStandingOrders](docs/domesticstandingorders/README.md)

* [CreateDomesticStandingOrderConsentsJSON](docs/domesticstandingorders/README.md#createdomesticstandingorderconsentsjson) - Create Domestic Standing Order Consents
* [CreateDomesticStandingOrderConsentsRaw](docs/domesticstandingorders/README.md#createdomesticstandingorderconsentsraw) - Create Domestic Standing Order Consents
* [CreateDomesticStandingOrdersJSON](docs/domesticstandingorders/README.md#createdomesticstandingordersjson) - Create Domestic Standing Orders
* [CreateDomesticStandingOrdersRaw](docs/domesticstandingorders/README.md#createdomesticstandingordersraw) - Create Domestic Standing Orders
* [GetDomesticStandingOrderConsentsConsentID](docs/domesticstandingorders/README.md#getdomesticstandingorderconsentsconsentid) - Get Domestic Standing Order Consents
* [GetDomesticStandingOrdersDomesticStandingOrderID](docs/domesticstandingorders/README.md#getdomesticstandingordersdomesticstandingorderid) - Get Domestic Standing Orders

### [FilePayments](docs/filepayments/README.md)

* [CreateFilePaymentConsentsConsentIDFileJSON](docs/filepayments/README.md#createfilepaymentconsentsconsentidfilejson) - Create File Payment Consents
* [CreateFilePaymentConsentsConsentIDFileRaw](docs/filepayments/README.md#createfilepaymentconsentsconsentidfileraw) - Create File Payment Consents
* [CreateFilePaymentConsentsJSON](docs/filepayments/README.md#createfilepaymentconsentsjson) - Create File Payment Consents
* [CreateFilePaymentConsentsRaw](docs/filepayments/README.md#createfilepaymentconsentsraw) - Create File Payment Consents
* [CreateFilePaymentsJSON](docs/filepayments/README.md#createfilepaymentsjson) - Create File Payments
* [CreateFilePaymentsRaw](docs/filepayments/README.md#createfilepaymentsraw) - Create File Payments
* [GetFilePaymentConsentsConsentID](docs/filepayments/README.md#getfilepaymentconsentsconsentid) - Get File Payment Consents
* [GetFilePaymentConsentsConsentIDFile](docs/filepayments/README.md#getfilepaymentconsentsconsentidfile) - Get File Payment Consents
* [GetFilePaymentsFilePaymentID](docs/filepayments/README.md#getfilepaymentsfilepaymentid) - Get File Payments
* [GetFilePaymentsFilePaymentIDReportFile](docs/filepayments/README.md#getfilepaymentsfilepaymentidreportfile) - Get File Payments

### [InternationalPayments](docs/internationalpayments/README.md)

* [CreateInternationalPaymentConsentsJSON](docs/internationalpayments/README.md#createinternationalpaymentconsentsjson) - Create International Payment Consents
* [CreateInternationalPaymentConsentsRaw](docs/internationalpayments/README.md#createinternationalpaymentconsentsraw) - Create International Payment Consents
* [CreateInternationalPaymentsJSON](docs/internationalpayments/README.md#createinternationalpaymentsjson) - Create International Payments
* [CreateInternationalPaymentsRaw](docs/internationalpayments/README.md#createinternationalpaymentsraw) - Create International Payments
* [GetInternationalPaymentConsentsConsentID](docs/internationalpayments/README.md#getinternationalpaymentconsentsconsentid) - Get International Payment Consents
* [GetInternationalPaymentConsentsConsentIDFundsConfirmation](docs/internationalpayments/README.md#getinternationalpaymentconsentsconsentidfundsconfirmation) - Get International Payment Consents Funds Confirmation
* [GetInternationalPaymentsInternationalPaymentID](docs/internationalpayments/README.md#getinternationalpaymentsinternationalpaymentid) - Get International Payments

### [InternationalScheduledPayments](docs/internationalscheduledpayments/README.md)

* [CreateInternationalScheduledPaymentConsentsJSON](docs/internationalscheduledpayments/README.md#createinternationalscheduledpaymentconsentsjson) - Create International Scheduled Payment Consents
* [CreateInternationalScheduledPaymentConsentsRaw](docs/internationalscheduledpayments/README.md#createinternationalscheduledpaymentconsentsraw) - Create International Scheduled Payment Consents
* [CreateInternationalScheduledPaymentsJSON](docs/internationalscheduledpayments/README.md#createinternationalscheduledpaymentsjson) - Create International Scheduled Payments
* [CreateInternationalScheduledPaymentsRaw](docs/internationalscheduledpayments/README.md#createinternationalscheduledpaymentsraw) - Create International Scheduled Payments
* [GetInternationalScheduledPaymentConsentsConsentID](docs/internationalscheduledpayments/README.md#getinternationalscheduledpaymentconsentsconsentid) - Get International Scheduled Payment Consents
* [GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmation](docs/internationalscheduledpayments/README.md#getinternationalscheduledpaymentconsentsconsentidfundsconfirmation) - Get International Scheduled Payment Consents Funds Confirmation
* [GetInternationalScheduledPaymentsInternationalScheduledPaymentID](docs/internationalscheduledpayments/README.md#getinternationalscheduledpaymentsinternationalscheduledpaymentid) - Get International Scheduled Payments

### [InternationalStandingOrders](docs/internationalstandingorders/README.md)

* [CreateInternationalStandingOrderConsentsJSON](docs/internationalstandingorders/README.md#createinternationalstandingorderconsentsjson) - Create International Standing Order Consents
* [CreateInternationalStandingOrderConsentsRaw](docs/internationalstandingorders/README.md#createinternationalstandingorderconsentsraw) - Create International Standing Order Consents
* [CreateInternationalStandingOrdersJSON](docs/internationalstandingorders/README.md#createinternationalstandingordersjson) - Create International Standing Orders
* [CreateInternationalStandingOrdersRaw](docs/internationalstandingorders/README.md#createinternationalstandingordersraw) - Create International Standing Orders
* [GetInternationalStandingOrderConsentsConsentID](docs/internationalstandingorders/README.md#getinternationalstandingorderconsentsconsentid) - Get International Standing Order Consents
* [GetInternationalStandingOrdersInternationalStandingOrderPaymentID](docs/internationalstandingorders/README.md#getinternationalstandingordersinternationalstandingorderpaymentid) - Get International Standing Orders

### [PaymentDetails](docs/paymentdetails/README.md)

* [GetDomesticPaymentsDomesticPaymentIDPaymentDetails](docs/paymentdetails/README.md#getdomesticpaymentsdomesticpaymentidpaymentdetails) - Get Payment Details
* [GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetails](docs/paymentdetails/README.md#getdomesticscheduledpaymentsdomesticscheduledpaymentidpaymentdetails) - Get Payment Details
* [GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetails](docs/paymentdetails/README.md#getdomesticstandingordersdomesticstandingorderidpaymentdetails) - Get Payment Details
* [GetFilePaymentsFilePaymentIDPaymentDetails](docs/paymentdetails/README.md#getfilepaymentsfilepaymentidpaymentdetails) - Get Payment Details
* [GetInternationalPaymentsInternationalPaymentIDPaymentDetails](docs/paymentdetails/README.md#getinternationalpaymentsinternationalpaymentidpaymentdetails) - Get Payment Details
* [GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetails](docs/paymentdetails/README.md#getinternationalscheduledpaymentsinternationalscheduledpaymentidpaymentdetails) - Get Payment Details
* [GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetails](docs/paymentdetails/README.md#getinternationalstandingordersinternationalstandingorderpaymentidpaymentdetails) - Get Payment Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
