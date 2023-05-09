# Savedadstyles

### Available Operations

* [AdsenseSavedadstylesGet](#adsensesavedadstylesget) - Get a specific saved ad style from the user's account.
* [AdsenseSavedadstylesList](#adsensesavedadstyleslist) - List all saved ad styles in the user's account.

## AdsenseSavedadstylesGet

Get a specific saved ad style from the user's account.

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
    res, err := s.Savedadstyles.AdsenseSavedadstylesGet(ctx, operations.AdsenseSavedadstylesGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("facilis"),
        Key: sdk.String("perspiciatis"),
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        SavedAdStyleID: "consequuntur",
        UserIP: sdk.String("blanditiis"),
    }, operations.AdsenseSavedadstylesGetSecurity{
        Option1: &operations.AdsenseSavedadstylesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedAdStyle != nil {
        // handle response
    }
}
```

## AdsenseSavedadstylesList

List all saved ad styles in the user's account.

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
    res, err := s.Savedadstyles.AdsenseSavedadstylesList(ctx, operations.AdsenseSavedadstylesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("eaque"),
        Key: sdk.String("occaecati"),
        MaxResults: sdk.Int64(699098),
        OauthToken: sdk.String("adipisci"),
        PageToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UserIP: sdk.String("modi"),
    }, operations.AdsenseSavedadstylesListSecurity{
        Option1: &operations.AdsenseSavedadstylesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedAdStyles != nil {
        // handle response
    }
}
```
