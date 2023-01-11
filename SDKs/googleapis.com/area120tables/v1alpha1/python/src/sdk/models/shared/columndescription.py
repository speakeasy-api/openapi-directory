import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datedetails as shared_datedetails
from ..shared import labeleditem as shared_labeleditem
from ..shared import lookupdetails as shared_lookupdetails
from ..shared import relationshipdetails as shared_relationshipdetails


@dataclass_json
@dataclasses.dataclass
class ColumnDescription:
    r"""ColumnDescription
    Details on a column in the table.
    """
    
    data_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    date_details: Optional[shared_datedetails.DateDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateDetails') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[list[shared_labeleditem.LabeledItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lookup_details: Optional[shared_lookupdetails.LookupDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookupDetails') }})
    multiple_values_disallowed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multipleValuesDisallowed') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    readonly: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readonly') }})
    relationship_details: Optional[shared_relationshipdetails.RelationshipDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipDetails') }})
    
