import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributemetadata as shared_attributemetadata


@dataclass_json
@dataclasses.dataclass
class ListAttributeMetadataResponse:
    r"""ListAttributeMetadataResponse
    Response message for Locations.ListAttributeMetadata.
    """
    
    attributes: Optional[list[shared_attributemetadata.AttributeMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
