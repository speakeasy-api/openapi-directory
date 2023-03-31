<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.NotebooksProjectsLocationsEnvironmentsCreateRequest(
    dollar_xgafv="2",
    environment_input=shared.EnvironmentInput(
        container_image=shared.ContainerImage(
            repository="provident",
            tag="distinctio",
        ),
        description="quibusdam",
        display_name="unde",
        post_startup_script="nulla",
        vm_image=shared.VMImage(
            image_family="corrupti",
            image_name="illum",
            project="vel",
        ),
    ),
    access_token="error",
    alt="media",
    callback="suscipit",
    environment_id="iure",
    fields_="magnam",
    key="debitis",
    oauth_token="ipsa",
    parent="delectus",
    pretty_print=False,
    quota_user="tempora",
    upload_type="suscipit",
    upload_protocol="molestiae",
)
    
res = s.projects.notebooks_projects_locations_environments_create(req, operations.NotebooksProjectsLocationsEnvironmentsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->