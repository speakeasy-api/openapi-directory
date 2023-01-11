import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderstate as shared_orderstate


@dataclasses.dataclass
class PostAccountsAccountOrdersPathParams:
    account: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostAccountsAccountOrdersRequestBody:
    aux_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aux Price') }})
    contract_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContractId') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    customer_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerOrderId') }})
    german_hft_algo: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GermanHftAlgo') }})
    instrument_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstrumentType') }})
    listing_exchange: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListingExchange') }})
    mifid2_algo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mifid2Algo') }})
    mifid2_decision_maker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mifid2DecisionMaker') }})
    mifid2_execution_algo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mifid2ExecutionAlgo') }})
    mifid2_execution_trader: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mifid2ExecutionTrader') }})
    order_type: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Order Type') }})
    order_restrictions: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderRestrictions') }})
    outside_rth: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outside RTH') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Price') }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quantity') }})
    side: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Side') }})
    ticker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ticker') }})
    time_in_force: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Time in Force') }})
    

@dataclasses.dataclass
class PostAccountsAccountOrdersRequest:
    path_params: PostAccountsAccountOrdersPathParams = dataclasses.field()
    request: PostAccountsAccountOrdersRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAccountsAccountOrdersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    order_states: Optional[list[shared_orderstate.OrderState]] = dataclasses.field(default=None)
    
