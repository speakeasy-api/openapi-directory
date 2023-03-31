<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest(
    dollar_xgafv="2",
    configuration_input=shared.ConfigurationInput(
        company_name="provident",
        configuration_name="distinctio",
        contact_email="quibusdam",
        contact_phone="unde",
        custom_message="nulla",
        dpc_extras="corrupti",
        dpc_resource_path="illum",
        is_default=False,
    ),
    access_token="vel",
    alt="media",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    oauth_token="magnam",
    parent="debitis",
    pretty_print=False,
    quota_user="ipsa",
    upload_type="delectus",
    upload_protocol="tempora",
)
    
res = s.customers.androiddeviceprovisioning_customers_configurations_create(req)

if res.configuration is not None:
    # handle response
```
<!-- End SDK Example Usage -->