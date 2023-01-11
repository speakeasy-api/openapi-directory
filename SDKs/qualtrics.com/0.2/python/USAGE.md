<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateContactInMailinglistRequest(
    path_params=operations.CreateContactInMailinglistPathParams(
        directory_id="aut",
        mailing_list_id="explicabo",
    ),
    request=shared.CreateContactInMailingList(
        email="error",
        first_name="consectetur",
        last_name="quis",
        unsubscribed=False,
    ),
)
    
res = s.create_contact_in_mailinglist(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->