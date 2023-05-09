# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/servicedirectory/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.ServicedirectoryProjectsLocationsList(ctx, operations.ServicedirectoryProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        Name: "Ben Mueller",
        OauthToken: sdk.String("iure"),
        PageSize: sdk.Int64(297534),
        PageToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.ServicedirectoryProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [ServicedirectoryProjectsLocationsList](docs/projects/README.md#servicedirectoryprojectslocationslist) - Lists information about the supported locations for this service.
* [ServicedirectoryProjectsLocationsNamespacesCreate](docs/projects/README.md#servicedirectoryprojectslocationsnamespacescreate) - Creates a namespace, and returns the new namespace.
* [ServicedirectoryProjectsLocationsNamespacesList](docs/projects/README.md#servicedirectoryprojectslocationsnamespaceslist) - Lists all namespaces.
* [ServicedirectoryProjectsLocationsNamespacesServicesCreate](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicescreate) - Creates a service, and returns the new service.
* [ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointscreate) - Creates an endpoint, and returns the new endpoint.
* [ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointsdelete) - Deletes an endpoint.
* [ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGet](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointsget) - Gets an endpoint.
* [ServicedirectoryProjectsLocationsNamespacesServicesEndpointsList](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointslist) - Lists all endpoints.
* [ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointspatch) - Updates an endpoint.
* [ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicy](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesgetiampolicy) - Gets the IAM Policy for a resource (namespace or service only).
* [ServicedirectoryProjectsLocationsNamespacesServicesList](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesserviceslist) - Lists all services belonging to a namespace.
* [ServicedirectoryProjectsLocationsNamespacesServicesResolve](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesresolve) - Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
* [ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicy](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicessetiampolicy) - Sets the IAM Policy for a resource (namespace or service only).
* [ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissions](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicestestiampermissions) - Tests IAM permissions for a resource (namespace or service only).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
