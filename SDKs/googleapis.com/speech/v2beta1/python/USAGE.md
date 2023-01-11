<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SpeechProjectsLocationsOperationsGetRequest(
    security=operations.SpeechProjectsLocationsOperationsGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.SpeechProjectsLocationsOperationsGetPathParams(
        name="harum",
    ),
    query_params=operations.SpeechProjectsLocationsOperationsGetQueryParams(
        dollar_xgafv="2",
        access_token="quia",
        alt="json",
        callback="cupiditate",
        fields="voluptas",
        key="reprehenderit",
        oauth_token="molestias",
        pretty_print=True,
        quota_user="maxime",
        upload_type="necessitatibus",
        upload_protocol="quidem",
    ),
)
    
res = s.projects.speech_projects_locations_operations_get(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->