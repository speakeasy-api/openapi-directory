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

    req := operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest{
        Security: operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity{
            Option1: &operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetPathParams{
            Parent: "unde",
        },
        QueryParams: operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            Names: []string{
                "nihil",
                "fuga",
                "facilis",
                "eum",
            },
            OauthToken: "iusto",
            PrettyPrint: false,
            QuotaUser: "ullam",
            UploadType: "saepe",
            UploadProtocol: "inventore",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.FirebaseappcheckProjectsAppsAppAttestConfigBatchGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->