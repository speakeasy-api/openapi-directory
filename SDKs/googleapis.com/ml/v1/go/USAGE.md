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
        DollarXgafv: "2",
        GoogleCloudMlV1ExplainRequest: &shared.GoogleCloudMlV1ExplainRequest{
            HTTPBody: &shared.GoogleAPIHTTPBody{
                ContentType: "provident",
                Data: "distinctio",
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                    map[string]interface{}{
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    map[string]interface{}{
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                        "iusto": "excepturi",
                    },
                    map[string]interface{}{
                        "recusandae": "temporibus",
                        "ab": "quis",
                    },
                },
            },
        },
        AccessToken: "veritatis",
        Alt: "media",
        Callback: "perferendis",
        Fields: "ipsam",
        Key: "repellendus",
        Name: "sapiente",
        OauthToken: "quo",
        PrettyPrint: false,
        QuotaUser: "odit",
        UploadType: "at",
        UploadProtocol: "at",
    }

    ctx := context.Background()
    res, err := s.Projects.MlProjectsExplain(ctx, req, operations.MlProjectsExplainSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAPIHTTPBody != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->