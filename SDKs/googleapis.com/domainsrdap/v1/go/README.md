# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/domainsrdap/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Autnum.DomainsrdapAutnumGet(ctx, operations.DomainsrdapAutnumGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        AutnumID: "quibusdam",
        Callback: sdk.String("unde"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RdapResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Autnum](docs/autnum/README.md)

* [DomainsrdapAutnumGet](docs/autnum/README.md#domainsrdapautnumget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### [Domain](docs/domain/README.md)

* [DomainsrdapDomainGet](docs/domain/README.md#domainsrdapdomainget) - Look up RDAP information for a domain by name.

### [Entity](docs/entity/README.md)

* [DomainsrdapEntityGet](docs/entity/README.md#domainsrdapentityget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### [IP](docs/ip/README.md)

* [DomainsrdapIPGet](docs/ip/README.md#domainsrdapipget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### [Nameserver](docs/nameserver/README.md)

* [DomainsrdapNameserverGet](docs/nameserver/README.md#domainsrdapnameserverget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### [V1](docs/v1/README.md)

* [DomainsrdapGetDomains](docs/v1/README.md#domainsrdapgetdomains) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* [DomainsrdapGetEntities](docs/v1/README.md#domainsrdapgetentities) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* [DomainsrdapGetHelp](docs/v1/README.md#domainsrdapgethelp) - Get help information for the RDAP API, including links to documentation.
* [DomainsrdapGetIP](docs/v1/README.md#domainsrdapgetip) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* [DomainsrdapGetNameservers](docs/v1/README.md#domainsrdapgetnameservers) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
