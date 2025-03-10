# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/vpcaccess/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.VpcaccessProjectsLocationsConnectorsCreateRequest(
    dollar_xgafv="2",
    connector_input=shared.ConnectorInput(
        ip_cidr_range="provident",
        machine_type="distinctio",
        max_instances=844266,
        max_throughput=602763,
        min_instances=857946,
        min_throughput=544883,
        name="illum",
        network="vel",
        subnet=shared.Subnet(
            name="error",
            project_id="deserunt",
        ),
    ),
    access_token="suscipit",
    alt="media",
    callback="magnam",
    connector_id="debitis",
    fields_="ipsa",
    key="delectus",
    oauth_token="tempora",
    parent="suscipit",
    pretty_print=False,
    quota_user="molestiae",
    upload_type="minus",
    upload_protocol="placeat",
)
    
res = s.projects.vpcaccess_projects_locations_connectors_create(req, operations.VpcaccessProjectsLocationsConnectorsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `vpcaccess_projects_locations_connectors_create` - Creates a Serverless VPC Access connector, returns an operation.
* `vpcaccess_projects_locations_connectors_delete` - Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.
* `vpcaccess_projects_locations_connectors_list` - Lists Serverless VPC Access connectors.
* `vpcaccess_projects_locations_connectors_patch` - Updates a Serverless VPC Access connector, returns an operation.
* `vpcaccess_projects_locations_list` - Lists information about the supported locations for this service.
* `vpcaccess_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `vpcaccess_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
