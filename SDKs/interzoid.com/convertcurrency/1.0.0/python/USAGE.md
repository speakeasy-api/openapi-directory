<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ConvertcurrencyRequest(
    amount="corrupti",
    from_="provident",
    license="distinctio",
    to="quibusdam",
)
    
res = s.live_currency_rate_conversion.convertcurrency(req)

if res.convertcurrency_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->