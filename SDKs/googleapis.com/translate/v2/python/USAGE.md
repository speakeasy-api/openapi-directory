<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.LanguageDetectionsDetectRequest(
    dollar_xgafv="2",
    detect_language_request=shared.DetectLanguageRequest(
        q=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
    ),
    access_token="nulla",
    alt="media",
    bearer_token="illum",
    callback="vel",
    fields_="error",
    key="deserunt",
    oauth_token="suscipit",
    pp=False,
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.detections.language_detections_detect(req, operations.LanguageDetectionsDetectSecurity(
    option1=operations.LanguageDetectionsDetectSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.detections_list_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->