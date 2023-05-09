# VirtualBillingMeterDeactivate

### Available Operations

* [VirtualBillingMeterDeactivatePostForm](#virtualbillingmeterdeactivatepostform) - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* [VirtualBillingMeterDeactivatePostJSON](#virtualbillingmeterdeactivatepostjson) - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* [VirtualBillingMeterDeactivatePostRaw](#virtualbillingmeterdeactivatepostraw) - Beta: Virtual Meter API: Deactivates a Virtual Meter.

## VirtualBillingMeterDeactivatePostForm

Beta: Virtual Meter API: Deactivates a Virtual Meter.

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
    res, err := s.VirtualBillingMeterDeactivate.VirtualBillingMeterDeactivatePostForm(ctx, shared.VMeterToDeactivate{
        ID: sdk.String("95fa8897-0e18-49db-b30f-cb33ea055b19"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## VirtualBillingMeterDeactivatePostJSON

Beta: Virtual Meter API: Deactivates a Virtual Meter.

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
    res, err := s.VirtualBillingMeterDeactivate.VirtualBillingMeterDeactivatePostJSON(ctx, shared.VMeterToDeactivate{
        ID: sdk.String("7cd44e2f-52d8-42d3-913b-b6f48b656bcd"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## VirtualBillingMeterDeactivatePostRaw

Beta: Virtual Meter API: Deactivates a Virtual Meter.

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
    res, err := s.VirtualBillingMeterDeactivate.VirtualBillingMeterDeactivatePostRaw(ctx, []byte("facilis"))
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```
