import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import link as shared_link
from ..shared import baserelationshipresource as shared_baserelationshipresource
from ..shared import referenceresourceattributes as shared_referenceresourceattributes


@dataclass_json
@dataclasses.dataclass
class ReferenceResourceResourceLinks:
    r"""ReferenceResourceResourceLinks
    A Resource Links object
    """
    
    self: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks:
    r"""ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
    A resource object **MAY** contain references to other resource objects (\"relationships\").
    Relationships may be to-one or to-many.
    Relationships can be specified by including a member in a resource's links object.
    """
    
    related: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    self: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class ReferenceResourceEntryRelationshipsReferenceRelationship:
    r"""ReferenceResourceEntryRelationshipsReferenceRelationship
    Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
    """
    
    data: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks:
    r"""ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks
    A resource object **MAY** contain references to other resource objects (\"relationships\").
    Relationships may be to-one or to-many.
    Relationships can be specified by including a member in a resource's links object.
    """
    
    related: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    self: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class ReferenceResourceEntryRelationshipsStructureRelationship:
    r"""ReferenceResourceEntryRelationshipsStructureRelationship
    Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
    """
    
    data: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class ReferenceResourceEntryRelationships:
    r"""ReferenceResourceEntryRelationships
    This model wraps the JSON API Relationships to include type-specific top level keys.
    """
    
    references: Optional[ReferenceResourceEntryRelationshipsReferenceRelationship] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    structures: Optional[ReferenceResourceEntryRelationshipsStructureRelationship] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structures') }})
    

@dataclass_json
@dataclasses.dataclass
class ReferenceResource:
    r"""ReferenceResource
    The `references` entries describe bibliographic references.
    
    The following properties are used to provide the bibliographic details:
    
    - **address**, **annote**, **booktitle**, **chapter**, **crossref**, **edition**, **howpublished**, **institution**, **journal**, **key**, **month**, **note**, **number**, **organization**, **pages**, **publisher**, **school**, **series**, **title**, **volume**, **year**: meanings of these properties match the [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf), values are strings;
    - **bib_type**: type of the reference, corresponding to **type** property in the BibTeX specification, value is string;
    - **authors** and **editors**: lists of *person objects* which are dictionaries with the following keys:
        - **name**: Full name of the person, REQUIRED.
        - **firstname**, **lastname**: Parts of the person's name, OPTIONAL.
    - **doi** and **url**: values are strings.
    - **Requirements/Conventions**:
        - **Support**: OPTIONAL support in implementations, i.e., any of the properties MAY be `null`.
        - **Query**: Support for queries on any of these properties is OPTIONAL.
            If supported, filters MAY support only a subset of comparison operators.
        - Every references entry MUST contain at least one of the properties.
    """
    
    attributes: shared_referenceresourceattributes.ReferenceResourceAttributes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    links: Optional[ReferenceResourceResourceLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    relationships: Optional[ReferenceResourceEntryRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    
