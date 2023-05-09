# SettingsExternal

### Available Operations

* [GetMarketingV3MarketingEventsAppIDSettingsGetAll](#getmarketingv3marketingeventsappidsettingsgetall)
* [PostMarketingV3MarketingEventsAppIDSettingsCreate](#postmarketingv3marketingeventsappidsettingscreate)

## GetMarketingV3MarketingEventsAppIDSettingsGetAll

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SettingsExternal.GetMarketingV3MarketingEventsAppIDSettingsGetAll(ctx, operations.GetMarketingV3MarketingEventsAppIDSettingsGetAllRequest{
        AppID: 607045,
    }, operations.GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurity{
        DeveloperHapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventDetailSettings != nil {
        // handle response
    }
}
```

## PostMarketingV3MarketingEventsAppIDSettingsCreate

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
    res, err := s.SettingsExternal.PostMarketingV3MarketingEventsAppIDSettingsCreate(ctx, operations.PostMarketingV3MarketingEventsAppIDSettingsCreateRequest{
        EventDetailSettingsURL: shared.EventDetailSettingsURL{
            EventDetailsURL: "necessitatibus",
        },
        AppID: 714697,
    }, operations.PostMarketingV3MarketingEventsAppIDSettingsCreateSecurity{
        DeveloperHapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventDetailSettings != nil {
        // handle response
    }
}
```
