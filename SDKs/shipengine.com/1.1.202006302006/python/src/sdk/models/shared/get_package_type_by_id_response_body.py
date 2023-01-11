import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensions as shared_dimensions


@dataclass_json
@dataclasses.dataclass
class GetPackageTypeByIDResponseBody:
    r"""GetPackageTypeByIDResponseBody
    A package type that a carrier supports for shipment.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dimensions: Optional[shared_dimensions.Dimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    package_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_id') }})
    
