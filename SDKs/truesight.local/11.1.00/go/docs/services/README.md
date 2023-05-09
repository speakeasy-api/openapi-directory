# Services

## Overview

API operations to interact with the monitored Services.

### Available Operations

* [GetOneService](#getoneservice) - Gets detailed information about a specific service.
* [GetServices](#getservices) - Gets summarized information about all monitored services.

## GetOneService

You need to provide a <b>Service ID</b> ID :<br>- use the <b>hardware/services</b> service to get all available service IDs.

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
    res, err := s.Services.GetOneService(ctx, operations.GetOneServiceRequest{
        ServiceID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetServices

Lists the available ServiceSummary instances.

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
    res, err := s.Services.GetServices(ctx, operations.GetServicesRequest{
        Direction: operations.GetServicesDirectionEnumAsc.ToPointer(),
        Limit: sdk.Int(612096),
        Page: sdk.String("dolor"),
        Sort: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
