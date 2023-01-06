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
            Parent: "quia",
        },
        QueryParams: operations.RunNamespacesAuthorizeddomainsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "quia",
            Alt: "media",
            Callback: "qui",
            Fields: "aut",
            Key: "rerum",
            OauthToken: "consectetur",
            PageSize: 1969263363825528541,
            PageToken: "laudantium",
            PrettyPrint: false,
            QuotaUser: "commodi",
            UploadType: "et",
            UploadProtocol: "et",
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