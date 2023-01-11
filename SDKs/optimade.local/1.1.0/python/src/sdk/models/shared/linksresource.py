import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LinksResourceLinksResourceAttributes:
    r"""LinksResourceLinksResourceAttributes
    Links endpoint resource object attributes
    """
    
    base_url: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_url') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    homepage: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepage') }})
    link_type: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_type') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    aggregate: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregate') }})
    no_aggregate_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('no_aggregate_reason') }})
    

@dataclass_json
@dataclasses.dataclass
class LinksResourceResourceLinks:
    r"""LinksResourceResourceLinks
    A Resource Links object
    """
    
    self: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks:
    r"""LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
    A resource object **MAY** contain references to other resource objects (\"relationships\").
    Relationships may be to-one or to-many.
    Relationships can be specified by including a member in a resource's links object.
    """
    
    related: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    self: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class LinksResourceEntryRelationshipsReferenceRelationship:
    r"""LinksResourceEntryRelationshipsReferenceRelationship
    Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
    """
    
    data: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks:
    r"""LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks
    A resource object **MAY** contain references to other resource objects (\"relationships\").
    Relationships may be to-one or to-many.
    Relationships can be specified by including a member in a resource's links object.
    """
    
    related: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    self: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class LinksResourceEntryRelationshipsStructureRelationship:
    r"""LinksResourceEntryRelationshipsStructureRelationship
    Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
    """
    
    data: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class LinksResourceEntryRelationships:
    r"""LinksResourceEntryRelationships
    This model wraps the JSON API Relationships to include type-specific top level keys.
    """
    
    references: Optional[LinksResourceEntryRelationshipsReferenceRelationship] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    structures: Optional[LinksResourceEntryRelationshipsStructureRelationship] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structures') }})
    

@dataclass_json
@dataclasses.dataclass
class LinksResource:
    r"""LinksResource
    A Links endpoint resource object
    """
    
    attributes: LinksResourceLinksResourceAttributes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    links: Optional[LinksResourceResourceLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    relationships: Optional[LinksResourceEntryRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    
