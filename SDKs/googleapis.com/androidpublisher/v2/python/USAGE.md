<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AndroidpublisherEditsApklistingsDeleteRequest(
    security=operations.AndroidpublisherEditsApklistingsDeleteSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AndroidpublisherEditsApklistingsDeletePathParams(
        apk_version_code=3804614449984271553,
        edit_id="itaque",
        language="eligendi",
        package_name="libero",
    ),
    query_params=operations.AndroidpublisherEditsApklistingsDeleteQueryParams(
        alt="json",
        fields="eum",
        key="quia",
        oauth_token="harum",
        pretty_print=False,
        quota_user="nihil",
        user_ip="consequatur",
    ),
)
    
res = s.edits.androidpublisher_edits_apklistings_delete(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->