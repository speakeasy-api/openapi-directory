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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        ClientOperationID: sdk.String("temporibus"),
        DigestType: sdk.String("porro"),
        DNSKeyID: "tempore",
        Fields: sdk.String("commodi"),
        Key: sdk.String("autem"),
        ManagedZone: "praesentium",
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        Project: "quisquam",
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("eaque"),
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
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tenetur"),
        DigestType: sdk.String("assumenda"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("a"),
        ManagedZone: "tempore",
        MaxResults: sdk.Int64(388851),
        OauthToken: sdk.String("earum"),
        PageToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        Project: "dicta",
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("laborum"),
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
