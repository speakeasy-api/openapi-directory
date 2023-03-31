<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudprofilerProjectsProfilesCreateRequest(
    dollar_xgafv="2",
    create_profile_request=shared.CreateProfileRequest(
        deployment=shared.Deployment(
            labels={
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            project_id="vel",
            target="error",
        ),
        profile_type=[
            "HEAP",
            "HEAP",
            "WALL",
        ],
    ),
    access_token="debitis",
    alt="json",
    callback="delectus",
    fields_="tempora",
    key="suscipit",
    oauth_token="molestiae",
    parent="minus",
    pretty_print=False,
    quota_user="placeat",
    upload_type="voluptatum",
    upload_protocol="iusto",
)
    
res = s.projects.cloudprofiler_projects_profiles_create(req, operations.CloudprofilerProjectsProfilesCreateSecurity(
    option1=operations.CloudprofilerProjectsProfilesCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.profile is not None:
    # handle response
```
<!-- End SDK Example Usage -->