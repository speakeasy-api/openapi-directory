<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudresourcemanagerFoldersCreateRequest(
    security=operations.CloudresourcemanagerFoldersCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.CloudresourcemanagerFoldersCreateQueryParams(
        dollar_xgafv="1",
        access_token="blanditiis",
        alt="json",
        callback="autem",
        fields="quis",
        key="et",
        oauth_token="mollitia",
        parent="commodi",
        pretty_print=True,
        quota_user="dicta",
        upload_type="et",
        upload_protocol="quia",
    ),
    request=shared.FolderInput(
        display_name="quia",
        parent="a",
    ),
)
    
res = s.folders.cloudresourcemanager_folders_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->