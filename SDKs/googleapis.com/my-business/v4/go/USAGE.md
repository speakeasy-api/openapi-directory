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
            DollarXgafv: "1",
            AccessToken: "quas",
            Alt: "json",
            Callback: "quasi",
            Fields: "modi",
            Key: "blanditiis",
            OauthToken: "hic",
            PrettyPrint: true,
            PrimaryOwner: "perferendis",
            QuotaUser: "voluptatem",
            UploadType: "quia",
            UploadProtocol: "animi",
        },
        Request: &shared.Account{
            AccountName: "ea",
            AccountNumber: "velit",
            Name: "ratione",
            OrganizationInfo: &shared.OrganizationInfo{
                PhoneNumber: "et",
                PostalAddress: &shared.PostalAddress{
                    AddressLines: []string{
                        "repellendus",
                        "enim",
                        "veritatis",
                    },
                    AdministrativeArea: "quidem",
                    LanguageCode: "ut",
                    Locality: "porro",
                    Organization: "voluptatem",
                    PostalCode: "saepe",
                    Recipients: []string{
                        "esse",
                    },
                    RegionCode: "quibusdam",
                    Revision: 5367062260347718474,
                    SortingCode: "deleniti",
                    Sublocality: "debitis",
                },
                RegisteredDomain: "assumenda",
            },
            PermissionLevel: "PERMISSION_LEVEL_UNSPECIFIED",
            Role: "COMMUNITY_MANAGER",
            State: &shared.AccountState{
                Status: "VERIFICATION_REQUESTED",
            },
            Type: "PERSONAL",
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