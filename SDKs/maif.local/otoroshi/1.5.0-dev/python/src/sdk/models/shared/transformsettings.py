"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import mappingsettings as shared_mappingsettings
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TransformSettings:
    r"""Settings to transform a JWT token and its location"""
    
    location: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('location') }})  
    mapping_settings: shared_mappingsettings.MappingSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('mappingSettings') }})
    r"""Settings to change fields of a JWT token"""  
    