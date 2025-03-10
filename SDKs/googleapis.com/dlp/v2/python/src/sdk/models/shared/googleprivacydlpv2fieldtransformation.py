"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid
from ..shared import googleprivacydlpv2infotypetransformations as shared_googleprivacydlpv2infotypetransformations
from ..shared import googleprivacydlpv2primitivetransformation as shared_googleprivacydlpv2primitivetransformation
from ..shared import googleprivacydlpv2recordcondition as shared_googleprivacydlpv2recordcondition
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GooglePrivacyDlpV2FieldTransformation:
    r"""The transformation to apply to the field."""
    
    condition: Optional[shared_googleprivacydlpv2recordcondition.GooglePrivacyDlpV2RecordCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('condition'), 'exclude': lambda f: f is None }})
    r"""A condition for determining whether a transformation should be applied to a field."""  
    fields_: Optional[list[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('fields'), 'exclude': lambda f: f is None }})
    r"""Required. Input field(s) to apply the transformation to. When you have columns that reference their position within a list, omit the index from the FieldId. FieldId name matching ignores the index. For example, instead of \\"contact.nums[0].type\\", use \\"contact.nums.type\\"."""  
    info_type_transformations: Optional[shared_googleprivacydlpv2infotypetransformations.GooglePrivacyDlpV2InfoTypeTransformations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('infoTypeTransformations'), 'exclude': lambda f: f is None }})
    r"""A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type."""  
    primitive_transformation: Optional[shared_googleprivacydlpv2primitivetransformation.GooglePrivacyDlpV2PrimitiveTransformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('primitiveTransformation'), 'exclude': lambda f: f is None }})
    r"""A rule for transforming a value."""  
    