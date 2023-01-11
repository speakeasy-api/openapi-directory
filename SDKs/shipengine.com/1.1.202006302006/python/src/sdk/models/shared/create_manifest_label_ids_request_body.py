import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateManifestLabelIdsRequestBody:
    r"""CreateManifestLabelIdsRequestBody
    A create manifest request body
    """
    
    label_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_ids') }})
    
