<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudresourcemanagerLiensCreateRequest(
    dollar_xgafv="2",
    lien=shared.Lien(
        create_time="provident",
        name="distinctio",
        origin="quibusdam",
        parent="unde",
        reason="nulla",
        restrictions=[
            "illum",
            "vel",
            "error",
        ],
    ),
    access_token="deserunt",
    alt="media",
    callback="iure",
    fields_="magnam",
    key="debitis",
    oauth_token="ipsa",
    pretty_print=False,
    quota_user="delectus",
    upload_type="tempora",
    upload_protocol="suscipit",
)
    
res = s.liens.cloudresourcemanager_liens_create(req, operations.CloudresourcemanagerLiensCreateSecurity(
    option1=operations.CloudresourcemanagerLiensCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.lien is not None:
    # handle response
```
<!-- End SDK Example Usage -->