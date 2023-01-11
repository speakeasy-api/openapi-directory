import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlemapsunityclientinfo as shared_googlemapsunityclientinfo
from ..shared import googlemapsplayablelocationsv3impression as shared_googlemapsplayablelocationsv3impression


@dataclass_json
@dataclasses.dataclass
class GoogleMapsPlayablelocationsV3LogImpressionsRequest:
    r"""GoogleMapsPlayablelocationsV3LogImpressionsRequest
    A request for logging impressions.
    """
    
    client_info: Optional[shared_googlemapsunityclientinfo.GoogleMapsUnityClientInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientInfo') }})
    impressions: Optional[list[shared_googlemapsplayablelocationsv3impression.GoogleMapsPlayablelocationsV3Impression]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressions') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
