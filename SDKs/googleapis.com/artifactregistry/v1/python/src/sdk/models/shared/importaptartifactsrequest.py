import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importaptartifactsgcssource as shared_importaptartifactsgcssource


@dataclass_json
@dataclasses.dataclass
class ImportAptArtifactsRequest:
    r"""ImportAptArtifactsRequest
    The request to import new apt artifacts.
    """
    
    gcs_source: Optional[shared_importaptartifactsgcssource.ImportAptArtifactsGcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    
