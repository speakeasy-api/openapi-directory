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
            Authorization: "unde",
            XCustomerUserAgent: "deserunt",
            XFapiAuthDate: "porro",
            XFapiCustomerIPAddress: "nulla",
            XFapiInteractionID: "id",
            XIdempotencyKey: "vero",
            XJwsSignature: "perspiciatis",
        },
        Request: shared.OBWriteDomesticConsent4{
            Data: shared.OBWriteDomesticConsent4Data{
                Authorisation: &shared.OBWriteDomesticConsent4DataAuthorisation{
                    AuthorisationType: "Single",
                    CompletionDateTime: "2022-10-26T09:36:01.325Z",
                },
                Initiation: shared.OBWriteDomesticConsent4DataInitiation{
                    CreditorAccount: shared.OBWriteDomesticConsent4DataInitiationCreditorAccount{
                        Identification: "fuga",
                        Name: "facilis",
                        SchemeName: "eum",
                        SecondaryIdentification: "iusto",
                    },
                    CreditorPostalAddress: &shared.OBPostalAddress6{
                        AddressLine: []string{
                            "saepe",
                            "inventore",
                        },
                        AddressType: "Statement",
                        BuildingNumber: "enim",
                        Country: "Holy See (Vatican City State)",
                        CountrySubDivision: "voluptatum",
                        Department: "autem",
                        PostCode: "54539-8030",
                        StreetName: "est",
                        SubDepartment: "voluptatem",
                        TownName: "consequatur",
                    },
                    DebtorAccount: &shared.OBWriteDomesticConsent4DataInitiationDebtorAccount{
                        Identification: "fugiat",
                        Name: "a",
                        SchemeName: "omnis",
                        SecondaryIdentification: "eos",
                    },
                    EndToEndIdentification: "accusamus",
                    InstructedAmount: shared.OBWriteDomesticConsent4DataInitiationInstructedAmount{
                        Amount: "accusamus",
                        Currency: "reiciendis",
                    },
                    InstructionIdentification: "rem",
                    LocalInstrument: "quibusdam",
                    RemittanceInformation: &shared.OBWriteDomesticConsent4DataInitiationRemittanceInformation{
                        Reference: "et",
                        Unstructured: "praesentium",
                    },
                    SupplementaryData: map[string]interface{}{
                        "dolor": "soluta",
                        "sed": "quisquam",
                        "rerum": "culpa",
                    },
                },
                ReadRefundAccount: "No",
                SCASupportData: &shared.OBSCASupportData1{
                    AppliedAuthenticationApproach: "SCA",
                    ReferencePaymentOrderID: "rerum",
                    RequestedSCAExemptionType: "Parking",
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "odit",
                        "esse",
                        "rem",
                    },
                    BuildingNumber: "voluptatem",
                    Country: "Cocos (Keeling) Islands",
                    CountrySubDivision: "est",
                    PostCode: "42510-3616",
                    StreetName: "modi",
                    TownName: "et",
                },
                MerchantCategoryCode: "iure",
                MerchantCustomerIdentification: "earum",
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