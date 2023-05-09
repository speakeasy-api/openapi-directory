# Geolocation

### Available Operations

* [GeocodeAddress](#geocodeaddress) - Geocode Address
* [GeocodeReverse](#geocodereverse) - Geocode Reverse
* [IPInfo](#ipinfo) - IP Info

## GeocodeAddress

Geocode an address, partial address or just the name of a place

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
    res, err := s.Geolocation.GeocodeAddress(ctx, operations.GeocodeAddressRequest{
        Address: sdk.String("803 Lydia Bridge"),
        City: sdk.String("Port Verner"),
        CountryCode: sdk.String("SB"),
        County: sdk.String("odit"),
        FuzzySearch: sdk.Bool(false),
        HouseNumber: sdk.String("at"),
        LanguageCode: sdk.String("at"),
        PostalCode: sdk.String("47845-7617"),
        State: sdk.String("officia"),
        Street: sdk.String("1597 Breitenberg Isle"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GeocodeAddressResponse != nil {
        // handle response
    }
}
```

## GeocodeReverse

Convert a geographic coordinate (latitude and longitude) into a real world address

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
    res, err := s.Geolocation.GeocodeReverse(ctx, operations.GeocodeReverseRequest{
        LanguageCode: sdk.String("molestiae"),
        Latitude: "modi",
        Longitude: "qui",
        Zoom: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GeocodeReverseResponse != nil {
        // handle response
    }
}
```

## IPInfo

Get location information about an IP address and do reverse DNS (PTR) lookups

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
    res, err := s.Geolocation.IPInfo(ctx, operations.IPInfoRequest{
        IP: "cum",
        ReverseLookup: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPInfoResponse != nil {
        // handle response
    }
}
```
