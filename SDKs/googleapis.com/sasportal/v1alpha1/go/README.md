# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/sasportal/v1alpha1/go
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
    res, err := s.Customers.SasportalCustomersList(ctx, operations.SasportalCustomersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PageSize: sdk.Int64(847252),
        PageToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.SasportalCustomersListSecurity{
        Option1: &operations.SasportalCustomersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalListCustomersResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Customers](docs/customers/README.md)

* [SasportalCustomersList](docs/customers/README.md#sasportalcustomerslist) - Returns a list of requested customers.
* [SasportalCustomersProvisionDeployment](docs/customers/README.md#sasportalcustomersprovisiondeployment) - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### [Installer](docs/installer/README.md)

* [SasportalInstallerGenerateSecret](docs/installer/README.md#sasportalinstallergeneratesecret) - Generates a secret to be used with the ValidateInstaller.
* [SasportalInstallerValidate](docs/installer/README.md#sasportalinstallervalidate) - Validates the identity of a Certified Professional Installer (CPI).

### [Nodes](docs/nodes/README.md)

* [SasportalNodesDevicesSignDevice](docs/nodes/README.md#sasportalnodesdevicessigndevice) - Signs a device.
* [SasportalNodesDevicesUpdateSigned](docs/nodes/README.md#sasportalnodesdevicesupdatesigned) - Updates a signed device.
* [SasportalNodesNodesDelete](docs/nodes/README.md#sasportalnodesnodesdelete) - Deletes a node.
* [SasportalNodesNodesDeploymentsCreate](docs/nodes/README.md#sasportalnodesnodesdeploymentscreate) - Creates a new deployment.
* [SasportalNodesNodesDeploymentsList](docs/nodes/README.md#sasportalnodesnodesdeploymentslist) - Lists deployments.
* [SasportalNodesNodesDevicesCreate](docs/nodes/README.md#sasportalnodesnodesdevicescreate) - Creates a device under a node or customer.
* [SasportalNodesNodesDevicesCreateSigned](docs/nodes/README.md#sasportalnodesnodesdevicescreatesigned) - Creates a signed device under a node or customer.
* [SasportalNodesNodesDevicesList](docs/nodes/README.md#sasportalnodesnodesdeviceslist) - Lists devices under a node or customer.
* [SasportalNodesNodesGet](docs/nodes/README.md#sasportalnodesnodesget) - Returns a requested node.
* [SasportalNodesNodesMove](docs/nodes/README.md#sasportalnodesnodesmove) - Moves a node under another node or customer.
* [SasportalNodesNodesNodesCreate](docs/nodes/README.md#sasportalnodesnodesnodescreate) - Creates a new node.
* [SasportalNodesNodesNodesList](docs/nodes/README.md#sasportalnodesnodesnodeslist) - Lists nodes.
* [SasportalNodesNodesPatch](docs/nodes/README.md#sasportalnodesnodespatch) - Updates an existing node.

### [Policies](docs/policies/README.md)

* [SasportalPoliciesGet](docs/policies/README.md#sasportalpoliciesget) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [SasportalPoliciesSet](docs/policies/README.md#sasportalpoliciesset) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [SasportalPoliciesTest](docs/policies/README.md#sasportalpoliciestest) - Returns permissions that a caller has on the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
