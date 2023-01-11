<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.LanguageDetectionsDetectRequest(
    security=operations.LanguageDetectionsDetectSecurity(
        option1=operations.LanguageDetectionsDetectSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.LanguageDetectionsDetectQueryParams(
        dollar_xgafv="1",
        access_token="reiciendis",
        alt="json",
        bearer_token="quisquam",
        callback="necessitatibus",
        fields="neque",
        key="consequuntur",
        oauth_token="ut",
        pp=False,
        pretty_print=True,
        quota_user="eum",
        upload_type="eaque",
        upload_protocol="est",
    ),
    request=shared.DetectLanguageRequest(
        q=[
            "eligendi",
            "neque",
            "dolorem",
        ],
    ),
)
    
res = s.detections.language_detections_detect(req)

if res.detections_list_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->