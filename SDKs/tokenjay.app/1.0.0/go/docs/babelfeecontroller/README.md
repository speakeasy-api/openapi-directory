# BabelFeeController

### Available Operations

* [CheckForNotifications](#checkfornotifications)
* [ErgoPayCreateBabelBox1](#ergopaycreatebabelbox1)
* [GetBabelFeeOverview](#getbabelfeeoverview)

## CheckForNotifications

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
    res, err := s.BabelFeeController.CheckForNotifications(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ErgoPayCreateBabelBox1

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
    res, err := s.BabelFeeController.ErgoPayCreateBabelBox1(ctx, operations.ErgoPayCreateBabelBox1Request{
        BoxID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetBabelFeeOverview

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
    res, err := s.BabelFeeController.GetBabelFeeOverview(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
