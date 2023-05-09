# Metagame

### Available Operations

* [GamesMetagameGetMetagameConfig](#gamesmetagamegetmetagameconfig) - Return the metagame configuration data for the calling application.
* [GamesMetagameListCategoriesByPlayer](#gamesmetagamelistcategoriesbyplayer) - List play data aggregated per category for the player corresponding to `playerId`.

## GamesMetagameGetMetagameConfig

Return the metagame configuration data for the calling application.

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
    res, err := s.Metagame.GamesMetagameGetMetagameConfig(ctx, operations.GamesMetagameGetMetagameConfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("eum"),
    }, operations.GamesMetagameGetMetagameConfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MetagameConfig != nil {
        // handle response
    }
}
```

## GamesMetagameListCategoriesByPlayer

List play data aggregated per category for the player corresponding to `playerId`.

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
    res, err := s.Metagame.GamesMetagameListCategoriesByPlayer(ctx, operations.GamesMetagameListCategoriesByPlayerRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nemo"),
        Collection: operations.GamesMetagameListCategoriesByPlayerCollectionEnumCollectionUnspecified,
        Fields: sdk.String("iure"),
        Key: sdk.String("doloribus"),
        Language: sdk.String("debitis"),
        MaxResults: sdk.Int64(260341),
        OauthToken: sdk.String("maxime"),
        PageToken: sdk.String("deleniti"),
        PlayerID: "facilis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.GamesMetagameListCategoriesByPlayerSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategoryListResponse != nil {
        // handle response
    }
}
```
