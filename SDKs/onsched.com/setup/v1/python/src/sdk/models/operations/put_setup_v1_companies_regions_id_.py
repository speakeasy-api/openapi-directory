import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import regionupdatemodel as shared_regionupdatemodel
from ..shared import regionviewmodel as shared_regionviewmodel


@dataclasses.dataclass
class PutSetupV1CompaniesRegionsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1CompaniesRegionsIDRequests:
    region_update_model: Optional[shared_regionupdatemodel.RegionUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    region_update_model1: Optional[shared_regionupdatemodel.RegionUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    region_update_model2: Optional[shared_regionupdatemodel.RegionUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    region_update_model3: Optional[shared_regionupdatemodel.RegionUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1CompaniesRegionsIDRequest:
    path_params: PutSetupV1CompaniesRegionsIDPathParams = dataclasses.field()
    request: Optional[PutSetupV1CompaniesRegionsIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1CompaniesRegionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    region_view_model: Optional[shared_regionviewmodel.RegionViewModel] = dataclasses.field(default=None)
    
