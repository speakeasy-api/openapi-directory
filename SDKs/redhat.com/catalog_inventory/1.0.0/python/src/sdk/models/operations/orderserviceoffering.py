import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderparametersserviceoffering as shared_orderparametersserviceoffering


@dataclasses.dataclass
class OrderServiceOfferingPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class OrderServiceOffering200ApplicationJSON:
    task_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task_id') }})
    

@dataclasses.dataclass
class OrderServiceOfferingRequest:
    path_params: OrderServiceOfferingPathParams = dataclasses.field()
    request: shared_orderparametersserviceoffering.OrderParametersServiceOfferingInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class OrderServiceOfferingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    order_service_offering_200_application_json_object: Optional[OrderServiceOffering200ApplicationJSON] = dataclasses.field(default=None)
    
