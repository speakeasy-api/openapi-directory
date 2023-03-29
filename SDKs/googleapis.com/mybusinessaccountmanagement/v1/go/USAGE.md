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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.AccountInput{
            AccountName: "facilis",
            Name: "eum",
            OrganizationInfo: &shared.OrganizationInfoInput{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "ullam",
                        "saepe",
                    },
                    AdministrativeArea: "inventore",
                    LanguageCode: "sapiente",
                    Locality: "enim",
                    Organization: "eum",
                    PostalCode: "78545",
                    Recipients: []string{
                        "molestiae",
                        "quo",
                    },
                    RegionCode: "quasi",
                    Revision: 337396,
                    SortingCode: "dicta",
                    Sublocality: "est",
                },
            },
            PrimaryOwner: "voluptatem",
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