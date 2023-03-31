<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AndroidpublisherEditsApklistingsDeleteRequest(
    alt="json",
    apk_version_code=548814,
    edit_id="provident",
    fields_="distinctio",
    key="quibusdam",
    language="unde",
    oauth_token="nulla",
    package_name="corrupti",
    pretty_print=False,
    quota_user="illum",
    user_ip="vel",
)
    
res = s.edits.androidpublisher_edits_apklistings_delete(req, operations.AndroidpublisherEditsApklistingsDeleteSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->