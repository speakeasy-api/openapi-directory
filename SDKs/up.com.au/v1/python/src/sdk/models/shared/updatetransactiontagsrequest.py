import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taginputresourceidentifier as shared_taginputresourceidentifier


@dataclass_json
@dataclasses.dataclass
class UpdateTransactionTagsRequest:
    r"""UpdateTransactionTagsRequest
    Request to add or remove tags associated with a transaction.
    
    """
    
    data: list[shared_taginputresourceidentifier.TagInputResourceIdentifier] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
