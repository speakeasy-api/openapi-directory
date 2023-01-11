import dataclasses
from typing import Optional
from enum import Enum
from ..shared import associationresults as shared_associationresults


@dataclasses.dataclass
class GetGeneHomologAssociationsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetGeneHomologAssociationsHomologyTypeEnum(str, Enum):
    P = "P"
    O = "O"
    LDO = "LDO"


@dataclasses.dataclass
class GetGeneHomologAssociationsQueryParams:
    direct: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direct', 'style': 'form', 'explode': True }})
    direct_taxon: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direct_taxon', 'style': 'form', 'explode': True }})
    evidence: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'evidence', 'style': 'form', 'explode': True }})
    exclude_automatic_assertions: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_automatic_assertions', 'style': 'form', 'explode': True }})
    facet: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet', 'style': 'form', 'explode': True }})
    facet_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_fields', 'style': 'form', 'explode': True }})
    fetch_objects: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fetch_objects', 'style': 'form', 'explode': True }})
    homology_type: Optional[GetGeneHomologAssociationsHomologyTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'homology_type', 'style': 'form', 'explode': True }})
    rows: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    slim: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slim', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    taxon: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'taxon', 'style': 'form', 'explode': True }})
    unselect_evidence: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unselect_evidence', 'style': 'form', 'explode': True }})
    use_compact_associations: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'use_compact_associations', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGeneHomologAssociationsRequest:
    path_params: GetGeneHomologAssociationsPathParams = dataclasses.field()
    query_params: GetGeneHomologAssociationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeneHomologAssociationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    association_results: Optional[shared_associationresults.AssociationResults] = dataclasses.field(default=None)
    
