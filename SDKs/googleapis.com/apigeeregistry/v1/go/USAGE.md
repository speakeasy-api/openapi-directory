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
            Parent: "unde",
        },
        QueryParams: operations.ApigeeregistryProjectsLocationsApisCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            APIID: "id",
            Callback: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.APIInput{
            Annotations: map[string]string{
                "ullam": "saepe",
                "inventore": "sapiente",
            },
            Availability: "enim",
            Description: "eum",
            DisplayName: "voluptatum",
            Labels: map[string]string{
                "vel": "non",
                "deleniti": "similique",
                "reprehenderit": "molestiae",
                "quo": "quasi",
            },
            Name: "laboriosam",
            RecommendedDeployment: "dicta",
            RecommendedVersion: "est",
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