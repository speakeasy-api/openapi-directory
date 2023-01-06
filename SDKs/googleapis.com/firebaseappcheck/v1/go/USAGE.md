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
            Parent: "beatae",
        },
        QueryParams: operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "debitis",
            Alt: "media",
            Callback: "voluptas",
            Fields: "voluptatem",
            Key: "omnis",
            Names: []string{
                "commodi",
                "similique",
                "sed",
            },
            OauthToken: "fugiat",
            PrettyPrint: false,
            QuotaUser: "molestiae",
            UploadType: "quos",
            UploadProtocol: "eum",
        },
    }
    
    res, err := s.Projects.FirebaseappcheckProjectsAppsAppAttestConfigBatchGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->