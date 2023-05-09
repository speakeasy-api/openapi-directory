# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/oauth2/v1/go
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
    res, err := s.Oauth2Tokeninfo(ctx, operations.Oauth2TokeninfoRequest{
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("provident"),
        IDToken: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UserIP: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tokeninfo != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [Oauth2Tokeninfo](docs/sdk/README.md#oauth2tokeninfo) - Get token info

### [Userinfo](docs/userinfo/README.md)

* [Oauth2UserinfoGet](docs/userinfo/README.md#oauth2userinfoget) - Get user info
* [Oauth2UserinfoV2MeGet](docs/userinfo/README.md#oauth2userinfov2meget) - Get user info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
