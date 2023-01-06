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
    
    req := operations.VideointelligenceOperationsProjectsLocationsOperationsCancelRequest{
        Security: operations.VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams{
            Name: "in",
        },
        QueryParams: operations.VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "asperiores",
            Alt: "json",
            Callback: "doloremque",
            Fields: "est",
            Key: "dolor",
            OauthToken: "quia",
            PrettyPrint: false,
            QuotaUser: "perspiciatis",
            UploadType: "nemo",
            UploadProtocol: "magnam",
        },
    }
    
    res, err := s.Operations.VideointelligenceOperationsProjectsLocationsOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->