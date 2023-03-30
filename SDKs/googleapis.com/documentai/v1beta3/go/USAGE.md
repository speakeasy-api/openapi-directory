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

    req := operations.DocumentaiProjectsLocationsFetchProcessorTypesRequest{
        Security: operations.DocumentaiProjectsLocationsFetchProcessorTypesSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DocumentaiProjectsLocationsFetchProcessorTypesPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.DocumentaiProjectsLocationsFetchProcessorTypesQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DocumentaiProjectsLocationsFetchProcessorTypes(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->