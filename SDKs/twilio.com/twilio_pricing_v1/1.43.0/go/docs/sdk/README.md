# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [FetchMessagingCountry](#fetchmessagingcountry)
* [FetchPhoneNumberCountry](#fetchphonenumbercountry)
* [FetchVoiceCountry](#fetchvoicecountry)
* [FetchVoiceNumber](#fetchvoicenumber)
* [ListMessagingCountry](#listmessagingcountry)
* [ListPhoneNumberCountry](#listphonenumbercountry)
* [ListVoiceCountry](#listvoicecountry)

## FetchMessagingCountry

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
    res, err := s.SDK.FetchMessagingCountry(ctx, operations.FetchMessagingCountryRequest{
        IsoCountry: "provident",
    }, operations.FetchMessagingCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV1MessagingMessagingCountryInstance != nil {
        // handle response
    }
}
```

## FetchPhoneNumberCountry

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
    res, err := s.SDK.FetchPhoneNumberCountry(ctx, operations.FetchPhoneNumberCountryRequest{
        IsoCountry: "distinctio",
    }, operations.FetchPhoneNumberCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV1PhoneNumberPhoneNumberCountryInstance != nil {
        // handle response
    }
}
```

## FetchVoiceCountry

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
        IsoCountry: "quibusdam",
    }, operations.FetchVoiceCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV1VoiceVoiceCountryInstance != nil {
        // handle response
    }
}
```

## FetchVoiceNumber

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
        Number: "unde",
    }, operations.FetchVoiceNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV1VoiceVoiceNumber != nil {
        // handle response
    }
}
```

## ListMessagingCountry

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
    res, err := s.SDK.ListMessagingCountry(ctx, operations.ListMessagingCountryRequest{
        Page: sdk.Int64(857946),
        PageSize: sdk.Int64(544883),
        PageToken: sdk.String("illum"),
    }, operations.ListMessagingCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMessagingCountryResponse != nil {
        // handle response
    }
}
```

## ListPhoneNumberCountry

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
    res, err := s.SDK.ListPhoneNumberCountry(ctx, operations.ListPhoneNumberCountryRequest{
        Page: sdk.Int64(423655),
        PageSize: sdk.Int64(623564),
        PageToken: sdk.String("deserunt"),
    }, operations.ListPhoneNumberCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPhoneNumberCountryResponse != nil {
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
        Page: sdk.Int64(384382),
        PageSize: sdk.Int64(437587),
        PageToken: sdk.String("magnam"),
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
