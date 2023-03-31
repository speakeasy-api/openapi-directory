<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatastoreProjectsExportRequest(
    dollar_xgafv="2",
    google_datastore_admin_v1beta1_export_entities_request=shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest(
        entity_filter=shared.GoogleDatastoreAdminV1beta1EntityFilter(
            kinds=[
                "distinctio",
                "quibusdam",
                "unde",
            ],
            namespace_ids=[
                "corrupti",
                "illum",
                "vel",
                "error",
            ],
        ),
        labels={
            "suscipit": "iure",
            "magnam": "debitis",
            "ipsa": "delectus",
        },
        output_url_prefix="tempora",
    ),
    access_token="suscipit",
    alt="media",
    callback="minus",
    fields_="placeat",
    key="voluptatum",
    oauth_token="iusto",
    pretty_print=False,
    project_id="excepturi",
    quota_user="nisi",
    upload_type="recusandae",
    upload_protocol="temporibus",
)
    
res = s.projects.datastore_projects_export(req, operations.DatastoreProjectsExportSecurity(
    option1=operations.DatastoreProjectsExportSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->