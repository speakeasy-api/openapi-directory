import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responseheader as shared_responseheader
from ..shared import responsepolicyrule as shared_responsepolicyrule


@dataclass_json
@dataclasses.dataclass
class ResponsePolicyRulesUpdateResponse:
    header: Optional[shared_responseheader.ResponseHeader] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    response_policy_rule: Optional[shared_responsepolicyrule.ResponsePolicyRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responsePolicyRule') }})
    
