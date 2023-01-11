import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class RemoveUserFromAccountPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccountRequestBody:
    r"""RemoveUserFromAccountRequestBody
    The user being added/removed from the account
    """
    
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount201ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount201ApplicationJSON:
    r"""RemoveUserFromAccount201ApplicationJSON
    The object was created
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: RemoveUserFromAccount201ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount400ApplicationJSONErrorsParameters:
    r"""RemoveUserFromAccount400ApplicationJSONErrorsParameters
    All query-, header- and path- parameters that seemed incorrect
    """
    
    header: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    path: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    query: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount400ApplicationJSONErrors:
    r"""RemoveUserFromAccount400ApplicationJSONErrors
    Map that sums up all received values that seemed incorrect
    """
    
    fields: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    parameters: Optional[RemoveUserFromAccount400ApplicationJSONErrorsParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount400ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount400ApplicationJSON:
    r"""RemoveUserFromAccount400ApplicationJSON
    Specify the fields and/ or parameters that had errors
    """
    
    errors: RemoveUserFromAccount400ApplicationJSONErrors = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: RemoveUserFromAccount400ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount401ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount401ApplicationJSON:
    r"""RemoveUserFromAccount401ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: RemoveUserFromAccount401ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount403ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount403ApplicationJSON:
    r"""RemoveUserFromAccount403ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: RemoveUserFromAccount403ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount429ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount429ApplicationJSON:
    r"""RemoveUserFromAccount429ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: RemoveUserFromAccount429ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount500ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserFromAccount500ApplicationJSON:
    r"""RemoveUserFromAccount500ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: RemoveUserFromAccount500ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class RemoveUserFromAccountRequest:
    path_params: RemoveUserFromAccountPathParams = dataclasses.field()
    request: RemoveUserFromAccountRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveUserFromAccountResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    remove_user_from_account_201_application_json_object: Optional[RemoveUserFromAccount201ApplicationJSON] = dataclasses.field(default=None)
    remove_user_from_account_400_application_json_object: Optional[RemoveUserFromAccount400ApplicationJSON] = dataclasses.field(default=None)
    remove_user_from_account_401_application_json_object: Optional[RemoveUserFromAccount401ApplicationJSON] = dataclasses.field(default=None)
    remove_user_from_account_403_application_json_object: Optional[RemoveUserFromAccount403ApplicationJSON] = dataclasses.field(default=None)
    remove_user_from_account_429_application_json_object: Optional[RemoveUserFromAccount429ApplicationJSON] = dataclasses.field(default=None)
    remove_user_from_account_500_application_json_object: Optional[RemoveUserFromAccount500ApplicationJSON] = dataclasses.field(default=None)
    
