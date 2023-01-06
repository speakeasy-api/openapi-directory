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