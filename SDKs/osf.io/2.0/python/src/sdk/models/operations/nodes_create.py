import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NodesCreateNodeAttributesCategoryEnum(str, Enum):
    ANALYSIS = "analysis"
    COMMUNICATION = "communication"
    DATA = "data"
    HYPOTHESIS = "hypothesis"
    INSTRUMENTATION = "instrumentation"
    METHODS_AND_MEASURES = "methods and measures"
    PROCEDURE = "procedure"
    PROJECT = "project"
    SOFTWARE = "software"
    OTHER = "other"


@dataclass_json
@dataclasses.dataclass
class NodesCreateNodeAttributesInput:
    r"""NodesCreateNodeAttributesInput
    The properties of the node entity.
    """
    
    category: NodesCreateNodeAttributesCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    node_license: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_license') }})
    public: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    template_from: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_from') }})
    

@dataclass_json
@dataclasses.dataclass
class NodesCreateNodeInput:
    attributes: NodesCreateNodeAttributesInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class NodesCreateRequest:
    request: NodesCreateNodeInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class NodesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
