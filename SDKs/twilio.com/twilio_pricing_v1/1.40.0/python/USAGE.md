<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FetchMessagingCountryRequest(
    iso_country="corrupti",
)
    
res = s.fetch_messaging_country(req, operations.FetchMessagingCountrySecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.pricing_v1_messaging_messaging_country_instance is not None:
    # handle response
```
<!-- End SDK Example Usage -->