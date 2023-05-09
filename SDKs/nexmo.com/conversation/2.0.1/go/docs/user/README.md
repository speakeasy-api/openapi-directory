# User

## Overview

The concept of a user exists in Vonage APIs, you can associate one with a user in your own application if you choose. A user can have multiple memberships to conversations and can communicate with other users through various different mediums.

### Available Operations

* [CreateUser](#createuser) - Create a user
* [DeleteUser](#deleteuser) - Delete a user
* [GetUser](#getuser) - Retrieve a user
* [~~GetUsers~~](#getusers) - List users :warning: **Deprecated**
* [GetuserConversations](#getuserconversations) - List user conversations
* [UpdateUser](#updateuser) - Update a user

## CreateUser

Note: Users must be created with an admin JWT.

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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.CreateUser(ctx, operations.CreateUserRequestBody{
        DisplayName: sdk.String("My User Name"),
        ImageURL: sdk.String("https://example.com/image.png"),
        Name: sdk.String("my_user_name"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteUser

Delete a user

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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.DeleteUser(ctx, operations.DeleteUserRequest{
        UserID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUser

Retrieve a user

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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetUser(ctx, operations.GetUserRequest{
        UserID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~GetUsers~~

This endpoint is **DEPRECATED**. Please use [/v0.2/users](/api/conversation.v2#get-users).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetUsers(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetuserConversations

List user conversations

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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetuserConversations(ctx, operations.GetuserConversationsRequest{
        UserID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetuserConversations200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateUser

Update a user

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UpdateUser(ctx, operations.UpdateUserRequest{
        RequestBody: &operations.UpdateUserRequestBody{
            Channels: &shared.Channel{
                From: &shared.ChannelFrom{},
                LegID: sdk.String("a595959595959595995"),
                LegIds: []shared.ChannelLegIds{
                    shared.ChannelLegIds{
                        LegID: sdk.String("a595959595959595995"),
                    },
                    shared.ChannelLegIds{
                        LegID: sdk.String("a595959595959595995"),
                    },
                    shared.ChannelLegIds{
                        LegID: sdk.String("a595959595959595995"),
                    },
                    shared.ChannelLegIds{
                        LegID: sdk.String("a595959595959595995"),
                    },
                },
                To: &shared.ChannelTo{},
                Type: shared.ChannelTypeEnumPhone.ToPointer(),
            },
            DisplayName: sdk.String("My User Name"),
            ImageURL: sdk.String("https://example.com/image.png"),
            Name: sdk.String("my_user_name"),
        },
        UserID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```
