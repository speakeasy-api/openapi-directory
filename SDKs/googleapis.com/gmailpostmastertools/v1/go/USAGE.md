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
            AccessToken: "est",
            Alt: "proto",
            Callback: "consectetur",
            Fields: "id",
            Key: "ab",
            OauthToken: "ab",
            PageSize: 1046194056430361934,
            PageToken: "eum",
            PrettyPrint: true,
            QuotaUser: "ut",
            UploadType: "aut",
            UploadProtocol: "tempore",
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