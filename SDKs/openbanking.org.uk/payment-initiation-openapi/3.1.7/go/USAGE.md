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