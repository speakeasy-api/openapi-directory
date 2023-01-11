import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudbaremetalsolutionv2servernetworktemplatelogicalinterface as shared_googlecloudbaremetalsolutionv2servernetworktemplatelogicalinterface


@dataclass_json
@dataclasses.dataclass
class ServerNetworkTemplate:
    r"""ServerNetworkTemplate
    Network template.
    """
    
    applicable_instance_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicableInstanceTypes') }})
    logical_interfaces: Optional[list[shared_googlecloudbaremetalsolutionv2servernetworktemplatelogicalinterface.GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalInterfaces') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
