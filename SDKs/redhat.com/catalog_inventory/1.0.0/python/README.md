# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/redhat.com/catalog_inventory/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
)

    
res = s.get_documentation()

if res.get_documentation_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `get_documentation` - Return this API document in JSON format
* `post_graph_ql` - Perform a GraphQL Query

### service_credential

* `list_service_credentials` - List ServiceCredentials
* `show_service_credential` - Show an existing ServiceCredential

### service_credential_type

* `list_service_credential_types` - List ServiceCredentialTypes
* `show_service_credential_type` - Show an existing ServiceCredentialType

### service_instance

* `list_service_instances` - List ServiceInstances
* `show_service_instance` - Show an existing ServiceInstance

### service_inventory

* `list_service_inventories` - List ServiceInventories
* `list_service_inventory_tags` - List Tags for ServiceInventory
* `show_service_inventory` - Show an existing ServiceInventory
* `tag_service_inventory` - Tag a ServiceInventory
* `untag_service_inventory` - Untag a ServiceInventory

### service_offering

* `applied_inventories_tags_for_service_offering` - Invokes computing of ServiceInventories tags for given ServiceOffering
* `list_service_offering_service_instances` - List ServiceInstances for ServiceOffering
* `list_service_offering_service_offering_nodes` - List ServiceOfferingNodes for ServiceOffering
* `list_service_offering_service_plans` - List ServicePlans for ServiceOffering
* `list_service_offerings` - List ServiceOfferings
* `order_service_offering` - Order an existing ServiceOffering
* `show_service_offering` - Show an existing ServiceOffering

### service_offering_node

* `list_service_offering_nodes` - List ServiceOfferingNodes
* `show_service_offering_node` - Show an existing ServiceOfferingNode

### service_plan

* `list_service_plans` - List ServicePlans
* `show_service_plan` - Show an existing ServicePlan

### source

* `incremental_refresh_source` - Incremental Refresh an existing Source
* `list_source_service_instances` - List ServiceInstances for Source
* `list_source_service_inventories` - List ServiceInventories for Source
* `list_source_service_offering_nodes` - List ServiceOfferingNodes for Source
* `list_source_service_offerings` - List ServiceOfferings for Source
* `list_source_service_plans` - List ServicePlans for Source
* `list_source_tasks` - List Tasks for Source
* `list_sources` - List Sources
* `refresh_source` -  Refresh an existing Source
* `show_source` - Show an existing Source

### tags

* `list_tags` - List Tags

### task

* `list_tasks` - List Tasks
* `show_task` - Show an existing Task
* `update_task` - Update an existing Task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
