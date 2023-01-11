import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lineitem as shared_lineitem


@dataclass_json
@dataclasses.dataclass
class BulkUpdateLineItemsRequestInput:
    r"""BulkUpdateLineItemsRequestInput
    Request message for LineItemService.BulkUpdateLineItems.
    """
    
    line_item_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemIds') }})
    target_line_item: Optional[shared_lineitem.LineItemInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLineItem') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
