"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio:
    r"""Specifies an audio clip to be played by the client as part of the response."""
    
    allow_playback_interruption: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allowPlaybackInterruption'), 'exclude': lambda f: f is None }})
    r"""Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request."""  
    audio_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('audioUri'), 'exclude': lambda f: f is None }})
    r"""Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput:
    r"""Specifies an audio clip to be played by the client as part of the response."""
    
    audio_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('audioUri'), 'exclude': lambda f: f is None }})
    r"""Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it."""  
    