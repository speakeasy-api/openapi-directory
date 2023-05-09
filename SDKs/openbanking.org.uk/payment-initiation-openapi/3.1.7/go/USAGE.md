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