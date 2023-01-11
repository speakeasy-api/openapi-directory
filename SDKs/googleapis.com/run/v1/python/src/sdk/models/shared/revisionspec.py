import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import container as shared_container
from ..shared import localobjectreference as shared_localobjectreference
from ..shared import volume as shared_volume


@dataclass_json
@dataclasses.dataclass
class RevisionSpec:
    r"""RevisionSpec
    RevisionSpec holds the desired state of the Revision (from the client).
    """
    
    container_concurrency: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerConcurrency') }})
    containers: Optional[list[shared_container.Container]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    enable_service_links: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableServiceLinks') }})
    image_pull_secrets: Optional[list[shared_localobjectreference.LocalObjectReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePullSecrets') }})
    service_account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountName') }})
    timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutSeconds') }})
    volumes: Optional[list[shared_volume.Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
