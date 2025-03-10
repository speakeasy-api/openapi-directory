"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import dimensions as shared_dimensions
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class ObaIconPositionEnum(str, Enum):
    r"""The position of the OBA icon on the creative."""
    OBA_ICON_POSITION_UNSPECIFIED = 'OBA_ICON_POSITION_UNSPECIFIED'
    OBA_ICON_POSITION_UPPER_RIGHT = 'OBA_ICON_POSITION_UPPER_RIGHT'
    OBA_ICON_POSITION_UPPER_LEFT = 'OBA_ICON_POSITION_UPPER_LEFT'
    OBA_ICON_POSITION_LOWER_RIGHT = 'OBA_ICON_POSITION_LOWER_RIGHT'
    OBA_ICON_POSITION_LOWER_LEFT = 'OBA_ICON_POSITION_LOWER_LEFT'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ObaIcon:
    r"""OBA Icon for a Creative"""
    
    click_tracking_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('clickTrackingUrl'), 'exclude': lambda f: f is None }})
    r"""Required. The click tracking URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com"""  
    dimensions: Optional[shared_dimensions.Dimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dimensions'), 'exclude': lambda f: f is None }})
    r"""Dimensions."""  
    landing_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('landingPageUrl'), 'exclude': lambda f: f is None }})
    r"""Required. The landing page URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com"""  
    position: Optional[ObaIconPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('position'), 'exclude': lambda f: f is None }})
    r"""The position of the OBA icon on the creative."""  
    program: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('program'), 'exclude': lambda f: f is None }})
    r"""The program of the OBA icon. For example: “AdChoices”."""  
    resource_mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resourceMimeType'), 'exclude': lambda f: f is None }})
    r"""The MIME type of the OBA icon resource."""  
    resource_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resourceUrl'), 'exclude': lambda f: f is None }})
    r"""The URL of the OBA icon resource."""  
    view_tracking_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('viewTrackingUrl'), 'exclude': lambda f: f is None }})
    r"""Required. The view tracking URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com"""  
    