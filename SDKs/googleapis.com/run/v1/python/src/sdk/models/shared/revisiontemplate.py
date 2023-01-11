import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectmeta as shared_objectmeta
from ..shared import revisionspec as shared_revisionspec


@dataclass_json
@dataclasses.dataclass
class RevisionTemplate:
    r"""RevisionTemplate
    RevisionTemplateSpec describes the data a revision should have when created from a template. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
    """
    
    metadata: Optional[shared_objectmeta.ObjectMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: Optional[shared_revisionspec.RevisionSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
