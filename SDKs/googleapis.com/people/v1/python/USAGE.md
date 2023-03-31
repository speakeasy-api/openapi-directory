<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PeopleContactGroupsBatchGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    group_fields="nulla",
    key="corrupti",
    max_members=847252,
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    resource_names=[
        "suscipit",
        "iure",
        "magnam",
    ],
    upload_type="debitis",
    upload_protocol="ipsa",
)
    
res = s.contact_groups.people_contact_groups_batch_get(req, operations.PeopleContactGroupsBatchGetSecurity(
    option1=operations.PeopleContactGroupsBatchGetSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.batch_get_contact_groups_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->