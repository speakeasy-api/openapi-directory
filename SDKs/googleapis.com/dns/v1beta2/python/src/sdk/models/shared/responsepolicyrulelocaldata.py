import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcerecordset as shared_resourcerecordset


@dataclass_json
@dataclasses.dataclass
class ResponsePolicyRuleLocalData:
    local_datas: Optional[list[shared_resourcerecordset.ResourceRecordSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localDatas') }})
    
