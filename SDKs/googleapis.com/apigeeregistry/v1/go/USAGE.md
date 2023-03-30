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

    req := operations.ApigeeregistryProjectsLocationsApisCreateRequest{
        Security: operations.ApigeeregistryProjectsLocationsApisCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ApigeeregistryProjectsLocationsApisCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.ApigeeregistryProjectsLocationsApisCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            APIID: "unde",
            Callback: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.APIInput{
            Annotations: map[string]string{
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            Availability: "tempora",
            Description: "suscipit",
            DisplayName: "molestiae",
            Labels: map[string]string{
                "placeat": "voluptatum",
                "iusto": "excepturi",
                "nisi": "recusandae",
                "temporibus": "ab",
            },
            Name: "quis",
            RecommendedDeployment: "veritatis",
            RecommendedVersion: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->