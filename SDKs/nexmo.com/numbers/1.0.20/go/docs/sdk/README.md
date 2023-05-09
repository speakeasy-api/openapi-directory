# SDK

## Overview

The Numbers API enables you to manage your existing numbers and buy new virtual numbers for use with the Vonage APIs. Further information is here: <https://developer.nexmo.com/numbers/overview>

Numbers product documentation on the Vonage Developer Portal
<https://developer.nexmo.com/numbers/overview>
### Available Operations

* [BuyANumber](#buyanumber) - Buy a number
* [CancelANumber](#cancelanumber) - Cancel a number
* [GetAvailableNumbers](#getavailablenumbers) - Search available numbers
* [GetOwnedNumbers](#getownednumbers) - List the numbers you own
* [UpdateANumber](#updateanumber) - Update a number

## BuyANumber

Request to purchase a specific inbound number.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
            APISecret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BuyANumber(ctx, shared.NumberDetails{
        Country: "GB",
        Msisdn: "447700900000",
        TargetAPIKey: sdk.String("1a2345b7"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```

## CancelANumber

Cancel your subscription for a specific inbound number.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
            APISecret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelANumber(ctx, shared.NumberDetails{
        Country: "GB",
        Msisdn: "447700900000",
        TargetAPIKey: sdk.String("1a2345b7"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```

## GetAvailableNumbers

Retrieve inbound numbers that are available for the specified country.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
            APISecret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAvailableNumbers(ctx, operations.GetAvailableNumbersRequest{
        Country: "GB",
        Features: operations.GetAvailableNumbersFeaturesEnumMms.ToPointer(),
        Index: sdk.Int64(592845),
        Pattern: sdk.String("distinctio"),
        SearchPattern: shared.SearchPatternEnumTwo.ToPointer(),
        Size: sdk.Int64(602763),
        Type: shared.TypeEnumLandlineTollFree.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AvailableNumbers != nil {
        // handle response
    }
}
```

## GetOwnedNumbers

Retrieve all the inbound numbers associated with your Vonage account.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
            APISecret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOwnedNumbers(ctx, operations.GetOwnedNumbersRequest{
        ApplicationID: sdk.String("corrupti"),
        Country: sdk.String("GB"),
        HasApplication: sdk.Bool(false),
        Index: sdk.Int64(847252),
        Pattern: sdk.String("vel"),
        SearchPattern: shared.SearchPatternEnumOne.ToPointer(),
        Size: sdk.Int64(645894),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InboundNumbers != nil {
        // handle response
    }
}
```

## UpdateANumber

Change the behaviour of a number that you own.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
            APISecret: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateANumber(ctx, shared.NumberDetailsUpdate{
        AppID: sdk.String("aaaaaaaa-bbbb-cccc-dddd-0123456789abc"),
        Country: "GB",
        MessagesCallbackType: shared.NumberDetailsUpdateMessagesCallbackTypeEnumApp.ToPointer(),
        MessagesCallbackValue: sdk.String("aaaaaaaa-bbbb-cccc-dddd-0123456789ab"),
        MoHTTPURL: sdk.String("https://example.com/webhooks/inbound-sms"),
        MoSmppSysType: sdk.String("inbound"),
        Msisdn: "447700900000",
        VoiceCallbackType: shared.NumberDetailsUpdateVoiceCallbackTypeEnumTel.ToPointer(),
        VoiceCallbackValue: sdk.String("447700900000"),
        VoiceStatusCallback: sdk.String("https://example.com/webhooks/status"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```
