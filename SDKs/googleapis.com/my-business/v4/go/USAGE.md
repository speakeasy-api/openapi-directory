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
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            PrimaryOwner: "illum",
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.Account{
            AccountName: "suscipit",
            AccountNumber: "iure",
            Name: "magnam",
            OrganizationInfo: &shared.OrganizationInfo{
                PhoneNumber: "debitis",
                PostalAddress: &shared.PostalAddress{
                    AddressLines: []string{
                        "delectus",
                    },
                    AdministrativeArea: "tempora",
                    LanguageCode: "suscipit",
                    Locality: "molestiae",
                    Organization: "minus",
                    PostalCode: "54539-8030",
                    Recipients: []string{
                        "perferendis",
                        "ipsam",
                        "repellendus",
                    },
                    RegionCode: "sapiente",
                    Revision: 778157,
                    SortingCode: "odit",
                    Sublocality: "at",
                },
                RegisteredDomain: "at",
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