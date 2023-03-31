<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
)


req = operations.DeleteCustomersAccountAnnouncementsAnnouncementIDRequest(
    account=548814,
    announcement_id="provident",
)
    
res = s.announcements.delete_customers_account_announcements_announcement_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->