import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactgroupresponse as shared_contactgroupresponse


@dataclass_json
@dataclasses.dataclass
class BatchGetContactGroupsResponse:
    r"""BatchGetContactGroupsResponse
    The response to a batch get contact groups request.
    """
    
    responses: Optional[list[shared_contactgroupresponse.ContactGroupResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
