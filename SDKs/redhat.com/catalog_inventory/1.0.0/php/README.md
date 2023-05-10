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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->getDocumentation();

    if ($response->getDocumentation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [getDocumentation](docs/sdk/README.md#getdocumentation) - Return this API document in JSON format
* [postGraphQL](docs/sdk/README.md#postgraphql) - Perform a GraphQL Query

### [serviceCredential](docs/servicecredential/README.md)

* [listServiceCredentials](docs/servicecredential/README.md#listservicecredentials) - List ServiceCredentials
* [showServiceCredential](docs/servicecredential/README.md#showservicecredential) - Show an existing ServiceCredential

### [serviceCredentialType](docs/servicecredentialtype/README.md)

* [listServiceCredentialTypes](docs/servicecredentialtype/README.md#listservicecredentialtypes) - List ServiceCredentialTypes
* [showServiceCredentialType](docs/servicecredentialtype/README.md#showservicecredentialtype) - Show an existing ServiceCredentialType

### [serviceInstance](docs/serviceinstance/README.md)

* [listServiceInstances](docs/serviceinstance/README.md#listserviceinstances) - List ServiceInstances
* [showServiceInstance](docs/serviceinstance/README.md#showserviceinstance) - Show an existing ServiceInstance

### [serviceInventory](docs/serviceinventory/README.md)

* [listServiceInventories](docs/serviceinventory/README.md#listserviceinventories) - List ServiceInventories
* [listServiceInventoryTags](docs/serviceinventory/README.md#listserviceinventorytags) - List Tags for ServiceInventory
* [showServiceInventory](docs/serviceinventory/README.md#showserviceinventory) - Show an existing ServiceInventory
* [tagServiceInventory](docs/serviceinventory/README.md#tagserviceinventory) - Tag a ServiceInventory
* [untagServiceInventory](docs/serviceinventory/README.md#untagserviceinventory) - Untag a ServiceInventory

### [serviceOffering](docs/serviceoffering/README.md)

* [appliedInventoriesTagsForServiceOffering](docs/serviceoffering/README.md#appliedinventoriestagsforserviceoffering) - Invokes computing of ServiceInventories tags for given ServiceOffering
* [listServiceOfferingServiceInstances](docs/serviceoffering/README.md#listserviceofferingserviceinstances) - List ServiceInstances for ServiceOffering
* [listServiceOfferingServiceOfferingNodes](docs/serviceoffering/README.md#listserviceofferingserviceofferingnodes) - List ServiceOfferingNodes for ServiceOffering
* [listServiceOfferingServicePlans](docs/serviceoffering/README.md#listserviceofferingserviceplans) - List ServicePlans for ServiceOffering
* [listServiceOfferings](docs/serviceoffering/README.md#listserviceofferings) - List ServiceOfferings
* [orderServiceOffering](docs/serviceoffering/README.md#orderserviceoffering) - Order an existing ServiceOffering
* [showServiceOffering](docs/serviceoffering/README.md#showserviceoffering) - Show an existing ServiceOffering

### [serviceOfferingNode](docs/serviceofferingnode/README.md)

* [listServiceOfferingNodes](docs/serviceofferingnode/README.md#listserviceofferingnodes) - List ServiceOfferingNodes
* [showServiceOfferingNode](docs/serviceofferingnode/README.md#showserviceofferingnode) - Show an existing ServiceOfferingNode

### [servicePlan](docs/serviceplan/README.md)

* [listServicePlans](docs/serviceplan/README.md#listserviceplans) - List ServicePlans
* [showServicePlan](docs/serviceplan/README.md#showserviceplan) - Show an existing ServicePlan

### [source](docs/source/README.md)

* [incrementalRefreshSource](docs/source/README.md#incrementalrefreshsource) - Incremental Refresh an existing Source
* [listSourceServiceInstances](docs/source/README.md#listsourceserviceinstances) - List ServiceInstances for Source
* [listSourceServiceInventories](docs/source/README.md#listsourceserviceinventories) - List ServiceInventories for Source
* [listSourceServiceOfferingNodes](docs/source/README.md#listsourceserviceofferingnodes) - List ServiceOfferingNodes for Source
* [listSourceServiceOfferings](docs/source/README.md#listsourceserviceofferings) - List ServiceOfferings for Source
* [listSourceServicePlans](docs/source/README.md#listsourceserviceplans) - List ServicePlans for Source
* [listSourceTasks](docs/source/README.md#listsourcetasks) - List Tasks for Source
* [listSources](docs/source/README.md#listsources) - List Sources
* [refreshSource](docs/source/README.md#refreshsource) -  Refresh an existing Source
* [showSource](docs/source/README.md#showsource) - Show an existing Source

### [tags](docs/tags/README.md)

* [listTags](docs/tags/README.md#listtags) - List Tags

### [task](docs/task/README.md)

* [listTasks](docs/task/README.md#listtasks) - List Tasks
* [showTask](docs/task/README.md#showtask) - Show an existing Task
* [updateTask](docs/task/README.md#updatetask) - Update an existing Task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
