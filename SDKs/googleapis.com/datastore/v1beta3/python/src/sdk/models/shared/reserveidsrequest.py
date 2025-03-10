"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import key as shared_key
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReserveIdsRequest:
    r"""The request for Datastore.ReserveIds."""
    
    database_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('databaseId'), 'exclude': lambda f: f is None }})
    r"""The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database."""  
    keys: Optional[list[shared_key.Key]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('keys'), 'exclude': lambda f: f is None }})
    r"""Required. A list of keys with complete key paths whose numeric IDs should not be auto-allocated."""  
    