# AccessToken

### Available Operations

* [AccessTokenPutForm](#accesstokenputform) - Creates a Access Token to write on a Card (e.g. NFC)
* [AccessTokenPutJSON](#accesstokenputjson) - Creates a Access Token to write on a Card (e.g. NFC)
* [AccessTokenPutRaw](#accesstokenputraw) - Creates a Access Token to write on a Card (e.g. NFC)

## AccessTokenPutForm

Creates a Access Token to write on a Card (e.g. NFC)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccessToken.AccessTokenPutForm(ctx, shared.AccessTokenToPut{
        CardID: sdk.Int64(715190),
        UserID: sdk.Int64(844266),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenPutForm200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AccessTokenPutJSON

Creates a Access Token to write on a Card (e.g. NFC)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccessToken.AccessTokenPutJSON(ctx, shared.AccessTokenToPut{
        CardID: sdk.Int64(602763),
        UserID: sdk.Int64(857946),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenPutJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## AccessTokenPutRaw

Creates a Access Token to write on a Card (e.g. NFC)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccessToken.AccessTokenPutRaw(ctx, []byte("corrupti"))
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenPutRaw200ApplicationJSONString != nil {
        // handle response
    }
}
```
