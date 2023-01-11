import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicebusinesscontext as shared_servicebusinesscontext


@dataclass_json
@dataclasses.dataclass
class FetchVerificationOptionsRequest:
    r"""FetchVerificationOptionsRequest
    Request message for Verifications.FetchVerificationOptions.
    """
    
    context: Optional[shared_servicebusinesscontext.ServiceBusinessContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    
