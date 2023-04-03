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

* `prodTtSasportalCustomersList` - Returns a list of requested customers.
* `prodTtSasportalCustomersProvisionDeployment` - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### installer

* `prodTtSasportalInstallerGenerateSecret` - Generates a secret to be used with the ValidateInstaller.
* `prodTtSasportalInstallerValidate` - Validates the identity of a Certified Professional Installer (CPI).

### nodes

* `prodTtSasportalNodesDevicesSignDevice` - Signs a device.
* `prodTtSasportalNodesDevicesUpdateSigned` - Updates a signed device.
* `prodTtSasportalNodesNodesDelete` - Deletes a node.
* `prodTtSasportalNodesNodesDeploymentsCreate` - Creates a new deployment.
* `prodTtSasportalNodesNodesDeploymentsList` - Lists deployments.
* `prodTtSasportalNodesNodesDevicesCreate` - Creates a device under a node or customer.
* `prodTtSasportalNodesNodesDevicesCreateSigned` - Creates a signed device under a node or customer.
* `prodTtSasportalNodesNodesDevicesList` - Lists devices under a node or customer.
* `prodTtSasportalNodesNodesGet` - Returns a requested node.
* `prodTtSasportalNodesNodesMove` - Moves a node under another node or customer.
* `prodTtSasportalNodesNodesNodesCreate` - Creates a new node.
* `prodTtSasportalNodesNodesNodesList` - Lists nodes.
* `prodTtSasportalNodesNodesPatch` - Updates an existing node.

### policies

* `prodTtSasportalPoliciesGet` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `prodTtSasportalPoliciesSet` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `prodTtSasportalPoliciesTest` - Returns permissions that a caller has on the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
