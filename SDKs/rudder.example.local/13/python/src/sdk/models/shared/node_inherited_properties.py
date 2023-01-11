import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NodeInheritedPropertiesPropertiesHierarchyKindEnum(str, Enum):
    GLOBAL = "global"
    GROUP = "group"


@dataclass_json
@dataclasses.dataclass
class NodeInheritedPropertiesPropertiesHierarchy:
    kind: NodeInheritedPropertiesPropertiesHierarchyKindEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class NodeInheritedPropertiesPropertiesProviderEnum(str, Enum):
    INHERITED = "inherited"
    OVERRIDDEN = "overridden"
    PLUGIN_NAME_LIKE_DATASOURCES = "plugin name like datasources"


@dataclass_json
@dataclasses.dataclass
class NodeInheritedPropertiesProperties:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    hierarchy: Optional[list[NodeInheritedPropertiesPropertiesHierarchy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchy') }})
    origval: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origval') }})
    provider: Optional[NodeInheritedPropertiesPropertiesProviderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    

@dataclass_json
@dataclasses.dataclass
class NodeInheritedProperties:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    properties: list[NodeInheritedPropertiesProperties] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
