import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import freeformserviceitem as shared_freeformserviceitem
from ..shared import money as shared_money
from ..shared import structuredserviceitem as shared_structuredserviceitem


@dataclass_json
@dataclasses.dataclass
class ServiceItem:
    r"""ServiceItem
    A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service.
    """
    
    free_form_service_item: Optional[shared_freeformserviceitem.FreeFormServiceItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeFormServiceItem') }})
    price: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    structured_service_item: Optional[shared_structuredserviceitem.StructuredServiceItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structuredServiceItem') }})
    
