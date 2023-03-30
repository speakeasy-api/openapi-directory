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
                    CompletionDateTime: "2022-05-18T09:34:54.894Z",
                },
                Initiation: shared.OBWriteDomesticConsent4DataInitiation{
                    CreditorAccount: shared.OBWriteDomesticConsent4DataInitiationCreditorAccount{
                        Identification: "deserunt",
                        Name: "suscipit",
                        SchemeName: "iure",
                        SecondaryIdentification: "magnam",
                    },
                    CreditorPostalAddress: &shared.OBPostalAddress6{
                        AddressLine: []string{
                            "ipsa",
                            "delectus",
                            "tempora",
                            "suscipit",
                        },
                        AddressType: "MailTo",
                        BuildingNumber: "minus",
                        Country: "Slovenia",
                        CountrySubDivision: "voluptatum",
                        Department: "iusto",
                        PostCode: "39803-0603",
                        StreetName: "repellendus",
                        SubDepartment: "sapiente",
                        TownName: "quo",
                    },
                    DebtorAccount: &shared.OBWriteDomesticConsent4DataInitiationDebtorAccount{
                        Identification: "odit",
                        Name: "at",
                        SchemeName: "at",
                        SecondaryIdentification: "maiores",
                    },
                    EndToEndIdentification: "molestiae",
                    InstructedAmount: shared.OBWriteDomesticConsent4DataInitiationInstructedAmount{
                        Amount: "quod",
                        Currency: "quod",
                    },
                    InstructionIdentification: "esse",
                    LocalInstrument: "totam",
                    RemittanceInformation: &shared.OBWriteDomesticConsent4DataInitiationRemittanceInformation{
                        Reference: "porro",
                        Unstructured: "dolorum",
                    },
                    SupplementaryData: map[string]interface{}{
                        "nam": "officia",
                    },
                },
                ReadRefundAccount: "Yes",
                SCASupportData: &shared.OBSCASupportData1{
                    AppliedAuthenticationApproach: "CA",
                    ReferencePaymentOrderID: "deleniti",
                    RequestedSCAExemptionType: "PartyToParty",
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