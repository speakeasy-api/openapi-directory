# Applications

### Available Operations

* [GamesManagementApplicationsListHidden](#gamesmanagementapplicationslisthidden) - Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.

## GamesManagementApplicationsListHidden

Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.

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
    res, err := s.Applications.GamesManagementApplicationsListHidden(ctx, operations.GamesManagementApplicationsListHiddenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        ApplicationID: "iste",
        Callback: sdk.String("dolor"),
        Fields: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        MaxResults: sdk.Int64(943749),
        OauthToken: sdk.String("saepe"),
        PageToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("iste"),
    }, operations.GamesManagementApplicationsListHiddenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HiddenPlayerList != nil {
        // handle response
    }
}
```
