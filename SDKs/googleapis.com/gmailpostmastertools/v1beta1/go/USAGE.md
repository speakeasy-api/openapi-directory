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
    
    req := operations.GmailpostmastertoolsDomainsListRequest{
        Security: operations.GmailpostmastertoolsDomainsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.GmailpostmastertoolsDomainsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "ut",
            Alt: "proto",
            Callback: "expedita",
            Fields: "aliquam",
            Key: "omnis",
            OauthToken: "inventore",
            PageSize: 3981100250018040446,
            PageToken: "provident",
            PrettyPrint: false,
            QuotaUser: "in",
            UploadType: "aperiam",
            UploadProtocol: "sint",
        },
    }
    
    res, err := s.Domains.GmailpostmastertoolsDomainsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->