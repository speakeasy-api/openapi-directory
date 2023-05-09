# Urlchannels

### Available Operations

* [AdsensehostUrlchannelsDelete](#adsensehosturlchannelsdelete) - Delete a URL channel from the host AdSense account.
* [AdsensehostUrlchannelsInsert](#adsensehosturlchannelsinsert) - Add a new URL channel to the host AdSense account.
* [AdsensehostUrlchannelsList](#adsensehosturlchannelslist) - List all host URL channels in the host AdSense account.

## AdsensehostUrlchannelsDelete

Delete a URL channel from the host AdSense account.

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
    res, err := s.Urlchannels.AdsensehostUrlchannelsDelete(ctx, operations.AdsensehostUrlchannelsDeleteRequest{
        AdClientID: "adipisci",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("architecto"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        URLChannelID: "itaque",
        UserIP: sdk.String("consequatur"),
    }, operations.AdsensehostUrlchannelsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.URLChannel != nil {
        // handle response
    }
}
```

## AdsensehostUrlchannelsInsert

Add a new URL channel to the host AdSense account.

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
    res, err := s.Urlchannels.AdsensehostUrlchannelsInsert(ctx, operations.AdsensehostUrlchannelsInsertRequest{
        URLChannel: &shared.URLChannel{
            ID: sdk.String("adcf4b92-1879-4fce-953f-73ef7fbc7abd"),
            Kind: sdk.String("ducimus"),
            URLPattern: sdk.String("dolore"),
        },
        AdClientID: "quibusdam",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("sequi"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UserIP: sdk.String("voluptatibus"),
    }, operations.AdsensehostUrlchannelsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.URLChannel != nil {
        // handle response
    }
}
```

## AdsensehostUrlchannelsList

List all host URL channels in the host AdSense account.

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
    res, err := s.Urlchannels.AdsensehostUrlchannelsList(ctx, operations.AdsensehostUrlchannelsListRequest{
        AdClientID: "exercitationem",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("fugit"),
        Key: sdk.String("porro"),
        MaxResults: sdk.Int64(981830),
        OauthToken: sdk.String("doloribus"),
        PageToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UserIP: sdk.String("ducimus"),
    }, operations.AdsensehostUrlchannelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.URLChannels != nil {
        // handle response
    }
}
```
