import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import tppmessage403_ais as shared_tppmessage403_ais


@dataclass_json
@dataclasses.dataclass
class Error403NgAis:
    r"""Error403NgAis
    NextGen specific definition of reporting error information in case of a HTTP error code 403.
    
    """
    
    links: Optional[dict[str, shared_hreftype.HrefType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    tpp_messages: Optional[list[shared_tppmessage403_ais.TppMessage403Ais]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tppMessages') }})
    
