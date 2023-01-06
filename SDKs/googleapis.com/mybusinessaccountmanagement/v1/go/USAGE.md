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
            DollarXgafv: "2",
            AccessToken: "esse",
            Alt: "json",
            Callback: "consequatur",
            Fields: "molestiae",
            Key: "id",
            OauthToken: "repudiandae",
            PrettyPrint: false,
            QuotaUser: "ipsam",
            UploadType: "pariatur",
            UploadProtocol: "qui",
        },
        Request: &shared.AccountInput{
            AccountName: "impedit",
            Name: "consequatur",
            OrganizationInfo: &shared.OrganizationInfoInput{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "dolores",
                        "molestias",
                        "expedita",
                    },
                    AdministrativeArea: "et",
                    LanguageCode: "laboriosam",
                    Locality: "neque",
                    Organization: "voluptatibus",
                    PostalCode: "velit",
                    Recipients: []string{
                        "cumque",
                    },
                    RegionCode: "provident",
                    Revision: 6596552905933424119,
                    SortingCode: "quia",
                    Sublocality: "vel",
                },
            },
            PrimaryOwner: "aperiam",
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