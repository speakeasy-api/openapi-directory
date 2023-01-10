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
            Name: "nulla",
        },
        QueryParams: operations.BaremetalsolutionOperationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "eligendi",
            Alt: "json",
            Callback: "rerum",
            Fields: "atque",
            Key: "voluptatem",
            OauthToken: "dolor",
            PrettyPrint: true,
            QuotaUser: "magni",
            UploadType: "exercitationem",
            UploadProtocol: "provident",
        },
        Request: map[string]interface{}{
            "similique": "ipsam",
            "quia": "voluptatum",
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