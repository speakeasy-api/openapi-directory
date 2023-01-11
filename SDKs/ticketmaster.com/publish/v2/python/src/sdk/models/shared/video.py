import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licensinginformation as shared_licensinginformation
from ..shared import source as shared_source


@dataclass_json
@dataclasses.dataclass
class Video:
    r"""Video
    This class defines an entitlement data on the Publish API
    """
    
    licensing_information: shared_licensinginformation.LicensingInformation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('licensingInformation') }})
    source: shared_source.Source = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    embed_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embedUrl') }})
    
