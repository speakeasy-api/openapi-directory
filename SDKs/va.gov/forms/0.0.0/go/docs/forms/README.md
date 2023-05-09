# Forms

### Available Operations

* [FindFormByFormName](#findformbyformname) - Find form by form name
* [FindForms](#findforms) - Returns all VA Forms and their last revision date

## FindFormByFormName

Returns a single form and the full revision history

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
    res, err := s.Forms.FindFormByFormName(ctx, operations.FindFormByFormNameRequest{
        FormName: "provident",
    }, operations.FindFormByFormNameSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindFormByFormName200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## FindForms

Returns an index of all available VA forms. Optionally, pass a query parameter to filter forms by form number or title.

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
    res, err := s.Forms.FindForms(ctx, operations.FindFormsRequest{
        Query: sdk.String("distinctio"),
    }, operations.FindFormsSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindForms200ApplicationJSONObject != nil {
        // handle response
    }
}
```
