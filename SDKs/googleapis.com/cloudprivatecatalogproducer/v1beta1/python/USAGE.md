<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudprivatecatalogproducerCatalogsAssociationsCreateRequest(
    dollar_xgafv="2",
    google_cloud_privatecatalogproducer_v1beta1_create_association_request=shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest(
        association=shared.GoogleCloudPrivatecatalogproducerV1beta1Association(
            create_time="provident",
            name="distinctio",
            resource="quibusdam",
        ),
    ),
    access_token="unde",
    alt="proto",
    callback="corrupti",
    fields_="illum",
    key="vel",
    oauth_token="error",
    parent="deserunt",
    pretty_print=False,
    quota_user="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.catalogs.cloudprivatecatalogproducer_catalogs_associations_create(req, operations.CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->