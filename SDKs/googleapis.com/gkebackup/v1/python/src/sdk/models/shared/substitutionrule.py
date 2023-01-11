import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupkind as shared_groupkind


@dataclass_json
@dataclasses.dataclass
class SubstitutionRule:
    r"""SubstitutionRule
    A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to substitution) and substitution logic.
    """
    
    new_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newValue') }})
    original_value_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalValuePattern') }})
    target_group_kinds: Optional[list[shared_groupkind.GroupKind]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroupKinds') }})
    target_json_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetJsonPath') }})
    target_namespaces: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNamespaces') }})
    
