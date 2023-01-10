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
    
    req := operations.CloudbuildProjectsLocationsOperationsCancelRequest{
        Security: operations.CloudbuildProjectsLocationsOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudbuildProjectsLocationsOperationsCancelPathParams{
            Name: "velit",
        },
        QueryParams: operations.CloudbuildProjectsLocationsOperationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "officia",
            Alt: "proto",
            Callback: "est",
            Fields: "cum",
            Key: "et",
            OauthToken: "ea",
            PrettyPrint: true,
            QuotaUser: "molestias",
            UploadType: "repellendus",
            UploadProtocol: "in",
        },
        Request: map[string]interface{}{
            "quidem": "nihil",
            "corporis": "odio",
        },
    }
    
    res, err := s.Projects.CloudbuildProjectsLocationsOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->