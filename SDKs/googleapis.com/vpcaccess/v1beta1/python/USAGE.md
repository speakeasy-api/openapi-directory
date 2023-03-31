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