import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getcallresponse as shared_getcallresponse


@dataclass_json
@dataclasses.dataclass
class GetCallsResponseEmbedded:
    r"""GetCallsResponseEmbedded
    A list of call objects. See the [get details of a specific call](#getCall) response fields for a description of the nested objects
    """
    
    calls: Optional[list[shared_getcallresponse.GetCallResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calls') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallsResponseLinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallsResponseLinks:
    self: Optional[GetCallsResponseLinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallsResponse:
    embedded: Optional[GetCallsResponseEmbedded] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[GetCallsResponseLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    record_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_index') }})
    
