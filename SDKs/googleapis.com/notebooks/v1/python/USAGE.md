<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.NotebooksProjectsLocationsEnvironmentsCreateRequest(
    security=operations.NotebooksProjectsLocationsEnvironmentsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.NotebooksProjectsLocationsEnvironmentsCreatePathParams(
        parent="corrupti",
    ),
    query_params=operations.NotebooksProjectsLocationsEnvironmentsCreateQueryParams(
        dollar_xgafv="1",
        access_token="sit",
        alt="json",
        callback="possimus",
        environment_id="illo",
        fields="perferendis",
        key="vitae",
        oauth_token="aperiam",
        pretty_print=False,
        quota_user="sit",
        upload_type="et",
        upload_protocol="dolorum",
    ),
    request=shared.EnvironmentInput(
        container_image=shared.ContainerImage(
            repository="et",
            tag="velit",
        ),
        description="cupiditate",
        display_name="ex",
        post_startup_script="sequi",
        vm_image=shared.VMImage(
            image_family="laborum",
            image_name="reprehenderit",
            project="modi",
        ),
    ),
)
    
res = s.projects.notebooks_projects_locations_environments_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->