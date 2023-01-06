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
    
    req := operations.MetastoreOperationsCancelRequest{
        Security: operations.MetastoreOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.MetastoreOperationsCancelPathParams{
            Name: "magnam",
        },
        QueryParams: operations.MetastoreOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "harum",
            Alt: "json",
            Callback: "id",
            Fields: "molestias",
            Key: "qui",
            OauthToken: "est",
            PrettyPrint: false,
            QuotaUser: "neque",
            UploadType: "officia",
            UploadProtocol: "est",
        },
        Request: map[string]interface{}{
            "atque": "facilis",
            "dolor": "ad",
            "est": "inventore",
        },
    }
    
    res, err := s.Operations.MetastoreOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->