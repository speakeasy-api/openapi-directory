import dataclasses
from typing import Optional
from ..shared import syndicatemarshallerwrapped as shared_syndicatemarshallerwrapped


@dataclasses.dataclass
class GetResourcesCampaignsIDSyndicateFormatPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesCampaignsIDSyndicateFormatQueryParams:
    display_method: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'displayMethod', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesCampaignsIDSyndicateFormatRequest:
    path_params: GetResourcesCampaignsIDSyndicateFormatPathParams = dataclasses.field()
    query_params: GetResourcesCampaignsIDSyndicateFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesCampaignsIDSyndicateFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    syndicate_marshaller_wrapped: Optional[shared_syndicatemarshallerwrapped.SyndicateMarshallerWrapped] = dataclasses.field(default=None)
    
