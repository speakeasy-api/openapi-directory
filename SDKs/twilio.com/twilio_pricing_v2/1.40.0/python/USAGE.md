<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FetchTrunkingCountryRequest(
    iso_country="corrupti",
)
    
res = s.fetch_trunking_country(req, operations.FetchTrunkingCountrySecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.pricing_v2_trunking_country_instance is not None:
    # handle response
```
<!-- End SDK Example Usage -->