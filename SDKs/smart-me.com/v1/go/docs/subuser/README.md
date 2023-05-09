# SubUser

### Available Operations

* [SubUserDelete](#subuserdelete) - Delete a subuser
* [SubUserGet](#subuserget) - Get a sub user. The user must be assigend to the user that makes this call.
* [SubUserPostForm](#subuserpostform) - Creates or updates a subuser.
            To create a new user set no ID (empty)
* [SubUserPostJSON](#subuserpostjson) - Creates or updates a subuser.
            To create a new user set no ID (empty)
* [SubUserPostRaw](#subuserpostraw) - Creates or updates a subuser.
            To create a new user set no ID (empty)

## SubUserDelete

Delete a subuser

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
    res, err := s.SubUser.SubUserDelete(ctx, operations.SubUserDeleteRequest{
        ID: "10661e96-349e-41cf-9e06-e3a437000ae6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubUserGet

Get a sub user. The user must be assigend to the user that makes this call.

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
    res, err := s.SubUser.SubUserGet(ctx, operations.SubUserGetRequest{
        ID: "b6bc9b8f-759e-4ac5-9a97-41d311352965",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubUserData != nil {
        // handle response
    }
}
```

## SubUserPostForm

Creates or updates a subuser.
            To create a new user set no ID (empty)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SubUser.SubUserPostForm(ctx, shared.SubUserData{
        AccessEndDate: types.MustTimeFromString("2021-07-19T20:29:58.626Z"),
        AccessTimeStartDate: types.MustTimeFromString("2021-08-24T00:23:56.434Z"),
        Email: sdk.String("Bulah42@yahoo.com"),
        ID: sdk.String("11435e13-9dbc-4225-9b1a-bda8c070e108"),
        NewPassword: sdk.String("dolore"),
        PermissionLevel: shared.SubUserDataPermissionLevelEnumSelectedFolderOnly.ToPointer(),
        Username: sdk.String("Michale.Bartoletti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubUserPostJSON

Creates or updates a subuser.
            To create a new user set no ID (empty)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SubUser.SubUserPostJSON(ctx, shared.SubUserData{
        AccessEndDate: types.MustTimeFromString("2022-03-05T22:46:19.288Z"),
        AccessTimeStartDate: types.MustTimeFromString("2022-05-01T23:00:45.808Z"),
        Email: sdk.String("Karolann_Kozey@hotmail.com"),
        ID: sdk.String("eb9665b8-5efb-4d02-bae0-be2d782259e3"),
        NewPassword: sdk.String("recusandae"),
        PermissionLevel: shared.SubUserDataPermissionLevelEnumSelectedFolderOnly.ToPointer(),
        Username: sdk.String("Easter.Powlowski"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubUserPostRaw

Creates or updates a subuser.
            To create a new user set no ID (empty)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SubUser.SubUserPostRaw(ctx, []byte("unde"))
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
