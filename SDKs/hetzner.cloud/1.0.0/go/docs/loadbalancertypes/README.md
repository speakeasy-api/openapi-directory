# LoadBalancerTypes

## Overview

Load Balancer types define kinds of Load Balancers offered. Each type has an hourly and a monthly cost. You will pay whichever amount is lower for your usage of this specific Load Balancer. Costs may differ between Locations.

Currency for all amounts is €. All prices exclude VAT.


### Available Operations

* [GetLoadBalancerTypes](#getloadbalancertypes) - Get all Load Balancer Types
* [GetLoadBalancerTypesID](#getloadbalancertypesid) - Get a Load Balancer Type

## GetLoadBalancerTypes

Gets all Load Balancer type objects.

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
    res, err := s.LoadBalancerTypes.GetLoadBalancerTypes(ctx, operations.GetLoadBalancerTypesRequest{
        Name: sdk.String("Arnold Kirlin"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLoadBalancerTypes200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetLoadBalancerTypesID

Gets a specific Load Balancer type object.

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
    res, err := s.LoadBalancerTypes.GetLoadBalancerTypesID(ctx, operations.GetLoadBalancerTypesIDRequest{
        ID: 699479,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLoadBalancerTypesID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
