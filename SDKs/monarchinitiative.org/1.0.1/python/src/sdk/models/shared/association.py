import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import graph as shared_graph
from ..shared import entityreference as shared_entityreference
from ..shared import bioobjectcore as shared_bioobjectcore
from ..shared import annotationextension as shared_annotationextension
from ..shared import relationref as shared_relationref


@dataclass_json
@dataclasses.dataclass
class Association:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    object: shared_bioobjectcore.BioObjectCore = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    relation: shared_relationref.RelationRef = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relation') }})
    subject: shared_bioobjectcore.BioObjectCore = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    evidence_graph: Optional[shared_graph.Graph] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidence_graph') }})
    evidence_types: Optional[list[shared_entityreference.EntityReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidence_types') }})
    negated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negated') }})
    object_eq: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object_eq') }})
    object_extensions: Optional[list[shared_annotationextension.AnnotationExtension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object_extensions') }})
    provided_by: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provided_by') }})
    publications: Optional[list[shared_entityreference.EntityReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publications') }})
    qualifiers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qualifiers') }})
    slim: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slim') }})
    subject_eq: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject_eq') }})
    subject_extensions: Optional[list[shared_annotationextension.AnnotationExtension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject_extensions') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
