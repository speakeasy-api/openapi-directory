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

    req := operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest{
        Security: operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity{
            Option1: &operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams{
            Name: "unde",
        },
        QueryParams: operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams{
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
        Request: map[string]interface{}{
            "iusto": "ullam",
            "saepe": "inventore",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckValidCredsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->