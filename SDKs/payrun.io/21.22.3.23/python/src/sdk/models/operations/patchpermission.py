import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import permission as shared_permission


@dataclasses.dataclass
class PatchPermissionPathParams:
    permission_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PermissionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchPermissionHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchPermissionRequest:
    headers: PatchPermissionHeaders = dataclasses.field()
    path_params: PatchPermissionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PatchPermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    permission: Optional[shared_permission.Permission] = dataclasses.field(default=None)
    
