import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import brand as shared_brand


@dataclass_json
@dataclasses.dataclass
class ListBrandsResponse:
    r"""ListBrandsResponse
    Response message for ListBrands.
    """
    
    brands: Optional[list[shared_brand.Brand]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brands') }})
    
