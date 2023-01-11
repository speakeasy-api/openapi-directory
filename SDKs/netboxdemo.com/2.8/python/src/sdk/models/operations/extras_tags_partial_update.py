import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import tag as shared_tag
from ..shared import tag as shared_tag


@dataclasses.dataclass
class ExtrasTagsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasTagsPartialUpdateRequest:
    path_params: ExtrasTagsPartialUpdatePathParams = dataclasses.field()
    request: shared_tag.TagInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtrasTagsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
