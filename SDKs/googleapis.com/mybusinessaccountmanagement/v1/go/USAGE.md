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
        QueryParams: operations.MybusinessaccountmanagementAccountsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.AccountInput{
            AccountName: "deserunt",
            Name: "suscipit",
            OrganizationInfo: &shared.OrganizationInfoInput{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "magnam",
                        "debitis",
                    },
                    AdministrativeArea: "ipsa",
                    LanguageCode: "delectus",
                    Locality: "tempora",
                    Organization: "suscipit",
                    PostalCode: "78545",
                    Recipients: []string{
                        "recusandae",
                        "temporibus",
                    },
                    RegionCode: "ab",
                    Revision: 337396,
                    SortingCode: "veritatis",
                    Sublocality: "deserunt",
                },
            },
            PrimaryOwner: "perferendis",
            Type: "PERSONAL",
        },
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