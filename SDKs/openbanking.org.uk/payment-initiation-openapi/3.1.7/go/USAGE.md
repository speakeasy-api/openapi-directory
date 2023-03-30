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