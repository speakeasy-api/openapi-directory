<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest(
    security=operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams(
        parent="aliquid",
    ),
    query_params=operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams(
        dollar_xgafv="2",
        access_token="praesentium",
        alt="media",
        callback="id",
        document_id="non",
        fields="ipsam",
        key="qui",
        oauth_token="explicabo",
        pretty_print=True,
        quota_user="sapiente",
        upload_type="quia",
        upload_protocol="dolorem",
    ),
    request=shared.GoogleCloudDiscoveryengineV1betaDocument(
        id="aut",
        json_data="molestiae",
        name="quod",
        parent_document_id="voluptatum",
        schema_id="quos",
        struct_data={
            "incidunt": "ab",
            "explicabo": "fuga",
            "dignissimos": "perferendis",
        },
    ),
)
    
res = s.projects.discoveryengine_projects_locations_data_stores_branches_documents_create(req)

if res.google_cloud_discoveryengine_v1beta_document is not None:
    # handle response
```
<!-- End SDK Example Usage -->