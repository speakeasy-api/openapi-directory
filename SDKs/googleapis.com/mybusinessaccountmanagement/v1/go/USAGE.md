<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.MybusinessaccountmanagementAccountsCreate(ctx, operations.MybusinessaccountmanagementAccountsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountInput: &shared.AccountInput{
            AccountName: sdk.String("provident"),
            Name: sdk.String("Ellis Mitchell"),
            OrganizationInfo: &shared.OrganizationInfoInput{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "vel",
                        "error",
                        "deserunt",
                        "suscipit",
                    },
                    AdministrativeArea: sdk.String("iure"),
                    LanguageCode: sdk.String("magnam"),
                    Locality: sdk.String("debitis"),
                    Organization: sdk.String("ipsa"),
                    PostalCode: sdk.String("23478-5453"),
                    Recipients: []string{
                        "temporibus",
                        "ab",
                        "quis",
                        "veritatis",
                    },
                    RegionCode: sdk.String("deserunt"),
                    Revision: sdk.Int(20218),
                    SortingCode: sdk.String("ipsam"),
                    Sublocality: sdk.String("repellendus"),
                },
            },
            PrimaryOwner: sdk.String("sapiente"),
            Type: shared.AccountTypeEnumUserGroup.ToPointer(),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->