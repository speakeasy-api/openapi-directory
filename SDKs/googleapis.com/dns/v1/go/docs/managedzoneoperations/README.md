# ManagedZoneOperations

### Available Operations

* [DNSManagedZoneOperationsGet](#dnsmanagedzoneoperationsget) - Fetches the representation of an existing Operation.
* [DNSManagedZoneOperationsList](#dnsmanagedzoneoperationslist) - Enumerates Operations for the given ManagedZone.

## DNSManagedZoneOperationsGet

Fetches the representation of an existing Operation.

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
    res, err := s.ManagedZoneOperations.DNSManagedZoneOperationsGet(ctx, operations.DNSManagedZoneOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        ClientOperationID: sdk.String("rerum"),
        Fields: sdk.String("alias"),
        Key: sdk.String("error"),
        ManagedZone: "vel",
        OauthToken: sdk.String("accusantium"),
        Operation: "id",
        PrettyPrint: sdk.Bool(false),
        Project: "laboriosam",
        QuotaUser: sdk.String("ex"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.DNSManagedZoneOperationsGetSecurity{
        Option1: &operations.DNSManagedZoneOperationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## DNSManagedZoneOperationsList

Enumerates Operations for the given ManagedZone.

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
    res, err := s.ManagedZoneOperations.DNSManagedZoneOperationsList(ctx, operations.DNSManagedZoneOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("quam"),
        Key: sdk.String("magni"),
        ManagedZone: "deserunt",
        MaxResults: sdk.Int64(965095),
        OauthToken: sdk.String("omnis"),
        PageToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        Project: "nesciunt",
        QuotaUser: sdk.String("maxime"),
        SortBy: operations.DNSManagedZoneOperationsListSortByEnumStartTime.ToPointer(),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.DNSManagedZoneOperationsListSecurity{
        Option1: &operations.DNSManagedZoneOperationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManagedZoneOperationsListResponse != nil {
        // handle response
    }
}
```
