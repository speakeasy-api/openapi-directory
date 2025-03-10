"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import compositetypelabelentry as shared_compositetypelabelentry
from ..shared import operation as shared_operation
from ..shared import templatecontents as shared_templatecontents
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class CompositeTypeStatusEnum(str, Enum):
    UNKNOWN_STATUS = 'UNKNOWN_STATUS'
    DEPRECATED = 'DEPRECATED'
    EXPERIMENTAL = 'EXPERIMENTAL'
    SUPPORTED = 'SUPPORTED'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CompositeType:
    r"""Holds the composite type."""
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""An optional textual description of the resource; provided by the client when the resource is created."""  
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})  
    insert_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('insertTime'), 'exclude': lambda f: f is None }})
    r"""Output only. Creation timestamp in RFC3339 text format."""  
    labels: Optional[list[shared_compositetypelabelentry.CompositeTypeLabelEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labels'), 'exclude': lambda f: f is None }})
    r"""Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Name of the composite type, must follow the expression: `[a-z]([-a-z0-9_.]{0,61}[a-z0-9])?`."""  
    operation: Optional[shared_operation.Operation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('operation'), 'exclude': lambda f: f is None }})
    r"""Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources."""  
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('selfLink'), 'exclude': lambda f: f is None }})
    r"""Output only. Server defined URL for the resource."""  
    status: Optional[CompositeTypeStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})  
    template_contents: Optional[shared_templatecontents.TemplateContents] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('templateContents'), 'exclude': lambda f: f is None }})
    r"""Files that make up the template contents of a template type."""  
    