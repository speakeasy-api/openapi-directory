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

    req := operations.MybusinessAccountsCreateRequest{
        QueryParams: operations.MybusinessAccountsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            PrimaryOwner: "nulla",
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.Account{
            AccountName: "eum",
            AccountNumber: "iusto",
            Name: "ullam",
            OrganizationInfo: &shared.OrganizationInfo{
                PhoneNumber: "saepe",
                PostalAddress: &shared.PostalAddress{
                    AddressLines: []string{
                        "sapiente",
                    },
                    AdministrativeArea: "enim",
                    LanguageCode: "eum",
                    Locality: "voluptatum",
                    Organization: "autem",
                    PostalCode: "54539-8030",
                    Recipients: []string{
                        "voluptatem",
                        "consequatur",
                        "fugiat",
                    },
                    RegionCode: "a",
                    Revision: 778157,
                    SortingCode: "eos",
                    Sublocality: "accusamus",
                },
                RegisteredDomain: "accusamus",
            },
            PermissionLevel: "MEMBER_LEVEL",
            Role: "CO_OWNER",
            State: &shared.AccountState{
                Status: "VERIFICATION_REQUESTED",
            },
            Type: "ORGANIZATION",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.MybusinessAccountsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->