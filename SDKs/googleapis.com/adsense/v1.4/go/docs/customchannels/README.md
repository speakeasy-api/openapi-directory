# Customchannels

### Available Operations

* [AdsenseCustomchannelsAdunitsList](#adsensecustomchannelsadunitslist) - List all ad units in the specified custom channel.
* [AdsenseCustomchannelsGet](#adsensecustomchannelsget) - Get the specified custom channel from the specified ad client.
* [AdsenseCustomchannelsList](#adsensecustomchannelslist) - List all custom channels in the specified ad client for this AdSense account.

## AdsenseCustomchannelsAdunitsList

List all ad units in the specified custom channel.

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
    res, err := s.Customchannels.AdsenseCustomchannelsAdunitsList(ctx, operations.AdsenseCustomchannelsAdunitsListRequest{
        AdClientID: "vero",
        Alt: shared.AltEnumCsv.ToPointer(),
        CustomChannelID: "architecto",
        Fields: sdk.String("magnam"),
        IncludeInactive: sdk.Bool(false),
        Key: sdk.String("et"),
        MaxResults: sdk.Int64(569965),
        OauthToken: sdk.String("ullam"),
        PageToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UserIP: sdk.String("sint"),
    }, operations.AdsenseCustomchannelsAdunitsListSecurity{
        Option1: &operations.AdsenseCustomchannelsAdunitsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnits != nil {
        // handle response
    }
}
```

## AdsenseCustomchannelsGet

Get the specified custom channel from the specified ad client.

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
    res, err := s.Customchannels.AdsenseCustomchannelsGet(ctx, operations.AdsenseCustomchannelsGetRequest{
        AdClientID: "accusantium",
        Alt: shared.AltEnumJSON.ToPointer(),
        CustomChannelID: "reiciendis",
        Fields: sdk.String("mollitia"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UserIP: sdk.String("necessitatibus"),
    }, operations.AdsenseCustomchannelsGetSecurity{
        Option1: &operations.AdsenseCustomchannelsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomChannel != nil {
        // handle response
    }
}
```

## AdsenseCustomchannelsList

List all custom channels in the specified ad client for this AdSense account.

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
    res, err := s.Customchannels.AdsenseCustomchannelsList(ctx, operations.AdsenseCustomchannelsListRequest{
        AdClientID: "odit",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("quasi"),
        Key: sdk.String("iure"),
        MaxResults: sdk.Int64(984043),
        OauthToken: sdk.String("debitis"),
        PageToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UserIP: sdk.String("deleniti"),
    }, operations.AdsenseCustomchannelsListSecurity{
        Option1: &operations.AdsenseCustomchannelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomChannels != nil {
        // handle response
    }
}
```
