import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class DeletePermissionPathParams:
    permission_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PermissionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePermissionHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePermissionRequest:
    headers: DeletePermissionHeaders = dataclasses.field()
    path_params: DeletePermissionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
