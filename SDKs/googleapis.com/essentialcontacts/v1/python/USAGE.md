<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.EssentialcontactsProjectsContactsComputeRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    notification_categories=[
        "PRODUCT_UPDATES",
        "SECURITY",
        "BILLING",
    ],
    oauth_token="deserunt",
    page_size=384382,
    page_token="iure",
    parent="magnam",
    pretty_print=False,
    quota_user="debitis",
    upload_type="ipsa",
    upload_protocol="delectus",
)
    
res = s.projects.essentialcontacts_projects_contacts_compute(req, operations.EssentialcontactsProjectsContactsComputeSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_essentialcontacts_v1_compute_contacts_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->