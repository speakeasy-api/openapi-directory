"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class RevisionCheckResponseRevisionStatusEnum(str, Enum):
    r"""The result of the revision check."""
    REVISION_STATUS_UNSPECIFIED = 'REVISION_STATUS_UNSPECIFIED'
    OK = 'OK'
    DEPRECATED = 'DEPRECATED'
    INVALID = 'INVALID'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RevisionCheckResponse:
    r"""A third party checking a revision response."""
    
    api_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('apiVersion'), 'exclude': lambda f: f is None }})
    r"""The version of the API this client revision should use when calling API methods."""  
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('kind'), 'exclude': lambda f: f is None }})
    r"""Uniquely identifies the type of this resource. Value is always the fixed string `games#revisionCheckResponse`."""  
    revision_status: Optional[RevisionCheckResponseRevisionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('revisionStatus'), 'exclude': lambda f: f is None }})
    r"""The result of the revision check."""  
    