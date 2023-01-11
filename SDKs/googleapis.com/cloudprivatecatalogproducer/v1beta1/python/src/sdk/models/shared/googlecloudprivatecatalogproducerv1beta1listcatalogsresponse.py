import dataclasses
from typing import Optional
from ..shared import googlecloudprivatecatalogproducerv1beta1catalog as shared_googlecloudprivatecatalogproducerv1beta1catalog


@dataclasses.dataclass
class GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse:
    catalogs: Optional[list[shared_googlecloudprivatecatalogproducerv1beta1catalog.GoogleCloudPrivatecatalogproducerV1beta1Catalog]] = dataclasses.field(default=None)
    next_page_token: Optional[str] = dataclasses.field(default=None)
    
