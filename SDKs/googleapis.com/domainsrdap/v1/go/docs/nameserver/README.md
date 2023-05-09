# Nameserver

### Available Operations

* [DomainsrdapNameserverGet](#domainsrdapnameserverget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

## DomainsrdapNameserverGet

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

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
    res, err := s.Nameserver.DomainsrdapNameserverGet(ctx, operations.DomainsrdapNameserverGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("modi"),
        Key: sdk.String("qui"),
        NameserverID: "impedit",
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RdapResponse != nil {
        // handle response
    }
}
```
