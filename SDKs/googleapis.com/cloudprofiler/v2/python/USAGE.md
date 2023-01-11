<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudprofilerProjectsProfilesCreateRequest(
    security=operations.CloudprofilerProjectsProfilesCreateSecurity(
        option1=operations.CloudprofilerProjectsProfilesCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.CloudprofilerProjectsProfilesCreatePathParams(
        parent="quis",
    ),
    query_params=operations.CloudprofilerProjectsProfilesCreateQueryParams(
        dollar_xgafv="1",
        access_token="sapiente",
        alt="media",
        callback="omnis",
        fields="placeat",
        key="expedita",
        oauth_token="quis",
        pretty_print=False,
        quota_user="rem",
        upload_type="enim",
        upload_protocol="tempora",
    ),
    request=shared.CreateProfileRequest(
        deployment=shared.Deployment(
            labels={
                "ab": "alias",
            },
            project_id="libero",
            target="voluptatum",
        ),
        profile_type=[
            "CPU",
            "CONTENTION",
        ],
    ),
)
    
res = s.projects.cloudprofiler_projects_profiles_create(req)

if res.profile is not None:
    # handle response
```
<!-- End SDK Example Usage -->