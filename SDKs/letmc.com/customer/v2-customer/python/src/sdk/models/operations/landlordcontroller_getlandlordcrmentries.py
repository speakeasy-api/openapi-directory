import dataclasses
from typing import Optional
from ..shared import landlordcrmentry as shared_landlordcrmentry


@dataclasses.dataclass
class LandlordControllerGetLandlordCrmEntriesPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LandlordControllerGetLandlordCrmEntriesQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LandlordControllerGetLandlordCrmEntriesRequest:
    path_params: LandlordControllerGetLandlordCrmEntriesPathParams = dataclasses.field()
    query_params: LandlordControllerGetLandlordCrmEntriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LandlordControllerGetLandlordCrmEntriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    landlord_crm_entries: Optional[list[shared_landlordcrmentry.LandlordCrmEntry]] = dataclasses.field(default=None)
    
