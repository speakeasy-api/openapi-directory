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
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        ClientOperationID: sdk.String("velit"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("nesciunt"),
        Location: "similique",
        ManagedZone: "illo",
        OauthToken: sdk.String("repellat"),
        Operation: "nemo",
        PrettyPrint: sdk.Bool(false),
        Project: "doloribus",
        QuotaUser: sdk.String("possimus"),
        UploadType: sdk.String("unde"),
        UploadProtocol: sdk.String("incidunt"),
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
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("alias"),
        Key: sdk.String("quidem"),
        Location: "nesciunt",
        ManagedZone: "commodi",
        MaxResults: sdk.Int64(956124),
        OauthToken: sdk.String("consequuntur"),
        PageToken: sdk.String("veniam"),
        PrettyPrint: sdk.Bool(false),
        Project: "debitis",
        QuotaUser: sdk.String("officia"),
        SortBy: operations.DNSManagedZoneOperationsListSortByEnumID.ToPointer(),
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("numquam"),
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
