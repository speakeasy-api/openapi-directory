import dataclasses
from typing import Optional
from ..shared import googlecloudprivatecatalogv1beta1product as shared_googlecloudprivatecatalogv1beta1product


@dataclasses.dataclass
class GoogleCloudPrivatecatalogV1beta1SearchProductsResponse:
    r"""GoogleCloudPrivatecatalogV1beta1SearchProductsResponse
    Response message for PrivateCatalog.SearchProducts.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None)
    products: Optional[list[shared_googlecloudprivatecatalogv1beta1product.GoogleCloudPrivatecatalogV1beta1Product]] = dataclasses.field(default=None)
    
