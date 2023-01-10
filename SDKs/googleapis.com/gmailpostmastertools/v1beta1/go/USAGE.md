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
            DollarXgafv: "1",
            AccessToken: "modi",
            Alt: "media",
            Callback: "et",
            Fields: "officia",
            Key: "aperiam",
            OauthToken: "inventore",
            PageSize: 1881660267005961452,
            PageToken: "quia",
            PrettyPrint: true,
            QuotaUser: "vel",
            UploadType: "repellat",
            UploadProtocol: "eum",
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