import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1GcsSource:
    r"""GoogleCloudRecommendationengineV1beta1GcsSource
    Google Cloud Storage location for input content. format.
    """
    
    input_uris: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputUris') }})
    json_schema: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonSchema') }})
    
