import dataclasses
from typing import Optional


@dataclasses.dataclass
class GoogleCloudServicebrokerV1beta1DashboardClient:
    r"""GoogleCloudServicebrokerV1beta1DashboardClient
    Message containing information required to activate Dashboard SSO feature.
    """
    
    id: Optional[str] = dataclasses.field(default=None)
    redirect_uri: Optional[str] = dataclasses.field(default=None)
    secret: Optional[str] = dataclasses.field(default=None)
    
