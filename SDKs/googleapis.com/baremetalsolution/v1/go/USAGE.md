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
    
    req := operations.BaremetalsolutionOperationsCancelRequest{
        Security: operations.BaremetalsolutionOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BaremetalsolutionOperationsCancelPathParams{
            Name: "delectus",
        },
        QueryParams: operations.BaremetalsolutionOperationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "aut",
            Alt: "proto",
            Callback: "suscipit",
            Fields: "et",
            Key: "ipsam",
            OauthToken: "eos",
            PrettyPrint: false,
            QuotaUser: "qui",
            UploadType: "vel",
            UploadProtocol: "quo",
        },
        Request: map[string]interface{}{
            "eum": "id",
            "molestias": "inventore",
        },
    }
    
    res, err := s.Operations.BaremetalsolutionOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->