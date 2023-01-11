import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apigatewayapiconfigfile as shared_apigatewayapiconfigfile


@dataclass_json
@dataclasses.dataclass
class ApigatewayAPIConfigGrpcServiceDefinition:
    r"""ApigatewayAPIConfigGrpcServiceDefinition
    A gRPC service definition.
    """
    
    file_descriptor_set: Optional[shared_apigatewayapiconfigfile.ApigatewayAPIConfigFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileDescriptorSet') }})
    source: Optional[list[shared_apigatewayapiconfigfile.ApigatewayAPIConfigFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
