# VirtualBillingMeterActive

### Available Operations

* [VirtualBillingMeterActiveGet](#virtualbillingmeteractiveget) - Beta: Gets all active virtual meters
* [VirtualBillingMeterActivePostForm](#virtualbillingmeteractivepostform) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* [VirtualBillingMeterActivePostJSON](#virtualbillingmeteractivepostjson) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* [VirtualBillingMeterActivePostRaw](#virtualbillingmeteractivepostraw) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

## VirtualBillingMeterActiveGet

Beta: Gets all active virtual meters.

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
    res, err := s.VirtualBillingMeterActive.VirtualBillingMeterActiveGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Devices != nil {
        // handle response
    }
}
```

## VirtualBillingMeterActivePostForm

Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

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
    res, err := s.VirtualBillingMeterActive.VirtualBillingMeterActivePostForm(ctx, shared.VMeterToActivate{
        SerialNumber: sdk.String("nostrum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```

## VirtualBillingMeterActivePostJSON

Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

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
    res, err := s.VirtualBillingMeterActive.VirtualBillingMeterActivePostJSON(ctx, shared.VMeterToActivate{
        SerialNumber: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```

## VirtualBillingMeterActivePostRaw

Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

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
    res, err := s.VirtualBillingMeterActive.VirtualBillingMeterActivePostRaw(ctx, []byte("eligendi"))
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```
