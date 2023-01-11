import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicecredentialtype as shared_servicecredentialtype
from ..shared import collectionlinks as shared_collectionlinks
from ..shared import collectionmetadata as shared_collectionmetadata


@dataclass_json
@dataclasses.dataclass
class ServiceCredentialTypesCollection:
    data: Optional[list[shared_servicecredentialtype.ServiceCredentialType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_collectionlinks.CollectionLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[shared_collectionmetadata.CollectionMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
