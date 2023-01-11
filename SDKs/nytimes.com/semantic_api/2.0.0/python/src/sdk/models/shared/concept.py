import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conceptrelation as shared_conceptrelation


@dataclass_json
@dataclasses.dataclass
class ConceptArticleListResultsConcepts:
    nytd_des: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nytd_des') }})
    nytd_org: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nytd_org') }})
    nytd_per: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nytd_per') }})
    

@dataclass_json
@dataclasses.dataclass
class ConceptArticleListResults:
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    byline: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byline') }})
    concepts: Optional[ConceptArticleListResultsConcepts] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concepts') }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    document_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_type') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type_of_material: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type_of_material') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ConceptArticleList:
    results: Optional[list[ConceptArticleListResults]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class ConceptCombinations:
    combination_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combination_note') }})
    combination_source_concept_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combination_source_concept_id') }})
    combination_source_concept_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combination_source_concept_name') }})
    combination_source_concept_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combination_source_concept_type') }})
    combination_target_concept_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combination_target_concept_id') }})
    combination_target_concept_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combination_target_concept_name') }})
    combination_target_concept_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combination_target_concept_type') }})
    

@dataclass_json
@dataclasses.dataclass
class ConceptLinks:
    concept_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_id') }})
    concept_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_name') }})
    concept_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_status') }})
    concept_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_type') }})
    is_times_tag: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_times_tag') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    link_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_id') }})
    link_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_type') }})
    mapping_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapping_type') }})
    relation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relation') }})
    

@dataclass_json
@dataclasses.dataclass
class ConceptScopeNotes:
    scope_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope_note') }})
    scope_note_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope_note_name') }})
    scope_note_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope_note_type') }})
    

@dataclass_json
@dataclasses.dataclass
class ConceptTaxonomy:
    source_concept_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_concept_id') }})
    source_concept_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_concept_name') }})
    source_concept_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_concept_type') }})
    source_concept_vernacular: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_concept_vernacular') }})
    target_concept_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_concept_id') }})
    target_concept_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_concept_name') }})
    target_concept_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_concept_type') }})
    target_concept_vernacular: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_concept_vernacular') }})
    taxonomic_relation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomic_relation') }})
    taxonomic_verification_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomic_verification_status') }})
    

@dataclass_json
@dataclasses.dataclass
class Concept:
    ancestors: Optional[list[shared_conceptrelation.ConceptRelation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ancestors') }})
    article_list: Optional[ConceptArticleList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('article_list') }})
    combinations: Optional[list[ConceptCombinations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combinations') }})
    concept_created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_created') }})
    concept_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_id') }})
    concept_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_name') }})
    concept_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_status') }})
    concept_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_type') }})
    concept_updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_updated') }})
    descendants: Optional[list[shared_conceptrelation.ConceptRelation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descendants') }})
    is_times_tag: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_times_tag') }})
    links: Optional[list[ConceptLinks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    scope_notes: Optional[list[ConceptScopeNotes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope_notes') }})
    search_api_query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_api_query') }})
    taxonomy: Optional[list[ConceptTaxonomy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomy') }})
    vernacular: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vernacular') }})
    
