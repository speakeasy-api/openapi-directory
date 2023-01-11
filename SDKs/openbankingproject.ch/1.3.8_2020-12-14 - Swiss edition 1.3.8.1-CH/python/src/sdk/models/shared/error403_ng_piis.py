import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import tppmessage403_piis as shared_tppmessage403_piis


@dataclass_json
@dataclasses.dataclass
class Error403NgPiis:
    r"""Error403NgPiis
    NextGen specific definition of reporting error information in case of a HTTP error code 403.
    
    """
    
    links: Optional[dict[str, shared_hreftype.HrefType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    tpp_messages: Optional[list[shared_tppmessage403_piis.TppMessage403Piis]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tppMessages') }})
    
