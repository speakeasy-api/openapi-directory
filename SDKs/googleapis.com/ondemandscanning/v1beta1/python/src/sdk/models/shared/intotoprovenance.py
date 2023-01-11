import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import builderconfig as shared_builderconfig
from ..shared import metadata as shared_metadata
from ..shared import recipe as shared_recipe


@dataclass_json
@dataclasses.dataclass
class InTotoProvenance:
    builder_config: Optional[shared_builderconfig.BuilderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builderConfig') }})
    materials: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    metadata: Optional[shared_metadata.Metadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    recipe: Optional[shared_recipe.Recipe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipe') }})
    
