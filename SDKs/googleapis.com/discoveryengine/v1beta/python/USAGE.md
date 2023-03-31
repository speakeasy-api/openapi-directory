<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest(
    dollar_xgafv="2",
    google_cloud_discoveryengine_v1beta_document=shared.GoogleCloudDiscoveryengineV1betaDocument(
        id="provident",
        json_data="distinctio",
        name="quibusdam",
        parent_document_id="unde",
        schema_id="nulla",
        struct_data={
            "illum": "vel",
            "error": "deserunt",
            "suscipit": "iure",
        },
    ),
    access_token="magnam",
    alt="proto",
    callback="ipsa",
    document_id="delectus",
    fields_="tempora",
    key="suscipit",
    oauth_token="molestiae",
    parent="minus",
    pretty_print=False,
    quota_user="placeat",
    upload_type="voluptatum",
    upload_protocol="iusto",
)
    
res = s.projects.discoveryengine_projects_locations_data_stores_branches_documents_create(req, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_discoveryengine_v1beta_document is not None:
    # handle response
```
<!-- End SDK Example Usage -->