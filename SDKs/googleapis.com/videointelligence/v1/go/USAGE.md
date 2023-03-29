<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            Name: "unde",
        },
        QueryParams: operations.VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.Operations.VideointelligenceOperationsProjectsLocationsOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->