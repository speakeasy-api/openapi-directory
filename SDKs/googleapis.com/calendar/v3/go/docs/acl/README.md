# ACL

### Available Operations

* [CalendarACLDelete](#calendaracldelete) - Deletes an access control rule.
* [CalendarACLGet](#calendaraclget) - Returns an access control rule.
* [CalendarACLInsert](#calendaraclinsert) - Creates an access control rule.
* [CalendarACLList](#calendaracllist) - Returns the rules in the access control list for the calendar.
* [CalendarACLPatch](#calendaraclpatch) - Updates an access control rule. This method supports patch semantics.
* [CalendarACLUpdate](#calendaraclupdate) - Updates an access control rule.
* [CalendarACLWatch](#calendaraclwatch) - Watch for changes to ACL resources.

## CalendarACLDelete

Deletes an access control rule.

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
    res, err := s.ACL.CalendarACLDelete(ctx, operations.CalendarACLDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "illum",
        Fields: sdk.String("vel"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        RuleID: "iure",
        UserIP: sdk.String("magnam"),
    }, operations.CalendarACLDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CalendarACLGet

Returns an access control rule.

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
    res, err := s.ACL.CalendarACLGet(ctx, operations.CalendarACLGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "debitis",
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        RuleID: "molestiae",
        UserIP: sdk.String("minus"),
    }, operations.CalendarACLGetSecurity{
        Option1: &operations.CalendarACLGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ACLRule != nil {
        // handle response
    }
}
```

## CalendarACLInsert

Creates an access control rule.

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
    res, err := s.ACL.CalendarACLInsert(ctx, operations.CalendarACLInsertRequest{
        ACLRule: &shared.ACLRule{
            Etag: sdk.String("placeat"),
            ID: sdk.String("8796ed15-1a05-4dfc-addf-7cc78ca1ba92"),
            Kind: sdk.String("deleniti"),
            Role: sdk.String("hic"),
            Scope: &shared.ACLRuleScope{
                Type: sdk.String("optio"),
                Value: sdk.String("totam"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "beatae",
        Fields: sdk.String("commodi"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        SendNotifications: sdk.Bool(false),
        UserIP: sdk.String("impedit"),
    }, operations.CalendarACLInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ACLRule != nil {
        // handle response
    }
}
```

## CalendarACLList

Returns the rules in the access control list for the calendar.

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
    res, err := s.ACL.CalendarACLList(ctx, operations.CalendarACLListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "cum",
        Fields: sdk.String("esse"),
        Key: sdk.String("ipsum"),
        MaxResults: sdk.Int64(568434),
        OauthToken: sdk.String("aspernatur"),
        PageToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        ShowDeleted: sdk.Bool(false),
        SyncToken: sdk.String("natus"),
        UserIP: sdk.String("sed"),
    }, operations.CalendarACLListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ACL != nil {
        // handle response
    }
}
```

## CalendarACLPatch

Updates an access control rule. This method supports patch semantics.

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
    res, err := s.ACL.CalendarACLPatch(ctx, operations.CalendarACLPatchRequest{
        ACLRule: &shared.ACLRule{
            Etag: sdk.String("iste"),
            ID: sdk.String("396fea75-96eb-410f-aaa2-352c5955907a"),
            Kind: sdk.String("doloribus"),
            Role: sdk.String("sapiente"),
            Scope: &shared.ACLRuleScope{
                Type: sdk.String("architecto"),
                Value: sdk.String("mollitia"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "dolorem",
        Fields: sdk.String("culpa"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        RuleID: "occaecati",
        SendNotifications: sdk.Bool(false),
        UserIP: sdk.String("numquam"),
    }, operations.CalendarACLPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ACLRule != nil {
        // handle response
    }
}
```

## CalendarACLUpdate

Updates an access control rule.

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
    res, err := s.ACL.CalendarACLUpdate(ctx, operations.CalendarACLUpdateRequest{
        ACLRule: &shared.ACLRule{
            Etag: sdk.String("commodi"),
            ID: sdk.String("7739251a-a52c-43f5-ad01-9da1ffe78f09"),
            Kind: sdk.String("voluptate"),
            Role: sdk.String("cum"),
            Scope: &shared.ACLRuleScope{
                Type: sdk.String("perferendis"),
                Value: sdk.String("doloremque"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "reprehenderit",
        Fields: sdk.String("ut"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        RuleID: "dolore",
        SendNotifications: sdk.Bool(false),
        UserIP: sdk.String("iusto"),
    }, operations.CalendarACLUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ACLRule != nil {
        // handle response
    }
}
```

## CalendarACLWatch

Watch for changes to ACL resources.

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
    res, err := s.ACL.CalendarACLWatch(ctx, operations.CalendarACLWatchRequest{
        Channel: &shared.Channel{
            Address: sdk.String("63849 Curt Radial"),
            Expiration: sdk.String("molestias"),
            ID: sdk.String("9d488e1e-91e4-450a-92ab-d44269802d50"),
            Kind: sdk.String("fugit"),
            Params: map[string]string{
                "excepturi": "tempora",
                "facilis": "tempore",
                "labore": "delectus",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("eum"),
            ResourceURI: sdk.String("non"),
            Token: sdk.String("eligendi"),
            Type: sdk.String("sint"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarID: "aliquid",
        Fields: sdk.String("provident"),
        Key: sdk.String("necessitatibus"),
        MaxResults: sdk.Int64(572252),
        OauthToken: sdk.String("officia"),
        PageToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        ShowDeleted: sdk.Bool(false),
        SyncToken: sdk.String("a"),
        UserIP: sdk.String("dolorum"),
    }, operations.CalendarACLWatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Channel != nil {
        // handle response
    }
}
```
