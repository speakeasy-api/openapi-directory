import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlemapsunityclientinfo as shared_googlemapsunityclientinfo
from ..shared import googlemapsplayablelocationsv3playerreport as shared_googlemapsplayablelocationsv3playerreport


@dataclass_json
@dataclasses.dataclass
class GoogleMapsPlayablelocationsV3LogPlayerReportsRequest:
    r"""GoogleMapsPlayablelocationsV3LogPlayerReportsRequest
    A request for logging your player's bad location reports.
    """
    
    client_info: Optional[shared_googlemapsunityclientinfo.GoogleMapsUnityClientInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientInfo') }})
    player_reports: Optional[list[shared_googlemapsplayablelocationsv3playerreport.GoogleMapsPlayablelocationsV3PlayerReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerReports') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
