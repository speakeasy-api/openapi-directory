import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import requesttransferactionparam_enum as shared_requesttransferactionparam_enum


@dataclass_json
@dataclasses.dataclass
class UpdateCallRequestTransferNccoDestination:
    ncco: list[dict[str, Any]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ncco') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCallRequestTransferNcco:
    action: shared_requesttransferactionparam_enum.RequestTransferActionParamEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    destination: UpdateCallRequestTransferNccoDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    
