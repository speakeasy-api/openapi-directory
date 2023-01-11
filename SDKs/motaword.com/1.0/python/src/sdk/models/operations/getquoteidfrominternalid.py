import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error


@dataclasses.dataclass
class GetQuoteIDFromInternalIDPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetQuoteIDFromInternalID200ApplicationJSON:
    internal_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internal-id') }})
    public_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public-id') }})
    

@dataclasses.dataclass
class GetQuoteIDFromInternalIDRequest:
    path_params: GetQuoteIDFromInternalIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetQuoteIDFromInternalIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_quote_id_from_internal_id_200_application_json_object: Optional[GetQuoteIDFromInternalID200ApplicationJSON] = dataclasses.field(default=None)
    
