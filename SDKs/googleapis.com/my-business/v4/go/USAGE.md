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
        DollarXgafv: "2",
        Account: &shared.Account{
            AccountName: "provident",
            AccountNumber: "distinctio",
            Name: "quibusdam",
            OrganizationInfo: &shared.OrganizationInfo{
                PhoneNumber: "unde",
                PostalAddress: &shared.PostalAddress{
                    AddressLines: []string{
                        "corrupti",
                        "illum",
                        "vel",
                        "error",
                    },
                    AdministrativeArea: "deserunt",
                    LanguageCode: "suscipit",
                    Locality: "iure",
                    Organization: "magnam",
                    PostalCode: "09234-7854",
                    Recipients: []string{
                        "nisi",
                        "recusandae",
                        "temporibus",
                    },
                    RegionCode: "ab",
                    Revision: 337396,
                    SortingCode: "veritatis",
                    Sublocality: "deserunt",
                },
                RegisteredDomain: "perferendis",
            },
            PermissionLevel: "OWNER_LEVEL",
            Role: "COMMUNITY_MANAGER",
            State: &shared.AccountState{
                Status: "VERIFICATION_REQUESTED",
            },
            Type: "USER_GROUP",
        },
        AccessToken: "odit",
        Alt: "proto",
        Callback: "at",
        Fields: "maiores",
        Key: "molestiae",
        OauthToken: "quod",
        PrettyPrint: false,
        PrimaryOwner: "quod",
        QuotaUser: "esse",
        UploadType: "totam",
        UploadProtocol: "porro",
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