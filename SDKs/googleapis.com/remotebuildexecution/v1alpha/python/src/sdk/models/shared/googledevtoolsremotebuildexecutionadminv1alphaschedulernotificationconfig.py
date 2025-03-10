"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig:
    r"""Defines configurations for an instance's scheduler notifications, where a target Pub/Sub topic will be notified whenever a task (e.g. an action or reservation) completes on this instance."""
    
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('topic'), 'exclude': lambda f: f is None }})
    r"""The Pub/Sub topic resource name to issue notifications to. Note that the topic does not need to be owned by the same project as this instance. Format: `projects//topics/`."""  
    