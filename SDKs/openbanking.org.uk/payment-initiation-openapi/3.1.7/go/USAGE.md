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