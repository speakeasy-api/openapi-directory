# Tests

### Available Operations

* [YoutubeTestsInsert](#youtubetestsinsert) - POST method.

## YoutubeTestsInsert

POST method.

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
    res, err := s.Tests.YoutubeTestsInsert(ctx, operations.YoutubeTestsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestItem: &shared.TestItem{
            FeaturedPart: sdk.Bool(false),
            Gaia: sdk.String("nam"),
            ID: sdk.String("dcab6267-6696-4e1e-8002-21b335d89acb"),
            Snippet: map[string]interface{}{
                "debitis": "nobis",
            },
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("id"),
        ExternalChannelID: sdk.String("atque"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("quo"),
        Part: []string{
            "aliquam",
            "provident",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.YoutubeTestsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestItem != nil {
        // handle response
    }
}
```
