# Registrierkasse

## Overview

resources concerning a "Registrierkasse"

### Available Operations

* [GetDEP](#getdep) - Generates a DEP file.
* [GetRegistrierkasse](#getregistrierkasse) - Returns information about a particular `Registrierkasse`.

## GetDEP

Generates a DEP file.

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
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Registrierkasse.GetDEP(ctx, operations.GetDEPRequest{
        RegistrierkasseUUID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRegistrierkasse

Returns information about a particular `Registrierkasse`.

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
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Registrierkasse.GetRegistrierkasse(ctx, operations.GetRegistrierkasseRequest{
        RegistrierkasseUUID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Registrierkasse != nil {
        // handle response
    }
}
```
