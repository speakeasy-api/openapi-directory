import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import collectionoverride as shared_collectionoverride
from ..shared import credential as shared_credential
from ..shared import options as shared_options


@dataclass_json
@dataclasses.dataclass
class BaseType:
    r"""BaseType
    BaseType that describes a service-backed Type.
    """
    
    collection_overrides: Optional[list[shared_collectionoverride.CollectionOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionOverrides') }})
    credential: Optional[shared_credential.Credential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential') }})
    descriptor_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptorUrl') }})
    options: Optional[shared_options.Options] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
