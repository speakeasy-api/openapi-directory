<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AddOrUpdateAdditionalRatesRequest(
    additional_rate=shared.AdditionalRate(
        change_reason="corrupti",
        cost_center1="provident",
        cost_center2="distinctio",
        cost_center3="quibusdam",
        effective_date="unde",
        end_check_date="nulla",
        job="corrupti",
        rate=8472.52,
        rate_code="vel",
        rate_notes="error",
        rate_per="deserunt",
        shift="suscipit",
    ),
    company_id="iure",
    employee_id="magnam",
)
    
res = s.additional_rates.add_or_update_additional_rates(req, operations.AddOrUpdateAdditionalRatesSecurity(
    paylocity_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->