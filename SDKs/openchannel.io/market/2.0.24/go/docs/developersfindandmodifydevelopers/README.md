# DevelopersFindAndModifyDevelopers

### Available Operations

* [DeleteDevelopersDeveloperID](#deletedevelopersdeveloperid) - Removes a single developer
* [GetDevelopers](#getdevelopers) - Returns a paginated list of developers
* [GetDevelopersDeveloperID](#getdevelopersdeveloperid) - Returns a single developer
* [PatchDevelopersDeveloperID](#patchdevelopersdeveloperid) - Updates the developer fields
* [PostDevelopersDeveloperID](#postdevelopersdeveloperid) - Updates the developer record or adds the developer if it doesn't exist

## DeleteDevelopersDeveloperID

Removes a single developer

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DevelopersFindAndModifyDevelopers.DeleteDevelopersDeveloperID(ctx, operations.DeleteDevelopersDeveloperIDRequest{
        DeveloperID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDevelopers

- Results are paginated and the default is value is 100 if no limit is provided


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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DevelopersFindAndModifyDevelopers.GetDevelopers(ctx, operations.GetDevelopersRequest{
        Limit: sdk.Int64(97101),
        PageNumber: sdk.Int64(622846),
        Query: sdk.String("temporibus"),
        Sort: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDevelopersDeveloperID

Returns a single developer

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DevelopersFindAndModifyDevelopers.GetDevelopersDeveloperID(ctx, operations.GetDevelopersDeveloperIDRequest{
        DeveloperID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchDevelopersDeveloperID

Updates the developer fields

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DevelopersFindAndModifyDevelopers.PatchDevelopersDeveloperID(ctx, operations.PatchDevelopersDeveloperIDRequest{
        CustomData: sdk.String("reiciendis"),
        DeveloperID: "voluptatibus",
        Email: sdk.String("Jane.Langosh60@hotmail.com"),
        Name: sdk.String("Ms. Karla Aufderhar"),
        Type: sdk.String("maiores"),
        Username: sdk.String("Blanche48"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostDevelopersDeveloperID

Updates the developer record or adds the developer if it doesn't exist

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DevelopersFindAndModifyDevelopers.PostDevelopersDeveloperID(ctx, operations.PostDevelopersDeveloperIDRequest{
        CustomData: sdk.String("dicta"),
        DeveloperID: "harum",
        Email: sdk.String("Shania.Jerde21@gmail.com"),
        Name: sdk.String("Virgil Mante"),
        Type: sdk.String("praesentium"),
        Username: sdk.String("Judah92"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
