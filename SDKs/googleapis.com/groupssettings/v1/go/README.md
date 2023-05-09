# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/groupssettings/v1/go
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
    res, err := s.Groups.GroupsSettingsGroupsGet(ctx, operations.GroupsSettingsGroupsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("provident"),
        GroupUniqueID: "distinctio",
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UserIP: sdk.String("corrupti"),
    }, operations.GroupsSettingsGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groups != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Groups](docs/groups/README.md)

* [GroupsSettingsGroupsGet](docs/groups/README.md#groupssettingsgroupsget) - Gets one resource by id.
* [GroupsSettingsGroupsPatch](docs/groups/README.md#groupssettingsgroupspatch) - Updates an existing resource. This method supports patch semantics.
* [GroupsSettingsGroupsUpdate](docs/groups/README.md#groupssettingsgroupsupdate) - Updates an existing resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
