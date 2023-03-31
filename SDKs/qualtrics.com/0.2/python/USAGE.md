<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateContactInMailinglistRequest(
    create_contact_in_mailing_list=shared.CreateContactInMailingList(
        email="Larue_Rau85@yahoo.com",
        first_name="Karley",
        last_name="Stamm",
        unsubscribed=False,
    ),
    directory_id="vel",
    mailing_list_id="error",
)
    
res = s.create_contact_in_mailinglist(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->