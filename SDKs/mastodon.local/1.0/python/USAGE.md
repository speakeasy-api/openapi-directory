<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteAPIV1AnnouncementsIDReactionsNameRequest(
    id="corrupti",
    name="provident",
)
    
res = s.delete_api_v1_announcements_id_reactions_name_(req, operations.DeleteAPIV1AnnouncementsIDReactionsNameSecurity(
    bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.delete_api_v1_announcements_id_reactions_name_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->