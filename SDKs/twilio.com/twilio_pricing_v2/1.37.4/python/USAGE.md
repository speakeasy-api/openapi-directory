<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FetchTrunkingCountryRequest(
    security=operations.FetchTrunkingCountrySecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.FetchTrunkingCountryPathParams(
        iso_country="ut",
    ),
)
    
res = s.fetch_trunking_country(req)

if res.pricing_v2_trunking_country_instance is not None:
    # handle response
```
<!-- End SDK Example Usage -->