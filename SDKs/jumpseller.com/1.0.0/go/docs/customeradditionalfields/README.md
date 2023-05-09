# CustomerAdditionalFields

### Available Operations

* [DeleteCustomersIDFieldsFieldID](#deletecustomersidfieldsfieldid) - Delete a Customer Additional Field.
* [GetCustomersIDFields](#getcustomersidfields) - Retrieves the Customer Additional Field of a Customer.
* [GetCustomersIDFieldsFieldID](#getcustomersidfieldsfieldid) - Retrieve a single Customer Additional Field.
* [PostCustomersIDFields](#postcustomersidfields) - Adds Customer Additional Fields to a Customer.
* [PutCustomersIDFieldsFieldID](#putcustomersidfieldsfieldid) - Update a Customer Additional Field.

## DeleteCustomersIDFieldsFieldID

Delete a Customer Additional Field.

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
    res, err := s.CustomerAdditionalFields.DeleteCustomersIDFieldsFieldID(ctx, operations.DeleteCustomersIDFieldsFieldIDRequest{
        Authtoken: "commodi",
        FieldID: 918236,
        ID: 64147,
        Login: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomersIDFieldsFieldID200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetCustomersIDFields

Retrieves the Customer Additional Field of a Customer.

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
    res, err := s.CustomerAdditionalFields.GetCustomersIDFields(ctx, operations.GetCustomersIDFieldsRequest{
        Authtoken: "quidem",
        ID: 565189,
        Login: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerAdditionalFields != nil {
        // handle response
    }
}
```

## GetCustomersIDFieldsFieldID

Retrieve a single Customer Additional Field.

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
    res, err := s.CustomerAdditionalFields.GetCustomersIDFieldsFieldID(ctx, operations.GetCustomersIDFieldsFieldIDRequest{
        Authtoken: "pariatur",
        FieldID: 265389,
        ID: 508969,
        Login: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerAdditionalField != nil {
        // handle response
    }
}
```

## PostCustomersIDFields

Adds Customer Additional Fields to a Customer.

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
    res, err := s.CustomerAdditionalFields.PostCustomersIDFields(ctx, operations.PostCustomersIDFieldsRequest{
        CustomerAdditionalFieldEdit: shared.CustomerAdditionalFieldEdit{
            CustomerAdditionalField: &shared.CustomerAdditionalFieldEditFields{
                CheckoutCustomFieldID: sdk.Int(916723),
                Value: sdk.String("quasi"),
            },
        },
        Authtoken: "repudiandae",
        ID: 575947,
        Login: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerAdditionalField != nil {
        // handle response
    }
}
```

## PutCustomersIDFieldsFieldID

Update a Customer Additional Field.

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
    res, err := s.CustomerAdditionalFields.PutCustomersIDFieldsFieldID(ctx, operations.PutCustomersIDFieldsFieldIDRequest{
        CustomerAdditionalFieldEdit: shared.CustomerAdditionalFieldEdit{
            CustomerAdditionalField: &shared.CustomerAdditionalFieldEditFields{
                CheckoutCustomFieldID: sdk.Int(929297),
                Value: sdk.String("incidunt"),
            },
        },
        Authtoken: "enim",
        FieldID: 9356,
        ID: 667411,
        Login: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerAdditionalField != nil {
        // handle response
    }
}
```
