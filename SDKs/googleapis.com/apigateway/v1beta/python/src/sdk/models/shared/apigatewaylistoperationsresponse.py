import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apigatewayoperation as shared_apigatewayoperation


@dataclass_json
@dataclasses.dataclass
class ApigatewayListOperationsResponse:
    r"""ApigatewayListOperationsResponse
    The response message for Operations.ListOperations.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    operations: Optional[list[shared_apigatewayoperation.ApigatewayOperation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    
