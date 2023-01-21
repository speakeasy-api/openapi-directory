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
            Parent: "sit",
        },
        QueryParams: operations.FirebasemlProjectsModelsCreateQueryParams{
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
        Request: &shared.ModelInput{
            DisplayName: "dicta",
            Name: "debitis",
            State: &shared.ModelState{
                Published: true,
                ValidationError: &shared.Status{
                    Code: 2339563716805116249,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "et": "voluptate",
                            "iste": "vitae",
                            "totam": "dolores",
                        },
                        map[string]interface{}{
                            "debitis": "vel",
                            "odio": "dolore",
                            "id": "aspernatur",
                        },
                        map[string]interface{}{
                            "totam": "commodi",
                            "quis": "est",
                            "aut": "odit",
                        },
                    },
                    Message: "non",
                },
            },
            Tags: []string{
                "omnis",
            },
            TfliteModel: &shared.TfLiteModelInput{
                AutomlModel: "aut",
                GcsTfliteURI: "illo",
            },
        },
    }
    
    res, err := s.Projects.FirebasemlProjectsModelsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->