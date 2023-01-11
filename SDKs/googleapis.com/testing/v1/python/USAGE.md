<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.TestingApplicationDetailServiceGetApkDetailsRequest(
    security=operations.TestingApplicationDetailServiceGetApkDetailsSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.TestingApplicationDetailServiceGetApkDetailsQueryParams(
        dollar_xgafv="1",
        access_token="et",
        alt="media",
        callback="sint",
        fields="sed",
        key="modi",
        oauth_token="ut",
        pretty_print=True,
        quota_user="error",
        upload_type="eos",
        upload_protocol="modi",
    ),
    request=shared.FileReference(
        gcs_path="neque",
    ),
)
    
res = s.application_detail_service.testing_application_detail_service_get_apk_details(req)

if res.get_apk_details_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->