# Settings

### Available Operations

* [MirrorSettingsGet](#mirrorsettingsget) - Gets a single setting by ID.

## MirrorSettingsGet

Gets a single setting by ID.

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
    res, err := s.Settings.MirrorSettingsGet(ctx, operations.MirrorSettingsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("voluptas"),
        ID: "9280d1ba-77a8-49eb-b737-ae4203ce5e6a",
        Key: sdk.String("provident"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UserIP: sdk.String("totam"),
    }, operations.MirrorSettingsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
