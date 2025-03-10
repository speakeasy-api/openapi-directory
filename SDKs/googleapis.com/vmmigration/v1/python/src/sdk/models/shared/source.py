"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import awssourcedetails as shared_awssourcedetails
from ..shared import vmwaresourcedetails as shared_vmwaresourcedetails
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Source:
    r"""Source message describes a specific vm migration Source resource. It contains the source environment information."""
    
    aws: Optional[shared_awssourcedetails.AwsSourceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('aws'), 'exclude': lambda f: f is None }})
    r"""AwsSourceDetails message describes a specific source details for the AWS source type."""  
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('createTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The create time timestamp."""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""User-provided description of the source."""  
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels'), 'exclude': lambda f: f is None }})
    r"""The labels of the source."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Output only. The Source name."""  
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updateTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The update time timestamp."""  
    vmware: Optional[shared_vmwaresourcedetails.VmwareSourceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vmware'), 'exclude': lambda f: f is None }})
    r"""VmwareSourceDetails message describes a specific source details for the vmware source type."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SourceInput:
    r"""Source message describes a specific vm migration Source resource. It contains the source environment information."""
    
    aws: Optional[shared_awssourcedetails.AwsSourceDetailsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('aws'), 'exclude': lambda f: f is None }})
    r"""AwsSourceDetails message describes a specific source details for the AWS source type."""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""User-provided description of the source."""  
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels'), 'exclude': lambda f: f is None }})
    r"""The labels of the source."""  
    vmware: Optional[shared_vmwaresourcedetails.VmwareSourceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vmware'), 'exclude': lambda f: f is None }})
    r"""VmwareSourceDetails message describes a specific source details for the vmware source type."""  
    