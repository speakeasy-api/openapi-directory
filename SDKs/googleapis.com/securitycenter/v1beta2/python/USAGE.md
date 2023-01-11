<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest(
    security=operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams(
        name="sed",
    ),
    query_params=operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams(
        dollar_xgafv="1",
        access_token="sed",
        alt="media",
        callback="ut",
        fields="voluptatem",
        key="voluptas",
        oauth_token="non",
        pretty_print=False,
        quota_user="quia",
        upload_type="unde",
        upload_protocol="maiores",
    ),
)
    
res = s.projects.securitycenter_projects_locations_clusters_get_container_threat_detection_settings(req)

if res.container_threat_detection_settings is not None:
    # handle response
```
<!-- End SDK Example Usage -->