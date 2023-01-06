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
    
    req := operations.FirebasemlOperationsCancelRequest{
        Security: operations.FirebasemlOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.FirebasemlOperationsCancelPathParams{
            Name: "et",
        },
        QueryParams: operations.FirebasemlOperationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "similique",
            Alt: "proto",
            Callback: "et",
            Fields: "exercitationem",
            Key: "qui",
            OauthToken: "laudantium",
            PrettyPrint: true,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "recusandae",
        },
        Request: map[string]interface{}{
            "ut": "culpa",
            "quo": "est",
            "alias": "et",
        },
    }
    
    res, err := s.Operations.FirebasemlOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->