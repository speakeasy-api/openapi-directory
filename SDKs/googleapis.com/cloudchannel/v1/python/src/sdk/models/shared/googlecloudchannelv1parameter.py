import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1value as shared_googlecloudchannelv1value


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ParameterInput:
    r"""GoogleCloudChannelV1ParameterInput
    Definition for extended entitlement parameters.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[shared_googlecloudchannelv1value.GoogleCloudChannelV1Value] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1Parameter:
    r"""GoogleCloudChannelV1Parameter
    Definition for extended entitlement parameters.
    """
    
    editable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editable') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[shared_googlecloudchannelv1value.GoogleCloudChannelV1Value] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
