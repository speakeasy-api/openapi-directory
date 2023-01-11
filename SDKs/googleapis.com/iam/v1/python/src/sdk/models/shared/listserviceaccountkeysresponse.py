import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceaccountkey as shared_serviceaccountkey


@dataclass_json
@dataclasses.dataclass
class ListServiceAccountKeysResponse:
    r"""ListServiceAccountKeysResponse
    The service account keys list response.
    """
    
    keys: Optional[list[shared_serviceaccountkey.ServiceAccountKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    
