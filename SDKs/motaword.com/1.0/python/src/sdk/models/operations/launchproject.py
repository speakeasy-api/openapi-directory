import dataclasses
from typing import Optional
from enum import Enum
from ..shared import error as shared_error
from ..shared import projectlaunchresponse as shared_projectlaunchresponse


@dataclasses.dataclass
class LaunchProjectPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class LaunchProjectRequestBodyPaymentMethodEnum(str, Enum):
    CORPORATE = "corporate"
    CLIENT = "client"
    APP = "app"
    CREDIT = "credit"
    CORPORATE_CARD = "corporate_card"


@dataclasses.dataclass
class LaunchProjectRequestBody:
    bin: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'bin' }})
    budget_code: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'budget_code' }})
    card_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'card_id' }})
    payment_code: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'payment_code' }})
    payment_method: Optional[LaunchProjectRequestBodyPaymentMethodEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'payment_method' }})
    stripe_token: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'stripe_token' }})
    

@dataclasses.dataclass
class LaunchProjectRequest:
    path_params: LaunchProjectPathParams = dataclasses.field()
    request: Optional[LaunchProjectRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class LaunchProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    project_launch_response: Optional[shared_projectlaunchresponse.ProjectLaunchResponse] = dataclasses.field(default=None)
    
