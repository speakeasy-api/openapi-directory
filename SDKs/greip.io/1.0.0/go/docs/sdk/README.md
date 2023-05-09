# SDK

## Overview

This documentation shows how to use Greip API, by highlighting the API methods, options and some other features that allow you to get the most of this API.

API Documentaion
<https://docs.greip.io>
### Available Operations

* [GetASNLookup](#getasnlookup) - ASNLookup endpoint: This method helps you lookup any AS Number. It returns the type, organisation details, routes, etc.
* [GetBINLookup](#getbinlookup) - This method helps you validate any BIN/IIN number and retrieve the full details related to the bank, brand, type, scheme, country, etc.
* [GetBulkLookup](#getbulklookup) - BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.
* [GetCountry](#getcountry) - Country endpoint: Returns the information of a specific country by passing the `countrCode`.
* [GetGeoIP](#getgeoip) - Returns the geolocation data of the visitor.
* [GetIPLookup](#getiplookup) - Returns the geolocation data of a specific IP Address.
* [GetBadWords](#getbadwords) - badWords endpoint: Detects whether user inputs contain profanity or not.
* [GetValidateEmail](#getvalidateemail) - This method can be used as an extra-layer of your system for validating email addresses.
* [GetValidatePhone](#getvalidatephone) - This method can be used as an extra-layer of your system for validating phone numbers.

## GetASNLookup

ASNLookup endpoint: This method helps you lookup any AS Number. It returns the type, organisation details, routes, etc.

Greip API - ASN Lookup
<https://docs.greip.io/methods/asn-lookup-api>

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
    res, err := s.SDK.GetASNLookup(ctx, operations.GetASNLookupRequest{
        Asn: "15169",
        Format: sdk.String("JSON"),
        IsList: sdk.String("no"),
        Key: "2517bc4fc3f790e8f09bc808bb63b899",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBINLookup

This method helps you validate any BIN/IIN number and retrieve the full details related to the bank, brand, type, scheme, country, etc.

Greip API - BIN/IIN Validation
<https://docs.greip.io/methods/bin-iin-validation>

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
    res, err := s.SDK.GetBINLookup(ctx, operations.GetBINLookupRequest{
        Bin: "489022",
        Format: sdk.String("JSON"),
        Key: "2517bc4fc3f790e8f09bc808bb63b899",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBulkLookup

BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.

Greip API - Bulk Lookup
<https://docs.greip.io/methods/bulk-lookup>

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
    res, err := s.SDK.GetBulkLookup(ctx, operations.GetBulkLookupRequest{
        Format: sdk.String("XML"),
        Ips: "1.1.1.1,2.2.2.2",
        Key: "2517bc4fc3f790e8f09bc808bb63b899",
        Lang: sdk.String("AR"),
        Params: sdk.String("currency"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCountry

Country endpoint: Returns the information of a specific country by passing the `countrCode`.

Greip API - Country Data API
<https://docs.greip.io/methods/country-data-api>

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
    res, err := s.SDK.GetCountry(ctx, operations.GetCountryRequest{
        CountryCode: "PS",
        Format: sdk.String("XML"),
        Key: "2517bc4fc3f790e8f09bc808bb63b899",
        Lang: sdk.String("AR"),
        Params: sdk.String("language"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGeoIP

Returns the geolocation data of the visitor.

Greip API - Retrieve Visitor Info
<https://docs.greip.io/methods/retrieve-visitor-info>

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
    res, err := s.SDK.GetGeoIP(ctx, operations.GetGeoIPRequest{
        Format: sdk.String("XML"),
        Key: "2517bc4fc3f790e8f09bc808bb63b899",
        Lang: sdk.String("AR"),
        Params: sdk.String("currency"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIPLookup

Returns the geolocation data of a specific IP Address.

Greip API - Lookup IP Address
<https://docs.greip.io/methods/lookup-ip-address>

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
    res, err := s.SDK.GetIPLookup(ctx, operations.GetIPLookupRequest{
        Format: sdk.String("XML"),
        IP: "1.1.1.1",
        Key: "2517bc4fc3f790e8f09bc808bb63b899",
        Lang: sdk.String("AR"),
        Params: sdk.String("currency"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBadWords

badWords endpoint: Detects whether user inputs contain profanity or not.

Greip API - Profanity Detection
<https://docs.greip.io/methods/profanity-detection>

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
    res, err := s.SDK.GetBadWords(ctx, operations.GetBadWordsRequest{
        Format: sdk.String("JSON"),
        Key: "2517bc4fc3f790e8f09bc808bb63b899",
        ListBadWords: sdk.String("no"),
        ScoreOnly: sdk.String("no"),
        Text: "This is a sample text without profanity!",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetValidateEmail

This method can be used as an extra-layer of your system for validating email addresses.

Greip API - Email Validation
<https://docs.greip.io/methods/data-validation/email-validation>

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
    res, err := s.SDK.GetValidateEmail(ctx, operations.GetValidateEmailRequest{
        Email: "name@domain.com",
        Format: sdk.String("JSON"),
        Key: "2517bc4fc3f790e8f09bc808bb63b899",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetValidatePhone

This method can be used as an extra-layer of your system for validating phone numbers.

Greip API - Phone Number Validation
<https://docs.greip.io/methods/data-validation/phone-number-validation>

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
    res, err := s.SDK.GetValidatePhone(ctx, operations.GetValidatePhoneRequest{
        CountryCode: "US",
        Format: sdk.String("JSON"),
        Key: "2517bc4fc3f790e8f09bc808bb63b899",
        Phone: "1234567890",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
