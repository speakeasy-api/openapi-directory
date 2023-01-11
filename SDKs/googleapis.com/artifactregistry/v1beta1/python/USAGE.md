<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ArtifactregistryProjectsLocationsListRequest(
    security=operations.ArtifactregistryProjectsLocationsListSecurity(
        option1=operations.ArtifactregistryProjectsLocationsListSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.ArtifactregistryProjectsLocationsListPathParams(
        name="vero",
    ),
    query_params=operations.ArtifactregistryProjectsLocationsListQueryParams(
        dollar_xgafv="2",
        access_token="facere",
        alt="media",
        callback="nobis",
        fields="nulla",
        filter="nesciunt",
        key="quia",
        oauth_token="dolores",
        page_size=6183831079308954261,
        page_token="sit",
        pretty_print=True,
        quota_user="quia",
        upload_type="delectus",
        upload_protocol="suscipit",
    ),
)
    
res = s.projects.artifactregistry_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->