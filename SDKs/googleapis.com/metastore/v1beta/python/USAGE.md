<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MetastoreProjectsLocationsFederationsCreateRequest(
    security=operations.MetastoreProjectsLocationsFederationsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.MetastoreProjectsLocationsFederationsCreatePathParams(
        parent="quia",
    ),
    query_params=operations.MetastoreProjectsLocationsFederationsCreateQueryParams(
        dollar_xgafv="1",
        access_token="perspiciatis",
        alt="media",
        callback="laudantium",
        federation_id="eum",
        fields="esse",
        key="ex",
        oauth_token="magnam",
        pretty_print=False,
        quota_user="fugiat",
        request_id="vitae",
        upload_type="suscipit",
        upload_protocol="in",
    ),
    request=shared.FederationInput(
        backend_metastores={
            "praesentium": shared.BackendMetastore(
                metastore_type="DATAPROC_METASTORE",
                name="doloremque",
            ),
            "accusamus": shared.BackendMetastore(
                metastore_type="METASTORE_TYPE_UNSPECIFIED",
                name="veritatis",
            ),
        },
        labels={
            "rerum": "harum",
            "dolor": "sit",
        },
        name="veniam",
        version="vel",
    ),
)
    
res = s.projects.metastore_projects_locations_federations_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->