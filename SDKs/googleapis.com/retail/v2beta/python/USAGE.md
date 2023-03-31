<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest(
    dollar_xgafv="2",
    google_cloud_retail_v2beta_add_catalog_attribute_request_input=shared.GoogleCloudRetailV2betaAddCatalogAttributeRequestInput(
        catalog_attribute=shared.GoogleCloudRetailV2betaCatalogAttributeInput(
            dynamic_facetable_option="DYNAMIC_FACETABLE_ENABLED",
            exact_searchable_option="EXACT_SEARCHABLE_DISABLED",
            indexable_option="INDEXABLE_DISABLED",
            key="unde",
            recommendations_filtering_option="RECOMMENDATIONS_FILTERING_ENABLED",
            retrievable_option="RETRIEVABLE_ENABLED",
            searchable_option="SEARCHABLE_DISABLED",
        ),
    ),
    access_token="vel",
    alt="media",
    attributes_config="deserunt",
    callback="suscipit",
    fields_="iure",
    key="magnam",
    oauth_token="debitis",
    pretty_print=False,
    quota_user="ipsa",
    upload_type="delectus",
    upload_protocol="tempora",
)
    
res = s.projects.retail_projects_locations_catalogs_attributes_config_add_catalog_attribute(req, operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_retail_v2beta_attributes_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->