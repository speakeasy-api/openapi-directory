<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AddExpiryListingsRequest(
    request=operations.AddExpiryListingsRequests(
        aftermarket_listing_expiry_creates=[
            "consequuntur",
            "harum",
        ],
        application_xml="recusandae".encode(),
        text_xml="accusamus".encode(),
    ),
)
    
res = s.v1.add_expiry_listings(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->