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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("labore"),
        ClientOperationID: sdk.String("laudantium"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("aliquid"),
        ManagedZone: "repudiandae",
        OauthToken: sdk.String("aspernatur"),
        Operation: "quod",
        PrettyPrint: sdk.Bool(false),
        Project: "dolorem",
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("excepturi"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("amet"),
        Key: sdk.String("iure"),
        ManagedZone: "quibusdam",
        MaxResults: sdk.Int64(575397),
        OauthToken: sdk.String("voluptates"),
        PageToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        Project: "ad",
        QuotaUser: sdk.String("eligendi"),
        SortBy: operations.DNSManagedZoneOperationsListSortByEnumID.ToPointer(),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("sit"),
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
