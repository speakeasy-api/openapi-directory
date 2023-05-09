# Activities

### Available Operations

* [PlusActivitiesGet](#plusactivitiesget) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [PlusActivitiesList](#plusactivitieslist) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [PlusActivitiesSearch](#plusactivitiessearch) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

## PlusActivitiesGet

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
    res, err := s.Activities.PlusActivitiesGet(ctx, operations.PlusActivitiesGetRequest{
        ActivityID: "corrupti",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("illum"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UserIP: sdk.String("suscipit"),
    }, operations.PlusActivitiesGetSecurity{
        Option1: &operations.PlusActivitiesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Activity != nil {
        // handle response
    }
}
```

## PlusActivitiesList

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
    res, err := s.Activities.PlusActivitiesList(ctx, operations.PlusActivitiesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Collection: operations.PlusActivitiesListCollectionEnumPublic,
        Fields: sdk.String("iure"),
        Key: sdk.String("magnam"),
        MaxResults: sdk.Int64(891773),
        OauthToken: sdk.String("ipsa"),
        PageToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UserID: "suscipit",
        UserIP: sdk.String("molestiae"),
    }, operations.PlusActivitiesListSecurity{
        Option1: &operations.PlusActivitiesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivityFeed != nil {
        // handle response
    }
}
```

## PlusActivitiesSearch

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
    res, err := s.Activities.PlusActivitiesSearch(ctx, operations.PlusActivitiesSearchRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("minus"),
        Key: sdk.String("placeat"),
        Language: sdk.String("voluptatum"),
        MaxResults: sdk.Int64(479977),
        OauthToken: sdk.String("excepturi"),
        OrderBy: operations.PlusActivitiesSearchOrderByEnumBest.ToPointer(),
        PageToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        Query: "temporibus",
        QuotaUser: sdk.String("ab"),
        UserIP: sdk.String("quis"),
    }, operations.PlusActivitiesSearchSecurity{
        Option1: &operations.PlusActivitiesSearchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivityFeed != nil {
        // handle response
    }
}
```
