# User

### Available Operations

* [DeleteUser](#deleteuser) - Deletes the user object
* [DeleteUserTag](#deleteusertag) - Delete user tag
* [GetAllUserTags](#getallusertags) - Get all user tags
* [GetAllUsersWithTag](#getalluserswithtag) - Get links to tagged users
* [GetTagFromUser](#gettagfromuser) - Get user tag
* [GetTagsFromUser](#gettagsfromuser) - Get tags from user
* [GetUser](#getuser) - Gets the user object
* [GetUserPermissions](#getuserpermissions) - Gets the user permissions
* [GetUsers](#getusers) - Gets all user objects
* [PatchUser](#patchuser) - Patch user object
* [PostUser](#postuser) - Post user object
* [PutUser](#putuser) - Puts user object
* [PutUserTag](#putusertag) - Insert user tag

## DeleteUser

Deletes the user object from the application

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
    res, err := s.User.DeleteUser(ctx, operations.DeleteUserRequest{
        APIVersion: "perferendis",
        Authorization: "laborum",
        UserID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUserTag

Deletes a tag from the user

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
    res, err := s.User.DeleteUserTag(ctx, operations.DeleteUserTagRequest{
        APIVersion: "nihil",
        Authorization: "tenetur",
        TagID: "sapiente",
        UserID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllUserTags

Get all tags from all users

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
    res, err := s.User.GetAllUserTags(ctx, operations.GetAllUserTagsRequest{
        APIVersion: "adipisci",
        Authorization: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetAllUsersWithTag

Gets the users with the specified tag

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
    res, err := s.User.GetAllUsersWithTag(ctx, operations.GetAllUsersWithTagRequest{
        APIVersion: "optio",
        Authorization: "illum",
        TagID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetTagFromUser

Gets a tag from the user

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
    res, err := s.User.GetTagFromUser(ctx, operations.GetTagFromUserRequest{
        APIVersion: "tenetur",
        Authorization: "molestias",
        TagID: "ipsam",
        UserID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## GetTagsFromUser

Gets all tags from the user

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
    res, err := s.User.GetTagsFromUser(ctx, operations.GetTagsFromUserRequest{
        APIVersion: "laborum",
        Authorization: "perspiciatis",
        UserID: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetUser

Gets the user object for application

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
    res, err := s.User.GetUser(ctx, operations.GetUserRequest{
        APIVersion: "eum",
        Authorization: "quasi",
        UserID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## GetUserPermissions

Gets the user permission instances

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
    res, err := s.User.GetUserPermissions(ctx, operations.GetUserPermissionsRequest{
        APIVersion: "odio",
        Authorization: "commodi",
        UserID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetUsers

Gets all user objects for application

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
    res, err := s.User.GetUsers(ctx, operations.GetUsersRequest{
        APIVersion: "aliquid",
        Authorization: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PatchUser

Patch the user object at the specified resource location

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
    res, err := s.User.PatchUser(ctx, operations.PatchUserRequest{
        APIVersion: "quidem",
        Authorization: "explicabo",
        UserID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## PostUser

Post the new user object into the application

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
    res, err := s.User.PostUser(ctx, operations.PostUserRequest{
        APIVersion: "nulla",
        Authorization: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PutUser

Puts the user object into the specified resource location

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
    res, err := s.User.PutUser(ctx, operations.PutUserRequest{
        APIVersion: "natus",
        Authorization: "illum",
        UserID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## PutUserTag

Inserts a tag on the user

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
    res, err := s.User.PutUserTag(ctx, operations.PutUserTagRequest{
        APIVersion: "impedit",
        Authorization: "unde",
        TagID: "ut",
        UserID: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```
