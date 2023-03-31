# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/siteVerification/v1/go
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

    req := operations.SiteVerificationWebResourceDeleteRequest{
        Alt: "json",
        Fields: "corrupti",
        ID: "provident",
        Key: "distinctio",
        OauthToken: "quibusdam",
        PrettyPrint: false,
        QuotaUser: "unde",
        UserIP: "nulla",
    }

    ctx := context.Background()
    res, err := s.WebResource.SiteVerificationWebResourceDelete(ctx, req, operations.SiteVerificationWebResourceDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### WebResource

* `SiteVerificationWebResourceDelete` - Relinquish ownership of a website or domain.
* `SiteVerificationWebResourceGet` - Get the most current data for a website or domain.
* `SiteVerificationWebResourceGetToken` - Get a verification token for placing on a website or domain.
* `SiteVerificationWebResourceInsert` - Attempt verification of a website or domain.
* `SiteVerificationWebResourceList` - Get the list of your verified websites and domains.
* `SiteVerificationWebResourcePatch` - Modify the list of owners for your website or domain. This method supports patch semantics.
* `SiteVerificationWebResourceUpdate` - Modify the list of owners for your website or domain.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
