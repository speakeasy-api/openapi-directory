# Settings

### Available Operations

* [CalendarSettingsGet](#calendarsettingsget) - Returns a single user setting.
* [CalendarSettingsList](#calendarsettingslist) - Returns all user settings for the authenticated user.
* [CalendarSettingsWatch](#calendarsettingswatch) - Watch for changes to Settings resources.

## CalendarSettingsGet

Returns a single user setting.

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
    res, err := s.Settings.CalendarSettingsGet(ctx, operations.CalendarSettingsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("modi"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        Setting: "consequuntur",
        UserIP: sdk.String("assumenda"),
    }, operations.CalendarSettingsGetSecurity{
        Option1: &operations.CalendarSettingsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Setting != nil {
        // handle response
    }
}
```

## CalendarSettingsList

Returns all user settings for the authenticated user.

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
    res, err := s.Settings.CalendarSettingsList(ctx, operations.CalendarSettingsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("vero"),
        Key: sdk.String("doloribus"),
        MaxResults: sdk.Int64(773711),
        OauthToken: sdk.String("porro"),
        PageToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        SyncToken: sdk.String("reiciendis"),
        UserIP: sdk.String("ab"),
    }, operations.CalendarSettingsListSecurity{
        Option1: &operations.CalendarSettingsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Settings != nil {
        // handle response
    }
}
```

## CalendarSettingsWatch

Watch for changes to Settings resources.

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
    res, err := s.Settings.CalendarSettingsWatch(ctx, operations.CalendarSettingsWatchRequest{
        Channel: &shared.Channel{
            Address: sdk.String("4444 Sonny Junctions"),
            Expiration: sdk.String("neque"),
            ID: sdk.String("562a7b40-8f05-4e3d-88fd-af313a1f5fd9"),
            Kind: sdk.String("incidunt"),
            Params: map[string]string{
                "ipsam": "cupiditate",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("optio"),
            ResourceURI: sdk.String("alias"),
            Token: sdk.String("quidem"),
            Type: sdk.String("nesciunt"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("commodi"),
        Key: sdk.String("sapiente"),
        MaxResults: sdk.Int64(164319),
        OauthToken: sdk.String("veniam"),
        PageToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        SyncToken: sdk.String("sint"),
        UserIP: sdk.String("ut"),
    }, operations.CalendarSettingsWatchSecurity{
        Option1: &operations.CalendarSettingsWatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Channel != nil {
        // handle response
    }
}
```
