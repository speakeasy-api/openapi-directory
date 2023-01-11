import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apigatewayapiconfigfile as shared_apigatewayapiconfigfile


@dataclass_json
@dataclasses.dataclass
class ApigatewayAPIConfigOpenAPIDocument:
    r"""ApigatewayAPIConfigOpenAPIDocument
    An OpenAPI Specification Document describing an API.
    """
    
    document: Optional[shared_apigatewayapiconfigfile.ApigatewayAPIConfigFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    
