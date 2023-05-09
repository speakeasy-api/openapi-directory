# ShippingMethods

### Available Operations

* [DeleteShippingMethodsIDJSON](#deleteshippingmethodsidjson) - Delete an existing Shipping Method.
* [GetShippingMethodsJSON](#getshippingmethodsjson) - Retrieve all Store's Shipping Methods.
* [GetShippingMethodsIDJSON](#getshippingmethodsidjson) - Retrieve a single Shipping Method.
* [PostShippingMethodsJSON](#postshippingmethodsjson) - Creates a Shipping Method.
* [PutShippingMethodsIDJSON](#putshippingmethodsidjson) - Update a Shipping Method.

## DeleteShippingMethodsIDJSON

Delete an existing Shipping Method.

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
    res, err := s.ShippingMethods.DeleteShippingMethodsIDJSON(ctx, operations.DeleteShippingMethodsIDJSONRequest{
        Authtoken: "harum",
        ID: 115703,
        Login: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteShippingMethodsIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetShippingMethodsJSON

Retrieve all Store's Shipping Methods.

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
    res, err := s.ShippingMethods.GetShippingMethodsJSON(ctx, operations.GetShippingMethodsJSONRequest{
        Authtoken: "occaecati",
        Login: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingMethods != nil {
        // handle response
    }
}
```

## GetShippingMethodsIDJSON

Retrieve a single Shipping Method.

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
    res, err := s.ShippingMethods.GetShippingMethodsIDJSON(ctx, operations.GetShippingMethodsIDJSONRequest{
        Authtoken: "quidem",
        ID: 539074,
        Login: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingMethod != nil {
        // handle response
    }
}
```

## PostShippingMethodsJSON

Creates a Shipping Method.

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
    res, err := s.ShippingMethods.PostShippingMethodsJSON(ctx, operations.PostShippingMethodsJSONRequest{
        ShippingMethodEdit: shared.ShippingMethodEdit{
            ShippingMethod: &shared.ShippingMethodEditShippingMethod{
                CallbackURL: sdk.String("nam"),
                City: sdk.String("Hempstead"),
                FetchServicesURL: sdk.String("alias"),
                Name: sdk.String("Joanna Klocko"),
                Postal: sdk.String("provident"),
                State: sdk.String("repellendus"),
                Token: sdk.String("delectus"),
            },
        },
        Authtoken: "voluptates",
        Login: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingMethod != nil {
        // handle response
    }
}
```

## PutShippingMethodsIDJSON

Update a Shipping Method.

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
    res, err := s.ShippingMethods.PutShippingMethodsIDJSON(ctx, operations.PutShippingMethodsIDJSONRequest{
        ShippingMethodEdit: shared.ShippingMethodEdit{
            ShippingMethod: &shared.ShippingMethodEditShippingMethod{
                CallbackURL: sdk.String("est"),
                City: sdk.String("Kiehnfield"),
                FetchServicesURL: sdk.String("fuga"),
                Name: sdk.String("Miss Hubert Hartmann"),
                Postal: sdk.String("quasi"),
                State: sdk.String("atque"),
                Token: sdk.String("reprehenderit"),
            },
        },
        Authtoken: "asperiores",
        ID: 519952,
        Login: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingMethod != nil {
        // handle response
    }
}
```
