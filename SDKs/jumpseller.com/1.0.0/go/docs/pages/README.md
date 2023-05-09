# Pages

### Available Operations

* [DeletePagesIDJSON](#deletepagesidjson) - Delete an existing Page.
* [GetPagesJSON](#getpagesjson) - Retrieve all Pages.
* [GetPagesCountJSON](#getpagescountjson) - Count all Pages.
* [GetPagesIDJSON](#getpagesidjson) - Retrieve a single Page by id.
* [PostPagesJSON](#postpagesjson) - Create a new Page.
* [PutPagesIDJSON](#putpagesidjson) - Update a Page.

## DeletePagesIDJSON

Delete an existing Page.

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
    res, err := s.Pages.DeletePagesIDJSON(ctx, operations.DeletePagesIDJSONRequest{
        Authtoken: "quis",
        ID: 218403,
        Login: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePagesIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetPagesJSON

Retrieve all Pages.

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
    res, err := s.Pages.GetPagesJSON(ctx, operations.GetPagesJSONRequest{
        Authtoken: "voluptate",
        Limit: sdk.Int64(231701),
        Login: "vero",
        Page: sdk.Int64(949319),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pages != nil {
        // handle response
    }
}
```

## GetPagesCountJSON

Count all Pages.

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
    res, err := s.Pages.GetPagesCountJSON(ctx, operations.GetPagesCountJSONRequest{
        Authtoken: "dignissimos",
        Login: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetPagesIDJSON

Retrieve a single Page by id.

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
    res, err := s.Pages.GetPagesIDJSON(ctx, operations.GetPagesIDJSONRequest{
        Authtoken: "distinctio",
        ID: 799203,
        Login: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## PostPagesJSON

Create a new Page.

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
    res, err := s.Pages.PostPagesJSON(ctx, operations.PostPagesJSONRequest{
        PageModify: shared.PageModify{
            Page: &shared.PageModifyFields{
                Body: sdk.String("similique"),
                Categories: []shared.PageCategory{
                    shared.PageCategory{
                        ID: sdk.Int64(874288),
                        Name: sdk.String("Joanne Sporer"),
                        Position: sdk.Int64(617877),
                    },
                    shared.PageCategory{
                        ID: sdk.Int64(773326),
                        Name: sdk.String("Camille Heidenreich"),
                        Position: sdk.Int64(780427),
                    },
                    shared.PageCategory{
                        ID: sdk.Int64(981830),
                        Name: sdk.String("Ted Romaguera MD"),
                        Position: sdk.Int64(269479),
                    },
                },
                Image: &shared.PageModifyFieldsImage{
                    ID: sdk.Int64(368584),
                    URL: sdk.String("ea"),
                },
                MetaDescription: sdk.String("aspernatur"),
                PageTitle: sdk.String("vel"),
                Permalink: sdk.String("possimus"),
                Status: shared.PageModifyFieldsStatusEnumPublic.ToPointer(),
                Template: sdk.Int64(189848),
                Title: sdk.String("Ms."),
            },
        },
        Authtoken: "laudantium",
        Login: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## PutPagesIDJSON

Update a Page.

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
    res, err := s.Pages.PutPagesIDJSON(ctx, operations.PutPagesIDJSONRequest{
        PageModify: shared.PageModify{
            Page: &shared.PageModifyFields{
                Body: sdk.String("dolor"),
                Categories: []shared.PageCategory{
                    shared.PageCategory{
                        ID: sdk.Int64(97844),
                        Name: sdk.String("Freda Marks"),
                        Position: sdk.Int64(960835),
                    },
                    shared.PageCategory{
                        ID: sdk.Int64(788873),
                        Name: sdk.String("Nathaniel Ryan"),
                        Position: sdk.Int64(399499),
                    },
                    shared.PageCategory{
                        ID: sdk.Int64(81101),
                        Name: sdk.String("Rosemary Ryan"),
                        Position: sdk.Int64(132487),
                    },
                    shared.PageCategory{
                        ID: sdk.Int64(325310),
                        Name: sdk.String("Mr. Elsa Reinger"),
                        Position: sdk.Int64(770581),
                    },
                },
                Image: &shared.PageModifyFieldsImage{
                    ID: sdk.Int64(304582),
                    URL: sdk.String("fugit"),
                },
                MetaDescription: sdk.String("accusamus"),
                PageTitle: sdk.String("inventore"),
                Permalink: sdk.String("non"),
                Status: shared.PageModifyFieldsStatusEnumPublic.ToPointer(),
                Template: sdk.Int64(677412),
                Title: sdk.String("Miss"),
            },
        },
        Authtoken: "placeat",
        ID: 245367,
        Login: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```
