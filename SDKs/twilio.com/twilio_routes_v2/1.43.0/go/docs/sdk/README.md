# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [FetchPhoneNumber](#fetchphonenumber) - Fetch the Inbound Processing Region assigned to a phone number.
* [FetchSipDomain](#fetchsipdomain)
* [FetchTrunks](#fetchtrunks) - Fetch the Inbound Processing Region assigned to a SIP Trunk.
* [UpdatePhoneNumber](#updatephonenumber) - Assign an Inbound Processing Region to a phone number.
* [UpdateSipDomain](#updatesipdomain)
* [UpdateTrunks](#updatetrunks) - Assign an Inbound Processing Region to a SIP Trunk

## FetchPhoneNumber

Fetch the Inbound Processing Region assigned to a phone number.

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
    res, err := s.SDK.FetchPhoneNumber(ctx, operations.FetchPhoneNumberRequest{
        PhoneNumber: "provident",
    }, operations.FetchPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoutesV2PhoneNumber != nil {
        // handle response
    }
}
```

## FetchSipDomain

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
    res, err := s.SDK.FetchSipDomain(ctx, operations.FetchSipDomainRequest{
        SipDomain: "distinctio",
    }, operations.FetchSipDomainSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoutesV2SipDomain != nil {
        // handle response
    }
}
```

## FetchTrunks

Fetch the Inbound Processing Region assigned to a SIP Trunk.

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
    res, err := s.SDK.FetchTrunks(ctx, operations.FetchTrunksRequest{
        SipTrunkDomain: "quibusdam",
    }, operations.FetchTrunksSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoutesV2Trunks != nil {
        // handle response
    }
}
```

## UpdatePhoneNumber

Assign an Inbound Processing Region to a phone number.

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
    res, err := s.SDK.UpdatePhoneNumber(ctx, operations.UpdatePhoneNumberRequest{
        PhoneNumber: "unde",
        RequestBody: &operations.UpdatePhoneNumberUpdatePhoneNumberRequest{
            FriendlyName: sdk.String("nulla"),
            VoiceRegion: sdk.String("corrupti"),
        },
    }, operations.UpdatePhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoutesV2PhoneNumber != nil {
        // handle response
    }
}
```

## UpdateSipDomain

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
    res, err := s.SDK.UpdateSipDomain(ctx, operations.UpdateSipDomainRequest{
        RequestBody: &operations.UpdateSipDomainUpdateSipDomainRequest{
            FriendlyName: sdk.String("illum"),
            VoiceRegion: sdk.String("vel"),
        },
        SipDomain: "error",
    }, operations.UpdateSipDomainSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoutesV2SipDomain != nil {
        // handle response
    }
}
```

## UpdateTrunks

Assign an Inbound Processing Region to a SIP Trunk

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
    res, err := s.SDK.UpdateTrunks(ctx, operations.UpdateTrunksRequest{
        RequestBody: &operations.UpdateTrunksUpdateTrunksRequest{
            FriendlyName: sdk.String("deserunt"),
            VoiceRegion: sdk.String("suscipit"),
        },
        SipTrunkDomain: "iure",
    }, operations.UpdateTrunksSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoutesV2Trunks != nil {
        // handle response
    }
}
```
