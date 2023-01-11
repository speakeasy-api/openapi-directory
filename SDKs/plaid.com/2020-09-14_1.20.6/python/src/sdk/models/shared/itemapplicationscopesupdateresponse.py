import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ItemApplicationScopesUpdateResponse:
    r"""ItemApplicationScopesUpdateResponse
    ItemApplicationScopesUpdateResponse defines the response schema for `/item/application/scopes/update`
    """
    
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    
