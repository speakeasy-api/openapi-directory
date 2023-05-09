# Projects

### Available Operations

* [DNSProjectsGet](#dnsprojectsget) - Fetches the representation of an existing Project.

## DNSProjectsGet

Fetches the representation of an existing Project.

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
    res, err := s.Projects.DNSProjectsGet(ctx, operations.DNSProjectsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repudiandae"),
        ClientOperationID: sdk.String("sed"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        Project: "vel",
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("ex"),
    }, operations.DNSProjectsGetSecurity{
        Option1: &operations.DNSProjectsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```
