import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableprefix as shared_writableprefix
from ..shared import prefix as shared_prefix


@dataclasses.dataclass
class IpamPrefixesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamPrefixesPartialUpdateRequest:
    path_params: IpamPrefixesPartialUpdatePathParams = dataclasses.field()
    request: shared_writableprefix.WritablePrefixInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamPrefixesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    prefix: Optional[shared_prefix.Prefix] = dataclasses.field(default=None)
    
