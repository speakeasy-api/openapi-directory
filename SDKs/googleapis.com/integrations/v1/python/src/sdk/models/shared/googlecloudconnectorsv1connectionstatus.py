"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class GoogleCloudConnectorsV1ConnectionStatusStateEnum(str, Enum):
    r"""State."""
    STATE_UNSPECIFIED = 'STATE_UNSPECIFIED'
    CREATING = 'CREATING'
    ACTIVE = 'ACTIVE'
    INACTIVE = 'INACTIVE'
    DELETING = 'DELETING'
    UPDATING = 'UPDATING'
    ERROR = 'ERROR'
    AUTHORIZATION_REQUIRED = 'AUTHORIZATION_REQUIRED'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudConnectorsV1ConnectionStatus:
    r"""ConnectionStatus indicates the state of the connection."""
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""Description."""  
    state: Optional[GoogleCloudConnectorsV1ConnectionStatusStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('state'), 'exclude': lambda f: f is None }})
    r"""State."""  
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})
    r"""Status provides detailed information for the state."""  
    