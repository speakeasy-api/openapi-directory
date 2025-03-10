"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class WebpushFcmOptions:
    r"""Options for features provided by the FCM SDK for Web."""
    
    analytics_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('analyticsLabel'), 'exclude': lambda f: f is None }})
    r"""Label associated with the message's analytics data."""  
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('link'), 'exclude': lambda f: f is None }})
    r"""The link to open when the user clicks on the notification. For all URL values, HTTPS is required."""  
    