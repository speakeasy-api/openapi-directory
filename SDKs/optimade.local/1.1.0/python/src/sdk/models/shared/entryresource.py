import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EntryResourceEntryResourceAttributes:
    r"""EntryResourceEntryResourceAttributes
    Contains key-value pairs representing the entry's properties.
    """
    
    last_modified: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    immutable_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('immutable_id') }})
    

@dataclass_json
@dataclasses.dataclass
class EntryResourceResourceLinks:
    r"""EntryResourceResourceLinks
    A Resource Links object
    """
    
    self: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks:
    r"""EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
    A resource object **MAY** contain references to other resource objects (\"relationships\").
    Relationships may be to-one or to-many.
    Relationships can be specified by including a member in a resource's links object.
    """
    
    related: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    self: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class EntryResourceEntryRelationshipsReferenceRelationship:
    r"""EntryResourceEntryRelationshipsReferenceRelationship
    Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
    """
    
    data: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks:
    r"""EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks
    A resource object **MAY** contain references to other resource objects (\"relationships\").
    Relationships may be to-one or to-many.
    Relationships can be specified by including a member in a resource's links object.
    """
    
    related: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    self: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class EntryResourceEntryRelationshipsStructureRelationship:
    r"""EntryResourceEntryRelationshipsStructureRelationship
    Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
    """
    
    data: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class EntryResourceEntryRelationships:
    r"""EntryResourceEntryRelationships
    This model wraps the JSON API Relationships to include type-specific top level keys.
    """
    
    references: Optional[EntryResourceEntryRelationshipsReferenceRelationship] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    structures: Optional[EntryResourceEntryRelationshipsStructureRelationship] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structures') }})
    

@dataclass_json
@dataclasses.dataclass
class EntryResource:
    r"""EntryResource
    The base model for an entry resource.
    """
    
    attributes: EntryResourceEntryResourceAttributes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    links: Optional[EntryResourceResourceLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    relationships: Optional[EntryResourceEntryRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    
