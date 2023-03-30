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

    req := operations.MlProjectsExplainRequest{
        Security: operations.MlProjectsExplainSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.MlProjectsExplainPathParams{
            Name: "corrupti",
        },
        QueryParams: operations.MlProjectsExplainQueryParams{
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
        Request: &shared.GoogleCloudMlV1ExplainRequest{
            HTTPBody: &shared.GoogleAPIHTTPBody{
                ContentType: "suscipit",
                Data: "iure",
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "ipsa": "delectus",
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    map[string]interface{}{
                        "excepturi": "nisi",
                        "recusandae": "temporibus",
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.MlProjectsExplain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAPIHTTPBody != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->