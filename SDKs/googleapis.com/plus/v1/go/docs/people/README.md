# People

### Available Operations

* [PlusPeopleGet](#pluspeopleget) - Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
* [PlusPeopleList](#pluspeoplelist) - List all of the people in the specified collection.
* [PlusPeopleListByActivity](#pluspeoplelistbyactivity) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [PlusPeopleSearch](#pluspeoplesearch) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

## PlusPeopleGet

Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.

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
    res, err := s.People.PlusPeopleGet(ctx, operations.PlusPeopleGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("totam"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UserID: "nam",
        UserIP: sdk.String("officia"),
    }, operations.PlusPeopleGetSecurity{
        Option1: &operations.PlusPeopleGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Person != nil {
        // handle response
    }
}
```

## PlusPeopleList

List all of the people in the specified collection.

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
    res, err := s.People.PlusPeopleList(ctx, operations.PlusPeopleListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Collection: operations.PlusPeopleListCollectionEnumVisible,
        Fields: sdk.String("fugit"),
        Key: sdk.String("deleniti"),
        MaxResults: sdk.Int64(944669),
        OauthToken: sdk.String("optio"),
        OrderBy: operations.PlusPeopleListOrderByEnumBest.ToPointer(),
        PageToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UserID: "molestiae",
        UserIP: sdk.String("modi"),
    }, operations.PlusPeopleListSecurity{
        Option1: &operations.PlusPeopleListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PeopleFeed != nil {
        // handle response
    }
}
```

## PlusPeopleListByActivity

Shut down. See https://developers.google.com/+/api-shutdown for more details.

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
    res, err := s.People.PlusPeopleListByActivity(ctx, operations.PlusPeopleListByActivityRequest{
        ActivityID: "qui",
        Alt: shared.AltEnumJSON.ToPointer(),
        Collection: operations.PlusPeopleListByActivityCollectionEnumResharers,
        Fields: sdk.String("cum"),
        Key: sdk.String("esse"),
        MaxResults: sdk.Int64(216550),
        OauthToken: sdk.String("excepturi"),
        PageToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UserIP: sdk.String("ad"),
    }, operations.PlusPeopleListByActivitySecurity{
        Option1: &operations.PlusPeopleListByActivitySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PeopleFeed != nil {
        // handle response
    }
}
```

## PlusPeopleSearch

Shut down. See https://developers.google.com/+/api-shutdown for more details.

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
    res, err := s.People.PlusPeopleSearch(ctx, operations.PlusPeopleSearchRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("natus"),
        Key: sdk.String("sed"),
        Language: sdk.String("iste"),
        MaxResults: sdk.Int64(222321),
        OauthToken: sdk.String("natus"),
        PageToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        Query: "hic",
        QuotaUser: sdk.String("saepe"),
        UserIP: sdk.String("fuga"),
    }, operations.PlusPeopleSearchSecurity{
        Option1: &operations.PlusPeopleSearchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PeopleFeed != nil {
        // handle response
    }
}
```
