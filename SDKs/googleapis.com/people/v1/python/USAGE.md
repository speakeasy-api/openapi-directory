<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PeopleContactGroupsBatchGetRequest(
    security=operations.PeopleContactGroupsBatchGetSecurity(
        option1=operations.PeopleContactGroupsBatchGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.PeopleContactGroupsBatchGetQueryParams(
        dollar_xgafv="2",
        access_token="deserunt",
        alt="media",
        callback="voluptas",
        fields="adipisci",
        group_fields="sit",
        key="et",
        max_members=3864639738060764919,
        oauth_token="voluptas",
        pretty_print=True,
        quota_user="eum",
        resource_names=[
            "sed",
        ],
        upload_type="hic",
        upload_protocol="laborum",
    ),
)
    
res = s.contact_groups.people_contact_groups_batch_get(req)

if res.batch_get_contact_groups_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->