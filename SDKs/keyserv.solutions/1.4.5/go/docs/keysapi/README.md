# KeysAPI

### Available Operations

* [KeysAPICurrent](#keysapicurrent)
* [KeysAPICustom](#keysapicustom)
* [KeysAPIExpiry](#keysapiexpiry)
* [KeysAPIFind](#keysapifind)

## KeysAPICurrent

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
    res, err := s.KeysAPI.KeysAPICurrent(ctx, operations.KeysAPICurrentRequest{
        Serial: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeysAPICurrent200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## KeysAPICustom

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
    res, err := s.KeysAPI.KeysAPICustom(ctx, operations.KeysAPICustomRequest{
        Serial: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeysAPICustom200ApplicationOctetStreamBinaryString != nil {
        // handle response
    }
}
```

## KeysAPIExpiry

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
    res, err := s.KeysAPI.KeysAPIExpiry(ctx, operations.KeysAPIExpiryRequest{
        Serial: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeysAPIExpiry200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## KeysAPIFind

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
    res, err := s.KeysAPI.KeysAPIFind(ctx, operations.KeysAPIFindRequest{
        Serial: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeysAPIFind200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
