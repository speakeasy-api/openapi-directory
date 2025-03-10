"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googlemapsplayablelocationsv3playerreport as shared_googlemapsplayablelocationsv3playerreport
from ..shared import googlemapsunityclientinfo as shared_googlemapsunityclientinfo
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleMapsPlayablelocationsV3LogPlayerReportsRequest:
    r"""A request for logging your player's bad location reports."""
    
    client_info: Optional[shared_googlemapsunityclientinfo.GoogleMapsUnityClientInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('clientInfo'), 'exclude': lambda f: f is None }})
    r"""Client information."""  
    player_reports: Optional[list[shared_googlemapsplayablelocationsv3playerreport.GoogleMapsPlayablelocationsV3PlayerReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('playerReports'), 'exclude': lambda f: f is None }})
    r"""Required. Player reports. The maximum number of player reports that you can log at once is 50."""  
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('requestId'), 'exclude': lambda f: f is None }})
    r"""Required. A string that uniquely identifies the log player reports request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in the case of a failure. In that case, the request must be identical to the one that failed."""  
    