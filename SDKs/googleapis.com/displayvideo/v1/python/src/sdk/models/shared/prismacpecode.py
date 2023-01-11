import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PrismaCpeCode:
    r"""PrismaCpeCode
    Google Payments Center supports searching and filtering on the component fields of this code.
    """
    
    prisma_client_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prismaClientCode') }})
    prisma_estimate_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prismaEstimateCode') }})
    prisma_product_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prismaProductCode') }})
    
