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
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        ClientOperationID: sdk.String("cumque"),
        Fields: sdk.String("natus"),
        Key: sdk.String("quaerat"),
        Location: "doloribus",
        OauthToken: sdk.String("quia"),
        PrettyPrint: sdk.Bool(false),
        Project: "officiis",
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("quis"),
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
