# CheckoutCustomFields

### Available Operations

* [DeleteCheckoutCustomFieldsIDJSON](#deletecheckoutcustomfieldsidjson) - Delete an existing CheckoutCustomField.
* [GetCheckoutCustomFieldsJSON](#getcheckoutcustomfieldsjson) - Retrieve all Checkout Custom Fields.
* [GetCheckoutCustomFieldsIDJSON](#getcheckoutcustomfieldsidjson) - Retrieve a single CheckoutCustomField.
* [PostCheckoutCustomFieldsJSON](#postcheckoutcustomfieldsjson) - Create a new CheckoutCustomField.
* [PutCheckoutCustomFieldsIDJSON](#putcheckoutcustomfieldsidjson) - Update a CheckoutCustomField.

## DeleteCheckoutCustomFieldsIDJSON

Delete an existing CheckoutCustomField.

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
    res, err := s.CheckoutCustomFields.DeleteCheckoutCustomFieldsIDJSON(ctx, operations.DeleteCheckoutCustomFieldsIDJSONRequest{
        Authtoken: "esse",
        ID: 520478,
        Login: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCheckoutCustomFieldsIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetCheckoutCustomFieldsJSON

Retrieve all Checkout Custom Fields.

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
    res, err := s.CheckoutCustomFields.GetCheckoutCustomFieldsJSON(ctx, operations.GetCheckoutCustomFieldsJSONRequest{
        Authtoken: "dolorum",
        Limit: sdk.Int64(118274),
        Login: "nam",
        Page: sdk.Int64(639921),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckoutCustomFields != nil {
        // handle response
    }
}
```

## GetCheckoutCustomFieldsIDJSON

Retrieve a single CheckoutCustomField.

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
    res, err := s.CheckoutCustomFields.GetCheckoutCustomFieldsIDJSON(ctx, operations.GetCheckoutCustomFieldsIDJSONRequest{
        Authtoken: "occaecati",
        ID: 143353,
        Login: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckoutCustomField != nil {
        // handle response
    }
}
```

## PostCheckoutCustomFieldsJSON

Type values can be: input, selection, checkbox, date or text. Area values can be: contact, billing_shipping or other.

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
    res, err := s.CheckoutCustomFields.PostCheckoutCustomFieldsJSON(ctx, operations.PostCheckoutCustomFieldsJSONRequest{
        CheckoutCustomFieldEdit: shared.CheckoutCustomFieldEdit{
            CheckoutCustomField: &shared.CheckoutCustomFieldEditFields{
                Area: shared.CheckoutCustomFieldEditFieldsAreaEnumOther.ToPointer(),
                CustomFieldSelectOptions: []string{
                    "totam",
                    "beatae",
                    "commodi",
                    "molestiae",
                },
                Deletable: sdk.Bool(false),
                Label: sdk.String("modi"),
                Position: sdk.Int(186332),
                Required: sdk.Bool(false),
                Type: shared.CheckoutCustomFieldEditFieldsTypeEnumCheckbox.ToPointer(),
            },
        },
        Authtoken: "cum",
        Login: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckoutCustomField != nil {
        // handle response
    }
}
```

## PutCheckoutCustomFieldsIDJSON

Update a CheckoutCustomField.

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
    res, err := s.CheckoutCustomFields.PutCheckoutCustomFieldsIDJSON(ctx, operations.PutCheckoutCustomFieldsIDJSONRequest{
        CheckoutCustomFieldEdit: shared.CheckoutCustomFieldEdit{
            CheckoutCustomField: &shared.CheckoutCustomFieldEditFields{
                Area: shared.CheckoutCustomFieldEditFieldsAreaEnumContact.ToPointer(),
                CustomFieldSelectOptions: []string{
                    "aspernatur",
                    "perferendis",
                    "ad",
                },
                Deletable: sdk.Bool(false),
                Label: sdk.String("natus"),
                Position: sdk.Int(149675),
                Required: sdk.Bool(false),
                Type: shared.CheckoutCustomFieldEditFieldsTypeEnumCheckbox.ToPointer(),
            },
        },
        Authtoken: "dolor",
        ID: 616934,
        Login: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckoutCustomField != nil {
        // handle response
    }
}
```
