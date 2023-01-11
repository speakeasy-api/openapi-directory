import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import softwarerecipeartifactgcs as shared_softwarerecipeartifactgcs
from ..shared import softwarerecipeartifactremote as shared_softwarerecipeartifactremote


@dataclass_json
@dataclasses.dataclass
class SoftwareRecipeArtifact:
    r"""SoftwareRecipeArtifact
    Specifies a resource to be used in the recipe.
    """
    
    allow_insecure: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowInsecure') }})
    gcs: Optional[shared_softwarerecipeartifactgcs.SoftwareRecipeArtifactGcs] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcs') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    remote: Optional[shared_softwarerecipeartifactremote.SoftwareRecipeArtifactRemote] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote') }})
    
