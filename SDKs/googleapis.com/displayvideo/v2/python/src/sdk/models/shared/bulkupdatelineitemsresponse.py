import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status


@dataclass_json
@dataclasses.dataclass
class BulkUpdateLineItemsResponse:
    r"""BulkUpdateLineItemsResponse
    Response message for LineItemService.BulkUpdateLineItems.
    """
    
    errors: Optional[list[shared_status.Status]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    failed_line_item_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedLineItemIds') }})
    skipped_line_item_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippedLineItemIds') }})
    updated_line_item_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedLineItemIds') }})
    
