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
class RetrieveCreditTransfersPathParams:
    api_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveCreditTransfersQueryParams:
    start_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    subaccount: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subaccount', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RetrieveCreditTransfersSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveCreditTransfers401ApplicationJSON:
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveCreditTransfers404ApplicationJSON:
    r"""RetrieveCreditTransfers404ApplicationJSON
    Invalid API Key
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class RetrieveCreditTransfersRequest:
    path_params: RetrieveCreditTransfersPathParams = dataclasses.field()
    query_params: RetrieveCreditTransfersQueryParams = dataclasses.field()
    security: RetrieveCreditTransfersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveCreditTransfersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_credit_transfers_response: Optional[Any] = dataclasses.field(default=None)
    unprovisioned_error_response: Optional[shared_unprovisionederrorresponse.UnprovisionedErrorResponse] = dataclasses.field(default=None)
    retrieve_credit_transfers_401_application_json_object: Optional[RetrieveCreditTransfers401ApplicationJSON] = dataclasses.field(default=None)
    retrieve_credit_transfers_404_application_json_object: Optional[RetrieveCreditTransfers404ApplicationJSON] = dataclasses.field(default=None)
    
