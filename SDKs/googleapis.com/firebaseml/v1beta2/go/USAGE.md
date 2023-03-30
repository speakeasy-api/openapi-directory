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

    req := operations.FirebasemlProjectsModelsCreateRequest{
        Security: operations.FirebasemlProjectsModelsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.FirebasemlProjectsModelsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.FirebasemlProjectsModelsCreateQueryParams{
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
        Request: &shared.ModelInput{
            DisplayName: "suscipit",
            Name: "iure",
            State: &shared.ModelState{
                Published: false,
                ValidationError: &shared.Status{
                    Code: 297534,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "delectus": "tempora",
                        },
                        map[string]interface{}{
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                        },
                        map[string]interface{}{
                            "excepturi": "nisi",
                            "recusandae": "temporibus",
                        },
                        map[string]interface{}{
                            "quis": "veritatis",
                        },
                    },
                    Message: "deserunt",
                },
            },
            Tags: []string{
                "ipsam",
            },
            TfliteModel: &shared.TfLiteModelInput{
                AutomlModel: "repellendus",
                GcsTfliteURI: "sapiente",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.FirebasemlProjectsModelsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->