import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importyumartifactsgcssource as shared_importyumartifactsgcssource


@dataclass_json
@dataclasses.dataclass
class ImportYumArtifactsRequest:
    r"""ImportYumArtifactsRequest
    The request to import new yum artifacts.
    """
    
    gcs_source: Optional[shared_importyumartifactsgcssource.ImportYumArtifactsGcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    
