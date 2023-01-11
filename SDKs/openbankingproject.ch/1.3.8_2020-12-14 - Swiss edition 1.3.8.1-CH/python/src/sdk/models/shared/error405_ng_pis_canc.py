import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import tppmessage405_pis_canc as shared_tppmessage405_pis_canc


@dataclass_json
@dataclasses.dataclass
class Error405NgPisCanc:
    r"""Error405NgPisCanc
    NextGen specific definition of reporting error information in case of a HTTP error code 401.
    
    """
    
    links: Optional[dict[str, shared_hreftype.HrefType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    tpp_messages: Optional[list[shared_tppmessage405_pis_canc.TppMessage405PisCanc]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tppMessages') }})
    
