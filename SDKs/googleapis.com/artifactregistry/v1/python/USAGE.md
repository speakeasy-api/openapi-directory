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
        dollar_xgafv="1",
        access_token="dolorum",
        alt="json",
        callback="distinctio",
        fields="quaerat",
        filter="sit",
        key="eum",
        oauth_token="consequuntur",
        page_size=6576755010906771304,
        page_token="perspiciatis",
        pretty_print=False,
        quota_user="delectus",
        upload_type="sapiente",
        upload_protocol="quae",
    ),
)
    
res = s.projects.artifactregistry_projects_locations_list(req)

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->