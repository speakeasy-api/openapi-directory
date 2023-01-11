import dataclasses
from typing import Optional
from ..shared import writableprefix as shared_writableprefix
from ..shared import prefix as shared_prefix


@dataclasses.dataclass
class IpamPrefixesCreateRequest:
    request: shared_writableprefix.WritablePrefixInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamPrefixesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    prefix: Optional[shared_prefix.Prefix] = dataclasses.field(default=None)
    
