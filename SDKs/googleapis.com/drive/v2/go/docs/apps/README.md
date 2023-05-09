# Apps

### Available Operations

* [DriveAppsGet](#driveappsget) - Gets a specific app.
* [DriveAppsList](#driveappslist) - Lists a user's installed apps.

## DriveAppsGet

Gets a specific app.

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
    res, err := s.Apps.DriveAppsGet(ctx, operations.DriveAppsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        AppID: "debitis",
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UserIP: sdk.String("molestiae"),
    }, operations.DriveAppsGetSecurity{
        Option1: &operations.DriveAppsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.App != nil {
        // handle response
    }
}
```

## DriveAppsList

Lists a user's installed apps.

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
    res, err := s.Apps.DriveAppsList(ctx, operations.DriveAppsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        AppFilterExtensions: sdk.String("minus"),
        AppFilterMimeTypes: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Key: sdk.String("iusto"),
        LanguageCode: sdk.String("excepturi"),
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UserIP: sdk.String("temporibus"),
    }, operations.DriveAppsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppList != nil {
        // handle response
    }
}
```
