# Locations

### Available Operations

* [MirrorLocationsGet](#mirrorlocationsget) - Gets a single location by ID.
* [MirrorLocationsList](#mirrorlocationslist) - Retrieves a list of locations for the user.

## MirrorLocationsGet

Gets a single location by ID.

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
    res, err := s.Locations.MirrorLocationsGet(ctx, operations.MirrorLocationsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("eaque"),
        ID: "9b3fe49a-8d9c-4bf4-8633-323f9b77f3a4",
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UserIP: sdk.String("iure"),
    }, operations.MirrorLocationsGetSecurity{
        Option1: &operations.MirrorLocationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MirrorLocationsList

Retrieves a list of locations for the user.

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
    res, err := s.Locations.MirrorLocationsList(ctx, operations.MirrorLocationsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("odio"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UserIP: sdk.String("voluptatibus"),
    }, operations.MirrorLocationsListSecurity{
        Option1: &operations.MirrorLocationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
