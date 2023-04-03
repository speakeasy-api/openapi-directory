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

* `servicedirectoryProjectsLocationsList` - Lists information about the supported locations for this service.
* `servicedirectoryProjectsLocationsNamespacesCreate` - Creates a namespace, and returns the new namespace.
* `servicedirectoryProjectsLocationsNamespacesList` - Lists all namespaces.
* `servicedirectoryProjectsLocationsNamespacesServicesCreate` - Creates a service, and returns the new service.
* `servicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate` - Creates an endpoint, and returns the new endpoint.
* `servicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete` - Deletes an endpoint.
* `servicedirectoryProjectsLocationsNamespacesServicesEndpointsGet` - Gets an endpoint.
* `servicedirectoryProjectsLocationsNamespacesServicesEndpointsList` - Lists all endpoints.
* `servicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch` - Updates an endpoint.
* `servicedirectoryProjectsLocationsNamespacesServicesGetIamPolicy` - Gets the IAM Policy for a resource (namespace or service only).
* `servicedirectoryProjectsLocationsNamespacesServicesList` - Lists all services belonging to a namespace.
* `servicedirectoryProjectsLocationsNamespacesServicesResolve` - Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
* `servicedirectoryProjectsLocationsNamespacesServicesSetIamPolicy` - Sets the IAM Policy for a resource (namespace or service only).
* `servicedirectoryProjectsLocationsNamespacesServicesTestIamPermissions` - Tests IAM permissions for a resource (namespace or service only).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
