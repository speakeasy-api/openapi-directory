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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.SasportalCustomersListRequest{
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
    res, err := s.Customers.SasportalCustomersList(ctx, req, operations.SasportalCustomersListSecurity{
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


### Customers

* `SasportalCustomersList` - Returns a list of requested customers.
* `SasportalCustomersProvisionDeployment` - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### Installer

* `SasportalInstallerGenerateSecret` - Generates a secret to be used with the ValidateInstaller.
* `SasportalInstallerValidate` - Validates the identity of a Certified Professional Installer (CPI).

### Nodes

* `SasportalNodesDevicesSignDevice` - Signs a device.
* `SasportalNodesDevicesUpdateSigned` - Updates a signed device.
* `SasportalNodesNodesDelete` - Deletes a node.
* `SasportalNodesNodesDeploymentsCreate` - Creates a new deployment.
* `SasportalNodesNodesDeploymentsList` - Lists deployments.
* `SasportalNodesNodesDevicesCreate` - Creates a device under a node or customer.
* `SasportalNodesNodesDevicesCreateSigned` - Creates a signed device under a node or customer.
* `SasportalNodesNodesDevicesList` - Lists devices under a node or customer.
* `SasportalNodesNodesGet` - Returns a requested node.
* `SasportalNodesNodesMove` - Moves a node under another node or customer.
* `SasportalNodesNodesNodesCreate` - Creates a new node.
* `SasportalNodesNodesNodesList` - Lists nodes.
* `SasportalNodesNodesPatch` - Updates an existing node.

### Policies

* `SasportalPoliciesGet` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `SasportalPoliciesSet` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `SasportalPoliciesTest` - Returns permissions that a caller has on the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
