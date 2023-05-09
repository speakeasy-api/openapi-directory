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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        ClientOperationID: sdk.String("aliquid"),
        Fields: sdk.String("vero"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        Project: "sit",
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("saepe"),
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
