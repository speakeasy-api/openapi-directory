import dataclasses
from typing import Optional


@dataclasses.dataclass
class ListFeatureValuesQueryParams:
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListFeatureValuesRequest:
    query_params: ListFeatureValuesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListFeatureValuesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_feature_values_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
