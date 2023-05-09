# Domain

### Available Operations

* [DomainsrdapDomainGet](#domainsrdapdomainget) - Look up RDAP information for a domain by name.

## DomainsrdapDomainGet

Look up RDAP information for a domain by name.

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
    res, err := s.Domain.DomainsrdapDomainGet(ctx, operations.DomainsrdapDomainGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        DomainName: "recusandae",
        Fields: sdk.String("temporibus"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HTTPBody != nil {
        // handle response
    }
}
```
