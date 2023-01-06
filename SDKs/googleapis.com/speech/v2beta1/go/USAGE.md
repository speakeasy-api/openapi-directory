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
    
    req := operations.SpeechProjectsLocationsOperationsGetRequest{
        Security: operations.SpeechProjectsLocationsOperationsGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.SpeechProjectsLocationsOperationsGetPathParams{
            Name: "inventore",
        },
        QueryParams: operations.SpeechProjectsLocationsOperationsGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "modi",
            Alt: "proto",
            Callback: "minus",
            Fields: "aliquam",
            Key: "totam",
            OauthToken: "aut",
            PrettyPrint: false,
            QuotaUser: "earum",
            UploadType: "error",
            UploadProtocol: "et",
        },
    }
    
    res, err := s.Projects.SpeechProjectsLocationsOperationsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->