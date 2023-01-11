import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import collectionoverride as shared_collectionoverride
from ..shared import credential as shared_credential
from ..shared import typeproviderlabelentry as shared_typeproviderlabelentry
from ..shared import operation as shared_operation
from ..shared import options as shared_options


@dataclass_json
@dataclasses.dataclass
class TypeProvider:
    r"""TypeProvider
    A type provider that describes a service-backed Type.
    """
    
    collection_overrides: Optional[list[shared_collectionoverride.CollectionOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionOverrides') }})
    credential: Optional[shared_credential.Credential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential') }})
    custom_certificate_authority_roots: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customCertificateAuthorityRoots') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    descriptor_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptorUrl') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    insert_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTime') }})
    labels: Optional[list[shared_typeproviderlabelentry.TypeProviderLabelEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation: Optional[shared_operation.Operation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    options: Optional[shared_options.Options] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    
