import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import tppmessage401_pis as shared_tppmessage401_pis


@dataclass_json
@dataclasses.dataclass
class Error401NgPis:
    r"""Error401NgPis
    NextGen specific definition of reporting error information in case of a HTTP error code 401.
    
    """
    
    links: Optional[dict[str, shared_hreftype.HrefType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    tpp_messages: Optional[list[shared_tppmessage401_pis.TppMessage401Pis]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tppMessages') }})
    
