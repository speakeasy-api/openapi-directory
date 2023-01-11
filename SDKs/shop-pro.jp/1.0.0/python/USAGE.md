<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateUsageChargeRequest(
    security=operations.CreateUsageChargeSecurity(
        o_auth2=shared.SchemeOAuth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CreateUsageChargePathParams(
        recurring_application_charge_id="aspernatur",
    ),
    headers=operations.CreateUsageChargeHeaders(
        x_appstore_usage_charge_token="sequi",
    ),
    request=operations.CreateUsageChargeRequestBody(
        usage_charge=operations.CreateUsageChargeRequestBodyUsageCharge(
            description="unde",
            point=5484340287911161180,
        ),
    ),
)
    
res = s.application_charge.create_usage_charge(req)

if res.create_usage_charge_201_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->