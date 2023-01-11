import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlehomeenterprisesdmv1parentrelation as shared_googlehomeenterprisesdmv1parentrelation


@dataclass_json
@dataclasses.dataclass
class GoogleHomeEnterpriseSdmV1Device:
    r"""GoogleHomeEnterpriseSdmV1Device
    Device resource represents an instance of enterprise managed device in the property.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_relations: Optional[list[shared_googlehomeenterprisesdmv1parentrelation.GoogleHomeEnterpriseSdmV1ParentRelation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentRelations') }})
    traits: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traits') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
