"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting:
    r"""DoubleClick Campaign Manager (DCM) setting for a manager customer."""
    
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('advertiserId'), 'exclude': lambda f: f is None }})
    r"""Output only. ID of the Campaign Manager advertiser associated with this customer."""  
    network_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('networkId'), 'exclude': lambda f: f is None }})
    r"""Output only. ID of the Campaign Manager network associated with this customer."""  
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('timeZone'), 'exclude': lambda f: f is None }})
    r"""Output only. Time zone of the Campaign Manager network associated with this customer in IANA Time Zone Database format, such as America/New_York."""  
    