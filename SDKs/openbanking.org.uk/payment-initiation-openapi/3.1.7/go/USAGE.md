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
                        CompletionDateTime: "2021-10-22T15:23:01Z",
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
                        CompletionDateTime: "2001-09-18T13:53:52Z",
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