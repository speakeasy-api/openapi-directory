# Alerts

### Available Operations

* [AdsenseAlertsDelete](#adsensealertsdelete) - Dismiss (delete) the specified alert from the publisher's AdSense account.
* [AdsenseAlertsList](#adsensealertslist) - List the alerts for this AdSense account.

## AdsenseAlertsDelete

Dismiss (delete) the specified alert from the publisher's AdSense account.

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
    res, err := s.Alerts.AdsenseAlertsDelete(ctx, operations.AdsenseAlertsDeleteRequest{
        AlertID: "natus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UserIP: sdk.String("distinctio"),
    }, operations.AdsenseAlertsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AdsenseAlertsList

List the alerts for this AdSense account.

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
    res, err := s.Alerts.AdsenseAlertsList(ctx, operations.AdsenseAlertsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("labore"),
        Key: sdk.String("labore"),
        Locale: sdk.String("suscipit"),
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UserIP: sdk.String("eum"),
    }, operations.AdsenseAlertsListSecurity{
        Option1: &operations.AdsenseAlertsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Alerts != nil {
        // handle response
    }
}
```
