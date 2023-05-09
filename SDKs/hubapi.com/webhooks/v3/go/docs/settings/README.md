# Settings

## Overview

Operations to manage app-level webhook settings.

### Available Operations

* [DeleteWebhooksV3AppIDSettingsClear](#deletewebhooksv3appidsettingsclear)
* [GetWebhooksV3AppIDSettingsGetAll](#getwebhooksv3appidsettingsgetall)
* [PutWebhooksV3AppIDSettingsConfigure](#putwebhooksv3appidsettingsconfigure)

## DeleteWebhooksV3AppIDSettingsClear

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
    res, err := s.Settings.DeleteWebhooksV3AppIDSettingsClear(ctx, operations.DeleteWebhooksV3AppIDSettingsClearRequest{
        AppID: 592845,
    }, operations.DeleteWebhooksV3AppIDSettingsClearSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWebhooksV3AppIDSettingsGetAll

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
    res, err := s.Settings.GetWebhooksV3AppIDSettingsGetAll(ctx, operations.GetWebhooksV3AppIDSettingsGetAllRequest{
        AppID: 715190,
    }, operations.GetWebhooksV3AppIDSettingsGetAllSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingsResponse != nil {
        // handle response
    }
}
```

## PutWebhooksV3AppIDSettingsConfigure

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
    res, err := s.Settings.PutWebhooksV3AppIDSettingsConfigure(ctx, operations.PutWebhooksV3AppIDSettingsConfigureRequest{
        SettingsChangeRequest: shared.SettingsChangeRequest{
            TargetURL: "quibusdam",
            Throttling: shared.ThrottlingSettings{
                MaxConcurrentRequests: 602763,
                Period: shared.ThrottlingSettingsPeriodEnumRollingMinute,
            },
        },
        AppID: 544883,
    }, operations.PutWebhooksV3AppIDSettingsConfigureSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingsResponse != nil {
        // handle response
    }
}
```
