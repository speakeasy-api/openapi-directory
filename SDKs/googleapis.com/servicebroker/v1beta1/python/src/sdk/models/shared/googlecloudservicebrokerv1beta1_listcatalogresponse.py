import dataclasses
from typing import Optional
from ..shared import googlecloudservicebrokerv1beta1_service as shared_googlecloudservicebrokerv1beta1_service


@dataclasses.dataclass
class GoogleCloudServicebrokerV1beta1ListCatalogResponse:
    r"""GoogleCloudServicebrokerV1beta1ListCatalogResponse
    Response message for the `ListCatalog()` method.
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    next_page_token: Optional[str] = dataclasses.field(default=None)
    services: Optional[list[shared_googlecloudservicebrokerv1beta1_service.GoogleCloudServicebrokerV1beta1Service]] = dataclasses.field(default=None)
    
