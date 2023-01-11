<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
req = operations.DeleteCustomersAccountAnnouncementsAnnouncementIDRequest(
    path_params=operations.DeleteCustomersAccountAnnouncementsAnnouncementIDPathParams(
        account=5609172597249597820,
        announcement_id="id",
    ),
)
    
res = s.announcements.delete_customers_account_announcements_announcement_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->