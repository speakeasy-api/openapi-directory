import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CategoryResourceAttributes:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryResourceLinks:
    self: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryResourceRelationshipsChildrenData:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryResourceRelationshipsChildrenLinks:
    related: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryResourceRelationshipsChildren:
    data: list[CategoryResourceRelationshipsChildrenData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[CategoryResourceRelationshipsChildrenLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryResourceRelationshipsParentData:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryResourceRelationshipsParentLinks:
    related: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryResourceRelationshipsParent:
    data: CategoryResourceRelationshipsParentData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[CategoryResourceRelationshipsParentLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryResourceRelationships:
    children: CategoryResourceRelationshipsChildren = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('children') }})
    parent: CategoryResourceRelationshipsParent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    

@dataclass_json
@dataclasses.dataclass
class CategoryResource:
    r"""CategoryResource
    Provides information about a category and its ancestry.
    
    """
    
    attributes: CategoryResourceAttributes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: CategoryResourceRelationships = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    links: Optional[CategoryResourceLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
