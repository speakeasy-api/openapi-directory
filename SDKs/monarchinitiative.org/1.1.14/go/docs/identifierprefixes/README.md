# IdentifierPrefixes

## Overview

identifier prefixes

### Available Operations

* [GetPrefixCollection](#getprefixcollection) - Returns list of prefixes
* [GetPrefixContract](#getprefixcontract) - Returns contracted URI
* [GetPrefixExpand](#getprefixexpand) - Returns expanded URI

## GetPrefixCollection

Returns list of prefixes

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
    res, err := s.IdentifierPrefixes.GetPrefixCollection(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPrefixContract

Returns contracted URI

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
    res, err := s.IdentifierPrefixes.GetPrefixContract(ctx, operations.GetPrefixContractRequest{
        URI: "https://expensive-cassava.net",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPrefixExpand

Returns expanded URI

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
    res, err := s.IdentifierPrefixes.GetPrefixExpand(ctx, operations.GetPrefixExpandRequest{
        ID: "78f15626-398a-40dc-b663-24ccb06c8ca1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
