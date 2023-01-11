<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FcmdataProjectsAndroidAppsDeliveryDataListRequest(
    security=operations.FcmdataProjectsAndroidAppsDeliveryDataListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.FcmdataProjectsAndroidAppsDeliveryDataListPathParams(
        parent="et",
    ),
    query_params=operations.FcmdataProjectsAndroidAppsDeliveryDataListQueryParams(
        dollar_xgafv="2",
        access_token="voluptatem",
        alt="media",
        callback="voluptatem",
        fields="iusto",
        key="totam",
        oauth_token="ea",
        page_size=2572624293435492387,
        page_token="dicta",
        pretty_print=True,
        quota_user="omnis",
        upload_type="omnis",
        upload_protocol="qui",
    ),
)
    
res = s.projects.fcmdata_projects_android_apps_delivery_data_list(req)

if res.google_firebase_fcm_data_v1beta1_list_android_delivery_data_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->