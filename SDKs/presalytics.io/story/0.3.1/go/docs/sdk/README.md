# SDK

## Overview

This API is the main entry point for creating, editing and publishing analytics throught the Presalytics API

### Available Operations

* [GetEnvironment](#getenvironment) - Environment: Get
* [SpecNoTags](#specnotags) - Specification: No tags

## GetEnvironment

pass rendering metadata to the client-side scripts

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
    res, err := s.SDK.GetEnvironment(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEnvironment200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SpecNoTags

json-formatted version of this spec with the tags removed to help with codegen processes

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
    res, err := s.SDK.SpecNoTags(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
