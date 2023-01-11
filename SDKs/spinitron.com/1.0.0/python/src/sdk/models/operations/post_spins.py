import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import error as shared_error
from ..shared import spin as shared_spin
from ..shared import validationerror as shared_validationerror


@dataclasses.dataclass
class PostSpinsRequestBody:
    artist: str = dataclasses.field(metadata={'form': { 'field_name': 'artist' }})
    song: str = dataclasses.field(metadata={'form': { 'field_name': 'song' }})
    composer: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'composer' }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'duration' }})
    genre: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'genre' }})
    isrc: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'isrc' }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'label' }})
    live: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'live' }})
    release: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'release' }})
    start: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'start' }})
    

@dataclasses.dataclass
class PostSpinsRequest:
    request: Optional[PostSpinsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PostSpinsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    spin: Optional[shared_spin.Spin] = dataclasses.field(default=None)
    validation_errors: Optional[list[shared_validationerror.ValidationError]] = dataclasses.field(default=None)
    
