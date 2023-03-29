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
            Parent: "unde",
        },
        QueryParams: operations.FirebasemlProjectsModelsCreateQueryParams{
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
        Request: &shared.ModelInput{
            DisplayName: "eum",
            Name: "iusto",
            State: &shared.ModelState{
                Published: false,
                ValidationError: &shared.Status{
                    Code: 297534,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "sapiente": "enim",
                        },
                        map[string]interface{}{
                            "voluptatum": "autem",
                            "vel": "non",
                        },
                        map[string]interface{}{
                            "similique": "reprehenderit",
                            "molestiae": "quo",
                        },
                        map[string]interface{}{
                            "laboriosam": "dicta",
                        },
                    },
                    Message: "est",
                },
            },
            Tags: []string{
                "consequatur",
            },
            TfliteModel: &shared.TfLiteModelInput{
                AutomlModel: "fugiat",
                GcsTfliteURI: "a",
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