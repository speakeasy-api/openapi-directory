import dataclasses
from typing import Optional
from ..shared import landlordaccountingmodel as shared_landlordaccountingmodel


@dataclasses.dataclass
class LandlordControllerGetAccountsPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LandlordControllerGetAccountsQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LandlordControllerGetAccountsRequest:
    path_params: LandlordControllerGetAccountsPathParams = dataclasses.field()
    query_params: LandlordControllerGetAccountsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LandlordControllerGetAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    landlord_accounting_model: Optional[shared_landlordaccountingmodel.LandlordAccountingModel] = dataclasses.field(default=None)
    
