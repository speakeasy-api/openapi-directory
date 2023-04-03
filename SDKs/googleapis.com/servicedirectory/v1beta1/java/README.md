# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListSecurity;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsListRequest req = new ServicedirectoryProjectsLocationsListRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                filter = "nulla";
                key = "corrupti";
                name = "illum";
                oauthToken = "vel";
                pageSize = 623564;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }}            

            ServicedirectoryProjectsLocationsListResponse res = sdk.projects.servicedirectoryProjectsLocationsList(req, new ServicedirectoryProjectsLocationsListSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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
* `servicedirectoryProjectsLocationsNamespacesServicesList` - Lists all services belonging to a namespace.
* `servicedirectoryProjectsLocationsNamespacesServicesResolve` - Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
* `servicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicy` - Gets the IAM Policy for a resource
* `servicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicy` - Sets the IAM Policy for a resource
* `servicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissions` - Tests IAM permissions for a resource (namespace, service or service workload only).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
