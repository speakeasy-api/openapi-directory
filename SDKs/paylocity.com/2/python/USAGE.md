<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AddOrUpdateAdditionalRatesRequest(
    security=operations.AddOrUpdateAdditionalRatesSecurity(
        paylocity_auth=shared.SchemePaylocityAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AddOrUpdateAdditionalRatesPathParams(
        company_id="deleniti",
        employee_id="ab",
    ),
    request=shared.AdditionalRate(
        change_reason="alias",
        cost_center1="voluptatem",
        cost_center2="et",
        cost_center3="hic",
        effective_date="inventore",
        end_check_date="illum",
        job="mollitia",
        rate=60.099998,
        rate_code="aliquid",
        rate_notes="nobis",
        rate_per="quibusdam",
        shift="et",
    ),
)
    
res = s.additional_rates.add_or_update_additional_rates(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->