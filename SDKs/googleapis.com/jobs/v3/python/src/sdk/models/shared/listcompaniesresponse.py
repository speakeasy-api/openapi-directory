import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import company as shared_company
from ..shared import responsemetadata as shared_responsemetadata


@dataclass_json
@dataclasses.dataclass
class ListCompaniesResponse:
    r"""ListCompaniesResponse
    Output only. The List companies response object.
    """
    
    companies: Optional[list[shared_company.Company]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companies') }})
    metadata: Optional[shared_responsemetadata.ResponseMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
