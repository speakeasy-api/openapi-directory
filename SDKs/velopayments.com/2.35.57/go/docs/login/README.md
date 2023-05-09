# Login

### Available Operations

* [Logout](#logout) - Logout
* [ResetPassword](#resetpassword) - Reset password
* [ValidateAccessToken](#validateaccesstoken) - validate
* [VeloAuth](#veloauth) - Authentication endpoint

## Logout

<p>Given a valid access token in the header then log out the authenticated user or client </p>
<p>Will revoke the token</p>


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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Login.Logout(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetPassword

<p>Reset password </p>
<p>An email with an embedded link will be sent to the receipient of the email address </p>
<p>The link will contain a token to be used for resetting the password </p>


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Login.ResetPassword(ctx, shared.ResetPasswordRequest{
        Email: "foo@example.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ValidateAccessToken

<p>The second part of login involves validating using an MFA device</p>
<p>An access token with PRE_AUTH authorities is required</p>


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
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Login.ValidateAccessToken(ctx, operations.ValidateAccessTokenRequest{
        AccessTokenValidationRequest: shared.AccessTokenValidationRequest{
            Otp: "123456",
        },
        Authorization: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenResponse != nil {
        // handle response
    }
}
```

## VeloAuth

<p>Use this endpoint to obtain an access token for calling Velo Payments APIs. </p>
<p>You need your API key and API secret issued by Velo</p>
<p>To login and get an access token the API key and API secret must be Base64 encoded by concatenating them with a colon between them</p>
<p>e.g. Given an ApiKey: 44a9537d-d55d-4b47-8082-14061c2bcdd8 and ApiSecret: c396b26b-137a-44fd-87f5-34631f8fd529</p>
<p>Using a Base64 encode function Base64Encoder().encode("44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529")</p>
<p>Included as a Basic Authorization header: -H "Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==" </p>


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
    res, err := s.Login.VeloAuth(ctx, operations.VeloAuthRequest{
        GrantType: sdk.String("accusantium"),
    }, operations.VeloAuthSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthResponse != nil {
        // handle response
    }
}
```
