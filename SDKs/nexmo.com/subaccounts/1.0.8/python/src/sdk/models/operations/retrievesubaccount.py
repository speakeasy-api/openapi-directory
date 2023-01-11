import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import unprovisionederrorresponse as shared_unprovisionederrorresponse


@dataclasses.dataclass
class RetrieveSubaccountPathParams:
    api_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    subaccount_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subaccount_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveSubaccountSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveSubaccount401ApplicationJSON:
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveSubaccount404ApplicationJSON:
    r"""RetrieveSubaccount404ApplicationJSON
    Invalid API Key
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class RetrieveSubaccountRequest:
    path_params: RetrieveSubaccountPathParams = dataclasses.field()
    security: RetrieveSubaccountSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveSubaccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subaccount_response: Optional[Any] = dataclasses.field(default=None)
    unprovisioned_error_response: Optional[shared_unprovisionederrorresponse.UnprovisionedErrorResponse] = dataclasses.field(default=None)
    retrieve_subaccount_401_application_json_object: Optional[RetrieveSubaccount401ApplicationJSON] = dataclasses.field(default=None)
    retrieve_subaccount_404_application_json_object: Optional[RetrieveSubaccount404ApplicationJSON] = dataclasses.field(default=None)
    
