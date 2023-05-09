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
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        ClientOperationID: sdk.String("reiciendis"),
        DigestType: sdk.String("ab"),
        DNSKeyID: "sint",
        Fields: sdk.String("nihil"),
        Key: sdk.String("esse"),
        Location: "iure",
        ManagedZone: "odio",
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        Project: "debitis",
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("corporis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        DigestType: sdk.String("distinctio"),
        Fields: sdk.String("eius"),
        Key: sdk.String("ipsa"),
        Location: "rem",
        ManagedZone: "maiores",
        MaxResults: sdk.Int64(35160),
        OauthToken: sdk.String("veniam"),
        PageToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        Project: "neque",
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("quos"),
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
