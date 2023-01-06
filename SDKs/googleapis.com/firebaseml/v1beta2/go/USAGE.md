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
            Parent: "autem",
        },
        QueryParams: operations.FirebasemlProjectsModelsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "ut",
            Alt: "json",
            Callback: "minus",
            Fields: "mollitia",
            Key: "minima",
            OauthToken: "consequatur",
            PrettyPrint: false,
            QuotaUser: "voluptate",
            UploadType: "deserunt",
            UploadProtocol: "laudantium",
        },
        Request: &shared.ModelInput{
            DisplayName: "sequi",
            Name: "quia",
            State: &shared.ModelState{
                Published: true,
                ValidationError: &shared.Status{
                    Code: 1195584967025216397,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "quae": "sint",
                            "culpa": "magni",
                        },
                        map[string]interface{}{
                            "eveniet": "et",
                            "qui": "fugit",
                        },
                    },
                    Message: "voluptas",
                },
            },
            Tags: []string{
                "occaecati",
                "quia",
            },
            TfliteModel: &shared.TfLiteModelInput{
                AutomlModel: "quia",
                GcsTfliteURI: "accusantium",
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