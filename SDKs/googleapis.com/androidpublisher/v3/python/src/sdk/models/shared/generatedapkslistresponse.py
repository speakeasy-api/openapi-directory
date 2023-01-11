import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import generatedapkspersigningkey as shared_generatedapkspersigningkey


@dataclass_json
@dataclasses.dataclass
class GeneratedApksListResponse:
    r"""GeneratedApksListResponse
    Response to list generated APKs.
    """
    
    generated_apks: Optional[list[shared_generatedapkspersigningkey.GeneratedApksPerSigningKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedApks') }})
    
