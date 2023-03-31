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

    req := operations.MybusinessaccountmanagementAccountsCreateRequest{
        DollarXgafv: "2",
        AccountInput: &shared.AccountInput{
            AccountName: "provident",
            Name: "distinctio",
            OrganizationInfo: &shared.OrganizationInfoInput{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "unde",
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                    AdministrativeArea: "vel",
                    LanguageCode: "error",
                    Locality: "deserunt",
                    Organization: "suscipit",
                    PostalCode: "28092",
                    Recipients: []string{
                        "molestiae",
                        "minus",
                    },
                    RegionCode: "placeat",
                    Revision: 528895,
                    SortingCode: "iusto",
                    Sublocality: "excepturi",
                },
            },
            PrimaryOwner: "nisi",
            Type: "ORGANIZATION",
        },
        AccessToken: "temporibus",
        Alt: "json",
        Callback: "quis",
        Fields: "veritatis",
        Key: "deserunt",
        OauthToken: "perferendis",
        PrettyPrint: false,
        QuotaUser: "ipsam",
        UploadType: "repellendus",
        UploadProtocol: "sapiente",
    }

    ctx := context.Background()
    res, err := s.Accounts.MybusinessaccountmanagementAccountsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->