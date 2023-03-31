<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    name="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.projects.securitycenter_projects_locations_clusters_get_container_threat_detection_settings(req, operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.container_threat_detection_settings is not None:
    # handle response
```
<!-- End SDK Example Usage -->