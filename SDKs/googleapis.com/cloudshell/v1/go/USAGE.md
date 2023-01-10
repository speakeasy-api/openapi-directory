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
    
    req := operations.CloudshellOperationsCancelRequest{
        Security: operations.CloudshellOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudshellOperationsCancelPathParams{
            Name: "sed",
        },
        QueryParams: operations.CloudshellOperationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "consequatur",
            Alt: "json",
            Callback: "eos",
            Fields: "quibusdam",
            Key: "eos",
            OauthToken: "hic",
            PrettyPrint: true,
            QuotaUser: "voluptas",
            UploadType: "repellendus",
            UploadProtocol: "non",
        },
        Request: map[string]interface{}{
            "dolor": "sit",
            "sint": "nemo",
            "necessitatibus": "ducimus",
        },
    }
    
    res, err := s.Operations.CloudshellOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->