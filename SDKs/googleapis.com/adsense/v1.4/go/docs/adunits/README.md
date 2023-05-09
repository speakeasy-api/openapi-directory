# Adunits

### Available Operations

* [AdsenseAdunitsCustomchannelsList](#adsenseadunitscustomchannelslist) - List all custom channels which the specified ad unit belongs to.
* [AdsenseAdunitsGet](#adsenseadunitsget) - Gets the specified ad unit in the specified ad client.
* [AdsenseAdunitsGetAdCode](#adsenseadunitsgetadcode) - Get ad code for the specified ad unit.
* [AdsenseAdunitsList](#adsenseadunitslist) - List all ad units in the specified ad client for this AdSense account.

## AdsenseAdunitsCustomchannelsList

List all custom channels which the specified ad unit belongs to.

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
    res, err := s.Adunits.AdsenseAdunitsCustomchannelsList(ctx, operations.AdsenseAdunitsCustomchannelsListRequest{
        AdClientID: "sint",
        AdUnitID: "officia",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("debitis"),
        Key: sdk.String("a"),
        MaxResults: sdk.Int64(680056),
        OauthToken: sdk.String("in"),
        PageToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UserIP: sdk.String("maiores"),
    }, operations.AdsenseAdunitsCustomchannelsListSecurity{
        Option1: &operations.AdsenseAdunitsCustomchannelsListSecurityOption1{
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

## AdsenseAdunitsGet

Gets the specified ad unit in the specified ad client.

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
    res, err := s.Adunits.AdsenseAdunitsGet(ctx, operations.AdsenseAdunitsGetRequest{
        AdClientID: "rerum",
        AdUnitID: "dicta",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("cumque"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UserIP: sdk.String("laborum"),
    }, operations.AdsenseAdunitsGetSecurity{
        Option1: &operations.AdsenseAdunitsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnit != nil {
        // handle response
    }
}
```

## AdsenseAdunitsGetAdCode

Get ad code for the specified ad unit.

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
    res, err := s.Adunits.AdsenseAdunitsGetAdCode(ctx, operations.AdsenseAdunitsGetAdCodeRequest{
        AdClientID: "accusamus",
        AdUnitID: "non",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UserIP: sdk.String("provident"),
    }, operations.AdsenseAdunitsGetAdCodeSecurity{
        Option1: &operations.AdsenseAdunitsGetAdCodeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdCode != nil {
        // handle response
    }
}
```

## AdsenseAdunitsList

List all ad units in the specified ad client for this AdSense account.

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
    res, err := s.Adunits.AdsenseAdunitsList(ctx, operations.AdsenseAdunitsListRequest{
        AdClientID: "nam",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("blanditiis"),
        IncludeInactive: sdk.Bool(false),
        Key: sdk.String("deleniti"),
        MaxResults: sdk.Int64(956084),
        OauthToken: sdk.String("amet"),
        PageToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UserIP: sdk.String("vel"),
    }, operations.AdsenseAdunitsListSecurity{
        Option1: &operations.AdsenseAdunitsListSecurityOption1{
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
