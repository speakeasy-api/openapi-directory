import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class FacetsSortKeysEnum(str, Enum):
    SCORE_DESC = "score,,desc"
    SPATIAL_AREA_ASC = "spatial_area,,asc"
    SPATIAL_AREA_DESC = "spatial_area,,desc"
    TEMPORAL_DURATION_ASC = "temporal_duration,,asc"
    TEMPORAL_DURATION_DESC = "temporal_duration,,desc"
    UPDATED_DESC = "updated,,desc"

class FacetsSourceEnum(str, Enum):
    NSIDC = "NSIDC"
    ADE = "ADE"


@dataclasses.dataclass
class FacetsQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    end_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    facet_filters: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facetFilters', 'style': 'form', 'explode': True }})
    search_terms: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'searchTerms', 'style': 'form', 'explode': True }})
    sort_keys: Optional[FacetsSortKeysEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortKeys', 'style': 'form', 'explode': True }})
    source: Optional[FacetsSourceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    spatial: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'spatial', 'style': 'form', 'explode': True }})
    start_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FacetsRequest:
    query_params: FacetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class FacetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    facets_200_application_nsidcfacets_plus_xml_string: Optional[str] = dataclasses.field(default=None)
    
