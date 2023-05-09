# UsersFindAndModifyUsers

### Available Operations

* [DeleteUsersUserID](#deleteusersuserid) - Removes a single user
* [GetUsers](#getusers) - Returns a paginated list of users
* [GetUsersUserID](#getusersuserid) - Return a single user
* [PatchUsersUserID](#patchusersuserid) - Updates user fields
* [PostUsersUserID](#postusersuserid) - Updates a single user or adds the user if they don't exist

## DeleteUsersUserID

- Results are returned for the market provided within the basic authentication credentials


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
    res, err := s.UsersFindAndModifyUsers.DeleteUsersUserID(ctx, operations.DeleteUsersUserIDRequest{
        UserID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUsers

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
    res, err := s.UsersFindAndModifyUsers.GetUsers(ctx, operations.GetUsersRequest{
        Limit: sdk.Int64(69167),
        PageNumber: sdk.Int64(982575),
        Query: sdk.String("quidem"),
        Sort: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUsersUserID

- Results are returned for the market provided within the basic authentication credentials


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
    res, err := s.UsersFindAndModifyUsers.GetUsersUserID(ctx, operations.GetUsersUserIDRequest{
        UserID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchUsersUserID

Updates user fields

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
    res, err := s.UsersFindAndModifyUsers.PatchUsersUserID(ctx, operations.PatchUsersUserIDRequest{
        CustomData: sdk.String("autem"),
        Email: sdk.String("Ambrose_Streich@hotmail.com"),
        Name: sdk.String("Miss Ginger Feeney"),
        Type: sdk.String("hic"),
        UserID: "libero",
        Username: sdk.String("Nelson_DAmore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostUsersUserID

Updates a single user or adds the user if they don't exist

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
    res, err := s.UsersFindAndModifyUsers.PostUsersUserID(ctx, operations.PostUsersUserIDRequest{
        CustomData: sdk.String("dignissimos"),
        Email: sdk.String("Eulah1@gmail.com"),
        Name: sdk.String("Brooke Kohler"),
        Type: sdk.String("nostrum"),
        UserID: "hic",
        Username: sdk.String("Timothy_Mohr3"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
