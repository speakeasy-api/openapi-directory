"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CheckAnnotation:
    r"""Check Annotation"""
    
    annotation_level: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('annotation_level') }})  
    blob_href: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('blob_href') }})  
    end_column: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('end_column') }})  
    end_line: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('end_line') }})  
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message') }})  
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('path') }})  
    raw_details: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('raw_details') }})  
    start_column: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('start_column') }})  
    start_line: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('start_line') }})  
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title') }})  
    