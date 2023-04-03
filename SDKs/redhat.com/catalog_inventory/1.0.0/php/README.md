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

### SDK SDK

* `getDocumentation` - Return this API document in JSON format
* `postGraphQL` - Perform a GraphQL Query

### serviceCredential

* `listServiceCredentials` - List ServiceCredentials
* `showServiceCredential` - Show an existing ServiceCredential

### serviceCredentialType

* `listServiceCredentialTypes` - List ServiceCredentialTypes
* `showServiceCredentialType` - Show an existing ServiceCredentialType

### serviceInstance

* `listServiceInstances` - List ServiceInstances
* `showServiceInstance` - Show an existing ServiceInstance

### serviceInventory

* `listServiceInventories` - List ServiceInventories
* `listServiceInventoryTags` - List Tags for ServiceInventory
* `showServiceInventory` - Show an existing ServiceInventory
* `tagServiceInventory` - Tag a ServiceInventory
* `untagServiceInventory` - Untag a ServiceInventory

### serviceOffering

* `appliedInventoriesTagsForServiceOffering` - Invokes computing of ServiceInventories tags for given ServiceOffering
* `listServiceOfferingServiceInstances` - List ServiceInstances for ServiceOffering
* `listServiceOfferingServiceOfferingNodes` - List ServiceOfferingNodes for ServiceOffering
* `listServiceOfferingServicePlans` - List ServicePlans for ServiceOffering
* `listServiceOfferings` - List ServiceOfferings
* `orderServiceOffering` - Order an existing ServiceOffering
* `showServiceOffering` - Show an existing ServiceOffering

### serviceOfferingNode

* `listServiceOfferingNodes` - List ServiceOfferingNodes
* `showServiceOfferingNode` - Show an existing ServiceOfferingNode

### servicePlan

* `listServicePlans` - List ServicePlans
* `showServicePlan` - Show an existing ServicePlan

### source

* `incrementalRefreshSource` - Incremental Refresh an existing Source
* `listSourceServiceInstances` - List ServiceInstances for Source
* `listSourceServiceInventories` - List ServiceInventories for Source
* `listSourceServiceOfferingNodes` - List ServiceOfferingNodes for Source
* `listSourceServiceOfferings` - List ServiceOfferings for Source
* `listSourceServicePlans` - List ServicePlans for Source
* `listSourceTasks` - List Tasks for Source
* `listSources` - List Sources
* `refreshSource` -  Refresh an existing Source
* `showSource` - Show an existing Source

### tags

* `listTags` - List Tags

### task

* `listTasks` - List Tasks
* `showTask` - Show an existing Task
* `updateTask` - Update an existing Task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
