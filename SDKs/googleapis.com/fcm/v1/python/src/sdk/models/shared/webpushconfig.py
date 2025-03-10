"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import webpushfcmoptions as shared_webpushfcmoptions
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class WebpushConfig:
    r"""[Webpush protocol](https://tools.ietf.org/html/rfc8030) options."""
    
    data: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('data'), 'exclude': lambda f: f is None }})
    r"""Arbitrary key/value payload. If present, it will override google.firebase.fcm.v1.Message.data."""  
    fcm_options: Optional[shared_webpushfcmoptions.WebpushFcmOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('fcmOptions'), 'exclude': lambda f: f is None }})
    r"""Options for features provided by the FCM SDK for Web."""  
    headers: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('headers'), 'exclude': lambda f: f is None }})
    r"""HTTP headers defined in webpush protocol. Refer to [Webpush protocol](https://tools.ietf.org/html/rfc8030#section-5) for supported headers, e.g. \\"TTL\\": \\"15\\"."""  
    notification: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('notification'), 'exclude': lambda f: f is None }})
    r"""Web Notification options as a JSON object. Supports Notification instance properties as defined in [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification). If present, \\"title\\" and \\"body\\" fields override [google.firebase.fcm.v1.Notification.title] and [google.firebase.fcm.v1.Notification.body]."""  
    