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
            Parent: "sit",
        },
        QueryParams: operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            Names: []string{
                "fugit",
                "et",
                "nihil",
            },
            OauthToken: "rerum",
            PrettyPrint: false,
            QuotaUser: "debitis",
            UploadType: "voluptatum",
            UploadProtocol: "et",
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