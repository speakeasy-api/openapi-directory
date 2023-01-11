import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AddOrDeleteRulesQueryParams:
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dry_run', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AddOrDeleteRulesRequest:
    query_params: AddOrDeleteRulesQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddOrDeleteRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[Any] = dataclasses.field(default=None)
    problem: Optional[Any] = dataclasses.field(default=None)
    add_or_delete_rules_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
