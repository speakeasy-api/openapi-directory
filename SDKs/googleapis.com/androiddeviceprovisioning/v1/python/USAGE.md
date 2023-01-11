<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest(
    path_params=operations.AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams(
        parent="aut",
    ),
    query_params=operations.AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams(
        dollar_xgafv="2",
        access_token="consequatur",
        alt="proto",
        callback="asperiores",
        fields="placeat",
        key="iure",
        oauth_token="aut",
        pretty_print=False,
        quota_user="voluptatem",
        upload_type="quia",
        upload_protocol="ut",
    ),
    request=shared.ConfigurationInput(
        company_name="quisquam",
        configuration_name="sit",
        contact_email="ratione",
        contact_phone="aperiam",
        custom_message="tenetur",
        dpc_extras="quia",
        dpc_resource_path="ut",
        is_default=False,
    ),
)
    
res = s.customers.androiddeviceprovisioning_customers_configurations_create(req)

if res.configuration is not None:
    # handle response
```
<!-- End SDK Example Usage -->