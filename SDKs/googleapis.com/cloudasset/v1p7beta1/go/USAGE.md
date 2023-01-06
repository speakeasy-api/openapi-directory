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
    
    req := operations.CloudassetOperationsGetRequest{
        Security: operations.CloudassetOperationsGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudassetOperationsGetPathParams{
            Name: "accusantium",
        },
        QueryParams: operations.CloudassetOperationsGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "molestiae",
            Alt: "proto",
            Callback: "quos",
            Fields: "dolor",
            Key: "dolorem",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "nulla",
            UploadType: "natus",
            UploadProtocol: "quis",
        },
    }
    
    res, err := s.Operations.CloudassetOperationsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->