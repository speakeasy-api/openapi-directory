<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SearchRequest(
    headers=operations.SearchHeaders(
        galaxy_ap_name="voluptate",
        galaxy_ap_password="tenetur",
        galaxy_search_type="aliquid",
    ),
    request=operations.SearchRequestBody(
        address=operations.SearchRequestBodyAddress(
            address_line1="quo",
            address_line2="ut",
        ),
        age=55.099998,
        dob="laudantium",
        email="est",
        first_name="quo",
        last_name="officia",
        middle_name="rem",
        phone_number="sint",
    ),
)
    
res = s.search(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->