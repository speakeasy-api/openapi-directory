<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        user_token=shared.SchemeUserToken(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AddressSearchRequest(
    security=operations.AddressSearchSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        user_token=shared.SchemeUserToken(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.AddressSearchQueryParams(
        filter="non",
        licensee="qui",
        limit=1723494331383881702,
        page=1307599990940102016,
        postcode_outward="tempora",
        query="provident",
    ),
)
    
res = s.addresses.address_search(req)

if res.address_search_response_schema is not None:
    # handle response
```
<!-- End SDK Example Usage -->