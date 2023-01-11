<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudprivatecatalogproducerCatalogsAssociationsCreateRequest(
    security=operations.CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams(
        parent="autem",
    ),
    query_params=operations.CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams(
        dollar_xgafv="2",
        access_token="consequatur",
        alt="json",
        callback="qui",
        fields="quis",
        key="facilis",
        oauth_token="reprehenderit",
        pretty_print=False,
        quota_user="molestiae",
        upload_type="quod",
        upload_protocol="perspiciatis",
    ),
    request=shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest(
        association=shared.GoogleCloudPrivatecatalogproducerV1beta1Association(
            create_time="accusantium",
            name="impedit",
            resource="nihil",
        ),
    ),
)
    
res = s.catalogs.cloudprivatecatalogproducer_catalogs_associations_create(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->