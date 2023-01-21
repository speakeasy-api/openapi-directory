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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            PrimaryOwner: "fugit",
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.Account{
            AccountName: "dicta",
            AccountNumber: "debitis",
            Name: "voluptatum",
            OrganizationInfo: &shared.OrganizationInfo{
                PhoneNumber: "et",
                PostalAddress: &shared.PostalAddress{
                    AddressLines: []string{
                        "dolorem",
                        "et",
                        "voluptate",
                    },
                    AdministrativeArea: "iste",
                    LanguageCode: "vitae",
                    Locality: "totam",
                    Organization: "dolores",
                    PostalCode: "illum",
                    Recipients: []string{
                        "vel",
                    },
                    RegionCode: "odio",
                    Revision: 6303220950515014660,
                    SortingCode: "id",
                    Sublocality: "aspernatur",
                },
                RegisteredDomain: "accusantium",
            },
            PermissionLevel: "MEMBER_LEVEL",
            Role: "COMMUNITY_MANAGER",
            State: &shared.AccountState{
                Status: "UNVERIFIED",
            },
            Type: "USER_GROUP",
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