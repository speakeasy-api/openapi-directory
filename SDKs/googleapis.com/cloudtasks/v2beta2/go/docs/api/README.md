# API

### Available Operations

* [CloudtasksAPIQueueUpdate](#cloudtasksapiqueueupdate) - Update queue list by uploading a queue.yaml file. The queue.yaml file is supplied in the request body as a YAML encoded string. This method was added to support gcloud clients versions before 322.0.0. New clients should use CreateQueue instead of this method.

## CloudtasksAPIQueueUpdate

Update queue list by uploading a queue.yaml file. The queue.yaml file is supplied in the request body as a YAML encoded string. This method was added to support gcloud clients versions before 322.0.0. New clients should use CreateQueue instead of this method.

### Example Usage

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
            ContentType: sdk.String("molestiae"),
            Data: sdk.String("quod"),
            Extensions: []map[string]interface{}{
                map[string]interface{}{
                    "totam": "porro",
                    "dolorum": "dicta",
                },
                map[string]interface{}{
                    "officia": "occaecati",
                    "fugit": "deleniti",
                    "hic": "optio",
                },
                map[string]interface{}{
                    "beatae": "commodi",
                    "molestiae": "modi",
                    "qui": "impedit",
                },
                map[string]interface{}{
                    "esse": "ipsum",
                    "excepturi": "aspernatur",
                    "perferendis": "ad",
                },
            },
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppID: sdk.String("iste"),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("in"),
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
