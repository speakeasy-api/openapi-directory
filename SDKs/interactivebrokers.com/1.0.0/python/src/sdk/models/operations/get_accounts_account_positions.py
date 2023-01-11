import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetAccountsAccountPositionsPathParams:
    account: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetAccountsAccountPositions200ApplicationJSON:
    average_cost: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AverageCost') }})
    contract_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContractId') }})
    position: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Position') }})
    

@dataclasses.dataclass
class GetAccountsAccountPositionsRequest:
    path_params: GetAccountsAccountPositionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountsAccountPositionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_accounts_account_positions_200_application_json_objects: Optional[list[GetAccountsAccountPositions200ApplicationJSON]] = dataclasses.field(default=None)
    
