# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateDeviceCode](#createdevicecode) - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* [CreateToken](#createtoken) - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* [FetchCerts](#fetchcerts) - Fetches public JWKs
* [FetchOpenidDiscovery](#fetchopeniddiscovery) - Fetch configuration details about the OpenID Connect Authorization Server
* [FetchUserInfo](#fetchuserinfo) - Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).

## CreateDeviceCode

Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant

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
    res, err := s.SDK.CreateDeviceCode(ctx, operations.CreateDeviceCodeCreateDeviceCodeRequest{
        Audiences: []string{
            "suscipit",
            "iure",
            "magnam",
        },
        ClientSid: "debitis",
        Scopes: []string{
            "delectus",
        },
    }, operations.CreateDeviceCodeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OauthV1DeviceCode != nil {
        // handle response
    }
}
```

## CreateToken

Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant

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
    res, err := s.SDK.CreateToken(ctx, operations.CreateTokenCreateTokenRequest{
        ClientSecret: sdk.String("tempora"),
        ClientSid: "suscipit",
        Code: sdk.String("molestiae"),
        CodeVerifier: sdk.String("minus"),
        DeviceCode: sdk.String("placeat"),
        DeviceID: sdk.String("voluptatum"),
        GrantType: "iusto",
        RefreshToken: sdk.String("excepturi"),
    }, operations.CreateTokenSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OauthV1Token != nil {
        // handle response
    }
}
```

## FetchCerts

Fetches public JWKs

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
    res, err := s.SDK.FetchCerts(ctx, operations.FetchCertsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OauthV1Certs != nil {
        // handle response
    }
}
```

## FetchOpenidDiscovery

Fetch configuration details about the OpenID Connect Authorization Server

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
    res, err := s.SDK.FetchOpenidDiscovery(ctx, operations.FetchOpenidDiscoverySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OauthV1OpenidDiscovery != nil {
        // handle response
    }
}
```

## FetchUserInfo

Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).

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
    res, err := s.SDK.FetchUserInfo(ctx, operations.FetchUserInfoSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OauthV1UserInfo != nil {
        // handle response
    }
}
```
