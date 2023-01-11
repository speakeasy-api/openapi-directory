import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insurancenetwork as shared_insurancenetwork


@dataclass_json
@dataclasses.dataclass
class ListInsuranceNetworksResponse:
    r"""ListInsuranceNetworksResponse
    Response message for InsuranceNetworkService.ListInsuranceNetworks
    """
    
    networks: Optional[list[shared_insurancenetwork.InsuranceNetwork]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
