<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DatastoreProjectsExportRequest(
    security=operations.DatastoreProjectsExportSecurity(
        option1=operations.DatastoreProjectsExportSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.DatastoreProjectsExportPathParams(
        project_id="sint",
    ),
    query_params=operations.DatastoreProjectsExportQueryParams(
        dollar_xgafv="2",
        access_token="odio",
        alt="proto",
        callback="reiciendis",
        fields="velit",
        key="non",
        oauth_token="in",
        pretty_print=False,
        quota_user="omnis",
        upload_type="enim",
        upload_protocol="aspernatur",
    ),
    request=shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest(
        entity_filter=shared.GoogleDatastoreAdminV1beta1EntityFilter(
            kinds=[
                "blanditiis",
            ],
            namespace_ids=[
                "voluptas",
                "perspiciatis",
            ],
        ),
        labels={
            "explicabo": "ut",
            "consequuntur": "tenetur",
        },
        output_url_prefix="eos",
    ),
)
    
res = s.projects.datastore_projects_export(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->