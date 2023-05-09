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
    res, err := s.WebResource.SiteVerificationWebResourceDelete(ctx, operations.SiteVerificationWebResourceDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("corrupti"),
        ID: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UserIP: sdk.String("sapiente"),
    }, operations.SiteVerificationWebResourceDeleteSecurity{
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


### [WebResource](docs/webresource/README.md)

* [SiteVerificationWebResourceDelete](docs/webresource/README.md#siteverificationwebresourcedelete) - Relinquish ownership of a website or domain.
* [SiteVerificationWebResourceGet](docs/webresource/README.md#siteverificationwebresourceget) - Get the most current data for a website or domain.
* [SiteVerificationWebResourceGetToken](docs/webresource/README.md#siteverificationwebresourcegettoken) - Get a verification token for placing on a website or domain.
* [SiteVerificationWebResourceInsert](docs/webresource/README.md#siteverificationwebresourceinsert) - Attempt verification of a website or domain.
* [SiteVerificationWebResourceList](docs/webresource/README.md#siteverificationwebresourcelist) - Get the list of your verified websites and domains.
* [SiteVerificationWebResourcePatch](docs/webresource/README.md#siteverificationwebresourcepatch) - Modify the list of owners for your website or domain. This method supports patch semantics.
* [SiteVerificationWebResourceUpdate](docs/webresource/README.md#siteverificationwebresourceupdate) - Modify the list of owners for your website or domain.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
