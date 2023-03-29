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
            Parent: "unde",
        },
        QueryParams: operations.RunNamespacesAuthorizeddomainsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PageSize: 423655,
            PageToken: "fuga",
            PrettyPrint: false,
            QuotaUser: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.Namespaces.RunNamespacesAuthorizeddomainsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorizedDomainsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->