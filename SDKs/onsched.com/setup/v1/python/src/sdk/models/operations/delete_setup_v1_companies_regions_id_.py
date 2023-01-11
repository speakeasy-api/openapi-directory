import dataclasses
from typing import Optional
from ..shared import regionviewmodel as shared_regionviewmodel


@dataclasses.dataclass
class DeleteSetupV1CompaniesRegionsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1CompaniesRegionsIDRequest:
    path_params: DeleteSetupV1CompaniesRegionsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1CompaniesRegionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    region_view_model: Optional[shared_regionviewmodel.RegionViewModel] = dataclasses.field(default=None)
    
