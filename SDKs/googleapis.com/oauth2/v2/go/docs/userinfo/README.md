# Userinfo

### Available Operations

* [Oauth2UserinfoGet](#oauth2userinfoget)
* [Oauth2UserinfoV2MeGet](#oauth2userinfov2meget)

## Oauth2UserinfoGet

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
    res, err := s.Userinfo.Oauth2UserinfoGet(ctx, operations.Oauth2UserinfoGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("debitis"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UserIP: sdk.String("suscipit"),
    }, operations.Oauth2UserinfoGetSecurity{
        Option1: &operations.Oauth2UserinfoGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Userinfo != nil {
        // handle response
    }
}
```

## Oauth2UserinfoV2MeGet

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
    res, err := s.Userinfo.Oauth2UserinfoV2MeGet(ctx, operations.Oauth2UserinfoV2MeGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UserIP: sdk.String("iusto"),
    }, operations.Oauth2UserinfoV2MeGetSecurity{
        Option1: &operations.Oauth2UserinfoV2MeGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Userinfo != nil {
        // handle response
    }
}
```
