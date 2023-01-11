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
        parent="qui",
    ),
    query_params=operations.DatafusionProjectsLocationsInstancesCreateQueryParams(
        dollar_xgafv="2",
        access_token="minima",
        alt="media",
        callback="cum",
        fields="unde",
        instance_id="iure",
        key="voluptatem",
        oauth_token="quae",
        pretty_print=False,
        quota_user="consectetur",
        upload_type="delectus",
        upload_protocol="doloribus",
    ),
    request=shared.InstanceInput(
        accelerators=[
            shared.Accelerator(
                accelerator_type="ACCELERATOR_TYPE_UNSPECIFIED",
                state="DISABLED",
            ),
            shared.Accelerator(
                accelerator_type="ACCELERATOR_TYPE_UNSPECIFIED",
                state="STATE_UNSPECIFIED",
            ),
            shared.Accelerator(
                accelerator_type="CDC",
                state="DISABLED",
            ),
        ],
        available_version=[
            shared.Version(
                available_features=[
                    "porro",
                ],
                default_version=True,
                type="TYPE_GENERAL_AVAILABILITY",
                version_number="aut",
            ),
            shared.Version(
                available_features=[
                    "distinctio",
                    "sint",
                ],
                default_version=True,
                type="TYPE_GENERAL_AVAILABILITY",
                version_number="atque",
            ),
            shared.Version(
                available_features=[
                    "rerum",
                    "voluptatibus",
                ],
                default_version=True,
                type="TYPE_UNSPECIFIED",
                version_number="eum",
            ),
        ],
        crypto_key_config=shared.CryptoKeyConfig(
            key_reference="sit",
        ),
        dataproc_service_account="aut",
        description="nisi",
        display_name="velit",
        enable_rbac=False,
        enable_stackdriver_logging=False,
        enable_stackdriver_monitoring=True,
        event_publish_config=shared.EventPublishConfig(
            enabled=False,
            topic="repellat",
        ),
        labels={
            "consequatur": "eveniet",
            "sint": "iusto",
        },
        network_config=shared.NetworkConfig(
            ip_allocation="deleniti",
            network="aperiam",
        ),
        options={
            "eius": "debitis",
            "sit": "impedit",
        },
        private_instance=False,
        type="TYPE_UNSPECIFIED",
        version="magni",
        zone="quibusdam",
    ),
)
    
res = s.projects.datafusion_projects_locations_instances_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->