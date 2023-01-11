import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import unprovisionederrorresponse as shared_unprovisionederrorresponse


@dataclasses.dataclass
class RetrieveSubaccountsListPathParams:
    api_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveSubaccountsListSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveSubaccountsList401ApplicationJSON:
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveSubaccountsList404ApplicationJSON:
    r"""RetrieveSubaccountsList404ApplicationJSON
    Invalid API Key
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class RetrieveSubaccountsListRequest:
    path_params: RetrieveSubaccountsListPathParams = dataclasses.field()
    security: RetrieveSubaccountsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveSubaccountsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subaccounts_all_response: Optional[Any] = dataclasses.field(default=None)
    unprovisioned_error_response: Optional[shared_unprovisionederrorresponse.UnprovisionedErrorResponse] = dataclasses.field(default=None)
    retrieve_subaccounts_list_401_application_json_object: Optional[RetrieveSubaccountsList401ApplicationJSON] = dataclasses.field(default=None)
    retrieve_subaccounts_list_404_application_json_object: Optional[RetrieveSubaccountsList404ApplicationJSON] = dataclasses.field(default=None)
    
