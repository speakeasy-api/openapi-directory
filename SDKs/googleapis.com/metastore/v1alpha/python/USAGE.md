<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MetastoreProjectsLocationsFederationsCreateRequest(
    dollar_xgafv="2",
    federation_input=shared.FederationInput(
        backend_metastores={
            "distinctio": shared.BackendMetastore(
                metastore_type="DATAPROC_METASTORE",
                name="unde",
            ),
            "nulla": shared.BackendMetastore(
                metastore_type="BIGQUERY",
                name="illum",
            ),
            "vel": shared.BackendMetastore(
                metastore_type="BIGQUERY",
                name="deserunt",
            ),
        },
        labels={
            "iure": "magnam",
            "debitis": "ipsa",
        },
        name="delectus",
        version="tempora",
    ),
    access_token="suscipit",
    alt="media",
    callback="minus",
    federation_id="placeat",
    fields_="voluptatum",
    key="iusto",
    oauth_token="excepturi",
    parent="nisi",
    pretty_print=False,
    quota_user="recusandae",
    request_id="temporibus",
    upload_type="ab",
    upload_protocol="quis",
)
    
res = s.projects.metastore_projects_locations_federations_create(req, operations.MetastoreProjectsLocationsFederationsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->