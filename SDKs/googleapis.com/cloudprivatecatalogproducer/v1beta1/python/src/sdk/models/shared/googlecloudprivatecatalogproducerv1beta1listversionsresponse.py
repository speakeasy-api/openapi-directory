import dataclasses
from typing import Optional
from ..shared import googlecloudprivatecatalogproducerv1beta1version as shared_googlecloudprivatecatalogproducerv1beta1version


@dataclasses.dataclass
class GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse:
    next_page_token: Optional[str] = dataclasses.field(default=None)
    versions: Optional[list[shared_googlecloudprivatecatalogproducerv1beta1version.GoogleCloudPrivatecatalogproducerV1beta1Version]] = dataclasses.field(default=None)
    
