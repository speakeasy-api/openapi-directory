import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adclient as shared_adclient


@dataclass_json
@dataclasses.dataclass
class ListAdClientsResponse:
    r"""ListAdClientsResponse
    Response definition for the ad client list rpc.
    """
    
    ad_clients: Optional[list[shared_adclient.AdClient]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adClients') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
