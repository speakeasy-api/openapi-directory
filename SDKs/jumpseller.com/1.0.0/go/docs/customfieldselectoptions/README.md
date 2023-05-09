# CustomFieldSelectOptions

### Available Operations

* [GetCustomFieldsIDSelectOptionsJSON](#getcustomfieldsidselectoptionsjson) - Retrieve all Store's Custom Fields.
* [GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON](#getcustomfieldsidselectoptionscustomfieldselectoptionidjson) - Retrieve a single SelectOption from a CustomField.
* [PostCustomFieldsIDSelectOptionsJSON](#postcustomfieldsidselectoptionsjson) - Create a new Custom Field Select Option.
* [PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON](#putcustomfieldsidselectoptionscustomfieldselectoptionidjson) - Update a SelectOption from a CustomField.

## GetCustomFieldsIDSelectOptionsJSON

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
    res, err := s.CustomFieldSelectOptions.GetCustomFieldsIDSelectOptionsJSON(ctx, operations.GetCustomFieldsIDSelectOptionsJSONRequest{
        Authtoken: "est",
        ID: 653140,
        Login: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomFieldSelectOptions != nil {
        // handle response
    }
}
```

## GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON

Retrieve a single SelectOption from a CustomField.

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
    res, err := s.CustomFieldSelectOptions.GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON(ctx, operations.GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONRequest{
        Authtoken: "dolores",
        CustomFieldSelectOptionID: 210382,
        ID: 358152,
        Login: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomFieldSelectOption != nil {
        // handle response
    }
}
```

## PostCustomFieldsIDSelectOptionsJSON

Create a new Custom Field Select Option.

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
    res, err := s.CustomFieldSelectOptions.PostCustomFieldsIDSelectOptionsJSON(ctx, operations.PostCustomFieldsIDSelectOptionsJSONRequest{
        CustomFieldSelectOptionEdit: shared.CustomFieldSelectOptionEdit{
            CustomFieldSelectOption: &shared.CustomFieldSelectOptionEditFields{
                Value: sdk.String("nobis"),
            },
        },
        Authtoken: "enim",
        ID: "955907af-f1a3-4a2f-a946-7739251aa52c",
        Login: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomFieldSelectOption != nil {
        // handle response
    }
}
```

## PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON

Update a SelectOption from a CustomField.

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
    res, err := s.CustomFieldSelectOptions.PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON(ctx, operations.PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONRequest{
        CustomFieldSelectOptionEdit: shared.CustomFieldSelectOptionEdit{
            CustomFieldSelectOption: &shared.CustomFieldSelectOptionEditFields{
                Value: sdk.String("tenetur"),
            },
        },
        Authtoken: "ipsam",
        CustomFieldSelectOptionID: 662527,
        ID: 820994,
        Login: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomFieldSelectOption != nil {
        // handle response
    }
}
```
