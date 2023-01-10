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
            Parent: "et",
        },
        QueryParams: operations.IapProjectsBrandsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "voluptatem",
            Alt: "json",
            Callback: "quibusdam",
            Fields: "velit",
            Key: "rerum",
            OauthToken: "blanditiis",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "accusamus",
            UploadProtocol: "occaecati",
        },
        Request: &shared.BrandInput{
            ApplicationTitle: "accusamus",
            SupportEmail: "maiores",
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