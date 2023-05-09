# FollowedPeople

### Available Operations

* [DeleteUserFollowsPeoplePersonID](#deleteuserfollowspeoplepersonid) - Unfollow a person
* [GetUserFollowsPeople](#getuserfollowspeople) - List the followed people
* [GetUserFollowsPeoplePersonID](#getuserfollowspeoplepersonid) - Check if a person is followed
* [PutUserFollowsPeoplePersonID](#putuserfollowspeoplepersonid) - Follow a person

## DeleteUserFollowsPeoplePersonID

Unfollow a person

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
    res, err := s.FollowedPeople.DeleteUserFollowsPeoplePersonID(ctx, operations.DeleteUserFollowsPeoplePersonIDRequest{
        PersonID: 623564,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUserFollowsPeople

List the followed people

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
    res, err := s.FollowedPeople.GetUserFollowsPeople(ctx, operations.GetUserFollowsPeopleRequest{
        Embed: operations.GetUserFollowsPeopleEmbedEnumPerson.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PersonFollows != nil {
        // handle response
    }
}
```

## GetUserFollowsPeoplePersonID

Check if a person is followed

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
    res, err := s.FollowedPeople.GetUserFollowsPeoplePersonID(ctx, operations.GetUserFollowsPeoplePersonIDRequest{
        PersonID: 645894,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PersonFollow != nil {
        // handle response
    }
}
```

## PutUserFollowsPeoplePersonID

Follow a person

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
    res, err := s.FollowedPeople.PutUserFollowsPeoplePersonID(ctx, operations.PutUserFollowsPeoplePersonIDRequest{
        PersonID: 384382,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PersonFollow != nil {
        // handle response
    }
}
```
