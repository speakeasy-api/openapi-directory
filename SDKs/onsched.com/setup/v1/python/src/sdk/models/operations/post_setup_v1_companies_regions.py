import dataclasses
from typing import Optional
from ..shared import regioninputmodel as shared_regioninputmodel
from ..shared import regionviewmodel as shared_regionviewmodel


@dataclasses.dataclass
class PostSetupV1CompaniesRegionsRequests:
    region_input_model: Optional[shared_regioninputmodel.RegionInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    region_input_model1: Optional[shared_regioninputmodel.RegionInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    region_input_model2: Optional[shared_regioninputmodel.RegionInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    region_input_model3: Optional[shared_regioninputmodel.RegionInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1CompaniesRegionsRequest:
    request: Optional[PostSetupV1CompaniesRegionsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1CompaniesRegionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    region_view_model: Optional[shared_regionviewmodel.RegionViewModel] = dataclasses.field(default=None)
    
