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
        parent="labore",
    ),
    query_params=operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams(
        dollar_xgafv="2",
        access_token="doloribus",
        alt="media",
        callback="labore",
        document_id="pariatur",
        fields="natus",
        key="optio",
        oauth_token="praesentium",
        pretty_print=False,
        quota_user="accusantium",
        upload_type="in",
        upload_protocol="voluptatum",
    ),
    request=shared.GoogleCloudDiscoveryengineV1alphaDocument(
        id="reprehenderit",
        json_data="veniam",
        name="eos",
        parent_document_id="ut",
        schema_id="laboriosam",
        struct_data={
            "labore": "est",
            "similique": "aliquam",
            "commodi": "hic",
        },
    ),
)
    
res = s.projects.discoveryengine_projects_locations_data_stores_branches_documents_create(req)

if res.google_cloud_discoveryengine_v1alpha_document is not None:
    # handle response
```
<!-- End SDK Example Usage -->