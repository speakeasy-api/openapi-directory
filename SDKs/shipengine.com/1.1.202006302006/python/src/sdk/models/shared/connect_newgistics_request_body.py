import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectNewgisticsRequestBody:
    r"""ConnectNewgisticsRequestBody
    A Newgistics account information request body
    """
    
    induction_site: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('induction_site') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    mailer_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailer_id') }})
    merchant_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant_id') }})
    
