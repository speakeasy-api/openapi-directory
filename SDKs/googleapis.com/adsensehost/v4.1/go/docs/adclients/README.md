# Adclients

### Available Operations

* [AdsensehostAdclientsGet](#adsensehostadclientsget) - Get information about one of the ad clients in the Host AdSense account.
* [AdsensehostAdclientsList](#adsensehostadclientslist) - List all host ad clients in this AdSense account.

## AdsensehostAdclientsGet

Get information about one of the ad clients in the Host AdSense account.

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
    res, err := s.Adclients.AdsensehostAdclientsGet(ctx, operations.AdsensehostAdclientsGetRequest{
        AdClientID: "saepe",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UserIP: sdk.String("magni"),
    }, operations.AdsensehostAdclientsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdClient != nil {
        // handle response
    }
}
```

## AdsensehostAdclientsList

List all host ad clients in this AdSense account.

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
    res, err := s.Adclients.AdsensehostAdclientsList(ctx, operations.AdsensehostAdclientsListRequest{
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("quo"),
        Key: sdk.String("illum"),
        MaxResults: sdk.Int64(864934),
        OauthToken: sdk.String("maxime"),
        PageToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UserIP: sdk.String("odit"),
    }, operations.AdsensehostAdclientsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdClients != nil {
        // handle response
    }
}
```
