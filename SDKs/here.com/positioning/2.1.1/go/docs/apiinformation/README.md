# APIInformation

## Overview

Additional API Information

### Available Operations

* [GetAPIVersion](#getapiversion) - API version
* [GetHealth](#gethealth) - Service health

## GetAPIVersion

Retrieves API Specification version information

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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.APIInformation.GetAPIVersion(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIVersion != nil {
        // handle response
    }
}
```

## GetHealth

Tests basic health of the service

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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.APIInformation.GetHealth(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIHealthStatus != nil {
        // handle response
    }
}
```
