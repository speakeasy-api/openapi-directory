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
            Name: "sit",
        },
        QueryParams: operations.MlProjectsExplainQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleCloudMlV1ExplainRequest{
            HTTPBody: &shared.GoogleAPIHTTPBody{
                ContentType: "dicta",
                Data: "debitis",
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "ut": "dolorem",
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.MlProjectsExplain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAPIHTTPBody != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->