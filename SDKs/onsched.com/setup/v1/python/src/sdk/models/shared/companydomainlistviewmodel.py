import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import companydomainviewmodel as shared_companydomainviewmodel


@dataclass_json
@dataclasses.dataclass
class CompanyDomainListViewModel:
    data: Optional[list[shared_companydomainviewmodel.CompanyDomainViewModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    object_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectName') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
