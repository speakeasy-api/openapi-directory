<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteQuoteRequest(
    id="corrupti",
)
    
res = s.private_quotes.delete_quote(req, operations.DeleteQuoteSecurity(
    x_they_said_so_api_secret="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->