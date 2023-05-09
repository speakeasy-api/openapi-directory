# Stats

### Available Operations

* [GamesStatsGet](#gamesstatsget) - Returns engagement and spend statistics in this application for the currently authenticated user.

## GamesStatsGet

Returns engagement and spend statistics in this application for the currently authenticated user.

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
    res, err := s.Stats.GamesStatsGet(ctx, operations.GamesStatsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("quam"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.GamesStatsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatsResponse != nil {
        // handle response
    }
}
```
