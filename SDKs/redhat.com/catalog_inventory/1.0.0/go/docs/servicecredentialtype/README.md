# ServiceCredentialType

### Available Operations

* [ListServiceCredentialTypes](#listservicecredentialtypes) - List ServiceCredentialTypes
* [ShowServiceCredentialType](#showservicecredentialtype) - Show an existing ServiceCredentialType

## ListServiceCredentialTypes

Returns an array of ServiceCredentialType objects

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ServiceCredentialType.ListServiceCredentialTypes(ctx, operations.ListServiceCredentialTypesRequest{
        Filter: map[string]interface{}{
            "optio": "totam",
            "beatae": "commodi",
            "molestiae": "modi",
            "qui": "impedit",
        },
        Limit: sdk.Int64(736918),
        Offset: sdk.Int64(456150),
        SortBy: map[string]interface{}{
            "excepturi": "aspernatur",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceCredentialTypesCollection != nil {
        // handle response
    }
}
```

## ShowServiceCredentialType

Returns a ServiceCredentialType object

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ServiceCredentialType.ShowServiceCredentialType(ctx, operations.ShowServiceCredentialTypeRequest{
        ID: "05929396-fea7-4596-ab10-faaa2352c595",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceCredentialType != nil {
        // handle response
    }
}
```
