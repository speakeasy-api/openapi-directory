import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostOwnershipInstallQueryParams:
    app_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    user_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    model_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modelId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostOwnershipInstallRequest:
    query_params: PostOwnershipInstallQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostOwnershipInstallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
