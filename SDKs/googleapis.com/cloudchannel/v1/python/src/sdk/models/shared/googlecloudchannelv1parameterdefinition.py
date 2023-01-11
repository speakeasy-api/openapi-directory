import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1value as shared_googlecloudchannelv1value

class GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum(str, Enum):
    PARAMETER_TYPE_UNSPECIFIED = "PARAMETER_TYPE_UNSPECIFIED"
    INT64 = "INT64"
    STRING = "STRING"
    DOUBLE = "DOUBLE"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ParameterDefinition:
    r"""GoogleCloudChannelV1ParameterDefinition
    Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.
    """
    
    allowed_values: Optional[list[shared_googlecloudchannelv1value.GoogleCloudChannelV1Value]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedValues') }})
    max_value: Optional[shared_googlecloudchannelv1value.GoogleCloudChannelV1Value] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[shared_googlecloudchannelv1value.GoogleCloudChannelV1Value] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    optional: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optional') }})
    parameter_type: Optional[GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterType') }})
    
