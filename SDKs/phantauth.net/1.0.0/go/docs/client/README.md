# Client

## Overview

The client object contains standard OAuth2/OpenID Connect client properties. To use an OpenID Connect flow, you need a client_id. Certain flows also require a client_secret. The client object contains the client_id and client_secret values, as well as some properties to be displayed to the user (e.g. logo, client name, version).

### Available Operations

* [GetClientClientID](#getclientclientid) - Get a Client
* [GetClientClientIDTokenKind](#getclientclientidtokenkind) - Get a Client Token
* [PostClient](#postclient) - Create a Client Selfie

## GetClientClientID

Use this endpoint to generate a random client. The client is generated in a deterministic way, on the bases of the client ID given as a path parameter.
In the case of identical client IDs, the endpoint will generate the same client object. The properties of the generated client object are randomly generated on the basis of the client ID.
In lack of a client ID, all calls generate a different client object to the randomly generated client ID.

By providing an email address as the `client_id` parameter, you can customize the client logo by the use of the gravatar associated with the email address.

If the `client_id` parameter contains minimum one dot (`.`) or space (` `) character, the client_name is produced from the parameter, rather than being generated.`

The result is always a client object. If you want to generate multiple clients in one single step, you can do it by the use of *Fleet* generation.
The members of a fleet are clients randomly generated from the fleet name.

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
    res, err := s.Client.GetClientClientID(ctx, operations.GetClientClientIDRequest{
        ClientID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClientClientID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetClientClientIDTokenKind

It is used to generate a OpenID Connect token as a path parameter to a client of a given client ID.

It is primarily used for testing purposes, when, for example, the token from the standard authentication flow is not available to the test code.

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
    res, err := s.Client.GetClientClientIDTokenKind(ctx, operations.GetClientClientIDTokenKindRequest{
        ClientID: "distinctio",
        Kind: operations.GetClientClientIDTokenKindKindEnumPlain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostClient

To create a selfie token from the client data, you need an opaqe string token, which contains the encoded client properties sent in the request.
Later, the selfie token can be used as a client ID. In this case, the client data is included in the selfie token, that is, the client properties are taken from the token.
By the use of a selfie token, you can use your own client objects in the authentication process.

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
    res, err := s.Client.PostClient(ctx, operations.PostClientRequestBody{
        AtID: sdk.String("unde"),
        ClientID: "nulla",
        ClientName: sdk.String("corrupti"),
        ClientSecret: sdk.String("illum"),
        ClientURI: sdk.String("vel"),
        Contacts: []interface{}{
            "deserunt",
            "suscipit",
            "iure",
        },
        GrantTypes: []interface{}{
            "debitis",
            "ipsa",
        },
        Jwks: []interface{}{
            "tempora",
            "suscipit",
            "molestiae",
            "minus",
        },
        JwksURI: sdk.String("placeat"),
        LogoEmail: sdk.String("voluptatum"),
        LogoURI: sdk.String("iusto"),
        PolicyURI: sdk.String("excepturi"),
        RedirectUris: []interface{}{
            "recusandae",
            "temporibus",
        },
        ResponseTypes: []interface{}{
            "quis",
        },
        Scope: sdk.String("veritatis"),
        SoftwareID: sdk.String("deserunt"),
        SoftwareVersion: sdk.String("perferendis"),
        TokenEndpointAuthMethod: sdk.String("ipsam"),
        TosURI: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
