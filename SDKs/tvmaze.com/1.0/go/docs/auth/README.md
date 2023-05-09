# Auth

### Available Operations

* [GetAuthValidate](#getauthvalidate) - Validate your authentication credentials
* [PostAuthPoll](#postauthpoll) - Poll whether an authentication request was confirmed
* [PostAuthStart](#postauthstart) - Start an authentication request

## GetAuthValidate

If the credentials supplied as HTTP basic are valid, the user's level of premium - if any - is returned.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.GetAuthValidate(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthValidate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAuthPoll

Using the token acquired in the `start` endpoint, you can start polling this endpoint once every 10 seconds.

When the user has confirmed the authentication request on their end, this endpoint will return the user's API key that you can use in subsequent authenticated endpoints. Note that it'll do so only once, subsequent requests after the initial 200 response will return a 404.

For as long as the user did not yet confirm their authentication request, this endpoint will return a 403.


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
    res, err := s.Auth.PostAuthPoll(ctx, operations.PostAuthPollRequestBody{
        Token: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAuthPoll200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAuthStart

If you want to access the TVmaze API on behalf of a user without querying them for their password, use this endpoint.

To get started, send a POST request containing the user's email address. The response will contain a `token`, which you can use as input to the `poll` endpoint. The user will receive an email prompting them to confirm the authentication request.

Alternatively, if you expect the user to be logged in to TVmaze on the device they are currently interacting with, you can set `email_confirmation` to false and redirect them to the `confirm_url` URL. If they are logged in to TVmaze, they will be able to confirm the authentication request instantly.


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
    res, err := s.Auth.PostAuthStart(ctx, operations.PostAuthStartRequestBody{
        Email: sdk.String("Micheal_Sporer@yahoo.com"),
        EmailConfirmation: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAuthStart200ApplicationJSONObject != nil {
        // handle response
    }
}
```
