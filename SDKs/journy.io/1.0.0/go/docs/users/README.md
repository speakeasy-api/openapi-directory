# Users

## Overview

Endpoints for creating, deleting or updating users.

### Available Operations

* [DeleteUser](#deleteuser) - Delete user
* [Link](#link) - Link web activity to user
* [UpsertUser](#upsertuser) - Create or update user

## DeleteUser

Endpoint to delete a user.

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
    res, err := s.Users.DeleteUser(ctx, operations.DeleteUserRequestBody{
        Identification: operations.DeleteUserRequestBodyIdentification{
            Email: sdk.String("Macy.Durgan@gmail.com"),
            UserID: sdk.String("repellat"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUser202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Link

💡 You don't need to use this endpoint if you use our JavaScript snippet in your application.

This endpoint is used to link web activity to a user in your application. This will help you discover which channels and campaigns work best.

When our JavaScript snippet is embedded on your website, blog or landing pages, a cookie named "__journey" will be set.

This will only work if your website and application are under the same top level domain.

Website, blog or landing pages
* www.my-domain.tld
* blog.my-domain.tld
* landing-page.my-domain.tld

Application
* app.my-domain.tld

The cookie on my-domain.tld will also be send to your app domain.

You should call this endpoint after the user succesfully logged in (so that you know the user's ID). Use the value of the cookie as device ID.

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
    res, err := s.Users.Link(ctx, operations.LinkRequestBody{
        DeviceID: "mollitia",
        Identification: operations.LinkRequestBodyIdentification{
            Email: sdk.String("Deon.Jerde@yahoo.com"),
            UserID: sdk.String("velit"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpsertUser

Endpoint to create or update a user.

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
    res, err := s.Users.UpsertUser(ctx, operations.UpsertUserRequestBody{
        Identification: operations.UpsertUserRequestBodyIdentification{
            Email: sdk.String("Carmelo67@yahoo.com"),
            UserID: sdk.String("animi"),
        },
        Properties: map[string]interface{}{
            "odit": "quo",
            "sequi": "tenetur",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpsertUser201ApplicationJSONObject != nil {
        // handle response
    }
}
```
