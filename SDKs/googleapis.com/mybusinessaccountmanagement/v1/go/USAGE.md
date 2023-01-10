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
    
    req := operations.MybusinessaccountmanagementAccountsCreateRequest{
        QueryParams: operations.MybusinessaccountmanagementAccountsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "atque",
            Alt: "proto",
            Callback: "nobis",
            Fields: "quod",
            Key: "ipsam",
            OauthToken: "quibusdam",
            PrettyPrint: false,
            QuotaUser: "itaque",
            UploadType: "quae",
            UploadProtocol: "aliquid",
        },
        Request: &shared.AccountInput{
            AccountName: "ut",
            Name: "magni",
            OrganizationInfo: &shared.OrganizationInfoInput{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "facilis",
                        "fugiat",
                    },
                    AdministrativeArea: "dolorem",
                    LanguageCode: "quas",
                    Locality: "sed",
                    Organization: "quo",
                    PostalCode: "cum",
                    Recipients: []string{
                        "culpa",
                        "omnis",
                    },
                    RegionCode: "sit",
                    Revision: 5851310603061245360,
                    SortingCode: "totam",
                    Sublocality: "magnam",
                },
            },
            PrimaryOwner: "culpa",
            Type: "USER_GROUP",
        },
    }
    
    res, err := s.Accounts.MybusinessaccountmanagementAccountsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->