<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebasemlProjectsModelsCreate(ctx, operations.FirebasemlProjectsModelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ModelInput: &shared.ModelInput{
            DisplayName: sdk.String("provident"),
            Name: sdk.String("Ellis Mitchell"),
            State: &shared.ModelState{
                Published: sdk.Bool(false),
                ValidationError: &shared.Status{
                    Code: sdk.Int(847252),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "deserunt": "suscipit",
                            "iure": "magnam",
                            "debitis": "ipsa",
                        },
                        map[string]interface{}{
                            "tempora": "suscipit",
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                            "iusto": "excepturi",
                        },
                    },
                    Message: sdk.String("nisi"),
                },
            },
            Tags: []string{
                "temporibus",
                "ab",
                "quis",
                "veritatis",
            },
            TfliteModel: &shared.TfLiteModelInput{
                AutomlModel: sdk.String("deserunt"),
                GcsTfliteURI: sdk.String("perferendis"),
            },
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("quo"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("at"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("quod"),
    }, operations.FirebasemlProjectsModelsCreateSecurity{
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