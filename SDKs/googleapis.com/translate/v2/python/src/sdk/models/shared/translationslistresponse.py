import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import translationsresource as shared_translationsresource


@dataclass_json
@dataclasses.dataclass
class TranslationsListResponse:
    r"""TranslationsListResponse
    The main language translation response message.
    """
    
    translations: Optional[list[shared_translationsresource.TranslationsResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    
