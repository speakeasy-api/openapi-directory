import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import tppmessage429_ais as shared_tppmessage429_ais


@dataclass_json
@dataclasses.dataclass
class Error429NgAis:
    r"""Error429NgAis
    NextGen specific definition of reporting error information in case of a HTTP error code 429.
    
    """
    
    links: Optional[dict[str, shared_hreftype.HrefType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    tpp_messages: Optional[list[shared_tppmessage429_ais.TppMessage429Ais]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tppMessages') }})
    
