# Properties

## Overview

Endpoints for listing properties.

### Available Operations

* [GetAccountProperties](#getaccountproperties) - Get account properties
* [GetUserProperties](#getuserproperties) - Get user properties

## GetAccountProperties

Endpoint to list account properties.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Properties.GetAccountProperties(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountProperties200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUserProperties

Endpoint to list user properties.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Properties.GetUserProperties(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserProperties200ApplicationJSONObject != nil {
        // handle response
    }
}
```
