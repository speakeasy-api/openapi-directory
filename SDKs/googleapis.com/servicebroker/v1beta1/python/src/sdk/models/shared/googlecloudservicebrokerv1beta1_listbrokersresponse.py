import dataclasses
from typing import Optional
from ..shared import googlecloudservicebrokerv1beta1_broker as shared_googlecloudservicebrokerv1beta1_broker


@dataclasses.dataclass
class GoogleCloudServicebrokerV1beta1ListBrokersResponse:
    r"""GoogleCloudServicebrokerV1beta1ListBrokersResponse
    The response for the `ListBrokers()` method.
    """
    
    brokers: Optional[list[shared_googlecloudservicebrokerv1beta1_broker.GoogleCloudServicebrokerV1beta1Broker]] = dataclasses.field(default=None)
    next_page_token: Optional[str] = dataclasses.field(default=None)
    
