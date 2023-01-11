import dataclasses
from typing import Optional
from ..shared import googlecloudprivatecatalogv1beta1catalog as shared_googlecloudprivatecatalogv1beta1catalog


@dataclasses.dataclass
class GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse:
    r"""GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse
    Response message for PrivateCatalog.SearchCatalogs.
    """
    
    catalogs: Optional[list[shared_googlecloudprivatecatalogv1beta1catalog.GoogleCloudPrivatecatalogV1beta1Catalog]] = dataclasses.field(default=None)
    next_page_token: Optional[str] = dataclasses.field(default=None)
    
