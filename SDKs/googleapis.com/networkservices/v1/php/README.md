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

* `networkservicesProjectsLocationsEndpointPoliciesCreate` - Creates a new EndpointPolicy in a given project and location.
* `networkservicesProjectsLocationsEndpointPoliciesList` - Lists EndpointPolicies in a given project and location.
* `networkservicesProjectsLocationsGatewaysCreate` - Creates a new Gateway in a given project and location.
* `networkservicesProjectsLocationsGatewaysList` - Lists Gateways in a given project and location.
* `networkservicesProjectsLocationsGrpcRoutesCreate` - Creates a new GrpcRoute in a given project and location.
* `networkservicesProjectsLocationsGrpcRoutesList` - Lists GrpcRoutes in a given project and location.
* `networkservicesProjectsLocationsHttpRoutesCreate` - Creates a new HttpRoute in a given project and location.
* `networkservicesProjectsLocationsHttpRoutesList` - Lists HttpRoute in a given project and location.
* `networkservicesProjectsLocationsList` - Lists information about the supported locations for this service.
* `networkservicesProjectsLocationsMeshesCreate` - Creates a new Mesh in a given project and location.
* `networkservicesProjectsLocationsMeshesList` - Lists Meshes in a given project and location.
* `networkservicesProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networkservicesProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `networkservicesProjectsLocationsServiceBindingsCreate` - Creates a new ServiceBinding in a given project and location.
* `networkservicesProjectsLocationsServiceBindingsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networkservicesProjectsLocationsServiceBindingsList` - Lists ServiceBinding in a given project and location.
* `networkservicesProjectsLocationsServiceBindingsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networkservicesProjectsLocationsServiceBindingsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `networkservicesProjectsLocationsTcpRoutesCreate` - Creates a new TcpRoute in a given project and location.
* `networkservicesProjectsLocationsTcpRoutesList` - Lists TcpRoute in a given project and location.
* `networkservicesProjectsLocationsTlsRoutesCreate` - Creates a new TlsRoute in a given project and location.
* `networkservicesProjectsLocationsTlsRoutesDelete` - Deletes a single TlsRoute.
* `networkservicesProjectsLocationsTlsRoutesGet` - Gets details of a single TlsRoute.
* `networkservicesProjectsLocationsTlsRoutesList` - Lists TlsRoute in a given project and location.
* `networkservicesProjectsLocationsTlsRoutesPatch` - Updates the parameters of a single TlsRoute.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
