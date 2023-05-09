# TokenVerification

## Overview

Ergo Platform Genuine Tokens Verification

EIP-21
<https://github.com/ergoplatform/eips/blob/master/eip-0021.md>
### Available Operations

* [CheckToken](#checktoken) - Check a token verification
* [ListBlocked](#listblocked) - Lists all blocked tokens
* [ListGenuine](#listgenuine) - Lists all genuine tokens known

## CheckToken

Check a token verification

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
    res, err := s.TokenVerification.CheckToken(ctx, operations.CheckTokenRequest{
        TokenID: "quia",
        TokenName: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListBlocked

Lists all blocked tokens

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
    res, err := s.TokenVerification.ListBlocked(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListGenuine

Lists all genuine tokens known

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
    res, err := s.TokenVerification.ListGenuine(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
