# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [FetchTrunkingCountry](#fetchtrunkingcountry) - Fetch a specific Country.
* [FetchTrunkingNumber](#fetchtrunkingnumber) - Fetch pricing information for a specific destination and, optionally, origination phone number.
* [FetchVoiceCountry](#fetchvoicecountry) - Fetch a specific Country.
* [FetchVoiceNumber](#fetchvoicenumber) - Fetch pricing information for a specific destination and, optionally, origination phone number.
* [ListTrunkingCountry](#listtrunkingcountry)
* [ListVoiceCountry](#listvoicecountry)

## FetchTrunkingCountry

Fetch a specific Country.

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
    res, err := s.SDK.FetchTrunkingCountry(ctx, operations.FetchTrunkingCountryRequest{
        IsoCountry: "provident",
    }, operations.FetchTrunkingCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV2TrunkingCountryInstance != nil {
        // handle response
    }
}
```

## FetchTrunkingNumber

Fetch pricing information for a specific destination and, optionally, origination phone number.

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
    res, err := s.SDK.FetchTrunkingNumber(ctx, operations.FetchTrunkingNumberRequest{
        DestinationNumber: "distinctio",
        OriginationNumber: sdk.String("quibusdam"),
    }, operations.FetchTrunkingNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV2TrunkingNumber != nil {
        // handle response
    }
}
```

## FetchVoiceCountry

Fetch a specific Country.

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
    res, err := s.SDK.FetchVoiceCountry(ctx, operations.FetchVoiceCountryRequest{
        IsoCountry: "unde",
    }, operations.FetchVoiceCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV2VoiceVoiceCountryInstance != nil {
        // handle response
    }
}
```

## FetchVoiceNumber

Fetch pricing information for a specific destination and, optionally, origination phone number.

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
    res, err := s.SDK.FetchVoiceNumber(ctx, operations.FetchVoiceNumberRequest{
        DestinationNumber: "nulla",
        OriginationNumber: sdk.String("corrupti"),
    }, operations.FetchVoiceNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV2VoiceVoiceNumber != nil {
        // handle response
    }
}
```

## ListTrunkingCountry

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
    res, err := s.SDK.ListTrunkingCountry(ctx, operations.ListTrunkingCountryRequest{
        Page: sdk.Int64(847252),
        PageSize: sdk.Int64(423655),
        PageToken: sdk.String("error"),
    }, operations.ListTrunkingCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrunkingCountryResponse != nil {
        // handle response
    }
}
```

## ListVoiceCountry

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
    res, err := s.SDK.ListVoiceCountry(ctx, operations.ListVoiceCountryRequest{
        Page: sdk.Int64(645894),
        PageSize: sdk.Int64(384382),
        PageToken: sdk.String("iure"),
    }, operations.ListVoiceCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVoiceCountryResponse != nil {
        // handle response
    }
}
```
