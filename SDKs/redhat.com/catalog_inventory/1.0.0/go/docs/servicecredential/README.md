# ServiceCredential

### Available Operations

* [ListServiceCredentials](#listservicecredentials) - List ServiceCredentials
* [ShowServiceCredential](#showservicecredential) - Show an existing ServiceCredential

## ListServiceCredentials

Returns an array of ServiceCredential objects

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
    res, err := s.ServiceCredential.ListServiceCredentials(ctx, operations.ListServiceCredentialsRequest{
        Filter: map[string]interface{}{
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
        },
        Limit: sdk.Int64(963663),
        Offset: sdk.Int64(272656),
        SortBy: map[string]interface{}{
            "molestiae": "minus",
            "placeat": "voluptatum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceCredentialsCollection != nil {
        // handle response
    }
}
```

## ShowServiceCredential

Returns a ServiceCredential object

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
    res, err := s.ServiceCredential.ShowServiceCredential(ctx, operations.ShowServiceCredentialRequest{
        ID: "796ed151-a05d-4fc2-9df7-cc78ca1ba928",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceCredential != nil {
        // handle response
    }
}
```
