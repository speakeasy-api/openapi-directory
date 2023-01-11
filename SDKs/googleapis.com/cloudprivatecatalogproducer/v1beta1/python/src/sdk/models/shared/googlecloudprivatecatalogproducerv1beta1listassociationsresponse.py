import dataclasses
from typing import Optional
from ..shared import googlecloudprivatecatalogproducerv1beta1association as shared_googlecloudprivatecatalogproducerv1beta1association


@dataclasses.dataclass
class GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse:
    associations: Optional[list[shared_googlecloudprivatecatalogproducerv1beta1association.GoogleCloudPrivatecatalogproducerV1beta1Association]] = dataclasses.field(default=None)
    next_page_token: Optional[str] = dataclasses.field(default=None)
    
