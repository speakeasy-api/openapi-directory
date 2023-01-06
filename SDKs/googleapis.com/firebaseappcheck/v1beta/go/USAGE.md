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
            Parent: "id",
        },
        QueryParams: operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "distinctio",
            Alt: "media",
            Callback: "quia",
            Fields: "saepe",
            Key: "quis",
            Names: []string{
                "iste",
            },
            OauthToken: "iste",
            PrettyPrint: true,
            QuotaUser: "blanditiis",
            UploadType: "ex",
            UploadProtocol: "ea",
        },
    }
    
    res, err := s.Projects.FirebaseappcheckProjectsAppsAppAttestConfigBatchGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->