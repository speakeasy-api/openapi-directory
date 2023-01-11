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
        parent="ex",
    ),
    query_params=operations.MetastoreProjectsLocationsFederationsCreateQueryParams(
        dollar_xgafv="2",
        access_token="veniam",
        alt="media",
        callback="fuga",
        federation_id="quasi",
        fields="doloribus",
        key="maxime",
        oauth_token="quod",
        pretty_print=False,
        quota_user="occaecati",
        request_id="nisi",
        upload_type="amet",
        upload_protocol="iste",
    ),
    request=shared.FederationInput(
        backend_metastores={
            "ipsam": shared.BackendMetastore(
                metastore_type="DATAPROC_METASTORE",
                name="voluptas",
            ),
            "animi": shared.BackendMetastore(
                metastore_type="METASTORE_TYPE_UNSPECIFIED",
                name="optio",
            ),
        },
        labels={
            "labore": "voluptatem",
            "id": "labore",
        },
        name="eos",
        version="iste",
    ),
)
    
res = s.projects.metastore_projects_locations_federations_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->