import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import link as shared_link
from ..shared import baserelationshipresource as shared_baserelationshipresource
from ..shared import structureresourceattributes as shared_structureresourceattributes


@dataclass_json
@dataclasses.dataclass
class StructureResourceResourceLinks:
    r"""StructureResourceResourceLinks
    A Resource Links object
    """
    
    self: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks:
    r"""StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
    A resource object **MAY** contain references to other resource objects (\"relationships\").
    Relationships may be to-one or to-many.
    Relationships can be specified by including a member in a resource's links object.
    """
    
    related: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    self: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class StructureResourceEntryRelationshipsReferenceRelationship:
    r"""StructureResourceEntryRelationshipsReferenceRelationship
    Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
    """
    
    data: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks:
    r"""StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks
    A resource object **MAY** contain references to other resource objects (\"relationships\").
    Relationships may be to-one or to-many.
    Relationships can be specified by including a member in a resource's links object.
    """
    
    related: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    self: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class StructureResourceEntryRelationshipsStructureRelationship:
    r"""StructureResourceEntryRelationshipsStructureRelationship
    Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
    """
    
    data: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class StructureResourceEntryRelationships:
    r"""StructureResourceEntryRelationships
    This model wraps the JSON API Relationships to include type-specific top level keys.
    """
    
    references: Optional[StructureResourceEntryRelationshipsReferenceRelationship] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    structures: Optional[StructureResourceEntryRelationshipsStructureRelationship] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structures') }})
    

@dataclass_json
@dataclasses.dataclass
class StructureResource:
    r"""StructureResource
    Representing a structure.
    """
    
    attributes: shared_structureresourceattributes.StructureResourceAttributes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    links: Optional[StructureResourceResourceLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    relationships: Optional[StructureResourceEntryRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    
