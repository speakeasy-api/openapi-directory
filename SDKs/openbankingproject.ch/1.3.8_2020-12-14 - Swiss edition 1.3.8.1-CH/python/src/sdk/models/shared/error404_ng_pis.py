import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import tppmessage404_pis as shared_tppmessage404_pis


@dataclass_json
@dataclasses.dataclass
class Error404NgPis:
    r"""Error404NgPis
    NextGen specific definition of reporting error information in case of a HTTP error code 404.
    
    """
    
    links: Optional[dict[str, shared_hreftype.HrefType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    tpp_messages: Optional[list[shared_tppmessage404_pis.TppMessage404Pis]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tppMessages') }})
    
