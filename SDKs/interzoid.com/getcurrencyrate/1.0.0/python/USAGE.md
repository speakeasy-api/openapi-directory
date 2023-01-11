<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetcurrencyrateRequest(
    query_params=operations.GetcurrencyrateQueryParams(
        license="cupiditate",
        symbol="ut",
    ),
)
    
res = s.currency_rates.getcurrencyrate(req)

if res.getcurrencyrate_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->