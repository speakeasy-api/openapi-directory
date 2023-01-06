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
    
    req := operations.MybusinessAccountsCreateRequest{
        QueryParams: operations.MybusinessAccountsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "aliquid",
            Alt: "proto",
            Callback: "quaerat",
            Fields: "sed",
            Key: "sint",
            OauthToken: "sed",
            PrettyPrint: false,
            PrimaryOwner: "vel",
            QuotaUser: "debitis",
            UploadType: "neque",
            UploadProtocol: "inventore",
        },
        Request: &shared.Account{
            AccountName: "quasi",
            AccountNumber: "labore",
            Name: "dolores",
            OrganizationInfo: &shared.OrganizationInfo{
                PhoneNumber: "nobis",
                PostalAddress: &shared.PostalAddress{
                    AddressLines: []string{
                        "eaque",
                    },
                    AdministrativeArea: "quia",
                    LanguageCode: "id",
                    Locality: "cupiditate",
                    Organization: "iste",
                    PostalCode: "pariatur",
                    Recipients: []string{
                        "quia",
                        "ipsam",
                        "atque",
                    },
                    RegionCode: "dolorem",
                    Revision: 336704244518395768,
                    SortingCode: "recusandae",
                    Sublocality: "sit",
                },
                RegisteredDomain: "est",
            },
            PermissionLevel: "PERMISSION_LEVEL_UNSPECIFIED",
            Role: "CO_OWNER",
            State: &shared.AccountState{
                Status: "ACCOUNT_STATUS_UNSPECIFIED",
            },
            Type: "ORGANIZATION",
        },
    }
    
    res, err := s.Accounts.MybusinessAccountsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->