<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteQuoteRequest(
    security=operations.DeleteQuoteSecurity(
        x_they_said_so_api_secret=shared.SchemeXTheySaidSoAPISecret(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.DeleteQuoteQueryParams(
        id="ullam",
    ),
)
    
res = s.private_quotes.delete_quote(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->