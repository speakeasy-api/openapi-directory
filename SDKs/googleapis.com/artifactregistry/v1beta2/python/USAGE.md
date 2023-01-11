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
        name="et",
    ),
    query_params=operations.ArtifactregistryProjectsLocationsListQueryParams(
        dollar_xgafv="2",
        access_token="et",
        alt="media",
        callback="distinctio",
        fields="ex",
        filter="aut",
        key="repellendus",
        oauth_token="harum",
        page_size=2942782801006966002,
        page_token="molestiae",
        pretty_print=False,
        quota_user="odit",
        upload_type="voluptatibus",
        upload_protocol="non",
    ),
)
    
res = s.projects.artifactregistry_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->