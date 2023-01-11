import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class UpdateAMediaItemRequestBody:
    description: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    max_downloads_allowed: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'max_downloads_allowed' }})
    metadata_primary: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'metadata_primary' }})
    metadata_secondary: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'metadata_secondary' }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'mime_type' }})
    public: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'public' }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'title' }})
    

@dataclasses.dataclass
class UpdateAMediaItemRequest:
    request: Optional[UpdateAMediaItemRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateAMediaItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
