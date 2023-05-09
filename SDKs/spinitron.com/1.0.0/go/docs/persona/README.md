# Persona

### Available Operations

* [GetPersonas](#getpersonas) - Get Personas
* [GetPersonasID](#getpersonasid) - Get Persona by id

## GetPersonas

Get Personas

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Persona.GetPersonas(ctx, operations.GetPersonasRequest{
        Count: sdk.Int64(963663),
        Expand: []string{
            "suscipit",
            "molestiae",
        },
        Fields: []string{
            "placeat",
            "voluptatum",
            "iusto",
            "excepturi",
        },
        Name: sdk.String("Mrs. Sophie Smith MD"),
        Page: sdk.Int64(20218),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPersonas200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPersonasID

Get Persona by id

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Persona.GetPersonasID(ctx, operations.GetPersonasIDRequest{
        Expand: []string{
            "repellendus",
            "sapiente",
        },
        Fields: []string{
            "odit",
            "at",
            "at",
            "maiores",
        },
        ID: 473608,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Persona != nil {
        // handle response
    }
}
```
