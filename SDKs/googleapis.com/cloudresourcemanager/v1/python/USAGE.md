<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudresourcemanagerLiensCreateRequest(
    security=operations.CloudresourcemanagerLiensCreateSecurity(
        option1=operations.CloudresourcemanagerLiensCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.CloudresourcemanagerLiensCreateQueryParams(
        dollar_xgafv="1",
        access_token="nostrum",
        alt="media",
        callback="animi",
        fields="unde",
        key="expedita",
        oauth_token="recusandae",
        pretty_print=True,
        quota_user="possimus",
        upload_type="et",
        upload_protocol="ea",
    ),
    request=shared.Lien(
        create_time="ut",
        name="magnam",
        origin="ea",
        parent="nostrum",
        reason="incidunt",
        restrictions=[
            "unde",
        ],
    ),
)
    
res = s.liens.cloudresourcemanager_liens_create(req)

if res.lien is not None:
    # handle response
```
<!-- End SDK Example Usage -->