# AchievementDefinitions

### Available Operations

* [GamesAchievementDefinitionsList](#gamesachievementdefinitionslist) - Lists all the achievement definitions for your application.

## GamesAchievementDefinitionsList

Lists all the achievement definitions for your application.

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
    res, err := s.AchievementDefinitions.GamesAchievementDefinitionsList(ctx, operations.GamesAchievementDefinitionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        Language: sdk.String("molestiae"),
        MaxResults: sdk.Int64(791725),
        OauthToken: sdk.String("placeat"),
        PageToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.GamesAchievementDefinitionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementDefinitionsListResponse != nil {
        // handle response
    }
}
```
