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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ProdTtSasportalCustomersListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PageSize: 847252,
        PageToken: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Customers.ProdTtSasportalCustomersList(ctx, req, operations.ProdTtSasportalCustomersListSecurity{
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


### Customers

* `ProdTtSasportalCustomersList` - Returns a list of requested customers.
* `ProdTtSasportalCustomersProvisionDeployment` - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### Installer

* `ProdTtSasportalInstallerGenerateSecret` - Generates a secret to be used with the ValidateInstaller.
* `ProdTtSasportalInstallerValidate` - Validates the identity of a Certified Professional Installer (CPI).

### Nodes

* `ProdTtSasportalNodesDevicesSignDevice` - Signs a device.
* `ProdTtSasportalNodesDevicesUpdateSigned` - Updates a signed device.
* `ProdTtSasportalNodesNodesDelete` - Deletes a node.
* `ProdTtSasportalNodesNodesDeploymentsCreate` - Creates a new deployment.
* `ProdTtSasportalNodesNodesDeploymentsList` - Lists deployments.
* `ProdTtSasportalNodesNodesDevicesCreate` - Creates a device under a node or customer.
* `ProdTtSasportalNodesNodesDevicesCreateSigned` - Creates a signed device under a node or customer.
* `ProdTtSasportalNodesNodesDevicesList` - Lists devices under a node or customer.
* `ProdTtSasportalNodesNodesGet` - Returns a requested node.
* `ProdTtSasportalNodesNodesMove` - Moves a node under another node or customer.
* `ProdTtSasportalNodesNodesNodesCreate` - Creates a new node.
* `ProdTtSasportalNodesNodesNodesList` - Lists nodes.
* `ProdTtSasportalNodesNodesPatch` - Updates an existing node.

### Policies

* `ProdTtSasportalPoliciesGet` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `ProdTtSasportalPoliciesSet` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `ProdTtSasportalPoliciesTest` - Returns permissions that a caller has on the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
