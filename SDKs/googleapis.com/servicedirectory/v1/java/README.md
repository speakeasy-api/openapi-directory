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
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsListRequest req = new ServicedirectoryProjectsLocationsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            ServicedirectoryProjectsLocationsListResponse res = sdk.projects.servicedirectoryProjectsLocationsList(req, new ServicedirectoryProjectsLocationsListSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [servicedirectoryProjectsLocationsList](docs/projects/README.md#servicedirectoryprojectslocationslist) - Lists information about the supported locations for this service.
* [servicedirectoryProjectsLocationsNamespacesCreate](docs/projects/README.md#servicedirectoryprojectslocationsnamespacescreate) - Creates a namespace, and returns the new namespace.
* [servicedirectoryProjectsLocationsNamespacesList](docs/projects/README.md#servicedirectoryprojectslocationsnamespaceslist) - Lists all namespaces.
* [servicedirectoryProjectsLocationsNamespacesServicesCreate](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicescreate) - Creates a service, and returns the new service.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointscreate) - Creates an endpoint, and returns the new endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointsdelete) - Deletes an endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsGet](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointsget) - Gets an endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsList](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointslist) - Lists all endpoints.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointspatch) - Updates an endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesGetIamPolicy](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesgetiampolicy) - Gets the IAM Policy for a resource (namespace or service only).
* [servicedirectoryProjectsLocationsNamespacesServicesList](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesserviceslist) - Lists all services belonging to a namespace.
* [servicedirectoryProjectsLocationsNamespacesServicesResolve](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesresolve) - Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
* [servicedirectoryProjectsLocationsNamespacesServicesSetIamPolicy](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicessetiampolicy) - Sets the IAM Policy for a resource (namespace or service only).
* [servicedirectoryProjectsLocationsNamespacesServicesTestIamPermissions](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicestestiampermissions) - Tests IAM permissions for a resource (namespace or service only).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
