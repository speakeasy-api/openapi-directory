import dataclasses
from typing import Optional
from ..shared import two_hundredresult as shared_two_hundredresult
from ..shared import four_hundred as shared_four_hundred


@dataclasses.dataclass
class PutPolicyModulePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutPolicyModuleQueryParams:
    metrics: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'metrics', 'style': 'form', 'explode': True }})
    pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutPolicyModuleRequest:
    path_params: PutPolicyModulePathParams = dataclasses.field()
    query_params: PutPolicyModuleQueryParams = dataclasses.field()
    request: str = dataclasses.field(metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclasses.dataclass
class PutPolicyModuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    two_hundred_result: Optional[shared_two_hundredresult.TwoHundredResult] = dataclasses.field(default=None)
    four_hundred: Optional[shared_four_hundred.FourHundred] = dataclasses.field(default=None)
    
