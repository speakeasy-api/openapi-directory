# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/prod_tt_sasportal/v1alpha1/go
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
    res, err := s.Customers.ProdTtSasportalCustomersList(ctx, operations.ProdTtSasportalCustomersListRequest{
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
    }, operations.ProdTtSasportalCustomersListSecurity{
        Option1: &operations.ProdTtSasportalCustomersListSecurityOption1{
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

* [ProdTtSasportalCustomersList](docs/customers/README.md#prodttsasportalcustomerslist) - Returns a list of requested customers.
* [ProdTtSasportalCustomersProvisionDeployment](docs/customers/README.md#prodttsasportalcustomersprovisiondeployment) - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### [Installer](docs/installer/README.md)

* [ProdTtSasportalInstallerGenerateSecret](docs/installer/README.md#prodttsasportalinstallergeneratesecret) - Generates a secret to be used with the ValidateInstaller.
* [ProdTtSasportalInstallerValidate](docs/installer/README.md#prodttsasportalinstallervalidate) - Validates the identity of a Certified Professional Installer (CPI).

### [Nodes](docs/nodes/README.md)

* [ProdTtSasportalNodesDevicesSignDevice](docs/nodes/README.md#prodttsasportalnodesdevicessigndevice) - Signs a device.
* [ProdTtSasportalNodesDevicesUpdateSigned](docs/nodes/README.md#prodttsasportalnodesdevicesupdatesigned) - Updates a signed device.
* [ProdTtSasportalNodesNodesDelete](docs/nodes/README.md#prodttsasportalnodesnodesdelete) - Deletes a node.
* [ProdTtSasportalNodesNodesDeploymentsCreate](docs/nodes/README.md#prodttsasportalnodesnodesdeploymentscreate) - Creates a new deployment.
* [ProdTtSasportalNodesNodesDeploymentsList](docs/nodes/README.md#prodttsasportalnodesnodesdeploymentslist) - Lists deployments.
* [ProdTtSasportalNodesNodesDevicesCreate](docs/nodes/README.md#prodttsasportalnodesnodesdevicescreate) - Creates a device under a node or customer.
* [ProdTtSasportalNodesNodesDevicesCreateSigned](docs/nodes/README.md#prodttsasportalnodesnodesdevicescreatesigned) - Creates a signed device under a node or customer.
* [ProdTtSasportalNodesNodesDevicesList](docs/nodes/README.md#prodttsasportalnodesnodesdeviceslist) - Lists devices under a node or customer.
* [ProdTtSasportalNodesNodesGet](docs/nodes/README.md#prodttsasportalnodesnodesget) - Returns a requested node.
* [ProdTtSasportalNodesNodesMove](docs/nodes/README.md#prodttsasportalnodesnodesmove) - Moves a node under another node or customer.
* [ProdTtSasportalNodesNodesNodesCreate](docs/nodes/README.md#prodttsasportalnodesnodesnodescreate) - Creates a new node.
* [ProdTtSasportalNodesNodesNodesList](docs/nodes/README.md#prodttsasportalnodesnodesnodeslist) - Lists nodes.
* [ProdTtSasportalNodesNodesPatch](docs/nodes/README.md#prodttsasportalnodesnodespatch) - Updates an existing node.

### [Policies](docs/policies/README.md)

* [ProdTtSasportalPoliciesGet](docs/policies/README.md#prodttsasportalpoliciesget) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ProdTtSasportalPoliciesSet](docs/policies/README.md#prodttsasportalpoliciesset) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [ProdTtSasportalPoliciesTest](docs/policies/README.md#prodttsasportalpoliciestest) - Returns permissions that a caller has on the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
