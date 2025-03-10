"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactiondial as shared_googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactiondial
from ..shared import googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactionopenuri as shared_googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactionopenuri
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction:
    r"""Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card."""
    
    dial: Optional[shared_googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactiondial.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dial'), 'exclude': lambda f: f is None }})
    r"""Opens the user's default dialer app with the specified phone number but does not dial automatically."""  
    open_url: Optional[shared_googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactionopenuri.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('openUrl'), 'exclude': lambda f: f is None }})
    r"""Opens the user's default web browser app to the specified uri If the user has an app installed that is registered as the default handler for the URL, then this app will be opened instead, and its icon will be used in the suggested action UI."""  
    postback_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('postbackData'), 'exclude': lambda f: f is None }})
    r"""Opaque payload that the Dialogflow receives in a user event when the user taps the suggested action. This data will be also forwarded to webhook to allow performing custom business logic."""  
    share_location: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('shareLocation'), 'exclude': lambda f: f is None }})
    r"""Opens the device's location chooser so the user can pick a location to send back to the agent."""  
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('text'), 'exclude': lambda f: f is None }})
    r"""Text to display alongside the action."""  
    