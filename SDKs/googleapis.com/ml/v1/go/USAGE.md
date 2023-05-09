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
    res, err := s.Projects.MlProjectsExplain(ctx, operations.MlProjectsExplainRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudMlV1ExplainRequest: &shared.GoogleCloudMlV1ExplainRequest{
            HTTPBody: &shared.GoogleAPIHTTPBody{
                ContentType: sdk.String("provident"),
                Data: sdk.String("distinctio"),
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
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("repellendus"),
        Name: "Cedric Connelly",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
    }, operations.MlProjectsExplainSecurity{
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