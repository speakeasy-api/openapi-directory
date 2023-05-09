# SDK

### Available Operations

* [Get](#get) - Gets data from the slave identified by {address}
* [GetMulti](#getmulti) - Gets data from the slave identified by {address}, and supports multiple responses from the slave
* [Hat](#hat) - Gets Raspberry Pi Hat information
* [HatOff](#hatoff) - Turns off power to the M-Bus
* [HatOn](#haton) - Turns on power to the M-Bus
* [MbusAPI](#mbusapi) - Returns this API specification
* [Scan](#scan) - Scan the specified device for slaves

## Get

Gets data from the slave identified by {address}

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.Get(ctx, operations.GetRequest{
        Address: "48",
        Baudrate: shared.BaudrateEnumTwoThousandFourHundred,
        Device: "ttyAMA0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MbusData != nil {
        // handle response
    }
}
```

## GetMulti

Gets data from the slave identified by {address}, and supports multiple responses from the slave

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMulti(ctx, operations.GetMultiRequest{
        Address: "48",
        Baudrate: shared.BaudrateEnumFourThousandEightHundred,
        Device: "ttyAMA0",
        Maxframes: 16,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MbusData != nil {
        // handle response
    }
}
```

## Hat

Gets Raspberry Pi Hat information

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
    res, err := s.SDK.Hat(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Hat != nil {
        // handle response
    }
}
```

## HatOff

Turns off power to the M-Bus

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
    res, err := s.SDK.HatOff(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HatOn

Turns on power to the M-Bus

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
    res, err := s.SDK.HatOn(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MbusAPI

Returns this API specification

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
    res, err := s.SDK.MbusAPI(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Yaml != nil {
        // handle response
    }
}
```

## Scan

Scan the specified device for slaves

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.Scan(ctx, operations.ScanRequest{
        Baudrate: shared.BaudrateEnumNineThousandSixHundred,
        Device: "ttyAMA0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Slaves != nil {
        // handle response
    }
}
```
