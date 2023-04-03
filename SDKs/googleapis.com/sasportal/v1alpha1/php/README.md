# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### customers

* `sasportalCustomersList` - Returns a list of requested customers.
* `sasportalCustomersProvisionDeployment` - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### installer

* `sasportalInstallerGenerateSecret` - Generates a secret to be used with the ValidateInstaller.
* `sasportalInstallerValidate` - Validates the identity of a Certified Professional Installer (CPI).

### nodes

* `sasportalNodesDevicesSignDevice` - Signs a device.
* `sasportalNodesDevicesUpdateSigned` - Updates a signed device.
* `sasportalNodesNodesDelete` - Deletes a node.
* `sasportalNodesNodesDeploymentsCreate` - Creates a new deployment.
* `sasportalNodesNodesDeploymentsList` - Lists deployments.
* `sasportalNodesNodesDevicesCreate` - Creates a device under a node or customer.
* `sasportalNodesNodesDevicesCreateSigned` - Creates a signed device under a node or customer.
* `sasportalNodesNodesDevicesList` - Lists devices under a node or customer.
* `sasportalNodesNodesGet` - Returns a requested node.
* `sasportalNodesNodesMove` - Moves a node under another node or customer.
* `sasportalNodesNodesNodesCreate` - Creates a new node.
* `sasportalNodesNodesNodesList` - Lists nodes.
* `sasportalNodesNodesPatch` - Updates an existing node.

### policies

* `sasportalPoliciesGet` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `sasportalPoliciesSet` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `sasportalPoliciesTest` - Returns permissions that a caller has on the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
