# Membership

### Available Operations

* [MembershipGet](#membershipget) - Get all of the members details
This will return all properties related to member entity
            
* [MembershipPost](#membershippost) - Add new Member
            

## MembershipGet

Get all of the members details
This will return all properties related to member entity
            

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
    res, err := s.Membership.MembershipGet(ctx, operations.MembershipGetSecurity{
        Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MemberDTOS != nil {
        // handle response
    }
}
```

## MembershipPost

Add new Member
            

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
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Membership.MembershipPost(ctx, shared.MemberDTO{
        Name: sdk.String("Tyler Kassulke"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MembershipPost200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```
