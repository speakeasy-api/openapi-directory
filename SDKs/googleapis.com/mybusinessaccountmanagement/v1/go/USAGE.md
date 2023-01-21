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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.AccountInput{
            AccountName: "rerum",
            Name: "dicta",
            OrganizationInfo: &shared.OrganizationInfoInput{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "voluptatum",
                    },
                    AdministrativeArea: "et",
                    LanguageCode: "ut",
                    Locality: "dolorem",
                    Organization: "et",
                    PostalCode: "voluptate",
                    Recipients: []string{
                        "vitae",
                        "totam",
                        "dolores",
                    },
                    RegionCode: "illum",
                    Revision: 6392442863481646880,
                    SortingCode: "vel",
                    Sublocality: "odio",
                },
            },
            PrimaryOwner: "dolore",
            Type: "LOCATION_GROUP",
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