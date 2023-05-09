# Institutions

### Available Operations

* [DeleteInstitutionsID](#deleteinstitutionsid) - Delete institution
* [GetInstitutionsID](#getinstitutionsid) - Get institution
* [GetUsersIDInstitutions](#getusersidinstitutions) - List institutions in user
* [PostUsersIDInstitutions](#postusersidinstitutions) - Create institution in user
* [PutInstitutionsID](#putinstitutionsid) - Update institution

## DeleteInstitutionsID

Deletes an institution and all data within. Alternatively, another institution can be provided to merge the data into to avoid losing it.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Institutions.DeleteInstitutionsID(ctx, operations.DeleteInstitutionsIDRequest{
        ID: 896039,
        MergeIntoInstitutionID: sdk.Int64(572252),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetInstitutionsID

Gets an institution by its ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Institutions.GetInstitutionsID(ctx, operations.GetInstitutionsIDRequest{
        ID: 638921,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Institution != nil {
        // handle response
    }
}
```

## GetUsersIDInstitutions

Lists all the institutions belonging to the user.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Institutions.GetUsersIDInstitutions(ctx, operations.GetUsersIDInstitutionsRequest{
        ID: 223081,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Institutions != nil {
        // handle response
    }
}
```

## PostUsersIDInstitutions

Creates an institution belonging to a user.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Institutions.PostUsersIDInstitutions(ctx, operations.PostUsersIDInstitutionsRequest{
        RequestBody: &operations.PostUsersIDInstitutionsRequestBody{
            CurrencyCode: "NZD",
            Title: "Bank of Foo",
        },
        ID: 891555,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Institution != nil {
        // handle response
    }
}
```

## PutInstitutionsID

Updates the title and currency code for an institution.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Institutions.PutInstitutionsID(ctx, operations.PutInstitutionsIDRequest{
        RequestBody: &operations.PutInstitutionsIDRequestBody{
            CurrencyCode: sdk.String("NZD"),
            Title: sdk.String("Bank of Foo"),
        },
        ID: 952749,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Institution != nil {
        // handle response
    }
}
```
