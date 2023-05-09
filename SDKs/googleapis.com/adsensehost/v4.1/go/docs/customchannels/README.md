# Customchannels

### Available Operations

* [AdsensehostCustomchannelsDelete](#adsensehostcustomchannelsdelete) - Delete a specific custom channel from the host AdSense account.
* [AdsensehostCustomchannelsGet](#adsensehostcustomchannelsget) - Get a specific custom channel from the host AdSense account.
* [AdsensehostCustomchannelsInsert](#adsensehostcustomchannelsinsert) - Add a new custom channel to the host AdSense account.
* [AdsensehostCustomchannelsList](#adsensehostcustomchannelslist) - List all host custom channels in this AdSense account.
* [AdsensehostCustomchannelsPatch](#adsensehostcustomchannelspatch) - Update a custom channel in the host AdSense account. This method supports patch semantics.
* [AdsensehostCustomchannelsUpdate](#adsensehostcustomchannelsupdate) - Update a custom channel in the host AdSense account.

## AdsensehostCustomchannelsDelete

Delete a specific custom channel from the host AdSense account.

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
    res, err := s.Customchannels.AdsensehostCustomchannelsDelete(ctx, operations.AdsensehostCustomchannelsDeleteRequest{
        AdClientID: "libero",
        Alt: shared.AltEnumJSON.ToPointer(),
        CustomChannelID: "dolores",
        Fields: sdk.String("quis"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UserIP: sdk.String("quis"),
    }, operations.AdsensehostCustomchannelsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomChannel != nil {
        // handle response
    }
}
```

## AdsensehostCustomchannelsGet

Get a specific custom channel from the host AdSense account.

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
    res, err := s.Customchannels.AdsensehostCustomchannelsGet(ctx, operations.AdsensehostCustomchannelsGetRequest{
        AdClientID: "nesciunt",
        Alt: shared.AltEnumCsv.ToPointer(),
        CustomChannelID: "perferendis",
        Fields: sdk.String("dolores"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UserIP: sdk.String("vero"),
    }, operations.AdsensehostCustomchannelsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomChannel != nil {
        // handle response
    }
}
```

## AdsensehostCustomchannelsInsert

Add a new custom channel to the host AdSense account.

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
    res, err := s.Customchannels.AdsensehostCustomchannelsInsert(ctx, operations.AdsensehostCustomchannelsInsertRequest{
        CustomChannel: &shared.CustomChannel{
            Code: sdk.String("nostrum"),
            ID: sdk.String("fe9b90c2-8909-4b3f-a49a-8d9cbf486333"),
            Kind: sdk.String("qui"),
            Name: sdk.String("Mindy Marks"),
        },
        AdClientID: "dignissimos",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("amet"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UserIP: sdk.String("ipsa"),
    }, operations.AdsensehostCustomchannelsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomChannel != nil {
        // handle response
    }
}
```

## AdsensehostCustomchannelsList

List all host custom channels in this AdSense account.

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
    res, err := s.Customchannels.AdsensehostCustomchannelsList(ctx, operations.AdsensehostCustomchannelsListRequest{
        AdClientID: "ipsa",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("odio"),
        Key: sdk.String("quaerat"),
        MaxResults: sdk.Int64(881005),
        OauthToken: sdk.String("quidem"),
        PageToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UserIP: sdk.String("natus"),
    }, operations.AdsensehostCustomchannelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomChannels != nil {
        // handle response
    }
}
```

## AdsensehostCustomchannelsPatch

Update a custom channel in the host AdSense account. This method supports patch semantics.

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
    res, err := s.Customchannels.AdsensehostCustomchannelsPatch(ctx, operations.AdsensehostCustomchannelsPatchRequest{
        CustomChannel: &shared.CustomChannel{
            Code: sdk.String("eos"),
            ID: sdk.String("80d1ba77-a89e-4bf7-b7ae-4203ce5e6a95"),
            Kind: sdk.String("repellendus"),
            Name: sdk.String("Donnie Abbott"),
        },
        AdClientID: "tempora",
        Alt: shared.AltEnumCsv.ToPointer(),
        CustomChannelID: "quod",
        Fields: sdk.String("officiis"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UserIP: sdk.String("esse"),
    }, operations.AdsensehostCustomchannelsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomChannel != nil {
        // handle response
    }
}
```

## AdsensehostCustomchannelsUpdate

Update a custom channel in the host AdSense account.

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
    res, err := s.Customchannels.AdsensehostCustomchannelsUpdate(ctx, operations.AdsensehostCustomchannelsUpdateRequest{
        CustomChannel: &shared.CustomChannel{
            Code: sdk.String("harum"),
            ID: sdk.String("73cf3be4-53f8-470b-b26b-5a73429cdb1a"),
            Kind: sdk.String("totam"),
            Name: sdk.String("Kelly Daniel"),
        },
        AdClientID: "aliquid",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("molestias"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UserIP: sdk.String("fugit"),
    }, operations.AdsensehostCustomchannelsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomChannel != nil {
        // handle response
    }
}
```
