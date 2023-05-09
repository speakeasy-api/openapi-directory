# DNSKeys

### Available Operations

* [DNSDNSKeysGet](#dnsdnskeysget) - Fetches the representation of an existing DnsKey.
* [DNSDNSKeysList](#dnsdnskeyslist) - Enumerates DnsKeys to a ResourceRecordSet collection.

## DNSDNSKeysGet

Fetches the representation of an existing DnsKey.

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
    res, err := s.DNSKeys.DNSDNSKeysGet(ctx, operations.DNSDNSKeysGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("impedit"),
        ClientOperationID: sdk.String("ipsa"),
        DigestType: sdk.String("excepturi"),
        DNSKeyID: "a",
        Fields: sdk.String("maiores"),
        Key: sdk.String("laudantium"),
        ManagedZone: "maiores",
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        Project: "asperiores",
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.DNSDNSKeysGetSecurity{
        Option1: &operations.DNSDNSKeysGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DNSKey != nil {
        // handle response
    }
}
```

## DNSDNSKeysList

Enumerates DnsKeys to a ResourceRecordSet collection.

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
    res, err := s.DNSKeys.DNSDNSKeysList(ctx, operations.DNSDNSKeysListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eius"),
        DigestType: sdk.String("esse"),
        Fields: sdk.String("in"),
        Key: sdk.String("eligendi"),
        ManagedZone: "quasi",
        MaxResults: sdk.Int64(203621),
        OauthToken: sdk.String("vero"),
        PageToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        Project: "accusantium",
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.DNSDNSKeysListSecurity{
        Option1: &operations.DNSDNSKeysListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DNSKeysListResponse != nil {
        // handle response
    }
}
```
