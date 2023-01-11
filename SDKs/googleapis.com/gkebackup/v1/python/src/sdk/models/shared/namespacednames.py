import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namespacedname as shared_namespacedname


@dataclass_json
@dataclasses.dataclass
class NamespacedNames:
    r"""NamespacedNames
    A list of namespaced Kubernetes resources.
    """
    
    namespaced_names: Optional[list[shared_namespacedname.NamespacedName]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespacedNames') }})
    
