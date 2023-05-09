# DataTools

### Available Operations

* [BadWordFilter](#badwordfilter) - Bad Word Filter
* [EmailValidate](#emailvalidate) - Email Validate
* [PhoneValidate](#phonevalidate) - Phone Validate
* [UALookup](#ualookup) - UA Lookup

## BadWordFilter

Detect bad words, swear words and profanity in a given text

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataTools.BadWordFilter(ctx, operations.BadWordFilterRequestBody{
        Catalog: sdk.String("quibusdam"),
        CensorCharacter: sdk.String("unde"),
        Content: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BadWordFilterResponse != nil {
        // handle response
    }
}
```

## EmailValidate

Parse, validate and clean an email address

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataTools.EmailValidate(ctx, operations.EmailValidateRequest{
        Email: "Roselyn_Kassulke@yahoo.com",
        FixTypos: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailValidateResponse != nil {
        // handle response
    }
}
```

## PhoneValidate

Parse, validate and get location information about a phone number

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataTools.PhoneValidate(ctx, operations.PhoneValidateRequest{
        CountryCode: sdk.String("HM"),
        IP: sdk.String("iure"),
        Number: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PhoneValidateResponse != nil {
        // handle response
    }
}
```

## UALookup

Parse, validate and get detailed user-agent information from a user agent string or from client hints

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataTools.UALookup(ctx, operations.UALookupRequest{
        DeviceBrand: sdk.String("debitis"),
        DeviceModel: sdk.String("ipsa"),
        Ua: "delectus",
        UaMobile: sdk.String("tempora"),
        UaPlatform: sdk.String("suscipit"),
        UaPlatformVersion: sdk.String("molestiae"),
        UaVersion: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UALookupResponse != nil {
        // handle response
    }
}
```
