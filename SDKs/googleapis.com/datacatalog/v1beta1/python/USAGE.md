<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatacatalogCatalogSearchRequest(
    dollar_xgafv="2",
    google_cloud_datacatalog_v1beta1_search_catalog_request=shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequest(
        order_by="provident",
        page_size=715190,
        page_token="quibusdam",
        query="unde",
        scope=shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope(
            include_gcp_public_datasets=False,
            include_org_ids=[
                "corrupti",
                "illum",
                "vel",
                "error",
            ],
            include_project_ids=[
                "suscipit",
                "iure",
                "magnam",
            ],
            restricted_locations=[
                "ipsa",
                "delectus",
                "tempora",
                "suscipit",
            ],
        ),
    ),
    access_token="molestiae",
    alt="proto",
    callback="placeat",
    fields_="voluptatum",
    key="iusto",
    oauth_token="excepturi",
    pretty_print=False,
    quota_user="nisi",
    upload_type="recusandae",
    upload_protocol="temporibus",
)
    
res = s.catalog.datacatalog_catalog_search(req, operations.DatacatalogCatalogSearchSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_datacatalog_v1beta1_search_catalog_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->