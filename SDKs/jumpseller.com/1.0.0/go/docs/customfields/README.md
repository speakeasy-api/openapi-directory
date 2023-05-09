# CustomFields

### Available Operations

* [DeleteCustomFieldsIDJSON](#deletecustomfieldsidjson) - Delete an existing CustomField.
* [DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON](#deletecustomfieldsidselectoptionscustomfieldselectoptionidjson) - Delete an existing CustomFieldSelectOption.
* [GetCustomFieldsJSON](#getcustomfieldsjson) - Retrieve all Store's Custom Fields.
* [GetCustomFieldsIDJSON](#getcustomfieldsidjson) - Retrieve a single CustomField.
* [PostCustomFieldsJSON](#postcustomfieldsjson) - Create a new Custom Field.
* [PutCustomFieldsIDJSON](#putcustomfieldsidjson) - Update a CustomField.

## DeleteCustomFieldsIDJSON

Delete an existing CustomField.

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
    res, err := s.CustomFields.DeleteCustomFieldsIDJSON(ctx, operations.DeleteCustomFieldsIDJSONRequest{
        Authtoken: "quasi",
        ID: 622846,
        Login: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomFieldsIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON

Delete an existing CustomFieldSelectOption.

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
    res, err := s.CustomFields.DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON(ctx, operations.DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONRequest{
        Authtoken: "laborum",
        CustomFieldSelectOptionID: 96098,
        ID: 971945,
        Login: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetCustomFieldsJSON

Retrieve all Store's Custom Fields.

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
    res, err := s.CustomFields.GetCustomFieldsJSON(ctx, operations.GetCustomFieldsJSONRequest{
        Authtoken: "vero",
        Login: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomFields != nil {
        // handle response
    }
}
```

## GetCustomFieldsIDJSON

Retrieve a single CustomField.

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
    res, err := s.CustomFields.GetCustomFieldsIDJSON(ctx, operations.GetCustomFieldsIDJSONRequest{
        Authtoken: "praesentium",
        ID: 976762,
        Login: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomField != nil {
        // handle response
    }
}
```

## PostCustomFieldsJSON

Create a new Custom Field.

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
    res, err := s.CustomFields.PostCustomFieldsJSON(ctx, operations.PostCustomFieldsJSONRequest{
        CustomFieldEdit: shared.CustomFieldEdit{
            CustomField: &shared.CustomFieldEditFields{
                Label: sdk.String("omnis"),
                Type: shared.CustomFieldEditFieldsTypeEnumSelection.ToPointer(),
                Values: []string{
                    "perferendis",
                    "doloremque",
                    "reprehenderit",
                },
            },
        },
        Authtoken: "ut",
        Login: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomField != nil {
        // handle response
    }
}
```

## PutCustomFieldsIDJSON

Update a CustomField.

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
    res, err := s.CustomFields.PutCustomFieldsIDJSON(ctx, operations.PutCustomFieldsIDJSONRequest{
        CustomFieldEdit: shared.CustomFieldEdit{
            CustomField: &shared.CustomFieldEditFields{
                Label: sdk.String("dicta"),
                Type: shared.CustomFieldEditFieldsTypeEnumSelection.ToPointer(),
                Values: []string{
                    "iusto",
                    "dicta",
                },
            },
        },
        Authtoken: "harum",
        ID: 317983,
        Login: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomField != nil {
        // handle response
    }
}
```
