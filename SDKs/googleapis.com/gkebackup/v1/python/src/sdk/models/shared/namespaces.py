import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Namespaces:
    r"""Namespaces
    A list of Kubernetes Namespaces
    """
    
    namespaces: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaces') }})
    
