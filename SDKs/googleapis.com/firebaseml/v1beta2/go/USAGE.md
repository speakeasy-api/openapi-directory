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
            Parent: "laudantium",
        },
        QueryParams: operations.FirebasemlProjectsModelsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "a",
            Alt: "media",
            Callback: "dolor",
            Fields: "et",
            Key: "amet",
            OauthToken: "exercitationem",
            PrettyPrint: false,
            QuotaUser: "aut",
            UploadType: "corrupti",
            UploadProtocol: "consequuntur",
        },
        Request: &shared.ModelInput{
            DisplayName: "repellat",
            Name: "consequatur",
            State: &shared.ModelState{
                Published: true,
                ValidationError: &shared.Status{
                    Code: 6350045115577120987,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "accusantium": "quibusdam",
                            "et": "recusandae",
                            "voluptatibus": "consequatur",
                        },
                        map[string]interface{}{
                            "consequatur": "sit",
                            "amet": "quia",
                            "sed": "ut",
                        },
                    },
                    Message: "dolorem",
                },
            },
            Tags: []string{
                "tempore",
                "et",
            },
            TfliteModel: &shared.TfLiteModelInput{
                AutomlModel: "aut",
                GcsTfliteURI: "iure",
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