import dataclasses
from typing import Optional
from ..shared import entryinforesponse as shared_entryinforesponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetEntryInfoInfoEntryGetPathParams:
    entry: str = dataclasses.field(metadata={'path_param': { 'field_name': 'entry', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEntryInfoInfoEntryGetRequest:
    path_params: GetEntryInfoInfoEntryGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEntryInfoInfoEntryGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    entry_info_response: Optional[shared_entryinforesponse.EntryInfoResponse] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
