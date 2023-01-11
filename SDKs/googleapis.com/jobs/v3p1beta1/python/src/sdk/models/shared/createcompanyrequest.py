import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import company as shared_company


@dataclass_json
@dataclasses.dataclass
class CreateCompanyRequest:
    r"""CreateCompanyRequest
    Input only. The Request of the CreateCompany method.
    """
    
    company: Optional[shared_company.Company] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    
