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
        DollarXgafv: "2",
        ModelInput: &shared.ModelInput{
            DisplayName: "provident",
            Name: "distinctio",
            State: &shared.ModelState{
                Published: false,
                ValidationError: &shared.Status{
                    Code: 844266,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "corrupti": "illum",
                            "vel": "error",
                            "deserunt": "suscipit",
                            "iure": "magnam",
                        },
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
                    Message: "ab",
                },
            },
            Tags: []string{
                "veritatis",
                "deserunt",
            },
            TfliteModel: &shared.TfLiteModelInput{
                AutomlModel: "perferendis",
                GcsTfliteURI: "ipsam",
            },
        },
        AccessToken: "repellendus",
        Alt: "proto",
        Callback: "quo",
        Fields: "odit",
        Key: "at",
        OauthToken: "at",
        Parent: "maiores",
        PrettyPrint: false,
        QuotaUser: "molestiae",
        UploadType: "quod",
        UploadProtocol: "quod",
    }

    ctx := context.Background()
    res, err := s.Projects.FirebasemlProjectsModelsCreate(ctx, req, operations.FirebasemlProjectsModelsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->