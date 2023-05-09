# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/apikeys/v2/go
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
    res, err := s.Keys.ApikeysKeysLookupKey(ctx, operations.ApikeysKeysLookupKeyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        KeyString: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.ApikeysKeysLookupKeySecurity{
        Option1: &operations.ApikeysKeysLookupKeySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V2LookupKeyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Keys](docs/keys/README.md)

* [ApikeysKeysLookupKey](docs/keys/README.md#apikeyskeyslookupkey) - Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.

### [Projects](docs/projects/README.md)

* [ApikeysProjectsLocationsKeysCreate](docs/projects/README.md#apikeysprojectslocationskeyscreate) - Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [ApikeysProjectsLocationsKeysDelete](docs/projects/README.md#apikeysprojectslocationskeysdelete) - Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [ApikeysProjectsLocationsKeysGet](docs/projects/README.md#apikeysprojectslocationskeysget) - Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [ApikeysProjectsLocationsKeysGetKeyString](docs/projects/README.md#apikeysprojectslocationskeysgetkeystring) - Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [ApikeysProjectsLocationsKeysList](docs/projects/README.md#apikeysprojectslocationskeyslist) - Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [ApikeysProjectsLocationsKeysPatch](docs/projects/README.md#apikeysprojectslocationskeyspatch) - Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [ApikeysProjectsLocationsKeysUndelete](docs/projects/README.md#apikeysprojectslocationskeysundelete) - Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
