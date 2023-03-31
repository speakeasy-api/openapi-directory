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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DomainsrdapAutnumGetRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        AutnumID: "quibusdam",
        Callback: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Autnum.DomainsrdapAutnumGet(ctx, req)
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


### Autnum

* `DomainsrdapAutnumGet` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Domain

* `DomainsrdapDomainGet` - Look up RDAP information for a domain by name.

### Entity

* `DomainsrdapEntityGet` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### IP

* `DomainsrdapIPGet` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Nameserver

* `DomainsrdapNameserverGet` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### V1

* `DomainsrdapGetDomains` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* `DomainsrdapGetEntities` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* `DomainsrdapGetHelp` - Get help information for the RDAP API, including links to documentation.
* `DomainsrdapGetIP` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
* `DomainsrdapGetNameservers` - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
