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


### projects

* `tpuProjectsLocationsAcceleratorTypesList` - Lists accelerator types supported by this API.
* `tpuProjectsLocationsGenerateServiceIdentity` - Generates the Cloud TPU service identity for the project.
* `tpuProjectsLocationsList` - Lists information about the supported locations for this service.
* `tpuProjectsLocationsNodesCreate` - Creates a node.
* `tpuProjectsLocationsNodesGetGuestAttributes` - Retrieves the guest attributes for the node.
* `tpuProjectsLocationsNodesList` - Lists nodes.
* `tpuProjectsLocationsNodesPatch` - Updates the configurations of a node.
* `tpuProjectsLocationsNodesStart` - Starts a node.
* `tpuProjectsLocationsNodesStop` - Stops a node. This operation is only available with single TPU nodes.
* `tpuProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `tpuProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `tpuProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `tpuProjectsLocationsRuntimeVersionsGet` - Gets a runtime version.
* `tpuProjectsLocationsRuntimeVersionsList` - Lists runtime versions supported by this API.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
