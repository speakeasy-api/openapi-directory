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
    res, err := s.API.CloudtasksAPIQueueUpdate(ctx, operations.CloudtasksAPIQueueUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        HTTPBody: &shared.HTTPBody{
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
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppID: sdk.String("perferendis"),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("at"),
    }, operations.CloudtasksAPIQueueUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->