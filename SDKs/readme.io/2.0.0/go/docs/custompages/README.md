# CustomPages

### Available Operations

* [CreateCustomPage](#createcustompage) - Create custom page
* [DeleteCustomPage](#deletecustompage) - Delete custom page
* [GetCustomPage](#getcustompage) - Get custom page
* [GetCustomPages](#getcustompages) - Get custom pages
* [UpdateCustomPage](#updatecustompage) - Update custom page

## CreateCustomPage

Create a new custom page inside of this project

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomPages.CreateCustomPage(ctx, shared.CustomPage{
        Body: sdk.String("quam"),
        Hidden: sdk.Bool(false),
        HTML: sdk.String("molestiae"),
        Htmlmode: sdk.Bool(false),
        Title: "Mrs.",
    }, operations.CreateCustomPageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCustomPage

Delete the custom page with this slug

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
    res, err := s.CustomPages.DeleteCustomPage(ctx, operations.DeleteCustomPageRequest{
        Slug: "error",
    }, operations.DeleteCustomPageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCustomPage

Returns the custom page with this slug

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
    res, err := s.CustomPages.GetCustomPage(ctx, operations.GetCustomPageRequest{
        Slug: "quia",
    }, operations.GetCustomPageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCustomPages

Returns a list of custom pages associated with the project API key

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
    res, err := s.CustomPages.GetCustomPages(ctx, operations.GetCustomPagesRequest{
        Page: sdk.Int64(338007),
        PerPage: sdk.Int64(110375),
    }, operations.GetCustomPagesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCustomPage

Update a custom page with this slug

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
    res, err := s.CustomPages.UpdateCustomPage(ctx, operations.UpdateCustomPageRequest{
        CustomPage: shared.CustomPage{
            Body: sdk.String("laborum"),
            Hidden: sdk.Bool(false),
            HTML: sdk.String("animi"),
            Htmlmode: sdk.Bool(false),
            Title: "Mrs.",
        },
        Slug: "odit",
    }, operations.UpdateCustomPageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
