# SDK

## Overview

API offered by Microcks, the Kubernetes native tools for API and microservices mocking and testing (microcks.io)

### Available Operations

* [GetResource](#getresource) - Get Resource
* [GetResourcesByService](#getresourcesbyservice) - Get Resources by Service

## GetResource

Get Resource

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
    res, err := s.SDK.GetResource(ctx, operations.GetResourceRequest{
        Name: "Johnnie Stamm",
    }, operations.GetResourceSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resource != nil {
        // handle response
    }
}
```

## GetResourcesByService

Get Resources by Service

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
    res, err := s.SDK.GetResourcesByService(ctx, operations.GetResourcesByServiceRequest{
        ServiceID: "deserunt",
    }, operations.GetResourcesByServiceSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resources != nil {
        // handle response
    }
}
```
