import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributecontext as shared_attributecontext
from ..shared import resourceinfo as shared_resourceinfo


@dataclass_json
@dataclasses.dataclass
class CheckRequest:
    r"""CheckRequest
    Request message for the Check method.
    """
    
    attributes: Optional[shared_attributecontext.AttributeContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    flags: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flags') }})
    resources: Optional[list[shared_resourceinfo.ResourceInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    service_config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    
