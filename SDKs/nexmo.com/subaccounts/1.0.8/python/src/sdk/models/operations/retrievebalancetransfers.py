import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import unprovisionederrorresponse as shared_unprovisionederrorresponse


@dataclasses.dataclass
class RetrieveBalanceTransfersPathParams:
    api_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveBalanceTransfersQueryParams:
    start_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    subaccount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subaccount', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RetrieveBalanceTransfersSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveBalanceTransfers401ApplicationJSON:
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveBalanceTransfers404ApplicationJSON:
    r"""RetrieveBalanceTransfers404ApplicationJSON
    Invalid API Key
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class RetrieveBalanceTransfersRequest:
    path_params: RetrieveBalanceTransfersPathParams = dataclasses.field()
    query_params: RetrieveBalanceTransfersQueryParams = dataclasses.field()
    security: RetrieveBalanceTransfersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveBalanceTransfersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_balance_transfers_response: Optional[Any] = dataclasses.field(default=None)
    unprovisioned_error_response: Optional[shared_unprovisionederrorresponse.UnprovisionedErrorResponse] = dataclasses.field(default=None)
    retrieve_balance_transfers_401_application_json_object: Optional[RetrieveBalanceTransfers401ApplicationJSON] = dataclasses.field(default=None)
    retrieve_balance_transfers_404_application_json_object: Optional[RetrieveBalanceTransfers404ApplicationJSON] = dataclasses.field(default=None)
    
