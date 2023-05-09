# Auth

### Available Operations

* [PostAuthToken](#postauthtoken) - /auth/token

## PostAuthToken

Generate Herald API access tokens. These tokens expire after 24 hours and can be used to access any auth-protected Herald API endpoint. To use these tokens in future requests, include them as a bearer token in the "Authorization" header. Below is an example flow:

First, use your API key to get an access token:
``` http
POST /auth/token

{
  "api_key": "06Go1GZaEb3VlMf2pUA7PzWrBokCybFmgqR075kIBdM="
}
```

The response will look like this:
``` json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybUlkIjoiZm9vYmFyIiwiaWF0IjoxNjQ2NTkzNzUwLCJleHAiOjE2NDY2ODAxNTB9.UEe8fXdaiS4rynpeVlISm6wWglQitbZfW5_YXs-SEbg",
  "expires_at": 1646680150
}
```

Then use that token in future requests, like so:
``` http
GET /producers
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybUlkIjoiZm9vYmFyIiwiaWF0IjoxNjQ2NTkzNzUwLCJleHAiOjE2NDY2ODAxNTB9.UEe8fXdaiS4rynpeVlISm6wWglQitbZfW5_YXs-SEbg
```

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
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.PostAuthToken(ctx, operations.PostAuthTokenRequestBody{
        APIKey: "06Go1GZaEb3VlMf2pUA7PzWrBokCybFmgqR075kIBdM=",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAuthToken200ApplicationJSONObject != nil {
        // handle response
    }
}
```
