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
    
    req := operations.IapProjectsBrandsCreateRequest{
        Security: operations.IapProjectsBrandsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.IapProjectsBrandsCreatePathParams{
            Parent: "qui",
        },
        QueryParams: operations.IapProjectsBrandsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "autem",
            Alt: "proto",
            Callback: "alias",
            Fields: "quaerat",
            Key: "qui",
            OauthToken: "consequuntur",
            PrettyPrint: true,
            QuotaUser: "magni",
            UploadType: "et",
            UploadProtocol: "et",
        },
        Request: &shared.BrandInput{
            ApplicationTitle: "saepe",
            SupportEmail: "ratione",
        },
    }
    
    res, err := s.Projects.IapProjectsBrandsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Brand != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->