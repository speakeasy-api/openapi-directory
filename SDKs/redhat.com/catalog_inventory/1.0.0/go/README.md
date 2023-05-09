# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/redhat.com/catalog_inventory/1.0.0/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GetDocumentation(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDocumentation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GetDocumentation](docs/sdk/README.md#getdocumentation) - Return this API document in JSON format
* [PostGraphQL](docs/sdk/README.md#postgraphql) - Perform a GraphQL Query

### [ServiceCredential](docs/servicecredential/README.md)

* [ListServiceCredentials](docs/servicecredential/README.md#listservicecredentials) - List ServiceCredentials
* [ShowServiceCredential](docs/servicecredential/README.md#showservicecredential) - Show an existing ServiceCredential

### [ServiceCredentialType](docs/servicecredentialtype/README.md)

* [ListServiceCredentialTypes](docs/servicecredentialtype/README.md#listservicecredentialtypes) - List ServiceCredentialTypes
* [ShowServiceCredentialType](docs/servicecredentialtype/README.md#showservicecredentialtype) - Show an existing ServiceCredentialType

### [ServiceInstance](docs/serviceinstance/README.md)

* [ListServiceInstances](docs/serviceinstance/README.md#listserviceinstances) - List ServiceInstances
* [ShowServiceInstance](docs/serviceinstance/README.md#showserviceinstance) - Show an existing ServiceInstance

### [ServiceInventory](docs/serviceinventory/README.md)

* [ListServiceInventories](docs/serviceinventory/README.md#listserviceinventories) - List ServiceInventories
* [ListServiceInventoryTags](docs/serviceinventory/README.md#listserviceinventorytags) - List Tags for ServiceInventory
* [ShowServiceInventory](docs/serviceinventory/README.md#showserviceinventory) - Show an existing ServiceInventory
* [TagServiceInventory](docs/serviceinventory/README.md#tagserviceinventory) - Tag a ServiceInventory
* [UntagServiceInventory](docs/serviceinventory/README.md#untagserviceinventory) - Untag a ServiceInventory

### [ServiceOffering](docs/serviceoffering/README.md)

* [AppliedInventoriesTagsForServiceOffering](docs/serviceoffering/README.md#appliedinventoriestagsforserviceoffering) - Invokes computing of ServiceInventories tags for given ServiceOffering
* [ListServiceOfferingServiceInstances](docs/serviceoffering/README.md#listserviceofferingserviceinstances) - List ServiceInstances for ServiceOffering
* [ListServiceOfferingServiceOfferingNodes](docs/serviceoffering/README.md#listserviceofferingserviceofferingnodes) - List ServiceOfferingNodes for ServiceOffering
* [ListServiceOfferingServicePlans](docs/serviceoffering/README.md#listserviceofferingserviceplans) - List ServicePlans for ServiceOffering
* [ListServiceOfferings](docs/serviceoffering/README.md#listserviceofferings) - List ServiceOfferings
* [OrderServiceOffering](docs/serviceoffering/README.md#orderserviceoffering) - Order an existing ServiceOffering
* [ShowServiceOffering](docs/serviceoffering/README.md#showserviceoffering) - Show an existing ServiceOffering

### [ServiceOfferingNode](docs/serviceofferingnode/README.md)

* [ListServiceOfferingNodes](docs/serviceofferingnode/README.md#listserviceofferingnodes) - List ServiceOfferingNodes
* [ShowServiceOfferingNode](docs/serviceofferingnode/README.md#showserviceofferingnode) - Show an existing ServiceOfferingNode

### [ServicePlan](docs/serviceplan/README.md)

* [ListServicePlans](docs/serviceplan/README.md#listserviceplans) - List ServicePlans
* [ShowServicePlan](docs/serviceplan/README.md#showserviceplan) - Show an existing ServicePlan

### [Source](docs/source/README.md)

* [IncrementalRefreshSource](docs/source/README.md#incrementalrefreshsource) - Incremental Refresh an existing Source
* [ListSourceServiceInstances](docs/source/README.md#listsourceserviceinstances) - List ServiceInstances for Source
* [ListSourceServiceInventories](docs/source/README.md#listsourceserviceinventories) - List ServiceInventories for Source
* [ListSourceServiceOfferingNodes](docs/source/README.md#listsourceserviceofferingnodes) - List ServiceOfferingNodes for Source
* [ListSourceServiceOfferings](docs/source/README.md#listsourceserviceofferings) - List ServiceOfferings for Source
* [ListSourceServicePlans](docs/source/README.md#listsourceserviceplans) - List ServicePlans for Source
* [ListSourceTasks](docs/source/README.md#listsourcetasks) - List Tasks for Source
* [ListSources](docs/source/README.md#listsources) - List Sources
* [RefreshSource](docs/source/README.md#refreshsource) -  Refresh an existing Source
* [ShowSource](docs/source/README.md#showsource) - Show an existing Source

### [Tags](docs/tags/README.md)

* [ListTags](docs/tags/README.md#listtags) - List Tags

### [Task](docs/task/README.md)

* [ListTasks](docs/task/README.md#listtasks) - List Tasks
* [ShowTask](docs/task/README.md#showtask) - Show an existing Task
* [UpdateTask](docs/task/README.md#updatetask) - Update an existing Task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
