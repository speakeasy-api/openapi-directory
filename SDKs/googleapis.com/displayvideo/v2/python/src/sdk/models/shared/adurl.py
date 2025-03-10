"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class AdURLTypeEnum(str, Enum):
    r"""The type of the Ad URL."""
    AD_URL_TYPE_UNSPECIFIED = 'AD_URL_TYPE_UNSPECIFIED'
    AD_URL_TYPE_BEACON_IMPRESSION = 'AD_URL_TYPE_BEACON_IMPRESSION'
    AD_URL_TYPE_BEACON_EXPANDABLE_DCM_IMPRESSION = 'AD_URL_TYPE_BEACON_EXPANDABLE_DCM_IMPRESSION'
    AD_URL_TYPE_BEACON_CLICK = 'AD_URL_TYPE_BEACON_CLICK'
    AD_URL_TYPE_BEACON_SKIP = 'AD_URL_TYPE_BEACON_SKIP'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AdURL:
    r"""Additional URLs related to the ad, including beacons."""
    
    type: Optional[AdURLTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})
    r"""The type of the Ad URL."""  
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url'), 'exclude': lambda f: f is None }})
    r"""The URL string value."""  
    