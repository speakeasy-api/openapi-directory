import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CaOptions:
    r"""CaOptions
    Describes values that are relevant in a CA certificate.
    """
    
    is_ca: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCa') }})
    max_issuer_path_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxIssuerPathLength') }})
    
