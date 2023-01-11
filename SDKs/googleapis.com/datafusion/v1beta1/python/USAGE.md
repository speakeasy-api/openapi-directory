<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DatafusionProjectsLocationsInstancesCreateRequest(
    security=operations.DatafusionProjectsLocationsInstancesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DatafusionProjectsLocationsInstancesCreatePathParams(
        parent="voluptate",
    ),
    query_params=operations.DatafusionProjectsLocationsInstancesCreateQueryParams(
        dollar_xgafv="1",
        access_token="earum",
        alt="media",
        callback="velit",
        fields="assumenda",
        instance_id="nemo",
        key="ipsam",
        oauth_token="sed",
        pretty_print=False,
        quota_user="pariatur",
        upload_type="qui",
        upload_protocol="excepturi",
    ),
    request=shared.InstanceInput(
        accelerators=[
            shared.Accelerator(
                accelerator_type="ACCELERATOR_TYPE_UNSPECIFIED",
            ),
        ],
        available_version=[
            shared.Version(
                available_features=[
                    "quasi",
                    "minus",
                    "optio",
                ],
                default_version=False,
                type="TYPE_UNSPECIFIED",
                version_number="et",
            ),
        ],
        crypto_key_config=shared.CryptoKeyConfig(
            key_reference="recusandae",
        ),
        dataproc_service_account="pariatur",
        description="pariatur",
        display_name="earum",
        enable_rbac=True,
        enable_stackdriver_logging=True,
        enable_stackdriver_monitoring=False,
        event_publish_config=shared.EventPublishConfig(
            enabled=True,
            topic="architecto",
        ),
        labels={
            "similique": "et",
            "itaque": "voluptates",
        },
        network_config=shared.NetworkConfig(
            ip_allocation="minima",
            network="placeat",
        ),
        options={
            "illo": "odio",
            "officia": "tenetur",
        },
        private_instance=False,
        type="BASIC",
        version="nostrum",
        zone="est",
    ),
)
    
res = s.projects.datafusion_projects_locations_instances_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->