# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/iap/v1/go
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
    res, err := s.Projects.IapProjectsBrandsCreate(ctx, operations.IapProjectsBrandsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BrandInput: &shared.BrandInput{
            ApplicationTitle: sdk.String("provident"),
            SupportEmail: sdk.String("distinctio"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("vel"),
        Parent: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.IapProjectsBrandsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Brand != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [IapProjectsBrandsCreate](docs/projects/README.md#iapprojectsbrandscreate) - Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.
* [IapProjectsBrandsIdentityAwareProxyClientsCreate](docs/projects/README.md#iapprojectsbrandsidentityawareproxyclientscreate) - Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.
* [IapProjectsBrandsIdentityAwareProxyClientsList](docs/projects/README.md#iapprojectsbrandsidentityawareproxyclientslist) - Lists the existing clients for the brand.
* [IapProjectsBrandsIdentityAwareProxyClientsResetSecret](docs/projects/README.md#iapprojectsbrandsidentityawareproxyclientsresetsecret) - Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.
* [IapProjectsBrandsList](docs/projects/README.md#iapprojectsbrandslist) - Lists the existing brands for the project.
* [IapProjectsIapTunnelLocationsDestGroupsCreate](docs/projects/README.md#iapprojectsiaptunnellocationsdestgroupscreate) - Creates a new TunnelDestGroup.
* [IapProjectsIapTunnelLocationsDestGroupsDelete](docs/projects/README.md#iapprojectsiaptunnellocationsdestgroupsdelete) - Deletes a TunnelDestGroup.
* [IapProjectsIapTunnelLocationsDestGroupsGet](docs/projects/README.md#iapprojectsiaptunnellocationsdestgroupsget) - Retrieves an existing TunnelDestGroup.
* [IapProjectsIapTunnelLocationsDestGroupsList](docs/projects/README.md#iapprojectsiaptunnellocationsdestgroupslist) - Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`
* [IapProjectsIapTunnelLocationsDestGroupsPatch](docs/projects/README.md#iapprojectsiaptunnellocationsdestgroupspatch) - Updates a TunnelDestGroup.

### [V1](docs/v1/README.md)

* [IapGetIamPolicy](docs/v1/README.md#iapgetiampolicy) - Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [IapGetIapSettings](docs/v1/README.md#iapgetiapsettings) - Gets the IAP settings on a particular IAP protected resource.
* [IapSetIamPolicy](docs/v1/README.md#iapsetiampolicy) - Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [IapTestIamPermissions](docs/v1/README.md#iaptestiampermissions) - Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [IapUpdateIapSettings](docs/v1/README.md#iapupdateiapsettings) - Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
