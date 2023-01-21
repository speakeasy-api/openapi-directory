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
            Parent: "sit",
        },
        QueryParams: operations.IapProjectsBrandsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.BrandInput{
            ApplicationTitle: "dicta",
            SupportEmail: "debitis",
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