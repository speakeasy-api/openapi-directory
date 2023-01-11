import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributevaluemetadata as shared_attributevaluemetadata

class AttributeMetadataValueTypeEnum(str, Enum):
    ATTRIBUTE_VALUE_TYPE_UNSPECIFIED = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
    BOOL = "BOOL"
    ENUM = "ENUM"
    URL = "URL"
    REPEATED_ENUM = "REPEATED_ENUM"


@dataclass_json
@dataclasses.dataclass
class AttributeMetadata:
    r"""AttributeMetadata
    Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together.
    """
    
    deprecated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    group_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupDisplayName') }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    repeatable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatable') }})
    value_metadata: Optional[list[shared_attributevaluemetadata.AttributeValueMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueMetadata') }})
    value_type: Optional[AttributeMetadataValueTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    
