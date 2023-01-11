import dataclasses
from typing import Optional
from ..shared import googlecloudprivatecatalogv1beta1version as shared_googlecloudprivatecatalogv1beta1version


@dataclasses.dataclass
class GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse:
    r"""GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse
    Response message for PrivateCatalog.SearchVersions.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None)
    versions: Optional[list[shared_googlecloudprivatecatalogv1beta1version.GoogleCloudPrivatecatalogV1beta1Version]] = dataclasses.field(default=None)
    
