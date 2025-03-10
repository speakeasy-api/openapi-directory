"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import check_deposit as shared_check_deposit
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Any, Optional


@dataclasses.dataclass
class SubmitASandboxCheckDepositRequest:
    
    check_deposit_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'check_deposit_id', 'style': 'simple', 'explode': False }})  
    
class SubmitASandboxCheckDepositDefaultApplicationJSON13StatusEnum(str, Enum):
    FOUR_HUNDRED_AND_TWENTY_NINE = '429'

class SubmitASandboxCheckDepositDefaultApplicationJSON13TypeEnum(str, Enum):
    RATE_LIMITED_ERROR = 'rate_limited_error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitASandboxCheckDepositDefaultApplicationJSON13:
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail') }})  
    status: SubmitASandboxCheckDepositDefaultApplicationJSON13StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    type: SubmitASandboxCheckDepositDefaultApplicationJSON13TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    retry_after: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('retry_after'), 'exclude': lambda f: f is None }})  
    
class SubmitASandboxCheckDepositDefaultApplicationJSON12StatusEnum(str, Enum):
    FOUR_HUNDRED_AND_THREE = '403'

class SubmitASandboxCheckDepositDefaultApplicationJSON12TypeEnum(str, Enum):
    PRIVATE_FEATURE_ERROR = 'private_feature_error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitASandboxCheckDepositDefaultApplicationJSON12:
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail') }})  
    status: SubmitASandboxCheckDepositDefaultApplicationJSON12StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    type: SubmitASandboxCheckDepositDefaultApplicationJSON12TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    
class SubmitASandboxCheckDepositDefaultApplicationJSON11StatusEnum(str, Enum):
    FOUR_HUNDRED_AND_FOUR = '404'

class SubmitASandboxCheckDepositDefaultApplicationJSON11TypeEnum(str, Enum):
    OBJECT_NOT_FOUND_ERROR = 'object_not_found_error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitASandboxCheckDepositDefaultApplicationJSON11:
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail') }})  
    status: SubmitASandboxCheckDepositDefaultApplicationJSON11StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    type: SubmitASandboxCheckDepositDefaultApplicationJSON11TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    
class SubmitASandboxCheckDepositDefaultApplicationJSON10StatusEnum(str, Enum):
    FOUR_HUNDRED = '400'

class SubmitASandboxCheckDepositDefaultApplicationJSON10TypeEnum(str, Enum):
    MALFORMED_REQUEST_ERROR = 'malformed_request_error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitASandboxCheckDepositDefaultApplicationJSON10:
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail') }})  
    status: SubmitASandboxCheckDepositDefaultApplicationJSON10StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    type: SubmitASandboxCheckDepositDefaultApplicationJSON10TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    
class SubmitASandboxCheckDepositDefaultApplicationJSON9StatusEnum(str, Enum):
    FOUR_HUNDRED = '400'

class SubmitASandboxCheckDepositDefaultApplicationJSON9TypeEnum(str, Enum):
    INVALID_PARAMETERS_ERROR = 'invalid_parameters_error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitASandboxCheckDepositDefaultApplicationJSON9:
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail') }})  
    status: SubmitASandboxCheckDepositDefaultApplicationJSON9StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    type: SubmitASandboxCheckDepositDefaultApplicationJSON9TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    errors: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errors'), 'exclude': lambda f: f is None }})
    r"""All errors related to parsing the request parameters."""  
    
class SubmitASandboxCheckDepositDefaultApplicationJSON8StatusEnum(str, Enum):
    FOUR_HUNDRED_AND_NINE = '409'

class SubmitASandboxCheckDepositDefaultApplicationJSON8TypeEnum(str, Enum):
    INVALID_OPERATION_ERROR = 'invalid_operation_error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitASandboxCheckDepositDefaultApplicationJSON8:
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail') }})  
    status: SubmitASandboxCheckDepositDefaultApplicationJSON8StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    type: SubmitASandboxCheckDepositDefaultApplicationJSON8TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    
class SubmitASandboxCheckDepositDefaultApplicationJSON7StatusEnum(str, Enum):
    FOUR_HUNDRED_AND_ONE = '401'

class SubmitASandboxCheckDepositDefaultApplicationJSON7TypeEnum(str, Enum):
    INVALID_API_KEY_ERROR = 'invalid_api_key_error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitASandboxCheckDepositDefaultApplicationJSON7:
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail') }})  
    status: SubmitASandboxCheckDepositDefaultApplicationJSON7StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    type: SubmitASandboxCheckDepositDefaultApplicationJSON7TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    
class SubmitASandboxCheckDepositDefaultApplicationJSON6StatusEnum(str, Enum):
    FIVE_HUNDRED = '500'

class SubmitASandboxCheckDepositDefaultApplicationJSON6TypeEnum(str, Enum):
    INTERNAL_SERVER_ERROR = 'internal_server_error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitASandboxCheckDepositDefaultApplicationJSON6:
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail') }})  
    status: SubmitASandboxCheckDepositDefaultApplicationJSON6StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    type: SubmitASandboxCheckDepositDefaultApplicationJSON6TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    
class SubmitASandboxCheckDepositDefaultApplicationJSON5StatusEnum(str, Enum):
    FOUR_HUNDRED_AND_THREE = '403'

class SubmitASandboxCheckDepositDefaultApplicationJSON5TypeEnum(str, Enum):
    INSUFFICIENT_PERMISSIONS_ERROR = 'insufficient_permissions_error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitASandboxCheckDepositDefaultApplicationJSON5:
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail') }})  
    status: SubmitASandboxCheckDepositDefaultApplicationJSON5StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    type: SubmitASandboxCheckDepositDefaultApplicationJSON5TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    
class SubmitASandboxCheckDepositDefaultApplicationJSON4StatusEnum(str, Enum):
    FOUR_HUNDRED_AND_TWENTY_TWO = '422'

class SubmitASandboxCheckDepositDefaultApplicationJSON4TypeEnum(str, Enum):
    IDEMPOTENCY_UNPROCESSABLE_ERROR = 'idempotency_unprocessable_error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitASandboxCheckDepositDefaultApplicationJSON4:
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail') }})  
    status: SubmitASandboxCheckDepositDefaultApplicationJSON4StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    type: SubmitASandboxCheckDepositDefaultApplicationJSON4TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    
class SubmitASandboxCheckDepositDefaultApplicationJSON3StatusEnum(str, Enum):
    FOUR_HUNDRED_AND_NINE = '409'

class SubmitASandboxCheckDepositDefaultApplicationJSON3TypeEnum(str, Enum):
    IDEMPOTENCY_CONFLICT_ERROR = 'idempotency_conflict_error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitASandboxCheckDepositDefaultApplicationJSON3:
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail') }})  
    status: SubmitASandboxCheckDepositDefaultApplicationJSON3StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    type: SubmitASandboxCheckDepositDefaultApplicationJSON3TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    
class SubmitASandboxCheckDepositDefaultApplicationJSON2StatusEnum(str, Enum):
    FOUR_HUNDRED_AND_THREE = '403'

class SubmitASandboxCheckDepositDefaultApplicationJSON2TypeEnum(str, Enum):
    ENVIRONMENT_MISMATCH_ERROR = 'environment_mismatch_error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitASandboxCheckDepositDefaultApplicationJSON2:
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail') }})  
    status: SubmitASandboxCheckDepositDefaultApplicationJSON2StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    type: SubmitASandboxCheckDepositDefaultApplicationJSON2TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    
class SubmitASandboxCheckDepositDefaultApplicationJSON1StatusEnum(str, Enum):
    FOUR_HUNDRED_AND_FOUR = '404'

class SubmitASandboxCheckDepositDefaultApplicationJSON1TypeEnum(str, Enum):
    API_METHOD_NOT_FOUND_ERROR = 'api_method_not_found_error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitASandboxCheckDepositDefaultApplicationJSON1:
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail') }})  
    status: SubmitASandboxCheckDepositDefaultApplicationJSON1StatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    type: SubmitASandboxCheckDepositDefaultApplicationJSON1TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    

@dataclasses.dataclass
class SubmitASandboxCheckDepositResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    check_deposit: Optional[shared_check_deposit.CheckDeposit] = dataclasses.field(default=None)
    r"""Check Deposit"""  
    error: Optional[Any] = dataclasses.field(default=None)
    r"""Error"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    