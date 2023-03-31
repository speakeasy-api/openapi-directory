<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest(
    dollar_xgafv="2",
    google_cloud_retail_v2_add_catalog_attribute_request_input=shared.GoogleCloudRetailV2AddCatalogAttributeRequestInput(
        catalog_attribute=shared.GoogleCloudRetailV2CatalogAttributeInput(
            dynamic_facetable_option="DYNAMIC_FACETABLE_ENABLED",
            exact_searchable_option="EXACT_SEARCHABLE_DISABLED",
            indexable_option="INDEXABLE_DISABLED",
            key="unde",
            retrievable_option="RETRIEVABLE_DISABLED",
            searchable_option="SEARCHABLE_ENABLED",
        ),
    ),
    access_token="illum",
    alt="media",
    attributes_config="error",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    oauth_token="magnam",
    pretty_print=False,
    quota_user="debitis",
    upload_type="ipsa",
    upload_protocol="delectus",
)
    
res = s.projects.retail_projects_locations_catalogs_attributes_config_add_catalog_attribute(req, operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_retail_v2_attributes_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->