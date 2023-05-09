# Areacodes

## Overview

Areacodes of numbers that SureVoIP can supply

### Available Operations

* [GetAreacodes](#getareacodes) - List areacodes
* [GetNumbersAreacodes](#getnumbersareacodes) - Search available numbers by areacode

## GetAreacodes

List areacodes

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Areacodes.GetAreacodes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNumbersAreacodes

You can search by area name, area code or filter using both.


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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Areacodes.GetNumbersAreacodes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNumbersAreacodes200ApplicationJSONObject != nil {
        // handle response
    }
}
```
