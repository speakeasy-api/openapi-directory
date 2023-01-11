import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AddUserToAccountPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserToAccountRequestBody:
    r"""AddUserToAccountRequestBody
    The user being added/removed from the account
    """
    
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserToAccount201ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserToAccount201ApplicationJSON:
    r"""AddUserToAccount201ApplicationJSON
    The object was created
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: AddUserToAccount201ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserToAccount400ApplicationJSONErrorsParameters:
    r"""AddUserToAccount400ApplicationJSONErrorsParameters
    All query-, header- and path- parameters that seemed incorrect
    """
    
    header: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    path: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    query: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserToAccount400ApplicationJSONErrors:
    r"""AddUserToAccount400ApplicationJSONErrors
    Map that sums up all received values that seemed incorrect
    """
    
    fields: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    parameters: Optional[AddUserToAccount400ApplicationJSONErrorsParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserToAccount400ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserToAccount400ApplicationJSON:
    r"""AddUserToAccount400ApplicationJSON
    Specify the fields and/ or parameters that had errors
    """
    
    errors: AddUserToAccount400ApplicationJSONErrors = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: AddUserToAccount400ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserToAccount401ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserToAccount401ApplicationJSON:
    r"""AddUserToAccount401ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: AddUserToAccount401ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserToAccount429ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserToAccount429ApplicationJSON:
    r"""AddUserToAccount429ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: AddUserToAccount429ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserToAccount500ApplicationJSONMeta:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUserToAccount500ApplicationJSON:
    r"""AddUserToAccount500ApplicationJSON
    The error message should specify what cause the error
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: AddUserToAccount500ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class AddUserToAccountRequest:
    path_params: AddUserToAccountPathParams = dataclasses.field()
    request: AddUserToAccountRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddUserToAccountResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    add_user_to_account_201_application_json_object: Optional[AddUserToAccount201ApplicationJSON] = dataclasses.field(default=None)
    add_user_to_account_400_application_json_object: Optional[AddUserToAccount400ApplicationJSON] = dataclasses.field(default=None)
    add_user_to_account_401_application_json_object: Optional[AddUserToAccount401ApplicationJSON] = dataclasses.field(default=None)
    add_user_to_account_429_application_json_object: Optional[AddUserToAccount429ApplicationJSON] = dataclasses.field(default=None)
    add_user_to_account_500_application_json_object: Optional[AddUserToAccount500ApplicationJSON] = dataclasses.field(default=None)
    
