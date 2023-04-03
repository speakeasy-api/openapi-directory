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

* `cloudbuildProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `cloudbuildProjectsLocationsWorkerPoolsCreate` - Creates a `WorkerPool` to run the builds, and returns the new worker pool. NOTE: As of now, this method returns an `Operation` that is always complete.
* `cloudbuildProjectsLocationsWorkerPoolsDelete` - Deletes a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.
* `cloudbuildProjectsLocationsWorkerPoolsGet` - Returns details of a `WorkerPool`.
* `cloudbuildProjectsLocationsWorkerPoolsList` - Lists `WorkerPool`s in the given project.
* `cloudbuildProjectsLocationsWorkerPoolsPatch` - Updates a `WorkerPool`. NOTE: As of now, this method returns an `Operation` that is always complete.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
