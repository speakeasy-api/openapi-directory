import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import tag as shared_tag
from ..shared import tag as shared_tag


@dataclasses.dataclass
class UpdateTagPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    tag_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTagHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTagRequestsInput:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    tag: Optional[shared_tag.TagInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    tag1: Optional[shared_tag.TagInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    tag2: Optional[shared_tag.TagInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class UpdateTagRequest:
    headers: UpdateTagHeaders = dataclasses.field()
    path_params: UpdateTagPathParams = dataclasses.field()
    request: UpdateTagRequestsInput = dataclasses.field()
    

@dataclasses.dataclass
class UpdateTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
