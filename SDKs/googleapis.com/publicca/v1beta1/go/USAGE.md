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

    req := operations.PubliccaProjectsLocationsExternalAccountKeysCreateRequest{
        Security: operations.PubliccaProjectsLocationsExternalAccountKeysCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.PubliccaProjectsLocationsExternalAccountKeysCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.PubliccaProjectsLocationsExternalAccountKeysCreateQueryParams{
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
    res, err := s.Projects.PubliccaProjectsLocationsExternalAccountKeysCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalAccountKey != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->