<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.EssentialcontactsProjectsContactsComputeRequest(
    security=operations.EssentialcontactsProjectsContactsComputeSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.EssentialcontactsProjectsContactsComputePathParams(
        parent="sint",
    ),
    query_params=operations.EssentialcontactsProjectsContactsComputeQueryParams(
        dollar_xgafv="1",
        access_token="eos",
        alt="json",
        callback="ex",
        fields="dolor",
        key="odio",
        notification_categories=[
            "ALL",
            "PRODUCT_UPDATES",
        ],
        oauth_token="deserunt",
        page_size=6503842544790942575,
        page_token="aut",
        pretty_print=False,
        quota_user="qui",
        upload_type="odio",
        upload_protocol="inventore",
    ),
)
    
res = s.projects.essentialcontacts_projects_contacts_compute(req)

if res.google_cloud_essentialcontacts_v1_compute_contacts_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->