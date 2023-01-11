import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import requesttransferactionparam_enum as shared_requesttransferactionparam_enum


@dataclass_json
@dataclasses.dataclass
class UpdateCallRequestTransferAnswerURLDestination:
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCallRequestTransferAnswerURL:
    action: shared_requesttransferactionparam_enum.RequestTransferActionParamEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    destination: UpdateCallRequestTransferAnswerURLDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    
