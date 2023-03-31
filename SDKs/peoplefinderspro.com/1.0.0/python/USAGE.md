<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SearchRequest(
    request_body=operations.SearchRequestBody(
        address=operations.SearchRequestBodyAddress(
            address_line1="corrupti",
            address_line2="provident",
        ),
        age=7151.9,
        dob="quibusdam",
        email="Ryan.Little62@yahoo.com",
        first_name="Luna",
        last_name="Hoppe",
        middle_name="iure",
        phone_number="magnam",
    ),
    galaxy_ap_name="debitis",
    galaxy_ap_password="ipsa",
    galaxy_search_type="delectus",
)
    
res = s.search(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->