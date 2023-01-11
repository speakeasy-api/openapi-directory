import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainmapping as shared_domainmapping


@dataclass_json
@dataclasses.dataclass
class ListDomainMappingsResponse:
    r"""ListDomainMappingsResponse
    Response message for DomainMappings.ListDomainMappings.
    """
    
    domain_mappings: Optional[list[shared_domainmapping.DomainMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainMappings') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
