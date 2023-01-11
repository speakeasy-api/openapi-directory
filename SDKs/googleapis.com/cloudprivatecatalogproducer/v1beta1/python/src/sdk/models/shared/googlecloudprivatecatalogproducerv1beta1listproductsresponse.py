import dataclasses
from typing import Optional
from ..shared import googlecloudprivatecatalogproducerv1beta1product as shared_googlecloudprivatecatalogproducerv1beta1product


@dataclasses.dataclass
class GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse:
    next_page_token: Optional[str] = dataclasses.field(default=None)
    products: Optional[list[shared_googlecloudprivatecatalogproducerv1beta1product.GoogleCloudPrivatecatalogproducerV1beta1Product]] = dataclasses.field(default=None)
    
