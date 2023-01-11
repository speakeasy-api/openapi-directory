import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import negativekeyword as shared_negativekeyword


@dataclass_json
@dataclasses.dataclass
class BulkEditNegativeKeywordsRequestInput:
    r"""BulkEditNegativeKeywordsRequestInput
    Request message for NegativeKeywordService.BulkEditNegativeKeywords.
    """
    
    created_negative_keywords: Optional[list[shared_negativekeyword.NegativeKeywordInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdNegativeKeywords') }})
    deleted_negative_keywords: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedNegativeKeywords') }})
    
