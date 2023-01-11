import dataclasses
from typing import Optional
from ..shared import mediatypeholderwrapped as shared_mediatypeholderwrapped


@dataclasses.dataclass
class GetResourcesMediaTypesFormatPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesMediaTypesFormatRequest:
    path_params: GetResourcesMediaTypesFormatPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesMediaTypesFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_type_holder_wrappeds: Optional[list[shared_mediatypeholderwrapped.MediaTypeHolderWrapped]] = dataclasses.field(default=None)
    
