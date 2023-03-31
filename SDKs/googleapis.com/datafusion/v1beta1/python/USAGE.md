<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatafusionProjectsLocationsInstancesCreateRequest(
    dollar_xgafv="2",
    instance_input=shared.InstanceInput(
        crypto_key_config=shared.CryptoKeyConfig(
            key_reference="provident",
        ),
        dataproc_service_account="distinctio",
        description="quibusdam",
        display_name="unde",
        enable_rbac=False,
        enable_stackdriver_logging=False,
        enable_stackdriver_monitoring=False,
        enable_zone_separation=False,
        event_publish_config=shared.EventPublishConfig(
            enabled=False,
            topic="nulla",
        ),
        labels={
            "illum": "vel",
            "error": "deserunt",
            "suscipit": "iure",
        },
        network_config=shared.NetworkConfig(
            ip_allocation="magnam",
            network="debitis",
        ),
        options={
            "delectus": "tempora",
        },
        private_instance=False,
        type="BASIC",
        version="molestiae",
        zone="minus",
    ),
    access_token="placeat",
    alt="media",
    callback="iusto",
    fields_="excepturi",
    instance_id="nisi",
    key="recusandae",
    oauth_token="temporibus",
    parent="ab",
    pretty_print=False,
    quota_user="quis",
    upload_type="veritatis",
    upload_protocol="deserunt",
)
    
res = s.projects.datafusion_projects_locations_instances_create(req, operations.DatafusionProjectsLocationsInstancesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->