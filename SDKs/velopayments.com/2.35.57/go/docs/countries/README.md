# Countries

### Available Operations

* [~~ListPaymentChannelRulesV1~~](#listpaymentchannelrulesv1) - List Payment Channel Country Rules :warning: **Deprecated**
* [~~ListSupportedCountriesV1~~](#listsupportedcountriesv1) - List Supported Countries :warning: **Deprecated**
* [~~ListSupportedCountriesV2~~](#listsupportedcountriesv2) - List Supported Countries :warning: **Deprecated**

## ~~ListPaymentChannelRulesV1~~

List the country specific payment channel rules.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Countries.ListPaymentChannelRulesV1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentChannelRulesResponse != nil {
        // handle response
    }
}
```

## ~~ListSupportedCountriesV1~~

<p>List the supported countries.</p>
<p>This version will be retired in March 2020. Use /v2/supportedCountries</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Countries.ListSupportedCountriesV1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SupportedCountriesResponse != nil {
        // handle response
    }
}
```

## ~~ListSupportedCountriesV2~~

List the supported countries.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Countries.ListSupportedCountriesV2(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SupportedCountriesResponseV2 != nil {
        // handle response
    }
}
```
