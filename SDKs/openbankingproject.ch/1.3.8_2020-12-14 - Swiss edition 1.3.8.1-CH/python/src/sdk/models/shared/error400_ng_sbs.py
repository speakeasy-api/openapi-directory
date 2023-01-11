import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import tppmessage400_sbs as shared_tppmessage400_sbs


@dataclass_json
@dataclasses.dataclass
class Error400NgSbs:
    r"""Error400NgSbs
    NextGen specific definition of reporting error information in case of a HTTP error code 400.
    
    """
    
    links: Optional[dict[str, shared_hreftype.HrefType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    tpp_messages: Optional[list[shared_tppmessage400_sbs.TppMessage400Sbs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tppMessages') }})
    
