<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    language_code="corrupti",
    name="illum",
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.organizations.advisorynotifications_organizations_locations_notifications_get(req, operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_advisorynotifications_v1_notification is not None:
    # handle response
```
<!-- End SDK Example Usage -->