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
    
    req := operations.RunNamespacesAuthorizeddomainsListRequest{
        Security: operations.RunNamespacesAuthorizeddomainsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RunNamespacesAuthorizeddomainsListPathParams{
            Parent: "iusto",
        },
        QueryParams: operations.RunNamespacesAuthorizeddomainsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "aliquam",
            Alt: "media",
            Callback: "veniam",
            Fields: "corrupti",
            Key: "numquam",
            OauthToken: "corporis",
            PageSize: 3474863021808018737,
            PageToken: "sint",
            PrettyPrint: false,
            QuotaUser: "in",
            UploadType: "dolorum",
            UploadProtocol: "maiores",
        },
    }
    
    res, err := s.Namespaces.RunNamespacesAuthorizeddomainsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorizedDomainsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->