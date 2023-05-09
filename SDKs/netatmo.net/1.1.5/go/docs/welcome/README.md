# Welcome

## Overview

Welcome specific methods

### Available Operations

* [Addwebhook](#addwebhook) - Links a callback url to a user.

* [Dropwebhook](#dropwebhook) - Dissociates a webhook from a user.

* [Getcamerapicture](#getcamerapicture) - Returns the snapshot associated to an event.

* [Geteventsuntil](#geteventsuntil) - Returns the snapshot associated to an event.

* [Gethomedata](#gethomedata) - Returns information about users homes and cameras.

* [Getlasteventof](#getlasteventof) - Returns most recent events.

* [Getnextevents](#getnextevents) - Returns previous events.

* [Setpersonsaway](#setpersonsaway) - Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.

* [Setpersonshome](#setpersonshome) - Sets a person as 'At home'.


## Addwebhook

Links a callback url to a user.


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
    res, err := s.Welcome.Addwebhook(ctx, operations.AddwebhookRequest{
        AppType: "ad",
        URL: "natus",
    }, operations.AddwebhookSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAWelcomeWebhookResponse != nil {
        // handle response
    }
}
```

## Dropwebhook

Dissociates a webhook from a user.


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
    res, err := s.Welcome.Dropwebhook(ctx, operations.DropwebhookRequest{
        AppType: "sed",
    }, operations.DropwebhookSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAWelcomeWebhookResponse != nil {
        // handle response
    }
}
```

## Getcamerapicture

Returns the snapshot associated to an event.


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
    res, err := s.Welcome.Getcamerapicture(ctx, operations.GetcamerapictureRequest{
        ImageID: "iste",
        Key: "dolor",
    }, operations.GetcamerapictureSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcamerapicture200ApplicationJSONByteString != nil {
        // handle response
    }
}
```

## Geteventsuntil

Returns the snapshot associated to an event.


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
    res, err := s.Welcome.Geteventsuntil(ctx, operations.GeteventsuntilRequest{
        EventID: "natus",
        HomeID: "laboriosam",
    }, operations.GeteventsuntilSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAWelcomeEventResponse != nil {
        // handle response
    }
}
```

## Gethomedata

Returns information about users homes and cameras.


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
    res, err := s.Welcome.Gethomedata(ctx, operations.GethomedataRequest{
        HomeID: sdk.String("hic"),
        Size: sdk.Int64(902599),
    }, operations.GethomedataSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAWelcomeHomeDataResponse != nil {
        // handle response
    }
}
```

## Getlasteventof

Returns most recent events.


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
    res, err := s.Welcome.Getlasteventof(ctx, operations.GetlasteventofRequest{
        HomeID: "fuga",
        Offset: sdk.Int64(449950),
        PersonID: "corporis",
    }, operations.GetlasteventofSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAWelcomeEventResponse != nil {
        // handle response
    }
}
```

## Getnextevents

Returns previous events.


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
    res, err := s.Welcome.Getnextevents(ctx, operations.GetnexteventsRequest{
        EventID: "iste",
        HomeID: "iure",
        Size: sdk.Int64(902349),
    }, operations.GetnexteventsSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAWelcomeEventResponse != nil {
        // handle response
    }
}
```

## Setpersonsaway

Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.


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
    res, err := s.Welcome.Setpersonsaway(ctx, operations.SetpersonsawayRequest{
        HomeID: "quidem",
        PersonID: sdk.String("architecto"),
    }, operations.SetpersonsawaySecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAWelcomePersonsAwayResponse != nil {
        // handle response
    }
}
```

## Setpersonshome

Sets a person as 'At home'.


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
    res, err := s.Welcome.Setpersonshome(ctx, operations.SetpersonshomeRequest{
        HomeID: "ipsa",
        PersonIds: "reiciendis",
    }, operations.SetpersonshomeSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NAWelcomePersonsHomeResponse != nil {
        // handle response
    }
}
```
