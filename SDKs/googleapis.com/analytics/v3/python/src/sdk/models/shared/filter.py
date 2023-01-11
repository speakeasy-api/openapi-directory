import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filterexpression as shared_filterexpression


@dataclass_json
@dataclasses.dataclass
class FilterAdvancedDetails:
    r"""FilterAdvancedDetails
    Details for the filter of the type ADVANCED.
    """
    
    case_sensitive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseSensitive') }})
    extract_a: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractA') }})
    extract_b: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractB') }})
    field_a: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldA') }})
    field_a_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldAIndex') }})
    field_a_required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldARequired') }})
    field_b: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldB') }})
    field_b_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldBIndex') }})
    field_b_required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldBRequired') }})
    output_constructor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConstructor') }})
    output_to_field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputToField') }})
    output_to_field_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputToFieldIndex') }})
    override_output_field: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideOutputField') }})
    

@dataclass_json
@dataclasses.dataclass
class FilterLowercaseDetails:
    r"""FilterLowercaseDetails
    Details for the filter of the type LOWER.
    """
    
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    field_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldIndex') }})
    

@dataclass_json
@dataclasses.dataclass
class FilterParentLink:
    r"""FilterParentLink
    Parent link for this filter. Points to the account to which this filter belongs.
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class FilterSearchAndReplaceDetails:
    r"""FilterSearchAndReplaceDetails
    Details for the filter of the type SEARCH_AND_REPLACE.
    """
    
    case_sensitive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseSensitive') }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    field_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldIndex') }})
    replace_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceString') }})
    search_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchString') }})
    

@dataclass_json
@dataclasses.dataclass
class FilterUppercaseDetails:
    r"""FilterUppercaseDetails
    Details for the filter of the type UPPER.
    """
    
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    field_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldIndex') }})
    

@dataclass_json
@dataclasses.dataclass
class Filter:
    r"""Filter
    JSON template for an Analytics account filter.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    advanced_details: Optional[FilterAdvancedDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advancedDetails') }})
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    exclude_details: Optional[shared_filterexpression.FilterExpression] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeDetails') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    include_details: Optional[shared_filterexpression.FilterExpression] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeDetails') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    lowercase_details: Optional[FilterLowercaseDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowercaseDetails') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_link: Optional[FilterParentLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentLink') }})
    search_and_replace_details: Optional[FilterSearchAndReplaceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchAndReplaceDetails') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uppercase_details: Optional[FilterUppercaseDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uppercaseDetails') }})
    

@dataclass_json
@dataclasses.dataclass
class FilterInput:
    r"""FilterInput
    JSON template for an Analytics account filter.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    advanced_details: Optional[FilterAdvancedDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advancedDetails') }})
    exclude_details: Optional[shared_filterexpression.FilterExpression] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeDetails') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    include_details: Optional[shared_filterexpression.FilterExpression] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeDetails') }})
    lowercase_details: Optional[FilterLowercaseDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowercaseDetails') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_link: Optional[FilterParentLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentLink') }})
    search_and_replace_details: Optional[FilterSearchAndReplaceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchAndReplaceDetails') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uppercase_details: Optional[FilterUppercaseDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uppercaseDetails') }})
    
