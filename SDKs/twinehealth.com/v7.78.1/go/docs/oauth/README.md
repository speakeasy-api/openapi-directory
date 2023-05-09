# Oauth

## Overview

Authentication operations

### Available Operations

* [CreateToken](#createtoken) - Create an oauth token
* [FetchTokenGroups](#fetchtokengroups) - Get the groups for a token
* [FetchTokenOrganization](#fetchtokenorganization) - Get the organization for a token

## CreateToken

Create an OAuth 2.0 Bearer token. A valid bearer token is required for all other API requests.

Be sure to set the header `Content-Type: "application/vnd.api+json"`. Otherwise, you will get an error
403 Forbidden. Using `Content-Type: "application/json"` is permitted (to support older oauth clients) but when
using `application/json` the body should have a body in the following format instead of nesting under
`data.attributes`:
```
{
  "grant_type": "client_credentials",
  "client_id": "95c78ab2-167f-40b8-8bec-8398d4b87454",
  "client_secret": "35d18dc9-a3dd-4948-b787-063a490b9354"
}
```


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Oauth.CreateToken(ctx, operations.CreateTokenRequest{
        CreateTokenRequest: shared.CreateTokenRequest{
            Data: shared.CreateTokenRequestData{
                Attributes: shared.CreateTokenRequestDataAttributes{
                    ClientID: "19391dc5-8af8-4152-93e8-74ff9361607e",
                    ClientSecret: sdk.String("63eca384-7a65-42e2-872b-afd3e8659d0a"),
                    GrantType: shared.CreateTokenRequestDataAttributesGrantTypeEnumClientCredentials,
                    RefreshToken: sdk.String("b7dcc4a4-593b-4410-a0c5-97ae48939396"),
                },
                Type: shared.CreateTokenRequestDataTypeEnumToken.ToPointer(),
            },
        },
        Include: operations.CreateTokenIncludeEnumOrganization.ToPointer(),
    }, operations.CreateTokenSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTokenResponse != nil {
        // handle response
    }
}
```

## FetchTokenGroups

Get the list of groups a token can be used to access.

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
    res, err := s.Oauth.FetchTokenGroups(ctx, operations.FetchTokenGroupsRequest{
        ID: "e2d78225-9e3e-4a4b-9197-f92443da7ce5",
    }, operations.FetchTokenGroupsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchGroupsResponse != nil {
        // handle response
    }
}
```

## FetchTokenOrganization

Get the organization a token can be used to access.

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
    res, err := s.Oauth.FetchTokenOrganization(ctx, operations.FetchTokenOrganizationRequest{
        ID: "2b895c53-7c64-454e-bb0b-34896c3ca5ac",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchOrganizationResponse != nil {
        // handle response
    }
}
```
