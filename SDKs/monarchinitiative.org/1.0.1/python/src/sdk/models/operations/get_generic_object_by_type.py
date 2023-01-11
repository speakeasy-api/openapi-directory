import dataclasses
from typing import Optional
from enum import Enum

class GetGenericObjectByTypeTypeEnum(str, Enum):
    GENE = "gene"
    VARIANT = "variant"
    GENOTYPE = "genotype"
    PHENOTYPE = "phenotype"
    DISEASE = "disease"
    GOTERM = "goterm"
    PATHWAY = "pathway"
    ANATOMY = "anatomy"
    SUBSTANCE = "substance"
    INDIVIDUAL = "individual"
    PUBLICATION = "publication"
    MODEL = "model"
    CASE = "case"


@dataclasses.dataclass
class GetGenericObjectByTypePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    type: GetGenericObjectByTypeTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGenericObjectByTypeQueryParams:
    direct: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direct', 'style': 'form', 'explode': True }})
    distinct_counts: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'distinct_counts', 'style': 'form', 'explode': True }})
    evidence: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'evidence', 'style': 'form', 'explode': True }})
    exclude_automatic_assertions: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_automatic_assertions', 'style': 'form', 'explode': True }})
    facet: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet', 'style': 'form', 'explode': True }})
    facet_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_fields', 'style': 'form', 'explode': True }})
    fetch_objects: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fetch_objects', 'style': 'form', 'explode': True }})
    get_association_counts: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'get_association_counts', 'style': 'form', 'explode': True }})
    rows: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    slim: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slim', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    unselect_evidence: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unselect_evidence', 'style': 'form', 'explode': True }})
    use_compact_associations: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'use_compact_associations', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGenericObjectByTypeRequest:
    path_params: GetGenericObjectByTypePathParams = dataclasses.field()
    query_params: GetGenericObjectByTypeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGenericObjectByTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
