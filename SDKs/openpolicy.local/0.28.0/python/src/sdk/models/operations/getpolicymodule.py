import dataclasses
from typing import Optional
from ..shared import two_hundredresult as shared_two_hundredresult
from ..shared import four_hundred as shared_four_hundred
from ..shared import four_hundred_and_four as shared_four_hundred_and_four


@dataclasses.dataclass
class GetPolicyModulePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPolicyModuleQueryParams:
    pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPolicyModuleRequest:
    path_params: GetPolicyModulePathParams = dataclasses.field()
    query_params: GetPolicyModuleQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPolicyModuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    two_hundred_result: Optional[shared_two_hundredresult.TwoHundredResult] = dataclasses.field(default=None)
    four_hundred: Optional[shared_four_hundred.FourHundred] = dataclasses.field(default=None)
    four_hundred_and_four: Optional[shared_four_hundred_and_four.FourHundredAndFour] = dataclasses.field(default=None)
    
