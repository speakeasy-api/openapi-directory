<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateUsageChargeRequest(
    request_body=operations.CreateUsageChargeRequestBody(
        usage_charge=operations.CreateUsageChargeRequestBodyUsageCharge(
            description="2019/4 メール送信分",
            point=100,
        ),
    ),
    x_appstore_usage_charge_token="corrupti",
    recurring_application_charge_id="provident",
)
    
res = s.application_charge.create_usage_charge(req, operations.CreateUsageChargeSecurity(
    o_auth2="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.create_usage_charge_201_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->