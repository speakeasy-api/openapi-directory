# Public

## Overview

Unauthenticated

### Available Operations

* [GetLatestAgentVersion](#getlatestagentversion) - Returns latest agent version
* [GetLatestPlatformVersion](#getlatestplatformversion) - Returns latest platform version
* [GetLatestScannerVersion](#getlatestscannerversion) - Returns latest scanner version

## GetLatestAgentVersion

Returns latest agent version

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
    res, err := s.Public.GetLatestAgentVersion(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ComponentVersion != nil {
        // handle response
    }
}
```

## GetLatestPlatformVersion

Returns latest platform version

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
    res, err := s.Public.GetLatestPlatformVersion(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ComponentVersion != nil {
        // handle response
    }
}
```

## GetLatestScannerVersion

Returns latest scanner version

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
    res, err := s.Public.GetLatestScannerVersion(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ComponentVersion != nil {
        // handle response
    }
}
```
