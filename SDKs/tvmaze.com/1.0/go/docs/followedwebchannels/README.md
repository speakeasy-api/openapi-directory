# FollowedWebchannels

### Available Operations

* [DeleteUserFollowsWebchannelsWebchannelID](#deleteuserfollowswebchannelswebchannelid) - Unfollow a webchannel
* [GetUserFollowsWebchannels](#getuserfollowswebchannels) - List the followed webchannels
* [GetUserFollowsWebchannelsWebchannelID](#getuserfollowswebchannelswebchannelid) - Check if a webchannel is followed
* [PutUserFollowsWebchannelsWebchannelID](#putuserfollowswebchannelswebchannelid) - Follow a webchannel

## DeleteUserFollowsWebchannelsWebchannelID

Unfollow a webchannel

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
    res, err := s.FollowedWebchannels.DeleteUserFollowsWebchannelsWebchannelID(ctx, operations.DeleteUserFollowsWebchannelsWebchannelIDRequest{
        WebchannelID: 56713,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUserFollowsWebchannels

List the followed webchannels

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
    res, err := s.FollowedWebchannels.GetUserFollowsWebchannels(ctx, operations.GetUserFollowsWebchannelsRequest{
        Embed: operations.GetUserFollowsWebchannelsEmbedEnumWebchannel.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebchannelFollows != nil {
        // handle response
    }
}
```

## GetUserFollowsWebchannelsWebchannelID

Check if a webchannel is followed

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
    res, err := s.FollowedWebchannels.GetUserFollowsWebchannelsWebchannelID(ctx, operations.GetUserFollowsWebchannelsWebchannelIDRequest{
        WebchannelID: 963663,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebchannelFollow != nil {
        // handle response
    }
}
```

## PutUserFollowsWebchannelsWebchannelID

Follow a webchannel

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
    res, err := s.FollowedWebchannels.PutUserFollowsWebchannelsWebchannelID(ctx, operations.PutUserFollowsWebchannelsWebchannelIDRequest{
        WebchannelID: 272656,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebchannelFollow != nil {
        // handle response
    }
}
```
