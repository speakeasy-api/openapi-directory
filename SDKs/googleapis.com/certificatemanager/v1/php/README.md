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

* `certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate` - Creates a new CertificateIssuanceConfig in a given project and location.
* `certificatemanagerProjectsLocationsCertificateIssuanceConfigsList` - Lists CertificateIssuanceConfigs in a given project and location.
* `certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate` - Creates a new CertificateMapEntry in a given project and location.
* `certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList` - Lists CertificateMapEntries in a given project and location.
* `certificatemanagerProjectsLocationsCertificateMapsCreate` - Creates a new CertificateMap in a given project and location.
* `certificatemanagerProjectsLocationsCertificateMapsList` - Lists CertificateMaps in a given project and location.
* `certificatemanagerProjectsLocationsCertificatesCreate` - Creates a new Certificate in a given project and location.
* `certificatemanagerProjectsLocationsCertificatesList` - Lists Certificates in a given project and location.
* `certificatemanagerProjectsLocationsDnsAuthorizationsCreate` - Creates a new DnsAuthorization in a given project and location.
* `certificatemanagerProjectsLocationsDnsAuthorizationsList` - Lists DnsAuthorizations in a given project and location.
* `certificatemanagerProjectsLocationsDnsAuthorizationsPatch` - Updates a DnsAuthorization.
* `certificatemanagerProjectsLocationsList` - Lists information about the supported locations for this service.
* `certificatemanagerProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `certificatemanagerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `certificatemanagerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `certificatemanagerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
